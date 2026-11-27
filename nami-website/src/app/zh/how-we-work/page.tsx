import { zhMeta } from "@/lib/tr";
import { WorriesView, worriesMetadata } from "@/views/MoreViews";

export const metadata = zhMeta(worriesMetadata("zh"));

export default function Page() {
  return <WorriesView lang="zh" />;
}
