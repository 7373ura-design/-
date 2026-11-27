import { zhMeta } from "@/lib/tr";
import { WorkView, workMetadata, workParams, type WorkProps } from "@/views/WorkView";

export const generateStaticParams = workParams;
export const generateMetadata = async (props: WorkProps) => zhMeta(await workMetadata("zh", props));

export default function Page(props: WorkProps) {
  return <WorkView lang="zh" {...props} />;
}
