export type ImageAsset = {
  src: string;
  alt: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  titleJa: string;
  summary: string;
  image: ImageAsset;
  whatItIs: string;
  whoFor: string[];
  included: string[];
  process: { step: string; detail: string }[];
  deliverables: string[];
};

export type ProjectCategory = "concept" | "monitor" | "residential";

export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  location: string;
  type: string;
  year: string;
  cover: ImageAsset;
  overview: string;
  concept: string;
  designDirection: { title: string; body: string }[];
  materials: { name: string; note: string; swatch: string }[];
  moodboard: ImageAsset[];
  plan: ImageAsset;
  visuals: ImageAsset[];
  gallery: ImageAsset[];
};

export type JournalArticle = {
  slug: string;
  title: string;
  titleJa?: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime: string;
  cover: ImageAsset;
  /** Body paragraphs. Replace with MDX / CMS content later. */
  body: string[];
  published: boolean;
};

export type Principle = {
  key: "nature" | "balance" | "material" | "simplicity" | "people";
  number: string;
  title: string;
  titleJa: string;
  body: string;
};

export type Meaning = {
  number: string;
  kanji: string;
  title: string;
  lead: string;
  body: string[];
};
