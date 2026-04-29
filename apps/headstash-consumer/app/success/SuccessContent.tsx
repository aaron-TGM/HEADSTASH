"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
// Component
// ---------------------------------------------------------------------------
export default function SuccessContent() {
  const params = useSearchParams();
  const email = params.get("e") ?? "";
  const [checkVisible, setCheckVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setCheckVisible(true), 100);
    const t2 = setTimeout(() => {
      if (canvasRef.current) launchConfetti(canvasRef.current);
    }, 350);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <>
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
            style={{ filter: "drop-shadow(0 0 6px rgba(242,211,92,0.6))" }}
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
          You&rsquo;re on the list
        </p>

        <h1
          className="mb-5 text-[56px] leading-none uppercase"
          style={{
            fontFamily: "'Blunt Family', Impact, sans-serif",
            color: "#EDE4D0",
            letterSpacing: "0.02em",
          }}
        >
          Stash locked.
        </h1>

        <p
          className="mb-2 max-w-sm text-base leading-relaxed"
          style={{ color: "#D8D2C2" }}
        >
          We&rsquo;ll reach out when Headstash goes live with your favorite brands.
        </p>

        {email && (
          <p
            className="mb-10 text-[12px]"
            style={{ color: "#D8D2C2", opacity: 0.45, fontFamily: "Inter, sans-serif" }}
          >
            {email}
          </p>
        )}

        {!email && <div className="mb-10" />}

        <Link
          href="/"
          className="text-[11px] tracking-[0.08em] uppercase"
          style={{ color: "#D8D2C2", opacity: 0.5, textDecoration: "none" }}
        >
          &larr; Back to site
        </Link>
      </main>
    </>
  );
}
