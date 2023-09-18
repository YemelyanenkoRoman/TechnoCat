import { DirectionsContent } from '@/components/directions/DirectionsContent';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { directions: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = DirectionsContent.find((item) => item.id === params.directions);

  return {
    title: data?.block1.mainTitle,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
