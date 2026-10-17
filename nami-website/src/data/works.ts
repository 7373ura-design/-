import fs from "node:fs";
import path from "node:path";
import type { Bi } from "@/lib/i18n";

/**
 * Completed homes — real client work. Photos are read at build time from
 * public/images/portfolio/<folder>/ (jpg, jpeg, png or webp, in file-name
 * order; the first is the cover). A work appears on the site only once its
 * folder has at least one photo.
 */
type WorkInfo = { slug: string; folder: string; title: Bi; type: Bi; location: string };

const info: WorkInfo[] = [
  {
    slug: "new-lynn-house",
    folder: "new-lynn",
    title: { ja: "ニューリンの家", en: "New Lynn House" },
    type: { ja: "新築", en: "New home" },
    location: "New Lynn",
  },
  {
    slug: "remuera-renovation",
    folder: "remuera",
    title: { ja: "レムエラのリノベーション", en: "Remuera Renovation" },
    type: { ja: "リノベーション", en: "Renovation" },
    location: "Remuera",
  },
  {
    slug: "glen-innes-unit",
    folder: "glen-innes",
    title: { ja: "グレンイネスのユニット", en: "Glen Innes Unit" },
    type: { ja: "新築", en: "New home" },
    location: "Glen Innes",
  },
  {
    slug: "hillcrest-house",
    folder: "hillcrest",
    title: { ja: "ヒルクレストの家", en: "Hillcrest House" },
    type: { ja: "新築", en: "New home" },
    location: "Hillcrest",
  },
];

export type Work = WorkInfo & { number: string; photos: { src: string; alt: string }[] };

const DIR = path.join(process.cwd(), "public", "images", "portfolio");

function photosOf(w: WorkInfo) {
  let files: string[] = [];
  try {
    files = fs.readdirSync(path.join(DIR, w.folder));
  } catch {
    return [];
  }
  return files
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f, i) => ({
      src: `/images/portfolio/${w.folder}/${encodeURIComponent(f)}`,
      alt: `${w.title.en}, ${w.location} — photo ${i + 1}`,
    }));
}

/** Works that have photos, numbered in order. */
export function getWorks(): Work[] {
  return info
    .map((w) => ({ ...w, photos: photosOf(w) }))
    .filter((w) => w.photos.length > 0)
    .map((w, i) => ({ ...w, number: String(i + 1).padStart(2, "0") }));
}

export function getWork(slug: string) {
  return getWorks().find((w) => w.slug === slug);
}

/** Every slug, photos or not — for static generation. */
export const workSlugs = info.map((w) => w.slug);
