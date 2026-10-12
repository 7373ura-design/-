import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import Image from "next/image";
import { Container, SectionLabel } from "@/components/ui";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { T } from "@/lib/i18n";

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
              <T
                ja={"住まいのこと、まずはお気軽にご相談ください。\n内容を確認のうえ、ご連絡いたします。"}
                en="Tell us about your home. We will read your message and get back to you."
              />
            </p>
          </div>
          <div className="relative hidden lg:col-span-5 lg:block" aria-hidden>
            <Image src="/images/illustrations/story-surfer.jpg" alt="" width={928} height={612} className="w-full feather" />
          </div>
        </Container>
      </section>

      <section className="section-rule bg-cream py-16 md:py-24" aria-label="Enquiry">
        <Container className="grid gap-12 lg:grid-cols-12">
          <aside className="space-y-10 lg:col-span-4">
            <div>
              <p className="label text-deep">HOW IT WORKS</p>
              <ol className="mt-5 space-y-5">
                {[
                  ["Enquiry", "フォームから、暮らしや空間についてお聞かせください。", "Tell us about your home and how you live, using the form."],
                  ["Reply", "内容を確認し、メールでご連絡します。", "We read your message and reply by email."],
                  ["Conversation", "オンラインまたは対面で、詳しくお話を伺います。", "We talk in more detail, online or in person."],
                ].map(([step, ja, en], i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-display text-2xl text-vermilion">0{i + 1}</span>
                    <div>
                      <p className="font-display text-xl text-navy">{step}</p>
                      <p className="jp-body text-sm leading-[1.9] text-navy/75">
                        <T ja={ja} en={en} />
                      </p>
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
