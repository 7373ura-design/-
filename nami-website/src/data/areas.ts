import type { Bi } from "@/lib/i18n";

/** Where we work: Sydney (base), Melbourne, Perth, New Zealand and Japan. */
export type Area = { slug: string; name: Bi; lead: Bi; how: { title: Bi; line: Bi }[]; note?: Bi };

export const areas: Area[] = [
  {
    slug: "sydney",
    name: { en: "Sydney", ja: "シドニー" },
    lead: {
      en: "Sydney is our home base. We visit your home, office or shop in person, and arrange licensed builders across the city through Japan Homes' 20+ years of connections.",
      ja: "シドニーはNAMIの拠点です。ご自宅やオフィス、お店に直接うかがい、ジャパンホームズとの20年以上のつながりを通して、シドニー各地でライセンスを持つ施工会社を手配します。",
    },
    how: [
      { title: { en: "In person", ja: "直接お伺い" }, line: { en: "Site visits, measure-ups and meetings", ja: "現地確認、採寸、打ち合わせ" } },
      { title: { en: "Homes, shops and offices", ja: "住まいもお店も" }, line: { en: "All our services are available in Sydney", ja: "すべてのサービスに対応" } },
      { title: { en: "Builders arranged", ja: "施工会社の手配" }, line: { en: "Licensed builders and trades we know and trust", ja: "よく知る、信頼できる施工会社と職人" } },
    ],
  },
  {
    slug: "melbourne",
    name: { en: "Melbourne", ja: "メルボルン" },
    lead: {
      en: "We design homes in Melbourne, working online and visiting when the project needs it. Builders are arranged through Japan Homes' connections.",
      ja: "メルボルンの住まいもデザインしています。オンラインを中心に、必要に応じて現地にうかがいます。施工会社はジャパンホームズのつながりで手配します。",
    },
    how: [
      { title: { en: "Online first", ja: "オンライン中心" }, line: { en: "Meetings by video call, design from photos and plans", ja: "ビデオ通話での打ち合わせ、写真や図面からのデザイン" } },
      { title: { en: "Visits when needed", ja: "必要に応じて訪問" }, line: { en: "We'll talk about it case by case", ja: "個別にご相談ください" } },
      { title: { en: "Builders arranged", ja: "施工会社の手配" }, line: { en: "Through Japan Homes' connections", ja: "ジャパンホームズのつながりで" } },
    ],
  },
  {
    slug: "perth",
    name: { en: "Perth", ja: "パース" },
    lead: {
      en: "We have designed for clients in Perth. We work online with photos and plans, and talk through how the build will be arranged case by case.",
      ja: "パースのお客様のデザインも手がけています。写真や図面をもとにオンラインで進め、施工の手配は個別にご相談しながら決めます。",
    },
    how: [
      { title: { en: "Online", ja: "オンライン" }, line: { en: "Video calls, mood boards and layouts", ja: "ビデオ通話、ムードボード、レイアウト" } },
      { title: { en: "Design packages", ja: "デザイン一式" }, line: { en: "Everything your builder needs to follow the design", ja: "施工会社がデザイン通りに進められる資料一式" } },
      { title: { en: "Builders", ja: "施工会社" }, line: { en: "Arranged case by case", ja: "個別にご相談" } },
    ],
  },
  {
    slug: "new-zealand",
    name: { en: "New Zealand", ja: "ニュージーランド" },
    lead: {
      en: "We have completed projects in New Zealand, where our partner Japan Homes has worked since 2008. We design online and, where needed, through Japan Homes' local connections.",
      ja: "ニュージーランドでも実際にプロジェクトを手がけてきました。パートナーのジャパンホームズが2008年から活動している地域です。オンラインで、必要に応じて現地のつながりも生かして進めます。",
    },
    how: [
      { title: { en: "Online", ja: "オンライン" }, line: { en: "Design from anywhere in New Zealand", ja: "ニュージーランドのどこからでも" } },
      { title: { en: "Local connections", ja: "現地のつながり" }, line: { en: "Through Japan Homes in Auckland", ja: "オークランドのジャパンホームズを通して" } },
      { title: { en: "Homes and shops", ja: "住まいもお店も" }, line: { en: "Renovations, new builds and shop fit-outs", ja: "リノベーション、新築、店舗内装" } },
    ],
  },
  {
    slug: "japan",
    name: { en: "Japan", ja: "日本" },
    lead: {
      en: "We design for homes in Japan too, in Japanese or English: for families in Japan, and for people living overseas with a home there.",
      ja: "日本の住まいのデザインも、日本語でも英語でも。日本にお住まいのご家族にも、海外に住みながら日本に家をお持ちの方にも。",
    },
    how: [
      { title: { en: "Online", ja: "オンライン" }, line: { en: "Meetings by video call across time zones", ja: "時差に合わせたビデオ通話での打ち合わせ" } },
      { title: { en: "Japanese real estate knowledge", ja: "日本の不動産の知識" }, line: { en: "Licensed real estate agent in Japan (Takken-shi)", ja: "宅地建物取引士の資格" } },
      { title: { en: "Builders", ja: "施工会社" }, line: { en: "Arranged case by case", ja: "個別にご相談" } },
    ],
  },
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
