"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { states } from "@/data/states";

type Profile = "owner" | "driver" | "commercial" | "ridehail" | "motorcycle";

const profiles: { value: Profile; label: string; note: string }[] = [
  { value: "owner", label: "Private car owner", note: "You own and use a private vehicle." },
  { value: "driver", label: "Private driver", note: "You drive a private vehicle, but ownership may be someone else's." },
  { value: "commercial", label: "Commercial driver", note: "Taxi, bus, truck or other commercial driving." },
  { value: "ridehail", label: "Ride-hailing driver", note: "Platform/e-hailing use can add state or platform requirements." },
  { value: "motorcycle", label: "Motorcycle / tricycle", note: "Two- or three-wheel vehicle use." }
];

type Item = {
  title: string;
  href?: string;
  level: "must" | "check" | "safety";
  why: string;
};

export function RoadReadyChecklist() {
  const [profile, setProfile] = useState<Profile>("owner");
  const [state, setState] = useState("Lagos");
  const [tinted, setTinted] = useState(false);

  const items = useMemo<Item[]>(() => {
    const result: Item[] = [
      {
        title: "Valid driver's licence",
        href: "/documents/drivers-licence",
        level: "must",
        why: profile === "owner" ? "Required for the person driving the vehicle." : "Your licence must cover the vehicle class you drive."
      },
      {
        title: "Valid number plate + registration record",
        href: "/documents/number-plate",
        level: "must",
        why: "The vehicle should be correctly registered and the plate verifiable in the official system."
      },
      {
        title: "Motor third-party insurance (minimum)",
        href: "/documents/motor-insurance",
        level: "must",
        why: "Motor third-party insurance is the compulsory minimum; verify the policy rather than relying on paper alone."
      },
      {
        title: "Road-safety equipment",
        level: "safety",
        why: "Keep required safety items serviceable, including spare tyre, fire extinguisher and caution sign."
      }
    ];

    if (profile !== "driver") {
      result.splice(2, 0,
        {
          title: "Vehicle licence / current state vehicle particulars",
          href: "/documents/vehicle-licence",
          level: "must",
          why: "Keep the state-administered vehicle licensing record current."
        },
        {
          title: "Proof of ownership",
          href: "/documents/proof-of-ownership",
          level: "must",
          why: "Ownership details should match the actual owner and vehicle identifiers."
        },
        {
          title: "Police e-CMR record",
          href: "/documents/police-cmr",
          level: "must",
          why: "NPF CMRIS states that motor vehicle owners are required to register vehicles in the Central Motor Registry."
        }
      );
    }

    if (["commercial", "ridehail"].includes(profile)) {
      result.push({
        title: "Roadworthiness / vehicle inspection",
        href: "/documents/roadworthiness",
        level: "check",
        why: `Commercial use commonly attracts inspection/roadworthiness obligations. Confirm the current ${state} process.`
      });
    }

    if (profile === "commercial") {
      result.push({
        title: "Commercial licence class + medical requirements",
        href: "/documents/drivers-licence",
        level: "must",
        why: "FRSC directs commercial licence applicants to a capture centre with the required medical and driving-school documents."
      });
      result.push({
        title: "Speed-limiting device where applicable",
        level: "check",
        why: "FRSC enforces speed-limiter requirements for covered commercial/fleet vehicle categories."
      });
    }

    if (profile === "ridehail") {
      result.push({
        title: `${state} ride-hailing / operator requirements`,
        level: "check",
        why: "Ride-hailing permits, inspection and operator rules can be state-specific; verify them before commercial use."
      });
    }

    if (profile === "motorcycle") {
      result.push({
        title: "Correct motorcycle/tricycle licence class",
        href: "/documents/drivers-licence",
        level: "must",
        why: "Your licence class must cover the motorcycle/tricycle category you operate."
      });
    }

    if (tinted) {
      result.push({
        title: "Check current tinted-glass permit/enforcement status",
        href: "/documents/tinted-glass",
        level: "check",
        why: "The policy has been affected by litigation and changing enforcement directions. Check the latest NPF position before relying on old notices."
      });
    }
    return result;
  }, [profile, state, tinted]);

  return (
    <div className="checklistTool">
      <div className="toolControls">
        <label>
          I am a
          <select value={profile} onChange={(e) => setProfile(e.target.value as Profile)}>
            {profiles.map((item) => (
              <option value={item.value} key={item.value}>{item.label}</option>
            ))}
          </select>
        </label>
        <label>
          State / FCT
          <select value={state} onChange={(e) => setState(e.target.value)}>
            {states.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="toggleRow">
          <input type="checkbox" checked={tinted} onChange={(e) => setTinted(e.target.checked)} />
          <span>My vehicle has tinted / obscured glass</span>
        </label>
      </div>

      <div className="profileNote">
        {profiles.find((item) => item.value === profile)?.note}
        <strong> Showing the federal baseline + flags to verify for {state}.</strong>
      </div>

      <div className="generatedList">
        {items.map((item, index) => (
          <div className="generatedItem" key={`${item.title}-${index}`}>
            <span className={`levelDot ${item.level}`} aria-hidden="true" />
            <div>
              <div className="itemTopline">
                <strong>{item.title}</strong>
                <span className={`miniTag ${item.level}`}>
                  {item.level === "must" ? "Core" : item.level === "check" ? "Check locally" : "Safety"}
                </span>
              </div>
              <p>{item.why}</p>
              {item.href && <Link href={item.href}>Open guide →</Link>}
            </div>
          </div>
        ))}
      </div>

      <div className="callout amber">
        <strong>State-specific means state-specific.</strong>
        <span>
          Roadworthiness, local vehicle fees, ride-hailing requirements and inspection procedures can change by state.
          Roadbook will not turn one state's process into a fake national rule.
        </span>
      </div>
    </div>
  );
}
