import { WorkView, workMetadata, workParams, type WorkProps } from "@/views/WorkView";

export const generateStaticParams = workParams;
export const generateMetadata = (props: WorkProps) => workMetadata("ja", props);

export default function Page(props: WorkProps) {
  return <WorkView lang="ja" {...props} />;
}
