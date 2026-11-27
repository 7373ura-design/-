import { BackgroundSection, ContactSection } from "@/components/home/sections";
import Link from "next/link";
import { Finder, Notes, OverlayHero, Section, Strengths } from "@/components/blocks";
import { T } from "@/lib/i18n";
import { KindWords } from "@/components/more";
import { BusinessRows } from "@/views/BrandParts";
import { kindWords } from "@/data/nami";
import { brands } from "@/data/brands";
import { brandSites, groupFinder } from "@/data/sites";
import { hero, launchOffer, philosophy, strengths } from "@/data/brand";
import { localHref, type Lang } from "@/lib/lang";

/**
 * The NAMI top page (where the business-card QR code lands). NAMI is the
 * parent company; its four businesses each have their own site. This page
 * says what NAMI is and sends each visitor to the right business.
 */
export function HomeView({ lang }: { lang: Lang }) {
  return (
    <>
      <OverlayHero
        id="hero-heading"
        eyebrow={{ en: "NAMI · Interior Design · Sydney", ja: "NAMI · インテリアデザイン · シドニー" }}
        title={{ en: "A new wave\nof interior design.", ja: "インテリアに、\n新しい波を。" }}
        body={hero.intro}
        image={{ src: "/images/portfolio/simply-special/01.jpg", alt: "Simply Special by NAMI: a timber deck looking out over the city and the sky", position: "50% 60%" }}
        choices={brandSites.map((x) => ({
          href: localHref(lang, `/${x.slug}`),
          title: { en: brands.find((b) => b.slug === x.slug)!.name, ja: brands.find((b) => b.slug === x.slug)!.name },
          line: x.forWho,
        }))}
      />
      <div className="bg-vermilion text-paper">
        <p className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-center gap-x-5 gap-y-1 px-5 py-4 text-center md:px-10">
          <span className="label">{launchOffer.kicker}</span>
          <span className="text-[1.0625rem]">
            <T ja="住まい10軒・お店とオフィス10社限定で、デザインが無料に。" en="Free design for 10 homes and 10 businesses." />
          </span>
          <Link href={localHref(lang, "/nami-home#offer")} className="label underline underline-offset-4 hover:no-underline">
            <T ja="NAMI Home →" en="NAMI Home →" />
          </Link>
          <Link href={localHref(lang, "/nami-works#free-proposal")} className="label underline underline-offset-4 hover:no-underline">
            <T ja="NAMI Works →" en="NAMI Works →" />
          </Link>
        </p>
      </div>
      <Section
        id="businesses"
        kicker="OUR BUSINESSES"
        title={{ en: "One NAMI,\nfour businesses.", ja: "ひとつのNAMIと、\n4つの事業。" }}
        intro={{
          en: "NAMI is an interior design company in Sydney. Inside it are four small businesses, each with its own site, services and focus. Choose the one that fits you.",
          ja: "NAMIはシドニーのインテリアデザイン会社です。その中に4つの小さな事業があり、それぞれにサイト、サービス、得意分野があります。あなたに合うものを選んでください。",
        }}
        wide
      >
        <BusinessRows lang={lang} />
      </Section>
      <Section
        id="find"
        kicker="NOT SURE WHERE TO LOOK?"
        title={{ en: "Start from\nyour worry.", ja: "お悩みから\n探す。" }}
        intro={{ en: "Find the line closest to you. It takes you to the business that can help.", ja: "いちばん近いものを選ぶと、お手伝いできる事業のサイトにつながります。" }}
      >
        <Finder lang={lang} items={groupFinder} />
      </Section>
      <Section id="why" kicker="ABOUT NAMI" title={{ en: "Why choose NAMI?", ja: "NAMIが選ばれる理由。" }} wide>
        <Strengths items={strengths} />
      </Section>
      <Section id="approach" kicker="OUR APPROACH" title={philosophy.title} intro={philosophy.body}>
        <Notes items={philosophy.points} />
      </Section>
      <Section id="kind-words" kicker="KIND WORDS" title={{ en: "Kind words.", ja: "お客様の声。" }} wide>
        <KindWords items={kindWords.slice(2, 6)} />
        <p className="mt-10 text-center">
          <Link href={localHref(lang, "/about#kind-words")} className="label text-vermilion hover:underline">
            <T ja="NAMIについて、もっと見る →" en="More about NAMI →" />
          </Link>
        </p>
      </Section>
      <div id="about" className="scroll-mt-16">
        <BackgroundSection />
      </div>
      <ContactSection lang={lang} />
    </>
  );
}
