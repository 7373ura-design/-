import type { Bi } from "@/lib/i18n";

/**
 * Brand copy. The English is the wording of the NAMI Instagram posts
 * ("What is NAMI?"); the Japanese follows it. Keep the two in step with the
 * posts rather than adding to them here.
 */

export const hero = {
  kicker: "JAPANDI INTERIOR DESIGN, SYDNEY",
  heading: { ja: "暮らしと\n記憶を、\n空間に。", en: "Where Life\nand Memories\nFind a Home" },
  body: {
    ja: "NAMIはシドニーのインテリアデザインスタジオです。日本の考え方をオーストラリアの暮らしに合わせた、穏やかで自然なジャパンディの住まいをつくります。ひと部屋から家全体まで、最初のアイデアから最終プランまで。レイアウト、素材、家具、スタイリングをご一緒に考えます。",
    en: "NAMI is a Sydney interior design studio. We create calm, natural Japandi homes — Japanese principles, shaped for Australian life. From one room to a whole home, we guide you from first idea to final plan — layout, materials, furniture, styling.",
  },
};

export type Meaning = { number: string; glyph: string; title: Bi; sub: string; lead: Bi; body: Bi };

export const meanings: Meaning[] = [
  {
    number: "01",
    glyph: "波",
    title: { ja: "Waves", en: "Waves" },
    sub: "LIFE MOVES IN WAVES.",
    lead: {
      ja: "暮らしとともに動く家。穏やかな日にも、忙しい日にも。",
      en: "Homes that move with life — calm on quiet days, ready for the busy ones.",
    },
    body: {
      ja: "穏やかな日もあれば、慌ただしい日もある。家は、人生のどの季節にも寄り添い、それでも自分らしくいられる場所であってほしい。集まる場所、くつろぐ片隅、毎日を楽にする収納。暮らしに合わせて変わっていける部屋をデザインします。",
      en: "Some days are calm, some are full. A home should hold you through every season of life — and still feel like yours. We design rooms that adapt as you do: space to gather, corners to rest, and storage that keeps everyday life easy.",
    },
  },
  {
    number: "02",
    glyph: "並",
    title: { ja: "Side by Side", en: "Side by Side" },
    sub: "DIFFERENT, TOGETHER.",
    lead: {
      ja: "異なるものを、バランスよく。日本とオーストラリア、古いものと新しいもの、自然と住まい。",
      en: "Different things in balance: Japan and Australia, old and new, nature and home.",
    },
    body: {
      ja: "日本とオーストラリア。古いものと新しいもの。自然と建築。それぞれの個性を生かしながら、その間のバランスを見つけます。石の隣に木。大きな窓の隣に、和紙のやわらかな光。のびやかな暮らしの隣に、静かな秩序。",
      en: "Japan and Australia. Old and new. Nature and architecture. We let each keep its character — and find the balance between them. Timber beside stone. Soft paper light beside big windows. Quiet order beside relaxed, open living.",
    },
  },
  {
    number: "03",
    glyph: "N",
    title: { ja: "N.A.M.I", en: "N.A.M.I" },
    sub: "NEST AND MEMORIES INSIDE",
    lead: {
      ja: "Nest And Memories Inside。帰りたくなる場所と、そこに積み重なる物語。",
      en: "Nest And Memories Inside — a place to come home to, and the stories it keeps.",
    },
    body: { ja: "", en: "" },
  },
];

/** The four letters of N.A.M.I, as on the post. */
export const letters: { letter: string; word: string; line: Bi }[] = [
  { letter: "N", word: "Nest", line: { ja: "毎日帰りたくなる場所", en: "A place you want to come home to, every single day" } },
  { letter: "A", word: "And", line: { ja: "人と空間、そして外の自然をつなぐ", en: "Connecting people, space and the nature outside" } },
  { letter: "M", word: "Memories", line: { ja: "ここで過ごす時間が、少しずつ家族の思い出になる", en: "Time spent here slowly becomes family memory" } },
  { letter: "I", word: "Inside", line: { ja: "モノだけでなく、心に残る気持ち", en: "The feelings that stay with you, not just the things" } },
];

export const nameCare = {
  heading: { ja: "大切に背負う名前", en: "A Name We Carry With Care" },
  body: {
    ja: "家はこうあってほしい。穏やかで、変わっていけて、思い出に満ちている。そんな想いを込めた名前です。そしてそれは約束でもあります。まず話を聴くこと。あなたの暮らし方を尊重すること。ひとつひとつの空間を丁寧にデザインすること。",
    en: "A name that holds what we believe a home should be: calm yet changing, full of memories. It is also a promise — to listen first, to respect how you live, and to design every space with care.",
  },
};

export const roots = {
  heading: { ja: "20年以上の家づくりに、\n支えられて。", en: "Backed by 20+ Years" },
  body: {
    ja: "NAMIは、Japan Homesとのつながりから生まれました。オーストラリアとニュージーランドで20年以上、美しく実用的な住まいを建ててきた経験があります。だからこそ、図面の上だけでなく、実際のオーストラリアの家で生きるデザインができます。",
    en: "NAMI grows from our connection with Japan Homes — over 20 years of building beautiful, practical homes across Australia and New Zealand. That experience means designs that work in real Australian homes, not just on paper.",
  },
  note: {
    ja: "NAMIはインテリアを担当し、建築工事は有資格の施工会社が行います。",
    en: "NAMI designs interiors; building work is done by licensed builders.",
  },
};

export const promise = {
  heading: { ja: "すべての住まいへの約束", en: "Our Promise to Every Home" },
  items: [
    {
      title: { ja: "ともに育つ家", en: "Homes that grow with you" },
      line: { ja: "今の暮らしと、これからの年月のために", en: "Designed for the life you live now — and for the years ahead of you." },
    },
    {
      title: { ja: "同じではなく、調和を", en: "Balance, not sameness" },
      line: { ja: "素材も文化もアイデアも、それぞれの個性のまま並べて", en: "Every material, culture and idea keeps its own character, side by side." },
    },
    {
      title: { ja: "思い出を抱く空間", en: "Spaces that hold memories" },
      line: { ja: "家族の物語を、年を重ねて静かに抱く家", en: "A home that quietly holds your family’s story, year after year." },
    },
  ],
};
