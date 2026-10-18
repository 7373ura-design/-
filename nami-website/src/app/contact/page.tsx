import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send NAMI an enquiry. We reply by email.",
  alternates: { canonical: "/contact" },
};

type Props = { searchParams: Promise<{ service?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { service } = await searchParams;
  const preset = services.find((s) => s.slug === service)?.title;

  return (
    <>
      <PageHero
        label="CONTACT"
        heading={{ ja: "お問い合わせ", en: "Enquiry" }}
        sub="START WITH A CONVERSATION"
        intro={{
          ja: "暮らしや空間について、お気軽にお聞かせください。\n内容を確認のうえ、メールでお返事します。",
          en: "Tell us a little about your home. We will reply by email.",
        }}
        art="bridge"
      />

      <section className="section-rule py-16 md:py-24" aria-label="Enquiry">
        <Container className="grid gap-12 lg:grid-cols-12">
          <aside className="order-2 min-w-0 space-y-10 lg:order-1 lg:col-span-4">
            <div>
              <p className="kicker">HOW IT WORKS</p>
              <ol className="mt-5 space-y-5">
                {[
                  ["Enquiry", "フォームから、暮らしや空間についてお聞かせください。", "Tell us about your home and how you live, using the form."],
                  ["Reply", "内容を確認し、メールでご連絡します。", "We read your message and reply by email."],
                  ["Conversation", "オンラインまたは対面で、詳しくお話を伺います。", "We talk in more detail, online or in person."],
                ].map(([step, ja, en], i) => (
                  <li key={step} className="flex gap-4">
                    <span className="kicker mt-1.5 text-vermilion">0{i + 1}.</span>
                    <div>
                      <p className="title text-xl">{step}</p>
                      <p className="jp-body text-sm leading-[1.9] text-navy/75">
                        <T ja={ja} en={en} />
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="border-t border-navy/20 pt-8">
              <p className="kicker">EMAIL</p>
              <a href={`mailto:${site.email}`} className="link-underline mt-3 inline-block pb-1 font-display text-xl text-navy">
                {site.email}
              </a>
            </div>
          </aside>
          <div className="order-1 min-w-0 lg:order-2 lg:col-span-8">
            <EnquiryForm preset={preset} />
          </div>
        </Container>
      </section>
    </>
  );
}
