import { AreasIndexView, areasIndexMetadata } from "@/views/MoreViews";

export const metadata = areasIndexMetadata("ja");

export default function Page() {
  return <AreasIndexView lang="ja" />;
}
