import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

type ConsumerWaitlistPayload = {
  email: string;
  emailConsentVersion: string;
  pageSource?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const form = await req.formData();
    return {
      email: String(form.get("email") ?? "").trim().toLowerCase(),
      emailConsentVersion: String(
        form.get("emailConsentVersion") ?? "",
      ).trim(),
      pageSource: String(form.get("pageSource") ?? "").trim() || undefined,
    };
  }

  return { email: "", emailConsentVersion: "" };
}

export async function POST(req: Request) {
  try {
    const payload = await parsePayload(req);
    const email = payload.email.trim().toLowerCase();

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Enter a valid email address." },
        { status: 400 },
      );
    }

    if (!payload.emailConsentVersion) {
      return NextResponse.json(
        { error: "emailConsentVersion is required." },
        { status: 400 },
      );
    }

    const supabase = createClient(
      getEnv("SUPABASE_URL"),
      getEnv("SUPABASE_SERVICE_ROLE_KEY"),
      { auth: { persistSession: false, autoRefreshToken: false } },
    );

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    const userAgent = req.headers.get("user-agent") ?? null;

    const { error } = await supabase.from("consumer_waitlist").insert({
      email,
      email_consent_version: payload.emailConsentVersion,
      page_source: payload.pageSource || "joinheadstash.com",
      ip,
      user_agent: userAgent,
    });

    if (error) {
      return NextResponse.json(
        { error: "Unable to save waitlist entry." },
        { status: 500 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const notifyTo = process.env.NOTIFY_EMAIL || "hello@getheadstash.com";
      const from =
        process.env.RESEND_FROM_EMAIL || "Headstash <onboarding@resend.dev>";

      await resend.emails.send({
        from,
        to: [notifyTo],
        subject: "New consumer waitlist signup: joinheadstash.com",
        text: [
          `Email:   ${email}`,
          `Consent: ${payload.emailConsentVersion}`,
          `Source:  ${payload.pageSource || "joinheadstash.com"}`,
          `IP:      ${ip || "(unknown)"}`,
          `UA:      ${userAgent || "(unknown)"}`,
          `Time:    ${new Date().toISOString()}`,
        ].join("\n"),
      });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 },
    );
  }
}
