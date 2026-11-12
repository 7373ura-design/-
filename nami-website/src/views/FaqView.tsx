import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui";
import { PostHead } from "@/components/washi";
import { JsonLd } from "@/components/JsonLd";
import { answeredFaq } from "@/data/faq";
import { alternates } from "@/lib/meta";
import type { Lang } from "@/lib/lang";

export function faqMetadata(lang: Lang): Metadata {
  return {
    title: lang === "ja" ? "よくあるご質問" : "FAQ: Japandi Interior Design in Sydney",
    description:
      lang === "ja"
        ? "NAMIのジャパンディ・インテリアデザインについて、費用、期間、対応エリア、進め方など、よくいただくご質問にお答えします。"
        : "Answers to common questions about NAMI's Japandi interior design: services, cost, timing, the areas we cover from Sydney, and how a project works.",
    alternates: alternates(lang, "/faq"),
  };
}

/** Questions and answers, grouped; only answered questions are shown. */
export function FaqView({ lang }: { lang: Lang }) {
  const groups = answeredFaq();
  if (groups.length === 0) notFound();
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang === "ja" ? "ja" : "en-AU",
    mainEntity: groups.flatMap((g) =>
      g.items.map((i) => ({ "@type": "Question", name: i.q[lang], acceptedAnswer: { "@type": "Answer", text: i.a[lang] } })),
    ),
  };
  return (
    <section className="pb-24 pt-32 md:pb-32 md:pt-40" aria-labelledby="faq-h">
      <JsonLd data={ld} />
      <Container>
        <PostHead as="h1" id="faq-h" kicker="FAQ" title={{ ja: "よくあるご質問", en: "Questions" }} />
        <div className="mx-auto mt-14 max-w-3xl">
          {groups.map((g) => (
            <div key={g.title.en} className="mt-14 first:mt-0">
              <h2 className="title text-[1.4rem]">{g.title[lang]}</h2>
              <dl className="mt-5 border-b border-navy/15">
                {g.items.map((i) => (
                  <div key={i.q.en} className="border-t border-navy/15 py-6">
                    <dt className="title text-[1.05rem] !leading-snug">{i.q[lang]}</dt>
                    <dd className="jp-body mt-3 whitespace-pre-line text-[0.9375rem] leading-relaxed text-navy/80">{i.a[lang]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
