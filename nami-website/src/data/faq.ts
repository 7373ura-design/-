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
      { q: { en: "What is Japandi interior design?", ja: "ジャパンディとは何ですか？" } },
      { q: { en: "What makes NAMI different from other interior designers?", ja: "NAMIはほかのインテリアデザイナーと何が違いますか？" } },
      { q: { en: "Who is the designer behind NAMI?", ja: "NAMIのデザイナーはどんな人ですか？" } },
      { q: { en: "Do I need to love Japanese style to work with you?", ja: "和風が好きでないとお願いできませんか？" } },
      { q: { en: "Does Japandi suit Australian homes and the Australian climate?", ja: "ジャパンディはオーストラリアの家や気候に合いますか？" } },
    ],
  },
  {
    title: { en: "Services", ja: "サービス内容" },
    items: [
      { q: { en: "What services do you offer?", ja: "どんなサービスがありますか？" } },
      { q: { en: "Do you work on new builds, renovations, or both?", ja: "新築とリノベーション、どちらに対応していますか？" } },
      { q: { en: "Can you help with just one room?", ja: "1部屋だけでもお願いできますか？" } },
      { q: { en: "Can you help me choose colours and materials for my build?", ja: "外壁・床・キッチンなどの色や素材選びだけでもお願いできますか？" } },
      { q: { en: "Do you help with furniture, lighting and styling?", ja: "家具・照明・スタイリングもお願いできますか？" } },
      { q: { en: "Can you work with my builder or architect?", ja: "自分の工務店や建築家と一緒に進められますか？" } },
      { q: { en: "Do you draw plans?", ja: "図面も作ってもらえますか？" } },
      { q: { en: "Do you handle council approval or the building work?", ja: "役所の申請や工事もしてもらえますか？" } },
      { q: { en: "Can you add Japanese elements like tatami, shoji screens or a timber bath?", ja: "畳・障子・木のお風呂など、日本らしい要素を取り入れられますか？" } },
      { q: { en: "Do you design Japanese gardens and outdoor spaces?", ja: "日本庭園や外まわりもデザインできますか？" } },
    ],
  },
  {
    title: { en: "Where we work", ja: "対応エリアと言語" },
    items: [
      { q: { en: "Where are you based, and which areas do you cover?", ja: "どこを拠点にしていて、どの地域に対応していますか？" } },
      { q: { en: "Can you work with clients outside Sydney, or online?", ja: "シドニー以外の地域や、オンラインでもお願いできますか？" } },
      { q: { en: "Do you visit the home or site?", ja: "家や現場に来てもらえますか？" } },
      { q: { en: "Can I talk to you in Japanese?", ja: "日本語で相談できますか？" } },
    ],
  },
  {
    title: { en: "Cost and timing", ja: "費用と期間" },
    items: [
      { q: { en: "How much does interior design cost?", ja: "費用はどれくらいかかりますか？" } },
      { q: { en: "How are your fees worked out?", ja: "料金はどのように決まりますか？" } },
      { q: { en: "Is the first consultation free?", ja: "最初の相談は無料ですか？" } },
      { q: { en: "Does a Japandi home have to be expensive?", ja: "ジャパンディの家はお金がかかりますか？" } },
      { q: { en: "How long does a project take?", ja: "どれくらいの期間がかかりますか？" } },
      { q: { en: "When is the best time to contact you during a build or renovation?", ja: "家づくりのどのタイミングで相談するのがいいですか？" } },
    ],
  },
  {
    title: { en: "How it works", ja: "進め方" },
    items: [
      { q: { en: "What happens from first contact to the finished home?", ja: "相談から完成までの流れを教えてください。" } },
      { q: { en: "What should I prepare before our first meeting?", ja: "最初の打ち合わせまでに何を準備すればいいですか？" } },
      { q: { en: "How many rounds of changes are included?", ja: "デザインの修正は何回までできますか？" } },
      { q: { en: "Can I keep my existing furniture?", ja: "今ある家具を生かせますか？" } },
      { q: { en: "Is a Japandi home practical with children and pets?", ja: "子どもやペットがいても大丈夫ですか？" } },
      { q: { en: "What is the NAMI Founding Monitors campaign?", ja: "NAMIファウンディングモニターとは何ですか？" } },
      { q: { en: "How do I get started?", ja: "相談するにはどうすればいいですか？" } },
    ],
  },
];

/** Groups with only their answered questions, leaving out empty groups. */
export function answeredFaq() {
  return faqGroups
    .map((g) => ({ ...g, items: g.items.filter((i): i is Required<Faq> => !!i.a) }))
    .filter((g) => g.items.length > 0);
}
