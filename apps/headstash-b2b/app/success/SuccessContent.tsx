"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Lightweight canvas confetti (no external dependency)
// ---------------------------------------------------------------------------
type Particle = {
  x: number; y: number; vx: number; vy: number;
  color: string; size: number; rotation: number; spin: number; opacity: number;
};

const CONFETTI_COLORS = [
  "#F2D35C", "#EDE4D0", "#A8D8A8", "#FFB347", "#C5A3FF", "#87CEEB",
];

function launchConfetti(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles: Particle[] = Array.from({ length: 120 }, () => ({
    x: canvas.width / 2 + (Math.random() - 0.5) * 80,
    y: canvas.height * 0.38,
    vx: (Math.random() - 0.5) * 12,
    vy: -(Math.random() * 10 + 6),
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)] ?? "#F2D35C",
    size: Math.random() * 7 + 4,
    rotation: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.3,
    opacity: 1,
  }));

  let frame: number;
  const gravity = 0.35;
  const drag = 0.99;

  function draw() {
    ctx!.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    for (const p of particles) {
      if (p.opacity <= 0) continue;
      alive = true;
      p.vy += gravity;
      p.vx *= drag;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.spin;
      if (p.y > canvas.height * 0.75) p.opacity -= 0.025;

      ctx!.save();
      ctx!.globalAlpha = Math.max(0, p.opacity);
      ctx!.translate(p.x, p.y);
      ctx!.rotate(p.rotation);
      ctx!.fillStyle = p.color;
      ctx!.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx!.restore();
    }

    if (alive) {
      frame = requestAnimationFrame(draw);
    } else {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  frame = requestAnimationFrame(draw);
  return () => cancelAnimationFrame(frame);
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  background: "rgba(237,228,208,0.06)",
  border: "0.5px solid rgba(237,228,208,0.2)",
  borderRadius: "6px",
  padding: "12px 14px",
  color: "#EDE4D0",
  fontSize: "14px",
  fontFamily: "Inter, sans-serif",
  outline: "none",
};

const RADIO_OPTIONS = [
  { value: "yes-actively", label: "Yes, actively" },
  { value: "done-some", label: "We've done some" },
  { value: "not-yet", label: "Not yet" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function SuccessContent() {
  const params = useSearchParams();
  const email = params.get("e") ?? "";

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [sellsMerch, setSellsMerch] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checkVisible, setCheckVisible] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animate checkmark in, then fire confetti
  useEffect(() => {
    const t1 = setTimeout(() => setCheckVisible(true), 100);
    const t2 = setTimeout(() => {
      if (canvasRef.current) launchConfetti(canvasRef.current);
    }, 350);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !brand.trim() || !sellsMerch) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/brand-inquiries/enrich", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, name: name.trim(), brand: brand.trim(), sellsMerch }),
      });
      if (res.ok) {
        setSubmitted(true);
        // Second confetti burst on form submit
        if (canvasRef.current) launchConfetti(canvasRef.current);
      } else {
        const data = await res.json().catch(() => ({}));
        setError((data as { error?: string }).error || "Something went wrong. Try again.");
        setLoading(false);
      }
    } catch {
      setError("Network error. Try again.");
      setLoading(false);
    }
  }

  return (
    <>
      {/* Full-viewport confetti canvas, pointer-events off so it doesn't block clicks */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 50,
        }}
        aria-hidden="true"
      />

      <main className="flex min-h-dvh flex-col items-center justify-center bg-[#0E0E0E] px-6 py-16 text-center">
        {/* Animated checkmark badge */}
        <div
          style={{
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            border: "1.5px solid rgba(242,211,92,0.4)",
            background: "rgba(242,211,92,0.08)",
            transform: checkVisible ? "scale(1)" : "scale(0.4)",
            opacity: checkVisible ? 1 : 0,
            transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease",
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            style={{
              filter: "drop-shadow(0 0 6px rgba(242,211,92,0.6))",
            }}
          >
            <path
              d="M5 13l4 4L19 7"
              stroke="#F2D35C"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="28"
              strokeDashoffset={checkVisible ? "0" : "28"}
              style={{ transition: "stroke-dashoffset 0.5s ease 0.3s" }}
            />
          </svg>
        </div>

        <p
          className="mb-3 text-[10px] tracking-[0.25em] uppercase"
          style={{ color: "#F2D35C", fontFamily: "'Blunt Family', Impact, sans-serif" }}
        >
          Request received
        </p>

        <h1
          className="mb-5 text-[56px] leading-none uppercase"
          style={{
            fontFamily: "'Blunt Family', Impact, sans-serif",
            color: "#EDE4D0",
            letterSpacing: "0.02em",
          }}
        >
          You&rsquo;re in.
        </h1>

        {submitted ? (
          <>
            <p className="mb-10 max-w-sm text-base leading-relaxed" style={{ color: "#D8D2C2" }}>
              Got it -- we have everything we need. Talk soon.
            </p>
            <Link
              href="/"
              className="text-[11px] tracking-[0.08em] uppercase"
              style={{ color: "#D8D2C2", opacity: 0.5, textDecoration: "none" }}
            >
              &larr; Back to site
            </Link>
          </>
        ) : (
          <>
            <p className="mb-8 max-w-sm text-sm leading-relaxed" style={{ color: "#D8D2C2", opacity: 0.75 }}>
              One quick thing -- helps us prep before we talk.
            </p>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-sm text-left"
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              <div>
                <label
                  htmlFor="sf-name"
                  style={{ display: "block", color: "#D8D2C2", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px", fontFamily: "Inter, sans-serif" }}
                >
                  Your name
                </label>
                <input
                  id="sf-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First Last"
                  autoComplete="name"
                  style={INPUT_STYLE}
                />
              </div>

              <div>
                <label
                  htmlFor="sf-brand"
                  style={{ display: "block", color: "#D8D2C2", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px", fontFamily: "Inter, sans-serif" }}
                >
                  Brand name
                </label>
                <input
                  id="sf-brand"
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="Your brand"
                  style={INPUT_STYLE}
                />
              </div>

              <div>
                <p
                  style={{ color: "#D8D2C2", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px", fontFamily: "Inter, sans-serif" }}
                >
                  Do you already make and sell branded merch?
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {RADIO_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer",
                        padding: "10px 14px",
                        borderRadius: "6px",
                        border: `0.5px solid ${sellsMerch === opt.value ? "rgba(242,211,92,0.5)" : "rgba(237,228,208,0.15)"}`,
                        background: sellsMerch === opt.value ? "rgba(242,211,92,0.07)" : "transparent",
                        transition: "border-color 0.15s, background 0.15s",
                      }}
                    >
                      <input
                        type="radio"
                        name="sells-merch"
                        value={opt.value}
                        checked={sellsMerch === opt.value}
                        onChange={() => setSellsMerch(opt.value)}
                        style={{ accentColor: "#F2D35C", width: "15px", height: "15px", flexShrink: 0 }}
                      />
                      <span style={{ color: "#EDE4D0", fontSize: "13.5px", fontFamily: "Inter, sans-serif" }}>
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {error && (
                <p style={{ color: "#E07070", fontSize: "12px", fontFamily: "Inter, sans-serif", margin: 0 }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  marginTop: "6px",
                  padding: "14px",
                  background: "#F2D35C",
                  color: "#0E0E0E",
                  borderRadius: "6px",
                  border: "none",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "Inter, sans-serif",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                  width: "100%",
                }}
              >
                {loading ? "Sending\u2026" : "Submit \u2197"}
              </button>

              <Link
                href="/"
                className="text-center text-[11px] tracking-[0.08em] uppercase"
                style={{ color: "#D8D2C2", opacity: 0.4, textDecoration: "none" }}
              >
                Skip &rarr;
              </Link>
            </form>
          </>
        )}
      </main>
    </>
  );
}
