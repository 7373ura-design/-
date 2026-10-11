import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import Image from "next/image";
import { JapanAustraliaSection, MeaningsFull } from "@/components/about-sections";
import { PrincipleCard } from "@/components/cards";
import { CTASection } from "@/components/CTASection";
import { Container, Lines, SectionHeader } from "@/components/ui";
import { approach, principles, story } from "@/data/brand";

export const metadata: Metadata = {
  title: "About NAMI",
  description:
    "NAMI — 波・並・Nest And Memories Inside. The story behind a Japanese-Australian interior design brand.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="ABOUT NAMI"
        heading={["波のように生きる、", "空間をつくる。"]}
        intro={"NAMIは、日本の美意識とオーストラリアの暮らしを\nつなぐインテリアデザインブランドです。"}
        art={
          <Image
            src="/images/illustrations/story-surfer.jpg"
            alt="NAMIの波乗りの女の子"
            width={928}
            height={612}
            priority
            className="w-full feather"
          />
        }
      />

      {/* NAMIとは */}
      <section className="bg-paper py-20 md:py-28" aria-labelledby="what-heading">
        <Container className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Photo
              image={{
                src: "/images/projects/p1.jpg",
                alt: "A coastal living room with timber ceiling and wide windows to the sea",
              }}
              className="aspect-[4/5] rounded-tr-[120px]"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div id="what-heading">
              <SectionHeader label="WHAT IS NAMI" heading={["NAMIとは"]} />
            </div>
            <div className="jp-body mt-8 space-y-6 text-[0.9375rem] text-navy/85">
              {story.body.map((p, i) => (
                <p key={i} data-reveal>
                  <Lines text={p} />
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <MeaningsFull />

      <JapanAustraliaSection />

      {/* Philosophy */}
      <section className="border-y hairline bg-paper py-20 md:py-28" aria-labelledby="philosophy-heading">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" id="philosophy-heading">
              <SectionHeader label="OUR PHILOSOPHY" heading={approach.heading} />
            </div>
            <p className="jp-body text-[0.9375rem] text-navy/80 lg:col-span-5" data-reveal>
              <Lines text={approach.body} />
            </p>
          </div>
          <ul className="mt-14 grid md:mt-20 md:grid-cols-5 md:[&>li:first-child]:border-l-0 md:[&>li:first-child]:pl-0">
            {principles.map((p, i) => (
              <PrincipleCard key={p.key} principle={p} index={i} />
            ))}
          </ul>
        </Container>
      </section>

      {/* Founder — intentionally modest; no invented credentials */}
      <section className="bg-cream py-20 md:py-28" aria-labelledby="founder-heading">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div
              className="relative flex aspect-[4/5] items-end overflow-hidden bg-beige p-6"
              role="img"
              aria-label="Placeholder for a portrait of the founder"
            >
              <span className="absolute right-6 top-6 h-16 w-16 rounded-full bg-vermilion" aria-hidden />
              <span className="label text-navy/60">PORTRAIT — COMING SOON</span>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div id="founder-heading">
              <SectionHeader label="FOUNDER" heading={["名前を背負って、", "空間をつくる。"]} />
            </div>
            <div className="jp-body mt-8 space-y-6 text-[0.9375rem] text-navy/85" data-reveal>
              <p>
                NAMIは、東京・杉並をルーツに持つ創業者の
                <br />
                「日本とオーストラリア、両方の良さを生かした空間をつくりたい」
                <br />
                という想いから始まりました。
              </p>
              <p>
                NAMIという名前は、自分の名前「Nanami」の一部から。
                <br />
                自分の名前を背負い、責任を持って
                <br />
                一つひとつの空間に向き合います。
              </p>
            </div>
            <p className="mt-10 font-display text-3xl tracking-[0.12em] text-navy" data-reveal>
              Nanami
              <span className="label ml-4 align-middle text-deep">FOUNDER, NAMI</span>
            </p>
            {/* TODO: add the founder's background in their own words once confirmed. */}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
