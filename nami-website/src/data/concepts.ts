import type { Bi } from "@/lib/i18n";

/**
 * Concept projects for shops and offices: each goes from the meaning behind
 * the design (the business, what it values, the theme we chose and why) to
 * the space, room by room. The pictures are design visualisations, labelled
 * as such. "Engawa Office" is a sample for a fictional company.
 */
export type Concept = {
  slug: string;
  title: string;
  kind: Bi;
  note: Bi;
  lead: Bi;
  cover: { src: string; alt: string };
  /** Who the space is for and what it should do for them. */
  brief: { title: Bi; body: Bi };
  /** Why this theme: three short reasons. */
  reasons: { title: Bi; body: Bi }[];
  /** The business's values, and how the design carries them. */
  values: { title: Bi; body: Bi };
  rooms: { src?: string; alt?: string; title: Bi; line: Bi }[];
  /** Japanese words used in the design, for the glossary at the end. */
  words: { term: string; kana: string; line: Bi }[];
};

export const concepts: Concept[] = [
  {
    slug: "sunrise-and-waves",
    title: "Sunrise & Waves",
    kind: { en: "Japanese massage studio · Concept design", ja: "日本式マッサージスタジオ · コンセプトデザイン" },
    note: { en: "Design visualisations from our concept proposal.", ja: "コンセプト提案のイメージパースです。" },
    lead: {
      en: "A massage studio where the mind grows calm the moment you step in, themed on the morning sun over the bay and the gentle waves.",
      ja: "入った瞬間に心が落ち着くマッサージスタジオ。テーマは、湾にのぼる朝日と、おだやかな波です。",
    },
    cover: {
      src: "/images/concepts/sunrise-and-waves/01-lounge.jpg",
      alt: "Sunrise & Waves concept: the lounge with reclining chairs, timber wall slats and indigo seigaiha fabric across the ceiling",
    },
    brief: {
      title: { en: "The brief", ja: "どんな場所にしたかったか" },
      body: {
        en: "A Japanese massage is about more than the treatment. It starts at the door: the light, the sound, the feel of the room tell you that you can let go. We wanted guests to feel that calm from the first step, and to leave lighter than they came, without the space turning into a Japanese theme park.",
        ja: "日本式のマッサージは、施術だけではありません。扉を開けた瞬間の光、音、空気が「もう力を抜いていいよ」と伝えてくれます。一歩目からその落ち着きを感じて、来たときより軽くなって帰ってもらう。ただし、和風のテーマパークにはしない。それがこの店の目標でした。",
      },
    },
    reasons: [
      {
        title: { en: "The bay of first light", ja: "はじまりの光の湾" },
        body: {
          en: "The studio looks towards a bay whose Māori name, Te Waitaramoa, is sometimes translated as \"the bay of first light\". The place already had its story.",
          ja: "お店が面する湾には、マオリ語で「テ・ワイタラモア」という名前があり、「はじまりの光の湾」と訳されることもあります。物語は、この場所にすでにありました。",
        },
      },
      {
        title: { en: "One of the earliest dawns", ja: "世界で最も早い朝のひとつ" },
        body: {
          en: "This part of the world is one of the first to greet each new day. Every morning, that sunrise reaches the bay outside.",
          ja: "この地域は、世界で最も早く新しい一日を迎える場所のひとつです。その朝日が、毎朝この湾に届きます。",
        },
      },
      {
        title: { en: "Like waking to a new morning", ja: "新しい朝に目覚めるように" },
        body: {
          en: "Each treatment ends in soft light. You open your eyes slowly, body and mind lighter, as if greeting a new day.",
          ja: "施術の最後は、やわらかな光の中で。ゆっくり目を開けると、体も心も軽く、新しい朝を迎えたような気持ちになります。",
        },
      },
    ],
    values: {
      title: { en: "From meaning to space", ja: "意味を、空間に" },
      body: {
        en: "The waves come from the traditional Japanese pattern seigaiha, \"waves of the blue sea\", which carries a wish for a peaceful life that goes on and on. That wish is what a good massage gives: a little more calm to carry home. So the waves move overhead in indigo and natural linen, the sunrise greets you at reception, and each treatment room takes one of the two: the orange of dawn, or the indigo of the sea. Timber, linen and washi paper keep everything soft and quiet, Japanese in feeling rather than in costume.",
        ja: "波は、日本の伝統文様「青海波(せいがいは)」から。どこまでも続く波に、穏やかな暮らしがずっと続くようにという願いが込められています。それは良いマッサージが与えてくれるもの、つまり持ち帰れる少しの落ち着きと同じです。だから天井には藍色と生成りのリネンの波を、受付には朝日の掛け軸を。施術室はそれぞれ、朝焼けのオレンジと海の藍色をテーマにしました。木、リネン、和紙ですべてをやわらかく静かにまとめ、見た目の「和風」ではなく、感じる「日本」を目指しています。",
      },
    },
    rooms: [
      {
        src: "/images/concepts/sunrise-and-waves/01-lounge.jpg",
        alt: "Sunrise & Waves concept: the lounge with reclining chairs, timber wall slats and indigo seigaiha fabric across the ceiling",
        title: { en: "Lounge", ja: "ラウンジ" },
        line: {
          en: "Indigo and linen fabric with the seigaiha wave pattern sways across the ceiling when the door opens. Timber slats line the walls.",
          ja: "扉が開くたびに、青海波模様の藍色とリネンの布が天井で波のように揺れます。壁は木の格子で。",
        },
      },
      {
        src: "/images/concepts/sunrise-and-waves/02-reception.jpg",
        alt: "Sunrise & Waves concept: a timber reception counter with a hanging scroll of the sunrise, and sudare bamboo blinds",
        title: { en: "Reception", ja: "受付" },
        line: {
          en: "A hanging scroll of the sunrise greets you behind the counter. Sudare bamboo blinds soften the view from the street.",
          ja: "受付の奥では、朝日の掛け軸がお出迎え。簾(すだれ)が通りからの視線をやわらげます。",
        },
      },
      {
        src: "/images/concepts/sunrise-and-waves/03-sunrise-room.jpg",
        alt: "Sunrise & Waves concept: the Sunrise treatment room with an orange throw and a round washi paper lantern",
        title: { en: "Sunrise Room", ja: "サンライズルーム" },
        line: {
          en: "An orange throw, the colour of dawn, and a round washi paper lantern. White curtains close for privacy.",
          ja: "朝焼けの色のオレンジのブランケットと、丸い和紙の提灯。白いカーテンで個室になります。",
        },
      },
      {
        src: "/images/concepts/sunrise-and-waves/04-waves-room.jpg",
        alt: "Sunrise & Waves concept: the Waves treatment room with an indigo seigaiha throw and a washi lantern",
        title: { en: "Waves Room", ja: "ウェーブルーム" },
        line: {
          en: "An indigo seigaiha throw carries the wave pattern, like the tide rolling in, with the same soft lantern and curtains.",
          ja: "藍色の青海波のブランケットが、満ちてくる潮のように波の模様を運びます。提灯とカーテンは同じです。",
        },
      },
    ],
    words: [
      { term: "Seigaiha", kana: "青海波", line: { en: "A traditional wave pattern; a wish for a peaceful life that continues", ja: "伝統の波の文様。穏やかな暮らしが続くようにという願い" } },
      { term: "Sudare", kana: "簾", line: { en: "Bamboo blinds that let in breeze and light but soften views", ja: "風と光を通しながら、視線をやわらげる竹のすだれ" } },
      { term: "Kakejiku", kana: "掛け軸", line: { en: "A hanging scroll, traditionally changed with the season to welcome guests", ja: "季節に合わせて掛け替え、お客様を迎える掛け軸" } },
      { term: "Washi", kana: "和紙", line: { en: "Japanese paper that turns light soft and even", ja: "光をやわらかく均一にする日本の紙" } },
    ],
  },
  {
    slug: "engawa-office",
    title: "Engawa Office",
    kind: { en: "Office for a professional services firm · Sample concept", ja: "士業・コンサルティング会社のオフィス · サンプルコンセプト" },
    note: {
      en: "A sample concept to show how we work. The company is fictional; the picture is a design visualisation.",
      ja: "NAMIの進め方をお見せするためのサンプルです。会社は架空で、画像はイメージです。",
    },
    lead: {
      en: "An office for an accounting and advisory firm, built around the engawa: the timber veranda where Japanese households welcomed neighbours for tea and talk.",
      ja: "会計・アドバイザリー会社のオフィス。テーマは「縁側」。日本の家で、ご近所さんをお茶とおしゃべりで迎えた木の縁側です。",
    },
    cover: {
      src: "/images/concepts/engawa-office/01-reception.jpg",
      alt: "Engawa Office sample concept: a calm reception with timber slat walls, a timber counter and a round washi paper light",
    },
    brief: {
      title: { en: "The brief", ja: "どんな場所にしたかったか" },
      body: {
        en: "Visiting an accountant or adviser can feel stressful: money, paperwork, big decisions. This firm prides itself on being approachable and on relationships that last for decades. They wanted clients to relax the moment they arrive, to talk openly, and to feel their affairs are in safe hands.",
        ja: "会計士やアドバイザーへの相談は、お金、書類、大きな決断と、緊張しがちです。この会社が大切にしているのは、相談しやすいことと、何十年も続くお付き合い。来た瞬間に肩の力が抜けて、何でも話せて、「任せて大丈夫」と思える場所を目指しました。",
      },
    },
    reasons: [
      {
        title: { en: "A low threshold", ja: "敷居を低く" },
        body: {
          en: "An engawa is neither fully inside nor outside, so neighbours could drop by without ceremony. The reception does the same: no tall counter, seating at eye level, conversation first.",
          ja: "縁側は、家の中でも外でもない場所。だからご近所さんも気軽に立ち寄れました。受付も同じように、高いカウンターを置かず、目線をそろえて座れるように。まずは会話から。",
        },
      },
      {
        title: { en: "Open, but private", ja: "開かれていて、守られている" },
        body: {
          en: "Timber slats and shoji-style screens let light and glimpses pass but keep conversations private, just as good advice is open and confidential at once.",
          ja: "木の格子と障子風の仕切りは、光と気配は通しながら、会話は守ります。良い相談が、率直でありながら秘密が守られるのと同じです。",
        },
      },
      {
        title: { en: "Better with time", ja: "時とともに深まる" },
        body: {
          en: "Engawa timber grows richer with years of use. So do the firm's client relationships, many of them spanning generations.",
          ja: "縁側の木は、使い込むほど味わいが増します。何世代にもわたるお客様との関係も同じです。",
        },
      },
    ],
    values: {
      title: { en: "From meaning to space", ja: "意味を、空間に" },
      body: {
        en: "We began by asking the team what they want clients to feel, and what they want to feel themselves at work. The answers were trust, ease and focus. Natural timber and a single washi light make the reception feel like a welcome rather than a front desk. Meeting rooms sit behind shoji-style screens for daylight and privacy. The work area faces the windows, with soft indigo accents for calm, so the team can concentrate on the details that clients rely on.",
        ja: "まず社員の皆さんに、お客様にどう感じてほしいか、自分たちは職場でどう感じたいかを聞くことから始めます。答えは「信頼」「気軽さ」「集中」。無垢の木とひとつの和紙の照明で、受付を「窓口」ではなく「おもてなし」の場に。打ち合わせ室は障子風の仕切りの奥に置き、光とプライバシーを両立。執務スペースは窓に向けて配置し、落ち着いた藍色をアクセントに。お客様が頼りにする細かな仕事に、チームが集中できるようにしています。",
      },
    },
    rooms: [
      {
        src: "/images/concepts/engawa-office/01-reception.jpg",
        alt: "Engawa Office sample concept: reception with timber slat walls, a timber counter and a round washi paper light",
        title: { en: "Reception", ja: "受付" },
        line: {
          en: "Timber slat walls, a low timber counter and a single round washi light. Seating by the window, like sitting on an engawa.",
          ja: "木の格子の壁、低い木のカウンター、ひとつの丸い和紙の照明。窓辺の椅子は、縁側に腰掛けるように。",
        },
      },
      {
        title: { en: "Meeting rooms", ja: "打ち合わせ室" },
        line: {
          en: "Behind shoji-style screens: daylight comes through, conversations stay private. One solid timber table.",
          ja: "障子風の仕切りの奥に。光は通り、会話は守られます。無垢の木のテーブルをひとつ。",
        },
      },
      {
        title: { en: "Work area", ja: "執務スペース" },
        line: {
          en: "Desks facing the light, indigo accents and plants. Calm enough to focus on the detail.",
          ja: "光に向かうデスク、藍色のアクセント、植物。細かな仕事に集中できる落ち着き。",
        },
      },
    ],
    words: [
      { term: "Engawa", kana: "縁側", line: { en: "The timber veranda between house and garden, where neighbours were welcomed", ja: "家と庭のあいだの木の縁側。ご近所さんを迎えた場所" } },
      { term: "Shoji", kana: "障子", line: { en: "Paper screens on a timber lattice that soften light and give privacy", ja: "木の格子に和紙を貼った仕切り。光をやわらげ、目線を守る" } },
      { term: "Washi", kana: "和紙", line: { en: "Japanese paper that turns light soft and even", ja: "光をやわらかく均一にする日本の紙" } },
      { term: "Omotenashi", kana: "おもてなし", line: { en: "Japanese hospitality: caring for a guest before they need to ask", ja: "日本のおもてなし。頼まれる前に相手を思いやる心" } },
    ],
  },
];

export function getConcept(slug: string) {
  return concepts.find((c) => c.slug === slug);
}

/** How we find the meaning behind a design, shown on the Shops & Offices page. */
export const meaningSteps: { title: Bi; line: Bi }[] = [
  { title: { en: "Listen", ja: "聞く" }, line: { en: "Your story, what you value, your customers and your team", ja: "会社の歩み、大切にしていること、お客様とチームのこと" } },
  { title: { en: "Find the theme", ja: "テーマを見つける" }, line: { en: "A Japanese idea or a story from your place that says the same thing", ja: "同じ思いを伝える、日本の考え方や、その土地の物語" } },
  { title: { en: "Turn it into space", ja: "空間にする" }, line: { en: "Layout, light, materials and colour, each with a reason", ja: "レイアウト、光、素材、色。そのすべてに理由を" } },
  { title: { en: "Share the story", ja: "物語を伝える" }, line: { en: "A concept your team and customers can feel and talk about", ja: "社員もお客様も感じられて、語れるコンセプトに" } },
];
