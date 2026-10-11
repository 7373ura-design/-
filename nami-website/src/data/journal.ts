import type { JournalArticle } from "@/lib/types";

/**
 * Journal articles. This file is the single content source for now; swap the
 * functions at the bottom for a CMS (Sanity, Contentful, MDX…) later without
 * touching the components.
 */
const cover = (file: string, alt: string) => ({
  src: `/images/journal/${file}`,
  alt,
});

const comingSoon = ["この記事は現在準備中です。公開まで今しばらくお待ちください。"];

export const articles: JournalArticle[] = [
  {
    slug: "what-is-japandi",
    title: "What is Japandi?",
    titleJa: "ジャパンディとは？",
    category: "DESIGN",
    excerpt: "日本と北欧、ふたつの美意識が出会うスタイルを、NAMIの視点から考えます。",
    date: "2026-10-01",
    readingTime: "5 min",
    cover: cover("j1.jpg", "a calm room with low timber furniture"),
    body: comingSoon,
    published: false,
  },
  {
    slug: "japanese-vs-australian-homes",
    title: "Japanese vs Australian Homes",
    titleJa: "日本とオーストラリアの住宅の違い",
    category: "CULTURE",
    excerpt: "玄関、縁側、バックヤード。暮らしの違いが、住まいのかたちをつくる。",
    date: "2026-10-01",
    readingTime: "6 min",
    cover: cover("j2.jpg", "a timber deck opening to a garden"),
    body: comingSoon,
    published: false,
  },
  {
    slug: "why-natural-materials-matter",
    title: "Why Natural Materials Matter",
    titleJa: "自然素材がもたらす心地よさ",
    category: "MATERIAL",
    excerpt: "木、土、石、リネン。時間とともに深まる素材の魅力。",
    date: "2026-10-01",
    readingTime: "4 min",
    cover: cover("j3.jpg", "timber, stone and linen textures"),
    body: comingSoon,
    published: false,
  },
  {
    slug: "the-japanese-concept-of-ma",
    title: "The Japanese Concept of Ma",
    titleJa: "「間」という考え方",
    category: "PHILOSOPHY",
    excerpt: "何もない場所が、空間に呼吸を与える。",
    date: "2026-10-01",
    readingTime: "5 min",
    cover: cover("j1.jpg", "an empty room with soft light on a plaster wall"),
    body: comingSoon,
    published: false,
  },
  {
    slug: "indoor-outdoor-living",
    title: "Indoor–Outdoor Living",
    titleJa: "内と外をつなぐ暮らし",
    category: "LIFESTYLE",
    excerpt: "オーストラリアの気候と、日本の縁側の知恵を重ねて。",
    date: "2026-10-01",
    readingTime: "5 min",
    cover: cover("j3.jpg", "large sliding doors open to a garden"),
    body: comingSoon,
    published: false,
  },
  {
    slug: "small-space-living-in-japan",
    title: "Small Space Living in Japan",
    titleJa: "日本の小さな暮らしの知恵",
    category: "LIFESTYLE",
    excerpt: "限られた空間を、豊かに使うためのヒント。",
    date: "2026-10-01",
    readingTime: "4 min",
    cover: cover("j2.jpg", "a compact room with built-in storage"),
    body: comingSoon,
    published: false,
  },
];

export function getArticles() {
  return articles;
}

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
