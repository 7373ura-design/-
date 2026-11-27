import { zhMeta } from "@/lib/tr";
import { AboutView, aboutMetadata } from "@/views/MoreViews";

export const metadata = zhMeta(aboutMetadata("zh"));

export default function Page() {
  return <AboutView lang="zh" />;
}
