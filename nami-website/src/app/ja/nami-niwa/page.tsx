import { BrandView, brandMetadata } from "@/views/MoreViews";

export const metadata = brandMetadata("ja", "nami-niwa");

export default function Page() {
  return <BrandView lang="ja" slug="nami-niwa" />;
}
