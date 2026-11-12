import { FaqView, faqMetadata } from "@/views/FaqView";

export const metadata = faqMetadata("ja");

export default function Page() {
  return <FaqView lang="ja" />;
}
