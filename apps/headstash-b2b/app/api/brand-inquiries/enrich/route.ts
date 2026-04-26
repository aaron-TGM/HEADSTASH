import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

type EnrichPayload = {
  email: string;
  name: string;
  brand: string;
  sellsMerch: string;
};

const MERCH_LABELS: Record<string, string> = {
  "yes-actively": "Yes, actively",
  "done-some": "We've done some",
  "not-yet": "Not yet",
};

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export async function POST(req: Request) {
  try {
    const payload: EnrichPayload = await req.json();
    const email = (payload.email ?? "").trim().toLowerCase();
    const name = (payload.name ?? "").trim();
    const brand = (payload.brand ?? "").trim();
    const sellsMerch = (payload.sellsMerch ?? "").trim();

    // Enrich the Supabase row -- update silently, don't block on column errors
    try {
      const supabase = createClient(
        getEnv("SUPABASE_URL"),
        getEnv("SUPABASE_SERVICE_ROLE_KEY"),
        { auth: { persistSession: false, autoRefreshToken: false } },
      );
      await supabase
        .from("brand_inquiries")
        .update({ contact_name: name, brand_name: brand, sells_merch: sellsMerch })
        .eq("email", email);
    } catch {
      // columns may not exist yet -- email notification still fires below
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
        subject: `New brand inquiry -- ${brand || email}`,
        text: [
          `Email:       ${email || "(not provided)"}`,
          `Name:        ${name || "(not provided)"}`,
          `Brand:       ${brand || "(not provided)"}`,
          `Sells merch: ${(MERCH_LABELS[sellsMerch] ?? sellsMerch) || "(not provided)"}`,
          `Timestamp:   ${new Date().toISOString()}`,
        ].join("\n"),
      });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
