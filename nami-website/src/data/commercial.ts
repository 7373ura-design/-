import type { Bi } from "@/lib/i18n";
import type { Faq } from "@/data/faq";
import type { Item } from "@/data/homes";

/**
 * Shops and offices, from "NAMI 事業の進め方（案）" (23 Nov 2026).
 * NAMI designs; building work is done by Japan Homes under its licence and
 * contracted directly with the client. NAMI never calls itself an architect,
 * never takes on or manages building work, gives no loan advice and makes no
 * promises about savings.
 */

export const commercialHero = {
  kicker: "OFFICE & SHOP INTERIOR DESIGN, SYDNEY",
  title: { en: "Japandi Design\nfor Offices and Shops", ja: "日本の美意識を、\nお店とオフィスに。" },
  body: {
    en: "We design offices, clinics, schools, shops and cafés in Sydney. The design proposal, up to 3D renders and a budget estimate, is free, and the fit-out is built by our licensed partner, Japan Homes.",
    ja: "シドニーで、オフィス、クリニック、教室、お店、カフェをデザインしています。3Dパースと概算予算までのデザイン提案は無料。工事はライセンスを持つパートナー、ジャパンホームズが行います。",
  },
};

/** What the free design proposal includes. */
export const freeProposal: Item[] = [
  { title: { en: "Briefing and measure-up", ja: "ヒアリング・採寸" }, line: { en: "We visit, listen to how your team or customers use the space, and measure up", ja: "現地にうかがい、使い方をお聞きして採寸します" } },
  { title: { en: "Layout options", ja: "レイアウト案" }, line: { en: "Two to three layout options to compare", ja: "比べられるよう、2〜3案をご用意" } },
  { title: { en: "Mood board and material board", ja: "ムードボード・素材ボード" }, line: { en: "The look, colours and finishes in one place", ja: "雰囲気、色、仕上げを一目で" } },
  { title: { en: "3D renders", ja: "3Dパース" }, line: { en: "Three to five images so you can see the space before it is built", ja: "完成前に空間がわかる3〜5枚のイメージ" } },
  { title: { en: "Furniture list", ja: "家具リスト" }, line: { en: "Furniture and fittings chosen for the design", ja: "デザインに合わせた家具・備品の一覧" } },
  { title: { en: "Budget estimate and building quote", ja: "概算予算と工事の見積もり" }, line: { en: "An estimate, plus a quote for the building work from Japan Homes", ja: "概算予算と、ジャパンホームズによる工事の見積もり" } },
];

export const sectors: Item[] = [
  { title: { en: "Offices", ja: "オフィス" }, line: { en: "Real estate agencies, accounting and law firms, migration agents and IT companies", ja: "不動産会社、会計事務所、法律事務所、移民エージェント、IT企業など" } },
  { title: { en: "Clinics", ja: "クリニック" }, line: { en: "Dental and medical practices, including a second or third location", ja: "歯科・医療クリニック。2院目、3院目の開院にも" } },
  { title: { en: "Schools", ja: "教室" }, line: { en: "Tutoring colleges and language schools", ja: "塾や語学学校" } },
  { title: { en: "Shops and cafés", ja: "お店・カフェ" }, line: { en: "Retail, cafés and showrooms, from the first store to the next", ja: "小売店、カフェ、ショールーム。1店舗目から次の店舗まで" } },
  { title: { en: "Japanese companies in Australia", ja: "日本企業のオーストラリア拠点" }, line: { en: "Offices with a Japanese feel your team will recognise", ja: "日本人スタッフにもなじむ、日本らしさのあるオフィス" } },
];

export const commercialSteps: Item[] = [
  { title: { en: "Get in touch", ja: "お問い合わせ" }, line: { en: "Email, Instagram or Facebook, in English or Japanese", ja: "メール、Instagram、Facebookから。日本語でも英語でも" } },
  { title: { en: "Free design proposal", ja: "無料のデザイン提案" }, line: { en: "Briefing, layouts, mood board, 3D renders, furniture list and budget", ja: "ヒアリングからレイアウト、ムードボード、3Dパース、家具リスト、予算まで" } },
  { title: { en: "Building by Japan Homes", ja: "ジャパンホームズによる工事" }, line: { en: "You contract the fit-out directly with Japan Homes, a licensed builder", ja: "工事は、ライセンスを持つジャパンホームズとお客様が直接ご契約" } },
  { title: { en: "We check the design", ja: "デザイン通りか確認" }, line: { en: "During the work, we check everything matches the design", ja: "工事中、デザイン通りに進んでいるか確認します" } },
  { title: { en: "Open for business", ja: "完成・オープン" }, line: { en: "A finished space your team and customers enjoy", ja: "スタッフにもお客様にも心地よい空間の完成" } },
];

/** For client companies: a home design discount for their staff. */
export const staffBenefit = {
  title: { en: "A design benefit for your team", ja: "社員の方への特典" },
  body: {
    en: "When we design your workplace, your staff can receive a discount on interior design for their own homes. It costs the business nothing: you simply share the offer with your team once.",
    ja: "オフィスのデザインをご依頼いただいた会社の社員の方は、ご自宅のインテリアデザインを割引価格でご利用いただけます。会社のご負担はゼロ。社員の方へご案内を1回送っていただくだけです。",
  },
};

export const commercialFaq: Faq[] = [
  {
    q: { en: "Is the design proposal really free?", ja: "デザインの提案は本当に無料ですか？" },
    a: {
      en: "Yes. The briefing, measure-up, layout options, mood board, material board, 3D renders, furniture list, budget estimate and the building quote from Japan Homes are all free when the project is built with Japan Homes. If you would like to take the design to another builder, a design fee applies, and we agree it in writing before we start. Free places are limited.",
      ja: "はい。ヒアリング・採寸、レイアウト案、ムードボード、素材ボード、3Dパース、家具リスト、概算予算、ジャパンホームズの工事見積もりまで、ジャパンホームズで施工する場合は無料です。デザインだけをほかの会社に持っていかれる場合はデザイン料がかかり、始める前に書面でお約束します。無料の枠には限りがあります。",
    },
  },
  {
    q: { en: "Who does the building work?", ja: "工事は誰がしますか？" },
    a: {
      en: "Japan Homes, our building partner, does the fit-out under its own licence. Japan Homes has built homes in New Zealand and Australia for over 20 years. You sign the building contract directly with Japan Homes, and NAMI checks that the work matches the design.",
      ja: "工事は、パートナーのジャパンホームズが自社のライセンスで行います。ジャパンホームズは、ニュージーランドとオーストラリアで20年以上の家づくりの実績があります。工事の契約はお客様とジャパンホームズの直接契約で、NAMIはデザイン通りに仕上がっているかを確認します。",
    },
  },
  {
    q: { en: "What does NAMI do, and what does it not do?", ja: "NAMIがすること、しないことは何ですか？" },
    a: {
      en: "NAMI is a design studio. We design the space, suggest colours, finishes and lighting, select and arrange furniture, gather builder quotes and check the work matches the design. We do not take on or manage building work, and structural, fire, ventilation, plumbing and electrical design and council documents are handled by licensed professionals.",
      ja: "NAMIはデザインスタジオです。空間のデザイン、色・仕上げ・照明の提案、家具の選定と手配、施工業者の見積もりのとりまとめ、デザイン通りかの確認を行います。工事の請け負いや管理は行いません。構造・消防・換気・水回り・電気の設計や役所への申請図面は、資格を持つ専門家が担当します。",
    },
  },
  {
    q: { en: "What kinds of businesses do you design for?", ja: "どんな業種のデザインをしていますか？" },
    a: {
      en: "Offices such as real estate agencies, accounting and law firms, migration agents and IT companies; dental and medical clinics; tutoring and language schools; shops and cafés; and the Australian offices of Japanese companies.",
      ja: "不動産会社、会計事務所、法律事務所、移民エージェント、IT企業などのオフィス、歯科・医療クリニック、塾や語学学校、お店やカフェ、日本企業のオーストラリア拠点などです。",
    },
  },
  {
    q: { en: "Why Japandi for a workplace?", ja: "なぜオフィスやお店にジャパンディなのですか？" },
    a: {
      en: "Japandi keeps a space calm, uncluttered and warm. Natural materials such as hinoki timber, washi lighting and shoji-style screens make a reception or treatment room feel welcoming, and a clear layout helps teams work and customers find their way.",
      ja: "ジャパンディは、空間を落ち着いた、すっきりした、温かい場所にします。檜の木材、和紙の照明、障子風の仕切りなどの自然素材で、受付や診察室が迎え入れるような雰囲気に。わかりやすいレイアウトは、働きやすさにも、お客様の動きやすさにもつながります。",
    },
  },
  {
    q: { en: "Can you help with finance for the fit-out?", ja: "内装の資金について相談できますか？" },
    a: {
      en: "We can introduce a trusted finance broker. We do not give loan advice ourselves, and if we receive a referral fee we always tell you.",
      ja: "信頼できるファイナンスブローカーをご紹介できます。NAMI自身はローンのアドバイスは行いません。紹介料を受け取る場合は、必ずお客様にお伝えします。",
    },
  },
  {
    q: { en: "What is the staff home design benefit?", ja: "社員の方への特典とは何ですか？" },
    a: {
      en: "When we design your workplace, your staff can receive a discount on interior design for their own homes. There is no cost to the business: you share the offer with your team once.",
      ja: "オフィスのデザインをご依頼いただいた会社の社員の方は、ご自宅のインテリアデザインを割引価格でご利用いただけます。会社のご負担はなく、社員の方へご案内を1回送っていただくだけです。",
    },
  },
  {
    q: { en: "Where do you work?", ja: "どの地域に対応していますか？" },
    a: {
      en: "We are based in Sydney. For projects elsewhere in Australia, please get in touch and we will talk about your project individually.",
      ja: "シドニーを拠点にしています。オーストラリアのほかの地域のご依頼は、個別にご相談ください。",
    },
  },
];

/**
 * A concept design by NAMI for a Japanese massage studio (from the Canva deck
 * "Sunrise & Waves"). The pictures are design visualisations, not photographs
 * of a finished space, and are labelled as such on the page.
 */
export const conceptProject = {
  title: "Sunrise & Waves",
  kind: { en: "Japanese massage studio · Concept design", ja: "日本式マッサージスタジオ · コンセプトデザイン" },
  lead: {
    en: "A massage studio where the mind grows calm the moment you step in. The theme is the morning sun over the bay and the gentle waves, in indigo and natural linen, timber and washi paper.",
    ja: "入った瞬間に心が落ち着くマッサージスタジオ。テーマは、湾にのぼる朝日とおだやかな波。藍色と生成りのリネン、木、和紙でまとめた、静かな日本の空間です。",
  },
  note: {
    en: "Design visualisations from our concept proposal.",
    ja: "コンセプト提案のイメージパースです。",
  },
  rooms: [
    {
      src: "/images/concepts/sunrise-and-waves/01-lounge.jpg",
      alt: "Sunrise & Waves concept: the lounge with reclining chairs, timber wall slats and indigo seigaiha fabric waving across the ceiling",
      title: { en: "Lounge", ja: "ラウンジ" },
      line: {
        en: "Indigo and linen fabric with the seigaiha wave pattern sways across the ceiling. Timber slats line the walls.",
        ja: "青海波(せいがいは)模様の藍色とリネンの布が、天井で波のように揺れます。壁は木の格子で。",
      },
    },
    {
      src: "/images/concepts/sunrise-and-waves/02-reception.jpg",
      alt: "Sunrise & Waves concept: a timber reception counter with a hanging scroll of a wave and the sun, and sudare bamboo blinds",
      title: { en: "Reception", ja: "受付" },
      line: {
        en: "A hanging scroll of the sunrise greets you behind the counter, and sudare bamboo blinds soften the view from the street.",
        ja: "受付の奥では、朝日の掛け軸がお出迎え。簾(すだれ)が通りからの視線をやわらげます。",
      },
    },
    {
      src: "/images/concepts/sunrise-and-waves/03-sunrise-room.jpg",
      alt: "Sunrise & Waves concept: the Sunrise treatment room with an orange throw and a round washi paper lantern",
      title: { en: "Sunrise Room", ja: "サンライズルーム" },
      line: {
        en: "An orange throw, the colour of dawn, and a round washi paper lantern. White curtains close for privacy.",
        ja: "朝焼けの色のオレンジのブランケットと、丸い和紙の提灯。白いカーテンで個室になります。",
      },
    },
    {
      src: "/images/concepts/sunrise-and-waves/04-waves-room.jpg",
      alt: "Sunrise & Waves concept: the Waves treatment room with an indigo seigaiha throw and a washi lantern",
      title: { en: "Waves Room", ja: "ウェーブルーム" },
      line: {
        en: "An indigo seigaiha throw carries the wave pattern, with the same soft lantern and curtains.",
        ja: "藍色の青海波のブランケットが、波の模様を運びます。やわらかな提灯とカーテンは同じです。",
      },
    },
  ],
};
