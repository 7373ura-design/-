import Image from "next/image";
import { ArrowLink, Container } from "@/components/ui";
import { T } from "@/lib/i18n";

export default function NotFound() {
  return (
    <section className="bg-cream pb-28 pt-40 text-center md:pt-48">
      <Container>
        <Image src="/images/illustrations/story-surfer.jpg" alt="" width={928} height={612} className="mx-auto w-full max-w-md feather" />
        <p className="label mt-10 text-deep">404 — PAGE NOT FOUND</p>
        <h1 className="jp-heading mt-6 text-3xl text-navy md:text-4xl">
          <T ja="波にさらわれてしまったようです。" en="This page seems to have been washed away." />
        </h1>
        <p className="jp-body mt-6 text-[0.9375rem] text-navy/75">
          <T ja="お探しのページは見つかりませんでした。" en="We couldn’t find the page you were looking for." />
        </p>
        <div className="mt-10">
          <ArrowLink href="/" variant="outline">
            BACK TO HOME
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
