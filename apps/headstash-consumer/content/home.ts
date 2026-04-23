/**
 * joinheadstash.com homepage copy.
 *
 * Never hardcode copy in components — edit it here. Step 4 will expand this
 * to cover every section (hero, how-it-works, reward cards, behaviors,
 * available-for, FAQ, phone capture, footer) from the consumer mockup.
 *
 * Voice tuning: same Headstash voice, fan-to-fan rather than brand-to-consumer.
 */

export const home = {
  nav: {
    signIn: { label: "Sign in", href: "#signin" },
    cta: { label: "Start", href: "#start" },
  },
  hero: {
    /** Locked copy — brand doc §12. */
    eyebrow: "Heads only · est 2026",
    headline: "Save the receipt. Hear from the brand.",
    subcopy:
      "Headstash connects the flower you already buy to the brands behind it. Upload your receipt. Your favorite brands see you. They decide how to say thanks — merch, early access, drops, or something else entirely.",
    primaryCta: { label: "Start your stash", href: "#start" },
    secondaryCta: { label: "How it works", href: "#how" },
  },
  /** Step 1 placeholder surfaced on the empty shell. */
  comingSoon: {
    kicker: "Heads only · est 2026",
    tagline: "Save the receipt. Hear from the brand.",
  },
} as const;

export type Home = typeof home;
