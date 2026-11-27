import { HomesView, homesMetadata } from "@/views/HomesView";

export const metadata = homesMetadata("ja");

export default function Page() {
  return <HomesView lang="ja" />;
}
