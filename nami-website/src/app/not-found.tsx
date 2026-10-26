import Image from "next/image";
import { ArrowLink, Container } from "@/components/ui";
import { T } from "@/lib/i18n";

export default function NotFound() {
  return (
    <section className="pb-28 pt-40 text-center md:pt-48">
      <Container>
        <Image src="/images/washi/wave-sun.jpg" alt="" width={2160} height={1119} className="mx-auto w-full max-w-md" />
        <p className="label mt-10 text-deep">404 — PAGE NOT FOUND</p>
        <h1 className="title mt-6 text-3xl md:text-4xl">
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
