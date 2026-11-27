import type { Bi } from "@/lib/i18n";

/**
 * Who NAMI is, from the three pinned Instagram posts in Canva:
 * ① "Why choose NAMI?"  ② "What we believe."  ③ "How we work."
 * Keep the wording in step with those posts.
 */

type Point = { title: Bi; line: Bi };

/** ① Why choose NAMI? */
export const whyChoose: { title: Bi; body: Bi }[] = [
  {
    title: { en: "It doesn't end with the design.", ja: "デザインで、終わりじゃない。" },
    body: {
      en: "A plan is only the start. We stay with you from the first chat to finding your builder, until the build begins. One contact, so nothing falls through the gaps.",
      ja: "図面は始まりにすぎません。最初のおしゃべりから施工会社探し、工事が始まるまで、ずっと一緒に進みます。窓口はひとつ。だから、こぼれ落ちることがありません。",
    },
  },
  {
    title: { en: "A home is finished by living in it.", ja: "家は、暮らして完成する。" },
    body: {
      en: "Children grow, needs change, and a room that once worked stops working. We don't disappear after the design. Whenever something comes up, you can still come back and talk to us.",
      ja: "子どもは育ち、暮らしは変わり、ちょうどよかった部屋が合わなくなることもあります。デザインのあとも、私たちはいなくなりません。何かあれば、いつでもまた相談してください。",
    },
  },
  {
    title: { en: "Born and raised in Japan.", ja: "日本生まれ、日本育ち。" },
    body: {
      en: "NAMI was founded by a qualified interior designer with a background in architecture and real estate. So every design starts with what your home really needs: how you'll live in it, and what it's worth. We grew up with Japanese design: how light enters a room, how materials age, how a home stays calm. Now we bring that everyday wisdom into Australian homes.",
      ja: "NAMIは、建築と不動産のバックグラウンドを持つ、資格のあるインテリアデザイナーが立ち上げました。だから、どのデザインも「その家に本当に必要なこと」から始まります。どう暮らすか、そしてその家の価値。光の入り方、素材の年の取り方、家が落ち着いている理由。日本のデザインとともに育った私たちが、その暮らしの知恵をオーストラリアの家に届けます。",
    },
  },
  {
    title: { en: "Backed by Japan Homes.", ja: "ジャパンホームズのバックアップ。" },
    body: {
      en: "20+ years of trusted connections: builders and trades we know and trust. Proven building craftsmanship across Australia and New Zealand. High-quality materials and trades, so the finished home matches the design.",
      ja: "20年以上の信頼のつながり。よく知る、信頼できる施工会社と職人たち。オーストラリアとニュージーランドで積み重ねた確かな施工技術。質の高い素材と職人で、デザイン通りの仕上がりに。",
    },
  },
];

/** ② What we believe. */
export const beliefs: { key: string; title: Bi; body: Bi; points?: Point[]; note?: Bi }[] = [
  {
    key: "more-than-a-look",
    title: { en: "Beautiful isn't enough.", ja: "美しいだけでは、足りない。" },
    body: {
      en: "Japanese design is often loved for how it looks. In Japan, it was simply how people lived: calm, practical and made to last. We design for how your home works every day, not only how it looks.",
      ja: "日本のデザインは、見た目で愛されることが多いです。でも日本では、それはただの暮らし方でした。落ち着いていて、実用的で、長く使えるもの。私たちは、見た目だけでなく、毎日の家の使いやすさをデザインします。",
    },
  },
  {
    key: "everyday-worries",
    title: { en: "Everyday worries, made lighter.", ja: "毎日の悩みを、軽く。" },
    body: { en: "Small worries add up. We start there.", ja: "小さな悩みは、積み重なります。私たちは、そこから始めます。" },
    points: [
      { title: { en: "Not enough storage?", ja: "収納が足りない?" }, line: { en: "A place for everything, so rooms stay clear.", ja: "すべてに居場所をつくり、部屋をすっきりと。" } },
      { title: { en: "Too dark, or too hot?", ja: "暗すぎる、暑すぎる?" }, line: { en: "Light and shade, planned for the Australian sun.", ja: "オーストラリアの日差しに合わせて、光と影を計画します。" } },
      { title: { en: "Hard to keep tidy?", ja: "片付けにくい?" }, line: { en: "Fewer things and easy-care surfaces.", ja: "物を減らし、手入れのしやすい素材に。" } },
      { title: { en: "Too many choices?", ja: "選択肢が多すぎる?" }, line: { en: "A few materials that work together.", ja: "相性のいい、少しの素材に絞ります。" } },
    ],
  },
  {
    key: "safe-for-years-ahead",
    title: { en: "Safe and easy, for years ahead.", ja: "これからも、安全で暮らしやすく。" },
    body: {
      en: "Step-free entries, walk-in showers, wider doorways and good lighting. Planned now, so you can stay in the home you love. Beautiful, not clinical.",
      ja: "段差のない入口、ウォークインシャワー、広い出入口、明るい照明。今から計画しておけば、住み慣れた家に長く暮らせます。介護っぽくなく、美しく。",
    },
  },
  {
    key: "made-to-last",
    title: { en: "Made to last.", ja: "長く使えるものを。" },
    body: {
      en: "Fewer things, and better ones. Natural materials like timber and stone look better with time, and can be repaired instead of replaced. Less waste, and a home that keeps its quality.",
      ja: "少なく、良いものを。木や石などの自然素材は年月とともに味わいが増し、取り替えずに直して使えます。ごみが減り、家の質も保たれます。",
    },
  },
  {
    key: "property-value",
    title: { en: "With property value in mind.", ja: "住まいの価値まで考えて。" },
    body: {
      en: "Whether you stay for decades or sell in a few years, we focus on the places buyers notice.",
      ja: "何十年も住み続ける方にも、数年後に売る方にも。買い手が目を留める場所に力を入れます。",
    },
    points: [
      { title: { en: "Kitchens and bathrooms", ja: "キッチンと浴室" }, line: { en: "The rooms buyers look at most closely.", ja: "買い手が最もよく見る場所。" } },
      { title: { en: "Light and flow", ja: "光と動線" }, line: { en: "Brighter rooms that feel larger.", ja: "明るく、広く感じる部屋に。" } },
      { title: { en: "Built-in storage", ja: "造り付けの収納" }, line: { en: "Calm rooms, always in demand.", ja: "すっきりした部屋は、いつも求められます。" } },
    ],
    note: { en: "General design advice, not a valuation.", ja: "一般的なデザインのアドバイスであり、査定ではありません。" },
  },
  {
    key: "any-style",
    title: { en: "Any style you love.", ja: "お好きなスタイルで。" },
    body: {
      en: "Japandi, modern or something in between. You don't need to love Japanese style to work with us. We start with how you live and what you like, and design around that.",
      ja: "ジャパンディでも、モダンでも、その間でも。和風が好きでなくても大丈夫です。暮らし方とお好みから始めて、それに合わせてデザインします。",
    },
  },
];

/** ③ How we work: wherever you are, worry → how we help. */
export const journey: { key: string; title: Bi; items: { worry: Bi; help: Bi }[] }[] = [
  {
    key: "before-you-buy",
    title: { en: "Before you buy", ja: "家を買う前" },
    items: [
      { worry: { en: "Can I afford a home?", ja: "家を買えるかな?" }, help: { en: "We introduce a trusted mortgage broker.", ja: "信頼できる住宅ローンのブローカーをご紹介します。" } },
      { worry: { en: "Where do I start looking?", ja: "どこから探せばいい?" }, help: { en: "We introduce a trusted real estate agent.", ja: "信頼できる不動産会社をご紹介します。" } },
      { worry: { en: "Will this house suit us?", ja: "この家、私たちに合う?" }, help: { en: "We look at the layout and light with you.", ja: "間取りと光を、一緒に確認します。" } },
    ],
  },
  {
    key: "just-bought",
    title: { en: "Just bought", ja: "買ったばかり" },
    items: [
      { worry: { en: "What should we change first?", ja: "まず何を変えるべき?" }, help: { en: "We help you set priorities.", ja: "優先順位を一緒に決めます。" } },
      { worry: { en: "Renovate now, or later?", ja: "リノベは今?あとで?" }, help: { en: "We plan it in stages.", ja: "段階的に計画します。" } },
      { worry: { en: "Will our furniture fit?", ja: "今の家具は合う?" }, help: { en: "We design around what you have.", ja: "今お持ちのものに合わせてデザインします。" } },
    ],
  },
  {
    key: "budget",
    title: { en: "Budget", ja: "予算" },
    items: [
      { worry: { en: "Isn't design expensive?", ja: "デザインって高いのでは?" }, help: { en: "Start with one room. The first consultation is free.", ja: "1部屋からでも。最初のご相談は無料です。" } },
      { worry: { en: "We don't have the funds yet.", ja: "まだ資金がない。" }, help: { en: "We introduce a mortgage broker.", ja: "住宅ローンのブローカーをご紹介します。" } },
      { worry: { en: "Are there rebates?", ja: "補助金はある?" }, help: { en: "We point you to ones that may suit your home.", ja: "住まいに合いそうな制度をお伝えします。" } },
    ],
  },
  {
    key: "design",
    title: { en: "Design", ja: "デザイン" },
    items: [
      { worry: { en: "I can't picture it.", ja: "完成が想像できない。" }, help: { en: "Concept design, mood boards and layouts.", ja: "コンセプト、ムードボード、レイアウトで見えるように。" } },
      { worry: { en: "Too many choices.", ja: "選択肢が多すぎる。" }, help: { en: "A few materials that work together.", ja: "相性のいい、少しの素材に絞ります。" } },
      { worry: { en: "Will it still feel like us?", ja: "自分たちらしさは残る?" }, help: { en: "We refine it together.", ja: "一緒に整えていきます。" } },
    ],
  },
  {
    key: "build",
    title: { en: "Build", ja: "工事" },
    items: [
      { worry: { en: "Who will build it?", ja: "誰が工事するの?" }, help: { en: "We find licensed builders.", ja: "ライセンスを持つ施工会社を探します。" } },
      { worry: { en: "Are the quotes fair?", ja: "見積もりは適正?" }, help: { en: "We arrange and compare quotes.", ja: "見積もりを手配して、比べます。" } },
      { worry: { en: "Will it match the design?", ja: "デザイン通りになる?" }, help: { en: "We stay with you until the build begins.", ja: "工事が始まるまで、ずっと一緒に。" } },
    ],
  },
  {
    key: "after-you-move-in",
    title: { en: "After you move in", ja: "住み始めてから" },
    items: [
      { worry: { en: "It doesn't feel finished.", ja: "なんだか完成した感じがしない。" }, help: { en: "Furniture, lighting and styling.", ja: "家具、照明、スタイリングで仕上げます。" } },
      { worry: { en: "Each room feels different.", ja: "部屋ごとにバラバラ。" }, help: { en: "We tie the rooms together with colour and materials.", ja: "色と素材で、部屋どうしをつなげます。" } },
      { worry: { en: "Not enough storage.", ja: "収納が足りない。" }, help: { en: "Storage ideas that fit your life.", ja: "暮らしに合う収納のアイデアを。" } },
      { worry: { en: "Little things bother us.", ja: "小さなことが気になる。" }, help: { en: "Small, practical tips, one at a time.", ja: "小さく実用的なアドバイスを、ひとつずつ。" } },
      { worry: { en: "We don't know what tableware or small things to buy.", ja: "器や小物まで手が回らない。" }, help: { en: "We help you choose them, so everything feels like one home.", ja: "家全体がまとまるように、一緒に選びます。" } },
      { worry: { en: "Moving day feels overwhelming.", ja: "引っ越しが大変。" }, help: { en: "We plan where everything goes, arrange trusted movers and help you settle in.", ja: "何をどこに置くかを計画し、信頼できる引っ越し業者を手配して、住み始めまでお手伝いします。" } },
    ],
  },
];

/** ③ Kind words. Initials and place only, as in the post. */
export const kindWords: { quote: Bi; who: string; place: Bi; group: "homes" | "commercial" }[] = [
  {
    group: "commercial",
    who: "G.B.",
    place: { en: "Sydney", ja: "シドニー" },
    quote: {
      en: "Even before signing the lease, she quickly put together a design that helped me picture the space and make my decision. Seeing it, I decided to go ahead with my business.",
      ja: "賃貸契約にサインする前から、すぐにデザインをまとめてくれて、空間を想像して決断することができました。それを見て、事業を進めることに決めました。",
    },
  },
  {
    group: "commercial",
    who: "J.M.",
    place: { en: "New Zealand", ja: "ニュージーランド" },
    quote: {
      en: "She even thought about how customers would move through the shop. I can't wait to open the doors.",
      ja: "お客様がお店の中をどう動くかまで考えてくれました。オープンが待ちきれません。",
    },
  },
  {
    group: "homes",
    who: "E.B.",
    place: { en: "Sydney", ja: "シドニー" },
    quote: {
      en: "She understood our ideas better than we did, and I could talk to her about anything, even small worries. She was upfront about all the costs from the very start. It was the best.",
      ja: "私たち以上に私たちの考えを理解してくれて、小さな悩みまで何でも話せました。最初から費用のことをすべて正直に話してくれました。最高でした。",
    },
  },
  {
    group: "homes",
    who: "R.T.",
    place: { en: "Japan", ja: "日本" },
    quote: {
      en: "She turned my vague ideas into a real plan, while keeping the feel of the space we already had.",
      ja: "ぼんやりしたイメージを、今の空間の雰囲気を残しながら、本当のプランにしてくれました。",
    },
  },
  {
    group: "homes",
    who: "M.J.",
    place: { en: "Melbourne", ja: "メルボルン" },
    quote: {
      en: "She always replied quickly, kept our budget in mind at every step, and designed for our future, not just for now.",
      ja: "いつもすぐに返信をくれて、どの段階でも予算を気にかけてくれて、今だけでなく私たちの将来のためにデザインしてくれました。",
    },
  },
  {
    group: "homes",
    who: "D.W.",
    place: { en: "Melbourne", ja: "メルボルン" },
    quote: {
      en: "Not having to search for anyone myself made everything so easy. I compared others, and she was the best.",
      ja: "自分で誰かを探さなくてよかったので、すべてがとても楽でした。ほかとも比べましたが、彼女が一番でした。",
    },
  },
  {
    group: "homes",
    who: "A.B.",
    place: { en: "Sydney", ja: "シドニー" },
    quote: {
      en: "She helped us spend where it really mattered. That was such a help.",
      ja: "本当に大事なところにお金をかけられるよう手伝ってくれました。とても助かりました。",
    },
  },
  {
    group: "homes",
    who: "S.T.",
    place: { en: "Sydney", ja: "シドニー" },
    quote: {
      en: "She still checks in with us. It was the best decision we made for our home.",
      ja: "今でも様子を気にかけてくれます。家のために私たちがした、一番いい決断でした。",
    },
  },
];

/** The founder's story (no name or photo on the site, by choice). */
export const story: { title: Bi; body: Bi }[] = [
  {
    title: { en: "It started with my grandfather.", ja: "始まりは、祖父でした。" },
    body: {
      en: "My grandfather was a first-class registered architect in Japan. Growing up around his drawings and the houses he built, I learned early that a home is more than a building: it is where a family's life and memories are kept. That is where my interest in design began.",
      ja: "祖父は、日本の一級建築士でした。祖父の図面や、祖父が建てた家に囲まれて育ち、家は建物以上のもの、家族の暮らしと記憶をしまっておく場所なのだと、早くから感じていました。デザインへの興味は、そこから始まりました。",
    },
  },
  {
    title: { en: "Design shouldn't stop at the drawing.", ja: "デザインは、図面で終わらない。" },
    body: {
      en: "Designers often design, and stop there. But clients still have to find a builder, manage a budget, live in the home and, one day, perhaps sell it. Meeting Japan Homes showed me how much better it is when design, building and the years after are thought through together. NAMI was started to do exactly that.",
      ja: "デザイナーは、デザインをしたらそこで終わることが多いです。でもお客様には、施工会社探し、予算の管理、そこでの暮らし、いつかの売却まで続きがあります。ジャパンホームズとの出会いで、デザインから家づくり、その後の年月までを一緒に考えることの大切さを知りました。NAMIは、それをするために始めました。",
    },
  },
  {
    title: { en: "Not a trend. Something worth keeping.", ja: "流行ではなく、残したいものを。" },
    body: {
      en: "Japanese design is popular around the world right now. But for me it isn't a trend: it's how I grew up. Taking off your shoes at the door, letting in soft morning light, keeping fewer, better things. As someone from Japan, I want to share what is genuinely good about it, in whatever style suits your home.",
      ja: "今、日本のデザインは世界中で人気です。でも私にとっては流行ではなく、育ってきた暮らしそのものです。玄関で靴を脱ぐこと、やわらかな朝の光を入れること、少なく良いものを大切にすること。日本人として、本当にいいと思うところを、あなたの家に合うスタイルで伝えたいと思っています。",
    },
  },
  {
    title: { en: "A new wave.", ja: "新しい波を。" },
    body: {
      en: "NAMI means \"wave\" in Japanese, and our name stands for Nest And Memories Inside. Like a wave, we want to bring something fresh to Australian homes, and to keep coming back, for as long as you live there.",
      ja: "NAMIは日本語の「波」。名前には Nest And Memories Inside(巣と記憶が、内に)という意味も込めています。波のように、オーストラリアの住まいに新しい風を届け、そこに暮らすかぎり何度でも戻ってくる存在でありたいと思っています。",
    },
  },
];

/** Qualifications, as in ① Why choose NAMI? (plus residential drafting). */
export const qualifications: Point[] = [
  { title: { en: "Interior Design & Property Styling", ja: "インテリアデザイン&プロパティスタイリング" }, line: { en: "Layouts, colours, materials and styling.", ja: "レイアウト、色、素材、スタイリング。" } },
  { title: { en: "Japanese Garden Design", ja: "日本庭園デザイン" }, line: { en: "Gardens that connect with the rooms inside.", ja: "室内とつながる庭を。" } },
  { title: { en: "Contemporary Japanese Architecture", ja: "現代日本建築" }, line: { en: "The University of Tokyo.", ja: "東京大学。" } },
  { title: { en: "Residential Drafting (Certificate IV)", ja: "住宅製図(Certificate IV)" }, line: { en: "Australian residential drafting.", ja: "オーストラリアの住宅製図。" } },
  { title: { en: "NSW Real Estate Registration", ja: "NSW州 不動産資格" }, line: { en: "Design with your property's value in mind.", ja: "住まいの価値まで考えたデザインを。" } },
  { title: { en: "Licensed Real Estate Agent, Japan", ja: "宅地建物取引士(日本)" }, line: { en: "宅地建物取引士, Japan's national licence.", ja: "日本の国家資格。" } },
];

/** Numbers. DRAFT: Japan Homes figures to be confirmed with Japan Homes before launch. */
export const numbers: { value: string; label: Bi; note?: Bi }[] = [
  { value: "3", label: { en: "Countries we have worked in: Australia, New Zealand and Japan", ja: "対応してきた国:オーストラリア・ニュージーランド・日本" } },
  { value: "20+", label: { en: "Years of trusted connections through Japan Homes", ja: "ジャパンホームズとの信頼のつながり(年)" } },
  { value: "1,000+", label: { en: "Clients served by our partner Japan Homes since 2008", ja: "パートナー、ジャパンホームズのお客様(2008年から)" } },
  { value: "200+", label: { en: "Checklist items at each stage in Japan Homes' quality system", ja: "ジャパンホームズの品質管理で、工程ごとに確認する項目" } },
];

/** After the design: help that comes with every service, not a separate business. */
export const afterCare = {
  title: { en: "Even after\nyou move in.", ja: "住み始めてからも、\nずっと。" },
  body: {
    en: "Finding your builder is part of every project, and so is what comes after. Once you live in the home, small worries appear. We're still here to help, even with things that aren't strictly design.",
    ja: "施工会社探しはどのご依頼にも含まれています。そして、その先も。住み始めると、小さな困りごとが出てきます。デザインの分野ではないことも含めて、その後もお手伝いします。",
  },
  points: [
    { title: { en: "Storage", ja: "収納" }, line: { en: "Storage that fits your life, and help putting things away", ja: "暮らしに合う収納と、片付けのお手伝い" } },
    { title: { en: "Tableware and small things", ja: "器と小物" }, line: { en: "Plates, cups, linen and the little things you might not choose yourself", ja: "皿、カップ、リネンなど、自分ではなかなか選ばない小物まで" } },
    { title: { en: "Moving day", ja: "引っ越し" }, line: { en: "Planning where everything goes, arranging trusted movers and helping you settle in", ja: "何をどこに置くかの計画、信頼できる引っ越し業者の手配、住み始めのお手伝い" } },
    { title: { en: "When life changes", ja: "暮らしが変わったら" }, line: { en: "Children grow and needs change: come back and talk to us any time", ja: "子どもの成長や暮らしの変化に合わせて、いつでもご相談を" } },
  ],
};

/** After the design, for shops and offices: same help, business version. */
export const afterCareWorks = {
  title: { en: "Even after\nyou open.", ja: "オープンしてからも、\nずっと。" },
  body: {
    en: "Opening day is not the end. Once you start working in the space, small problems appear. We're still here to help, even with things that aren't strictly design.",
    ja: "オープンして終わりではありません。実際に使い始めると、小さな困りごとが出てきます。デザインの分野ではないことも含めて、その後もお手伝いします。",
  },
  points: [
    { title: { en: "Storage", ja: "収納" }, line: { en: "Back-of-house, stock and document storage that keeps the space tidy", ja: "バックヤード、在庫、書類まで、すっきり保てる収納" } },
    { title: { en: "Tableware and small things", ja: "器と小物" }, line: { en: "Tableware for cafes and restaurants, display props, plants and the small things that finish a space", ja: "カフェや飲食店の器、ディスプレイの小物、グリーンなど、空間を仕上げる細かなものまで" } },
    { title: { en: "Moving and opening", ja: "移転・オープン準備" }, line: { en: "Planning where everything goes, arranging trusted movers and getting ready for opening day", ja: "何をどこに置くかの計画、信頼できる引っ越し業者の手配、オープン当日までの準備" } },
    { title: { en: "When business changes", ja: "事業が変わったら" }, line: { en: "More staff, a new menu or a seasonal refresh: come back and talk to us any time", ja: "スタッフが増えた、メニューが変わった、季節の模様替えなど、いつでもご相談を" } },
  ],
};
