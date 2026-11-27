import { BrandView, brandMetadata } from "@/views/MoreViews";

export const metadata = brandMetadata("en", "nami-niwa");

export default function Page() {
  return <BrandView lang="en" slug="nami-niwa" />;
}
