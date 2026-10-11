import type { Project, ProjectCategory } from "@/lib/types";

/**
 * All projects are currently NAMI CONCEPTS — design studies created to show
 * NAMI's thinking. They are NOT client commissions and must never be
 * presented as such. Add real work later with category "residential" or
 * "monitor".
 */
export const projectCategories: { key: "all" | ProjectCategory; label: string }[] = [
  { key: "all", label: "ALL" },
  { key: "concept", label: "CONCEPT" },
  { key: "monitor", label: "MONITOR" },
  { key: "residential", label: "RESIDENTIAL" },
];

const img = (slug: string, file: string, alt: string) => ({
  src: `/images/projects/${slug}/${file}`,
  alt: `Concept placeholder: ${alt}`,
});

export const projects: Project[] = [
  {
    slug: "nami-house-01",
    number: "01",
    title: "NAMI House 01",
    subtitle: "Japanese × Australian Coastal Home",
    category: "concept",
    location: "Sydney, Australia",
    type: "Residential Concept",
    year: "2026",
    cover: img("nami-house-01", "cover.svg", "a coastal living room with timber floors opening to the ocean"),
    overview:
      "海の近くに建つ家族の住まいを想定したコンセプトスタディ。日本の「内と外」の考え方と、オーストラリアのIndoor / Outdoor Livingを重ね合わせています。",
    concept:
      "朝の光、潮風、砂のついた足。海辺の暮らしの気配をそのまま受け止める、柔らかく開いた住まい。縁側のような中間領域が、家族の時間と一人の時間をゆるやかにつなぎます。",
    designDirection: [
      { title: "Engawa Deck", body: "室内と庭の間に縁側のようなデッキを設け、内と外の境界をやわらげる。" },
      { title: "Low Horizon", body: "家具の高さを低く抑え、視線が海の水平線へ抜けるように。" },
      { title: "Salt & Timber", body: "潮風に耐える素材を選び、時間とともに風合いが深まる仕上げに。" },
    ],
    materials: [
      { name: "Blackbutt Timber", note: "床・デッキ", swatch: "#c9a679" },
      { name: "Lime Plaster", note: "壁", swatch: "#efe6d6" },
      { name: "Washed Linen", note: "ファブリック", swatch: "#e3d8c4" },
      { name: "Ocean Glaze", note: "器・タイル", swatch: "#2f7f9a" },
    ],
    moodboard: [
      img("nami-house-01", "mood-1.svg", "timber, linen and lime plaster samples"),
      img("nami-house-01", "mood-2.svg", "ceramics and natural textures"),
    ],
    plan: img("nami-house-01", "plan.svg", "floor plan of the coastal home"),
    visuals: [
      img("nami-house-01", "visual-1.svg", "living room opening to a timber deck"),
      img("nami-house-01", "visual-2.svg", "bedroom with a low bed and ocean view"),
    ],
    gallery: [
      img("nami-house-01", "gallery-1.svg", "dining corner in afternoon light"),
      img("nami-house-01", "gallery-2.svg", "styled timber shelf with ceramics"),
      img("nami-house-01", "gallery-3.svg", "evening view across the deck"),
    ],
  },
  {
    slug: "nami-house-02",
    number: "02",
    title: "NAMI House 02",
    subtitle: "A Small Sydney Home",
    category: "concept",
    location: "Sydney, Australia",
    type: "Residential Concept",
    year: "2026",
    cover: img("nami-house-02", "cover.svg", "a compact Sydney apartment with a window seat"),
    overview:
      "シドニーのコンパクトなアパートメントを想定したコンセプトスタディ。日本の狭小住宅の知恵を、オーストラリアの都市生活に取り入れます。",
    concept:
      "小さいからこそ、ひとつひとつの選択が暮らしを形づくる。可動の家具、多用途の窓辺、見せる収納と隠す収納。限られた空間に、ゆとりと記憶の居場所をつくります。",
    designDirection: [
      { title: "Multi-use Corners", body: "窓辺のベンチが、読書・食事・仕事の場所に。" },
      { title: "Layered Storage", body: "壁一面の収納で、床と余白を確保する。" },
      { title: "Borrowed Light", body: "障子のような建具で、光を奥まで届ける。" },
    ],
    materials: [
      { name: "Hoop Pine Ply", note: "収納・建具", swatch: "#dcc29a" },
      { name: "Washi Screen", note: "建具", swatch: "#f5efe2" },
      { name: "Terracotta", note: "床タイル", swatch: "#c46a4a" },
      { name: "Deep Navy", note: "アクセント", swatch: "#073b5c" },
    ],
    moodboard: [
      img("nami-house-02", "mood-1.svg", "plywood, washi and terracotta samples"),
      img("nami-house-02", "mood-2.svg", "compact furniture details"),
    ],
    plan: img("nami-house-02", "plan.svg", "floor plan of the small apartment"),
    visuals: [
      img("nami-house-02", "visual-1.svg", "window seat with built-in storage"),
      img("nami-house-02", "visual-2.svg", "kitchen and dining in one compact space"),
    ],
    gallery: [
      img("nami-house-02", "gallery-1.svg", "screen doors filtering daylight"),
      img("nami-house-02", "gallery-2.svg", "styled reading corner"),
      img("nami-house-02", "gallery-3.svg", "night view of the city from the window"),
    ],
  },
  {
    slug: "nami-house-03",
    number: "03",
    title: "NAMI House 03",
    subtitle: "Modern Japanese Courtyard House",
    category: "concept",
    location: "Sydney, Australia",
    type: "Residential Concept",
    year: "2026",
    cover: img("nami-house-03", "cover.svg", "a living space wrapped around a planted courtyard"),
    overview:
      "中庭を中心に構成された住まいのコンセプトスタディ。日本の坪庭の考え方を、オーストラリアの気候と植生で再解釈しています。",
    concept:
      "家の真ん中に、空と植物がある。どの部屋からも中庭の光と緑が見え、季節の移ろいを感じられる。プライバシーと開放感を両立する、静かな住まい。",
    designDirection: [
      { title: "Central Courtyard", body: "中庭を中心に、すべての部屋が光と緑に向き合う。" },
      { title: "Native Garden", body: "オーストラリアの在来植物で、乾燥に強い坪庭をつくる。" },
      { title: "Light & Shadow", body: "深い軒と格子で、強い日差しをやわらかな影に変える。" },
    ],
    materials: [
      { name: "Spotted Gum", note: "床・格子", swatch: "#a88257" },
      { name: "Rammed Earth", note: "壁", swatch: "#cfae86" },
      { name: "Sandstone", note: "中庭", swatch: "#e2cfa6" },
      { name: "Eucalypt Green", note: "植栽", swatch: "#6f8a74" },
    ],
    moodboard: [
      img("nami-house-03", "mood-1.svg", "spotted gum, rammed earth and sandstone samples"),
      img("nami-house-03", "mood-2.svg", "native plants and stone textures"),
    ],
    plan: img("nami-house-03", "plan.svg", "floor plan arranged around a courtyard"),
    visuals: [
      img("nami-house-03", "visual-1.svg", "living room looking into the courtyard"),
      img("nami-house-03", "visual-2.svg", "timber screen casting shadows"),
    ],
    gallery: [
      img("nami-house-03", "gallery-1.svg", "courtyard planting with a stone path"),
      img("nami-house-03", "gallery-2.svg", "quiet corner with ceramics"),
      img("nami-house-03", "gallery-3.svg", "evening light in the courtyard"),
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
