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

const info: PairInfo[] = [
  {
    slug: "shonan-house",
    title: { en: "A house in Shonan, Japan · Concept", ja: "湘南の家(日本)· コンセプト" },
    note: {
      en: "An older house by the sea in Shonan, redesigned so it can work as a holiday stay (minpaku), be sold, or be kept as an asset that grows in value. The same design serves all three.",
      ja: "湘南の海の近くにある築年数のたった家を、民泊として貸すことも、売ることも、資産として持ち続けることもできるようにデザインしました。ひとつのデザインで、3つの使い道に。",
    },
    concept: true,
  },
];

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
