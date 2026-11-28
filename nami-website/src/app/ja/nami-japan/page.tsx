import { BrandSiteView, brandSiteMetadata } from "@/views/BrandParts";

export const metadata = brandSiteMetadata("ja", "nami-japan");

export default function Page() {
  return <BrandSiteView lang="ja" slug="nami-japan" />;
}
