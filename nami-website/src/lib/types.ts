import type { Bi, BiList } from "@/lib/i18n";

export type ImageAsset = {
  src: string;
  alt: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  /** Short description under the title (Japanese / English). */
  sub: Bi;
  summary: Bi;
  /** The Japanese idea behind the service. */
  idea: { term: string; text: Bi };
  image: ImageAsset;
  whatItIs: Bi;
  whoFor: BiList;
  included: BiList;
  process: { step: string; detail: Bi }[];
  deliverables: BiList;
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
  overview: Bi;
  concept: Bi;
  designDirection: { title: string; body: Bi }[];
  materials: { name: string; note: Bi; swatch: string }[];
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
  excerpt: Bi;
  date: string;
  readingTime: string;
  cover: ImageAsset;
  /** Body paragraphs. Replace with MDX / CMS content later. */
  body: BiList;
  published: boolean;
};

export type Principle = {
  key: "nature" | "balance" | "material" | "simplicity" | "people";
  number: string;
  title: string;
  sub: Bi;
  body: Bi;
};

export type Meaning = {
  number: string;
  kanji: string;
  title: string;
  lead: Bi;
  body: BiList;
};
