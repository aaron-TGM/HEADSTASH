import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Headstash - Save the receipt. Hear from the brand.";
export const size = {
  width: 1200,
  height: 630,
};
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
          background: "#0E0E0E",
          color: "#EDE4D0",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            fontSize: 70,
            fontWeight: 700,
            letterSpacing: "0.15em",
          }}
        >
          HEADSTASH
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 960,
          }}
        >
          <div
            style={{
              color: "#F2D35C",
              fontSize: 24,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Save the receipt. Hear from the brand.
          </div>
          <div
            style={{
              fontSize: 52,
              lineHeight: 1.1,
              fontWeight: 600,
            }}
          >
            One app for every cannabis brand you buy.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
