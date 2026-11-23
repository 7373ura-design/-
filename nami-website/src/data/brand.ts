import type { Bi } from "@/lib/i18n";

/**
 * Brand copy. The English is the wording of the NAMI Instagram posts
 * ("What is NAMI?"); the Japanese follows it. Keep the two in step with the
 * posts rather than adding to them here.
 */

export const hero = {
  kicker: "JAPANDI INTERIOR DESIGN, SYDNEY",
  /** The shared summary on the top page, before the two businesses. */
  intro: {
    en: "NAMI is a Japandi interior design studio based in Sydney, led by a designer from Japan. We design homes, and shops and offices, bringing Japanese ideas of light, natural materials and calm to the way Australians live and work.",
    ja: "NAMIは、シドニーを拠点とするジャパンディのインテリアデザインスタジオです。デザイナーは日本出身。住まいと、お店・オフィスのデザインを手がけ、日本の光の取り入れ方、自然素材、落ち着きを、オーストラリアの暮らしと仕事の場に届けます。",
  },
  heading: { ja: "暮らしと\n記憶を、\n空間に。", en: "Where Life\nand Memories\nFind a Home" },
  body: {
    ja: "日本の美意識を、今の暮らしに。",
    en: "Japanese sensibility, for the way you live now.",
  },
};

/** About NAMI: the designer's training and Japan Homes, as a list. */
export const background = {
  items: [
    {
      title: { ja: "出身", en: "From Japan" },
      line: { ja: "日本出身。日本の住まいの考え方を、実際の暮らしの中で身につける", en: "Originally from Japan, with a first-hand feel for the Japanese way of living" },
    },
    { title: { ja: "建築", en: "Architecture" }, line: { ja: "日本の大学で建築を学ぶ", en: "Studied architecture at university in Japan" } },
    {
      title: { ja: "資格", en: "Qualifications" },
      line: { ja: "日本庭園・ジャパンディ・インテリアデザイン", en: "Japanese garden design, Japandi, interior design" },
    },
    {
      title: { ja: "Residential Drafting", en: "Residential Drafting" },
      line: { ja: "オーストラリアの住宅製図（Certificate IV）の専門教育", en: "Training in Australian residential drafting (Certificate IV)" },
    },
    {
      title: { ja: "Japan Homes 公認", en: "Recognised by Japan Homes" },
      line: {
        ja: "ニュージーランドとオーストラリアで20年以上、実用的な住まいを建ててきたJapan Homesの公認インテリアデザイン",
        en: "Interior design recognised by Japan Homes, builders of practical homes in New Zealand and Australia for over 20 years",
      },
    },
  ],
};

/** The two businesses, chosen on the top page. */
export const businesses = [
  {
    key: "homes",
    href: "/homes",
    title: { en: "Homes", ja: "住まい" },
    meta: { en: "Residential · Explore homes", ja: "住まい · 詳しく見る" },
    strip: ["/images/portfolio/old-meets-new/03.jpg", "/images/portfolio/living-in-green/10.jpg", "/images/portfolio/old-meets-new/05.jpg"],
    line: {
      en: "New builds, renovations and single-room styling, plus budget styling with IKEA and Kmart",
      ja: "新築、リノベーション、1部屋のスタイリング。IKEAやKmartを使った手軽なスタイリングも",
    },
    image: "/images/portfolio/old-meets-new/02.jpg",
    alt: "Old Meets New: a Japandi renovation by NAMI with timber slat screens at the entry",
  },
  {
    key: "commercial",
    href: "/commercial",
    title: { en: "Shops and Offices", ja: "お店・オフィス" },
    meta: { en: "Commercial · Explore shops and offices", ja: "お店・オフィス · 詳しく見る" },
    strip: ["/images/washi/byobu.jpg", "/images/washi/scrolls.jpg", "/images/washi/tea.jpg"],
    line: {
      en: "Offices, clinics, schools, shops and cafés, with a free design proposal and building by Japan Homes",
      ja: "オフィス、クリニック、教室、お店、カフェ。無料のデザイン提案と、ジャパンホームズによる工事",
    },
    image: "/images/washi/desk.jpg",
    alt: "A tea cup, floor plans and material samples on a designer's desk",
  },
] as const;

/** What both businesses share. */
export const strengths = [
  {
    title: { en: "A designer from Japan", ja: "日本出身のデザイナー" },
    line: { en: "The Japanese way of living, known first-hand, not just studied", ja: "日本の住まいの考え方を、学んだだけでなく実体験として" },
  },
  {
    title: { en: "Japandi, made for Australia", ja: "オーストラリアに合うジャパンディ" },
    line: { en: "Hinoki, shoji, tatami and washi, shaped for Australian homes, light and climate", ja: "檜、障子、畳、和紙を、オーストラリアの家と光と気候に合わせて" },
  },
  {
    title: { en: "Built with Japan Homes", ja: "ジャパンホームズと施工" },
    line: { en: "Building work by our licensed partner, with over 20 years in New Zealand and Australia", ja: "ニュージーランドとオーストラリアで20年以上の実績を持つ、ライセンスのあるパートナーが工事" },
  },
  {
    title: { en: "English and Japanese", ja: "日本語と英語" },
    line: { en: "Talk to us in either language, in person in Sydney or online", ja: "どちらの言葉でも。シドニーで直接でも、オンラインでも" },
  },
];

/** Our philosophy, shared by both businesses. */
export const philosophy = {
  title: { en: "Design begins with light,\nnatural materials\nand calm.", ja: "デザインは、\n光と自然素材と\n落ち着きから。" },
  body: {
    en: "We plan how daylight moves through each room, choose natural materials such as timber, paper and stone, and keep only what is needed. The result is a space that stays calm and easy to live or work in for years, rather than one that follows a trend.",
    ja: "部屋ごとに光の入り方を考え、木・紙・石などの自然素材を選び、必要なものだけを残します。流行を追うのではなく、何年たっても落ち着いて、暮らしやすく働きやすい空間をつくります。",
  },
};
