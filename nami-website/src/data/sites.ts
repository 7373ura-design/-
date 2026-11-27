import type { Bi } from "@/lib/i18n";
import type { Faq } from "@/data/faq";

/**
 * NAMI is the parent company; each brand is run like its own small website
 * (the way Japan Homes runs separate sites for its projects). This file holds
 * what each brand site says beyond its services: who it is for, which page
 * answers which worry, how it works, and its own questions.
 */

type Item = { title: Bi; line: Bi };
/** A worry and the page that answers it. `to` is a site path. */
export type Finder = { worry: Bi; to: string; label: Bi };

export type BrandSite = {
  slug: string;
  /** Short name shown next to the NAMI logo, e.g. "Home". */
  short: string;
  /** One line: who this site is for. */
  forWho: Bi;
  /** Menu of the brand site (anchors on its top page, then guides and contact). */
  menu: { href: string; label: Bi }[];
  finder: Finder[];
  steps: Item[];
  faq: Required<Faq>[];
};

const S = (slug: string) => `/services/${slug}`;

export const brandSites: BrandSite[] = [
  {
    slug: "nami-home",
    short: "Home",
    forWho: { en: "For anyone designing, building or renovating a home.", ja: "家を建てる・直す・整えるすべての方へ。" },
    menu: [
      { href: "/nami-home#services", label: { en: "SERVICES", ja: "サービス" } },
      { href: "/nami-home#projects", label: { en: "PROJECTS", ja: "作品" } },
      { href: "/nami-home#process", label: { en: "HOW IT WORKS", ja: "進め方" } },
      { href: "/nami-home#faq", label: { en: "FAQ", ja: "よくある質問" } },
    ],
    finder: [
      { worry: { en: "Our kitchen is hard to use, or too small", ja: "キッチンが使いにくい、狭い" }, to: S("kitchen-design"), label: { en: "Kitchen design", ja: "キッチンのデザイン" } },
      { worry: { en: "The bathroom is old, cold or hard to clean", ja: "浴室が古い、寒い、掃除しにくい" }, to: S("bathroom-design"), label: { en: "Bathroom design", ja: "浴室のデザイン" } },
      { worry: { en: "We'd love a real Japanese hinoki bath", ja: "本物の檜風呂がほしい" }, to: S("hinoki-baths"), label: { en: "Hinoki baths", ja: "檜風呂" } },
      { worry: { en: "We want to renovate, but don't know where to start", ja: "リノベーションしたいけど、何から始めればいい?" }, to: S("home-renovation"), label: { en: "Home renovation", ja: "住まいのリノベーション" } },
      { worry: { en: "We're building a new home and need help choosing everything", ja: "新築中。何を選べばいいかわからない" }, to: S("new-build-interiors"), label: { en: "New build interiors", ja: "新築のインテリア" } },
      { worry: { en: "We've moved in, but it still doesn't feel finished", ja: "住み始めたけど、まだ完成した感じがしない" }, to: "/nami-home#aftercare", label: { en: "After you move in", ja: "住み始めてから" } },
    ],
    steps: [
      { title: { en: "Get in touch", ja: "お問い合わせ" }, line: { en: "LINE, WeChat, WhatsApp, Instagram or email, in English, Japanese or Chinese", ja: "LINE、WeChat、WhatsApp、Instagram、メールから。日本語・英語・中国語で" } },
      { title: { en: "Free first consultation", ja: "無料のご相談" }, line: { en: "We listen to how you live, what you like and your budget", ja: "暮らし方、お好み、ご予算をうかがいます" } },
      { title: { en: "Quote and design", ja: "お見積もりとデザイン" }, line: { en: "A clear quote, then layout, colours, materials, lighting and furniture", ja: "わかりやすいお見積もりのあと、レイアウト、色、素材、照明、家具まで" } },
      { title: { en: "Builders arranged through Japan Homes", ja: "ジャパンホームズを通して施工会社を手配" }, line: { en: "Licensed builders from Japan Homes' network; we check the work matches the design", ja: "ジャパンホームズのつながりから、ライセンスを持つ施工会社を。デザイン通りか確認します" } },
      { title: { en: "After you move in", ja: "住み始めてから" }, line: { en: "Storage, tableware, moving day and anything that comes up later", ja: "収納、器、引っ越し、そのあとの困りごとまで" } },
    ],
    faq: [], // NAMI Home uses the main homes FAQ
  },
  {
    slug: "nami-value",
    short: "Value",
    forWho: { en: "For owners who want to sell or rent sooner, on better terms.", ja: "家を早く、良い条件で売りたい・貸したい方へ。" },
    menu: [
      { href: "/nami-value#services", label: { en: "SERVICES", ja: "サービス" } },
      { href: "/nami-value#value", label: { en: "WHAT ADDS VALUE", ja: "価値を上げる場所" } },
      { href: "/nami-value#process", label: { en: "HOW IT WORKS", ja: "進め方" } },
      { href: "/nami-value#faq", label: { en: "FAQ", ja: "よくある質問" } },
    ],
    finder: [
      { worry: { en: "We're selling soon. What's worth fixing?", ja: "もうすぐ売る。何を直すべき?" }, to: S("styling-for-sale-and-rent"), label: { en: "Styling to sell or rent", ja: "売る・貸すためのスタイリング" } },
      { worry: { en: "The rooms look empty or tired in photos", ja: "写真で部屋がさみしく、古く見える" }, to: S("styling-for-sale-and-rent"), label: { en: "Styling for photos and open homes", ja: "撮影・内覧のスタイリング" } },
      { worry: { en: "I bought a new apartment in Australia from overseas", ja: "海外からオーストラリアの新築物件を買った" }, to: S("investor-turnkey-interiors"), label: { en: "Turnkey interiors", ja: "おまかせ内装パッケージ" } },
      { worry: { en: "Short-stay or long-term rental: which interior?", ja: "民泊と長期賃貸、どんな内装がいい?" }, to: S("styling-for-sale-and-rent"), label: { en: "Rental fit-out", ja: "賃貸用の内装" } },
    ],
    steps: [
      { title: { en: "Get in touch", ja: "お問い合わせ" }, line: { en: "Tell us about the property and your timing, in English, Japanese or Chinese", ja: "物件とご予定の時期をお聞かせください。日本語・英語・中国語で" } },
      { title: { en: "Property review", ja: "物件の確認" }, line: { en: "On site or online: what to change, what to leave, and what it will cost", ja: "現地またはオンラインで。直すところ、そのままでいいところ、費用まで" } },
      { title: { en: "Plan the timing", ja: "時期を計画" }, line: { en: "Around your photo shoot, open homes, settlement or first tenants", ja: "撮影、内覧、引き渡し、入居の予定に合わせて" } },
      { title: { en: "Work and styling", ja: "工事とスタイリング" }, line: { en: "Builders arranged through Japan Homes; furniture and styling by NAMI", ja: "施工会社はジャパンホームズを通して手配。家具とスタイリングはNAMIが" } },
      { title: { en: "Ready to sell, rent or live in", ja: "売る・貸す・住む準備が完了" }, line: { en: "Photos and a short report, sent online if you are overseas", ja: "写真と簡単なご報告を。海外の方にはオンラインで" } },
    ],
    faq: [
      {
        q: { en: "Do you work with our real estate agent?", ja: "うちの不動産会社と一緒に進められますか?" },
        a: { en: "Yes. Tell us your agent's dates for photos and open homes, and we plan the work and styling around them.", ja: "はい。撮影日や内覧会の日程を教えていただければ、それに合わせて工事とスタイリングを計画します。" },
      },
      {
        q: { en: "I'm overseas. Can everything be done remotely?", ja: "海外にいます。すべて遠隔でお願いできますか?" },
        a: { en: "Yes. We handle the work on site and keep you updated online with photos, in Japanese, Chinese or English.", ja: "はい。現地での作業はこちらで行い、写真付きでオンラインでご報告します。日本語・中国語・英語に対応しています。" },
      },
      {
        q: { en: "Is this a valuation?", ja: "これは査定ですか?" },
        a: { en: "No. It is design advice with the property market in mind. For the value of your property, talk to a licensed valuer or agent.", ja: "いいえ。不動産の視点を持ったデザインのアドバイスです。物件の価値については、資格を持つ鑑定士や不動産会社にご相談ください。" },
      },
    ],
  },
  {
    slug: "nami-works",
    short: "Works",
    forWho: { en: "For offices, clinics, shops and cafés.", ja: "オフィス、クリニック、お店、カフェへ。" },
    menu: [
      { href: "/nami-works#concepts", label: { en: "CONCEPTS", ja: "デザイン事例" } },
      { href: "/nami-works#services", label: { en: "SERVICES", ja: "サービス" } },
      { href: "/nami-works#process", label: { en: "HOW IT WORKS", ja: "進め方" } },
      { href: "/nami-works#faq", label: { en: "FAQ", ja: "よくある質問" } },
    ],
    finder: [
      { worry: { en: "Our office doesn't fit how the team works", ja: "オフィスがチームの働き方に合っていない" }, to: S("office-design"), label: { en: "Office design", ja: "オフィスのデザイン" } },
      { worry: { en: "Patients feel nervous in our clinic", ja: "患者さんがクリニックで緊張している" }, to: S("clinic-design"), label: { en: "Clinic design", ja: "クリニックのデザイン" } },
      { worry: { en: "We're opening a shop or café", ja: "お店やカフェを開きたい" }, to: S("retail-and-cafe-design"), label: { en: "Shops and cafés", ja: "お店・カフェ" } },
      { worry: { en: "We're a Japanese business opening in Australia", ja: "日本のお店・会社でオーストラリアに出店する" }, to: S("japanese-business-fit-outs"), label: { en: "Japanese business fit-outs", ja: "日本のお店・企業の出店" } },
      { worry: { en: "We like the design, but can't find a builder", ja: "デザインはいいけど、施工会社が見つからない" }, to: "/nami-works#partners", label: { en: "Partners and builders", ja: "パートナーと施工会社" } },
    ],
    steps: [], // NAMI Works uses commercialSteps
    faq: [], // NAMI Works uses commercialFaq
  },
];

export const getBrandSite = (slug: string) => brandSites.find((b) => b.slug === slug);




/** The group top page: which NAMI business helps with what. */
export const groupFinder: Finder[] = [
  { worry: { en: "Renovating a kitchen, bathroom or the whole home", ja: "キッチン、浴室、家全体を直したい" }, to: "/nami-home", label: { en: "NAMI Home", ja: "NAMI Home" } },
  { worry: { en: "Building a new home, or want a hinoki bath", ja: "新築中、または檜風呂がほしい" }, to: "/nami-home", label: { en: "NAMI Home", ja: "NAMI Home" } },
  { worry: { en: "Selling, renting or investing in a property", ja: "家を売る・貸す・投資する" }, to: "/nami-value", label: { en: "NAMI Value", ja: "NAMI Value" } },
  { worry: { en: "Bought a home in Australia from overseas", ja: "海外からオーストラリアの物件を買った" }, to: "/nami-value", label: { en: "NAMI Value", ja: "NAMI Value" } },
  { worry: { en: "An office, clinic, shop or café", ja: "オフィス、クリニック、お店、カフェ" }, to: "/nami-works", label: { en: "NAMI Works", ja: "NAMI Works" } },
  { worry: { en: "A Japanese business opening in Australia", ja: "日本のお店・会社のオーストラリア出店" }, to: "/nami-works", label: { en: "NAMI Works", ja: "NAMI Works" } },
];

/**
 * Which brand site a page belongs to, from its path (without the language
 * prefix). null = the NAMI group site.
 */
export function brandOfPath(here: string, serviceBrand: (s: string) => string | undefined, guideBrand: (g: string) => string | undefined): string | null {
  const first = here.split("/")[1] ?? "";
  if (["nami-home", "nami-value", "nami-works"].includes(first)) return first;
  if (first === "homes" || first === "how-we-work") return "nami-home";
  if (first === "commercial") return "nami-works";
  const slug = here.split("/")[2];
  if (first === "services" && slug) return serviceBrand(slug) ?? null;
  if (first === "guides" && slug) return guideBrand(slug) ?? null;
  return null;
}
