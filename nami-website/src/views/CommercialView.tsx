import type { Metadata } from "next";
import { CtaBand, FaqList, Glossary, PageHero, Section, Notes, Steps, faqLd } from "@/components/blocks";
import { JsonLd, breadcrumbLd, serviceLd } from "@/components/JsonLd";
import { commercialFaq, commercialHero, commercialSteps, freeProposal, sectors, staffBenefit } from "@/data/commercial";
import { glossary } from "@/data/homes";
import type { Faq } from "@/data/faq";
import { alternates } from "@/lib/meta";
import type { Lang } from "@/lib/lang";

export function commercialMetadata(lang: Lang): Metadata {
  return lang === "ja"
    ? {
        title: "オフィス・店舗のインテリアデザイン｜シドニー",
        description:
          "シドニー拠点のNAMIによる、オフィス・クリニック・教室・お店・カフェのジャパンディデザイン。3Dパースと概算予算までのデザイン提案は無料。工事はライセンスを持つジャパンホームズが担当します。",
        alternates: alternates(lang, "/commercial"),
      }
    : {
        title: "Office & Shop Interior Design in Sydney | Free Design Proposal",
        description:
          "Japandi interior design for offices, clinics, schools, shops and cafés in Sydney. A free design proposal with 3D renders and a budget estimate; fit-out by our licensed partner, Japan Homes.",
        alternates: alternates(lang, "/commercial"),
      };
}

const atWork = glossary.filter((g) => ["Hinoki", "Shoji", "Washi", "Wabi-sabi"].includes(g.term));

/** Shops and offices: the free proposal, who it is for, process, staff benefit and FAQ. */
export function CommercialView({ lang }: { lang: Lang }) {
  const faq = commercialFaq.filter((f): f is Required<Faq> => !!f.a);
  return (
    <>
      <JsonLd
        data={[
          serviceLd(lang, {
            path: "/commercial",
            name: lang === "ja" ? "オフィス・店舗のインテリアデザイン" : "Office and shop interior design",
            serviceType: "Commercial interior design",
            description: commercialHero.body[lang],
            offers: freeProposal.map((s) => s.title[lang]),
          }),
          faqLd(lang, faq),
          breadcrumbLd(lang, [{ name: lang === "ja" ? "お店・オフィス" : "Shops and Offices", path: "/commercial" }]),
        ]}
      />
      <PageHero id="commercial-h" kicker={commercialHero.kicker} title={commercialHero.title} body={commercialHero.body} art="byobu" />

      <Section
        id="free-proposal"
        title={{ en: "Free Design Proposal", ja: "無料のデザイン提案" }}
        intro={{
          en: "Most studios stop at a consultation and a floor plan. Ours goes all the way to 3D renders and a furniture list, free when the project is built with Japan Homes. Places are limited.",
          ja: "多くの会社は、無料の範囲が相談と間取り図までです。NAMIは3Dパースや家具リストまで無料でご提案します(ジャパンホームズで施工する場合)。無料の枠には限りがあります。",
        }}
      >
        <Notes items={freeProposal} />
      </Section>

      <Section id="sectors" title={{ en: "Who We Design For", ja: "対象の業種" }}>
        <Notes items={sectors} />
      </Section>

      <Section
        id="japandi-at-work"
        title={{ en: "Japandi at Work", ja: "働く場所にジャパンディを" }}
        intro={{
          en: "Calm, uncluttered and warm: Japanese materials make a reception, treatment room or shop floor feel welcoming.",
          ja: "落ち着いていて、すっきりして、温かい。日本の素材が、受付や診察室、売り場を迎え入れるような空間にします。",
        }}
        wide
      >
        <Glossary items={atWork} />
      </Section>

      <Section id="process" title={{ en: "How It Works", ja: "進め方" }}>
        <Steps items={commercialSteps} />
      </Section>

      <Section id="staff-benefit" title={staffBenefit.title} intro={staffBenefit.body} />

      <Section id="faq" title={{ en: "Questions", ja: "よくあるご質問" }} kicker="FAQ" wide>
        <FaqList lang={lang} groups={[{ items: faq }]} />
      </Section>

      <CtaBand
        lang={lang}
        title={{ en: "Ask for a free design proposal", ja: "無料のデザイン提案を相談する" }}
        line={{ en: "Tell us about your office or shop. English or Japanese.", ja: "オフィスやお店のことをお聞かせください。日本語でも英語でも。" }}
      />
    </>
  );
}
