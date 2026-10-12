import type { Bi } from "@/lib/i18n";

/**
 * What NAMI takes from the way Japanese homes are built. Inspired by the
 * approach of Japanese-method builders in Oceania (Japanese building framework,
 * tidy work, attention to detail, homes made for local lifestyles), written in
 * NAMI’s own words. NAMI designs interiors; it does not build. Regulated
 * building work is always left to licensed builders.
 */
export const craft: { number: string; title: string; heading: Bi; body: Bi }[] = [
  {
    number: "01",
    title: "PRECISION",
    heading: { ja: "ミリ単位の精度", en: "Accurate to the millimetre" },
    body: {
      ja: "日本の木造住宅では、柱や梁を工場で正確に加工する「プレカット」が一般的です。隙間のない納まりは、見た目の美しさだけでなく、長く快適に住める家につながります。NAMIは、家具の寸法や配置、収納の奥行きも同じ精度で考えます。",
      en: "In Japan, posts and beams are usually precut: machined accurately in a factory before they reach the site. Tight, gap-free joins look better and help a home stay comfortable for longer. NAMI brings the same precision to furniture sizes, layouts and storage depths.",
    },
  },
  {
    number: "02",
    title: "MODULE",
    heading: { ja: "910mmのリズム", en: "The 910 mm rhythm" },
    body: {
      ja: "多くの日本の家は、約910mm（3尺）を基本単位にした格子の上で設計されます。柱、建具、畳、収納がこの単位にそろうことで、空間に静かなリズムが生まれます。部屋の大きさや家具の寸法を、ひとつの物差しでそろえて考えます。",
      en: "Many Japanese homes are planned on a grid of about 910 mm, three shaku in the traditional measure. When posts, doors, tatami and cupboards all follow it, a quiet rhythm runs through the house. We use one consistent measure to plan rooms and furniture.",
    },
  },
  {
    number: "03",
    title: "RESILIENCE",
    heading: { ja: "揺れに備える", en: "Built for movement" },
    body: {
      ja: "地震の多い日本では、筋かいや耐力壁で揺れに耐える木造の工法が発達しました。インテリアでも、背の高い家具を固定する、寝る場所の近くに重いものを置かない、といった小さな備えが安心につながります。",
      en: "Earthquakes led Japan to develop timber frames that resist shaking, using diagonal bracing and shear walls. Inside the home, small precautions bring the same peace of mind: fixing tall furniture to the wall, and keeping heavy objects away from where you sleep.",
    },
  },
  {
    number: "04",
    title: "CLIMATE",
    heading: { ja: "軒と風と光", en: "Eaves, breeze and light" },
    body: {
      ja: "深い軒は、高い夏の日差しを遮り、低い冬の日差しを部屋の奥まで届けます。風の通り道をつくり、湿気をこもらせない。南半球のオーストラリアでは、リビングを北向きにするのが基本です。光と風の動きから、家具の配置を考えます。",
      en: "Deep eaves block the high summer sun and let the low winter sun reach deep into a room. Air should flow through, without trapping damp. In the southern hemisphere, living areas ideally face north. We plan furniture around how light and air move through each home.",
    },
  },
  {
    number: "05",
    title: "CARE",
    heading: { ja: "見えないところまで丁寧に", en: "Care where no one looks" },
    body: {
      ja: "整理された現場、見えない部分まで手を抜かない仕事。日本の職人の丁寧さは、完成した家の静けさに表れます。NAMIも、収納の中や配線、仕上げの細部まで、丁寧に考えます。",
      en: "A tidy site, and no shortcuts even in the parts nobody will see. The care of Japanese craftspeople shows in the calm of the finished home. NAMI gives the same attention to the inside of cupboards, the cables and the smallest finishes.",
    },
  },
  {
    number: "06",
    title: "LOCAL LIFE",
    heading: { ja: "その土地の暮らしに合わせる", en: "Made for local life" },
    body: {
      ja: "日本のやり方をそのまま持ち込むのではなく、オーストラリアの暮らしに合わせること。大きなソファ、バーベキュー、ペット、外とつながる時間。日本の考え方を、オーストラリアの家の中に。",
      en: "Not copying Japan, but adapting to how Australians live: big sofas, barbecues, pets and time spent outdoors. Japanese thinking, applied to Australian homes.",
    },
  },
];
