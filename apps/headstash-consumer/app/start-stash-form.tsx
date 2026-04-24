"use client";

import { useState, type FormEvent } from "react";

type Props = {
  placeholder: string;
  button: string;
  consent: string;
  consentVersion: string;
};

function toE164(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (digits.length >= 8 && digits.length <= 15) return `+${digits}`;
  return null;
}

export function StartStashForm({
  placeholder,
  button,
  consent,
  consentVersion,
}: Props) {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const e164 = toE164(phone);
    if (!e164) {
      setStatus("error");
      setMessage("Enter a valid phone number.");
      return;
    }
    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/consumer-waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          phone: e164,
          smsConsentVersion: consentVersion,
          pageSource: "joinheadstash.com",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }
      setStatus("ok");
      setMessage("You're in. Watch for a text.");
      setPhone("");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <div className="mt-9 max-w-[480px]">
      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={placeholder}
          className="flex-1 rounded-md border border-black/30 bg-transparent px-4 py-3.5 text-sm text-[var(--color-onyx)] placeholder:text-[var(--color-slate)]/50 focus:border-[var(--color-ochre)] focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="cta-ochre rounded-md px-5 py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : button}
        </button>
      </form>
      <p className="mt-4 text-[11px] text-[var(--color-slate)]/55">{consent}</p>
      {message && (
        <div
          role="status"
          className={`mt-2 text-[12px] ${
            status === "ok" ? "text-[#5A7A3E]" : "text-[var(--color-rust)]"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
