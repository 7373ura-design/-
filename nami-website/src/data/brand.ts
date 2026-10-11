import type { Meaning, Principle } from "@/lib/types";

export const story = {
  heading: ["波のように生きる、", "空間をつくる。"],
  body: [
    "人生には、嬉しい日もあれば、\n落ち込む日もある。",
    "NAMIは、そんな感情や出来事の揺らぎを\n「波」と捉えています。",
    "月曜日の重たい朝。\n金曜日の嬉しい夜。\n日曜日の穏やかな時間。",
    "毎日違う波があるように、\n一人ひとりの毎日に寄り添う空間を\nつくりたい。",
    "そんな想いからNAMIは生まれました。",
  ],
};

export const meanings: Meaning[] = [
  {
    number: "01",
    kanji: "波",
    title: "波 — NAMI",
    lead: "日々の揺らぎを、波として。",
    body: [
      "人生には、嬉しい日もあれば、\n落ち込む日もある。",
      "NAMIは、そんな日々の揺らぎを\n「波」と捉えています。",
      "またNAMIは、\n自分の名前「Nanami」の一部から生まれた名前。",
      "自分の名前を背負い、\n責任を持って空間をつくる。\nそんな意味も込めています。",
    ],
  },
  {
    number: "02",
    kanji: "並",
    title: "並 — NAMI",
    lead: "異なるものを、並べて生かす。",
    body: [
      "自然と暮らし。建築と自然。\n庭と室内。光と影。\n人と空間。古いものと新しいもの。",
      "異なるものを無理に一つにするのではなく、\nそれぞれの個性を生かしながら並べる。",
      "「並」は、私の故郷である\n東京・杉並にもつながっています。",
      "どこへ進んでも、\n自分がどこから来たのかを忘れない。\nそんなルーツもNAMIという名前に残しています。",
    ],
  },
  {
    number: "03",
    kanji: "N",
    title: "N — A — M — I",
    lead: "Nest And Memories Inside",
    body: [
      "Nest — 安心して帰れる場所。\nMemories — そこで積み重なっていく思い出。\nInside — その空間の内側に残っていくもの。",
      "家族との時間。一人の時間。\n笑った日。泣いた日。\n光、匂い、音、素材、家具、景色。",
      "そうした日々のすべてが、\nその人だけの記憶になっていく。",
      "NAMIは、ただ住むための建物ではなく、\n人生と思い出が積み重なっていく場所を\nつくることを目指します。",
    ],
  },
];

export const approach = {
  heading: ["日本とオーストラリア、", "ふたつの視点から。"],
  body: "日本の美意識と、オーストラリアの豊かな自然。\nそれぞれの良さを活かしながら、\n人の暮らしに寄り添う、\n心地よい空間をつくります。",
};

export const principles: Principle[] = [
  {
    key: "nature",
    number: "01",
    title: "NATURE",
    titleJa: "自然とのつながり",
    body: "光、風、庭、海。外の気配を室内に招き入れる。",
  },
  {
    key: "balance",
    number: "02",
    title: "BALANCE",
    titleJa: "バランスと余白",
    body: "置くものと、置かないもの。余白も空間の一部として。",
  },
  {
    key: "material",
    number: "03",
    title: "MATERIAL",
    titleJa: "素材の美しさ",
    body: "木、土、石、紙、リネン。時間とともに深まる素材を。",
  },
  {
    key: "simplicity",
    number: "04",
    title: "SIMPLICITY",
    titleJa: "足しすぎない",
    body: "必要なものを、必要なだけ。静かで、使いやすく。",
  },
  {
    key: "people",
    number: "05",
    title: "PEOPLE",
    titleJa: "その人らしい暮らし",
    body: "住む人の習慣、記憶、好きなもの。そこから始める。",
  },
];

export const japanAustralia = {
  japan: ["静けさ", "余白", "素材", "職人", "四季", "内と外"],
  australia: ["自然", "光", "風", "海", "Indoor / Outdoor", "Relaxed Living"],
};

/** The four approach icons shown on Home (artwork from the NAMI reference design). */
export const approachIcons = [
  { icon: "/images/approach/a1.png", title: "自然とのつながり", body: "海・光・風を感じる\n空間づくり" },
  { icon: "/images/approach/a2.png", title: "バランスと余白", body: "シンプルで豊かな\n暮らし" },
  { icon: "/images/approach/a3.png", title: "素材の美しさ", body: "自然素材と\n手仕事の温かさ" },
  { icon: "/images/approach/a4.png", title: "その人らしい空間", body: "ライフスタイルに\n寄り添うデザイン" },
];
