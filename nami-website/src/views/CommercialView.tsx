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

const atWork = [
  { title: { en: "Reception", ja: "受付" }, line: { en: "Timber slats, a hinoki or solid timber counter and a single washi paper light, a welcome rather than a front desk", ja: "木の格子、檜や無垢材のカウンター、ひとつの和紙の照明。「窓口」ではなく「おもてなし」の場に" } },
  { title: { en: "Meeting and treatment rooms", ja: "打ち合わせ室・施術室" }, line: { en: "Shoji-style screens and soft curtains: daylight in, conversations private", ja: "障子風の仕切りややわらかなカーテン。光は通し、会話は守ります" } },
  { title: { en: "Workspaces", ja: "執務スペース" }, line: { en: "Desks facing the light, natural materials, plants and acoustic panels for focus", ja: "光に向かうデスク、自然素材、植物、吸音パネルで集中できる空間に" } },
  { title: { en: "Shop floors and cafés", ja: "売り場・カフェ" }, line: { en: "Japandi, modern or coastal: a look that tells your story and makes people stay", ja: "ジャパンディ、モダン、コースタルなど。お店の物語を伝え、長く居たくなる空間に" } },
];

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
          { href: "#sectors", label: { en: "Who it's for", ja: "対象の業種" } },
          { href: "#japandi-at-work", label: { en: "Design at work", ja: "空間づくり" } },
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
          { href: localHref(lang, "/#contact"), label: { en: "Ask for a free proposal", ja: "無料提案を相談する" } },
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
          en: "To celebrate our opening, we're offering a free design proposal to only 10 shops and offices. Most studios stop at a consultation and a floor plan. Ours goes all the way to 3D renders, a furniture list and a building quote, free when the project is built with Japan Homes.",
          ja: "オープンを記念して、お店・オフィス10社限定で、デザインの提案を無料でお引き受けします。多くの会社は、無料の範囲が相談と間取り図まで。NAMIは3Dパース、家具リスト、工事の見積もりまで無料でご提案します(ジャパンホームズで施工する場合)。",
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

      <Section id="sectors" kicker="WHO WE DESIGN FOR" title={{ en: "Offices, clinics,\nschools and shops.", ja: "オフィス、クリニック、\n教室、お店。" }}>
        <Notes items={sectors} />
      </Section>

      <Section
        id="japandi-at-work"
        kicker="DESIGN AT WORK"
        title={{ en: "Calm spaces\nthat work hard.", ja: "働く場所に、\n日本の落ち着きを。" }}
        intro={{
          en: "Calm, uncluttered and warm: Japanese materials make a reception, treatment room or shop floor feel welcoming.",
          ja: "落ち着いていて、すっきりして、温かい。日本の素材が、受付や診察室、売り場を迎え入れるような空間にします。",
        }}
        wide
      >
        <Notes items={atWork} />
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
