import { BrandSiteView, brandSiteMetadata } from "@/views/BrandParts";

export const metadata = brandSiteMetadata("ja", "nami-nagomi");

export default function Page() {
  return <BrandSiteView lang="ja" slug="nami-nagomi" />;
}
