import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Noto_Serif_JP } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/Motion";
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

const cormorant = Cormorant_Garamond({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-cormorant",
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
  themeColor: "#F7F1E5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content is never hidden without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {/* Applies the saved 日本語 / English choice before first paint */}
        <script dangerouslySetInnerHTML={{ __html: languageScript }} />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
