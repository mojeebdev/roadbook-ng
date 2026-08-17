"use client";

import { FormEvent, useState } from "react";
import styles from "./PlateVerifier.module.css";

type VerifyResponse = {
  plate?: string;
  source?: string;
  checkedAt?: string;
  status?: "assigned" | "unassigned" | "invalid" | "unknown";
  message?: string;
  details?: {
    make?: string;
    model?: string;
    color?: string;
    registrationDate?: string;
  };
  error?: string;
  fallbackUrl?: string;
};

export function PlateVerifier() {
  const [plate, setPlate] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerifyResponse | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleaned = plate.trim();
    if (!cleaned) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/verify/plate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ plate: cleaned })
      });
      const data = (await response.json()) as VerifyResponse;
      setResult(data);
    } catch {
      setResult({ error: "Roadbook could not complete the verification request. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  const detailEntries = result?.details
    ? [
        ["Vehicle make", result.details.make],
        ["Model", result.details.model],
        ["Colour", result.details.color],
        ["Registration date", result.details.registrationDate]
      ].filter((entry): entry is [string, string] => Boolean(entry[1]))
    : [];

  return (
    <div className={styles.shell}>
      <div className={styles.headingRow}>
        <div>
          <span className={styles.kicker}>Live public check</span>
          <h2>Verify a Nigerian number plate here.</h2>
          <p>
            Roadbook sends the plate to the public FRSC/NVIS checker and brings the public verification response back here.
            We do not save the plate number.
          </p>
        </div>
        <div className={styles.sourceBadge}>FRSC / NVIS</div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="plate-number">Number plate</label>
        <div className={styles.inputRow}>
          <input
            id="plate-number"
            name="plate"
            value={plate}
            onChange={(event) => setPlate(event.target.value.toUpperCase())}
            placeholder="ABC123XY"
            autoCapitalize="characters"
            autoComplete="off"
            spellCheck={false}
            maxLength={14}
            aria-describedby="plate-help"
          />
          <button type="submit" disabled={loading || !plate.trim()}>
            {loading ? "Checking…" : "Verify plate"}
          </button>
        </div>
        <small id="plate-help">Spaces and hyphens are removed automatically before the official check.</small>
      </form>

      {result && (
        <div className={`${styles.result} ${result.error ? styles.error : styles[result.status ?? "unknown"]}`} aria-live="polite">
          {result.error ? (
            <>
              <div className={styles.resultTop}>
                <span>Official service unavailable</span>
                <b>!</b>
              </div>
              <p>{result.error}</p>
              {result.fallbackUrl && (
                <a href={result.fallbackUrl} target="_blank" rel="noreferrer">Open FRSC directly ↗</a>
              )}
            </>
          ) : (
            <>
              <div className={styles.resultTop}>
                <span>{result.plate}</span>
                <b>{result.status === "assigned" ? "✓" : result.status === "invalid" ? "×" : "i"}</b>
              </div>
              <h3>{result.message}</h3>
              {detailEntries.length > 0 && (
                <dl className={styles.details}>
                  {detailEntries.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <div className={styles.meta}>
                <span>Source: {result.source}</span>
                {result.checkedAt && <span>Checked {new Date(result.checkedAt).toLocaleString()}</span>}
              </div>
              {result.status === "unknown" && (
                <p className={styles.unknownNote}>
                  The official page responded, but Roadbook could not safely classify it. Confirm on FRSC before relying on the result.
                </p>
              )}
            </>
          )}
        </div>
      )}

      <div className={styles.privacyNote}>
        <strong>What Roadbook does not do</strong>
        <span>We do not expose owner identity, store your query, or claim to replace the FRSC record.</span>
      </div>
    </div>
  );
}
