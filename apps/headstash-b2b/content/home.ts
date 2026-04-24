/**
 * getheadstash.com homepage copy.
 *
 * Never hardcode copy in JSX. Edit this file only.
 */
type LaunchPartnerLogo = {
  kind: "logo";
  label: string;
  name: string;
  logoSrc: string;
  logoAlt: string;
};

type LaunchPartnerText = {
  kind: "text";
  label: string;
  value: string;
  muted?: boolean;
};

type LaunchPartner = LaunchPartnerLogo | LaunchPartnerText;

export const home = {
  nav: {
    wordmark: "HEADSTASH",
    cta: { label: "Request access ↗", href: "#cta" },
  },
  hero: {
    eyebrow: "The loyalty layer for cannabis brands",
    headline: "Own your customer.",
    subcopy:
      "Headstash is the infrastructure that turns dispensary receipts into direct customer relationships. Your buyers upload. You see the data. Your Shopify merch moves. The retailer stays out of it.",
    primaryCta: { label: "Request early access ↗", href: "#cta" },
    secondaryCta: { label: "See it working", href: "#how" },
  },
  gap: {
    eyebrow: "The gap",
    headline: "Your flower is everywhere. Your buyer is a stranger.",
    body: "California law puts retailers between you and your customer. Every dispensary loyalty tool - springbig, Alpine IQ, the rest - locks you out by design. We don't work around it. We replace it.",
  },
  howItWorks: {
    eyebrow: "How it works",
    steps: [
      {
        number: "01",
        title: "They upload",
        body: "Your customers snap a dispensary receipt. Your SKUs get attributed. They earn qualifying dollars against your brand.",
      },
      {
        number: "02",
        title: "You see it",
        body: "Every receipt, every buyer, every cross-retailer purchase lands in your admin. Retailers don't see it. You do.",
      },
      {
        number: "03",
        title: "Your merch moves",
        body: "Rewards pull from your existing Shopify. You tag the SKUs, set the rules, Headstash routes the redemption.",
      },
    ],
  },
  configure: {
    eyebrow: "Fully configurable",
    headline: "Your program. Your rules.",
    intro:
      "Headstash doesn't prescribe what your loyalty program looks like. You configure every dimension of it. Defaults ship with onboarding - tune up or down.",
    cards: [
      {
        title: "Earn rules",
        body: "Flat 1:1 earning, SKU multipliers, receipt floors, lookback windows. Default is $1 spent equals $1 qualifying.",
      },
      {
        title: "Reward catalog",
        body: "Tag any Shopify product as redeemable. Set cost in qualifying dollars. Always-on, time-boxed, or scarcity-limited.",
      },
      {
        title: "Promos and triggers",
        body: "First-receipt coupons, spend thresholds, SKU bonuses, cross-retailer rewards, referrals. JSON rules, no code.",
      },
      {
        title: "Status and gating",
        body: "Run tiers if you want them. Skip them if you don't. Gate items behind spend, receipt count, specific SKUs, or invite.",
      },
      {
        title: "Voice and messaging",
        body: "Your SMS copy, your notification tone, your opt-in language. Alien Labs does not sound like Connected.",
      },
      {
        title: "Data and export",
        body: "Receipts, users, ledger, redemptions. CSV, S3, Snowflake, API. The data is yours. So is the warehouse connection.",
      },
    ],
  },
  adminShowcase: {
    eyebrow: "Your side of it",
    headline: "The admin you'd actually use.",
    body: "Program KPIs, receipt review queue, cross-retailer insights, Shopify merch sync. Built for an operator who lives in it, not a stakeholder who glances at it weekly.",
  },
  bridge: {
    eyebrow: "The bridge you've been missing",
    headline: "Your customer. In your stack.",
    body: "Every receipt upload becomes a customer profile in the tools you already use. Headstash handles attribution and approval, then pipes the data where your team already works.",
    integrations: [
      { name: "Klaviyo", detail: "Segments, flows, lists" },
      { name: "Shopify", detail: "Customer profiles and merch routing" },
      { name: "Your warehouse", detail: "Snowflake, BigQuery, S3" },
      { name: "CSV export", detail: "Anywhere else you need it" },
    ],
    syncPoints: [
      {
        title: "Phone + email",
        body: "Direct communication channels, consent captured, TCPA compliant.",
      },
      {
        title: "SKU history",
        body: "Which products, how often, and what format each buyer prefers.",
      },
      {
        title: "Retailer index",
        body: "Which dispensaries your customers actually shop by geography.",
      },
      {
        title: "Purchase recency",
        body: "Who bought last week, last month, or last quarter.",
      },
    ],
  },
  campaign: {
    eyebrow: "What this unlocks",
    headline: "Coordinated campaigns from shelf to inbox.",
    body: "Configure once in Headstash, run messaging in your own channels, and watch the same campaign move across email, SMS, retail, and social.",
    channels: [
      {
        title: "Klaviyo email",
        when: "Day 0",
        body: "Sent to Headstash-sourced buyers in your existing Klaviyo account.",
      },
      {
        title: "SMS via retail co-op",
        when: "Day 3",
        body: "Exported segment pushed through Alpine IQ, springbig, or partner stack.",
      },
      {
        title: "In-store placement",
        when: "Day 0-30",
        body: "Shelf talkers and menu slots deep-link into campaign-specific Headstash flows.",
      },
      {
        title: "Organic social",
        when: "Day 7, 14, 21",
        body: "Post live campaign metrics from admin to compound social proof.",
      },
    ],
    kpis: [
      { label: "Receipts submitted", value: "1,847" },
      { label: "Hit all 3 formats", value: "142" },
      { label: "Tees unlocked", value: "142" },
      { label: "Incremental revenue", value: "+$168k" },
    ],
  },
  category: {
    eyebrow: "Category",
    headline:
      "Not a dispensary tool. Not a consumer marketplace. Infrastructure for brands.",
    columns: [
      {
        label: "Retailer tools",
        body: "springbig, Alpine IQ, Flowhub. Great for dispensaries. Locked to you.",
        isHeadstash: false,
      },
      {
        label: "Consumer apps",
        body: "HighRewards. Third-party marketplace. Gift cards, not brand equity.",
        isHeadstash: false,
      },
      {
        label: "Headstash",
        body: "Brand-operated. Cross-retailer. Merch-routing. The infrastructure underneath.",
        isHeadstash: true,
      },
    ],
  },
  launchPartners: {
    eyebrow: "Launching 2026 with",
    headline: "California's most wanted flower.",
    partners: [
      { kind: "text", label: "Partner 01", value: "Locked in" },
      { kind: "text", label: "Partner 02", value: "Locked in" },
      { kind: "text", label: "Partner 03", value: "Locked in" },
    ] satisfies LaunchPartner[],
  },
  pricing: {
    eyebrow: "Pricing",
    headline: "Ten founding partners. Seven slots remain.",
    intro:
      "The first ten brands to sign get founding partner pricing - $1,500/month flat, locked for 24 months, onboarding waived. After the tenth slot fills, standard pricing applies.",
    cards: [
      {
        tier: "Founding partner",
        price: "$1,500",
        cadence: "/ month",
        notes: [
          "Founder rate locked for 24 months",
          "$4,995 onboarding fee waived",
          "Founding partner branding",
          "Roadmap input priority",
        ],
      },
      {
        tier: "Standard",
        price: "$3,500",
        cadence: "/ month",
        notes: [
          "Standard onboarding and training",
          "12-month annual contract",
          "Price adjustable annually",
          "No founding partner placement",
        ],
      },
    ],
    summary:
      "$1,500 x 12 months. No rev share, no per-receipt fees, no surprise invoices.",
  },
  cta: {
    id: "cta",
    eyebrow: "7 of 10 founding slots remain",
    headline: "Ready to own your customer?",
    body: "Founding partner pricing is $1,500/month flat, onboarding waived, locked for 24 months. Seven brands can still claim it.",
    inputPlaceholder: "you@brand.com",
    button: "Claim a slot ↗",
    fallback: "Or email direct: hello@getheadstash.com",
  },
  footer: {
    wordmark: "HEADSTASH",
    attribution: "A Tuff Ghost Media product · © 2026",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "For buyers", href: "https://joinheadstash.com" },
    ],
  },
} as const;
