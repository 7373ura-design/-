import type { Meaning, Principle } from "@/lib/types";
import type { Bi } from "@/lib/i18n";

export const hero = {
  heading: { ja: "暮らしと\n記憶を、\n空間に。", en: "Where Life\nand Memories\nFind a Home" },
  body: {
    ja: "波のように変わる毎日に寄り添い、\nその人だけの記憶が積み重なっていく\n空間をつくるインテリアデザインブランドです。",
    en: "NAMI is an interior design brand creating spaces that move with the changing waves of everyday life, where your own memories can quietly build up.",
  },
};

export const story = {
  heading: { ja: "波のように生きる、\n空間をつくる。", en: "Spaces for a Life\nThat Moves Like Waves" },
  body: {
    ja: [
      "人生には、嬉しい日もあれば、\n落ち込む日もある。",
      "NAMIは、そんな感情や出来事の揺らぎを\n「波」と捉えています。",
      "月曜日の重たい朝。\n金曜日の嬉しい夜。\n日曜日の穏やかな時間。",
      "毎日違う波があるように、\n一人ひとりの毎日に寄り添う空間を\nつくりたい。",
      "そんな想いからNAMIは生まれました。",
    ],
    en: [
      "Life has its bright days, and its harder ones.",
      "At NAMI, we think of these ups and downs as waves.",
      "A heavy Monday morning.\nA happy Friday evening.\nA calm, slow Sunday.",
      "Every day brings a different wave, so we want to create spaces that stay with each person through all of them.",
      "That is how NAMI began.",
    ],
  },
};

export const meanings: Meaning[] = [
  {
    number: "01",
    kanji: "波",
    title: "波 — NAMI",
    lead: { ja: "日々の揺らぎを、波として。", en: "Wave: the rhythm of everyday life" },
    body: {
      ja: [
        "人生には、嬉しい日もあれば、\n落ち込む日もある。",
        "NAMIは、そんな日々の揺らぎを\n「波」と捉えています。",
        "またNAMIは、\n自分の名前「Nanami」の一部から生まれた名前。",
        "自分の名前を背負い、\n責任を持って空間をつくる。\nそんな意味も込めています。",
      ],
      en: [
        "In Japanese, the character 波 (nami) means “wave”. Life has good days and difficult ones, and we see these everyday ups and downs as waves.",
        "The name also comes from part of the founder’s own name, Nanami.",
        "Putting that name to our work is a promise: we take personal responsibility for every space we create.",
      ],
    },
  },
  {
    number: "02",
    kanji: "並",
    title: "並 — NAMI",
    lead: { ja: "異なるものを、並べて生かす。", en: "Side by side: letting differences sit together" },
    body: {
      ja: [
        "自然と暮らし。建築と自然。\n庭と室内。光と影。\n人と空間。古いものと新しいもの。",
        "異なるものを無理に一つにするのではなく、\nそれぞれの個性を生かしながら並べる。",
        "「並」は、私の故郷である\n東京・杉並にもつながっています。",
        "どこへ進んでも、\n自分がどこから来たのかを忘れない。\nそんなルーツもNAMIという名前に残しています。",
      ],
      en: [
        "The character 並, also read nami, means “side by side” or “in a row”. Nature and living. Architecture and landscape. Garden and interior. Light and shadow. People and space. Old and new.",
        "Rather than forcing different things to become one, we place them side by side, so each keeps its own character.",
        "並 is also the “nami” in Suginami, the part of Tokyo the founder calls home.",
        "Wherever NAMI goes, it remembers where it came from.",
      ],
    },
  },
  {
    number: "03",
    kanji: "N",
    title: "N — A — M — I",
    lead: { ja: "Nest And Memories Inside", en: "Nest And Memories Inside" },
    body: {
      ja: [
        "Nest — 安心して帰れる場所。\nMemories — そこで積み重なっていく思い出。\nInside — その空間の内側に残っていくもの。",
        "家族との時間。一人の時間。\n笑った日。泣いた日。\n光、匂い、音、素材、家具、景色。",
        "そうした日々のすべてが、\nその人だけの記憶になっていく。",
        "NAMIは、ただ住むための建物ではなく、\n人生と思い出が積み重なっていく場所を\nつくることを目指します。",
      ],
      en: [
        "Nest: a place you feel safe coming home to.\nMemories: the moments that gather there.\nInside: everything that stays within a space.",
        "Time with family. Time alone. Days of laughter, days of tears. Light, scent, sound, materials, furniture, views.",
        "All of it becomes part of someone’s own memories.",
        "NAMI sets out to create more than somewhere to live: places where life and memories can build up over time.",
      ],
    },
  },
];

export const meaningsIntro = {
  heading: { ja: "NAMIに込めた\n3つの意味", en: "One Name,\nThree Meanings" },
  body: {
    ja: "波、並、そして N — A — M — I。\nひとつの名前に、三つの想いを込めています。",
    en: "波, 並 and N — A — M — I.\nThree ideas carried in one name.",
  },
};

export const approach = {
  heading: { ja: "日本とオーストラリア、\nふたつの視点から。", en: "Japan × Australia" },
  body: {
    ja: "日本の美意識と、オーストラリアの豊かな自然。\nそれぞれの良さを活かしながら、\n人の暮らしに寄り添う、心地よい空間をつくります。",
    en: "Japanese sensibility meets Australia’s natural landscape. We draw on the best of both to create calm, comfortable spaces that fit the way people live.",
  },
};

export const principles: Principle[] = [
  {
    key: "nature",
    number: "01",
    title: "NATURE",
    sub: { ja: "自然とのつながり", en: "Connection to nature" },
    body: { ja: "光、風、庭、海。外の気配を室内に招き入れる。", en: "Light, breeze, garden and sea, brought indoors." },
  },
  {
    key: "balance",
    number: "02",
    title: "BALANCE",
    sub: { ja: "バランスと余白", en: "Balance and space" },
    body: {
      ja: "置くものと、置かないもの。余白も空間の一部として。",
      en: "What to include and what to leave out. Empty space is part of the design.",
    },
  },
  {
    key: "material",
    number: "03",
    title: "MATERIAL",
    sub: { ja: "素材の美しさ", en: "The beauty of materials" },
    body: {
      ja: "木、土、石、紙、リネン。時間とともに深まる素材を。",
      en: "Timber, clay, stone, paper and linen: materials that grow richer with time.",
    },
  },
  {
    key: "simplicity",
    number: "04",
    title: "SIMPLICITY",
    sub: { ja: "足しすぎない", en: "Never too much" },
    body: { ja: "必要なものを、必要なだけ。静かで、使いやすく。", en: "Only what is needed. Quiet, and easy to live with." },
  },
  {
    key: "people",
    number: "05",
    title: "PEOPLE",
    sub: { ja: "その人らしい暮らし", en: "A home that feels like you" },
    body: {
      ja: "住む人の習慣、記憶、好きなもの。そこから始める。",
      en: "We start with the people who live there: their habits, memories and favourite things.",
    },
  },
];

export const japanAustralia: { japan: Bi[]; australia: Bi[] } = {
  japan: [
    { ja: "静けさ", en: "Stillness" },
    { ja: "余白", en: "Space" },
    { ja: "素材", en: "Materials" },
    { ja: "職人", en: "Craft" },
    { ja: "四季", en: "Four seasons" },
    { ja: "内と外", en: "Inside and out" },
  ],
  australia: [
    { ja: "自然", en: "Nature" },
    { ja: "光", en: "Light" },
    { ja: "風", en: "Breeze" },
    { ja: "海", en: "Ocean" },
    { ja: "Indoor / Outdoor", en: "Indoor / outdoor" },
    { ja: "Relaxed Living", en: "Relaxed living" },
  ],
};

/** The four approach points shown on Home. */
export const approachIcons: { title: Bi; body: Bi }[] = [
  {
    title: { ja: "自然とのつながり", en: "Connection to nature" },
    body: { ja: "海・光・風を感じる\n空間づくり", en: "Spaces that let in\nthe sea, light and breeze" },
  },
  {
    title: { ja: "バランスと余白", en: "Balance and space" },
    body: { ja: "シンプルで豊かな\n暮らし", en: "Simple,\ngenerous living" },
  },
  {
    title: { ja: "素材の美しさ", en: "Beautiful materials" },
    body: { ja: "自然素材と\n手仕事の温かさ", en: "Natural materials\nand the warmth of craft" },
  },
  {
    title: { ja: "その人らしい暮らし", en: "A home that feels like you" },
    body: { ja: "ライフスタイルに\n寄り添うデザイン", en: "Design shaped around\nthe way you live" },
  },
];

/**
 * NAMI's link with Japan Homes, written for clients: what the connection is,
 * what it gives them, and who does what. NAMI designs interiors; building
 * work stays with licensed builders.
 */
export const roots: {
  heading: Bi;
  body: Bi;
  points: { title: Bi; line: Bi }[];
  note: Bi;
} = {
  heading: { ja: "20年以上の家づくりに、\n支えられて。", en: "Backed by\n20+ Years of Building" },
  body: {
    ja: "NAMIは、Japan Homesとのつながりから生まれました。Japan Homesは、日本の家づくりの考え方を生かしながら、20年以上にわたってオーストラリアとニュージーランドで住まいを建ててきた住宅会社です。",
    en: "NAMI grew out of our connection with Japan Homes, a builder that has spent more than 20 years building homes across Australia and New Zealand with Japanese building methods.",
  },
  points: [
    {
      title: { ja: "現場を知っている提案", en: "Advice grounded in building" },
      line: { ja: "実際に家を建ててきた知識をもとに、無理のない提案をします", en: "Ideas checked against how homes are really built" },
    },
    {
      title: { ja: "オーストラリアの住まいに合わせて", en: "Made for Australian homes" },
      line: { ja: "気候や基準、暮らし方を踏まえて考えます", en: "Climate, standards and the way people live here" },
    },
    {
      title: { ja: "役割がはっきりしている", en: "Clear roles" },
      line: { ja: "NAMIはインテリア。建築工事は有資格の施工会社が担当します", en: "NAMI designs interiors; building work is done by licensed builders" },
    },
  ],
  note: {
    ja: "ご相談の最初に、誰が何を担当するのかをきちんとご説明します。わからないことは、いつでもお気軽にお尋ねください。",
    en: "From the first conversation, we explain clearly who does what. If anything is unclear, just ask.",
  },
};
