import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Shippori_Mincho, Yuji_Syuku, Zen_Kaku_Gothic_New } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import { languageScript } from "@/lib/i18n";
import "./globals.css";

// Shippori Mincho: a mincho cut from letterpress type, for Japanese and English alike
const mincho = Shippori_Mincho({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mincho",
  display: "swap",
  preload: false,
});

// Titles: Yuji Syuku, a brush-written face whose English letters share the same hand
const syuku = Yuji_Syuku({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-syuku",
  display: "swap",
  preload: false,
});

// Zen Kaku Gothic New: a quiet gothic for menus, labels and the form
const gothic = Zen_Kaku_Gothic_New({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-gothic",
  display: "swap",
  preload: false,
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
    <html lang="ja" className={`${mincho.variable} ${gothic.variable} ${syuku.variable}`} suppressHydrationWarning>
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
