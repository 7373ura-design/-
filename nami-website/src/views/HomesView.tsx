import type { Metadata } from "next";
import { Card } from "@/components/home/sections";
import { CtaBand, FaqList, Glossary, PageHero, Section, Notes, Steps, faqLd } from "@/components/blocks";
import { JsonLd, breadcrumbLd, serviceLd } from "@/components/JsonLd";
import { glossary, homeServices, homeSteps, homesHero } from "@/data/homes";
import { answeredFaq } from "@/data/faq";
import { getWorks } from "@/data/works";
import { site } from "@/data/site";
import { alternates } from "@/lib/meta";
import { localHref, type Lang } from "@/lib/lang";

export function homesMetadata(lang: Lang): Metadata {
  return lang === "ja"
    ? {
        title: "住まいのインテリアデザイン（新築・リノベーション）｜シドニー",
        description:
          "シドニー拠点のNAMIによる、ジャパンディの住まいのデザイン。新築、リノベーション、1部屋のスタイリング、IKEAやKmartを使った手軽なスタイリング。檜・障子・畳・和紙など日本の要素も。日本出身のデザイナーが担当します。",
        alternates: alternates(lang, "/homes"),
      }
    : {
        title: "Japandi Home Interior Design in Sydney | New Builds & Renovations",
        description:
          "Japandi interior design for homes in Sydney: new builds, renovations, single-room and budget styling with IKEA and Kmart. Hinoki baths, shoji screens, tatami and washi, by a designer from Japan.",
        alternates: alternates(lang, "/homes"),
      };
}

/** Homes: services, budget styling, projects, Japanese design words, process and FAQ. */
export function HomesView({ lang }: { lang: Lang }) {
  const works = getWorks();
  const faq = answeredFaq();
  return (
    <>
      <JsonLd
        data={[
          serviceLd(lang, {
            path: "/homes",
            name: lang === "ja" ? "住まいのインテリアデザイン" : "Japandi home interior design",
            serviceType: "Residential interior design",
            description: homesHero.body[lang],
            offers: homeServices.map((s) => s.title[lang]),
          }),
          faqLd(lang, faq.flatMap((g) => g.items)),
          breadcrumbLd(lang, [{ name: lang === "ja" ? "住まい" : "Homes", path: "/homes" }]),
        ]}
      />
      <PageHero id="homes-h" kicker={homesHero.kicker} title={homesHero.title} body={homesHero.body} art="washitsu" />

      <Section id="services" title={{ en: "Services", ja: "サービス" }}>
        <Notes items={homeServices} />
      </Section>

      <Section
        id="budget"
        title={{ en: "Japandi on a Budget", ja: "手軽にジャパンディ" }}
        intro={{
          en: "A Japandi home does not have to be expensive. We style rooms with affordable pieces from IKEA, Kmart and similar stores, choosing fewer things with care and keeping colours and materials simple. We share ideas you can try yourself on Instagram, and we are happy to advise on DIY projects.",
          ja: "ジャパンディの家は、お金をかけなくてもつくれます。IKEAやKmartなど手に入りやすい家具や雑貨を使い、物を絞って丁寧に選び、色と素材をシンプルにまとめます。自分で試せるアイデアはInstagramで発信中。DIYのご相談にも対応しています。",
        }}
      >
        <p className="mt-6">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-[1rem] text-vermilion hover:underline">
            {lang === "ja" ? `Instagramを見る（${site.instagramHandle}）→` : `See ideas on Instagram (${site.instagramHandle}) →`}
          </a>
        </p>
      </Section>

      <Section id="projects" title={{ en: "Projects", ja: "作品" }} wide>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {works.map((w) => (
            <Card
              key={w.slug}
              href={localHref(lang, `/homes/projects/${w.slug}`)}
              src={w.photos[0].src}
              alt={w.photos[0].alt}
              no={w.number}
              title={w.title}
              line={w.type}
              sizes="(min-width:768px) 45vw, 90vw"
            />
          ))}
        </div>
      </Section>

      <Section
        id="japanese-design"
        title={{ en: "Japanese Design, Explained", ja: "日本のデザイン用語" }}
        intro={{
          en: "Words you may have heard, what they mean, and how we bring them into an Australian home.",
          ja: "聞いたことのある言葉の意味と、オーストラリアの家への取り入れ方をご紹介します。",
        }}
        wide
      >
        <Glossary items={glossary} />
      </Section>

      <Section id="process" title={{ en: "How It Works", ja: "進め方" }}>
        <Steps items={homeSteps} />
      </Section>

      <Section id="faq" title={{ en: "Questions", ja: "よくあるご質問" }} kicker="FAQ" wide>
        <FaqList lang={lang} groups={faq} />
      </Section>

      <CtaBand
        lang={lang}
        title={{ en: "Talk to us about your home", ja: "住まいのご相談はお気軽に" }}
        line={{ en: "The first consultation is free. English or Japanese.", ja: "最初のご相談は無料です。日本語でも英語でも。" }}
      />
    </>
  );
}
