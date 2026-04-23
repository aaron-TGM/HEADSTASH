-- Headstash marketing capture schema (Step 3)
-- Creates:
--   - public.brand_inquiries
--   - public.consumer_waitlist
-- With row-level security policies for anon insert.

create extension if not exists pgcrypto;

create table if not exists public.brand_inquiries (
  id uuid primary key default gen_random_uuid(),
  email text not null check (position('@' in email) > 1),
  message text,
  page_source text not null default 'getheadstash.com',
  ip inet,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists brand_inquiries_created_at_idx
  on public.brand_inquiries (created_at desc);

create table if not exists public.consumer_waitlist (
  id uuid primary key default gen_random_uuid(),
  phone text not null check (phone ~ '^\\+[1-9][0-9]{7,14}$'),
  sms_consent_version text not null,
  page_source text not null default 'joinheadstash.com',
  ip inet,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists consumer_waitlist_created_at_idx
  on public.consumer_waitlist (created_at desc);

alter table public.brand_inquiries enable row level security;
alter table public.consumer_waitlist enable row level security;

-- Lock down by default
revoke all on public.brand_inquiries from public;
revoke all on public.consumer_waitlist from public;

-- Allow inserts from anon/authenticated clients when needed.
grant insert on public.brand_inquiries to anon, authenticated;
grant insert on public.consumer_waitlist to anon, authenticated;

-- Insert-only policies for captured leads.
drop policy if exists "anon can insert brand inquiries" on public.brand_inquiries;
create policy "anon can insert brand inquiries"
  on public.brand_inquiries
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "anon can insert consumer waitlist" on public.consumer_waitlist;
create policy "anon can insert consumer waitlist"
  on public.consumer_waitlist
  for insert
  to anon, authenticated
  with check (true);
