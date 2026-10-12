import type { Bi } from "@/lib/i18n";

/**
 * What NAMI takes from Japanese home building, and how it is adapted to
 * Australian homes. Each entry says what Japan does and what that becomes
 * here; the last entry is explicit about what does NOT carry over.
 * NAMI designs interiors; regulated building work is left to licensed builders.
 */
export const craftIntro: Bi = {
  ja: "日本の家づくりを、そのままオーストラリアに持ち込むわけではありません。気候も、地震の多さも、家の広さも、暮らし方も違うからです。役に立つ考え方だけを選び、オーストラリアの家に合わせて使っています。",
  en: "Japanese house-building doesn’t transfer to Australia wholesale: the climate, the earthquake risk, the size of homes and the way people live are all different. NAMI keeps only the ideas that are useful here, and adapts them to Australian homes.",
};

export const craft: { number: string; title: string; heading: Bi; body: Bi }[] = [
  {
    number: "01",
    title: "PRECISION",
    heading: { ja: "現場で、ミリ単位で測る", en: "Measured on site, to the millimetre" },
    body: {
      ja: "日本では柱や梁を工場で正確に加工する「プレカット」が一般的です。オーストラリアの古い家は、壁や床が少しずつ歪んでいることも多いので、図面の数字だけに頼らず、現場で測ってから造作家具や収納の寸法を決めます。",
      en: "In Japan, posts and beams are usually precut in a factory to exact sizes. Older Australian homes often have walls and floors slightly out of true, so rather than trusting the drawings alone, we measure on site before sizing built-in joinery and storage.",
    },
  },
  {
    number: "02",
    title: "MODULE",
    heading: { ja: "ひとつの物差しでそろえる", en: "One measure throughout" },
    body: {
      ja: "日本の家は約910mm（3尺）の格子で設計されます。オーストラリアでは、石膏ボードなどの板材は1200mm幅、間柱は450mmか600mm間隔が一般的です。棚や造作をこの寸法に合わせて割り付けると、材料の無駄が減り、線もきれいにそろいます。",
      en: "Japanese homes are planned on a grid of about 910 mm. In Australia, sheet materials such as plasterboard usually come 1200 mm wide and studs sit at 450 or 600 mm centres. Setting out shelves and joinery to those sizes wastes less material and keeps the lines clean.",
    },
  },
  {
    number: "03",
    title: "LIGHT",
    heading: { ja: "強い日差しを、やわらげる", en: "Softening strong sunlight" },
    body: {
      ja: "障子やすだれは、日差しをやわらかな光に変える日本の知恵です。オーストラリアの紫外線はとても強く、床や家具、布の色あせも早く進みます。薄手のカーテン、外付けの日よけ、色あせしにくい生地を組み合わせて、明るさを残したまま光をやわらげます。",
      en: "Shoji screens and bamboo blinds are Japan’s way of turning harsh sun into soft light. Australia’s UV is very strong, and floors, furniture and fabrics fade quickly. We combine sheer curtains, external shading and fade-resistant fabrics to soften the light while keeping rooms bright.",
    },
  },
  {
    number: "04",
    title: "CLIMATE",
    heading: { ja: "軒と風で、夏を涼しく", en: "Eaves and breeze for summer" },
    body: {
      ja: "深い軒は、高い夏の日差しを遮り、低い冬の日差しを部屋の奥まで届けます。南半球のオーストラリアでは、リビングを北向きにするのが基本です。風の通り道をふさがない家具の配置や、天井ファンとの組み合わせで、夏の暑さをしのぎやすくします。",
      en: "Deep eaves block the high summer sun and let the low winter sun reach deep into a room. In the southern hemisphere, living areas ideally face north. We place furniture so it doesn’t block cross-breezes, and pair it with ceiling fans, to make Australian summers easier to live with.",
    },
  },
  {
    number: "05",
    title: "ENTRY",
    heading: { ja: "玄関で、外と内を分ける", en: "An entry that separates outside from in" },
    body: {
      ja: "日本の家では玄関で靴を脱ぎます。海や庭から砂や土を持ち込みやすいオーストラリアの家こそ、入口に靴やバッグ、鍵を置く場所があると、家の中がずっと片付きます。靴を脱ぐかどうかは、住む人に合わせて決めます。",
      en: "In Japan, shoes come off at the genkan, the entrance. In Australian homes, where sand and garden soil come in easily, a proper drop zone by the door for shoes, bags and keys keeps the rest of the house noticeably tidier. Whether shoes come off is up to the people who live there.",
    },
  },
  {
    number: "06",
    title: "LEFT BEHIND",
    heading: { ja: "持ち込まないもの", en: "What we leave behind" },
    body: {
      ja: "地震の多い日本ほどの耐震の工夫は、オーストラリアの住宅では基本的に必要ありません（背の高い家具の固定は、子どもやペットのためにも勧めています）。狭い部屋を前提にした寸法や、靴やペットに弱い畳もそのままは使いません。持ち込むのは形ではなく、考え方です。",
      en: "Australia has far fewer earthquakes than Japan, so Japanese-level seismic detailing isn’t needed in most homes (we still suggest fixing tall furniture to the wall, for children and pets). Nor do we copy proportions designed for very small rooms, or tatami floors that don’t suit shoes and pets. We bring the thinking, not the forms.",
    },
  },
];
