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
    en: "Calm, natural homes, inspired by Japan and made for everyday life: Japandi, modern or something in between. From a small everyday worry to a full renovation or a new build, and beyond, to the furniture, the builder and the value of your home. Our designer was born and raised in Japan.",
    ja: "日本に学んだ、落ち着いた自然な住まいを、毎日の暮らしに。ジャパンディでも、モダンでも、その間でも。毎日のちょっとしたお悩みから、リノベーション、新築、そして家具や施工会社、住まいの価値まで。デザイナーは日本生まれ、日本育ちです。",
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
  en: "Our designer holds an NSW Real Estate Certificate of Registration and is a licensed real estate agent in Japan (Takken-shi), so we design with the property market in mind. Whether you plan to stay for decades or sell in a few years, we focus on the changes that make a home more enjoyable to live in and more appealing to buyers.",
  ja: "NAMIのデザイナーは、NSW州の不動産資格(Certificate of Registration)と、日本の宅地建物取引士の資格を持っています。だから不動産の視点も持ってデザインします。何十年も住み続ける方にも、数年後に売却を考えている方にも、暮らしやすさと、買い手にとっての魅力の両方が高まるポイントに力を入れます。",
};

export const valuePoints: { title: Bi; line: Bi }[] = [
  { title: { en: "Kitchens and bathrooms", ja: "キッチンと浴室" }, line: { en: "The rooms buyers look at most closely, and where good materials show", ja: "買い手が最もよく見る場所。良い素材の差がはっきり出ます" } },
  { title: { en: "Light and flow", ja: "光と動線" }, line: { en: "Brighter rooms and an easy flow to the garden make a home feel larger", ja: "明るい部屋と庭への自然なつながりで、家が広く感じられます" } },
  { title: { en: "Storage", ja: "収納" }, line: { en: "Built-in storage keeps rooms calm and is always in demand", ja: "造り付けの収納は部屋をすっきり保ち、いつも求められます" } },
  { title: { en: "Styling for sale", ja: "売却前のスタイリング" }, line: { en: "Calm, well-styled rooms photograph better and help buyers picture living there", ja: "落ち着いて整えられた部屋は写真映えし、買い手が暮らしを想像しやすくなります" } },
];

export const valueNote: Bi = {
  en: "This is general design advice, not a valuation or financial advice. For the value of your property, talk to a licensed valuer or agent.",
  ja: "これはデザインの一般的なアドバイスであり、査定や金融のアドバイスではありません。物件の価値については、資格を持つ鑑定士や不動産会社にご相談ください。",
};

/**
 * What we design for homes, as categories. Japanese ideas appear as examples
 * inside each one (hinoki, shoji, kotatsu ...), not as a glossary.
 */
export type Category = { key: string; title: Bi; line: Bi; ideas: Bi };

export const homeCategories: Category[] = [
  {
    key: "new-builds",
    title: { en: "New builds", ja: "新築" },
    line: {
      en: "Interiors planned with the build, so layout, light, storage and materials work together from day one.",
      ja: "家づくりと一緒に内装を計画。間取り、光、収納、素材を最初からまとめてデザインします。",
    },
    ideas: {
      en: "For example: a genkan-style entry with built-in shoe storage, a raised tatami corner, a deck that opens the living room to the garden.",
      ja: "例えば:靴の収納を造り付けた玄関、小上がりの畳コーナー、リビングと庭をつなぐ縁側のようなデッキ。",
    },
  },
  {
    key: "renovations",
    title: { en: "Renovations, kitchens and bathrooms", ja: "リノベーション・キッチン・浴室" },
    line: {
      en: "We keep what is good about your home and bring it up to date, from one kitchen to the whole house.",
      ja: "今の家の良さを残しながら、新しく。キッチンひとつから、家まるごとまで。",
    },
    ideas: {
      en: "For example: a hinoki soaking tub, shoji-style screens that soften the light, a calm kitchen in solid timber and stone.",
      ja: "例えば:檜(ひのき)の湯船、光をやわらげる障子風の建具、無垢材と石の落ち着いたキッチン。",
    },
  },
  {
    key: "room-by-room",
    title: { en: "Room by room", ja: "1部屋から" },
    line: {
      en: "Start with the living room, a bedroom or a home office, and take it further when you are ready.",
      ja: "リビング、寝室、書斎など、1部屋から。必要に合わせて広げていけます。",
    },
    ideas: {
      en: "For example: a kotatsu corner for winter evenings, washi paper lighting for a softer bedroom, a quiet study with a view.",
      ja: "例えば:冬の夜のこたつコーナー、和紙の照明でやわらかくした寝室、景色の見える静かな書斎。",
    },
  },
  {
    key: "sell-rent-invest",
    title: { en: "Sell, rent or invest", ja: "売る・貸す・資産として" },
    line: {
      en: "Design with the property market in mind: styling for sale, rental fit-outs and the updates buyers value most.",
      ja: "不動産の視点でデザイン。売却前のスタイリング、賃貸用の内装、買い手が重視するポイントの改修。",
    },
    ideas: {
      en: "For example: calm, well-styled rooms that photograph well, easy-care rental interiors, a refreshed kitchen and bathroom.",
      ja: "例えば:写真映えする落ち着いた部屋づくり、手入れしやすい賃貸用の内装、キッチンと浴室の改修。",
    },
  },
];

/** Styles: many kinds of Japanese, Japan mixed with others, and styles without Japan at all. */
export const homeStyles: { title: Bi; line: Bi }[] = [
  { title: { en: "Traditional Japanese", ja: "和風・古民家風" }, line: { en: "Timber, tatami, shoji and the warmth of an old house", ja: "木、畳、障子、古い家のぬくもり" } },
  { title: { en: "Japanese modern", ja: "和モダン" }, line: { en: "Japanese materials with clean, modern lines", ja: "和の素材を、すっきりとした今のかたちで" } },
  { title: { en: "Wabi-sabi", ja: "侘び寂び" }, line: { en: "Raw, natural materials that grow more beautiful with age", ja: "素材そのままの、年月とともに美しくなる空間" } },
  { title: { en: "Japandi (Japan × Scandinavia)", ja: "ジャパンディ(日本×北欧)" }, line: { en: "Japanese calm with Scandinavian warmth", ja: "日本の落ち着きと、北欧の温かさ" } },
  { title: { en: "Japan × the world", ja: "日本×ほかの国" }, line: { en: "Japanese with coastal, Mediterranean, mid-century or industrial", ja: "日本×コースタル、地中海、ミッドセンチュリー、インダストリアルなど" } },
  { title: { en: "And without Japan", ja: "和にこだわらないデザインも" }, line: { en: "Modern, minimal, natural, classic or coastal: whatever suits how you live", ja: "モダン、ミニマル、ナチュラル、クラシック、コースタルなど、暮らしに合うものを" } },
];

/** The small things: shown as examples, for people who want to care about every detail. */
export const smallThings: Bi = {
  en: "We choose the furniture with you, of course. And if you'd like to care about the smallest things too (the tableware on your table, the scent as you walk in, the linen on the bed, a plant by the window) we can help with that as well. For us, all of it is design.",
  ja: "家具を一緒に選ぶのはもちろん。食卓の器、玄関に入ったときの香り、ベッドのリネン、窓辺の植物まで。小さなものまでこだわりたい方には、そこまでお手伝いします。私たちにとっては、そのすべてがデザインです。",
};

/** Beyond designing the house: from the builder to everyday life and future value. */
export const beyondSteps: { title: Bi; line: Bi }[] = [
  { title: { en: "Design", ja: "デザインする" }, line: { en: "Layout, light, colours and materials, in the style you love", ja: "レイアウト、光、色、素材を、お好きなスタイルで" } },
  { title: { en: "Build", ja: "建てる・つくる" }, line: { en: "We find your builder and gather quotes, and check the work matches the design", ja: "施工会社探しと見積もりの手配。工事がデザイン通りか確認します" } },
  { title: { en: "Live", ja: "暮らす" }, line: { en: "We picture daily life in the home before it is built, down to where the morning light falls", ja: "完成前から、そこでの毎日を思い描きます。朝の光がどこに差すかまで" } },
  { title: { en: "Look ahead", ja: "その先へ" }, line: { en: "Design that keeps its value, for the day you may sell or rent", ja: "いつか売るとき、貸すときにも価値が続くデザインを" } },
];

/** Everything in a home is design: what we can help choose, if you like. */
export const everydayDesign: { title: Bi; line: Bi }[] = [
  { title: { en: "Furniture and art", ja: "家具とアート" }, line: { en: "Pieces chosen for the room and for how you live", ja: "部屋と暮らし方に合わせて選びます" } },
  { title: { en: "Tableware", ja: "器" }, line: { en: "Plates, bowls and cups that make every meal feel considered", ja: "毎日の食事が少し特別になる、皿・椀・湯呑み" } },
  { title: { en: "Scent", ja: "香り" }, line: { en: "A home's scent, from hinoki to incense, part of the welcome", ja: "檜やお香など、家の香りもおもてなしの一部" } },
  { title: { en: "Light", ja: "明かり" }, line: { en: "Lamps and lighting for evening calm", ja: "夜をくつろげる照明とランプ" } },
  { title: { en: "Linen and textiles", ja: "布もの" }, line: { en: "Bedding, curtains and throws in natural fibres", ja: "自然素材の寝具、カーテン、ブランケット" } },
  { title: { en: "Plants and flowers", ja: "植物と花" }, line: { en: "Greenery and seasonal flowers that bring the garden in", ja: "庭を室内に連れてくる緑と季節の花" } },
];
