import { BackgroundSection, ContactSection } from "@/components/home/sections";
import Link from "next/link";
import { ChoiceCards, Notes, OverlayHero, Section, Strengths } from "@/components/blocks";
import { T } from "@/lib/i18n";
import { KindWords } from "@/components/more";
import { kindWords } from "@/data/nami";
import { businesses, hero, launchOffer, philosophy, strengths } from "@/data/brand";
import { localHref, type Lang } from "@/lib/lang";

/**
 * The top page (where the business-card QR code lands): a cover picture and
 * what NAMI is, a choice of the two businesses, what they share, our
 * philosophy, who designs, and an enquiry form.
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
        choices={[
          { href: localHref(lang, "/homes"), title: { en: "Homes", ja: "住まい" }, line: { en: "New builds, renovations, ageing in place, granny flats", ja: "新築・リノベーション・エイジングインプレイス・グラニーフラット" } },
          {
            href: localHref(lang, "/commercial"),
            title: { en: "Shops & Offices", ja: "お店・オフィス" },
            line: { en: "Offices, clinics, schools, shops and cafés", ja: "オフィス・クリニック・教室・お店・カフェ" },
          },
        ]}
      />
      <div className="bg-vermilion text-paper">
        <p className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-center gap-x-5 gap-y-1 px-5 py-4 text-center md:px-10">
          <span className="label">{launchOffer.kicker}</span>
          <span className="text-[1.0625rem]">
            <T ja="住まい10軒・お店とオフィス10社限定で、デザインが無料に。" en="Free design for 10 homes and 10 businesses." />
          </span>
          <Link href={localHref(lang, "/homes#offer")} className="label underline underline-offset-4 hover:no-underline">
            <T ja="住まい →" en="Homes →" />
          </Link>
          <Link href={localHref(lang, "/commercial#free-proposal")} className="label underline underline-offset-4 hover:no-underline">
            <T ja="お店・オフィス →" en="Shops & Offices →" />
          </Link>
        </p>
      </div>
      <Section
        id="choose"
        kicker="TWO WAYS WE WORK"
        title={{ en: "Homes.\nShops and offices.", ja: "住まいと、\nお店・オフィス。" }}
        intro={{ en: "Choose the one that fits you to see our services, work and answers to common questions.", ja: "ご希望に近いほうを選ぶと、サービス内容、作品、よくあるご質問をご覧いただけます。" }}
        wide
      >
        <ChoiceCards lang={lang} items={businesses} />
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
