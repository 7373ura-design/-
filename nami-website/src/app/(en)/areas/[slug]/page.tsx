import { AreaView, areaMetadata, areaParams, type SlugProps } from "@/views/MoreViews";

export const generateStaticParams = areaParams;
export const generateMetadata = (props: SlugProps) => areaMetadata("en", props);

export default function Page(props: SlugProps) {
  return <AreaView lang="en" {...props} />;
}
