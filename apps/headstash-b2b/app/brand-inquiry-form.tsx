"use client";

import { useState, type FormEvent } from "react";

type Props = {
  placeholder: string;
  button: string;
};

export function BrandInquiryForm({ placeholder, button }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/brand-inquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, pageSource: "getheadstash.com" }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }
      setStatus("ok");
      setMessage("You're in. We'll be in touch.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-9 flex w-full max-w-[520px] flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="flex-1 rounded-md border border-white/30 bg-transparent px-4 py-3.5 text-sm text-[var(--color-bone)] placeholder:text-[var(--color-ash)]/50 focus:border-[var(--color-ochre)] focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="cta-ochre rounded-md px-5 py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : button}
      </button>
      {message && (
        <div
          role="status"
          className={`sm:absolute sm:mt-16 text-[12px] ${
            status === "ok"
              ? "text-[#8BAF5C]"
              : "text-[var(--color-rust)]"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}
