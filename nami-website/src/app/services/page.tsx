import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CircleIcon, type IconName } from "@/components/washi";
import { ArrowLink, Container } from "@/components/ui";
import { services } from "@/data/services";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior consultation, concept design, space planning and styling — NAMI services for spaces shaped around the way you live.",
  alternates: { canonical: "/services" },
};

const serviceIcons: IconName[] = ["chat", "pen", "ruler", "chair"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="SERVICES"
        heading={{ ja: "サービス", en: "Services" }}
        sub="FROM ONE ROOM TO A WHOLE HOME"
        art="desk"
        intro={{
          ja: "ひと部屋から家全体まで、最初のアイデアから最終プランまで。\nレイアウト、素材、家具、スタイリングをご一緒に考えます。",
          en: "From one room to a whole home, we guide you from first idea to final plan — layout, materials, furniture, styling.",
        }}
      />

      <div>
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className="section-rule scroll-mt-24 py-16 md:py-20"
            aria-labelledby={`${s.slug}-title`}
          >
            <Container className="max-w-2xl text-center" >
              <div className="flex justify-center" aria-hidden>
                <CircleIcon name={serviceIcons[i]} size="lg" />
              </div>
              <p className="kicker mt-6 text-vermilion">{s.number}.</p>
              <h2 id={`${s.slug}-title`} className="title mt-3 text-3xl md:text-4xl">
                {s.title}
              </h2>
              <p className="subline mt-3 !normal-case !tracking-[0.04em] text-[0.9375rem]">
                <T ja={s.sub.ja} en={s.sub.en} />
              </p>
              <p className="jp-body mt-6 text-[0.9375rem] text-navy/80">
                <T ja={s.whatItIs.ja} en={s.whatItIs.en} />
              </p>
              <ArrowLink href={`/contact?service=${s.slug}`} className="mt-8">
                ENQUIRE
              </ArrowLink>
            </Container>
          </section>
        ))}
      </div>

      {/* Disclaimer */}
      <section className="py-14">
        <Container>
          <div className="border hairline p-6 md:p-8">
            <p className="subline">PLEASE NOTE</p>
            <p className="jp-body mt-4 text-sm leading-[2] text-navy/80 lang-ja" lang="ja">
              NAMIのサービスは、インテリアのご相談・コンセプト・家具配置・スタイリングを中心としています。
              建築設計、建築確認・認証、構造に関わる工事など、資格や登録が必要な業務は、
              適切な資格・許可を有する場合、または有資格の専門家と連携する場合に限り提供します。
            </p>
            <p className="mt-4 text-sm leading-relaxed text-navy/80">
              NAMI focuses on interior consultation, concept design, furniture layout and styling. Architectural, building design, certification or other regulated services will only be offered where
              NAMI (or a partner) is appropriately qualified, licensed and permitted to do so.
            </p>
          </div>
        </Container>
      </section>

    </>
  );
}
