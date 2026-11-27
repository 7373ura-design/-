import fs from "node:fs";
import path from "node:path";
import type { Bi } from "@/lib/i18n";

/**
 * Styling before / after pairs (NAMI Value). Put two pictures in
 * public/images/before-after/<slug>/ named before.jpg and after.jpg (or .png,
 * .webp). A pair appears on the site only once both files are there, so an
 * entry here with no pictures yet shows nothing.
 */
type PairInfo = {
  slug: string;
  title: Bi;
  note: Bi;
  /** true while the "after" is a concept design, not a finished photo. */
  concept?: boolean;
};

// Next: the Shonan house in Japan (holiday stay / sale / asset), once the
// owner's concept design is ready. Add it here with its two pictures.
const info: PairInfo[] = [];

const DIR = path.join(process.cwd(), "public", "images", "before-after");
const find = (slug: string, name: string) => {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    if (fs.existsSync(path.join(DIR, slug, `${name}.${ext}`))) return `/images/before-after/${slug}/${name}.${ext}`;
  }
  return undefined;
};

export type BeforeAfterPair = PairInfo & { before: string; after: string };

export function getBeforeAfter(): BeforeAfterPair[] {
  return info.flatMap((p) => {
    const before = find(p.slug, "before");
    const after = find(p.slug, "after");
    return before && after ? [{ ...p, before, after }] : [];
  });
}
