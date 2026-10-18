import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { DM_Sans, Libre_Caslon_Text, Noto_Serif_JP } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import { languageScript } from "@/lib/i18n";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  display: "swap",
  preload: false,
});

const caslon = Libre_Caslon_Text({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-caslon",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | NAMI" },
  description: site.description,
  applicationName: "NAMI",
  openGraph: {
    type: "website",
    siteName: "NAMI",
    title: site.title,
    description: site.description,
    locale: site.locale,
    alternateLocale: ["en_GB"],
    url: "/",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#F2E8D9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${caslon.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Applies the saved 日本語 / English choice before first paint */}
        <script dangerouslySetInnerHTML={{ __html: languageScript }} />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {/* Photo viewer and enquiry form (shared with the static preview) */}
        <Script src="/js/nami.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
