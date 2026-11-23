export const site = {
  name: "NAMI",
  tagline: "NEST AND MEMORIES INSIDE",
  /** Search titles and descriptions. Sydney is home base; work is taken on across Australia. */
  title: { en: "NAMI | Japandi Interior Design, Based in Sydney", ja: "NAMI | シドニー拠点のジャパンディ・インテリアデザイン" },
  description: {
    en: "NAMI is a Japandi interior design studio based in Sydney, led by a designer from Japan. We design homes (new builds, renovations and styling) and shops and offices, for clients in Sydney and across Australia.",
    ja: "NAMIはシドニーを拠点とするジャパンディのインテリアデザインスタジオです。デザイナーは日本出身。住まい(新築・リノベーション・スタイリング)と、お店・オフィスのデザインを、シドニーをはじめオーストラリア各地で手がけています。",
  },
  /** Shown on the page: where NAMI is and where it works. */
  base: { en: "Based in Sydney, working across Australia", ja: "シドニーを拠点に、オーストラリア各地に対応しています" },
  // TODO: replace with the production domain once it is connected on Vercel.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nami.example.com",
  instagram: "https://www.instagram.com/nami.studio_au/",
  instagramHandle: "@nami.studio_au",
  facebook: "https://www.facebook.com/share/1CV1XTPuqW/",
  email: "hello@nami-studio.com.au",
};

/** Main menu: the two businesses, then who NAMI is and how to get in touch. */
export const navigation = [
  { label: "HOMES", href: "/homes" },
  { label: "SHOPS & OFFICES", href: "/commercial" },
  { label: "ABOUT", href: "/#about" },
  { label: "CONTACT", href: "/#contact" },
];
