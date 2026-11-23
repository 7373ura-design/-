import { CommercialView, commercialMetadata } from "@/views/CommercialView";

export const metadata = commercialMetadata("ja");

export default function Page() {
  return <CommercialView lang="ja" />;
}
