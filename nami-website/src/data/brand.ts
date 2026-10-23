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

/** The designer's background: training in Japan and Australia. */
export const background = {
  heading: { ja: "日本とオーストラリアで\n培ったデザイン", en: "Trained in Japan\nand Australia" },
  body: {
    ja: "日本の大学で建築を学び、日本庭園をはじめ、日本の空間づくりを専門的に学んできました。オーストラリアでは住宅製図（Certificate IV in Residential Drafting）の専門教育を通して、この国の住まいのつくり方を身につけています。住まいの骨格から考えたインテリアをご提案します。",
    en: "Architecture studied at university in Japan, with specialist study of Japanese gardens and Japanese ways of shaping space. In Australia, training in Residential Drafting (Certificate IV) grounds that knowledge in how homes here are drawn and built. Our interiors start from the bones of your home.",
  },
  items: [
    { title: { ja: "建築", en: "Architecture" }, line: { ja: "日本の大学で学ぶ", en: "Studied at university in Japan" } },
    { title: { ja: "日本庭園", en: "Japanese gardens" }, line: { ja: "日本の空間づくりを専門的に", en: "Specialist study of Japanese space" } },
    { title: { ja: "Residential Drafting", en: "Residential Drafting" }, line: { ja: "Certificate IV（オーストラリア）", en: "Certificate IV, Australia" } },
  ],
};

export const roots = {
  heading: { ja: "Japan Homes 公認", en: "Recognised by Japan Homes" },
  body: {
    ja: "NAMIは、Japan Homes公認のインテリアデザインです。ニュージーランドとオーストラリアで20年以上、実用的な住まいを建ててきたJapan Homesの経験を生かし、図面の上だけでなく、実際の家で生きるデザインをお届けします。",
    en: "NAMI is the interior design studio recognised by Japan Homes. Drawing on Japan Homes’ 20+ years of building practical homes in New Zealand and Australia, we create designs that work in real homes, not just on paper.",
  },
};
