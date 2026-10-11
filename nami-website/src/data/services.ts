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
    titleJa: "空間のご相談・ヒアリング",
    summary: "今の暮らしと、これからの暮らし。まずはお話を聞くところから。",
    image: {
      src: "/images/services/consultation.svg",
      alt: "Placeholder: a timber table by a bright window with sketches and material samples",
    },
    whatItIs:
      "ご自宅やお部屋について、今感じている悩みや理想の暮らし方をお伺いし、空間の方向性を一緒に整理するご相談です。",
    whoFor: [
      "何から始めればいいかわからない方",
      "引っ越し・模様替えを考えている方",
      "日本とオーストラリア、両方の感覚を取り入れたい方",
    ],
    included: [
      "ヒアリング（オンライン／対面）",
      "現状の空間・写真・間取りの確認",
      "暮らし方と優先順位の整理",
      "方向性についてのアドバイス",
    ],
    process: [
      { step: "Enquiry", detail: "フォームからご連絡ください。" },
      { step: "Conversation", detail: "暮らしや空間についてお話を伺います。" },
      { step: "Review", detail: "写真や間取りをもとに空間を確認します。" },
      { step: "Advice", detail: "次のステップと方向性をご提案します。" },
    ],
    deliverables: ["ヒアリングメモ", "方向性のまとめ（簡易）", "次のステップのご提案"],
  },
  {
    slug: "concept-design",
    number: "02",
    title: "Concept Design",
    titleJa: "コンセプト・素材・カラー提案",
    summary: "その人らしい空間の「軸」を、言葉と素材と色でかたちに。",
    image: {
      src: "/images/services/concept.svg",
      alt: "Placeholder: a moodboard of timber, linen, clay and ocean-blue swatches",
    },
    whatItIs:
      "暮らし方や好きなものをもとに、空間全体のコンセプトを組み立て、素材・色・雰囲気の方向性をまとめるサービスです。",
    whoFor: [
      "空間の雰囲気を統一したい方",
      "素材や色選びに迷っている方",
      "新築・リノベーションの前にイメージを固めたい方",
    ],
    included: [
      "コンセプトの言語化",
      "ムードボードの作成",
      "素材・仕上げの方向性",
      "カラーパレットの提案",
    ],
    process: [
      { step: "Listen", detail: "暮らし方、記憶、好きなものを伺います。" },
      { step: "Explore", detail: "イメージと素材のリサーチを行います。" },
      { step: "Compose", detail: "コンセプトとムードボードをまとめます。" },
      { step: "Refine", detail: "フィードバックをもとに調整します。" },
    ],
    deliverables: ["コンセプトシート", "ムードボード", "素材・カラーパレット"],
  },
  {
    slug: "space-planning",
    number: "03",
    title: "Space Planning",
    titleJa: "家具配置・空間構成",
    summary: "動線、光、余白。毎日が少し心地よくなる配置を考えます。",
    image: {
      src: "/images/services/planning.svg",
      alt: "Placeholder: a hand-drawn floor plan with furniture layout",
    },
    whatItIs:
      "既存の間取りの中で、家具の配置や空間の使い方を整理し、動線・光・余白のバランスがとれたレイアウトをご提案します。",
    whoFor: [
      "限られたスペースを有効に使いたい方",
      "家具の配置がしっくりこない方",
      "家族構成や働き方が変わった方",
    ],
    included: [
      "現状の間取りの確認",
      "家具配置プラン",
      "動線・収納の整理",
      "レイアウトの比較案",
    ],
    process: [
      { step: "Measure", detail: "間取り・寸法・写真を確認します。" },
      { step: "Study", detail: "動線と光、使い方を整理します。" },
      { step: "Plan", detail: "家具配置プランを作成します。" },
      { step: "Adjust", detail: "実際の暮らしに合わせて調整します。" },
    ],
    deliverables: ["家具配置図", "レイアウト比較案", "ポイントのまとめ"],
  },
  {
    slug: "styling",
    number: "04",
    title: "Styling",
    titleJa: "家具・小物・仕上げの提案",
    summary: "家具、器、照明、ファブリック。最後のひと手間で空間が整う。",
    image: {
      src: "/images/services/styling.svg",
      alt: "Placeholder: a timber shelf styled with ceramics, books and a linen throw",
    },
    whatItIs:
      "家具・照明・ファブリック・小物などのセレクトとスタイリングで、空間の仕上がりを整えるサービスです。",
    whoFor: [
      "ほぼ完成した空間にもう一歩の仕上げがほしい方",
      "家具や小物選びに迷っている方",
      "今あるものを生かして整えたい方",
    ],
    included: [
      "家具・照明・ファブリックのご提案",
      "小物・アートのセレクト",
      "既存アイテムの生かし方",
      "購入リストの作成",
    ],
    process: [
      { step: "Edit", detail: "今あるものを見直します。" },
      { step: "Select", detail: "家具・小物を選定します。" },
      { step: "Arrange", detail: "配置とバランスを整えます。" },
      { step: "Finish", detail: "仕上げの調整を行います。" },
    ],
    deliverables: ["スタイリング提案書", "アイテムリスト", "配置イメージ"],
  },
];
