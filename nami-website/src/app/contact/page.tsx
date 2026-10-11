import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SurferMini } from "@/components/illustrations/Surfer";
import { WaveDivider } from "@/components/WaveDivider";
import { Container, SectionLabel } from "@/components/ui";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's create a space that feels like yours. Enquire with NAMI about your home.",
  alternates: { canonical: "/contact" },
};

type Props = { searchParams: Promise<{ service?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { service } = await searchParams;
  const preset = services.find((s) => s.slug === service)?.title;

  return (
    <>
      <section className="relative overflow-hidden bg-cream pt-32 md:pt-44">
        <Container className="grid gap-10 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div data-reveal>
              <SectionLabel>CONTACT</SectionLabel>
            </div>
            <h1 className="mt-8 font-display text-5xl leading-[1.1] text-navy sm:text-6xl lg:text-7xl" data-reveal>
              Let&apos;s create a space
              <br />
              <em className="text-deep">that feels like yours.</em>
            </h1>
            <p className="jp-body mt-8 text-[0.9375rem] text-navy/80" data-reveal>
              住まいのこと、まずはお気軽にご相談ください。
              <br />
              内容を確認のうえ、ご連絡いたします。
            </p>
          </div>
          <div className="relative hidden lg:col-span-5 lg:block" aria-hidden>
            <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-vermilion" />
            <SurferMini bare className="absolute right-24 top-24 w-56" />
          </div>
        </Container>
        <WaveDivider fill="#E9DCC8" accent="#75C9D5" />
      </section>

      <section className="bg-beige py-16 md:py-24" aria-label="Enquiry">
        <Container className="grid gap-12 lg:grid-cols-12">
          <aside className="space-y-10 lg:col-span-4">
            <div>
              <p className="label text-deep">HOW IT WORKS</p>
              <ol className="mt-5 space-y-5">
                {[
                  ["Enquiry", "フォームから、暮らしや空間についてお聞かせください。"],
                  ["Reply", "内容を確認し、メールでご連絡します。"],
                  ["Conversation", "オンラインまたは対面で、詳しくお話を伺います。"],
                ].map(([en, ja], i) => (
                  <li key={en} className="flex gap-4">
                    <span className="font-display text-2xl text-vermilion">0{i + 1}</span>
                    <div>
                      <p className="font-display text-xl text-navy">{en}</p>
                      <p className="jp-body text-sm leading-[1.9] text-navy/75">{ja}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="border-t border-navy/20 pt-8">
              <p className="label text-deep">EMAIL</p>
              <a href={`mailto:${site.email}`} className="link-underline mt-3 inline-block pb-1 font-display text-xl text-navy">
                {site.email}
              </a>
            </div>
          </aside>
          <div className="lg:col-span-8">
            <EnquiryForm defaultProjectType={preset} />
          </div>
        </Container>
      </section>
    </>
  );
}
