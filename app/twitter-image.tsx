import { ImageResponse } from "next/og";

export const alt = "Roadbook NG — Nigerian Driver & Vehicle Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#073f28",
          color: "white",
          padding: "72px 84px",
          fontFamily: "Arial, Helvetica, sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <div
            style={{
              width: 112,
              height: 112,
              borderRadius: 28,
              background: "#0d6b3d",
              border: "2px solid #23814f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 72,
              fontWeight: 800
            }}
          >
            R
          </div>
          <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: "-2px" }}>Roadbook NG</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.04, fontWeight: 800, maxWidth: 900 }}>
            Know what you need. Know who handles it.
          </div>
          <div style={{ color: "#bcefd0", fontSize: 28, lineHeight: 1.4, maxWidth: 930 }}>
            Nigeria&apos;s independent guide to vehicle particulars, road rules, official verification and road-ready checklists.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#d7e6dc" }}>
          <span>Independent • Official-source links • No signup</span>
          <span>Roadbook NG</span>
        </div>
      </div>
    ),
    size
  );
}
