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
        heading={{ ja: "暮らしを考える、\nヒントを届ける。", en: "Ideas for\nAustralian Living" }}
        sub="NOTES ON HOMES, MATERIALS AND CULTURE"
        art="wave-sun"
        artPosition="50% 70%"
        intro={{
          ja: "日本とオーストラリアの住まい、素材、余白。\n心地よい暮らしのためのヒントを、少しずつお届けします。",
          en: "Homes in Japan and Australia, natural materials and the value of empty space: ideas for living well, shared a little at a time.",
        }}
      />
      <section className="pb-24 md:pb-32" aria-label="Articles">
        <Container>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3 [&_article]:w-auto">
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
