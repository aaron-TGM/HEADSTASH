/**
 * Headstash design tokens.
 *
 * Single source of truth for colors, type scale, and spacing across both
 * marketing sites and any future surface. Mirrored in `./theme.css` for
 * Tailwind v4 consumption. If you change a value here, update it in
 * `./theme.css` too.
 *
 * Reference: Headstash Brand System v1, sections 6 and 7.
 */

export const colors = {
  /** Default dark background; wordmark on light; body text on light. */
  onyx: "#0E0E0E",
  /** Default light background; wordmark on dark; body text on dark. Pure white is banned. */
  bone: "#EDE4D0",
  /** Near-bone alternative for small UI where bone lacks contrast. */
  boneAlt: "#F5EFE1",
  /** Headstash accent. Used at ~5% of any surface. */
  ochre: "#F2D35C",
  /** Secondary dark for layering, borders on dark UI. */
  ash: "#2A2A2A",
  /** Secondary light for layering, borders on light UI. */
  fog: "#D8D2C2",
  /** Status only — approvals, positive confirmations. Never decorative. */
  moss: "#5A7A3E",
  /** Status only — rejections, warnings. Never decorative. */
  rust: "#C8482A",
} as const;

/**
 * Ochre variations — used in consumer marketing to illustrate per-brand
 * instances until real partner colors are approved (brand doc §6, placeholder rule).
 */
export const ochreScale = {
  100: "#FBF2C7",
  200: "#F8E8A2",
  300: "#F5DE7C",
  400: "#F2D35C",
  500: "#DABA3E",
  600: "#B39623",
} as const;

/**
 * Type scale from brand doc §7. Display, H1, H2, and micro-label are always
 * uppercase with tracking baked in — use the `font-blunt-display`,
 * `font-blunt-h`, or `font-blunt-micro` utility classes (defined in fonts.css)
 * to get those defaults.
 */
export const typeScale = {
  display: {
    desktop: "64px",
    mobile: "44px",
    letterSpacing: "0.02em",
    lineHeight: "0.95",
    uppercase: true,
    family: "blunt",
  },
  h1: {
    desktop: "40px",
    mobile: "32px",
    letterSpacing: "0.01em",
    lineHeight: "1.0",
    uppercase: true,
    family: "blunt",
  },
  h2: {
    desktop: "28px",
    mobile: "24px",
    letterSpacing: "0.01em",
    lineHeight: "1.1",
    uppercase: true,
    family: "blunt",
  },
  h3: {
    desktop: "20px",
    mobile: "18px",
    letterSpacing: "0",
    lineHeight: "1.3",
    uppercase: false,
    family: "inter",
  },
  bodyL: {
    desktop: "17px",
    mobile: "16px",
    letterSpacing: "0",
    lineHeight: "1.5",
    uppercase: false,
    family: "inter",
  },
  body: {
    desktop: "15px",
    mobile: "15px",
    letterSpacing: "0",
    lineHeight: "1.5",
    uppercase: false,
    family: "inter",
  },
  caption: {
    desktop: "13px",
    mobile: "13px",
    letterSpacing: "0",
    lineHeight: "1.4",
    uppercase: false,
    family: "inter",
  },
  micro: {
    desktop: "11px",
    mobile: "11px",
    letterSpacing: "0.08em",
    lineHeight: "1.2",
    uppercase: true,
    family: "blunt",
  },
} as const;

export const fontFamilies = {
  blunt: '"Blunt Family", "Arial Black", system-ui, sans-serif',
  bluntOutline: '"Blunt Family Outline", "Arial", system-ui, sans-serif',
  bluntItalic: '"Blunt Family Italic", "Blunt Family", system-ui, sans-serif',
  bluntScript: '"Blunt Family Script", cursive',
  inter: "var(--font-inter-google), Inter, system-ui, sans-serif",
} as const;

/** 16px base unit, all spacing in multiples of 8px (brand §10 grid). */
export const spacing = {
  base: "8px",
  gutter: "16px",
} as const;

/** Brand forbids corner radius > 4px anywhere. */
export const radius = {
  sharp: "4px",
} as const;

export type Colors = typeof colors;
export type TypeScale = typeof typeScale;
