import { GuidesIndexView, guidesIndexMetadata } from "@/views/MoreViews";

export const metadata = guidesIndexMetadata("ja");

export default function Page() {
  return <GuidesIndexView lang="ja" />;
}
