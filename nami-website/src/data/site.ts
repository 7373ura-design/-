export const site = {
  name: "NAMI",
  tagline: "NEST AND MEMORIES INSIDE",
  /** Search titles and descriptions. Sydney is home base; work is taken on across Australia. */
  title: { en: "NAMI | Interior Design in Sydney: Homes, Shops & Offices", ja: "NAMI | シドニーのインテリアデザイン(住まい・お店・オフィス)" },
  description: {
    en: "NAMI is an interior design studio based in Sydney, led by a designer from Japan: Japandi, modern and everything in between. We design homes (new builds, renovations and styling) and shops and offices, for clients in Sydney and across Australia.",
    ja: "NAMIはシドニーを拠点とするインテリアデザインスタジオです。ジャパンディからモダンまで。デザイナーは日本出身。住まい(新築・リノベーション・スタイリング)と、お店・オフィスのデザインを、シドニーをはじめオーストラリア各地で手がけています。",
  },
  /** Shown on the page: where NAMI is and where it works. */
  base: { en: "Based in Sydney, working across Australia", ja: "シドニーを拠点に、オーストラリア各地に対応しています" },
  // TODO: replace with the production domain once it is connected on Vercel.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nami.example.com",
  instagram: "https://www.instagram.com/nami.studio_au/",
  instagramHandle: "@nami.studio_au",
  facebook: "https://www.facebook.com/share/1CV1XTPuqW/",
  email: "hello@nami-studio.com.au",
  phone: "0406 880 243",
  phoneIntl: "+61406880243",
};

/** Main menu: the two businesses, then who NAMI is and how to get in touch. */
export const navigation = [
  { label: { en: "HOMES", ja: "住まい" }, href: "/homes" },
  { label: { en: "SHOPS & OFFICES", ja: "お店・オフィス" }, href: "/commercial" },
  { label: { en: "ABOUT", ja: "NAMIについて" }, href: "/about" },
  { label: { en: "GUIDES", ja: "お役立ち" }, href: "/guides" },
  { label: { en: "CONTACT", ja: "お問い合わせ" }, href: "/book" },
];
