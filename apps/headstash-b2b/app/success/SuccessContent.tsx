"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

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

export default function SuccessContent() {
  const params = useSearchParams();
  const email = params.get("e") ?? "";

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [sellsMerch, setSellsMerch] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    <main className="flex min-h-dvh flex-col items-center justify-center bg-[#0E0E0E] px-6 py-16 text-center">
      {/* Checkmark badge */}
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#F2D35C]/30 bg-[#F2D35C]/10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 13l4 4L19 7"
            stroke="#F2D35C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
  );
}
