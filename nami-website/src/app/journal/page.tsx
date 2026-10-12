import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { JournalCard } from "@/components/cards";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui";
import { getArticles } from "@/data/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Ideas for living — Japanese and Australian homes, natural materials, Ma, and small-space living.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  const articles = getArticles();
  return (
    <>
      <PageHero
        label="JOURNAL"
        heading={{ ja: "暮らしを考える、\nヒントを届ける。", en: "Ideas for\neveryday living." }}
        intro={{
          ja: "日本とオーストラリアの家について、\n調べたことや考えたことのメモを、少しずつ載せていきます。",
          en: "Notes on Japanese and Australian homes: things I’ve looked into and thought about, added a little at a time.",
        }}
      />
      <section className="bg-cream pb-24 md:pb-32" aria-label="Articles">
        <Container>
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 [&_article]:w-auto">
            {articles.map((a, i) => (
              <JournalCard key={a.slug} article={a} index={i % 3} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
