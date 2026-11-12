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
    {
      title: { ja: "出身", en: "From Japan" },
      line: { ja: "日本出身。日本の住まいの考え方を、実際の暮らしの中で身につける", en: "Originally from Japan, with a first-hand feel for the Japanese way of living" },
    },
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

/** What NAMI does, as a list on the home page (the same ground as the FAQ answers). */
export const services = {
  items: [
    {
      title: { ja: "内装デザイン", en: "Interior design" },
      line: { ja: "家全体から1部屋まで。新築にもリノベーションにも対応", en: "Whole homes or single rooms, for new builds and renovations" },
    },
    {
      title: { ja: "色と素材の選定", en: "Colours and materials" },
      line: { ja: "外壁・床・キッチン・浴室を、全体のバランスを見てご提案", en: "Cladding, floors, kitchens and bathrooms, chosen to work together" },
    },
    {
      title: { ja: "家具・照明・スタイリング", en: "Furniture, lighting and styling" },
      line: { ja: "今お持ちの家具を生かした提案も", en: "Including designs built around the furniture you already have" },
    },
    {
      title: { ja: "日本の要素", en: "Japanese elements" },
      line: { ja: "畳コーナー、障子風の建具、木の格子、木のお風呂", en: "Tatami corners, shoji-style screens, timber slats and timber baths" },
    },
    {
      title: { ja: "庭と外まわり", en: "Gardens and outdoors" },
      line: { ja: "室内とつながる日本庭園やデッキまわり", en: "Japanese gardens and decks that connect with the rooms inside" },
    },
    {
      title: { ja: "対応エリア", en: "Where we work" },
      line: {
        ja: "シドニー拠点。オーストラリア各地とニュージーランドにも対応。オンライン相談は日本語・英語で",
        en: "Based in Sydney, working across Australia and in New Zealand. Online consultations in English or Japanese",
      },
    },
  ],
};
