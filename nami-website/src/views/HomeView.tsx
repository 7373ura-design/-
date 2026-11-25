import { BackgroundSection, ContactSection } from "@/components/home/sections";
import { ChoiceCards, OverlayHero, Section, Strengths } from "@/components/blocks";
import { businesses, hero, philosophy, strengths } from "@/data/brand";
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
        eyebrow={{ en: "NAMI Interior Design · Sydney", ja: "NAMI インテリアデザイン · シドニー" }}
        title={{ en: "Japandi interior design\nfor homes, shops\nand offices.", ja: "住まいと、\nお店・オフィスに、\nジャパンディを。" }}
        body={hero.intro}
        image={{ src: "/images/washi/shoji.jpg", alt: "Woodblock-style picture of a quiet Japanese room: an open shoji screen, a low timber bench with a vase, and a gum-tree landscape beyond", position: "35% 50%" }}
        choices={[
          { href: localHref(lang, "/homes"), title: { en: "Homes", ja: "住まい" }, line: { en: "New builds, renovations, ageing in place, granny flats", ja: "新築・リノベーション・エイジングインプレイス・グラニーフラット" } },
          {
            href: localHref(lang, "/commercial"),
            title: { en: "Shops & Offices", ja: "お店・オフィス" },
            line: { en: "Offices, clinics, schools, shops and cafés", ja: "オフィス・クリニック・教室・お店・カフェ" },
          },
        ]}
      />
      <Section
        id="choose"
        kicker="TWO WAYS WE WORK"
        title={{ en: "Homes.\nShops and offices.", ja: "住まいと、\nお店・オフィス。" }}
        intro={{ en: "Choose the one that fits you to see our services, work and answers to common questions.", ja: "ご希望に近いほうを選ぶと、サービス内容、作品、よくあるご質問をご覧いただけます。" }}
        wide
      >
        <ChoiceCards lang={lang} items={businesses} />
      </Section>
      <Section id="why" kicker="WHY NAMI" title={{ en: "Japanese calm,\nmade for Australia.", ja: "日本の落ち着きを、\nオーストラリアの暮らしに。" }} wide>
        <Strengths items={strengths} />
      </Section>
      <Section id="philosophy" kicker="OUR PHILOSOPHY" title={philosophy.title} intro={philosophy.body} />
      <div id="about" className="scroll-mt-16">
        <BackgroundSection />
      </div>
      <ContactSection lang={lang} />
    </>
  );
}
