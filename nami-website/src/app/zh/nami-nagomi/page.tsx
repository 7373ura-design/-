import { zhMeta } from "@/lib/tr";
import { BrandSiteView, brandSiteMetadata } from "@/views/BrandParts";

export const metadata = zhMeta(brandSiteMetadata("zh", "nami-nagomi"));

export default function Page() {
  return <BrandSiteView lang="zh" slug="nami-nagomi" />;
}
