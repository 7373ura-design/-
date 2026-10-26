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
    ja: "日本の美意識を、今の暮らしに。",
    en: "Japanese sensibility, for the way you live now.",
  },
};

/** About NAMI: the designer's training and Japan Homes, as a list. */
export const background = {
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
