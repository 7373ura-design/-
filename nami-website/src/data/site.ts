export const site = {
  name: "NAMI",
  tagline: "NEST AND MEMORIES INSIDE",
  /** Search titles and descriptions. Sydney is home base; work is taken on across Australia. */
  title: { en: "NAMI | Japandi Interior Design, Based in Sydney", ja: "NAMI | シドニー拠点のジャパンディ・インテリアデザイン" },
  description: {
    en: "NAMI is a Japanese-Australian interior design studio based in Sydney. We design Japandi homes, new builds and renovations, for clients in Sydney and across Australia.",
    ja: "NAMIはシドニーを拠点とする日系インテリアデザインスタジオです。日本の美意識を生かしたジャパンディの住まいを、新築・リノベーションともに、シドニーをはじめオーストラリア各地でデザインしています。",
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

/** Main menu. FAQ appears once at least one answer is written (src/data/faq.ts). */
export const navigation = [
  { label: "WORKS", href: "/#works" },
  { label: "SERVICES", href: "/#services" },
  { label: "ABOUT", href: "/#about" },
  { label: "FAQ", href: "/faq" },
  { label: "CONTACT", href: "/#contact" },
];
