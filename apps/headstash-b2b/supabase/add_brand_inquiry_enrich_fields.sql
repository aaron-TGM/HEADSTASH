-- Run once in the Supabase SQL editor to add enrichment columns to brand_inquiries.
-- Safe to run multiple times (uses IF NOT EXISTS pattern via DO block).

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'brand_inquiries' AND column_name = 'contact_name'
  ) THEN
    ALTER TABLE brand_inquiries ADD COLUMN contact_name text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'brand_inquiries' AND column_name = 'brand_name'
  ) THEN
    ALTER TABLE brand_inquiries ADD COLUMN brand_name text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'brand_inquiries' AND column_name = 'sells_merch'
  ) THEN
    ALTER TABLE brand_inquiries ADD COLUMN sells_merch text;
  END IF;
END $$;
