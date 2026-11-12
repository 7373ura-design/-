import type { Bi } from "@/lib/i18n";

/**
 * Questions clients ask before they get in touch. The answers come from NAMI
 * (written in Japanese, then put into English). A question appears on the
 * FAQ page only once its answer is filled in; the page and its menu link
 * appear once at least one answer is.
 */
export type Faq = { q: Bi; a?: Bi };
export type FaqGroup = { title: Bi; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    title: { en: "About NAMI and Japandi", ja: "NAMIとジャパンディについて" },
    items: [
      {
        q: { en: "What is Japandi interior design?", ja: "ジャパンディとは何ですか？" },
        a: {
          en: "Japandi brings together the Japanese idea of wabi-sabi and the simple, warm way of living found in Scandinavia. It uses natural materials such as timber, paper, stone and linen, and a calm palette of colours. Rooms are kept clear and uncluttered, but never cold.",
          ja: "日本の「わびさび」の考え方と、北欧のシンプルで温かい暮らし方を組み合わせたスタイルです。木や紙、石、リネンなどの自然素材を使い、落ち着いた色でまとめます。物を減らしてすっきりさせながらも、冷たく見えない空間をつくります。",
        },
      },
      {
        q: { en: "What makes NAMI different from other interior designers?", ja: "NAMIはほかのインテリアデザイナーと何が違いますか？" },
        a: {
          en: "Our designer is from Japan. We know the Japanese way of living not only from study but from growing up in it: how light comes into a room, how materials are chosen, how a home is kept calm.\n\nOur designer studied architecture at university in Japan, holds qualifications in Japanese garden design, Japandi and interior design, has trained in Australian residential drafting (Certificate IV), and is recognised by Japan Homes. That means we can bring the best of Japanese design into a home in a way that suits how houses are built and lived in here. We work in English and Japanese.",
          ja: "NAMIのデザイナーは日本出身です。日本の住まいの考え方を、学んだだけでなく、実際に暮らしてきた経験として知っています。光の入れ方、素材の選び方、家を落ち着いた場所に保つ工夫などです。\n\nデザイナーは日本の大学で建築を学び、日本庭園・ジャパンディ・インテリアデザインの資格を持っています。オーストラリアの住宅製図(Certificate IV)も学び、Japan Homes公認のインテリアデザイナーでもあります。そのため、見た目だけでなく、こちらの家のつくりや暮らし方に合う形で日本の良さを取り入れられます。日本語と英語の両方で対応できます。",
        },
      },
      {
        q: { en: "Do I need to love Japanese style to work with you?", ja: "和風が好きでないとお願いできませんか？" },
        a: {
          en: "Not at all. We offer a range of styles, from traditional Japanese homes to modern ones, and shape the design around what you would like. Japanese ideas such as natural light, honest materials and fewer things can sit within any of them.",
          ja: "そんなことはありません。伝統的な日本の家のスタイルからモダンなスタイルまで、お客様のご希望に合わせたスタイルをご提案します。光の入れ方、素材の選び方、物の少なさといった日本の考え方は、どのスタイルにも取り入れられます。",
        },
      },
      {
        q: { en: "Does Japandi suit Australian homes and the Australian climate?", ja: "ジャパンディはオーストラリアの家や気候に合いますか？" },
        a: {
          en: "Very well. Australian homes already have much in common with Japandi: bright natural light, timber floors and decks that open to the outdoors. We also plan colours, materials and window treatments around strong sun and warm weather.",
          ja: "とても合います。明るい自然光、木の床、外とつながるデッキなど、オーストラリアの家にはもともとジャパンディと相性の良い要素が多くあります。強い日差しや暑さに合わせて、色や素材、窓まわりも考えてデザインします。",
        },
      },
    ],
  },
  {
    title: { en: "Services", ja: "サービス内容" },
    items: [
      {
        q: { en: "What services do you offer?", ja: "どんなサービスがありますか？" },
        a: {
          en: "We offer:\n- interior design for the whole home or single rooms\n- colour and material selections (cladding, floors, kitchens, bathrooms)\n- lighting and furniture advice\n- styling\n- Japanese elements such as tatami areas, shoji-style screens and timber baths\n- garden and outdoor design\n\nWe can combine these to suit your project.",
          ja: "主に次のことをお手伝いしています。\n- 家全体や1部屋ごとの内装デザイン\n- 色や素材の選定(外壁・床・キッチン・浴室など)\n- 照明や家具の提案\n- スタイリング\n- 畳・障子風の建具・木のお風呂など、日本の要素の取り入れ\n- 庭や外まわりのデザイン\n\n内容はご相談に合わせて組み合わせられます。",
        },
      },
      {
        q: { en: "Do you work on new builds, renovations, or both?", ja: "新築とリノベーション、どちらに対応していますか？" },
        a: {
          en: "Both. For a new build, we design the whole home to work together from the start. For a renovation, we keep what is good about the existing house and bring it up to date.",
          ja: "どちらにも対応しています。新築では最初から全体のバランスを考えたデザインを、リノベーションでは今の家の良さを残しながら新しくするデザインをご提案します。",
        },
      },
      {
        q: { en: "Can you help with just one room?", ja: "1部屋だけでもお願いできますか？" },
        a: {
          en: "Yes. You are welcome to start with just the living room, the kitchen or a bedroom.",
          ja: "はい、できます。リビングだけ、キッチンだけ、寝室だけなど、1部屋からご相談いただけます。",
        },
      },
      {
        q: { en: "Can you help me choose colours and materials for my build?", ja: "外壁・床・キッチンなどの色や素材選びだけでもお願いできますか？" },
        a: {
          en: "Yes. We can help with just the selections that are easy to get stuck on, such as cladding, flooring, kitchens and bathrooms, and make sure they work together as a whole.",
          ja: "はい、できます。新築のときに迷いやすい、外壁・床・キッチン・浴室などの色や素材の組み合わせを、全体のバランスを見てご提案します。",
        },
      },
      {
        q: { en: "Do you help with furniture, lighting and styling?", ja: "家具・照明・スタイリングもお願いできますか？" },
        a: {
          en: "Yes. We suggest furniture and lighting that suit the space, and can style the finished home. We can also design around furniture you already have.",
          ja: "はい。空間に合う家具や照明の提案から、最後の仕上げのスタイリングまで対応できます。今お持ちの家具を生かした提案もできます。",
        },
      },
      {
        q: { en: "Can you work with my builder or architect?", ja: "自分の工務店や建築家と一緒に進められますか？" },
        a: {
          en: "Yes. We can work alongside the builder or architect you already have, taking care of the interior, colours and materials.",
          ja: "はい、できます。すでに決まっている工務店や建築家の方と連携して、内装や色・素材の部分を担当する形でも進められます。",
        },
      },
      {
        q: { en: "Do you draw plans?", ja: "図面も作ってもらえますか？" },
        a: {
          en: "Yes. We prepare the drawings the design needs, such as interior layouts.",
          ja: "はい、できます。内装の配置図など、デザインに必要な図面を作成します。",
        },
      },
      { q: { en: "Do you handle council approval or the building work?", ja: "役所の申請や工事もしてもらえますか？" } },
      {
        q: { en: "Can you add Japanese elements like tatami, shoji screens or a timber bath?", ja: "畳・障子・木のお風呂など、日本らしい要素を取り入れられますか？" },
        a: {
          en: "Yes. We design Japanese elements such as a tatami corner, shoji-style screens, timber slat details and timber baths in a way that suits an Australian home.",
          ja: "はい、できます。畳コーナーや障子風の建具、木の格子、木のお風呂など、日本の要素をオーストラリアの家に合う形で取り入れたデザインもご提案しています。",
        },
      },
      {
        q: { en: "Do you design Japanese gardens and outdoor spaces?", ja: "日本庭園や外まわりもデザインできますか？" },
        a: {
          en: "Yes. Our designer is qualified in Japanese garden design, so we can design gardens and outdoor areas too, including gardens that connect with the rooms inside and the spaces around a deck.",
          ja: "はい。日本庭園の資格を持っているので、庭や外まわりのデザインもご相談いただけます。室内とつながる庭づくりや、デッキまわりの提案もできます。",
        },
      },
    ],
  },
  {
    title: { en: "Where we work", ja: "対応エリアと言語" },
    items: [
      {
        q: { en: "Where are you based, and which areas do you cover?", ja: "どこを拠点にしていて、どの地域に対応していますか？" },
        a: {
          en: "We are based in Sydney. We also work across the rest of Australia and in New Zealand, where we have completed projects. If you are overseas, please get in touch and we will talk about your project individually.",
          ja: "シドニーを拠点にしています。シドニー以外のオーストラリア各地や、ニュージーランドでも対応しており、実際に手がけた物件もあります。海外からのご依頼は、個別にご相談ください。",
        },
      },
      {
        q: { en: "Can you work with clients outside Sydney, or online?", ja: "シドニー以外の地域や、オンラインでもお願いできますか？" },
        a: {
          en: "Of course. We hold meetings online and can put a design together from photos and plans of your home.",
          ja: "はい、もちろんできます。オンラインでの打ち合わせや、写真・図面をもとにしたデザインのご提案にも対応しています。",
        },
      },
      {
        q: { en: "Do you visit the home or site?", ja: "家や現場に来てもらえますか？" },
        a: {
          en: "Yes, as a rule we come to you. Outside Sydney we usually work online, but we can visit when the project needs it, so please ask.",
          ja: "基本的にはお伺いできます。シドニー以外の地域はオンラインでの対応を基本にしていますが、必要に応じてお伺いすることもできますので、個別にご相談ください。",
        },
      },
      {
        q: { en: "Can I talk to you in Japanese?", ja: "日本語で相談できますか？" },
        a: {
          en: "Yes. You can talk to us in English or Japanese.",
          ja: "はい、日本語でも英語でもご相談いただけます。",
        },
      },
    ],
  },
  {
    title: { en: "Cost and timing", ja: "費用と期間" },
    items: [
      {
        q: { en: "How much does interior design cost?", ja: "費用はどれくらいかかりますか？" },
        a: {
          en: "It depends on the size of the home and what you would like us to do. Get in touch and we will give you a quote once we understand your project.",
          ja: "家の広さや、お願いする内容によって変わります。まずはご相談いただければ、内容をうかがってお見積もりをお出しします。",
        },
      },
      {
        q: { en: "How are your fees worked out?", ja: "料金はどのように決まりますか？" },
        a: {
          en: "From the scope of the work (selections only, or the whole interior, for example) and the size of the home. You will have a quote before we start.",
          ja: "お願いする内容(色や素材の選定だけか、内装全体か、など)と家の広さをもとに決めます。お見積もりは事前にお出しします。",
        },
      },
      {
        q: { en: "Is the first consultation free?", ja: "最初の相談は無料ですか？" },
        a: {
          en: "Yes, the first consultation is free. Feel free to get in touch.",
          ja: "はい、最初のご相談は無料です。お気軽にお問い合わせください。",
        },
      },
      {
        q: { en: "Does a Japandi home have to be expensive?", ja: "ジャパンディの家はお金がかかりますか？" },
        a: {
          en: "Not necessarily. Japandi is about choosing fewer things with care rather than adding more. By keeping the number of materials and colours small, we can design to your budget. We are also happy to advise on DIY projects.",
          ja: "必ずしもそうではありません。ジャパンディは物を増やすより、少ないものを丁寧に選ぶ考え方です。素材や色の数を絞ることで、ご予算に合わせたデザインもできます。DIYのご相談にも対応しています。",
        },
      },
      {
        q: { en: "How long does a project take?", ja: "どれくらいの期間がかかりますか？" },
        a: {
          en: "It depends on the project. Colour and material selections usually take a few weeks, and a full interior design a few months. We work to your build schedule.",
          ja: "内容によって異なります。色や素材の選定だけなら数週間、内装全体のデザインなら数か月が目安です。家の工事のスケジュールに合わせて進めます。",
        },
      },
      {
        q: { en: "When is the best time to contact you during a build or renovation?", ja: "家づくりのどのタイミングで相談するのがいいですか？" },
        a: {
          en: "As early as you can. If we can talk before the layout and windows are fixed, we can design everything together, down to how the light comes in and the materials. You are still welcome to get in touch once building has started.",
          ja: "できるだけ早い段階がおすすめです。間取りや窓の位置が決まる前にご相談いただくと、光の入り方や素材まで含めて、全体をまとめたデザインができます。もちろん、工事が始まってからでもご相談いただけます。",
        },
      },
    ],
  },
  {
    title: { en: "How it works", ja: "進め方" },
    items: [
      {
        q: { en: "What happens from first contact to the finished home?", ja: "相談から完成までの流れを教えてください。" },
        a: {
          en: "1. Get in touch by email, Instagram or Facebook.\n2. A free first consultation about your wishes and budget.\n3. A quote.\n4. Design proposal.\n5. Changes and final decisions.\n6. We work with your builder and trades through to completion.",
          ja: "1. メール、Instagram、Facebookからお問い合わせ\n2. 無料のご相談(ご希望やご予算をうかがいます)\n3. お見積もり\n4. デザインのご提案\n5. 修正・決定\n6. 完成まで、工務店や職人の方と連携",
        },
      },
      {
        q: { en: "What should I prepare before our first meeting?", ja: "最初の打ち合わせまでに何を準備すればいいですか？" },
        a: {
          en: "Plans or photos of your home, and pictures of interiors you like (saved posts on Instagram or Pinterest are fine), make it easy to share ideas. A rough budget and timeline help too.",
          ja: "図面や今の家の写真、好きなインテリアの写真(InstagramやPinterestの保存でも大丈夫です)があると、イメージを共有しやすくなります。ご予算やスケジュールの目安も教えていただけると助かります。",
        },
      },
      {
        q: { en: "How many rounds of changes are included?", ja: "デザインの修正は何回までできますか？" },
        a: {
          en: "We work through the design together until you are happy with it. If larger changes are needed many times over, we will talk with you first.",
          ja: "ご納得いただけるまで、話し合いながら進めます。大きな変更が何度も必要な場合は、事前にご相談させていただきます。",
        },
      },
      {
        q: { en: "Can I keep my existing furniture?", ja: "今ある家具を生かせますか？" },
        a: {
          en: "Yes. We can design the space around furniture and pieces that matter to you.",
          ja: "はい、できます。大切にしている家具や思い出のある物を生かして、それに合う空間をデザインすることもできます。",
        },
      },
      {
        q: { en: "Is a Japandi home practical with children and pets?", ja: "子どもやペットがいても大丈夫ですか？" },
        a: {
          en: "Yes. We choose materials that stand up to wear and plan storage so things have a place, all to suit the way you live.",
          ja: "大丈夫です。汚れや傷に強い素材を選んだり、収納を工夫して物が出しっぱなしにならないようにしたりと、暮らし方に合わせてデザインします。",
        },
      },
      {
        q: { en: "What is the NAMI Founding Monitors campaign?", ja: "NAMIファウンディングモニターとは何ですか？" },
        a: {
          en: "To mark NAMI's start, we are looking for people building or renovating in Sydney to become Founding Monitors. We design with you on special terms, and in return we share photos of the finished home and your thoughts. Get in touch for details.",
          ja: "NAMIのスタートにあたって、シドニーで家づくりをされる方を「ファウンディングモニター」として募集しているキャンペーンです。特別な条件でデザインをお手伝いする代わりに、完成した家の写真やご感想を紹介させていただきます。詳しくはお問い合わせください。",
        },
      },
      {
        q: { en: "How do I get started?", ja: "相談するにはどうすればいいですか？" },
        a: {
          en: "Send us an email, or a message on Instagram or Facebook. English or Japanese is fine.",
          ja: "メール、Instagram、FacebookのDMからお気軽にご連絡ください。日本語でも英語でも大丈夫です。",
        },
      },
    ],
  },
];

/** Groups with only their answered questions, leaving out empty groups. */
export function answeredFaq() {
  return faqGroups
    .map((g) => ({ ...g, items: g.items.filter((i): i is Required<Faq> => !!i.a) }))
    .filter((g) => g.items.length > 0);
}
