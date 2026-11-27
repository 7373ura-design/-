import type { Bi } from "@/lib/i18n";

/**
 * One page per service. Homes: 8. Shops & offices: 4. Japanese ideas appear
 * as examples, not as a theme. Photos are project photos or concept renders.
 */
export type Service = {
  slug: string;
  group: "homes" | "commercial";
  title: Bi;
  /** Short line for cards and the search description. */
  line: Bi;
  lead: Bi;
  worries: { worry: Bi; help: Bi }[];
  include: { title: Bi; line: Bi }[];
  ideas: Bi;
  /** NAMI's own photos or concept renders. Shown as the work on this page. */
  photos: { src: string; alt: string }[];
  /**
   * A background picture that is NOT NAMI's work (labelled "image" on the
   * page). Used for the top of the page when NAMI has no photo of its own yet.
   */
  hero?: { src: string; alt: string; credit?: string };
  guides: string[];
  concept?: boolean;
};

const P = (folder: string, n: string, alt: string) => ({ src: `/images/portfolio/${folder}/${n}.jpg`, alt });
const C = (folder: string, n: string, alt: string) => ({ src: `/images/concepts/${folder}/${n}.jpg`, alt });

export const services: Service[] = [
  {
    slug: "kitchen-design",
    group: "homes",
    title: { en: "Kitchen design and renovation", ja: "キッチンのデザイン・リノベーション" },
    line: { en: "The heart of the home, and the room buyers look at first.", ja: "家の中心であり、買い手が最初に見る場所。" },
    lead: {
      en: "A kitchen you enjoy every day: storage that keeps benches clear, light where you work, and materials that last. We design it, arrange builder quotes and stay with you until the build begins.",
      ja: "毎日が楽しくなるキッチンを。作業台をすっきり保つ収納、手元を照らす光、長く使える素材。デザインから施工会社の見積もり手配まで、工事が始まるまで一緒に進めます。",
    },
    worries: [
      { worry: { en: "Never enough bench space.", ja: "作業スペースが足りない。" }, help: { en: "A layout planned around how you cook.", ja: "料理のしかたに合わせたレイアウトに。" } },
      { worry: { en: "Things everywhere.", ja: "物があふれている。" }, help: { en: "Built-in storage with a place for everything.", ja: "すべてに居場所がある、造り付けの収納を。" } },
      { worry: { en: "Will it add value?", ja: "家の価値は上がる?" }, help: { en: "Finishes buyers notice, chosen to last.", ja: "買い手が目を留め、長く使える仕上げを選びます。" } },
    ],
    include: [
      { title: { en: "Layout and storage", ja: "レイアウトと収納" }, line: { en: "Work zones, island or galley, pantry", ja: "作業動線、アイランドやギャレー、パントリー" } },
      { title: { en: "Materials and colours", ja: "素材と色" }, line: { en: "Cabinetry, benchtops, splashbacks and floors that work together", ja: "キャビネット、天板、壁、床の組み合わせ" } },
      { title: { en: "Lighting", ja: "照明" }, line: { en: "Task, ambient and a pendant with character", ja: "手元灯、全体照明、印象的なペンダント" } },
      { title: { en: "Builder quotes", ja: "施工会社の見積もり" }, line: { en: "Licensed builders arranged and quotes compared", ja: "ライセンスを持つ施工会社を手配し、見積もりを比較" } },
    ],
    ideas: {
      en: "For example: solid timber cabinetry with slim black handles, a wave-shaped pendant over the island, or a calm white kitchen with timber slat details.",
      ja: "例えば:細い黒の取っ手を合わせた無垢材のキャビネット、アイランドの上の波形のペンダント、木の格子をあしらった白いキッチン。",
    },
    photos: [
      P("old-meets-new", "10", "A white kitchen with a timber slat island and a stone benchtop"),
      P("welcome-home", "04", "A bright kitchen with light timber cabinetry and a wave-shaped pendant light"),
      P("simply-special", "05", "An open kitchen with woven pendant lights"),
      P("living-in-green", "10", "A kitchen with timber cabinetry and a soft green wall"),
    ],
    guides: ["kitchen-renovation-sydney", "add-value-before-you-sell"],
  },
  {
    slug: "bathroom-design",
    group: "homes",
    title: { en: "Bathroom design and renovation", ja: "浴室のデザイン・リノベーション" },
    line: { en: "A calm bathroom that is safe and easy to keep clean.", ja: "落ち着いて、安全で、掃除しやすい浴室を。" },
    lead: {
      en: "From a quick refresh to a spa-like bathroom with a deep soaking tub. We plan for easy cleaning, good ventilation and safety for the years ahead.",
      ja: "手軽な改修から、深い湯船のある癒しの浴室まで。掃除のしやすさ、換気、これから先の安全まで考えて計画します。",
    },
    worries: [
      { worry: { en: "Hard to keep clean.", ja: "掃除が大変。" }, help: { en: "Fewer joints, wall-hung fittings and easy-care surfaces.", ja: "目地を減らし、浮かせた器具と手入れしやすい素材に。" } },
      { worry: { en: "Too small.", ja: "狭い。" }, help: { en: "Glass, light and storage planned to make it feel larger.", ja: "ガラス、光、収納で広く感じるように。" } },
    ],
    include: [
      { title: { en: "Layout", ja: "レイアウト" }, line: { en: "Shower, bath, vanity and storage", ja: "シャワー、浴槽、洗面、収納" } },
      { title: { en: "Materials", ja: "素材" }, line: { en: "Tiles, timber, stone and tapware chosen together", ja: "タイル、木、石、水栓をまとめて選定" } },
      { title: { en: "Light and air", ja: "光と換気" }, line: { en: "Windows, lighting and ventilation", ja: "窓、照明、換気" } },
      { title: { en: "Builder quotes", ja: "施工会社の見積もり" }, line: { en: "Licensed builders arranged and quotes compared", ja: "ライセンスを持つ施工会社を手配し、見積もりを比較" } },
    ],
    ideas: {
      en: "For example: a hinoki (Japanese cypress) soaking tub, a floating timber vanity with black tapware, or warm indirect light behind a mirror.",
      ja: "例えば:檜(ひのき)の湯船、黒い水栓と浮かせた木の洗面台、鏡の裏からのやわらかな間接照明。",
    },
    photos: [
      P("old-meets-new", "05", "A bathroom with timber details and warm indirect light"),
      P("old-meets-new", "06", "A vanity with a backlit mirror"),
      P("simply-special", "10", "A bathroom with a floating timber vanity and a walk-in shower"),
      P("welcome-home", "09", "A white bathroom with a glass shower"),
    ],
    guides: ["bathroom-renovation-tips"],
  },
  {
    slug: "home-renovation",
    group: "homes",
    title: { en: "Whole-home renovation", ja: "家まるごとのリノベーション" },
    line: { en: "Keep what is good about your home, and bring it up to date.", ja: "今の家の良さを残して、新しく。" },
    lead: {
      en: "An older home has things a new build can't: proportions, light, memories. We start by finding what is already good, then plan the changes in stages that suit your budget.",
      ja: "年月を重ねた家には、新築にはないものがあります。部屋のバランス、光、思い出。まず今の良さを見つけ、予算に合わせて段階的に計画します。",
    },
    worries: [
      { worry: { en: "Where do we start?", ja: "どこから手をつければ?" }, help: { en: "We set priorities with you.", ja: "優先順位を一緒に決めます。" } },
      { worry: { en: "Now, or later?", ja: "今やる?あとで?" }, help: { en: "A plan in stages.", ja: "段階的な計画を。" } },
      { worry: { en: "Will it still feel like our home?", ja: "うちらしさは残る?" }, help: { en: "We keep its character.", ja: "家の個性を残します。" } },
    ],
    include: [
      { title: { en: "Whole-home plan", ja: "家全体の計画" }, line: { en: "Layout, flow and light", ja: "間取り、動線、光" } },
      { title: { en: "Colours and materials", ja: "色と素材" }, line: { en: "So every room feels like one home", ja: "どの部屋もひとつの家としてつながるように" } },
      { title: { en: "Staging the work", ja: "段階的な工事" }, line: { en: "What to do first, and what can wait", ja: "先にやること、あとでいいこと" } },
      { title: { en: "Builder quotes", ja: "施工会社の見積もり" }, line: { en: "Licensed builders arranged and quotes compared", ja: "ライセンスを持つ施工会社を手配し、見積もりを比較" } },
    ],
    ideas: {
      en: "For example: timber slat screens at the entry, a deep soaking tub on the deck, or warm timber floors that tie old and new together.",
      ja: "例えば:玄関の木の格子、デッキの深い湯船、古いものと新しいものをつなぐ温かな無垢の床。",
    },
    photos: [
      P("old-meets-new", "02", "An entry with timber slat screens and a soaking tub on the deck"),
      P("old-meets-new", "03", "Timber slats on the ceiling and walls of a renovated hallway"),
      P("old-meets-new", "07", "A renovated living room with warm timber floors"),
      P("old-meets-new", "01", "A renovated villa with a timber front door"),
    ],
    guides: ["home-renovation-where-to-start", "add-value-before-you-sell"],
  },
  {
    slug: "new-build-interiors",
    group: "homes",
    title: { en: "New build interiors", ja: "新築のインテリア" },
    line: { en: "Interiors planned with the build, from day one.", ja: "家づくりと一緒に、最初から計画するインテリア。" },
    lead: {
      en: "Building new is the best time to get the interior right. We plan layout, light, storage, colours and materials together, so the finished home works as one.",
      ja: "新築は、インテリアを整える一番のチャンスです。間取り、光、収納、色、素材をまとめて計画し、ひとつにまとまった家に仕上げます。",
    },
    worries: [
      { worry: { en: "Too many choices from the builder.", ja: "ビルダーからの選択肢が多すぎる。" }, help: { en: "We choose the selections with you.", ja: "仕様選びを一緒に進めます。" } },
      { worry: { en: "I can't picture the finished home.", ja: "完成が想像できない。" }, help: { en: "Mood boards and layouts.", ja: "ムードボードとレイアウトで見えるように。" } },
      { worry: { en: "Will the furniture fit?", ja: "家具は入る?" }, help: { en: "We plan the furniture with the rooms.", ja: "部屋と一緒に家具まで計画します。" } },
    ],
    include: [
      { title: { en: "Selections", ja: "仕様選び" }, line: { en: "Cladding, floors, kitchens and bathrooms", ja: "外壁、床、キッチン、浴室" } },
      { title: { en: "Light and storage", ja: "光と収納" }, line: { en: "Windows, lighting and built-ins", ja: "窓、照明、造り付け収納" } },
      { title: { en: "Furniture plan", ja: "家具の計画" }, line: { en: "What goes where, before you move in", ja: "入居前に、何をどこに置くか" } },
      { title: { en: "Outdoor connection", ja: "外とのつながり" }, line: { en: "Decks and gardens that open from the living room", ja: "リビングから続くデッキと庭" } },
    ],
    ideas: {
      en: "For example: a genkan-style entry with built-in shoe storage, a raised tatami corner, or wide sliding doors that open the living room onto the deck.",
      ja: "例えば:靴の収納を造り付けた玄関、小上がりの畳コーナー、リビングからデッキへ大きく開く引き戸。",
    },
    photos: [
      P("living-in-green", "09", "An open-plan living area in a new home"),
      P("welcome-home", "01", "A new home with warm red cladding"),
      P("simply-special", "03", "A bright open living room in a new home"),
      P("living-in-green", "01", "A new home with a timber deck and garden"),
    ],
    guides: ["kitchen-renovation-sydney", "home-renovation-where-to-start"],
  },
  {
    slug: "styling-for-sale-and-rent",
    group: "homes",
    title: { en: "Styling to sell, rent or invest", ja: "売る・貸す・投資のためのスタイリング" },
    line: { en: "Design with the property market in mind.", ja: "不動産の視点を持ったデザイン。" },
    lead: {
      en: "With a real estate background in Australia and Japan, we focus on the places buyers and tenants notice: kitchens, bathrooms, light, storage and the first impression. From a pre-sale checklist to styling for photos and open homes, we plan around your sale dates.",
      ja: "オーストラリアと日本の不動産の資格を持つからこそ、買い手や借り手が目を留める場所に力を入れます。キッチン、浴室、光、収納、そして第一印象。売却前のチェックリストから、写真撮影や内覧のためのスタイリングまで、売り出しの予定に合わせて進めます。",
    },
    worries: [
      { worry: { en: "What's worth fixing before we sell?", ja: "売る前に、何を直すべき?" }, help: { en: "We help you spend where it really matters.", ja: "本当に大事なところにお金をかけられるように。" } },
      { worry: { en: "The rooms look empty or tired.", ja: "部屋がさみしい、古びて見える。" }, help: { en: "Styling that photographs well.", ja: "写真映えするスタイリングを。" } },
      { worry: { en: "Short-stay or long-term rental?", ja: "民泊?長期賃貸?" }, help: { en: "Durable, easy-care interiors for each.", ja: "それぞれに合う、丈夫で手入れしやすい内装を。" } },
    ],
    include: [
      { title: { en: "Pre-sale review", ja: "売却前の見直し" }, line: { en: "What to update, and what to leave", ja: "直すところ、そのままでいいところ" } },
      { title: { en: "Styling", ja: "スタイリング" }, line: { en: "Furniture, art and lighting for photos and inspections, with furniture hire for the campaign", ja: "写真と内覧のための家具、アート、照明。販売期間中の家具レンタルも" } },
      { title: { en: "Timed to your sale", ja: "売り出しの予定に合わせて" }, line: { en: "Ready for the photo shoot and open homes", ja: "撮影日や内覧会に間に合うように" } },
      { title: { en: "Rental fit-out", ja: "賃貸用の内装" }, line: { en: "Durable materials and furniture", ja: "丈夫な素材と家具" } },
    ],
    ideas: {
      en: "For example: calm, uncluttered rooms with a few natural textures, a refreshed kitchen and bathroom, or a welcoming entry that makes a strong first impression.",
      ja: "例えば:自然素材を少しだけ使った、すっきりと落ち着いた部屋、キッチンと浴室の手直し、第一印象を良くする玄関づくり。",
    },
    photos: [
      P("old-meets-new", "08", "A styled living room with timber floors"),
      P("old-meets-new", "09", "A bright, styled open-plan living area"),
      P("simply-special", "04", "A calm, bright open-plan room"),
      P("old-meets-new", "11", "A styled kitchen and dining area"),
    ],
    guides: ["pre-sale-styling-sydney", "add-value-before-you-sell"],
  },
  {
    slug: "office-design",
    group: "commercial",
    title: { en: "Office design", ja: "オフィスのデザイン" },
    line: { en: "Offices your team enjoys and clients remember.", ja: "社員が心地よく、お客様の記憶に残るオフィスを。" },
    lead: {
      en: "For real estate agencies, accounting and law firms, migration agents, IT companies and the Australian offices of Japanese companies. A free design proposal up to 3D renders, with builders arranged through Japan Homes.",
      ja: "不動産会社、会計事務所、法律事務所、移民エージェント、IT企業、日本企業のオーストラリア拠点に。3Dパースまでの無料デザイン提案と、ジャパンホームズを通した施工会社の手配。",
    },
    worries: [
      { worry: { en: "Clients feel nervous when they visit.", ja: "来客が緊張してしまう。" }, help: { en: "A reception that feels like a welcome.", ja: "迎え入れるような受付に。" } },
      { worry: { en: "Hard to focus.", ja: "集中しにくい。" }, help: { en: "Light, acoustics and quiet corners.", ja: "光、音、静かな場所の計画を。" } },
      { worry: { en: "Staff don't stay.", ja: "人が定着しない。" }, help: { en: "A workplace people want to come to.", ja: "来たくなる職場に。" } },
    ],
    include: [
      { title: { en: "Layout", ja: "レイアウト" }, line: { en: "Two to three options to compare", ja: "比べられる2〜3案" } },
      { title: { en: "3D renders", ja: "3Dパース" }, line: { en: "See it before it's built", ja: "完成前に空間を確認" } },
      { title: { en: "Furniture list", ja: "家具リスト" }, line: { en: "Desks, seating and storage", ja: "デスク、椅子、収納" } },
      { title: { en: "Builder quotes", ja: "施工会社の見積もり" }, line: { en: "Arranged through Japan Homes", ja: "ジャパンホームズを通して手配" } },
    ],
    ideas: {
      en: "For example: a warm oak reception with a bench by the window, frosted-glass meeting rooms that stay bright and private, or desks facing the light.",
      ja: "例えば:窓辺にベンチのある温かなオークの受付、明るさとプライバシーを両立するすりガラスの打ち合わせ室、光に向かって並ぶデスク。",
    },
    hero: { src: "/images/stock/office.jpg", alt: "Image: a calm office with light timber furniture and plants" },
    photos: [
      C("engawa-office", "01-reception", "Engawa Office sample concept (3D render): a modern reception with an oak desk"),
      C("engawa-office", "02-meeting", "Engawa Office sample concept (3D render): a meeting room behind frosted glass"),
      C("engawa-office", "03-work", "Engawa Office sample concept (3D render): an open work area facing the windows"),
    ],
    guides: ["office-fit-out-steps"],
    concept: true,
  },
  {
    slug: "clinic-design",
    group: "commercial",
    title: { en: "Clinic and wellness design", ja: "クリニック・サロンのデザイン" },
    line: { en: "Dental, medical, massage and beauty: calm from the first step.", ja: "歯科、医療、マッサージ、美容。一歩目から落ち着く空間を。" },
    lead: {
      en: "Patients and guests feel the space before the treatment begins. We design calm receptions and private treatment rooms, including second and third locations.",
      ja: "施術の前に、患者さんやお客様は空間を感じています。落ち着いた受付と、プライバシーを守る施術室をデザインします。2院目、3院目の開院にも。",
    },
    worries: [
      { worry: { en: "Patients feel anxious.", ja: "患者さんが不安そう。" }, help: { en: "Soft light, natural materials and quiet.", ja: "やわらかな光、自然素材、静けさで。" } },
      { worry: { en: "Rooms feel too clinical.", ja: "病院っぽすぎる。" }, help: { en: "Warm, easy-to-clean finishes.", ja: "温かく、清潔に保てる仕上げに。" } },
      { worry: { en: "Opening a second location.", ja: "2院目を開きたい。" }, help: { en: "A design that carries your brand.", ja: "ブランドが伝わるデザインで。" } },
    ],
    include: [
      { title: { en: "Reception and waiting", ja: "受付・待合" }, line: { en: "A calm first impression", ja: "落ち着いた第一印象" } },
      { title: { en: "Treatment rooms", ja: "施術室" }, line: { en: "Privacy, light and storage", ja: "プライバシー、光、収納" } },
      { title: { en: "3D renders", ja: "3Dパース" }, line: { en: "See it before it's built", ja: "完成前に空間を確認" } },
      { title: { en: "Builder quotes", ja: "施工会社の見積もり" }, line: { en: "Arranged through Japan Homes", ja: "ジャパンホームズを通して手配" } },
    ],
    ideas: {
      en: "For example: round washi paper lanterns, indigo fabric with the seigaiha wave pattern, or sudare bamboo blinds that soften the view from the street.",
      ja: "例えば:丸い和紙の提灯、青海波(せいがいは)模様の藍色の布、通りからの視線をやわらげる簾(すだれ)。",
    },
    hero: { src: "/images/stock/clinic.jpg", alt: "Image: a calm clinic waiting room with timber walls" },
    photos: [
      C("sunrise-and-waves", "03-sunrise-room", "Sunrise & Waves concept: a treatment room with a washi lantern"),
      C("sunrise-and-waves", "02-reception", "Sunrise & Waves concept: reception with a hanging scroll"),
      C("sunrise-and-waves", "04-waves-room", "Sunrise & Waves concept: a treatment room with an indigo throw"),
    ],
    guides: ["office-fit-out-steps"],
    concept: true,
  },
  {
    slug: "retail-and-cafe-design",
    group: "commercial",
    title: { en: "Shop and café design", ja: "お店・カフェのデザイン" },
    line: { en: "A space that tells your story and makes people stay.", ja: "お店の物語を伝え、長く居たくなる空間を。" },
    lead: {
      en: "From your first store to the next. We think about how customers move through the space, what they see first and what makes them come back, sometimes before you sign the lease.",
      ja: "1店舗目から次の店舗まで。お客様がどう動き、最初に何を目にし、なぜまた来たくなるのか。ときには賃貸契約の前から考えます。",
    },
    worries: [
      { worry: { en: "Is this the right space?", ja: "この物件で大丈夫?" }, help: { en: "A quick design before you sign the lease.", ja: "契約前に、すぐにデザインを。" } },
      { worry: { en: "Customers don't stay.", ja: "お客様が長居しない。" }, help: { en: "Flow, seating and light planned together.", ja: "動線、席、光をまとめて計画。" } },
      { worry: { en: "We need to open soon.", ja: "早くオープンしたい。" }, help: { en: "Builders arranged through Japan Homes.", ja: "施工会社をジャパンホームズを通して手配。" } },
    ],
    include: [
      { title: { en: "Customer flow", ja: "お客様の動線" }, line: { en: "Entry, display, counter and seating", ja: "入口、陳列、カウンター、席" } },
      { title: { en: "Brand and mood", ja: "ブランドと雰囲気" }, line: { en: "Japandi, modern, coastal or your own", ja: "ジャパンディ、モダン、コースタルなど" } },
      { title: { en: "3D renders", ja: "3Dパース" }, line: { en: "See it before it's built", ja: "完成前に空間を確認" } },
      { title: { en: "Builder quotes", ja: "施工会社の見積もり" }, line: { en: "Arranged through Japan Homes", ja: "ジャパンホームズを通して手配" } },
    ],
    ideas: {
      en: "For example: fabric waves across the ceiling, a timber counter with a hanging scroll behind it, or soft lighting that makes customers linger.",
      ja: "例えば:天井に揺れる布の波、掛け軸を背にした木のカウンター、つい長居したくなるやわらかな照明。",
    },
    hero: { src: "/images/stock/cafe.jpg", alt: "Image: a small bright café with a timber counter" },
    photos: [
      C("sunrise-and-waves", "01-lounge", "Sunrise & Waves concept: lounge with fabric waves across the ceiling"),
      C("sunrise-and-waves", "02-reception", "Sunrise & Waves concept: a timber reception counter"),
    ],
    guides: ["office-fit-out-steps"],
    concept: true,
  },
  {
    slug: "hinoki-baths",
    group: "homes",
    title: { en: "Hinoki baths and Japanese bathing", ja: "檜(ひのき)風呂と日本のお風呂時間" },
    line: { en: "A Japanese cypress soaking tub, planned into your bathroom or deck.", ja: "檜の湯船を、浴室やデッキに。" },
    lead: {
      en: "Hinoki, Japanese cypress, has been used for baths in Japan for centuries for its fresh scent and its resistance to moisture. We design the bathroom or deck around a deep soaking tub, and plan the ventilation, drainage and care it needs to last. Hinoki baths are supplied through our partner Japan Homes for projects in Australia; availability and pricing on request.",
      ja: "檜(ひのき)は、さわやかな香りと水への強さから、日本で何百年もお風呂に使われてきた木です。深い湯船を中心に浴室やデッキをデザインし、長持ちさせるための換気・排水・お手入れまで一緒に計画します。檜の湯船は、パートナーのジャパンホームズを通して、オーストラリアのプロジェクト向けに手配します。在庫と価格はお問い合わせください。",
    },
    worries: [
      { worry: { en: "Will timber last in a bathroom?", ja: "木のお風呂は長持ちする?" }, help: { en: "Ventilation, drainage and a simple care routine, planned in.", ja: "換気、排水、簡単なお手入れ方法を最初から計画します。" } },
      { worry: { en: "Where would it even fit?", ja: "どこに置けばいい?" }, help: { en: "Indoors, on a deck or in the garden: we find the right place.", ja: "室内、デッキ、庭。合う場所を一緒に探します。" } },
      { worry: { en: "Where do we get one?", ja: "どこで手に入る?" }, help: { en: "Supplied through our partner Japan Homes. Ask us for details.", ja: "パートナーのジャパンホームズを通して手配します。詳しくはお問い合わせください。" } },
    ],
    include: [
      { title: { en: "Bathroom or deck design", ja: "浴室・デッキのデザイン" }, line: { en: "Layout, materials and light around the tub", ja: "湯船を中心にしたレイアウト、素材、光" } },
      { title: { en: "Choosing the tub", ja: "湯船選び" }, line: { en: "Size, shape and depth for how you bathe; sizes and prices on request", ja: "入り方に合わせた大きさ、形、深さ。サイズと価格はお問い合わせください" } },
      { title: { en: "Ventilation and drainage", ja: "換気と排水" }, line: { en: "So the timber can dry between baths", ja: "使うたびに木がしっかり乾くように" } },
      { title: { en: "Japanese bath details", ja: "日本のお風呂の小物" }, line: { en: "Hinoki stools, bath mats and soft lighting", ja: "檜の腰掛け、バスマット、やわらかな照明" } },
    ],
    ideas: {
      en: "For example: a hinoki tub by a window onto a small garden, an outdoor soaking tub on a shaded deck, or hinoki stools and a bath mat to bring the scent into an existing bathroom.",
      ja: "例えば:小さな庭が見える窓辺の檜の湯船、日陰のデッキに置いた屋外の湯船、今の浴室に檜の腰掛けやバスマットで香りを足すことも。",
    },
    hero: { src: "/images/stock/hinoki-photo.jpg", alt: "Image: a round hinoki cypress bathtub in a timber-lined bathroom looking out to snowy mountains", credit: "Photo: Motomi Kawakami / Wikimedia Commons (CC BY 1.0)" },
    photos: [
      P("old-meets-new", "02", "A timber soaking tub on a deck beside a slatted entry"),
      P("old-meets-new", "05", "A bathroom with timber details and warm indirect light"),
      P("old-meets-new", "06", "A calm bathroom with timber and soft lighting"),
    ],
    guides: ["hinoki-bath-guide", "bathroom-renovation-tips"],
  },
  {
    slug: "investor-turnkey-interiors",
    group: "homes",
    title: { en: "Turnkey interiors for overseas buyers", ja: "海外オーナー向け・おまかせ内装パッケージ" },
    line: { en: "Bought a new apartment in Australia from overseas? We make it ready to rent or live in.", ja: "海外からオーストラリアの新築物件を買った方へ。すぐ貸せる・住める状態に。" },
    lead: {
      en: "For owners in Japan, China and elsewhere who have bought a new or off-the-plan home in Australia. We furnish and style it, arrange photos for leasing, and keep you updated online, in Japanese, Chinese or English.",
      ja: "日本や中国などからオーストラリアの新築・オフザプラン物件を購入された方へ。家具の手配とスタイリング、賃貸募集用の写真まで行い、日本語・中国語・英語でオンラインでご報告します。",
    },
    worries: [
      { worry: { en: "I can't be there in person.", ja: "現地に行けない。" }, help: { en: "We handle it on site and report to you online.", ja: "現地での作業はこちらで行い、オンラインでご報告します。" } },
      { worry: { en: "I want it rented quickly.", ja: "早く貸したい。" }, help: { en: "Durable, appealing interiors and photos for leasing.", ja: "丈夫で魅力的な内装と、募集用の写真で。" } },
      { worry: { en: "Language and time zones.", ja: "言葉と時差が心配。" }, help: { en: "Japanese, Chinese or English, at times that suit you.", ja: "日本語・中国語・英語で、ご都合のよい時間に。" } },
    ],
    include: [
      { title: { en: "Furniture package", ja: "家具一式" }, line: { en: "Chosen for the space and for tenants", ja: "空間と入居者に合わせて選定" } },
      { title: { en: "Styling and photos", ja: "スタイリングと写真" }, line: { en: "Ready for leasing or for your own visits", ja: "賃貸募集にも、ご自身の滞在にも" } },
      { title: { en: "Online updates", ja: "オンラインでのご報告" }, line: { en: "Photos and progress at every step", ja: "各段階で写真と進み具合をお送りします" } },
      { title: { en: "Trusted contacts", ja: "信頼できる紹介先" }, line: { en: "Real estate agents and property managers, if you need them", ja: "必要に応じて、不動産会社や管理会社をご紹介" } },
    ],
    ideas: {
      en: "For example: a calm, easy-care apartment in light timber and linen that photographs well, or a few Japanese touches, such as washi lighting, that make a listing stand out.",
      ja: "例えば:写真映えする、明るい木とリネンの手入れしやすい部屋や、和紙の照明など、募集で目を引く少しの日本の要素。",
    },
    photos: [
      P("simply-special", "04", "A calm, bright open-plan living space"),
      P("simply-special", "02", "A bright bedroom with large windows"),
      P("welcome-home", "05", "A light-filled room ready to furnish"),
    ],
    guides: ["buying-new-property-from-overseas", "add-value-before-you-sell"],
  },
  {
    slug: "japanese-business-fit-outs",
    group: "commercial",
    title: { en: "Fit-outs for Japanese businesses opening in Australia", ja: "日本のお店・企業のオーストラリア出店" },
    line: { en: "Restaurants, cafés, salons and offices: we bridge Japan and Australia.", ja: "飲食店、カフェ、サロン、オフィス。日本とオーストラリアの橋渡しを。" },
    lead: {
      en: "Japanese food and brands are growing in Australia. For Japanese restaurants, cafés, salons and companies opening here, we design the space in Japanese and English, keep your brand's feel, and arrange local licensed builders through Japan Homes' connections.",
      ja: "オーストラリアでは日本の食やブランドが広がっています。日本の飲食店、カフェ、サロン、企業の出店に、日本語と英語でデザインを進め、ブランドらしさを守りながら、ジャパンホームズのつながりで現地のライセンスを持つ施工会社を手配します。",
    },
    worries: [
      { worry: { en: "We don't know how things work here.", ja: "現地のやり方がわからない。" }, help: { en: "We explain each step in Japanese.", ja: "日本語で一つずつご説明します。" } },
      { worry: { en: "Will it still feel like our brand?", ja: "ブランドらしさは保てる?" }, help: { en: "We keep your look, adjusted to Australian rules and customers.", ja: "雰囲気はそのまま、現地のルールとお客様に合わせて。" } },
      { worry: { en: "Finding builders from Japan.", ja: "日本から施工会社を探すのは難しい。" }, help: { en: "Licensed builders arranged through Japan Homes.", ja: "ジャパンホームズを通して、ライセンスを持つ施工会社を手配。" } },
    ],
    include: [
      { title: { en: "Site and lease check", ja: "物件の確認" }, line: { en: "A quick layout before you sign", ja: "契約前に簡単なレイアウトを" } },
      { title: { en: "Bilingual design", ja: "日英でのデザイン" }, line: { en: "Drawings and meetings in Japanese and English", ja: "図面も打ち合わせも日本語と英語で" } },
      { title: { en: "3D renders", ja: "3Dパース" }, line: { en: "To share with your head office", ja: "本社との共有用に" } },
      { title: { en: "Builders and professionals", ja: "施工会社と専門家" }, line: { en: "Licensed builders, and licensed professionals for approvals", ja: "ライセンスを持つ施工会社と、許可申請の専門家" } },
    ],
    ideas: {
      en: "For example: a ramen counter in hinoki with a noren curtain at the door, a calm salon with washi lighting, or an office that feels familiar to staff from Japan.",
      ja: "例えば:入口に暖簾をかけた檜のラーメンカウンター、和紙の照明の落ち着いたサロン、日本から来た社員がなじめるオフィス。",
    },
    hero: { src: "/images/stock/restaurant.jpg", alt: "Image: a Japanese restaurant with a timber counter and paper lanterns" },
    photos: [
      C("sunrise-and-waves", "02-reception", "Sunrise & Waves concept: a timber reception counter with a hanging scroll"),
      C("sunrise-and-waves", "01-lounge", "Sunrise & Waves concept: a calm lounge"),
      C("engawa-office", "01-reception", "Engawa Office sample concept: a calm reception"),
    ],
    guides: ["opening-japanese-business-australia", "office-fit-out-steps"],
    concept: true,
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
export const homeServicesList = services.filter((s) => s.group === "homes");
export const commercialServicesList = services.filter((s) => s.group === "commercial");
