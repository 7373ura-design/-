import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui";
import { PostHead } from "@/components/washi";
import { JsonLd } from "@/components/JsonLd";
import { answeredFaq } from "@/data/faq";
import { alternates } from "@/lib/meta";
import { localHref, type Lang } from "@/lib/lang";
import { breadcrumbLd } from "@/components/JsonLd";
import { TextLink } from "@/components/ui";

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

/** An answer: paragraphs split by blank lines; "- " lines a list, "1. " lines a numbered list. */
function Answer({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((block, b) => {
        const lines = block.split("\n");
        const bullets = lines.filter((l) => l.startsWith("- "));
        const steps = lines.filter((l) => /^\d+\. /.test(l));
        const intro = lines.filter((l) => !l.startsWith("- ") && !/^\d+\. /.test(l)).join(" ");
        return (
          <div key={b} className={b ? "mt-3" : ""}>
            {intro && <p>{intro}</p>}
            {bullets.length > 0 && (
              <ul className="mt-1 list-disc pl-5">
                {bullets.map((l) => (
                  <li key={l}>{l.slice(2)}</li>
                ))}
              </ul>
            )}
            {steps.length > 0 && (
              <ol className="mt-1 list-decimal pl-5">
                {steps.map((l) => (
                  <li key={l}>{l.replace(/^\d+\. /, "")}</li>
                ))}
              </ol>
            )}
          </div>
        );
      })}
    </>
  );
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
      <JsonLd data={[ld, breadcrumbLd(lang, [{ name: lang === "ja" ? "よくあるご質問" : "FAQ", path: "/faq" }])]} />
      <Container>
        <PostHead as="h1" id="faq-h" kicker="FAQ" title={{ ja: "よくあるご質問", en: "Questions" }} />
        <div className="mx-auto mt-14 max-w-3xl">
          {groups.map((g) => (
            <div key={g.title.en} className="mt-14 first:mt-0">
              <h2 className="title text-[1.4rem]">{g.title[lang]}</h2>
              <dl className="mt-5 border-b border-navy/15">
                {g.items.map((i) => (
                  <div key={i.q.en} className="border-t border-navy/15 py-6">
                    <dt className="title text-[1.2rem] !leading-snug">{i.q[lang]}</dt>
                    <dd className="jp-body mt-3 text-[1.0625rem] leading-relaxed text-navy/80">
                      <Answer text={i.a[lang]} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
          <p className="jp-body mt-14 text-center text-[1.0625rem] text-navy/80">
            {lang === "ja" ? "ほかにも気になることがあれば、お気軽にお問い合わせください。" : "Have another question? We are happy to help."}
          </p>
          <div className="mt-6 text-center">
            <TextLink href={localHref(lang, "/#contact")}>{lang === "ja" ? "お問い合わせ" : "Contact us"}</TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
