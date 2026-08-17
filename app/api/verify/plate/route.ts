import { NextRequest, NextResponse } from "next/server";

const FRSC_VERIFY_URL = "https://nvis.frsc.gov.ng/VehicleManagement/VerifyPlateNo";

function getAttr(tag: string, name: string) {
  const match = tag.match(new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, "i"));
  return match?.[1] ?? "";
}

function decodeEntities(value: string) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function htmlToLines(html: string) {
  const withoutNoise = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(?:div|p|tr|td|th|li|h[1-6]|section|article)>/gi, "\n")
    .replace(/<[^>]+>/g, " ");

  return decodeEntities(withoutNoise)
    .split(/\n+/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function pickDetail(lines: string[], label: RegExp) {
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!label.test(line)) continue;

    const inline = line.replace(label, "").replace(/^\s*[:\-]\s*/, "").trim();
    if (inline) return inline;

    const next = lines[index + 1];
    if (next && next.length < 120) return next;
  }
  return undefined;
}

function parseOfficialResult(html: string) {
  const lines = htmlToLines(html);
  const fullText = lines.join(" | ");

  let status: "assigned" | "unassigned" | "invalid" | "unknown" = "unknown";
  let message = "FRSC returned a response, but Roadbook could not confidently read the verification status.";

  if (/valid\s+and\s+assigned|assigned\s+to\s+(?:the\s+)?vehicle/i.test(fullText)) {
    status = "assigned";
    message = "FRSC/NVIS reports this number plate as valid and assigned.";
  } else if (/valid[^|]{0,80}(?:not|yet)[^|]{0,40}assigned|yet\s+to\s+be\s+assigned|not\s+yet\s+assigned/i.test(fullText)) {
    status = "unassigned";
    message = "FRSC/NVIS reports that the number plate exists but is not yet assigned to a vehicle record.";
  } else if (/invalid\s*(?:\/|or)?\s*wrong\s+number\s+plate|number\s+plate\s+is\s+invalid|invalid\s+number\s+plate/i.test(fullText)) {
    status = "invalid";
    message = "FRSC/NVIS did not recognise this as a valid assigned number plate.";
  }

  const make = pickDetail(lines, /^vehicle\s+make\b/i);
  const color = pickDetail(lines, /^vehicle\s+colou?r\b/i);
  const model = pickDetail(lines, /^vehicle\s+model\b/i);
  const date = pickDetail(lines, /^(?:registration\s+date|date\s+of\s+registration)\b/i);

  return {
    status,
    message,
    details: {
      ...(make ? { make } : {}),
      ...(model ? { model } : {}),
      ...(color ? { color } : {}),
      ...(date ? { registrationDate: date } : {})
    }
  };
}

async function submitToFrsc(plate: string) {
  const initial = await fetch(FRSC_VERIFY_URL, {
    method: "GET",
    cache: "no-store",
    headers: {
      "user-agent": "RoadbookNG/1.0 (+public-interest vehicle verification guide)",
      accept: "text/html,application/xhtml+xml"
    }
  });

  if (!initial.ok) {
    throw new Error(`FRSC initial request failed with ${initial.status}`);
  }

  const initialHtml = await initial.text();
  const forms = [...initialHtml.matchAll(/<form\b([^>]*)>([\s\S]*?)<\/form>/gi)];
  const selected = forms.find((match) => /number\s*plate/i.test(match[2])) ?? forms[0];

  if (!selected) {
    throw new Error("Could not locate the FRSC verification form");
  }

  const formTag = selected[1];
  const formBody = selected[2];
  const action = getAttr(formTag, "action") || FRSC_VERIFY_URL;
  const method = (getAttr(formTag, "method") || "POST").toUpperCase();
  const targetUrl = new URL(action, FRSC_VERIFY_URL).toString();
  const params = new URLSearchParams();
  let plateField = "";

  for (const inputMatch of formBody.matchAll(/<input\b[^>]*>/gi)) {
    const tag = inputMatch[0];
    const name = getAttr(tag, "name");
    if (!name) continue;

    const type = (getAttr(tag, "type") || "text").toLowerCase();
    const value = getAttr(tag, "value");

    if (type === "hidden") {
      params.set(name, value);
      continue;
    }

    if (!plateField && ["text", "search", "tel"].includes(type)) {
      plateField = name;
    }
  }

  if (!plateField) {
    const namedCandidate = [...formBody.matchAll(/<input\b[^>]*>/gi)]
      .map((match) => getAttr(match[0], "name"))
      .find((name) => /plate/i.test(name));
    plateField = namedCandidate || "PlateNo";
  }

  params.set(plateField, plate);

  const cookie = initial.headers.get("set-cookie");
  const commonHeaders: Record<string, string> = {
    "user-agent": "RoadbookNG/1.0 (+public-interest vehicle verification guide)",
    accept: "text/html,application/xhtml+xml",
    referer: FRSC_VERIFY_URL
  };
  if (cookie) commonHeaders.cookie = cookie;

  let response: Response;
  if (method === "GET") {
    const url = new URL(targetUrl);
    params.forEach((value, key) => url.searchParams.set(key, value));
    response = await fetch(url, { method: "GET", cache: "no-store", headers: commonHeaders });
  } else {
    response = await fetch(targetUrl, {
      method: "POST",
      cache: "no-store",
      redirect: "follow",
      headers: {
        ...commonHeaders,
        "content-type": "application/x-www-form-urlencoded"
      },
      body: params.toString()
    });
  }

  if (!response.ok) {
    throw new Error(`FRSC verification request failed with ${response.status}`);
  }

  return parseOfficialResult(await response.text());
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { plate?: unknown };
    const rawPlate = typeof body.plate === "string" ? body.plate : "";
    const plate = rawPlate.toUpperCase().replace(/[^A-Z0-9]/g, "");

    if (plate.length < 5 || plate.length > 12) {
      return NextResponse.json(
        { error: "Enter a valid Nigerian number plate without extra text." },
        { status: 400 }
      );
    }

    const result = await submitToFrsc(plate);
    return NextResponse.json({
      plate,
      source: "FRSC / NVIS",
      checkedAt: new Date().toISOString(),
      ...result
    });
  } catch (error) {
    console.error("Plate verification failed", error);
    return NextResponse.json(
      {
        error: "The FRSC verification service could not be reached or read right now. Your plate number was not stored.",
        fallbackUrl: FRSC_VERIFY_URL
      },
      { status: 502 }
    );
  }
}
