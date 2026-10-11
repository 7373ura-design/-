import { ImageResponse } from "next/og";

export const alt = "NAMI — Japanese Perspective on Contemporary Australian Living";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#F7F1E5",
          color: "#073B5C",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 120,
            top: 70,
            width: 260,
            height: 260,
            borderRadius: 9999,
            background: "#F04B32",
          }}
        />
        <svg width="1200" height="260" viewBox="0 0 1200 260" style={{ position: "absolute", left: 0, bottom: 0 }}>
          <path d="M0 110 C 200 30, 360 30, 520 90 S 860 170, 1040 100 S 1140 60, 1200 70 L 1200 260 L 0 260 Z" fill="#75C9D5" />
          <path d="M0 150 C 180 90, 380 100, 560 140 S 900 190, 1200 120 L 1200 260 L 0 260 Z" fill="#008FB5" />
          <path d="M0 200 C 220 160, 420 170, 640 196 S 1020 220, 1200 186 L 1200 260 L 0 260 Z" fill="#075985" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", padding: "110px 90px" }}>
          <div style={{ fontSize: 128, letterSpacing: 28 }}>NAMI</div>
          <div style={{ fontSize: 22, letterSpacing: 9, marginTop: 8, fontFamily: "sans-serif" }}>
            NEST AND MEMORIES INSIDE
          </div>
          <div style={{ fontSize: 30, marginTop: 36, color: "#075985" }}>
            Japanese perspective on contemporary Australian living
          </div>
        </div>
      </div>
    ),
    size,
  );
}
