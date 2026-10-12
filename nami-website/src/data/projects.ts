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
  src: file.startsWith("/") ? file : `/images/projects/${slug}/${file}`,
  alt: `Concept image: ${alt}`,
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
    cover: img("nami-house-01", "/images/projects/p1.jpg", "a coastal living room with timber floors opening to the ocean"),
    overview: {
      ja: "海の近くに建つ家族の住まいを想定したコンセプトスタディ。日本の「内と外」の考え方と、オーストラリアのIndoor / Outdoor Livingを重ね合わせています。",
      en: "A concept study for a family home near the sea. It brings together the Japanese idea of “inside and outside” and Australian indoor–outdoor living.",
    },
    concept: {
      ja: "朝の光、潮風、砂のついた足。海辺の暮らしの気配をそのまま受け止める、柔らかく開いた住まい。縁側のような中間領域が、家族の時間と一人の時間をゆるやかにつなぎます。",
      en: "Morning light, salty air, sandy feet. A soft, open home that welcomes everyday coastal life. A veranda-like space in between, inspired by the Japanese engawa, gently links family time and time alone.",
    },
    designDirection: [
      { title: "Engawa Deck", body: { ja: "室内と庭の間に縁側のようなデッキを設け、内と外の境界をやわらげる。", en: "A deck between house and garden, like a Japanese engawa veranda, softens the line between inside and out." } },
      { title: "Low Horizon", body: { ja: "家具の高さを低く抑え、視線が海の水平線へ抜けるように。", en: "Low furniture keeps the view open to the horizon." } },
      { title: "Salt & Timber", body: { ja: "潮風に耐える素材を選び、時間とともに風合いが深まる仕上げに。", en: "Materials that stand up to sea air and gain character over time." } },
    ],
    materials: [
      { name: "Blackbutt Timber", note: { ja: "床・デッキ", en: "Floors and deck" }, swatch: "#c9a679" },
      { name: "Lime Plaster", note: { ja: "壁", en: "Walls" }, swatch: "#efe6d6" },
      { name: "Washed Linen", note: { ja: "ファブリック", en: "Textiles" }, swatch: "#e3d8c4" },
      { name: "Ocean Glaze", note: { ja: "器・タイル", en: "Ceramics and tiles" }, swatch: "#2f7f9a" },
    ],
    moodboard: [
      img("nami-house-01", "mood-1.svg", "timber, linen and lime plaster samples"),
      img("nami-house-01", "mood-2.svg", "ceramics and natural textures"),
    ],
    plan: img("nami-house-01", "plan.svg", "floor plan of the coastal home"),
    visuals: [
      img("nami-house-01", "/images/journal/j2.jpg", "living room opening to a timber deck"),
      img("nami-house-01", "/images/journal/j1.jpg", "bedroom with a low bed and ocean view"),
    ],
    gallery: [
      img("nami-house-01", "/images/journal/j3.jpg", "dining corner in afternoon light"),
      img("nami-house-01", "/images/services/s4.jpg", "styled timber shelf with ceramics"),
      img("nami-house-01", "/images/projects/p3.jpg", "evening view across the deck"),
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
    cover: img("nami-house-02", "/images/projects/p2.jpg", "a compact Sydney apartment with a window seat"),
    overview: {
      ja: "シドニーのコンパクトなアパートメントを想定したコンセプトスタディ。日本の狭小住宅の知恵を、オーストラリアの都市生活に取り入れます。",
      en: "A concept study for a compact Sydney apartment, bringing ideas from Japan’s small homes to Australian city living.",
    },
    concept: {
      ja: "小さいからこそ、ひとつひとつの選択が暮らしを形づくる。可動の家具、多用途の窓辺、見せる収納と隠す収納。限られた空間に、ゆとりと記憶の居場所をつくります。",
      en: "In a small home, every choice shapes daily life. Movable furniture, a window seat with many uses, open and hidden storage: room to breathe, and a place for memories, in a limited space.",
    },
    designDirection: [
      { title: "Multi-use Corners", body: { ja: "窓辺のベンチが、読書・食事・仕事の場所に。", en: "A window bench for reading, eating and working." } },
      { title: "Layered Storage", body: { ja: "壁一面の収納で、床と余白を確保する。", en: "Full-height storage keeps the floor clear." } },
      { title: "Borrowed Light", body: { ja: "障子のような建具で、光を奥まで届ける。", en: "Shoji-style screens carry daylight deep into the home." } },
    ],
    materials: [
      { name: "Hoop Pine Ply", note: { ja: "収納・建具", en: "Storage and doors" }, swatch: "#dcc29a" },
      { name: "Washi Screen", note: { ja: "建具", en: "Sliding screens" }, swatch: "#f5efe2" },
      { name: "Terracotta", note: { ja: "床タイル", en: "Floor tiles" }, swatch: "#c46a4a" },
      { name: "Deep Navy", note: { ja: "アクセント", en: "Accent" }, swatch: "#073b5c" },
    ],
    moodboard: [
      img("nami-house-02", "mood-1.svg", "plywood, washi and terracotta samples"),
      img("nami-house-02", "mood-2.svg", "compact furniture details"),
    ],
    plan: img("nami-house-02", "plan.svg", "floor plan of the small apartment"),
    visuals: [
      img("nami-house-02", "/images/projects/p3.jpg", "window seat with built-in storage"),
      img("nami-house-02", "/images/journal/j2.jpg", "kitchen and dining in one compact space"),
    ],
    gallery: [
      img("nami-house-02", "/images/services/s4.jpg", "screen doors filtering daylight"),
      img("nami-house-02", "/images/journal/j2.jpg", "styled reading corner"),
      img("nami-house-02", "/images/projects/p2.jpg", "night view of the city from the window"),
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
    cover: img("nami-house-03", "/images/projects/p3.jpg", "a living space wrapped around a planted courtyard"),
    overview: {
      ja: "中庭を中心に構成された住まいのコンセプトスタディ。日本の坪庭の考え方を、オーストラリアの気候と植生で再解釈しています。",
      en: "A concept study for a home arranged around a courtyard, reinterpreting the Japanese tsuboniwa, a small inner garden, for Australia’s climate and plants.",
    },
    concept: {
      ja: "家の真ん中に、空と植物がある。どの部屋からも中庭の光と緑が見え、季節の移ろいを感じられる。プライバシーと開放感を両立する、静かな住まい。",
      en: "Sky and plants at the centre of the home. Every room looks onto the courtyard’s light and greenery, so you feel the seasons change. A quiet home that is both private and open.",
    },
    designDirection: [
      { title: "Central Courtyard", body: { ja: "中庭を中心に、すべての部屋が光と緑に向き合う。", en: "Every room faces the light and greenery of the courtyard." } },
      { title: "Native Garden", body: { ja: "オーストラリアの在来植物で、乾燥に強い坪庭をつくる。", en: "A drought-tolerant inner garden of Australian native plants." } },
      { title: "Light & Shadow", body: { ja: "深い軒と格子で、強い日差しをやわらかな影に変える。", en: "Deep eaves and timber screens turn strong sun into soft shade." } },
    ],
    materials: [
      { name: "Spotted Gum", note: { ja: "床・格子", en: "Floors and screens" }, swatch: "#a88257" },
      { name: "Rammed Earth", note: { ja: "壁", en: "Walls" }, swatch: "#cfae86" },
      { name: "Sandstone", note: { ja: "中庭", en: "Courtyard" }, swatch: "#e2cfa6" },
      { name: "Eucalypt Green", note: { ja: "植栽", en: "Planting" }, swatch: "#6f8a74" },
    ],
    moodboard: [
      img("nami-house-03", "mood-1.svg", "spotted gum, rammed earth and sandstone samples"),
      img("nami-house-03", "mood-2.svg", "native plants and stone textures"),
    ],
    plan: img("nami-house-03", "plan.svg", "floor plan arranged around a courtyard"),
    visuals: [
      img("nami-house-03", "/images/journal/j2.jpg", "living room looking into the courtyard"),
      img("nami-house-03", "/images/projects/p2.jpg", "timber screen casting shadows"),
    ],
    gallery: [
      img("nami-house-03", "/images/journal/j3.jpg", "courtyard planting with a stone path"),
      img("nami-house-03", "/images/services/s4.jpg", "quiet corner with ceramics"),
      img("nami-house-03", "/images/journal/j1.jpg", "evening light in the courtyard"),
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
