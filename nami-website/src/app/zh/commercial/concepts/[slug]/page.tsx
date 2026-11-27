import { zhMeta } from "@/lib/tr";
import { ConceptView, conceptMetadata, conceptParams, type ConceptProps } from "@/views/ConceptView";

export const generateStaticParams = conceptParams;
export const generateMetadata = async (props: ConceptProps) => zhMeta(await conceptMetadata("zh", props));

export default function Page(props: ConceptProps) {
  return <ConceptView lang="zh" {...props} />;
}
