import { DirectionsContent } from "@/components/directions/DirectionsContent";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { directions: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata // parent: Promise<Metadata>
): Promise<Metadata> {
  const data = DirectionsContent.find((item) => item.id === params.directions);

  const resolvedParent = (await parent) || {};

  return {
    title: data?.block1.mainTitle,
    openGraph: {
      ...(resolvedParent.openGraph || {}),
      title: data?.block1.mainTitle || resolvedParent.openGraph?.title,
    } as Metadata["openGraph"],
    twitter: {
      ...(resolvedParent.twitter || {}),
      title: data?.block1.mainTitle || resolvedParent.twitter?.title,
    } as Metadata["twitter"],
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
