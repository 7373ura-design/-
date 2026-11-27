import type { Metadata } from "next";
import { site as site_ } from "@/data/site";
import { launchOffer } from "@/data/brand";
import { CtaBand, FaqList, Finder, OverlayHero, Pills, Section, Notes, Steps, StoryCard, faqLd } from "@/components/blocks";
import { getBrandSite } from "@/data/sites";
import { guides } from "@/data/guides";
import { LinkList } from "@/components/more";
import { OtherBusinesses } from "@/views/BrandParts";
import { KindWords, ServiceCards } from "@/components/more";
import { afterCare, kindWords } from "@/data/nami";
import { homeServicesList } from "@/data/services";
import { brands } from "@/data/brands";
import Link from "next/link";
import { JsonLd, breadcrumbLd, serviceLd } from "@/components/JsonLd";
import { homeStyles, homesHero, smallThings } from "@/data/homes";
import { T } from "@/lib/i18n";
import { answeredFaq } from "@/data/faq";
import { getWorks } from "@/data/works";
import { alternates } from "@/lib/meta";
import { localHref, type Lang } from "@/lib/lang";
import { tr } from "@/lib/tr";

export function homesMetadata(lang: Lang): Metadata {
  return lang === "ja"
    ? {
        title: "NAMI Home｜住まいのインテリアデザイン（新築・リノベーション）シドニー",
        description:
          "シドニー拠点のNAMIによる、ジャパンディの住まいのデザイン。キッチン、浴室、檜風呂、リノベーション、新築、庭。1部屋のスタイリングから家まるごとまで。檜・障子・畳・和紙など長く使える素材と日本の要素で、住まいの価値も考えたデザインを。日本出身のデザイナーが担当します。",
        alternates: alternates(lang, "/nami-home"),
      }
    : {
        title: "NAMI Home | Home Interior Design in Sydney: New Builds & Renovations",
        description:
          "Japandi interior design for homes in Sydney: kitchens, bathrooms, hinoki baths, renovations, new builds and gardens. Hinoki, solid timber, shoji and washi that last, designed with your property's value in mind, by a designer from Japan.",
        alternates: alternates(lang, "/nami-home"),
      };
}

/** Homes: launch offer, services (each with its own page), styles, worries, projects, kind words and FAQ. */
export function HomesView({ lang }: { lang: Lang }) {
  const works = getWorks();
  const faq = answeredFaq();
  const site = getBrandSite("nami-home")!;
  const brand = brands.find((b) => b.slug === "nami-home")!;
  const rel = guides.filter((g) => brand.guides.includes(g.slug));
  return (
    <>
      <JsonLd
        data={[
          serviceLd(lang, {
            path: "/nami-home",
            name: "NAMI Home",
            serviceType: "Residential interior design",
            description: tr(homesHero.body, lang),
            offers: homeServicesList.filter((s) => brand.services.includes(s.slug)).map((s) => tr(s.title, lang)),
          }),
          faqLd(lang, faq.flatMap((g) => g.items)),
          breadcrumbLd(lang, [{ name: "NAMI Home", path: "/nami-home" }]),
        ]}
      />
      <OverlayHero
        id="homes-h"
        eyebrow={{ en: "NAMI Home · Interior Design · Sydney", ja: "NAMI Home · 住まいのインテリアデザイン · シドニー" }}
        title={{ en: "Interiors for\nthe way you live.", ja: "暮らし方に合わせた、\n住まいのデザイン。" }}
        body={homesHero.body}
        image={{ src: "/images/portfolio/living-in-green/06.jpg", alt: "Living in Green by NAMI: a bright living room opening through wide glass doors onto a timber deck and garden", position: "50% 55%" }}
        links={[
          { href: "#find", label: { en: "Find what you need", ja: "お悩みから探す" } },
          { href: localHref(lang, "/book"), label: { en: "Book a free consultation", ja: "無料相談を予約する" } },
        ]}
        caption="LIVING IN GREEN"
      />

      <Section id="find" kicker="START HERE" title={{ en: "What would you\nlike to change?", ja: "どんなことで\nお困りですか?" }} intro={{ en: "Choose the one closest to you. Each link goes to the page that answers it.", ja: "近いものを選んでください。それぞれ、答えが書いてあるページにつながっています。" }}>
        <Finder lang={lang} items={site.finder} />
      </Section>

      <Section id="offer" kicker={launchOffer.kicker} title={launchOffer.title} intro={launchOffer.body}>
        <Notes items={launchOffer.includes} />
        <p className="mt-6 text-[1.0625rem]">
          <T ja={launchOffer.cta.ja} en={launchOffer.cta.en} />
        </p>
        <p className="mt-4 flex flex-wrap gap-3">
          <a href={`mailto:${site_.email}`} className="label inline-flex items-center gap-2 bg-navy px-6 py-3.5 text-paper transition-colors hover:bg-deep">
            {tr({ ja: "メールする", en: "Email us" }, lang)} →
          </a>
          <a href={site_.instagram} target="_blank" rel="noopener noreferrer" className="label inline-flex items-center gap-2 border border-navy px-6 py-3.5 text-navy transition-colors hover:bg-navy hover:text-paper">
            Instagram DM →
          </a>
        </p>
      </Section>

      <Section
        id="services"
        kicker="SERVICES"
        title={{ en: "From one room\nto the whole home.", ja: "1部屋から、\n家まるごとまで。" }}
        intro={{ en: "Choose a service to see what's included, example ideas and photos.", ja: "サービスを選ぶと、内容、アイデアの例、写真をご覧いただけます。" }}
        wide
      >
        <ServiceCards lang={lang} items={homeServicesList.filter((s) => brand.services.includes(s.slug))} />
      </Section>

      <Section
        id="styles"
        kicker="ANY STYLE YOU LOVE"
        title={{ en: "Japanese, and much more.", ja: "和のかたちも、\nそれ以外も。" }}
        intro={{
          en: "Traditional or modern Japanese, Japan mixed with another country's style, or no Japanese touch at all. We start with how you live and what you like.",
          ja: "昔ながらの和も、モダンな和も、日本とほかの国を合わせたスタイルも、和にこだわらないデザインも。暮らし方とお好みから始めます。",
        }}
        wide
      >
        <Pills items={homeStyles} />
        <p className="jp-body mx-auto mt-14 max-w-3xl text-[1.0625rem] text-navy/80">
          <T ja={smallThings.ja} en={smallThings.en} />
        </p>
      </Section>

      <Section id="process" kicker="HOW IT WORKS" title={{ en: "Designed by NAMI.\nBuilders found through Japan Homes.", ja: "デザインはNAMI、\n施工会社はジャパンホームズを通して。" }}>
        <Steps items={site.steps} />
        <p className="mt-8">
          <Link href={localHref(lang, "/how-we-work")} className="label text-vermilion hover:underline">
            {tr({ ja: "段階ごとのお悩みと、お手伝いを見る →", en: "See how we help at every stage →" }, lang)}
          </Link>
        </p>
      </Section>

      <Section id="aftercare" kicker="AFTER THE DESIGN" title={afterCare.title} intro={afterCare.body}>
        <Notes items={afterCare.points} />
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

      <Section id="kind-words" kicker="KIND WORDS" title={{ en: "Kind words.", ja: "お客様の声。" }} wide>
        <KindWords items={kindWords.filter((k) => k.group === "homes")} />
      </Section>

      <Section id="faq" kicker="FAQ" title={{ en: "Questions,\nanswered.", ja: "よくあるご質問。" }} wide>
        <FaqList lang={lang} groups={faq} />
      </Section>

      <Section id="guides" kicker="GUIDES" title={{ en: "Helpful guides.", ja: "お役立ちガイド。" }}>
        <div className="mt-8">
          <LinkList items={rel.map((g) => ({ href: localHref(lang, `/guides/${g.slug}`), label: tr(g.title, lang) }))} />
        </div>
      </Section>

      <OtherBusinesses lang={lang} current="nami-home" />

      <CtaBand
        lang={lang}
        title={{ en: "Let's design your home.", ja: "あなたの住まいを、一緒に。" }}
        line={{ en: "From a small everyday worry to a full renovation or a new build, tell us anything. It all starts with a chat.", ja: "毎日のちょっとしたお悩みから、リノベーション、新築まで。何でもご相談ください。すべては、気軽なおしゃべりから。" }}
      />
    </>
  );
}
