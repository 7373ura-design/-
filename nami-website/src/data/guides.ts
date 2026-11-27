import type { Bi } from "@/lib/i18n";

/**
 * Helpful guides that answer the questions people ask before they get in
 * touch. Keep them practical and general; where a rule applies, point to the
 * official source rather than quoting figures that change.
 */
export type Guide = {
  slug: string;
  title: Bi;
  description: Bi;
  date: string;
  sections: { heading: Bi; body: Bi[] }[];
  sources?: { label: string; url: string }[];
  services: string[];
};

export const guides: Guide[] = [
  {
    slug: "is-design-expensive",
    title: { en: "Is interior design expensive? Where to start on a budget", ja: "インテリアデザインは高い?予算に合わせた始め方" },
    description: {
      en: "Why good design can save money, how to start with one room, and where to spend first.",
      ja: "良いデザインがむしろ節約になる理由、1部屋からの始め方、最初にお金をかけるべき場所。",
    },
    date: "2026-11-27",
    sections: [
      {
        heading: { en: "Design often saves money", ja: "デザインは、むしろ節約になることが多い" },
        body: [
          { en: "The most expensive mistakes are the ones made during the build: the wrong layout, a benchtop that doesn't fit, materials that don't work together. A plan made before work begins avoids most of them.", ja: "一番高くつく失敗は、工事中に起きます。合わない間取り、入らない天板、ちぐはぐな素材。工事の前に計画を立てておけば、その多くは防げます。" },
        ],
      },
      {
        heading: { en: "Start with one room", ja: "1部屋から始める" },
        body: [
          { en: "You don't need to design the whole home at once. Many clients start with the room that bothers them most, often the kitchen or the living room, and continue when they are ready.", ja: "家全体を一度にデザインする必要はありません。多くのお客様は、一番気になる部屋(キッチンやリビングが多いです)から始めて、準備ができたら続けています。" },
        ],
      },
      {
        heading: { en: "Spend where it matters", ja: "大事なところにお金をかける" },
        body: [
          { en: "Put the budget into what you touch and use every day, and into what lasts: benchtops, flooring, taps and storage. Save on what is easy to change later, like paint and decor.", ja: "毎日触れて使うもの、長く使うもの(天板、床、水栓、収納)に予算をかけましょう。塗装や小物など、あとで変えやすいものは抑えて大丈夫です。" },
        ],
      },
      {
        heading: { en: "Ask about the first consultation", ja: "まずは無料の相談から" },
        body: [
          { en: "Our first consultation is free, and we tell you about the costs up front. If funds are the worry, we can introduce a trusted mortgage broker.", ja: "NAMIの最初のご相談は無料で、費用のことは最初にお伝えします。資金が心配な方には、信頼できる住宅ローンのブローカーをご紹介できます。" },
        ],
      },
    ],
    services: ["kitchen-design", "home-renovation"],
  },
  {
    slug: "kitchen-renovation-sydney",
    title: { en: "Planning a kitchen renovation in Sydney", ja: "シドニーでキッチンをリノベーションするときの進め方" },
    description: { en: "The steps, the decisions that matter most, and how to avoid surprises.", ja: "進める順番、大事な決めごと、想定外を防ぐコツ。" },
    date: "2026-11-27",
    sections: [
      {
        heading: { en: "1. Start with how you cook", ja: "1. 料理のしかたから考える" },
        body: [
          { en: "Who cooks, how often, and where do people gather? The answers decide the layout: an island, a galley or an L-shape, and where the sink, cooktop and fridge go.", ja: "誰が、どれくらい料理をして、家族はどこに集まりますか? その答えで、アイランド・ギャレー・L字などのレイアウトや、シンク・コンロ・冷蔵庫の位置が決まります。" },
        ],
      },
      {
        heading: { en: "2. Decide what moves", ja: "2. 動かすものを決める" },
        body: [
          { en: "Moving plumbing, gas or walls adds cost and time. Keeping the main services where they are is often the biggest saving.", ja: "給排水、ガス、壁を動かすと、費用も時間も増えます。主な設備の位置を変えないことが、一番の節約になることが多いです。" },
        ],
      },
      {
        heading: { en: "3. Choose a few materials that work together", ja: "3. 相性のいい素材を少しだけ選ぶ" },
        body: [
          { en: "Cabinetry, benchtop, splashback and floor should be chosen together. A small palette looks calmer and is easier to decide.", ja: "キャビネット、天板、壁、床はまとめて選びましょう。素材を絞ると、落ち着いて見え、決めるのも楽になります。" },
        ],
      },
      {
        heading: { en: "4. Get comparable quotes", ja: "4. 比べられる見積もりを取る" },
        body: [
          { en: "Quotes are only comparable when they are based on the same design. We arrange quotes from licensed builders on one set of drawings, and plan for some time without a working kitchen during the build.", ja: "見積もりは、同じデザインをもとにして初めて比べられます。NAMIは同じ図面をもとに、ライセンスを持つ施工会社の見積もりを手配します。工事中はキッチンが使えない期間があることも計画に入れておきましょう。" },
        ],
      },
    ],
    services: ["kitchen-design"],
  },
  {
    slug: "bathroom-renovation-tips",
    title: { en: "Bathroom renovation: what to get right", ja: "浴室リノベーションで失敗しないポイント" },
    description: { en: "Cleaning, ventilation, safety and storage: the details that matter for years.", ja: "掃除、換気、安全、収納。何年も効いてくる細かなポイント。" },
    date: "2026-11-27",
    sections: [
      {
        heading: { en: "Easy to clean", ja: "掃除しやすく" },
        body: [{ en: "Larger tiles mean fewer grout lines. Wall-hung toilets and vanities make the floor easy to wipe.", ja: "大きめのタイルは目地が少なくなります。壁掛けのトイレや洗面台なら、床をさっと拭けます。" }],
      },
      {
        heading: { en: "Good ventilation", ja: "しっかり換気" },
        body: [{ en: "Mould starts with moisture that can't escape. A window, a good exhaust fan or both keep the room fresh.", ja: "カビは、逃げ場のない湿気から始まります。窓や性能のよい換気扇で、空気を新鮮に保ちましょう。" }],
      },
      {
        heading: { en: "Safe for later", ja: "将来も安全に" },
        body: [{ en: "A step-free shower and blocking in the walls for future grab rails cost little now and save a second renovation later.", ja: "段差のないシャワーと、将来の手すりのための壁の下地。今なら少しの費用で、あとの再工事を防げます。" }],
      },
      {
        heading: { en: "Storage you'll use", ja: "使える収納を" },
        body: [{ en: "Niches in the shower and a deep drawer under the basin keep surfaces clear.", ja: "シャワーの壁のくぼみ棚や、洗面台下の深い引き出しで、まわりをすっきり保てます。" }],
      },
    ],
    services: ["bathroom-design"],
  },
  {
    slug: "home-renovation-where-to-start",
    title: { en: "Renovating a home: where to start", ja: "家のリノベーション、どこから始める?" },
    description: { en: "Priorities, staging the work and keeping your home's character.", ja: "優先順位、段階的な工事、家らしさを残すこと。" },
    date: "2026-11-27",
    sections: [
      {
        heading: { en: "Find what is already good", ja: "今ある良さを見つける" },
        body: [{ en: "Before changing anything, notice what you love: the light in one room, the proportions, a view. Good renovations keep those.", ja: "何かを変える前に、好きなところを見つけましょう。ある部屋の光、部屋のバランス、窓からの景色。良いリノベーションは、それを残します。" }],
      },
      {
        heading: { en: "Set priorities", ja: "優先順位を決める" },
        body: [{ en: "Fix what affects daily life and safety first, then what adds value, then what is purely for enjoyment.", ja: "まず毎日の暮らしと安全に関わるところ、次に価値を上げるところ、最後に楽しみのためのところ。" }],
      },
      {
        heading: { en: "Plan in stages", ja: "段階的に計画する" },
        body: [{ en: "A whole-home plan done once lets you build in stages without undoing earlier work.", ja: "最初に家全体の計画を立てておけば、段階的に工事しても、前の工事をやり直さずに済みます。" }],
      },
      {
        heading: { en: "Check approvals early", ja: "許可は早めに確認" },
        body: [{ en: "Some work needs council or other approvals. Check early so the plan and the timeline are realistic.", ja: "工事によっては、役所などの許可が必要です。計画とスケジュールが現実的になるよう、早めに確認しましょう。" }],
      },
    ],
    sources: [{ label: "NSW Planning Portal", url: "https://www.planningportal.nsw.gov.au/" }],
    services: ["home-renovation", "new-build-interiors"],
  },
  {
    slug: "add-value-before-you-sell",
    title: { en: "What adds value before you sell", ja: "売る前にやるべき、価値を上げる手直し" },
    description: { en: "Where buyers look most, and what is worth doing (and not doing) before a sale.", ja: "買い手がよく見るところと、売却前にやる価値があること・ないこと。" },
    date: "2026-11-27",
    sections: [
      { heading: { en: "Kitchens and bathrooms", ja: "キッチンと浴室" }, body: [{ en: "The rooms buyers look at most closely. A refresh (taps, lighting, handles, a new benchtop) can make a big difference without a full renovation.", ja: "買い手が最もよく見る場所です。水栓、照明、取っ手、天板の交換など、全面改装でなくても印象は大きく変わります。" }] },
      { heading: { en: "Light and flow", ja: "光と動線" }, body: [{ en: "Brighter rooms feel larger. Clear sight lines and an easy path to the garden help buyers picture living there.", ja: "明るい部屋は広く感じます。見通しのよさと庭への行きやすさは、暮らしを想像しやすくします。" }] },
      { heading: { en: "Built-in storage", ja: "造り付けの収納" }, body: [{ en: "Calm, uncluttered rooms are always in demand.", ja: "すっきりした部屋は、いつも求められます。" }] },
      { heading: { en: "Styling for photos and inspections", ja: "写真と内覧のためのスタイリング" }, body: [{ en: "Most buyers see your home online first. Calm, well-styled rooms photograph better.", ja: "多くの買い手は、まずネットで家を見ます。落ち着いて整った部屋は、写真映えします。" }] },
      { heading: { en: "A note", ja: "ご注意" }, body: [{ en: "This is general design advice, not a valuation. For the value of your property, talk to a licensed valuer or agent.", ja: "これは一般的なデザインのアドバイスであり、査定ではありません。物件の価値は、資格を持つ鑑定士や不動産会社にご相談ください。" }] },
    ],
    services: ["styling-for-sale-and-rent", "kitchen-design"],
  },
  {
    slug: "office-fit-out-steps",
    title: { en: "Office and shop fit-outs: the steps", ja: "オフィス・店舗の内装、進め方のステップ" },
    description: { en: "From choosing a space to opening day, and what a free design proposal includes.", ja: "物件選びからオープンまで。無料のデザイン提案に含まれるもの。" },
    date: "2026-11-27",
    sections: [
      { heading: { en: "Before you sign the lease", ja: "賃貸契約の前に" }, body: [{ en: "A quick layout shows whether the space fits your team or customers before you commit.", ja: "簡単なレイアウトで、決める前にその物件がチームやお客様に合うかがわかります。" }] },
      { heading: { en: "Design proposal", ja: "デザイン提案" }, body: [{ en: "Briefing, measure-up, layout options, mood board, 3D renders, furniture list and a budget estimate. For our launch, this is free for 10 businesses when the build is arranged through NAMI and Japan Homes.", ja: "ヒアリング、採寸、レイアウト案、ムードボード、3Dパース、家具リスト、概算予算。オープン記念として、NAMIとジャパンホームズを通して施工会社を手配する場合、10社まで無料です。" }] },
      { heading: { en: "Builders and approvals", ja: "施工会社と許可" }, body: [{ en: "We arrange licensed builders through Japan Homes' connections. Structural, fire, ventilation, plumbing and electrical design and council documents are handled by licensed professionals.", ja: "ジャパンホームズのつながりで、ライセンスを持つ施工会社を手配します。構造・消防・換気・水回り・電気の設計や役所への書類は、資格を持つ専門家が担当します。" }] },
      { heading: { en: "During the build", ja: "工事中" }, body: [{ en: "You contract the builder directly. We check that the work matches the design until you open the doors.", ja: "工事の契約はお客様と施工会社の直接契約です。オープンまで、デザイン通りに進んでいるかを確認します。" }] },
    ],
    services: ["office-design", "retail-and-cafe-design"],
  },
  {
    slug: "pre-sale-styling-sydney",
    title: { en: "Styling your home before you sell in Sydney", ja: "シドニーで家を売る前のスタイリング" },
    description: { en: "What pre-sale styling is, what it usually costs in Sydney, and what to do first.", ja: "売却前のスタイリングとは何か、シドニーでの費用の目安、最初にやること。" },
    date: "2026-11-27",
    sections: [
      { heading: { en: "What pre-sale styling is", ja: "売却前のスタイリングとは" }, body: [{ en: "Styling (also called staging) means arranging furniture, art and lighting so buyers can picture living in the home. Most buyers see your home online first, so it is really about the photos and the first few seconds of an open home.", ja: "スタイリング(ステージングとも呼ばれます)は、家具、アート、照明を整えて、買い手がそこでの暮らしを思い描けるようにすることです。多くの買い手はまずネットで家を見るので、大切なのは写真と、内覧の最初の数秒です。" }] },
      { heading: { en: "What it usually costs", ja: "費用の目安" }, body: [{ en: "One Sydney agency puts professional styling at around $2,000 to $8,000, including furniture hire for about four to eight weeks. The cost depends on the size of the home and how much furniture is needed.", ja: "シドニーのある不動産会社によると、プロのスタイリングは家具の4〜8週間のレンタル込みで、おおよそ2,000〜8,000ドルです。家の広さや必要な家具の量によって変わります。" }] },
      { heading: { en: "Does it help?", ja: "効果はある?" }, body: [{ en: "Agents widely report that styled homes photograph better and tend to sell faster, but independent Australian data is limited, so be wary of exact percentages. What is certain is that a calm, uncluttered, well-lit home is easier for buyers to love.", ja: "スタイリングした家は写真映えし、早く売れやすいと多くの不動産会社が伝えています。ただ、オーストラリアの中立的なデータは少ないので、具体的な数字には注意が必要です。確かなのは、すっきりと明るく落ち着いた家のほうが、買い手に好かれやすいということです。" }] },
      { heading: { en: "Where to start", ja: "最初にやること" }, body: [{ en: "Declutter, fix small things, brighten the lighting and refresh the kitchen and bathroom details. Then plan the styling around the photo shoot with your agent.", ja: "物を減らし、小さな不具合を直し、照明を明るくし、キッチンと浴室の細かなところを新しくします。そのうえで、不動産会社と撮影日に合わせてスタイリングを計画します。" }] },
      { heading: { en: "A note", ja: "ご注意" }, body: [{ en: "This is general design advice, not a valuation. For pricing your home, talk to a licensed agent or valuer.", ja: "これは一般的なデザインのアドバイスであり、査定ではありません。売り出し価格は、資格を持つ不動産会社や鑑定士にご相談ください。" }] },
    ],
    sources: [{ label: "DiJones: staging your house for sale", url: "https://www.dijones.com.au/library/blog/selling-property/staging-your-house-for-sale" }],
    services: ["styling-for-sale-and-rent"],
  },
  {
    slug: "buying-new-property-from-overseas",
    title: { en: "Bought a new home in Australia from overseas? Getting it ready", ja: "海外からオーストラリアの新築物件を買ったら:準備のしかた" },
    description: { en: "The basics on what overseas buyers can purchase, and how to get a new home ready to rent or live in from abroad.", ja: "海外の方が買える物件の基本と、海外から新築物件を貸せる・住める状態にする方法。" },
    date: "2026-11-27",
    sections: [
      { heading: { en: "New homes, not established ones", ja: "中古ではなく新築" }, body: [{ en: "According to the Australian Taxation Office, foreign persons are currently banned from buying established homes, with limited exceptions, and the ban has been extended to 30 June 2029. Buying a new or off-the-plan home is generally still possible with foreign investment approval. Rules change, so always check the ATO and FIRB guidance and get professional advice.", ja: "オーストラリア国税庁(ATO)によると、外国人による中古住宅の購入は現在、一部の例外を除き禁止されていて、その期間は2029年6月30日まで延長されています。新築やオフザプラン(完成前)の物件は、外国投資の許可を得れば、一般に購入できます。ルールは変わることがあるので、必ずATOやFIRBの案内を確認し、専門家に相談してください。" }] },
      { heading: { en: "From handover to ready", ja: "引き渡しから入居・賃貸まで" }, body: [{ en: "A new home is usually handed over empty. Furniture, window coverings, lighting and a few finishing touches make the difference between an empty unit and one that tenants want to live in.", ja: "新築物件は、ふつう空っぽの状態で引き渡されます。家具、カーテンやブラインド、照明、ちょっとした仕上げで、ただの空き部屋が「住みたい部屋」に変わります。" }] },
      { heading: { en: "Managing it from abroad", ja: "海外から進めるには" }, body: [{ en: "Choose one contact who can work on site, send photos at every step and speak your language. That saves trips and avoids misunderstandings.", ja: "現地で動けて、各段階で写真を送り、あなたの言葉で話せる窓口をひとつ決めましょう。移動の手間と行き違いを減らせます。" }] },
      { heading: { en: "How NAMI helps", ja: "NAMIのお手伝い" }, body: [{ en: "We furnish and style the home, arrange photos for leasing and report to you online in Japanese, Chinese or English. We don't give legal, tax or foreign investment advice; we can introduce trusted professionals.", ja: "家具の手配とスタイリング、賃貸募集用の写真までを行い、日本語・中国語・英語でオンラインでご報告します。法律・税金・外国投資のアドバイスは行いませんが、信頼できる専門家をご紹介できます。" }] },
    ],
    sources: [
      { label: "ATO: types of property a foreign person can buy", url: "https://www.ato.gov.au/individuals-and-families/investments-and-assets/foreign-investment-in-australia/types-of-property-a-foreign-person-can-buy" },
      { label: "ATO: banning foreign purchases of established dwellings", url: "https://www.ato.gov.au/about-ato/new-legislation/in-detail/international/banning-foreign-purchases-of-established-dwellings" },
    ],
    services: ["investor-turnkey-interiors"],
  },
  {
    slug: "hinoki-bath-guide",
    title: { en: "Hinoki baths: why Japanese cypress, and how to care for one", ja: "檜(ひのき)風呂:なぜ檜なのか、どうお手入れするか" },
    description: { en: "What makes hinoki special, how to plan a hinoki tub into an Australian home, and the simple care it needs.", ja: "檜の特別なところ、オーストラリアの家への取り入れ方、簡単なお手入れ。" },
    date: "2026-11-27",
    sections: [
      { heading: { en: "Why hinoki", ja: "なぜ檜なのか" }, body: [{ en: "Hinoki is a Japanese cypress with a fresh, lemony scent. Its natural oils help it resist moisture and rot, which is why it has long been used for baths and buildings in Japan. Natural compounds in the wood are often said to resist bacteria and mould, though it still needs care like any timber.", ja: "檜は、さわやかでレモンのような香りを持つ日本の木です。木に含まれる天然の油分で水や腐れに強く、日本では昔からお風呂や建物に使われてきました。木の成分には抗菌・防カビの働きがあるとよく言われますが、ほかの木と同じようにお手入れは必要です。" }] },
      { heading: { en: "Planning one in", ja: "取り入れ方" }, body: [{ en: "A hinoki tub needs good ventilation so it can dry between baths, a floor that drains well and a spot out of strong afternoon sun. It can sit in a bathroom, by a window onto a small garden, or outdoors on a shaded deck.", ja: "檜の湯船には、使うたびに乾かせる換気、水はけのよい床、強い午後の日差しを避けられる場所が必要です。浴室にも、小さな庭が見える窓辺にも、日陰のデッキにも置けます。" }] },
      { heading: { en: "Simple care", ja: "簡単なお手入れ" }, body: [{ en: "After bathing, drain the tub, rinse it, wipe it dry with a cloth and leave it to air in a well-ventilated room. Avoid harsh cleaners. If the scent fades, hinoki bath chips or a light sanding can bring it back.", ja: "入浴後はお湯を抜いて流し、布で水気を拭き取り、風通しのよい部屋で乾かします。強い洗剤は避けましょう。香りが弱くなったら、檜のチップを使ったり、軽くやすりをかけたりすると戻ります。" }] },
      { heading: { en: "Start small", ja: "小さく始める" }, body: [{ en: "Not ready for a tub? A hinoki stool, bath mat or bath chips bring the same scent into an existing bathroom.", ja: "湯船はまだ、という方は、檜の腰掛けやバスマット、チップから。今の浴室に同じ香りを取り入れられます。" }] },
      { heading: { en: "Sizes, prices and timing", ja: "サイズ・価格・納期" }, body: [{ en: "Hinoki tubs are supplied through our partner Japan Homes for projects in Australia. Sizes, prices and timing depend on the tub, so please ask us and we'll answer in detail.", ja: "檜の湯船は、パートナーのジャパンホームズを通して、オーストラリアのプロジェクト向けに手配します。サイズ、価格、納期は湯船によって変わるので、お気軽にお問い合わせください。詳しくお答えします。" }] },
    ],
    sources: [
      { label: "Jinen: hinoki care guide", url: "https://jinenstore.com/pages/hinoki-care-guide" },
      { label: "Japan Up Close: hinoki", url: "https://japanupclose.web-japan.org/tech/t20171215_2.html" },
    ],
    services: ["hinoki-baths", "bathroom-design"],
  },
  {
    slug: "opening-japanese-business-australia",
    title: { en: "Opening a Japanese restaurant, café or shop in Australia: the fit-out", ja: "日本の飲食店・カフェ・お店をオーストラリアに出すとき:内装の進め方" },
    description: { en: "From choosing a site to opening day, for Japanese brands opening their first store in Australia.", ja: "物件選びからオープンまで。オーストラリアに1号店を出す日本のブランドへ。" },
    date: "2026-11-27",
    sections: [
      { heading: { en: "A growing market", ja: "広がる市場" }, body: [{ en: "Japanese food is popular across Australia, and well-known Japanese chains continue to open here. IBISWorld estimates the Japanese restaurant industry in Australia at about $2.4 billion in 2026.", ja: "オーストラリアでは日本食の人気が高く、有名な日本のチェーンの出店も続いています。IBISWorldの推計では、オーストラリアの日本食レストラン業界の市場規模は2026年に約24億ドルです。" }] },
      { heading: { en: "Before you sign the lease", ja: "賃貸契約の前に" }, body: [{ en: "Check that the space suits your kitchen, seating and customer flow. A quick layout before signing avoids costly surprises.", ja: "厨房、席数、お客様の動線にその物件が合うかを確認しましょう。契約前の簡単なレイアウトで、高くつく想定外を防げます。" }] },
      { heading: { en: "Approvals and trades", ja: "許可と工事" }, body: [{ en: "Food businesses usually need council approvals and fit-outs that meet food safety and building rules. These are handled by licensed professionals and builders; we arrange licensed builders through Japan Homes' connections and coordinate with them.", ja: "飲食店では一般に、役所の許可と、食品衛生や建築のルールに合った内装が必要です。これらは資格を持つ専門家と施工会社が担当します。NAMIはジャパンホームズのつながりでライセンスを持つ施工会社を手配し、調整します。" }] },
      { heading: { en: "Keep your brand, fit the market", ja: "ブランドを守り、現地に合わせる" }, body: [{ en: "Keep the look your customers in Japan know, then adjust for Australian customers, climate and rules. We work in Japanese and English, and prepare 3D renders you can share with your head office.", ja: "日本のお客様が知っている雰囲気はそのままに、オーストラリアのお客様、気候、ルールに合わせて調整します。日本語と英語で進め、本社と共有できる3Dパースもご用意します。" }] },
    ],
    sources: [{ label: "IBISWorld: Japanese restaurants in Australia", url: "https://www.ibisworld.com/australia/industry/japanese-restaurants/5648/" }],
    services: ["japanese-business-fit-outs", "retail-and-cafe-design"],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
