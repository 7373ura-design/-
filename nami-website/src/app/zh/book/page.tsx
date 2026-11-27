import { zhMeta } from "@/lib/tr";
import { BookView, bookMetadata } from "@/views/MoreViews";

export const metadata = zhMeta(bookMetadata("zh"));

export default function Page() {
  return <BookView lang="zh" />;
}
