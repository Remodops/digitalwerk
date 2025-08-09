import type { Metadata } from "next";
import { SITE } from "./config";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.defaultDescription,
  openGraph: {
    title: SITE.name,
    description: SITE.defaultDescription,
    url: SITE.baseUrl,
    siteName: SITE.name,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function withPageMeta(page: {
  title?: string;
  description?: string;
} = {}): Metadata {
  const title = page.title || SITE.name;
  const description = page.description || SITE.defaultDescription;
  return {
    ...defaultMetadata,
    title,
    description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
    },
  } satisfies Metadata;
}


