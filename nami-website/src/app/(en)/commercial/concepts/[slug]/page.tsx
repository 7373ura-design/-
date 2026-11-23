import { ConceptView, conceptMetadata, conceptParams, type ConceptProps } from "@/views/ConceptView";

export const generateStaticParams = conceptParams;
export const generateMetadata = (props: ConceptProps) => conceptMetadata("en", props);

export default function Page(props: ConceptProps) {
  return <ConceptView lang="en" {...props} />;
}
