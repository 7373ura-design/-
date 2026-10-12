import type { Service } from "@/lib/types";

/**
 * Services currently offered. Scope is provisional and will be confirmed after
 * the first real project review. Future services (Interior Design, Residential
 * Design, Renovation, Drafting, Architecture) can be appended to this array —
 * only offer regulated services where appropriately qualified and permitted.
 */
export const services: Service[] = [
  {
    slug: "interior-consultation",
    number: "01",
    title: "Interior Consultation",
    sub: { ja: "空間のご相談・ヒアリング", en: "Talking through your space and needs" },
    summary: {
      ja: "今の暮らしと、これからの暮らし。まずはお話を聞くところから。",
      en: "How you live now, and how you would like to live. It all starts with a conversation.",
    },
    idea: { term: "間取り — MADORI", text: { ja: "日本語で間取りは「間（ま）をどう取るか」。部屋の大きさより先に、暮らしの流れと、その間にある余白を一緒に考えます。", en: "The Japanese word for a floor plan, madori, means “taking ma”: deciding how the spaces between will work. Before room sizes, we look at the flow of your day and the space around it." } },
    image: { src: "/images/services/s1.jpg", alt: "Hands sketching a floor plan at a timber table beside a cup of tea" },
    whatItIs: {
      ja: "ご自宅やお部屋について、今感じている悩みや理想の暮らし方をお伺いし、空間の方向性を一緒に整理するご相談です。",
      en: "A consultation where we listen to what is and isn’t working in your home, talk about how you would like to live, and work out a clear direction together.",
    },
    whoFor: {
      ja: [
        "何から始めればいいかわからない方",
        "引っ越し・模様替えを考えている方",
        "日本とオーストラリア、両方の感覚を取り入れたい方",
      ],
      en: [
        "Anyone unsure where to start",
        "People moving house or refreshing a room",
        "Anyone who would like a mix of Japanese and Australian ideas",
      ],
    },
    included: {
      ja: ["ヒアリング（オンライン／対面）", "現状の空間・写真・間取りの確認", "暮らし方と優先順位の整理", "方向性についてのアドバイス"],
      en: [
        "A conversation, online or in person",
        "A look at your space, photos and floor plan",
        "Sorting out how you live and what matters most",
        "Advice on the direction to take",
      ],
    },
    process: [
      { step: "Enquiry", detail: { ja: "フォームからご連絡ください。", en: "Get in touch through the form." } },
      { step: "Conversation", detail: { ja: "暮らしや空間についてお話を伺います。", en: "We talk about your home and how you live." } },
      { step: "Review", detail: { ja: "写真や間取りをもとに空間を確認します。", en: "We review your space from photos and plans." } },
      { step: "Advice", detail: { ja: "次のステップと方向性をご提案します。", en: "We suggest a direction and next steps." } },
    ],
    deliverables: {
      ja: ["ヒアリングメモ", "方向性のまとめ（簡易）", "次のステップのご提案"],
      en: ["Consultation notes", "A short summary of the direction", "Suggested next steps"],
    },
  },
  {
    slug: "concept-design",
    number: "02",
    title: "Concept Design",
    sub: { ja: "コンセプト・素材・カラー提案", en: "Concept, materials and colour" },
    summary: {
      ja: "その人らしい空間の「軸」を、言葉と素材と色でかたちに。",
      en: "We give your space a clear idea at its heart, expressed through words, materials and colour.",
    },
    idea: { term: "経年変化 — AGEING WELL", text: { ja: "時間とともに深まる素材を選ぶこと。木、漆喰、和紙、リネン。傷や色の変化も、暮らしの記録として楽しめる素材を提案します。", en: "Choosing materials that get better with age: timber, lime plaster, paper, linen. We suggest materials whose marks and changes become a record of life lived." } },
    image: { src: "/images/services/s2.jpg", alt: "A moodboard of fabric, paper and indigo samples laid out on a table" },
    whatItIs: {
      ja: "暮らし方や好きなものをもとに、空間全体のコンセプトを組み立て、素材・色・雰囲気の方向性をまとめるサービスです。",
      en: "Drawing on how you live and what you love, we build a concept for the whole space and set out the direction for materials, colour and mood.",
    },
    whoFor: {
      ja: ["空間の雰囲気を統一したい方", "素材や色選びに迷っている方", "新築・リノベーションの前にイメージを固めたい方"],
      en: [
        "Anyone who wants their home to feel consistent",
        "People struggling to choose materials or colours",
        "Anyone planning a new build or renovation who wants a clear picture first",
      ],
    },
    included: {
      ja: ["コンセプトの言語化", "ムードボードの作成", "素材・仕上げの方向性", "カラーパレットの提案"],
      en: ["A written concept", "A moodboard", "Direction for materials and finishes", "A colour palette"],
    },
    process: [
      { step: "Listen", detail: { ja: "暮らし方、記憶、好きなものを伺います。", en: "We hear about your life, memories and favourite things." } },
      { step: "Explore", detail: { ja: "イメージと素材のリサーチを行います。", en: "We research images and materials." } },
      { step: "Compose", detail: { ja: "コンセプトとムードボードをまとめます。", en: "We put together the concept and moodboard." } },
      { step: "Refine", detail: { ja: "フィードバックをもとに調整します。", en: "We refine it with your feedback." } },
    ],
    deliverables: {
      ja: ["コンセプトシート", "ムードボード", "素材・カラーパレット"],
      en: ["Concept sheet", "Moodboard", "Material and colour palette"],
    },
  },
  {
    slug: "space-planning",
    number: "03",
    title: "Space Planning",
    sub: { ja: "家具配置・空間構成", en: "Furniture layout and flow" },
    summary: {
      ja: "動線、光、余白。毎日が少し心地よくなる配置を考えます。",
      en: "Movement, light and breathing room: a layout that makes every day a little easier.",
    },
    idea: { term: "3尺 — THE 910 MM MODULE", text: { ja: "日本の家は約910mmの単位で計画されます。通路の幅、収納の奥行き、家具の大きさをひとつの物差しでそろえると、空間に落ち着いたリズムが生まれます。", en: "Japanese homes are planned on a module of about 910 mm. When walkway widths, storage depths and furniture sizes follow one measure, a calm rhythm runs through the space." } },
    image: { src: "/images/services/s3.jpg", alt: "A floor plan on a tablet next to a laptop" },
    whatItIs: {
      ja: "既存の間取りの中で、家具の配置や空間の使い方を整理し、動線・光・余白のバランスがとれたレイアウトをご提案します。",
      en: "Working within your existing floor plan, we rethink furniture placement and how each area is used, and propose a layout that balances movement, light and space.",
    },
    whoFor: {
      ja: ["限られたスペースを有効に使いたい方", "家具の配置がしっくりこない方", "家族構成や働き方が変わった方"],
      en: [
        "Anyone wanting to make the most of a small space",
        "People whose furniture never feels quite right",
        "Households whose family or working life has changed",
      ],
    },
    included: {
      ja: ["現状の間取りの確認", "家具配置プラン", "動線・収納の整理", "レイアウトの比較案"],
      en: ["A review of your current layout", "A furniture plan", "Better flow and storage", "Alternative layouts to compare"],
    },
    process: [
      { step: "Measure", detail: { ja: "間取り・寸法・写真を確認します。", en: "We check plans, measurements and photos." } },
      { step: "Study", detail: { ja: "動線と光、使い方を整理します。", en: "We study movement, light and use." } },
      { step: "Plan", detail: { ja: "家具配置プランを作成します。", en: "We draw up the furniture plan." } },
      { step: "Adjust", detail: { ja: "実際の暮らしに合わせて調整します。", en: "We adjust it to fit real life." } },
    ],
    deliverables: {
      ja: ["家具配置図", "レイアウト比較案", "ポイントのまとめ"],
      en: ["Furniture layout plan", "Alternative layouts", "Summary of key points"],
    },
  },
  {
    slug: "styling",
    number: "04",
    title: "Styling",
    sub: { ja: "家具・小物・仕上げの提案", en: "Furniture, objects and finishing touches" },
    summary: {
      ja: "家具、器、照明、ファブリック。最後のひと手間で空間が整う。",
      en: "Furniture, ceramics, lighting and textiles: the final touches that bring a space together.",
    },
    idea: { term: "床の間 — TOKONOMA", text: { ja: "床の間には、季節に合わせてひとつだけを飾ります。たくさん並べるより、選んだひとつと、その周りの余白を大切にするスタイリングです。", en: "A tokonoma alcove displays one thing at a time, changed with the seasons. Our styling favours one well-chosen piece, and the space around it, over many." } },
    image: { src: "/images/services/s4.jpg", alt: "Curved timber shelves styled with plants and ceramics" },
    whatItIs: {
      ja: "家具・照明・ファブリック・小物などのセレクトとスタイリングで、空間の仕上がりを整えるサービスです。",
      en: "We select and style furniture, lighting, textiles and objects to finish your space.",
    },
    whoFor: {
      ja: ["ほぼ完成した空間にもう一歩の仕上げがほしい方", "家具や小物選びに迷っている方", "今あるものを生かして整えたい方"],
      en: [
        "Anyone whose space is nearly there but needs finishing",
        "People unsure which furniture or objects to choose",
        "Anyone who would like to make the most of what they already own",
      ],
    },
    included: {
      ja: ["家具・照明・ファブリックのご提案", "小物・アートのセレクト", "既存アイテムの生かし方", "購入リストの作成"],
      en: [
        "Furniture, lighting and textile suggestions",
        "A selection of objects and art",
        "Ideas for using what you already have",
        "A shopping list",
      ],
    },
    process: [
      { step: "Edit", detail: { ja: "今あるものを見直します。", en: "We look again at what you have." } },
      { step: "Select", detail: { ja: "家具・小物を選定します。", en: "We choose furniture and objects." } },
      { step: "Arrange", detail: { ja: "配置とバランスを整えます。", en: "We arrange everything in balance." } },
      { step: "Finish", detail: { ja: "仕上げの調整を行います。", en: "We make the final adjustments." } },
    ],
    deliverables: {
      ja: ["スタイリング提案書", "アイテムリスト", "配置イメージ"],
      en: ["Styling proposal", "Item list", "Layout images"],
    },
  },
];
