import { zhMeta } from "@/lib/tr";
import { BrandView, brandMetadata } from "@/views/MoreViews";

export const metadata = zhMeta(brandMetadata("zh", "nami-nagomi"));

export default function Page() {
  return <BrandView lang="zh" slug="nami-nagomi" />;
}
