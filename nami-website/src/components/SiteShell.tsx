import Script from "next/script";
import { Shippori_Mincho } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd, organizationLd, websiteLd } from "@/components/JsonLd";
import { LangProvider } from "@/lib/i18n";
import type { Lang } from "@/lib/lang";

// One typeface for every word on the site, Japanese and English alike:
// Shippori Mincho, a mincho cut from letterpress type
const mincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mincho",
  display: "swap",
  preload: false,
});

/** <html> for one language: English at "/", Japanese at "/ja". */
export function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang === "ja" ? "ja" : "en-AU"} data-lang={lang} className={mincho.variable}>
      <body>
        <JsonLd data={[organizationLd(lang), websiteLd(lang)]} />
        <LangProvider lang={lang}>
          <Header />
          <main id="main">{children}</main>
          <Footer lang={lang} />
        </LangProvider>
        {/* Photo viewer (shared with the static preview) */}
        <Script src="/js/nami.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
