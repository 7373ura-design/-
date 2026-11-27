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
      { worry: { en: "The garden doesn't connect with the house", ja: "庭と家がつながっていない" }, to: S("gardens-and-outdoor"), label: { en: "Gardens and outdoor", ja: "庭とアウトドア" } },
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
    slug: "nami-nagomi",
    short: "Nagomi",
    forWho: { en: "For older homeowners, and for families looking after parents.", ja: "これからの暮らしを考える方と、親を想うご家族へ。" },
    menu: [
      { href: "/nami-nagomi#services", label: { en: "WHAT WE DO", ja: "できること" } },
      { href: "/nami-nagomi#family", label: { en: "FOR FAMILIES", ja: "ご家族へ" } },
      { href: "/nami-nagomi#process", label: { en: "HOW IT WORKS", ja: "進め方" } },
      { href: "/nami-nagomi#faq", label: { en: "FAQ", ja: "よくある質問" } },
    ],
    finder: [
      { worry: { en: "Steps and stairs are getting harder", ja: "段差や階段がつらくなってきた" }, to: "/nami-nagomi#five-places", label: { en: "Five places to change", ja: "今から直したい5か所" } },
      { worry: { en: "The bathroom feels unsafe", ja: "浴室が危ない気がする" }, to: S("ageing-in-place"), label: { en: "Ageing in place", ja: "エイジング・イン・プレイス" } },
      { worry: { en: "We're moving to a smaller home, but have too many things", ja: "小さな家に住み替えたいけど、物が多い" }, to: "/nami-nagomi#downsizing", label: { en: "Downsizing", ja: "住み替え" } },
      { worry: { en: "Our parents live in Australia, but we live far away", ja: "親がオーストラリアに住んでいて、自分は遠くにいる" }, to: "/nami-nagomi#family", label: { en: "For families far away", ja: "離れて暮らすご家族へ" } },
      { worry: { en: "We don't want it to look like a hospital", ja: "病院みたいにはしたくない" }, to: S("ageing-in-place"), label: { en: "Safe, and beautiful", ja: "安全に、美しく" } },
    ],
    steps: [
      { title: { en: "Get in touch", ja: "お問い合わせ" }, line: { en: "You, or a family member on your behalf, in English, Japanese or Chinese", ja: "ご本人でも、ご家族からでも。日本語・英語・中国語で" } },
      { title: { en: "A visit to your home", ja: "ご自宅を拝見" }, line: { en: "We walk through the home with you and note what is hard today, and what may be hard later", ja: "一緒に家の中を歩き、今つらいところ、これからつらくなりそうなところを確認します" } },
      { title: { en: "Plan and quote", ja: "計画とお見積もり" }, line: { en: "What to change first, how it will look, and what it costs", ja: "何から直すか、どう見えるか、いくらかかるか" } },
      { title: { en: "Builders arranged through Japan Homes", ja: "ジャパンホームズを通して施工会社を手配" }, line: { en: "Licensed builders, with work planned so you can keep living at home where possible", ja: "ライセンスを持つ施工会社を。できる限り、住みながら進められるように計画します" } },
      { title: { en: "Settling in", ja: "暮らしに慣れるまで" }, line: { en: "We check how it works for you and adjust the small things", ja: "実際に使ってみての様子を確認し、小さなところを調整します" } },
    ],
    faq: [
      {
        q: { en: "Will it look like a hospital?", ja: "病院のような見た目になりませんか?" },
        a: { en: "No. Rails, seats and step-free floors are designed in from the start, in timber, stone and soft light, so they look like part of a calm home.", ja: "なりません。手すり、腰掛け、段差のない床を最初からデザインに組み込み、木や石、やわらかな光でまとめるので、落ち着いた家の一部に見えます。" },
      },
      {
        q: { en: "Can we stay at home while the work is done?", ja: "工事中も家に住み続けられますか?" },
        a: { en: "Often, yes. We plan the work room by room where we can. For a bathroom, there may be a few days without it, and we tell you before work begins.", ja: "多くの場合は可能です。できるだけ1部屋ずつ進める計画にします。浴室は数日使えない期間が出ることがあるため、工事の前にお伝えします。" },
      },
      {
        q: { en: "I live overseas. Can I arrange this for my parents?", ja: "海外に住んでいます。親のために依頼できますか?" },
        a: { en: "Yes. We visit your parents' home, send you photos and updates online, and talk with you in English, Japanese or Chinese at times that suit you.", ja: "はい。ご両親のお宅にうかがい、写真と進み具合をオンラインでお送りします。日本語・英語・中国語で、ご都合のよい時間にお話しします。" },
      },
      {
        q: { en: "Should we change things now, or wait until we need them?", ja: "今直すべきですか?必要になってからでいいですか?" },
        a: { en: "It is easier and calmer to plan before you need it, especially as part of a renovation you are already doing. We help you choose what to do now and what can wait.", ja: "必要になる前に計画したほうが、楽で落ち着いて進められます。すでに予定しているリノベーションと一緒なら、なおさらです。今やること、あとでいいことを一緒に決めます。" },
      },
      {
        q: { en: "Can you help us move to a smaller home?", ja: "小さな家への住み替えも手伝ってもらえますか?" },
        a: { en: "Yes. We help you choose what to keep, plan where it goes in the new home, arrange trusted movers and help you settle in.", ja: "はい。残すものを一緒に選び、新しい家のどこに置くかを計画し、信頼できる引っ越し業者を手配して、住み始めまでお手伝いします。" },
      },
    ],
  },
  {
    slug: "nami-value",
    short: "Value",
    forWho: { en: "For owners who are selling, investing or adding a granny flat.", ja: "売る・貸す・投資する・離れを建てる方へ。" },
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
      { worry: { en: "We want a granny flat for family or rental income", ja: "家族用や賃貸用に離れを建てたい" }, to: S("granny-flats"), label: { en: "Granny flats", ja: "グラニーフラット" } },
      { worry: { en: "Short-stay or long-term rental: which interior?", ja: "民泊と長期賃貸、どんな内装がいい?" }, to: S("styling-for-sale-and-rent"), label: { en: "Rental fit-out", ja: "賃貸用の内装" } },
    ],
    steps: [
      { title: { en: "Get in touch", ja: "お問い合わせ" }, line: { en: "Tell us about the property and your timing, in English, Japanese or Chinese", ja: "物件とご予定の時期をお聞かせください。日本語・英語・中国語で" } },
      { title: { en: "Property review", ja: "物件の確認" }, line: { en: "On site or online: what to change, what to leave, and what it will cost", ja: "現地またはオンラインで。直すところ、そのままでいいところ、費用まで" } },
      { title: { en: "Plan with your agent", ja: "不動産会社と計画" }, line: { en: "Timed to photos, open homes, settlement or the first tenants", ja: "撮影、内覧、引き渡し、入居のタイミングに合わせて" } },
      { title: { en: "Work and styling", ja: "工事とスタイリング" }, line: { en: "Builders arranged through Japan Homes; furniture and styling by NAMI", ja: "施工会社はジャパンホームズを通して手配。家具とスタイリングはNAMIが" } },
      { title: { en: "Ready to sell, rent or live in", ja: "売る・貸す・住む準備が完了" }, line: { en: "Photos and a short report, sent online if you are overseas", ja: "写真と簡単なご報告を。海外の方にはオンラインで" } },
    ],
    faq: [
      {
        q: { en: "Do you work with our real estate agent?", ja: "うちの不動産会社と一緒に進められますか?" },
        a: { en: "Yes. We plan the work and styling around your agent's dates for photos and open homes, and can talk to them directly.", ja: "はい。撮影日や内覧会の日程に合わせて、工事とスタイリングを計画します。不動産会社と直接やりとりすることもできます。" },
      },
      {
        q: { en: "I'm overseas. Can everything be done remotely?", ja: "海外にいます。すべて遠隔でお願いできますか?" },
        a: { en: "Yes. We handle the work on site and keep you updated online with photos, in Japanese, Chinese or English.", ja: "はい。現地での作業はこちらで行い、写真付きでオンラインでご報告します。日本語・中国語・英語に対応しています。" },
      },
      {
        q: { en: "Can we build a granny flat on our land?", ja: "うちの土地にグラニーフラットを建てられますか?" },
        a: { en: "It depends on the size of the lot and local rules. We check the basics early and point you to the rules; the builder and certifier confirm the details. Our guide explains the NSW basics.", ja: "敷地の広さや地域のルールによります。早い段階で基本を確認し、ルールをお伝えします。詳細は施工会社と認証機関が確認します。NSW州の基本はガイドでも説明しています。" },
      },
      {
        q: { en: "How long before listing should we start?", ja: "売りに出す、どのくらい前から始めればいいですか?" },
        a: { en: "Ideally four to eight weeks before photos, so there is time for small updates. Styling alone can often be done in a week or two.", ja: "撮影の4〜8週間前が理想です。小さな手直しの時間がとれます。スタイリングだけなら、1〜2週間でできることも多いです。" },
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
    forWho: { en: "For offices, clinics, shops, cafés and schools.", ja: "オフィス、クリニック、お店、カフェ、教室へ。" },
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
      { worry: { en: "Our classroom or school needs a refresh", ja: "教室やスクールを新しくしたい" }, to: S("school-design"), label: { en: "Schools and classrooms", ja: "教室・スクール" } },
      { worry: { en: "We're a Japanese business opening in Australia", ja: "日本のお店・会社でオーストラリアに出店する" }, to: S("japanese-business-fit-outs"), label: { en: "Japanese business fit-outs", ja: "日本のお店・企業の出店" } },
      { worry: { en: "We like the design, but can't find a builder", ja: "デザインはいいけど、施工会社が見つからない" }, to: "/nami-works#partners", label: { en: "Partners and builders", ja: "パートナーと施工会社" } },
    ],
    steps: [], // NAMI Works uses commercialSteps
    faq: [], // NAMI Works uses commercialFaq
  },
];

export const getBrandSite = (slug: string) => brandSites.find((b) => b.slug === slug);

/** Nagomi: the five places to change first. */
export const fivePlaces: Item[] = [
  { title: { en: "Entry", ja: "玄関" }, line: { en: "A bench to sit on while taking off shoes, a rail by the step, and light that comes on as you arrive", ja: "靴を脱ぐときに座れるベンチ、段差のそばの手すり、帰宅すると灯る照明" } },
  { title: { en: "Bathroom", ja: "浴室" }, line: { en: "A step-free walk-in shower, a seat, non-slip floors and backing in the walls for rails", ja: "段差のないウォークインシャワー、腰掛け、滑りにくい床、手すり用の壁の下地" } },
  { title: { en: "Stairs and hallways", ja: "階段と廊下" }, line: { en: "Rails on both sides, soft night lighting and wider paths with nothing in the way", ja: "両側の手すり、夜のやわらかな足元灯、物を置かない広い通路" } },
  { title: { en: "Kitchen", ja: "キッチン" }, line: { en: "Everyday things between waist and shoulder height, drawers instead of low cupboards", ja: "よく使うものは腰から肩の高さに。低い開き戸より引き出しを" } },
  { title: { en: "Bedroom and lighting", ja: "寝室と照明" }, line: { en: "A path to the bathroom that lights itself at night, and switches you can reach from bed", ja: "夜にトイレまで自然に灯る動線と、ベッドから届くスイッチ" } },
];

/** Nagomi: for families who live far away from their parents. */
export const familyFarAway = {
  title: { en: "For families\nfar away.", ja: "離れて暮らす\nご家族へ。" },
  body: {
    en: "Many of our clients' parents live in Australia while their children live in Japan, China or another city. You can ask us on their behalf. We visit the home, talk with your parents in person and keep you in the loop.",
    ja: "親はオーストラリア、子どもは日本や中国、ほかの街に住んでいる。そんなご家族は少なくありません。ご家族からのご依頼も大歓迎です。ご自宅にうかがい、ご両親と直接お話しし、ご家族にも様子をお伝えします。",
  },
  points: [
    { title: { en: "We visit for you", ja: "代わりに訪問" }, line: { en: "We see the home and talk with your parents face to face", ja: "家を拝見し、ご両親と顔を合わせてお話しします" } },
    { title: { en: "Updates online", ja: "オンラインでご報告" }, line: { en: "Photos and progress, at times that suit your time zone", ja: "写真と進み具合を、時差に合わせた時間に" } },
    { title: { en: "Three languages", ja: "3つの言葉で" }, line: { en: "English, Japanese or Chinese, for you and for your parents", ja: "ご家族にもご両親にも、日本語・英語・中国語で" } },
  ],
};

/** Nagomi: downsizing. */
export const downsizing = {
  title: { en: "Moving to\na smaller home.", ja: "小さな家への\n住み替え。" },
  body: {
    en: "Downsizing is not only about less space. It is choosing what matters most and giving it the right place. We help from the first sort to the first night in the new home.",
    ja: "住み替えは、ただ狭くなることではありません。いちばん大切なものを選び、ふさわしい場所を与えること。最初の片付けから、新しい家での最初の夜まで、お手伝いします。",
  },
  points: [
    { title: { en: "Choose what to keep", ja: "残すものを選ぶ" }, line: { en: "Furniture and things that fit the new home and your life", ja: "新しい家と暮らしに合う家具や物を" } },
    { title: { en: "Plan the new home", ja: "新しい家を計画" }, line: { en: "Where each piece goes, before moving day", ja: "引っ越しの前に、何をどこに置くかを" } },
    { title: { en: "Moving day", ja: "引っ越し当日" }, line: { en: "Trusted movers arranged, and help settling in", ja: "信頼できる引っ越し業者の手配と、住み始めのお手伝い" } },
  ],
};

/** The group top page: which NAMI business helps with what. */
export const groupFinder: Finder[] = [
  { worry: { en: "Renovating a kitchen, bathroom or the whole home", ja: "キッチン、浴室、家全体を直したい" }, to: "/nami-home", label: { en: "NAMI Home", ja: "NAMI Home" } },
  { worry: { en: "Building a new home, or want a hinoki bath", ja: "新築中、または檜風呂がほしい" }, to: "/nami-home", label: { en: "NAMI Home", ja: "NAMI Home" } },
  { worry: { en: "Making a home safe and easy for later life", ja: "これからも安全に、楽に暮らせる家にしたい" }, to: "/nami-nagomi", label: { en: "NAMI Nagomi", ja: "NAMI Nagomi" } },
  { worry: { en: "Helping parents who live far away from you", ja: "離れて暮らす親の家が心配" }, to: "/nami-nagomi", label: { en: "NAMI Nagomi", ja: "NAMI Nagomi" } },
  { worry: { en: "Selling, renting or investing in a property", ja: "家を売る・貸す・投資する" }, to: "/nami-value", label: { en: "NAMI Value", ja: "NAMI Value" } },
  { worry: { en: "Adding a granny flat", ja: "離れ(グラニーフラット)を建てたい" }, to: "/nami-value", label: { en: "NAMI Value", ja: "NAMI Value" } },
  { worry: { en: "An office, clinic, shop, café or school", ja: "オフィス、クリニック、お店、カフェ、教室" }, to: "/nami-works", label: { en: "NAMI Works", ja: "NAMI Works" } },
  { worry: { en: "A Japanese business opening in Australia", ja: "日本のお店・会社のオーストラリア出店" }, to: "/nami-works", label: { en: "NAMI Works", ja: "NAMI Works" } },
];

/**
 * Which brand site a page belongs to, from its path (without the language
 * prefix). null = the NAMI group site.
 */
export function brandOfPath(here: string, serviceBrand: (s: string) => string | undefined, guideBrand: (g: string) => string | undefined): string | null {
  const first = here.split("/")[1] ?? "";
  if (["nami-home", "nami-nagomi", "nami-value", "nami-works"].includes(first)) return first;
  if (first === "homes" || first === "how-we-work") return "nami-home";
  if (first === "commercial") return "nami-works";
  const slug = here.split("/")[2];
  if (first === "services" && slug) return serviceBrand(slug) ?? null;
  if (first === "guides" && slug) return guideBrand(slug) ?? null;
  return null;
}
