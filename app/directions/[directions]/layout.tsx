import { DirectionsContent } from "@/components/directions/DirectionsContent";
import { getMetadata } from "@/utils";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { directions: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: Promise<Metadata>
): Promise<Metadata> {
  const data = DirectionsContent.find((item) => item.id === params.directions);

  return getMetadata(
    {
      title: data?.block1.mainTitle,
      description: "add you description",
    },
    await parent
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
