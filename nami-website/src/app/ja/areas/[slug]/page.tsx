import { AreaView, areaMetadata, areaParams, type SlugProps } from "@/views/MoreViews";

export const generateStaticParams = areaParams;
export const generateMetadata = (props: SlugProps) => areaMetadata("ja", props);

export default function Page(props: SlugProps) {
  return <AreaView lang="ja" {...props} />;
}
