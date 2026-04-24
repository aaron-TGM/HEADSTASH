/**
 * getheadstash.com homepage copy.
 *
 * Matches the getheadstash-com-desktop.html / mobile.html mockups.
 * Never hardcode copy in JSX. Edit this file only.
 */

type LaunchPartnerLogo = {
  kind: "logo";
  label: string;
  logoSrc: string;
  logoAlt: string;
  value: string;
};

type LaunchPartnerText = {
  kind: "text";
  label: string;
  value: string;
};

type LaunchPartner = LaunchPartnerLogo | LaunchPartnerText;
type BridgeIntegration = {
  name: string;
  detail: string;
  dashed?: boolean;
};

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
    id: "how",
    eyebrow: "How it works",
    headline: "Receipt in. Relationship out.",
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
  adminShowcase: {
    eyebrow: "Your side of it",
    headline: "The admin you'd actually use.",
    body: "Program KPIs, receipt review queue, cross-retailer insights, Shopify merch sync. Built for an operator who lives in it, not a stakeholder who glances at it weekly.",
    footnote: "Keyboard-first review. Fraud flags up front. Data export when you want it out.",
    kpis: [
      { label: "Receipts in", value: "1,247", delta: "+38% vs prior" },
      { label: "Approval rate", value: "89%", delta: "2.3s median" },
      { label: "Qualifying $", value: "$41.2k", delta: "+$12k in month" },
      { label: "Merch moved", value: "$8.6k", delta: "142 redemptions" },
    ],
    retailers: [
      { name: "Cookies Melrose", signups: "184" },
      { name: "Connected SF", signups: "147" },
      { name: "Harborside Oakland", signups: "128" },
      { name: "Catalyst Long Beach", signups: "93" },
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
        body: "Flat 1:1 earning, SKU multipliers, receipt floors, lookback windows.",
      },
      {
        title: "Reward catalog",
        body: "Tag any Shopify product as redeemable. Set cost in qualifying dollars.",
      },
      {
        title: "Promos and triggers",
        body: "First-receipt coupons, spend thresholds, SKU bonuses, referrals. No code.",
      },
      {
        title: "Status and gating",
        body: "Run tiers if you want them. Skip them if you don't. Gate by spend, SKU, or invite.",
      },
      {
        title: "Voice and messaging",
        body: "Your SMS copy, your notification tone, your opt-in language.",
      },
      {
        title: "Data and export",
        body: "CSV, S3, Snowflake, API. The data is yours.",
      },
    ],
  },
  bridge: {
    eyebrow: "The bridge you've been missing",
    headline: "Your customer. In your stack.",
    body: "Every cannabis brand runs Shopify, Klaviyo, or something like them - for merch, for direct sales, for the buyers they already own. Every one of those tools is useless for your cannabis customer because you never had them in the first place. Headstash changes that. Every receipt upload is a customer landing in the CRM you already use.",
    integrations: [
      { name: "Klaviyo", detail: "Segments, flows, lists" },
      { name: "Shopify", detail: "Customer profiles" },
      { name: "Your warehouse", detail: "Snowflake, BigQuery, S3" },
      { name: "CSV export", detail: "Anywhere else you need it", dashed: true },
    ] satisfies BridgeIntegration[],
    syncPoints: [
      {
        title: "Phone + email",
        body: "Direct communication channels, consent captured, TCPA compliant.",
      },
      {
        title: "SKU history",
        body: "Which products, how often, what format. Segment buyers by actual preference.",
      },
      {
        title: "Retailer index",
        body: "Which dispensaries your customers actually shop at. Retargetable by geography.",
      },
      {
        title: "Purchase recency",
        body: "Who bought last week, last month, last quarter. Build winback flows that work.",
      },
    ],
    callout:
      "Headstash doesn't send your marketing. You do, through the tools you already pay for. Direct syncs to Klaviyo and Shopify. Export the CSV and take it anywhere else you need.",
  },
  campaign: {
    eyebrow: "What this unlocks",
    headline: "Coordinated campaigns from shelf to inbox.",
    body: "Launch a strain. Run a promo. Drop a limited edition. For the first time, your cannabis brand can orchestrate a multi-surface campaign the same way a mainstream DTC brand does - because for the first time, you own the customer.",
    example: {
      label: "Example campaign · Alien Labs",
      name: "Galaxy Glue · triple format",
      body: "New strain drop. Flower, pre-roll, vape. Limited-edition tee unlocks for buyers who collect all three formats inside 30 days.",
      config: "SKU-match · 3 formats · 30-day window",
    },
    channels: [
      {
        title: "Klaviyo · email campaign",
        when: "Day 0",
        body: "Sent to the Headstash-sourced segment inside Alien Labs' existing Klaviyo account.",
      },
      {
        title: "SMS · via retail co-op",
        when: "Day 3",
        body: "Headstash exports the segment. Alien Labs pushes it through retailer co-op SMS.",
      },
      {
        title: "In-store · retailer placement",
        when: "Day 0-30",
        body: "Shelf talkers, menu slots, budtender cards - QR deep-links to the campaign.",
      },
      {
        title: "Organic social · IG + TikTok",
        when: "Day 7, 14, 21",
        body: "Real-time campaign numbers from Headstash admin, posted organically.",
      },
    ],
    kpis: [
      { label: "Receipts submitted", value: "1,847" },
      { label: "Hit all 3 formats", value: "142" },
      { label: "Tees unlocked", value: "142" },
      { label: "Incremental revenue", value: "+$168k" },
    ],
    points: [
      {
        number: "01",
        title: "You set the rules once",
        body: "Configure the SKU-match promo in Headstash. Pick the three SKUs, the window, the reward. Done in five minutes.",
      },
      {
        number: "02",
        title: "You run the messaging",
        body: "Klaviyo email, SMS through retail co-ops, in-store signage, organic social. Same tools, same voice. Headstash doesn't touch your messaging.",
      },
      {
        number: "03",
        title: "Headstash handles the rest",
        body: "Receipt ingestion, SKU attribution, eligibility tracking, reward fulfillment. You watch the numbers move in real time.",
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
        body: "Brand-operated. Cross-retailer. Merch-routing. Infrastructure underneath.",
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
        logoSrc: "/partners/alien-labs.png",
        logoAlt: "Alien Labs logo",
        value: "Locked in",
      },
      {
        kind: "logo",
        label: "Partner 02",
        logoSrc: "/partners/connected.png",
        logoAlt: "Connected logo",
        value: "Locked in",
      },
      { kind: "text", label: "Partner 03", value: "Locked in" },
    ] satisfies LaunchPartner[],
  },
  pricing: {
    eyebrow: "Pricing",
    headline: "Ten founding partners. Seven slots remain.",
    slotCounter: { label: "Founding slots", remaining: "7", total: "10" },
    intro:
      "The first ten brands to sign get founding partner pricing - $1,500/month flat, locked for 24 months, onboarding fee waived. Case study rights and co-marketing baked in. After the tenth slot fills, standard pricing applies.",
    founding: {
      badge: "Founding partner",
      subheading: "First 10 brands only",
      price: "$1,500",
      cadence: "/ month",
      tagline: "Flat platform fee. No rev share. No per-receipt costs.",
      pill: "$4,995 onboarding · waived",
      whatYouGet: [
        "Founder rate locked for 24 months",
        "$4,995 onboarding fee waived",
        "Founding partner branding on getheadstash.com",
        "Direct input on roadmap priorities",
        "Co-marketing: press, case study, conference placement",
        "Full platform: admin, consumer PWA, Shopify sync, data export",
        "12-month term, month-to-month after",
      ],
      cta: { label: "Claim a founding slot ↗", href: "#cta" },
    },
    standard: {
      label: "Standard · brand 11 onward",
      price: "$3,500",
      cadence: "/ month",
      tagline: "Flat platform fee. No rev share. No per-receipt costs.",
      pill: "+ $4,995 one-time onboarding",
      whatYouGet: [
        "Full platform: admin, consumer PWA, Shopify sync, data export",
        "Standard onboarding and training",
        "12-month annual contract",
        "Price adjustable annually",
      ],
      excluded: [
        "Founding partner branding",
        "Co-marketing placements",
        "Roadmap input priority",
      ],
      availability: "Available after the founding ten fill.",
    },
    math: {
      label: "Founding partner year one",
      headline: "$18,000 flat. Nothing else.",
      body: "$1,500 x 12 months. No rev share, no per-receipt fees, no surprise invoices. Onboarding is waived. You keep every dollar of incremental merch revenue the program drives. Most founding partners should see payback inside quarter one from merch velocity alone, before counting the data or the customer relationship.",
    },
    faq: {
      eyebrow: "Pricing questions",
      items: [
        {
          question: "Is there really no rev share?",
          answer:
            "No rev share, no take-rate, no percentage of redemption value. Flat monthly platform fee. You keep 100% of the merch revenue the program drives.",
        },
        {
          question: "What happens at month 13?",
          answer:
            "Founding partners go month-to-month at the locked $1,500 rate through month 24. Standard contracts renew annually with market-rate pricing.",
        },
        {
          question: "Who pays for the merch that gets redeemed?",
          answer:
            "You do - it's your inventory out of your Shopify. Same merch economics as your IG store, just moving to a qualified, receipt-verified audience.",
        },
        {
          question: "Can I cancel?",
          answer:
            "12-month term, then month-to-month. Data export is included - if you leave, you leave with everything: receipts, users, ledger, redemptions. Your customer, your data.",
        },
      ],
    },
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
