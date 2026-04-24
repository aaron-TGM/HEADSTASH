import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Headstash - Own your customer.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Satori (@vercel/og) does not support WOFF2; use system sans + weight instead of Blunt. */
const DISPLAY =
  'system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export default async function OpenGraphImage() {
  const logoBuf = await fetch(
    new URL("../public/brand/headstash-logo-hit.png", import.meta.url),
  ).then((r) => r.arrayBuffer());
  const logoSrc = `data:image/png;base64,${Buffer.from(logoBuf).toString("base64")}`;

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
          padding: "60px 72px 64px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 82% 18%, rgba(242,211,92,0.18), rgba(242,211,92,0) 55%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 22, zIndex: 1 }}>
          <img src={logoSrc} alt="" width={96} height={96} style={{ objectFit: "contain" }} />
          <div
            style={{
              fontFamily: DISPLAY,
              fontWeight: 900,
              fontSize: 104,
              letterSpacing: "0.12em",
              color: "#EDE4D0",
              lineHeight: 1,
            }}
          >
            HEADSTASH
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 980, zIndex: 1 }}>
          <div
            style={{
              fontFamily: DISPLAY,
              fontWeight: 800,
              color: "#F2D35C",
              fontSize: 28,
              letterSpacing: "0.28em",
            }}
          >
            THE LOYALTY LAYER FOR CANNABIS BRANDS
          </div>
          <div
            style={{
              fontFamily: DISPLAY,
              fontWeight: 900,
              fontSize: 172,
              lineHeight: 0.92,
              letterSpacing: "0.005em",
              color: "#EDE4D0",
            }}
          >
            Own your<br />customer.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            zIndex: 1,
            borderTop: "1px solid rgba(237,228,208,0.18)",
            paddingTop: 18,
          }}
        >
          <div
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              color: "#D8D2C2",
              fontSize: 22,
              letterSpacing: "0.22em",
            }}
          >
            GETHEADSTASH.COM
          </div>
          <div
            style={{
              color: "#F2D35C",
              fontFamily: DISPLAY,
              fontWeight: 800,
              fontSize: 22,
              letterSpacing: "0.24em",
            }}
          >
            EARLY ACCESS · JUNE 2026
          </div>
        </div>
      </div>
    ),
    size,
  );
}
