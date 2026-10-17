import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CircleIcon, type IconName } from "@/components/washi";
import { CTASection } from "@/components/CTASection";
import { ArrowLink, Container } from "@/components/ui";
import { services } from "@/data/services";
import { T, type BiList } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior consultation, concept design, space planning and styling — NAMI services for spaces shaped around the way you live.",
  alternates: { canonical: "/services" },
};

function DetailList({ title, items }: { title: string; items: BiList }) {
  const list = (xs: string[]) => (
    <ul className="space-y-2.5">
      {xs.map((item) => (
        <li key={item} className="jp-body flex gap-3 text-sm leading-[1.9] text-navy/85">
          <span aria-hidden className="mt-[0.85em] h-px w-3 shrink-0 bg-vermilion" />
          {item}
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      <h4 className="subline">{title}</h4>
      <T as="div" className="mt-4" ja={list(items.ja)} en={list(items.en)} />
    </div>
  );
}

const serviceIcons: IconName[] = ["chat", "pen", "ruler", "chair"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="SERVICES"
        heading={{ ja: "暮らしを、\n一緒に整える。", en: "Shaping Your Home,\nTogether" }}
        sub="FROM FIRST CONVERSATION TO FINAL TOUCH"
        art="desk"
        intro={{
          ja: "住まいのご相談から、コンセプトづくり、空間プランニング、スタイリングまで。\nその人のライフスタイルに合わせた空間づくりをサポートします。",
          en: "From a first conversation to concept, space planning and styling, we help you create a space that suits the way you live.",
        }}
      />

      {/* index */}
      <nav aria-label="Services">
        <Container>
          <ul className="grid grid-cols-2 border-b hairline md:grid-cols-4">
            {services.map((s) => (
              <li key={s.slug} className="border-t hairline md:border-t-0">
                <a href={`#${s.slug}`} className="group flex items-baseline gap-3 py-5 md:py-6">
                  <span className="kicker text-vermilion">{s.number}.</span>
                  <span className="label link-underline pb-1 text-navy group-hover:text-deep">{s.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <div>
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className="scroll-mt-24 border-b hairline py-20 md:py-28"
            aria-labelledby={`${s.slug}-title`}
          >
            <Container className="max-w-4xl">
              <div className="mb-8 flex justify-center" aria-hidden>
                <CircleIcon name={serviceIcons[i]} size="lg" />
              </div>
              <div>
                <div className="text-center" data-reveal>
                  <p className="kicker"><span className="mr-3 text-vermilion">{s.number}.</span>SERVICE</p>
                  <h2 id={`${s.slug}-title`} className="title mt-4 text-4xl md:text-5xl">
                    {s.title}
                  </h2>
                  <p className="subline mt-3 !normal-case !tracking-[0.04em] text-[0.9375rem]">
                    <T ja={s.sub.ja} en={s.sub.en} />
                  </p>
                  <p className="jp-heading mt-8 text-xl leading-[1.9] text-navy">
                    <T ja={s.summary.ja} en={s.summary.en} />
                  </p>
                </div>

                <div className="mt-10 border-y border-navy/15 py-6" data-reveal>
                  <p className="subline">THE JAPANESE IDEA · {s.idea.term}</p>
                  <p className="jp-body mt-2 text-sm leading-[1.95] text-navy/85">
                    <T ja={s.idea.text.ja} en={s.idea.text.en} />
                  </p>
                </div>

                <div className="mt-12 grid gap-10 border-t hairline pt-10 sm:grid-cols-2" data-reveal>
                  <div className="sm:col-span-2">
                    <h3 className="subline">WHAT IT IS</h3>
                    <p className="jp-body mt-4 text-[0.9375rem] text-navy/85">
                      <T ja={s.whatItIs.ja} en={s.whatItIs.en} />
                    </p>
                  </div>
                  <DetailList title="WHO IT IS FOR" items={s.whoFor} />
                  <DetailList title="WHAT IS INCLUDED" items={s.included} />
                </div>

                <div className="mt-12" data-reveal>
                  <h3 className="subline">TYPICAL PROCESS</h3>
                  <ol className="mt-6 grid gap-px overflow-hidden border hairline bg-navy/15 sm:grid-cols-2 xl:grid-cols-4">
                    {s.process.map((p, j) => (
                      <li key={p.step} className="bg-cream p-5">
                        <span className="label text-vermilion">STEP {j + 1}</span>
                        <p className="title mt-3 text-xl">{p.step}</p>
                        <p className="jp-body mt-2 text-[0.8125rem] leading-[1.9] text-navy/75">
                          <T ja={p.detail.ja} en={p.detail.en} />
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-12 grid gap-10 sm:grid-cols-2" data-reveal>
                  <DetailList title="DELIVERABLES" items={s.deliverables} />
                  <div>
                    <h3 className="subline">PRICING</h3>
                    <p className="title mt-4 text-2xl">Enquire for pricing</p>
                    <p className="jp-body mt-2 text-sm leading-[1.9] text-navy/70">
                      <T ja="内容・規模に合わせてお見積りします。" en="We quote for each project based on its scope and size." />
                    </p>
                    <ArrowLink href={`/contact?service=${s.slug}`} className="mt-6">
                      ENQUIRE
                    </ArrowLink>
                  </div>
                </div>
              </div>
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

      <CTASection />
    </>
  );
}
