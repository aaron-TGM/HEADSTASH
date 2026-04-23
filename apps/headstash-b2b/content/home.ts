/**
 * getheadstash.com homepage copy.
 *
 * Never hardcode copy in components — edit it here. Step 2 will expand this
 * to cover every section (hero, gap, how-it-works, configure panel, category,
 * launch partners, final CTA, footer) from the pitch mockup.
 */

export const home = {
  nav: {
    cta: { label: "Request access", href: "#cta" },
  },
  hero: {
    /** Locked copy — brand doc §12. */
    eyebrow: "The loyalty layer for cannabis brands",
    headline: "Own your customer.",
    subcopy:
      "Headstash is the infrastructure that turns dispensary receipts into direct customer relationships. Your buyers upload. You see the data. Your Shopify merch moves. The retailer stays out of it.",
    primaryCta: { label: "Request early access", href: "#cta" },
  },
  /** Step 1 placeholder surfaced on the empty shell. */
  comingSoon: {
    kicker: "getheadstash.com · private beta",
    tagline: "The loyalty layer for cannabis brands.",
  },
} as const;

export type Home = typeof home;
