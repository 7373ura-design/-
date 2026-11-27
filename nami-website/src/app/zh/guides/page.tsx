import { zhMeta } from "@/lib/tr";
import { GuidesIndexView, guidesIndexMetadata } from "@/views/MoreViews";

export const metadata = zhMeta(guidesIndexMetadata("zh"));

export default function Page() {
  return <GuidesIndexView lang="zh" />;
}
