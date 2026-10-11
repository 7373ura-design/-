import Image from "next/image";
import { ArrowLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-cream pb-28 pt-40 text-center md:pt-48">
      <Container>
        <Image src="/images/illustrations/story-surfer.jpg" alt="" width={928} height={612} className="mx-auto w-full max-w-md feather" />
        <p className="label mt-10 text-deep">404 — PAGE NOT FOUND</p>
        <h1 className="jp-heading mt-6 text-3xl text-navy md:text-4xl">波にさらわれてしまったようです。</h1>
        <p className="jp-body mt-6 text-[0.9375rem] text-navy/75">お探しのページは見つかりませんでした。</p>
        <div className="mt-10">
          <ArrowLink href="/" variant="outline">
            BACK TO HOME
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
