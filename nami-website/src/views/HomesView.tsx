import type { Metadata } from "next";
import { CtaBand, FaqList, Glossary, OverlayHero, Section, Notes, Steps, StoryCard, faqLd } from "@/components/blocks";
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
      <OverlayHero
        id="homes-h"
        eyebrow={{ en: "Homes · Japandi Interior Design · Sydney", ja: "住まい · ジャパンディ · シドニー" }}
        title={{ en: "Japandi interiors\nfor your home.", ja: "日本の美意識を、\n住まいに。" }}
        body={homesHero.body}
        image={{ src: "/images/portfolio/old-meets-new/03.jpg", alt: "Old Meets New: timber slat screens and a warm timber floor in a Japandi renovation by NAMI" }}
        links={[
          { href: "#projects", label: { en: "See projects", ja: "作品を見る" } },
          { href: localHref(lang, "/#contact"), label: { en: "Start a project", ja: "相談する" } },
        ]}
        caption="OLD MEETS NEW"
      />

      <Section id="services" kicker="SERVICES" title={{ en: "From one room\nto the whole home.", ja: "1部屋から、\n家まるごとまで。" }}>
        <Notes items={homeServices} />
      </Section>

      <Section
        id="budget"
        kicker="BUDGET STYLING"
        title={{ en: "Japandi\non a budget.", ja: "手軽に、\nジャパンディ。" }}
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

      <Section id="projects" kicker="PROJECTS" title={{ en: "Complete homes.\nTheir own stories.", ja: "完成した住まいと、\nそれぞれの物語。" }} wide>
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {works.map((w) => (
            <StoryCard
              key={w.slug}
              href={localHref(lang, `/homes/projects/${w.slug}`)}
              no={w.number}
              title={w.title}
              copy={w.lead}
              meta={{ en: `${w.type.en} · Explore the full project`, ja: `${w.type.ja} · 作品を詳しく見る` }}
              cover={w.photos[0]}
              strip={w.photos.slice(1, 4).map((p) => p.src)}
            />
          ))}
        </div>
      </Section>

      <Section
        id="japanese-design"
        kicker="JAPANESE DESIGN, EXPLAINED"
        title={{ en: "Hinoki, shoji, tatami\nand more.", ja: "檜、障子、畳。\n日本のデザイン用語。" }}
        intro={{
          en: "Words you may have heard, what they mean, and how we bring them into an Australian home.",
          ja: "聞いたことのある言葉の意味と、オーストラリアの家への取り入れ方をご紹介します。",
        }}
        wide
      >
        <Glossary items={glossary} />
      </Section>

      <Section id="process" kicker="HOW IT WORKS" title={{ en: "Six simple steps.", ja: "6つのステップ。" }}>
        <Steps items={homeSteps} />
      </Section>

      <Section id="faq" kicker="FAQ" title={{ en: "Questions,\nanswered.", ja: "よくあるご質問。" }} wide>
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
