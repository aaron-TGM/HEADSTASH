import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

type ConsumerWaitlistPayload = {
  phone: string;
  smsConsentVersion: string;
  pageSource?: string;
};

const E164_RE = /^\+[1-9][0-9]{7,14}$/;

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

async function parsePayload(req: Request): Promise<ConsumerWaitlistPayload> {
  const contentType = req.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return (await req.json()) as ConsumerWaitlistPayload;
  }

  if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
    const form = await req.formData();
    return {
      phone: String(form.get("phone") ?? "").trim(),
      smsConsentVersion: String(form.get("smsConsentVersion") ?? "").trim(),
      pageSource: String(form.get("pageSource") ?? "").trim() || undefined,
    };
  }

  return { phone: "", smsConsentVersion: "" };
}

export async function POST(req: Request) {
  try {
    const payload = await parsePayload(req);

    if (!E164_RE.test(payload.phone)) {
      return NextResponse.json({ error: "Phone must be E.164 format." }, { status: 400 });
    }

    if (!payload.smsConsentVersion) {
      return NextResponse.json({ error: "smsConsentVersion is required." }, { status: 400 });
    }

    const supabase = createClient(getEnv("SUPABASE_URL"), getEnv("SUPABASE_SERVICE_ROLE_KEY"), {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    const userAgent = req.headers.get("user-agent") ?? null;

    const { error } = await supabase.from("consumer_waitlist").insert({
      phone: payload.phone,
      sms_consent_version: payload.smsConsentVersion,
      page_source: payload.pageSource || "joinheadstash.com",
      ip,
      user_agent: userAgent,
    });

    if (error) {
      return NextResponse.json({ error: "Unable to save waitlist entry." }, { status: 500 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const notifyTo = process.env.NOTIFY_EMAIL || "hello@getheadstash.com";
      const from = process.env.RESEND_FROM_EMAIL || "Headstash <onboarding@resend.dev>";

      await resend.emails.send({
        from,
        to: [notifyTo],
        subject: "New consumer waitlist signup: joinheadstash.com",
        text: [
          `Phone: ${payload.phone}`,
          `SMS Consent Version: ${payload.smsConsentVersion}`,
          `Source: ${payload.pageSource || "joinheadstash.com"}`,
          `IP: ${ip || "(unknown)"}`,
          `User-Agent: ${userAgent || "(unknown)"}`,
          `Timestamp: ${new Date().toISOString()}`,
        ].join("\n"),
      });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
