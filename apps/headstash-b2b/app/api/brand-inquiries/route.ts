import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type BrandInquiryPayload = {
  email: string;
  message?: string;
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

async function parsePayload(req: Request): Promise<BrandInquiryPayload> {
  const contentType = req.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return (await req.json()) as BrandInquiryPayload;
  }

  if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
    const form = await req.formData();
    return {
      email: String(form.get("email") ?? "").trim(),
      message: String(form.get("message") ?? "").trim() || undefined,
      pageSource: String(form.get("pageSource") ?? "").trim() || undefined,
    };
  }

  return { email: "" };
}

export async function POST(req: Request) {
  try {
    const payload = await parsePayload(req);
    const email = payload.email.trim().toLowerCase();

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
    }

    const supabase = createClient(getEnv("SUPABASE_URL"), getEnv("SUPABASE_SERVICE_ROLE_KEY"), {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    const userAgent = req.headers.get("user-agent") ?? null;

    const { error } = await supabase.from("brand_inquiries").insert({
      email,
      message: payload.message ?? null,
      page_source: payload.pageSource || "getheadstash.com",
      ip,
      user_agent: userAgent,
    });

    if (error) {
      return NextResponse.json({ error: "Unable to save inquiry." }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
