import type { Bi } from "@/lib/i18n";

/**
 * Homes: NAMI's residential design (new builds, renovations, single rooms)
 * plus materials that last and design that adds value. Japanese words people already search for (hinoki,
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
    title: { en: "Ageing in place", ja: "エイジング・イン・プレイス" },
    line: {
      en: "Step-free entries, walk-in showers, wider doors and good lighting, designed to look beautiful, not clinical, so you can stay in the home you love",
      ja: "段差のない入口、ウォークインシャワー、広い扉、明るい照明。介護っぽく見せず美しく、住み慣れた家で長く暮らせるように",
    },
  },
  {
    title: { en: "Granny flats", ja: "グラニーフラット(離れ)" },
    line: {
      en: "A separate small home on your land for family, guests or rental income, designed to sit well with the main house",
      ja: "敷地内の小さな離れ。家族や来客、賃貸収入にも。母屋となじむデザインで",
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

/** Materials chosen to last and to age well (shown like the glossary). */
export const lastingMaterials: { term: string; kana: string; what: Bi; use: Bi }[] = [
  {
    term: "Hinoki",
    kana: "檜",
    what: { en: "Japanese cypress: fragrant, resistant to moisture and rot, and used in temples that have stood for over a thousand years.", ja: "日本のヒノキ。香りがよく、湿気や腐れに強く、千年以上建つ寺院にも使われています。" },
    use: { en: "Baths, bathroom walls and vanities that only grow richer in colour.", ja: "湯船、浴室の壁、洗面台に。年月とともに色の深みが増します。" },
  },
  {
    term: "Solid timber",
    kana: "無垢材",
    what: { en: "Real wood all the way through, not a thin veneer. It can be sanded and refinished again and again.", ja: "表面だけの薄い板ではなく、芯まで本物の木。何度でも削り直して仕上げ直せます。" },
    use: { en: "Floors, joinery and furniture that last a lifetime.", ja: "床、造作、家具など、一生使えるものに。" },
  },
  {
    term: "Natural stone",
    kana: "天然石",
    what: { en: "Stone with its own pattern, cool to the touch and almost impossible to wear out.", ja: "一つひとつ模様の違う石。触れるとひんやりとして、ほとんどすり減りません。" },
    use: { en: "Entries, bathrooms and garden paths.", ja: "玄関、浴室、庭の小道に。" },
  },
  {
    term: "Craftsmanship",
    kana: "職人の手仕事",
    what: { en: "Joinery, paper screens and finishes made by skilled hands, with the care that machine-made pieces lack.", ja: "造作家具、障子、仕上げなど、熟練の職人による手仕事。機械にはない丁寧さがあります。" },
    use: { en: "Built-in joinery, shoji-style screens and hand-finished details.", ja: "造り付けの家具、障子風の建具、手仕上げのディテールに。" },
  },
];

/** Design that adds value: the designer's real estate background. */
export const valueIntro: Bi = {
  en: "Our designer also holds a real estate qualification, so we design with the property market in mind. Whether you plan to stay for decades or sell in a few years, we focus on the changes that make a home more enjoyable to live in and more appealing to buyers.",
  ja: "NAMIのデザイナーは不動産の資格も持っています。だから不動産の視点も持ってデザインします。何十年も住み続ける方にも、数年後に売却を考えている方にも、暮らしやすさと、買い手にとっての魅力の両方が高まるポイントに力を入れます。",
};

export const valuePoints: { title: Bi; line: Bi }[] = [
  { title: { en: "Kitchens and bathrooms", ja: "キッチンと浴室" }, line: { en: "The rooms buyers look at most closely, and where good materials show", ja: "買い手が最もよく見る場所。良い素材の差がはっきり出ます" } },
  { title: { en: "Light and flow", ja: "光と動線" }, line: { en: "Brighter rooms and an easy flow to the garden make a home feel larger", ja: "明るい部屋と庭への自然なつながりで、家が広く感じられます" } },
  { title: { en: "Storage", ja: "収納" }, line: { en: "Built-in storage keeps rooms calm and is always in demand", ja: "造り付けの収納は部屋をすっきり保ち、いつも求められます" } },
  { title: { en: "Ageing in place", ja: "エイジング・イン・プレイス" }, line: { en: "Step-free, easy-care homes suit more buyers, including downsizers", ja: "段差がなく手入れしやすい家は、住み替えの方など、より多くの買い手に合います" } },
  { title: { en: "Granny flats", ja: "グラニーフラット" }, line: { en: "A second dwelling can add living space, flexibility and rental income", ja: "離れは住まいの広さと使い道を広げ、賃貸収入にもつながります" } },
  { title: { en: "Styling for sale", ja: "売却前のスタイリング" }, line: { en: "Calm, well-styled rooms photograph better and help buyers picture living there", ja: "落ち着いて整えられた部屋は写真映えし、買い手が暮らしを想像しやすくなります" } },
];

export const valueNote: Bi = {
  en: "This is general design advice, not a valuation or financial advice. For the value of your property, talk to a licensed valuer or agent.",
  ja: "これはデザインの一般的なアドバイスであり、査定や金融のアドバイスではありません。物件の価値については、資格を持つ鑑定士や不動産会社にご相談ください。",
};
