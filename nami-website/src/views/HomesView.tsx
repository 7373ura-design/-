import type { Metadata } from "next";
import { site } from "@/data/site";
import { launchOffer } from "@/data/brand";
import { Categories, CtaBand, FaqList, Glossary, OverlayHero, Pills, Section, Notes, Steps, StoryCard, SubNav, faqLd } from "@/components/blocks";
import { JsonLd, breadcrumbLd, serviceLd } from "@/components/JsonLd";
import { beyondSteps, everydayDesign, homeCategories, homeSteps, homeStyles, homesHero, lastingMaterials, valueIntro, valueNote, valuePoints } from "@/data/homes";
import { T } from "@/lib/i18n";
import { answeredFaq } from "@/data/faq";
import { getWorks } from "@/data/works";
import { alternates } from "@/lib/meta";
import { localHref, type Lang } from "@/lib/lang";

export function homesMetadata(lang: Lang): Metadata {
  return lang === "ja"
    ? {
        title: "住まいのインテリアデザイン（新築・リノベーション）｜シドニー",
        description:
          "シドニー拠点のNAMIによる、ジャパンディの住まいのデザイン。新築、リノベーション、エイジング・イン・プレイス、グラニーフラット、1部屋のスタイリング。檜・障子・畳・和紙など長く使える素材と日本の要素で、住まいの価値も考えたデザインを。日本出身のデザイナーが担当します。",
        alternates: alternates(lang, "/homes"),
      }
    : {
        title: "Japandi Home Interior Design in Sydney | New Builds & Renovations",
        description:
          "Japandi interior design for homes in Sydney: new builds, renovations, ageing-in-place and granny flats. Hinoki, solid timber, shoji and washi that last, designed with your property's value in mind, by a designer from Japan.",
        alternates: alternates(lang, "/homes"),
      };
}

/** Homes: launch offer, categories, styles, beyond design, materials, property value, projects, process and FAQ. */
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
            offers: homeCategories.map((s) => s.title[lang]),
          }),
          faqLd(lang, faq.flatMap((g) => g.items)),
          breadcrumbLd(lang, [{ name: lang === "ja" ? "住まい" : "Homes", path: "/homes" }]),
        ]}
      />
      <SubNav
        lang={lang}
        current="homes"
        links={[
          { href: "#offer", label: { en: "Launch offer", ja: "オープン記念" } },
          { href: "#services", label: { en: "What we design", ja: "サービス" } },
          { href: "#styles", label: { en: "Styles", ja: "スタイル" } },
          { href: "#beyond", label: { en: "Beyond design", ja: "家の先まで" } },
          { href: "#materials", label: { en: "Materials", ja: "素材" } },
          { href: "#value", label: { en: "Property value", ja: "住まいの価値" } },
          { href: "#projects", label: { en: "Projects", ja: "作品" } },
          { href: "#process", label: { en: "How it works", ja: "進め方" } },
          { href: "#faq", label: { en: "FAQ", ja: "よくある質問" } },
        ]}
      />
      <OverlayHero
        flush
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

      <Section id="offer" kicker={launchOffer.kicker} title={launchOffer.title} intro={launchOffer.body}>
        <Notes items={launchOffer.includes} />
        <p className="mt-6 text-[1.0625rem]">
          <T ja={launchOffer.cta.ja} en={launchOffer.cta.en} />
        </p>
        <p className="mt-4 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="label inline-flex items-center gap-2 bg-navy px-6 py-3.5 text-paper transition-colors hover:bg-deep">
            {lang === "ja" ? "メールする" : "Email us"} →
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="label inline-flex items-center gap-2 border border-navy px-6 py-3.5 text-navy transition-colors hover:bg-navy hover:text-paper">
            Instagram DM →
          </a>
        </p>
      </Section>

      <Section
        id="services"
        kicker="WHAT WE DESIGN"
        title={{ en: "From one room\nto the whole home.", ja: "1部屋から、\n家まるごとまで。" }}
        intro={{
          en: "Six ways we can help. Japanese ideas appear where they suit your home, never as a theme.",
          ja: "6つのかたちでお手伝いします。日本の要素は、住まいに合うところに自然に取り入れます。",
        }}
        wide
      >
        <Categories items={homeCategories} />
      </Section>

      <Section
        id="styles"
        kicker="ANY STYLE YOU LOVE"
        title={{ en: "Not only Japanese.", ja: "日本のスタイルだけじゃない。" }}
        intro={{
          en: "Japandi, modern or something in between, always designed around how you live. Our Japanese roots shape how we work, not which style you must choose.",
          ja: "ジャパンディでも、モダンでも、その間でも。いつも暮らし方に合わせてデザインします。日本のルーツは私たちの仕事の仕方に生きていて、スタイルを決めるものではありません。",
        }}
        wide
      >
        <Pills items={homeStyles} />
      </Section>

      <Section
        id="beyond"
        kicker="BEYOND DESIGNING THE HOUSE"
        title={{ en: "Everything is design.", ja: "暮らしのすべてが、\nデザイン。" }}
        intro={{
          en: "We don't stop at the floor plan. We find your builder, picture your life in the home, and think ahead to its value when you may one day sell. And if you'd like, we help with everything that makes a house feel like yours: furniture, tableware, light, even scent.",
          ja: "間取りで終わりではありません。施工会社を見つけ、そこでの暮らしを思い描き、いつか売るときの価値まで考えます。ご希望があれば、家具、器、明かり、香りまで。家を「自分の家」にするすべてをお手伝いします。",
        }}
        wide
      >
        <div className="mx-auto max-w-3xl">
          <Steps items={beyondSteps} />
        </div>
        <h3 className="title mt-14 text-[1.5rem]">{lang === "ja" ? "必要なら、ここまでサポートします" : "If you'd like, we can help with"}</h3>
        <div className="mt-6">
          <Pills items={everydayDesign} />
        </div>
      </Section>

      <Section
        id="materials"
        kicker="MATERIALS THAT LAST"
        title={{ en: "Made to last,\nand to age well.", ja: "長く使えて、\n味わいが深まる素材。" }}
        intro={{
          en: "We choose fewer things, and better ones: natural materials and skilled hands that look better in twenty years than on the first day. It is the Japanese idea of caring for a home over a lifetime.",
          ja: "数を絞って、良いものを。20年後に、最初の日よりも美しく見える自然素材と職人の仕事を選びます。住まいを一生かけて大切にする、日本の考え方です。",
        }}
        wide
      >
        <Glossary items={lastingMaterials} />
      </Section>

      <Section
        id="value"
        kicker="DESIGN THAT ADDS VALUE"
        title={{ en: "A home you love,\nand an asset that holds its value.", ja: "愛着のある家を、\n価値ある資産に。" }}
        intro={valueIntro}
      >
        <Notes items={valuePoints} />
        <p className="mt-6 text-[0.875rem] leading-relaxed text-navy/60">
          <T ja={valueNote.ja} en={valueNote.en} />
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

      <Section id="process" kicker="HOW IT WORKS" title={{ en: "Six simple steps.", ja: "6つのステップ。" }}>
        <Steps items={homeSteps} />
      </Section>

      <Section id="faq" kicker="FAQ" title={{ en: "Questions,\nanswered.", ja: "よくあるご質問。" }} wide>
        <FaqList lang={lang} groups={faq} />
      </Section>

      <CtaBand
        lang={lang}
        title={{ en: "Let's design your home.", ja: "あなたの住まいを、一緒に。" }}
        line={{ en: "From a small everyday worry to a full renovation or a new build, tell us anything. It all starts with a chat.", ja: "毎日のちょっとしたお悩みから、リノベーション、新築まで。何でもご相談ください。すべては、気軽なおしゃべりから。" }}
      />
    </>
  );
}
