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
    ja: "NAMIはシドニーのインテリアデザインスタジオです。日本の考え方をオーストラリアの暮らしに合わせた、穏やかで自然なジャパンディの住まいをつくります。",
    en: "NAMI is a Sydney interior design studio. We create calm, natural Japandi homes — Japanese principles, shaped for Australian life.",
  },
};

/** About NAMI: one short line, then the designer's training and Japan Homes, as a list. */
export const background = {
  heading: { ja: "日本とオーストラリアで\n培ったデザイン", en: "Trained in Japan\nand Australia" },
  body: {
    ja: "日本で学んだ空間づくりと、ニュージーランド・オーストラリアの家づくりの経験をもとに、住まいの骨格から考えたインテリアをご提案します。",
    en: "Grounded in Japanese ways of shaping space and in building homes in New Zealand and Australia, our interiors start from the bones of your home.",
  },
  items: [
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
