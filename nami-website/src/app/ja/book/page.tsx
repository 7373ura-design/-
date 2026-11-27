import { BookView, bookMetadata } from "@/views/MoreViews";

export const metadata = bookMetadata("ja");

export default function Page() {
  return <BookView lang="ja" />;
}
