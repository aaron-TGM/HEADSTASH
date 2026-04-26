import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're in · Headstash",
  description: "We received your request. We'll be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-[#0E0E0E] px-6 text-center">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#F2D35C]/30 bg-[#F2D35C]/10">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
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
        className="lb mb-3 text-[10px] tracking-[0.25em] uppercase"
        style={{ color: "#F2D35C", fontFamily: "'Bebas Neue', Impact, sans-serif" }}
      >
        Request received
      </p>

      <h1
        className="mb-5 text-[56px] leading-none uppercase"
        style={{
          fontFamily: "'Bebas Neue', Impact, sans-serif",
          color: "#EDE4D0",
          letterSpacing: "0.02em",
        }}
      >
        You&rsquo;re in.
      </h1>

      <p
        className="mb-10 max-w-sm text-base leading-relaxed"
        style={{ color: "#D8D2C2" }}
      >
        We&rsquo;ll review your request and reach out within one business day to
        discuss onboarding and lock in your founders&rsquo; rate.
      </p>

      <Link
        href="/"
        className="text-[11px] tracking-[0.08em] uppercase"
        style={{ color: "#D8D2C2", opacity: 0.5, textDecoration: "none" }}
      >
        ← Back to site
      </Link>
    </main>
  );
}
