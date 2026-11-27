import { zhMeta } from "@/lib/tr";
import { AreasIndexView, areasIndexMetadata } from "@/views/MoreViews";

export const metadata = zhMeta(areasIndexMetadata("zh"));

export default function Page() {
  return <AreasIndexView lang="zh" />;
}
