import { Metadata } from "next";
import { TemplateString } from "next/dist/lib/metadata/types/metadata-types";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";

interface GetMetadataParams {
  title?: string | TemplateString;
  description?: string;
  images?: string[];
}

export const shareImageUrl =
  "https://downloader.disk.yandex.ru/preview/d01026b299b794e3630ea600891f38be8c27ebc45ed30b3de8904e63468e1e52/6508e01b/-V-O-sAak-ItmAc-zVZjSn7gAuDz87TbBAVgi-BN0FOnUDmC4mVIrjKrrbVDBmOrL8upYgAswrwFpcPf4kpj7w%3D%3D?uid=0&filename=%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%9A%D0%BE%D1%82%28%D0%9B%D0%9E%D0%93%D0%9E%29.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1954x1566";

export const getMetadata = (
  { title, description, images = [shareImageUrl] }: GetMetadataParams,
  parent?: Metadata
): Metadata => {
  const metadata: Omit<Metadata, "openGraph" | "twitter"> & {
    openGraph: OpenGraph;
    twitter: Twitter;
  } = {
    ...parent,
    openGraph: {
      ...parent?.openGraph,
      type: "website",
      images,
    },
    twitter: {
      ...parent?.twitter,
      card: "summary_large_image",
      images,
    },
  };

  if (title) {
    metadata.title = title;
    metadata.openGraph.title = title;
    metadata.twitter.title = title;
  }

  if (description) {
    metadata.description = description;
    metadata.openGraph.description = description;
    metadata.twitter.description = description;
  }

  return metadata;
};
