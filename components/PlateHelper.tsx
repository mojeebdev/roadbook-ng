"use client";

import { useMemo, useState } from "react";

export function PlateHelper() {
  const [plate, setPlate] = useState("");
  const cleaned = useMemo(() => plate.toUpperCase().replace(/[^A-Z0-9-]/g, "").slice(0, 12), [plate]);

  return (
    <div className="plateTool">
      <label htmlFor="plate">Type the plate exactly as displayed</label>
      <div className="plateInputWrap">
        <span className="plateFlag" aria-hidden="true" />
        <input
          id="plate"
          value={cleaned}
          onChange={(e) => setPlate(e.target.value)}
          placeholder="ABC-123-XY"
          autoCapitalize="characters"
          spellCheck={false}
        />
        <span className="plateNG">NG</span>
      </div>
      <p>
        Roadbook does not look up owners or expose personal data. Use this helper to clean the format,
        then verify the plate directly with FRSC NVIS.
      </p>
      <a className="button primary" href="https://nvis.frsc.gov.ng/" target="_blank" rel="noreferrer">
        Verify {cleaned || "plate"} on FRSC NVIS ↗
      </a>
    </div>
  );
}
