import type { Bi } from "@/lib/i18n";

/**
 * Homes: NAMI's residential design (new builds, renovations, single rooms)
 * and budget styling. Japanese words people already search for (hinoki,
 * shoji, tatami, washi ...) are used as hooks, each explained plainly.
 */

export const homesHero = {
  kicker: "JAPANDI HOME INTERIOR DESIGN, SYDNEY",
  title: { en: "Japandi Interiors\nfor Your Home", ja: "日本の美意識を、\n住まいに。" },
  body: {
    en: "We design Japandi homes in Sydney: new builds, renovations and single rooms, with Japanese details such as hinoki timber, shoji screens and tatami. Our designer is from Japan.",
    ja: "シドニーで、ジャパンディの住まいをデザインしています。新築、リノベーション、1部屋のスタイリングまで。檜(ひのき)、障子、畳など、日本の要素も取り入れます。デザイナーは日本出身です。",
  },
};

export type Item = { title: Bi; line: Bi };

export const homeServices: Item[] = [
  {
    title: { en: "New builds", ja: "新築" },
    line: {
      en: "Interiors planned with the build, so layout, light and materials work together from the start",
      ja: "家づくりと一緒に内装を計画。間取り・光・素材を最初からまとめてデザイン",
    },
  },
  {
    title: { en: "Renovations", ja: "リノベーション" },
    line: {
      en: "We keep what is good about your home and bring it up to date",
      ja: "今の家の良さを残しながら、新しくするデザイン",
    },
  },
  {
    title: { en: "Single-room styling", ja: "1部屋のスタイリング" },
    line: { en: "Start with just the living room, kitchen or a bedroom", ja: "リビング、キッチン、寝室など1部屋から" },
  },
  {
    title: { en: "Budget styling", ja: "予算に合わせたスタイリング" },
    line: {
      en: "A Japandi look with affordable pieces from IKEA, Kmart and similar stores. Ideas on our Instagram",
      ja: "IKEAやKmartなど、手に入りやすい家具や雑貨でつくるジャパンディ。アイデアはInstagramで発信中",
    },
  },
  {
    title: { en: "Colours and materials", ja: "色と素材の選定" },
    line: {
      en: "Cladding, floors, kitchens and bathrooms, chosen to work together",
      ja: "外壁・床・キッチン・浴室を、全体のバランスを見てご提案",
    },
  },
  {
    title: { en: "Furniture, lighting and styling", ja: "家具・照明・スタイリング" },
    line: { en: "Including designs built around the furniture you already have", ja: "今お持ちの家具を生かした提案も" },
  },
  {
    title: { en: "Japanese elements", ja: "日本の要素" },
    line: {
      en: "Hinoki baths, shoji screens, tatami corners, washi lighting and timber slats",
      ja: "檜のお風呂、障子、畳コーナー、和紙の照明、木の格子",
    },
  },
  {
    title: { en: "Gardens and outdoors", ja: "庭と外まわり" },
    line: { en: "Japanese gardens and decks that connect with the rooms inside", ja: "室内とつながる日本庭園やデッキまわり" },
  },
];

/** Japanese design words, explained: what each is and how we use it in an Australian home. */
export const glossary: { term: string; kana: string; what: Bi; use: Bi }[] = [
  {
    term: "Hinoki",
    kana: "檜",
    what: {
      en: "Japanese cypress: a pale, fragrant timber that resists moisture, used for centuries in Japanese baths and temples.",
      ja: "日本のヒノキ。明るい色と良い香りがあり、水に強い木材です。昔からお風呂やお寺に使われてきました。",
    },
    use: {
      en: "Hinoki soaking tubs, bathroom wall panels, vanities and small furniture.",
      ja: "檜の湯船、浴室の壁、洗面台、小さな家具などに。",
    },
  },
  {
    term: "Shoji",
    kana: "障子",
    what: {
      en: "Sliding screens of translucent paper on a timber lattice that soften daylight and divide rooms gently.",
      ja: "木の格子に和紙を貼った引き戸。光をやわらげ、部屋をゆるやかに仕切ります。",
    },
    use: {
      en: "Shoji-style doors, window screens and wardrobe fronts, in modern, durable materials.",
      ja: "障子風の扉、窓の目隠し、クローゼットの扉などに。今の暮らしに合う丈夫な素材で。",
    },
  },
  {
    term: "Tatami",
    kana: "畳",
    what: {
      en: "Firm floor mats covered in woven rush grass, soft to sit on and with a fresh, grassy scent.",
      ja: "い草を編んだ床のマット。座り心地がよく、さわやかな香りがあります。",
    },
    use: {
      en: "A tatami corner in the living room, a guest room or a raised tatami platform.",
      ja: "リビングの畳コーナー、客間、小上がりの畳スペースなどに。",
    },
  },
  {
    term: "Washi",
    kana: "和紙",
    what: {
      en: "Traditional Japanese paper made from plant fibres: strong, light and softly translucent.",
      ja: "植物の繊維からつくる日本の紙。丈夫で軽く、光をやわらかく通します。",
    },
    use: {
      en: "Pendant lights, lamp shades and wall panels with a warm, even glow.",
      ja: "ペンダントライト、ランプシェード、壁のパネルなど、やさしい明かりに。",
    },
  },
  {
    term: "Engawa",
    kana: "縁側",
    what: {
      en: "The timber veranda along the edge of a traditional Japanese house, halfway between inside and out.",
      ja: "日本の家の縁にある木の廊下。家の中と外のあいだの場所です。",
    },
    use: {
      en: "Decks and wide sliding doors that make the garden part of the living room.",
      ja: "デッキと大きな引き戸で、庭をリビングの一部に。",
    },
  },
  {
    term: "Genkan",
    kana: "玄関",
    what: {
      en: "The entry where shoes come off, a step below the rest of the home, keeping the house clean and calm.",
      ja: "靴を脱ぐ入口の場所。一段下がっていて、家の中を清潔で落ち着いた状態に保ちます。",
    },
    use: {
      en: "Entries with built-in shoe storage, a bench and a clear place to arrive.",
      ja: "靴の収納、腰掛け、帰ってきてほっとできる入口づくりに。",
    },
  },
  {
    term: "Ofuro",
    kana: "お風呂",
    what: {
      en: "The Japanese deep soaking bath, made for resting in rather than washing.",
      ja: "日本の深い湯船。体を洗うためではなく、ゆっくり浸かって休むためのお風呂です。",
    },
    use: {
      en: "Deep timber or stone tubs, indoors or out on the deck.",
      ja: "木や石の深い湯船を、室内やデッキに。",
    },
  },
  {
    term: "Wabi-sabi",
    kana: "侘び寂び",
    what: {
      en: "The Japanese idea of finding beauty in natural, simple and imperfect things that age well.",
      ja: "自然でシンプルなもの、不完全なもの、時間とともに味わいが増すものに美しさを見出す、日本の考え方です。",
    },
    use: {
      en: "Natural materials, handmade pieces and finishes that look better with time.",
      ja: "自然素材、手仕事の品、年月とともに味わいの出る仕上げに。",
    },
  },
];

export const homeSteps: Item[] = [
  { title: { en: "Get in touch", ja: "お問い合わせ" }, line: { en: "Email, Instagram or Facebook, in English or Japanese", ja: "メール、Instagram、Facebookから。日本語でも英語でも" } },
  { title: { en: "Free first consultation", ja: "無料のご相談" }, line: { en: "We listen to how you live, what you like and your budget", ja: "暮らし方、お好み、ご予算をうかがいます" } },
  { title: { en: "Quote", ja: "お見積もり" }, line: { en: "A clear quote before any work begins", ja: "始める前に、わかりやすいお見積もりを" } },
  { title: { en: "Design proposal", ja: "デザインのご提案" }, line: { en: "Layout, colours, materials, lighting and furniture", ja: "レイアウト、色、素材、照明、家具まで" } },
  { title: { en: "Changes and decisions", ja: "修正・決定" }, line: { en: "We refine the design together until you are happy", ja: "ご納得いただけるまで、一緒に整えます" } },
  { title: { en: "Through to completion", ja: "完成まで" }, line: { en: "We work with your builder and trades, and check the result matches the design", ja: "工務店や職人の方と連携し、デザイン通りに仕上がるか確認します" } },
];
