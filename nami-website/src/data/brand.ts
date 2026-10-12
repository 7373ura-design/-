import type { Meaning, Principle } from "@/lib/types";
import type { Bi } from "@/lib/i18n";

export const hero = {
  heading: { ja: "暮らしと\n記憶を、\n空間に。", en: "Where life\nand memories\nfind a home." },
  body: {
    ja: "日本の家の考え方を、オーストラリアの家へ。\nインテリアデザインのNAMIです。",
    en: "Japanese ideas about home, brought to Australian houses. I’m Nanami, and this is NAMI, my interior design practice.",
  },
};

export const story = {
  heading: { ja: "気分には、波がある。", en: "Moods come in waves." },
  body: {
    ja: [
      "月曜の朝は体が重い。\n金曜の夜は少し浮かれている。\n日曜は、なにもしたくない。",
      "家は、そのどの日にも帰ってくる場所です。",
      "調子のいい日だけじゃなく、しんどい日にもちゃんと休める部屋。NAMIでつくりたいのは、そういう部屋です。",
    ],
    en: [
      "Monday mornings feel heavy. Friday nights, a little giddy. On Sundays I don’t want to do anything at all.",
      "Home is where we come back to on every one of those days.",
      "I want to design rooms that work on the good days and the hard ones. That is what NAMI is for.",
    ],
  },
};

/** Short notes on the name, used on Home. The full versions are in `meanings`. */
export const nameNotes = [
  {
    mark: "波",
    ja: "波（なみ）。毎日の気分の上がり下がり。\nそれから、私の名前 Nanami の一部。",
    en: "波 (nami) means wave: the ups and downs of everyday life. It’s also part of my name, Nanami.",
  },
  {
    mark: "並",
    ja: "並（なみ）。「ならぶ」の並。\n木と石、古い椅子と新しい机、庭と部屋。混ぜずに、隣に置く。\n地元・杉並の「並」でもあります。",
    en: "並, also read nami, means side by side. Timber next to stone, an old chair beside a new desk, garden beside room: placed together, not blended. It’s also the nami in Suginami, the part of Tokyo I come from.",
  },
  {
    mark: "N",
    ja: "Nest And Memories Inside。\n帰ってくる巣と、そこにたまっていく記憶。",
    en: "Nest And Memories Inside: a nest to come home to, and the memories that collect there.",
  },
];

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
  heading: { ja: "NAMIに込めた\n3つの意味", en: "Three meanings\nbehind NAMI" },
  body: {
    ja: "波、並、そして N — A — M — I。\nひとつの名前に、三つの想いを込めています。",
    en: "波, 並 and N — A — M — I.\nThree ideas carried in one name.",
  },
};

export const approach = {
  heading: { ja: "日本とオーストラリア、\nふたつの視点から。", en: "Two perspectives:\nJapan and Australia." },
  body: {
    ja: "日本の家づくりの細かさと、オーストラリアの外で過ごす暮らし。\nどちらかに寄せず、両方を同じ部屋に置いてみる。それがNAMIのやり方です。",
    en: "The precision of Japanese homes, and the outdoor life of Australian ones. Rather than choosing one, I try to fit both into the same room.",
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

/** The four approach icons shown on Home (artwork from the NAMI reference design). */
export const approachIcons: { icon: string; title: Bi; body: Bi }[] = [
  {
    icon: "/images/approach/a1.png",
    title: { ja: "自然とのつながり", en: "Connection to nature" },
    body: { ja: "海・光・風を感じる\n空間づくり", en: "Spaces that let in\nthe sea, light and breeze" },
  },
  {
    icon: "/images/approach/a2.png",
    title: { ja: "バランスと余白", en: "Balance and space" },
    body: { ja: "置くものより\n置かないものを決める", en: "Deciding what to leave out\nbefore what to put in" },
  },
  {
    icon: "/images/approach/a3.png",
    title: { ja: "素材の美しさ", en: "Beautiful materials" },
    body: { ja: "自然素材と\n手仕事の温かさ", en: "Natural materials\nand the warmth of craft" },
  },
  {
    icon: "/images/approach/a4.png",
    title: { ja: "その人らしい空間", en: "Spaces that feel like you" },
    body: { ja: "住む人の習慣から\n考える", en: "Starting from the habits\nof the people who live there" },
  },
];
