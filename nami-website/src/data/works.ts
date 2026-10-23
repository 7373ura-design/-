import fs from "node:fs";
import path from "node:path";
import type { Bi } from "@/lib/i18n";

/**
 * Completed homes — real client work. Photos are read at build time from
 * public/images/portfolio/<folder>/ (jpg, jpeg, png or webp, in file-name
 * order; the first is the cover). A work appears on the site only once its
 * folder has at least one photo.
 */
/** story: where the design focused and where it finds Japandi, shown on the project page. */
type WorkInfo = { slug: string; folder: string; title: Bi; type: Bi; location: string; story: Bi };

const info: WorkInfo[] = [
  {
    slug: "new-lynn-house",
    folder: "new-lynn",
    title: { ja: "ニューリンの家", en: "New Lynn House" },
    type: { ja: "新築", en: "New home" },
    location: "New Lynn",
    story: {
      ja: "外観は、赤みのある外壁とブラウンの壁を組み合わせて、温かみがありながら洗練された印象にまとめました。室内は白を基調に、明るい木目の吊り戸棚とフローリングでやわらかさを足しています。黒い玄関ドアや取っ手のラインで全体を引き締め、キッチンには波のような形のペンダントライトをアクセントに。白・木・黒の3色に絞った、静かなジャパンディのバランスです。",
      en: "Outside, a warm red facade is paired with soft brown cladding for a look that is both inviting and refined. Inside, a white base is softened by light timber cabinetry and wood floors. A black front door and slim black handles add definition, and a wave-like pendant light brings a quiet accent to the kitchen. White, timber and black, nothing more: a calm Japandi balance.",
    },
  },
  {
    slug: "remuera-renovation",
    folder: "remuera",
    title: { ja: "レムエラの\nリノベーション", en: "Remuera Renovation" },
    type: { ja: "リノベーション", en: "Renovation" },
    location: "Remuera",
    story: {
      ja: "テーマは「温故知新」。日本の住まいの知恵を、ニュージーランドの暮らし方に合わせて生かしました。玄関と天井には木の格子を重ね、間接照明でやわらかな光を落としています。デッキには木の湯船、浴室には木の浴槽と低い木のスツール。日本の入浴の時間を、今の暮らしのなかに取り入れました。温かみのある無垢の床、ジュートのラグ、キッチンにも繰り返した格子のデザイン。古い家の良さを残しながら、伝統と今の生活がひとつになった住まいです。",
      en: "The idea here is onko-chishin: learning from the old to create the new. Japanese ways of living are shaped to suit a New Zealand lifestyle. Timber slat screens wrap the entry and ceiling, with hidden lighting that casts a soft glow. A wooden soaking tub on the deck, and a timber bath and low stool in the bathroom, bring the Japanese ritual of bathing into everyday life. Warm timber floors, a jute rug, and the slat detail repeated on the kitchen island. The character of the original home stays, and tradition and modern life become one.",
    },
  },
  {
    slug: "glen-innes-unit",
    folder: "glen-innes",
    title: { ja: "グレンイネスの\nユニット", en: "Glen Innes Unit" },
    type: { ja: "新築", en: "New home" },
    location: "Glen Innes",
    story: {
      ja: "緑あふれる庭に開かれた住まいです。黒い縦張りの外壁に、軒下だけやわらかなアプリコット色を差して、落ち着いた佇まいに。庭には白い砂利と飛び石を敷き、張り出したウッドデッキから芝生と植栽へゆるやかにつなげました。大きな窓で内と外がひとつになり、明るい木の床がそのままデッキへ続きます。外の緑の美しさを室内にも取り入れたくて、キッチンの壁には淡いグリーンを。そのグリーンと、キッチンの木の色とのバランスを特に大切にしました。",
      en: "A home that opens onto a lush, green garden. Black vertical cladding, with a soft apricot tone tucked under the eaves, gives a calm presence. White gravel and stepping stones lead through the garden, and a timber deck reaches out towards the lawn and planting. Wide sliding doors join inside and out, and pale wood floors run straight onto the deck. To carry the beauty of the garden indoors, the kitchen wall is a soft green, and the balance between that green and the warm timber of the kitchen was the heart of the design.",
    },
  },
  {
    slug: "hillcrest-house",
    folder: "hillcrest",
    title: { ja: "ヒルクレストの家", en: "Hillcrest House" },
    type: { ja: "新築", en: "New home" },
    location: "Hillcrest",
    story: {
      ja: "「シンプルに、まとまりよく」を大切にした住まいです。丘の上の眺めを生かし、デッキと大きな窓から街と空を取り込みました。高い位置の細長い窓は、緑や空を絵のように切り取ります。室内は白い壁と明るい木の床で光を広げ、寝室は濃いチャコールのカーペットで落ち着きを。キッチンの木の吊り戸棚と編み込みのペンダントライト、浴室の木の洗面台と黒い水栓。色と素材の数を絞り、全体がすっきりとひとつにまとまっています。",
      en: "A home where simplicity and harmony come first. Set on a hilltop, it opens to the city and sky through a generous deck and wide windows, while slim high windows frame greenery like a picture. White walls and light timber floors spread the light, and deep charcoal carpet brings calm to the bedrooms. Timber cabinetry and woven pendant lights in the kitchen, a floating timber vanity and black tapware in the bathroom. With only a few colours and materials, the whole home feels clean and quietly complete.",
    },
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
