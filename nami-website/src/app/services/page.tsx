import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
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
      <h4 className="label text-deep">{title}</h4>
      <T as="div" className="mt-4" ja={list(items.ja)} en={list(items.en)} />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="SERVICES"
        heading={{ ja: "暮らしを、\n一緒に整える。", en: "Shaping your home,\ntogether." }}
        intro={{
          ja: "住まいのご相談から、コンセプトづくり、空間プランニング、スタイリングまで。\nその人のライフスタイルに合わせた空間づくりをサポートします。",
          en: "From a first conversation to concept, space planning and styling, we help you create a space that suits the way you live.",
        }}
      />

      {/* index */}
      <nav aria-label="Services" className="bg-paper">
        <Container>
          <ul className="grid grid-cols-2 border-b hairline md:grid-cols-4">
            {services.map((s) => (
              <li key={s.slug} className="border-t hairline md:border-t-0">
                <a href={`#${s.slug}`} className="group flex items-baseline gap-3 py-5 md:py-6">
                  <span className="font-display text-lg text-vermilion">{s.number}</span>
                  <span className="label link-underline pb-1 text-navy group-hover:text-deep">{s.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <div className="bg-paper">
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className="scroll-mt-24 border-b hairline py-20 md:py-28"
            aria-labelledby={`${s.slug}-title`}
          >
            <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2 lg:col-start-8" : ""}`}>
                <div className="lg:sticky lg:top-28">
                  <Photo image={s.image} className="aspect-[4/5]" sizes="(min-width: 1024px) 40vw, 100vw" />
                </div>
              </div>
              <div className={`lg:col-span-7 ${i % 2 ? "lg:order-1" : ""}`}>
                <div data-reveal>
                  <p className="font-display text-6xl text-vermilion md:text-7xl">{s.number}</p>
                  <h2 id={`${s.slug}-title`} className="mt-4 font-display text-4xl text-navy md:text-5xl">
                    {s.title}
                  </h2>
                  <p className="jp-heading mt-3 text-lg text-deep">
                    <T ja={s.sub.ja} en={s.sub.en} />
                  </p>
                  <p className="jp-heading mt-8 text-xl leading-[1.9] text-navy">
                    <T ja={s.summary.ja} en={s.summary.en} />
                  </p>
                </div>

                <div className="mt-10 border-l-2 border-vermilion bg-cream/70 px-5 py-4" data-reveal>
                  <p className="label text-deep">THE JAPANESE IDEA · {s.idea.term}</p>
                  <p className="jp-body mt-2 text-sm leading-[1.95] text-navy/85">
                    <T ja={s.idea.text.ja} en={s.idea.text.en} />
                  </p>
                </div>

                <div className="mt-12 grid gap-10 border-t hairline pt-10 sm:grid-cols-2" data-reveal>
                  <div className="sm:col-span-2">
                    <h3 className="label text-deep">WHAT IT IS</h3>
                    <p className="jp-body mt-4 text-[0.9375rem] text-navy/85">
                      <T ja={s.whatItIs.ja} en={s.whatItIs.en} />
                    </p>
                  </div>
                  <DetailList title="WHO IT IS FOR" items={s.whoFor} />
                  <DetailList title="WHAT IS INCLUDED" items={s.included} />
                </div>

                <div className="mt-12" data-reveal>
                  <h3 className="label text-deep">TYPICAL PROCESS</h3>
                  <ol className="mt-6 grid gap-px overflow-hidden border hairline bg-navy/15 sm:grid-cols-2 xl:grid-cols-4">
                    {s.process.map((p, j) => (
                      <li key={p.step} className="bg-paper p-5">
                        <span className="label text-vermilion">STEP {j + 1}</span>
                        <p className="mt-3 font-display text-xl text-navy">{p.step}</p>
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
                    <h3 className="label text-deep">PRICING</h3>
                    <p className="mt-4 font-display text-2xl text-navy">Enquire for pricing</p>
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
      <section className="bg-paper py-14">
        <Container>
          <div className="border hairline bg-cream p-6 md:p-8">
            <p className="label text-deep">PLEASE NOTE</p>
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
