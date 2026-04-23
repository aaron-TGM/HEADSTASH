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
      {
        kind: "logo",
        label: "Partner 01",
        name: "Alien Labs",
        logoSrc: "/partners/alien-labs.png",
        logoAlt: "Alien Labs logo",
      },
      {
        kind: "logo",
        label: "Partner 02",
        name: "Connected",
        logoSrc: "/partners/connected.png",
        logoAlt: "Connected logo",
      },
      { kind: "text", label: "More", value: "Under NDA", muted: true },
    ] satisfies LaunchPartner[],
  },
  cta: {
    id: "cta",
    eyebrow: "Private beta",
    headline: "Ready to own your customer?",
    body: "Onboarding a small number of California flower brands for the 2026 launch. If that's you, talk to us.",
    inputPlaceholder: "you@brand.com",
    button: "Request ↗",
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
