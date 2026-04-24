/**
 * joinheadstash.com homepage copy.
 *
 * Never hardcode copy in JSX. Edit this file only.
 */
type AvailableBrandLogo = {
  kind: "logo";
  label: string;
  logoSrc: string;
  logoAlt: string;
};

type AvailableBrandText = {
  kind: "text";
  label: string;
  value: string;
  muted?: boolean;
};

type AvailableBrand = AvailableBrandLogo | AvailableBrandText;

export const home = {
  nav: {
    wordmark: "HEADSTASH",
    signIn: { label: "Sign in", href: "#signin" },
    cta: { label: "Start ↗", href: "#start" },
  },
  hero: {
    eyebrow: "Heads only · est 2026",
    headline: "Save the receipt. Hear from the brand.",
    subcopy:
      "Headstash connects the flower you already buy to the brands behind it. Upload your receipt. Your favorite brands see you. They decide how to say thanks — merch, early access, drops, or something else entirely.",
    primaryCta: { label: "Start your stash ↗", href: "#start" },
    secondaryCta: { label: "How it works", href: "#how" },
  },
  howItWorks: {
    id: "how",
    eyebrow: "How it works",
    steps: [
      {
        number: "01",
        title: "Buy",
        body: "Buy flower at any California dispensary. Participating brands attribute your SKUs into your stash.",
      },
      {
        number: "02",
        title: "Upload",
        body: "Snap your receipt. Or forward your delivery email. Qualifying dollars land per brand within 24 hours.",
      },
      {
        number: "03",
        title: "Get it back",
        body: "Each brand decides what you unlock. Merch. Drops. Invites. Sometimes something you did not see coming.",
      },
    ],
  },
  examples: {
    eyebrow: "Each brand runs their own thing",
    headline: "One app. Every brand you buy.",
    intro:
      "Headstash is one place for every brand you buy. Each one sets up its own program — their own rewards, their own drops, their own voice. You see every brand you shop as its own stash.",
    cards: [
      {
        label: "Example reward",
        title: "The heavyweight hoodie",
        condition: "Spend $300 qualifying across any dispensaries in 90 days.",
        note: "Example reward. Brands configure their own.",
        accentClass: "border-l-ochre-300 text-ochre-300",
      },
      {
        label: "Example reward",
        title: "Sundays invite",
        condition: "Hit five approved receipts in a rolling month.",
        note: "Example reward. Brands configure their own.",
        accentClass: "border-l-ochre-400 text-ochre-400",
      },
      {
        label: "Example reward",
        title: "Bonus sticker pack",
        condition: "Upload any receipt with a participating infused pre-roll.",
        note: "Example reward. Brands configure their own.",
        accentClass: "border-l-ochre-500 text-ochre-500",
      },
    ],
  },
  insideApp: {
    eyebrow: "Inside the app",
    headline: "One stash per brand. All in one place.",
    cards: [
      {
        title: "A brand stash",
        body: "Available now, working toward, invite only.",
        imageSrc: "/mockups/doppbag.png",
        imageAlt: "Alien Labs dopp bag reward preview",
      },
      {
        title: "Home dashboard",
        body: "Every brand you shop. One screen.",
        imageSrc: "/mockups/hoodie.png",
        imageAlt: "Hoodie reward dashboard preview",
      },
      {
        title: "Submitted",
        body: "We text the second your stash updates.",
        imageSrc: "/mockups/longsleeve.png",
        imageAlt: "Long sleeve reward submission preview",
      },
    ],
  },
  behaviors: {
    eyebrow: "What brands can reward you for",
    headline: "Things you already do.",
    items: [
      {
        title: "Buying.",
        body: "Every receipt containing a participating brand SKU adds qualifying dollars to that brand's stash.",
      },
      {
        title: "Repeating.",
        body: "Hit a brand's spend or receipt milestone in a rolling window and a real named item shows up in your stash.",
      },
      {
        title: "Trying.",
        body: "First receipt with a new brand usually triggers a welcome item. Most brands say hello with something.",
      },
      {
        title: "Exploring.",
        body: "Some brands reward buying their SKUs across multiple dispensaries. The kind of thing only Headstash can see.",
      },
      {
        title: "Putting people on.",
        body: "Refer a head to a brand you already shop. When their first receipt lands, you both get something.",
      },
    ],
  },
  availableFor: {
    eyebrow: "Available for",
    headline: "The heaviest brands in California.",
    items: [
      { kind: "text", label: "Brand 01", value: "Locked in" },
      { kind: "text", label: "Brand 02", value: "Locked in" },
      { kind: "text", label: "Brand 03", value: "Locked in" },
    ] satisfies AvailableBrand[],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Quick answers.",
    items: [
      { question: "How much does it cost?", answer: "Free. Pay with receipts." },
      {
        question: "Does Headstash sell anything?",
        answer:
          "No. Each brand you shop runs their own rewards. Headstash just connects your receipt to them.",
      },
      { question: "Do receipts expire?", answer: "Fourteen days from purchase. Do not sit on them." },
      {
        question: "Is this a discount program?",
        answer: "No. Brands reward you with merch, drops, or access. Not coupons.",
      },
      { question: "Can I share receipts with a friend?", answer: "One receipt, one account. We dedupe." },
    ],
  },
  start: {
    id: "start",
    eyebrow: "Start here",
    headline: "Start your stash.",
    body: "Takes thirty seconds. Works on any phone. Add it to your home screen and upload receipts as you shop.",
    inputPlaceholder: "+14155551234",
    button: "Send code ↗",
    smsConsent:
      "By continuing you agree to receive SMS from Headstash. Msg & data rates may apply. Reply STOP to opt out.",
    smsConsentVersion: "v1",
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
