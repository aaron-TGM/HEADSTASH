import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-google",
  weight: ["400", "500"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://joinheadstash.com";
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Headstash — Save the receipt. Hear from the brand.",
    template: "%s · Headstash",
  },
  description:
    "One app for every cannabis brand you buy. Upload your receipt. Your favorite brands see you. They decide how to say thanks — merch, early access, drops, or something else entirely.",
  applicationName: "Headstash",
  authors: [{ name: "Tuff Ghost Media LLC" }],
  creator: "Tuff Ghost Media LLC",
  publisher: "Tuff Ghost Media LLC",
  openGraph: {
    type: "website",
    siteName: "Headstash",
    title: "Headstash — Save the receipt. Hear from the brand.",
    description:
      "One app for every cannabis brand you buy. Each brand decides how to say thanks.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Headstash — Save the receipt. Hear from the brand.",
    description: "One app for every cannabis brand you buy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0E0E",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload ONLY the Regular weight — brand spec §12. */}
        <link
          rel="preload"
          href="/fonts/BluntFamily-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {PLAUSIBLE_DOMAIN ? (
          <script
            defer
            data-domain={PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
      </head>
      <body className="min-h-dvh bg-onyx text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
