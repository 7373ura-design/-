import { AboutView, aboutMetadata } from "@/views/MoreViews";

export const metadata = aboutMetadata("ja");

export default function Page() {
  return <AboutView lang="ja" />;
}
