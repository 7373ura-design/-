import type { Bi } from "@/lib/i18n";

/**
 * NAMI's five brands, each with its own page. Every service belongs to one.
 * Kept to four for the 6 December launch.
 */
export type Brand = {
  slug: string;
  name: string;
  word?: Bi;
  tagline: Bi;
  lead: Bi;
  services: string[];
  guides: string[];
  photo: { src: string; alt: string };
};

export const brands: Brand[] = [
  {
    slug: "nami-home",
    name: "NAMI Home",
    tagline: { en: "Homes designed for the way you live.", ja: "暮らし方に合わせた住まいを。" },
    lead: {
      en: "Kitchens, bathrooms, whole-home renovations and new build interiors, from one room to the whole home, in Japanese, modern or any style you love.",
      ja: "キッチン、浴室、家まるごとのリノベーション、新築のインテリア。1部屋から家まるごとまで、和でもモダンでも、お好きなスタイルで。",
    },
    services: ["kitchen-design", "bathroom-design", "hinoki-baths", "home-renovation", "new-build-interiors"],
    guides: ["is-design-expensive", "kitchen-renovation-sydney", "bathroom-renovation-tips", "hinoki-bath-guide", "home-renovation-where-to-start"],
    photo: { src: "/images/portfolio/living-in-green/06.jpg", alt: "A bright living room opening onto a timber deck and garden" },
  },
  {
    slug: "nami-value",
    name: "NAMI Value",
    tagline: { en: "Design to sell or rent sooner, on better terms.", ja: "早く、良い条件で売る・貸すためのデザインを。" },
    lead: {
      en: "Pre-sale styling timed to your sale, rental fit-outs, and turnkey interiors for overseas buyers. Backed by real estate qualifications in Australia and Japan.",
      ja: "売り出しの予定に合わせた売却前のスタイリング、賃貸用の内装、海外オーナー向けのおまかせ内装。オーストラリアと日本の不動産の資格を生かして。",
    },
    services: ["styling-for-sale-and-rent", "investor-turnkey-interiors"],
    guides: ["pre-sale-styling-sydney", "buying-new-property-from-overseas", "add-value-before-you-sell"],
    photo: { src: "/images/portfolio/old-meets-new/08.jpg", alt: "A styled living room with timber floors" },
  },
  {
    slug: "nami-works",
    name: "NAMI Works",
    tagline: { en: "Shops and offices people remember.", ja: "記憶に残る、お店とオフィスを。" },
    lead: {
      en: "Offices, clinics, shops and cafés. A free design proposal up to 3D renders, with licensed builders arranged through Japan Homes' connections.",
      ja: "オフィス、クリニック、お店、カフェ。3Dパースまでの無料デザイン提案と、ジャパンホームズのつながりによる施工会社の手配。",
    },
    services: ["office-design", "clinic-design", "retail-and-cafe-design", "japanese-business-fit-outs"],
    guides: ["office-fit-out-steps", "opening-japanese-business-australia"],
    photo: { src: "/images/concepts/sunrise-and-waves/01-lounge.jpg", alt: "Sunrise & Waves concept: a calm lounge with fabric waves across the ceiling" },
  },
  {
    slug: "nami-japan",
    name: "NAMI Japan",
    tagline: { en: "Your first step to living in Japan.", ja: "日本で暮らしたい方の、最初の相談窓口。" },
    lead: {
      en: "For people in Australia who want to live in Japan or own a home there: a first consultation, the visa options explained, and a report on the areas you are considering. In English or Japanese.",
      ja: "日本に住みたい、日本に家を持ちたいオーストラリアの方へ。最初のご相談、ビザの種類のご説明、気になる地域の調査レポートまで。日本語・英語で。",
    },
    services: [],
    guides: [],
    photo: { src: "/images/washi/village.jpg", alt: "Image: a Japanese storehouse and a modern pavilion in a garden of pines and stepping stones" },
  },
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
export const brandOfService = (service: string) => brands.find((b) => b.services.includes(service));
