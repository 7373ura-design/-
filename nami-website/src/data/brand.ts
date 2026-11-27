import type { Bi } from "@/lib/i18n";

/**
 * Brand copy. Wording follows the NAMI tri-fold leaflet ("NAMI 三つ折りチラシ"
 * in Canva) and the Instagram posts: short, warm, plain. Keep them in step.
 */

export const hero = {
  kicker: "JAPANDI INTERIOR DESIGN, SYDNEY",
  /** The shared summary on the top page, before the two businesses. */
  intro: {
    en: "Calm, natural spaces designed around how you live, from Japanese-inspired to modern and everything in between. NAMI is an interior design studio in Sydney, led by a designer born and raised in Japan. We design homes, shops and offices.",
    ja: "暮らし方に合わせた、落ち着いた自然な空間を。和の要素を取り入れたデザインから、モダンなデザイン、その間まで。NAMIはシドニーのインテリアデザインスタジオです。デザイナーは日本生まれ、日本育ち。住まいと、お店・オフィスをデザインしています。",
  },
  heading: { ja: "暮らしと\n記憶を、\n空間に。", en: "Where Life\nand Memories\nFind a Home" },
  body: {
    ja: "日本の美意識を、今の暮らしに。",
    en: "Japanese sensibility, for the way you live now.",
  },
};

/** About NAMI: the designer and their qualifications (as on the leaflet). */
export const background = {
  items: [
    {
      title: { ja: "日本生まれ、日本育ち", en: "Born and raised in Japan" },
      line: { ja: "日本の暮らしの知恵を、実体験として。それをオーストラリアの家へ", en: "Real, everyday wisdom from Japan, brought into your Australian home" },
    },
    {
      title: { ja: "インテリア", en: "Interior design" },
      line: { ja: "Certificate of Interior Design & Property Styling", en: "Certificate of Interior Design & Property Styling" },
    },
    {
      title: { ja: "日本庭園", en: "Japanese gardens" },
      line: { ja: "Certificate in Japanese Garden Design Essentials", en: "Certificate in Japanese Garden Design Essentials" },
    },
    {
      title: { ja: "建築", en: "Architecture" },
      line: { ja: "Contemporary Japanese Architecture(東京大学)", en: "Contemporary Japanese Architecture (The University of Tokyo)" },
    },
    {
      title: { ja: "住宅製図", en: "Residential drafting" },
      line: { ja: "オーストラリアの住宅製図(Certificate IV)", en: "Australian residential drafting (Certificate IV)" },
    },
    {
      title: { ja: "不動産", en: "Real estate" },
      line: {
        ja: "NSW Real Estate Certificate of Registration / 宅地建物取引士(日本)",
        en: "NSW Real Estate Certificate of Registration; Licensed Real Estate Agent, Japan (Takken-shi)",
      },
    },
    {
      title: { ja: "ジャパンホームズ", en: "Japan Homes" },
      line: { ja: "ジャパンホームズのバックアップ。20年以上の信頼のつながり", en: "Backed by Japan Homes, with 20+ years of trusted connections" },
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
    strip: ["/images/portfolio/welcome-home/03.jpg", "/images/portfolio/simply-special/05.jpg", "/images/portfolio/old-meets-new/07.jpg"],
    line: {
      en: "New builds, renovations and styling, in materials that last and with your property's value in mind",
      ja: "新築、リノベーション、スタイリング。長く使える素材で、住まいの価値まで考えて",
    },
    image: "/images/portfolio/living-in-green/09.jpg",
    alt: "Living in Green by NAMI: a bright open-plan living room with light timber floors",
  },
  {
    key: "commercial",
    href: "/commercial",
    title: { en: "Shops and Offices", ja: "お店・オフィス" },
    meta: { en: "Commercial · Explore shops and offices", ja: "お店・オフィス · 詳しく見る" },
    strip: ["/images/concepts/engawa-office/01-reception.jpg", "/images/concepts/sunrise-and-waves/02-reception.jpg", "/images/concepts/sunrise-and-waves/03-sunrise-room.jpg"],
    line: {
      en: "Offices, clinics, shops and cafés, with a free design proposal and builders arranged for you",
      ja: "オフィス、クリニック、お店、カフェ。無料のデザイン提案と、施工会社の手配まで",
    },
    image: "/images/concepts/sunrise-and-waves/01-lounge.jpg",
    alt: "Sunrise & Waves, a Japanese massage studio concept by NAMI",
  },
] as const;

/** Why choose NAMI (from the leaflet). */
export const strengths = [
  {
    title: { en: "Qualified", ja: "確かな資格" },
    line: { en: "Interior design, Japanese gardens and real estate, in Australia and Japan. Any room, garden or the whole home", ja: "インテリア、日本庭園、不動産の資格を、オーストラリアと日本で。1部屋から、庭、家まるごとまで" },
  },
  {
    title: { en: "Designed with property value in mind", ja: "住まいの価値まで考えて" },
    line: { en: "A real estate background means we design for how you live and for what the home is worth", ja: "不動産の視点で、暮らしやすさと住まいの価値の両方を考えます" },
  },
  {
    title: { en: "Backed by Japan Homes", ja: "ジャパンホームズのバックアップ" },
    line: { en: "20+ years of trusted connections and proven building craftsmanship. High-quality materials and trades", ja: "20年以上の信頼のつながりと、確かな施工技術。質の高い素材と職人" },
  },
  {
    title: { en: "Responsible from design to build", ja: "デザインから施工まで責任を持って" },
    line: { en: "From design to finding your builder, budget-aware until the build begins. Easy for you, no running around", ja: "デザインから施工会社探しまで。工事が始まるまで予算に気を配ります。あちこち走り回る必要はありません" },
  },
];

/** Our approach (from the leaflet). */
export const philosophy = {
  title: { en: "In Japan, it was never\njust a look.", ja: "日本では、\n見た目だけの\nものではなかった。" },
  body: {
    en: "Outside Japan, Japandi is often about the look. In Japan, it was simply how we live: calm, practical and made to last.",
    ja: "日本の外では、ジャパンディは「見た目」として語られがちです。でも日本では、それはただの暮らし方でした。落ち着いていて、実用的で、長く使えるもの。",
  },
  points: [
    {
      title: { en: "We design for function, too", ja: "使いやすさまでデザイン" },
      line: { en: "Japanese ways of living, adjusted to Australian homes, climate and lifestyle, for a better everyday", ja: "日本の暮らし方を、オーストラリアの家と気候と生活に合わせて。毎日をもっと心地よく" },
    },
    {
      title: { en: "Born and raised in Japan", ja: "日本生まれ、日本育ち" },
      line: { en: "Real, everyday wisdom from Japan, brought into your Australian home", ja: "日本の本物の暮らしの知恵を、オーストラリアの家へ" },
    },
    {
      title: { en: "Any style you love", ja: "お好きなスタイルで" },
      line: { en: "Japandi, modern or something in between, always designed around how you live", ja: "ジャパンディでも、モダンでも、その間でも。いつも暮らし方に合わせてデザインします" },
    },
  ],
};

/** The launch offer (from the leaflet). */
export const launchOffer = {
  kicker: "TO CELEBRATE NAMI'S LAUNCH",
  title: { en: "Free interior design\nfor your home.", ja: "住まいのインテリアデザインを、\n無料で。" },
  body: {
    en: "To celebrate our opening, we're offering a free design to only 10 homes. A$0 design fee.",
    ja: "オープンを記念して、10軒限定で住まいのデザインを無料でお引き受けします。デザイン料は0ドルです。",
  },
  includes: [
    { title: { en: "Personal design consultation", ja: "個別のデザイン相談" }, line: { en: "We listen to how you live and what you love", ja: "暮らし方やお好みをじっくりうかがいます" } },
    { title: { en: "Tailored design concept", ja: "あなただけのデザインコンセプト" }, line: { en: "A concept made for your home, not a template", ja: "型ではなく、あなたの家のためのコンセプト" } },
    { title: { en: "Mood board for your space", ja: "ムードボード" }, line: { en: "Colours, materials and the feel of the room in one place", ja: "色、素材、雰囲気を一目で" } },
    { title: { en: "Up to two rounds of revisions", ja: "修正は2回まで" }, line: { en: "We refine the design together", ja: "一緒にデザインを整えます" } },
    { title: { en: "Builder search & quotes arranged", ja: "施工会社探しと見積もりの手配" }, line: { en: "Reliable builders, arranged for you", ja: "信頼できる施工会社を、こちらで手配します" } },
  ],
  cta: { en: "Want the details? Email us or DM @nami.studio_au.", ja: "詳しくは、メールかInstagram(@nami.studio_au)のDMでお気軽にどうぞ。" },
};
