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
    tagline: { en: "Design with property value in mind.", ja: "住まいの価値まで考えたデザインを。" },
    lead: {
      en: "Pre-sale styling with your agent, rental fit-outs, and turnkey interiors for overseas buyers. Backed by real estate qualifications in Australia and Japan.",
      ja: "不動産会社と連携した売却前のスタイリング、賃貸用の内装、海外オーナー向けのおまかせ内装。オーストラリアと日本の不動産の資格を生かして。",
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
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
export const brandOfService = (service: string) => brands.find((b) => b.services.includes(service));
