import type { Metadata } from "next";
import { CtaBand, FaqList, OverlayHero, Section, Notes, Steps, StoryCard, SubNav, faqLd } from "@/components/blocks";
import { JsonLd, breadcrumbLd, serviceLd } from "@/components/JsonLd";
import { commercialFaq, commercialHero, commercialSteps, freeProposal, partnerHelp, sectors, staffBenefit } from "@/data/commercial";
import Image from "next/image";
import { Container } from "@/components/ui";
import { T } from "@/lib/i18n";
import { concepts, meaningSteps } from "@/data/concepts";
import type { Faq } from "@/data/faq";
import { alternates } from "@/lib/meta";
import { localHref, type Lang } from "@/lib/lang";
import { KindWords, ServiceCards } from "@/components/more";
import { kindWords } from "@/data/nami";
import { commercialServicesList } from "@/data/services";

export function commercialMetadata(lang: Lang): Metadata {
  return lang === "ja"
    ? {
        title: "オフィス・店舗のインテリアデザイン｜シドニー",
        description:
          "シドニー拠点のNAMIによる、オフィス・クリニック・教室・お店・カフェのジャパンディデザイン。3Dパースと概算予算までのデザイン提案は無料。施工会社はパートナーのジャパンホームズを通して手配します。",
        alternates: alternates(lang, "/commercial"),
      }
    : {
        title: "Office & Shop Interior Design in Sydney | Free Design Proposal",
        description:
          "Japandi interior design for offices, clinics, schools, shops and cafés in Sydney. A free design proposal with 3D renders and a budget estimate; licensed builders arranged through our partner Japan Homes.",
        alternates: alternates(lang, "/commercial"),
      };
}


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
          { href: "#concepts", label: { en: "Concepts", ja: "デザイン事例" } },
          { href: "#free-proposal", label: { en: "Launch offer", ja: "オープン記念" } },
          { href: "#partners", label: { en: "Partners", ja: "パートナー" } },
          { href: "#services", label: { en: "Services", ja: "サービス" } },
          { href: "#kind-words", label: { en: "Kind words", ja: "お客様の声" } },
          { href: "#process", label: { en: "How it works", ja: "進め方" } },
          { href: "#staff-benefit", label: { en: "Staff benefit", ja: "社員特典" } },
          { href: "#faq", label: { en: "FAQ", ja: "よくある質問" } },
        ]}
      />
      <OverlayHero
        flush
        id="commercial-h"
        eyebrow={{ en: "Shops & Offices · Interior Design · Sydney", ja: "お店・オフィス · インテリアデザイン · シドニー" }}
        title={{ en: "Interior design\nfor offices and shops.", ja: "お店とオフィスの\nインテリアデザイン。" }}
        body={commercialHero.body}
        image={{ src: "/images/concepts/sunrise-and-waves/01-lounge.jpg", alt: "Sunrise & Waves, a Japanese massage studio concept by NAMI: lounge with timber slats and seigaiha fabric across the ceiling", position: "50% 55%" }}
        links={[
          { href: "#concepts", label: { en: "See concept projects", ja: "デザイン事例を見る" } },
          { href: "#free-proposal", label: { en: "Free proposal for 10 businesses", ja: "10社限定の無料提案" } },
          { href: localHref(lang, "/book"), label: { en: "Ask for a free proposal", ja: "無料提案を相談する" } },
        ]}
        caption="SUNRISE & WAVES · CONCEPT DESIGN"
      />

      <Section
        id="concepts"
        kicker="CONCEPT PROJECTS"
        title={{ en: "We start\nwith the meaning.", ja: "デザインは、\n「意味」から。" }}
        intro={{
          en: "Before any furniture or colour, we dig into who you are: your story, what you value and how your customers should feel. Then we find a Japanese idea that says the same thing, and turn it into space.",
          ja: "家具や色を決める前に、まず会社やお店のことを深く知ることから始めます。歩んできた道、大切にしていること、お客様にどう感じてほしいか。そして同じ思いを伝える日本の考え方を見つけ、空間にします。",
        }}
        wide
      >
        <div className="mx-auto mb-14 max-w-3xl">
          <Steps items={meaningSteps} />
        </div>
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {concepts.map((c, i) => (
            <StoryCard
              key={c.slug}
              href={localHref(lang, `/commercial/concepts/${c.slug}`)}
              no={String(i + 1).padStart(2, "0")}
              title={{ en: c.title, ja: c.title }}
              copy={c.lead}
              meta={{ en: `${c.kind.en} · Read the story`, ja: `${c.kind.ja} · 物語を読む` }}
              cover={c.cover}
              strip={c.rooms.slice(1).map((r) => r.src).filter((x): x is string => !!x)}
            />
          ))}
        </div>
      </Section>

      <Section
        id="free-proposal"
        kicker="TO CELEBRATE NAMI'S LAUNCH"
        title={{ en: "A free design proposal\nfor 10 businesses.", ja: "10社限定、\nデザイン提案を無料で。" }}
        intro={{
          en: "To celebrate our opening, we're offering a free design proposal to only 10 shops and offices. Most studios stop at a consultation and a floor plan. Ours goes all the way to 3D renders, a furniture list and builder quotes, free when the build is arranged through NAMI and Japan Homes.",
          ja: "オープンを記念して、お店・オフィス10社限定で、デザインの提案を無料でお引き受けします。多くの会社は、無料の範囲が相談と間取り図まで。NAMIは3Dパース、家具リスト、施工会社の見積もりまで無料でご提案します(NAMIとジャパンホームズを通して施工会社を手配する場合)。",
        }}
      >
        <Notes items={freeProposal} />
        <p className="mt-6 text-[1.0625rem]">
          <T ja="詳しくは、メールかInstagram(@nami.studio_au)のDMでお気軽にどうぞ。" en="Want the details? Email us or DM @nami.studio_au." />
        </p>
      </Section>

      <Section
        id="partners"
        kicker="LIKE IT, BUT..."
        title={{ en: "We'll help you\nget it built.", ja: "「いいね、でも…」を、\nなくします。" }}
        intro={{
          en: "NAMI's work is design. When a design feels right but something holds you back, our partners take care of it, so nothing stops you from moving ahead.",
          ja: "NAMIの本業はデザインです。デザインは気に入ったのに「でも…」と止まってしまうところは、パートナーが解決します。やりたいのに進められない、をなくします。",
        }}
      >
        <Notes items={partnerHelp} />
      </Section>

      <Section id="services" kicker="WHAT WE DESIGN" title={{ en: "Offices, clinics,\nshops and schools.", ja: "オフィス、クリニック、\nお店、教室。" }} intro={{ en: "Choose a service to see what's included and example ideas.", ja: "サービスを選ぶと、内容とアイデアの例をご覧いただけます。" }} wide>
        <ServiceCards lang={lang} items={commercialServicesList} />
      </Section>

      <Section id="kind-words" kicker="KIND WORDS" title={{ en: "Kind words.", ja: "お客様の声。" }} wide>
        <KindWords items={kindWords.filter((k) => k.group === "commercial")} />
      </Section>

      <Section id="process" kicker="HOW IT WORKS" title={{ en: "Designed by NAMI.\nBuilders arranged for you.", ja: "デザインはNAMI、\n施工会社も手配。" }}>
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
