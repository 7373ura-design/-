import { zhMeta } from "@/lib/tr";
import { CommercialView, commercialMetadata } from "@/views/CommercialView";

export const metadata = zhMeta(commercialMetadata("zh"));

export default function Page() {
  return <CommercialView lang="zh" />;
}
