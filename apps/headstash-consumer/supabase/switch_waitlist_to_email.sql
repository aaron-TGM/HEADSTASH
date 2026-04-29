-- Migration: switch consumer_waitlist from phone-based to email-based signup.
-- Run each statement one at a time in the Supabase SQL editor
-- (disable "Explain" mode first -- click the toggle next to RUN).

-- 1. Add email column (nullable initially so existing rows are safe)
ALTER TABLE consumer_waitlist ADD COLUMN IF NOT EXISTS email text;

-- 2. Add email consent version column
ALTER TABLE consumer_waitlist ADD COLUMN IF NOT EXISTS email_consent_version text;

-- 3. Make phone nullable (was previously required)
ALTER TABLE consumer_waitlist ALTER COLUMN phone DROP NOT NULL;

-- 4. Make sms_consent_version nullable (no longer required for new signups)
ALTER TABLE consumer_waitlist ALTER COLUMN sms_consent_version DROP NOT NULL;

-- Optional: add a unique index on email for deduplication
-- CREATE UNIQUE INDEX IF NOT EXISTS consumer_waitlist_email_key ON consumer_waitlist (email);
