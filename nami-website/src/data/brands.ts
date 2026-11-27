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
      en: "Kitchens, bathrooms, whole-home renovations, new build interiors and gardens, from one room to the whole home, in Japanese, modern or any style you love.",
      ja: "キッチン、浴室、家まるごとのリノベーション、新築のインテリア、庭。1部屋から家まるごとまで、和でもモダンでも、お好きなスタイルで。",
    },
    services: ["kitchen-design", "bathroom-design", "hinoki-baths", "home-renovation", "new-build-interiors", "gardens-and-outdoor"],
    guides: ["is-design-expensive", "kitchen-renovation-sydney", "bathroom-renovation-tips", "hinoki-bath-guide", "home-renovation-where-to-start"],
    photo: { src: "/images/portfolio/living-in-green/06.jpg", alt: "A bright living room opening onto a timber deck and garden" },
  },
  {
    slug: "nami-nagomi",
    name: "NAMI Nagomi",
    word: { en: "Nagomi (和み): a feeling of calm and ease", ja: "和み(なごみ):心がやわらぎ、落ち着くこと" },
    tagline: { en: "Stay in the home you love, for years ahead.", ja: "住み慣れた家で、これからも。" },
    lead: {
      en: "Ageing in place and downsizing: step-free entries, walk-in showers, good light and fewer, better things. Safe and easy, and beautiful, not clinical.",
      ja: "エイジング・イン・プレイスと住み替え。段差のない入口、ウォークインシャワー、明るい光、少なく良いもの。安全で楽に、介護っぽくなく美しく。",
    },
    services: ["ageing-in-place"],
    guides: ["ageing-in-place-five-places", "bathroom-renovation-tips"],
    photo: { src: "/images/portfolio/simply-special/10.jpg", alt: "A walk-in shower with a floating timber vanity" },
  },
  {
    slug: "nami-value",
    name: "NAMI Value",
    tagline: { en: "Design with property value in mind.", ja: "住まいの価値まで考えたデザインを。" },
    lead: {
      en: "Pre-sale styling with your agent, turnkey interiors for overseas buyers, and granny flats for family or rental income. Backed by real estate qualifications in Australia and Japan.",
      ja: "不動産会社と連携した売却前のスタイリング、海外オーナー向けのおまかせ内装、家族用や賃貸用のグラニーフラット(離れ)。オーストラリアと日本の不動産の資格を生かして。",
    },
    services: ["styling-for-sale-and-rent", "investor-turnkey-interiors", "granny-flats"],
    guides: ["pre-sale-styling-sydney", "buying-new-property-from-overseas", "add-value-before-you-sell", "granny-flat-rules-nsw"],
    photo: { src: "/images/portfolio/old-meets-new/08.jpg", alt: "A styled living room with timber floors" },
  },
  {
    slug: "nami-works",
    name: "NAMI Works",
    tagline: { en: "Shops and offices people remember.", ja: "記憶に残る、お店とオフィスを。" },
    lead: {
      en: "Offices, clinics, shops, cafés and schools. A free design proposal up to 3D renders, with licensed builders arranged through Japan Homes' connections.",
      ja: "オフィス、クリニック、お店、カフェ、教室。3Dパースまでの無料デザイン提案と、ジャパンホームズのつながりによる施工会社の手配。",
    },
    services: ["office-design", "clinic-design", "retail-and-cafe-design", "school-design", "japanese-business-fit-outs"],
    guides: ["office-fit-out-steps", "opening-japanese-business-australia"],
    photo: { src: "/images/concepts/sunrise-and-waves/01-lounge.jpg", alt: "Sunrise & Waves concept: a calm lounge with fabric waves across the ceiling" },
  },
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
export const brandOfService = (service: string) => brands.find((b) => b.services.includes(service));
