import { zhMeta } from "@/lib/tr";
import { HomesView, homesMetadata } from "@/views/HomesView";

export const metadata = zhMeta(homesMetadata("zh"));

export default function Page() {
  return <HomesView lang="zh" />;
}
