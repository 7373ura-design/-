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
    services: ["bathroom-design", "ageing-in-place"],
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
    slug: "ageing-in-place-five-places",
    title: { en: "Ageing in place: five places to change now", ja: "エイジング・イン・プレイス:今から直しておきたい5か所" },
    description: { en: "Small changes that let you stay in the home you love, without it looking clinical.", ja: "介護っぽく見せずに、住み慣れた家に長く暮らすための小さな工夫。" },
    date: "2026-11-27",
    sections: [
      { heading: { en: "1. The entry", ja: "1. 玄関" }, body: [{ en: "A step-free path, good lighting and a bench to sit on while taking off shoes.", ja: "段差のないアプローチ、明るい照明、靴を脱ぐときに座れるベンチ。" }] },
      { heading: { en: "2. The bathroom", ja: "2. 浴室" }, body: [{ en: "A walk-in shower, a seat and blocking for grab rails. Choose warm materials so it still feels like home.", ja: "ウォークインシャワー、腰掛け、手すりの下地。温かな素材を選べば、家らしさも保てます。" }] },
      { heading: { en: "3. Lighting", ja: "3. 照明" }, body: [{ en: "Brighter, even light and soft night lights along the way to the bathroom.", ja: "明るく均一な照明と、浴室までの道を照らすやわらかな足元灯。" }] },
      { heading: { en: "4. Doors and floors", ja: "4. 扉と床" }, body: [{ en: "Wider doorways, lever handles and non-slip floors without thresholds.", ja: "広めの出入口、レバーハンドル、敷居のない滑りにくい床。" }] },
      { heading: { en: "5. Storage", ja: "5. 収納" }, body: [{ en: "Everyday things between hip and shoulder height, so there's no climbing or bending.", ja: "よく使うものは腰から肩の高さに。踏み台やかがむ動作を減らします。" }] },
    ],
    services: ["ageing-in-place", "bathroom-design"],
  },
  {
    slug: "granny-flat-rules-nsw",
    title: { en: "Granny flats in NSW: the basics", ja: "NSW州のグラニーフラット:基本のルール" },
    description: { en: "Size, approvals and design tips for a secondary dwelling in NSW.", ja: "NSW州の離れ(セカンダリードゥエリング)の広さ、許可、デザインのコツ。" },
    date: "2026-11-27",
    sections: [
      {
        heading: { en: "What counts as a granny flat", ja: "グラニーフラットとは" },
        body: [{ en: "In NSW a granny flat is called a secondary dwelling: a self-contained home on the same lot as the main house. It generally can't be subdivided and sold separately.", ja: "NSW州では、グラニーフラットはセカンダリードゥエリングと呼ばれ、母屋と同じ敷地にある、独立して暮らせる住まいです。一般に、分筆して別に売ることはできません。" }],
      },
      {
        heading: { en: "Size and approvals", ja: "広さと許可" },
        body: [{ en: "Under the state rules, a secondary dwelling is generally limited to 60 m² of floor area, and may be approved as complying development if it meets the standards, or through a development application to council. Rules depend on your lot, so check the NSW Planning Portal or your council early.", ja: "州のルールでは、セカンダリードゥエリングの床面積は一般に60㎡までです。基準を満たせばコンプライング・デベロップメント(簡易な許可)、満たさなければ役所への開発申請(DA)になります。敷地によって条件が変わるので、早めにNSW Planning Portalや役所で確認しましょう。" }],
      },
      {
        heading: { en: "Design so it lives larger", ja: "広く暮らせるデザインに" },
        body: [{ en: "High ceilings, big windows, built-in storage and a deck that extends the living room make a small home feel generous.", ja: "高めの天井、大きな窓、造り付けの収納、リビングを広げるデッキで、小さな家もゆったり感じられます。" }],
      },
    ],
    sources: [{ label: "NSW Planning Portal", url: "https://www.planningportal.nsw.gov.au/" }],
    services: ["granny-flats", "styling-for-sale-and-rent"],
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
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
