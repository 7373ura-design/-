import { WorriesView, worriesMetadata } from "@/views/MoreViews";

export const metadata = worriesMetadata("ja");

export default function Page() {
  return <WorriesView lang="ja" />;
}
