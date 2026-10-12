import Image from "next/image";
import { ArrowLink } from "@/components/ui";
import { T } from "@/lib/i18n";

/** Closing call-to-action over the wave, sun and pine-island illustration. */
export function CTASection() {
  return (
    <section className="section-rule relative bg-cream" aria-labelledby="cta-heading">
      <div className="relative mx-auto max-w-[1600px]">
        <div className="relative z-10 px-5 pt-14 md:absolute md:left-[5.5%] md:top-[16%] md:w-[48%] md:p-0">
          <h2
            id="cta-heading"
            className="jp-heading text-[1.75rem] leading-[1.55] text-navy md:text-[clamp(1.5rem,2.7vw,2.6rem)]"
            data-reveal
          >
            <T ja={"部屋の写真を1枚、\n送ってください。"} en={"Send me one photo\nof your room."} />
          </h2>
          <p className="jp-body mt-4 text-sm text-navy/85 md:text-[clamp(0.8rem,1vw,0.95rem)]" data-reveal>
            <T ja="話はそこから始めます。フォームからでも、メールからでも。" en="We can start from there, by form or by email." />
          </p>
          <div className="mt-6 md:mt-[2vw]" data-reveal>
            <ArrowLink href="/contact" variant="pill">
              CONTACT
            </ArrowLink>
          </div>
        </div>
        <div className="relative -mt-6 aspect-[1644/526] w-full md:mt-0">
          <Image src="/images/illustrations/cta-wave.jpg" alt="" fill sizes="100vw" className="object-cover object-right" />
        </div>
      </div>
    </section>
  );
}
