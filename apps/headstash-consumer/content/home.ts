/**
 * joinheadstash.com homepage copy.
 *
 * Matches the joinheadstash-com-desktop.html / mobile.html mockups.
 * Never hardcode copy in JSX. Edit this file only.
 */

type AvailableBrandLogo = {
  kind: "logo";
  label: string;
  logoSrc: string;
  logoAlt: string;
  value: string;
};

type AvailableBrandText = {
  kind: "text";
  label: string;
  value: string;
};

type AvailableBrand = AvailableBrandLogo | AvailableBrandText;

export const home = {
  nav: {
    wordmark: "HEADSTASH",
    signIn: { label: "Sign in", href: "#start" },
    cta: { label: "Start ↗", href: "#start" },
  },
  hero: {
    eyebrow: "Heads only · est 2026",
    headline: "Save the receipt.\nStash the brand.",
    subcopy:
      "One app for every brand you buy. Upload your dispensary receipts, earn real merch and access from the brands themselves. No coupons. No percent-off. No dispensary loyalty hoops.",
    primaryCta: { label: "Start your stash ↗", href: "#start" },
    secondaryCta: { label: "How it works", href: "#how" },
    receipt: {
      vendor: "Cookies Melrose",
      date: "Apr 22 · 4:20 PM",
      items: [
        { name: "Alien Labs · Galaxy Glue 3.5g", price: "$52" },
        { name: "Connected · Gelonade 1g PR", price: "$18" },
        { name: "Seth Rogen · Afghan Kush tin", price: "$45" },
      ],
      total: "$115",
      status: "Uploaded · approved in 2s",
    },
  },
  howItWorks: {
    id: "how",
    eyebrow: "How it works",
    headline: "Buy & upload. Track & earn. Redeem your stash.",
    steps: [
      {
        number: "01",
        title: "Buy & upload",
        body: "Use the Headstash camera to photograph your dispensary receipt. We read the SKUs and match them to every participating brand in one upload.",
      },
      {
        number: "02",
        title: "Track & earn",
        body: "The home dashboard shows your stashes for every brand you shop. As receipts clear, you earn the rewards each brand sets: merch, drops, and access.",
      },
      {
        number: "03",
        title: "Redeem your stash",
        body: "When you qualify, rewards show as ready in each brand's stash. Redeem the way the brand sets up, and we text you the second a receipt clears or something unlocks.",
      },
    ],
  },
  examples: {
    eyebrow: "Each brand runs their own thing",
    headline: "One app. Every brand you buy.",
    body: "Headstash is one place for every brand you buy. Each one sets up its own program - their own rewards, their own drops, their own voice.",
    cards: [
      {
        brand: "Example · from a brand",
        title: "Smokers Club hoodie",
        body: "Spend $300 qualifying across any dispensaries in 90 days.",
        footer: "Example reward. Brands configure their own.",
      },
      {
        brand: "Example · from a brand",
        title: "Sunday tasting invite",
        body: "Hit five approved receipts in a rolling month.",
        footer: "Example reward. Brands configure their own.",
      },
      {
        brand: "Example · from a brand",
        title: "Bonus sticker pack",
        body: "Upload any receipt with an infused pre-roll from the brand.",
        footer: "Example reward. Brands configure their own.",
      },
    ],
  },
  behaviors: {
    eyebrow: "What brands can reward you for",
    headline: "Things you already do.",
    items: [
      {
        label: "Buying.",
        body: "Every receipt containing a participating brand's SKU adds qualifying dollars to that brand's stash.",
      },
      {
        label: "Repeating.",
        body: "Hit a brand's spend or receipt milestone in a rolling window. A real named item shows up in your stash.",
      },
      {
        label: "Trying.",
        body: "First receipt with a new brand usually triggers a welcome item. Most brands say hello with something.",
      },
      {
        label: "Exploring.",
        body: "Some brands reward buying their SKUs across multiple dispensaries. The kind of thing only Headstash can see.",
      },
      {
        label: "Putting people on.",
        body: "Refer a head to a brand you already shop. When their first receipt lands, you both get something.",
      },
    ],
  },
  availableFor: {
    eyebrow: "Available for",
    headline: "The heaviest brands in California.",
    brands: [
      {
        kind: "logo",
        label: "Brand 01",
        logoSrc: "/partners/alien-labs.png",
        logoAlt: "Alien Labs logo",
        value: "Locked in",
      },
      {
        kind: "logo",
        label: "Brand 02",
        logoSrc: "/partners/connected.png",
        logoAlt: "Connected logo",
        value: "Locked in",
      },
      { kind: "text", label: "Brand 03", value: "Locked in" },
    ] satisfies AvailableBrand[],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Quick answers.",
    items: [
      {
        question: "How much does it cost?",
        answer: "Free. Pay with receipts.",
      },
      {
        question: "Does Headstash sell anything?",
        answer:
          "No. Each brand you shop runs their own rewards. Headstash just connects your receipt to them.",
      },
      {
        question: "Do receipts expire?",
        answer: "Fourteen days from purchase. Don't sit on them.",
      },
      {
        question: "Is this a discount program?",
        answer:
          "No. Brands reward you with their merch, drops, or access. Never coupons, never percent-off.",
      },
      {
        question: "Can I share receipts with a friend?",
        answer: "One receipt, one account. We dedupe.",
      },
    ],
  },
  start: {
    id: "start",
    eyebrow: "Start here",
    headline: "Start your stash.",
    body: "Takes thirty seconds. Works on any phone. Add it to your home screen and upload receipts as you shop.",
    placeholder: "(___) ___-____",
    button: "Send code ↗",
    consent:
      "By continuing you agree to receive SMS from Headstash. Msg & data rates may apply. Reply STOP to opt out.",
    consentVersion: "v1.2026.01",
  },
  footer: {
    wordmark: "HEADSTASH",
    attribution: "A Tuff Ghost Media product · © 2026",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "For brands", href: "https://getheadstash.com" },
    ],
  },
} as const;
