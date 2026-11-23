import type { Metadata } from "next";
import { CtaBand, FaqList, Glossary, OverlayHero, Section, Notes, Steps, SubNav, faqLd } from "@/components/blocks";
import { JsonLd, breadcrumbLd, serviceLd } from "@/components/JsonLd";
import { commercialFaq, commercialHero, commercialSteps, conceptProject, freeProposal, sectors, staffBenefit } from "@/data/commercial";
import Image from "next/image";
import { Container } from "@/components/ui";
import { T } from "@/lib/i18n";
import { glossary } from "@/data/homes";
import type { Faq } from "@/data/faq";
import { alternates } from "@/lib/meta";
import { localHref, type Lang } from "@/lib/lang";

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
      <SubNav
        lang={lang}
        current="commercial"
        links={[
          { href: "#concept", label: { en: "Concept project", ja: "デザイン事例" } },
          { href: "#free-proposal", label: { en: "Free proposal", ja: "無料の提案" } },
          { href: "#sectors", label: { en: "Who it's for", ja: "対象の業種" } },
          { href: "#japandi-at-work", label: { en: "Japandi at work", ja: "ジャパンディ" } },
          { href: "#process", label: { en: "How it works", ja: "進め方" } },
          { href: "#staff-benefit", label: { en: "Staff benefit", ja: "社員特典" } },
          { href: "#faq", label: { en: "FAQ", ja: "よくある質問" } },
        ]}
      />
      <OverlayHero
        flush
        id="commercial-h"
        eyebrow={{ en: "Shops & Offices · Japandi Interior Design · Sydney", ja: "お店・オフィス · ジャパンディ · シドニー" }}
        title={{ en: "Japandi design\nfor offices and shops.", ja: "日本の美意識を、\nお店とオフィスに。" }}
        body={commercialHero.body}
        image={{ src: "/images/concepts/sunrise-and-waves/01-lounge.jpg", alt: "Sunrise & Waves, a Japanese massage studio concept by NAMI: lounge with timber slats and seigaiha fabric across the ceiling", position: "50% 55%" }}
        links={[
          { href: "#concept", label: { en: "See a concept project", ja: "デザイン事例を見る" } },
          { href: "#free-proposal", label: { en: "What's free", ja: "無料の内容を見る" } },
          { href: localHref(lang, "/#contact"), label: { en: "Ask for a free proposal", ja: "無料提案を相談する" } },
        ]}
        caption="SUNRISE & WAVES · CONCEPT DESIGN"
      />

      <section id="concept" className="section-rule relative scroll-mt-36 md:scroll-mt-40" aria-labelledby="concept-h">
        <Container className="pb-24 pt-14 md:pb-32 md:pt-20">
          <p className="kicker text-vermilion">CONCEPT PROJECT</p>
          <h2 id="concept-h" className="title mt-3 text-[clamp(2rem,4vw,3rem)]">{conceptProject.title}</h2>
          <p className="label mt-2 text-deep">
            <T ja={conceptProject.kind.ja} en={conceptProject.kind.en} />
          </p>
          <p className="jp-body mt-5 max-w-3xl text-[1.0625rem] text-navy/80">
            <T ja={conceptProject.lead.ja} en={conceptProject.lead.en} />
          </p>
          <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-3" data-lightbox>
            {conceptProject.rooms.map((r, i) => (
              <figure key={r.src} className={i === 0 ? "md:col-span-3" : ""}>
                <div className={`relative overflow-hidden bg-beige ${i === 0 ? "aspect-[16/9]" : "aspect-[4/5]"}`} data-lightbox-item>
                  <Image src={r.src} alt={r.alt} fill sizes={i === 0 ? "100vw" : "(min-width:768px) 30vw, 90vw"} className="object-cover" />
                </div>
                <figcaption className="mt-3">
                  <span className="title text-[1.3rem]">
                    <T ja={r.title.ja} en={r.title.en} />
                  </span>
                  <span className="mt-1 block text-[1rem] leading-relaxed text-navy/75">
                    <T ja={r.line.ja} en={r.line.en} />
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-[0.875rem] text-navy/55">
            <T ja={conceptProject.note.ja} en={conceptProject.note.en} />
          </p>
        </Container>
      </section>

      <Section
        id="free-proposal"
        kicker="FREE DESIGN PROPOSAL"
        title={{ en: "Up to 3D renders,\nfree.", ja: "3Dパースまで、\n無料で。" }}
        intro={{
          en: "Most studios stop at a consultation and a floor plan. Ours goes all the way to 3D renders and a furniture list, free when the project is built with Japan Homes. Places are limited.",
          ja: "多くの会社は、無料の範囲が相談と間取り図までです。NAMIは3Dパースや家具リストまで無料でご提案します(ジャパンホームズで施工する場合)。無料の枠には限りがあります。",
        }}
      >
        <Notes items={freeProposal} />
      </Section>

      <Section id="sectors" kicker="WHO WE DESIGN FOR" title={{ en: "Offices, clinics,\nschools and shops.", ja: "オフィス、クリニック、\n教室、お店。" }}>
        <Notes items={sectors} />
      </Section>

      <Section
        id="japandi-at-work"
        kicker="JAPANDI AT WORK"
        title={{ en: "Calm spaces\nthat work hard.", ja: "働く場所に、\n日本の落ち着きを。" }}
        intro={{
          en: "Calm, uncluttered and warm: Japanese materials make a reception, treatment room or shop floor feel welcoming.",
          ja: "落ち着いていて、すっきりして、温かい。日本の素材が、受付や診察室、売り場を迎え入れるような空間にします。",
        }}
        wide
      >
        <Glossary items={atWork} />
      </Section>

      <Section id="process" kicker="HOW IT WORKS" title={{ en: "Designed by NAMI.\nBuilt by Japan Homes.", ja: "デザインはNAMI、\n工事はジャパンホームズ。" }}>
        <Steps items={commercialSteps} />
      </Section>

      <Section id="staff-benefit" kicker="STAFF BENEFIT" title={staffBenefit.title} intro={staffBenefit.body} />

      <Section id="faq" kicker="FAQ" title={{ en: "Questions,\nanswered.", ja: "よくあるご質問。" }} wide>
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
