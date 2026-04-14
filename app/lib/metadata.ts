import type { Metadata } from "next";
import { siteDescription, siteKeywords, siteName, siteUrl } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const canonical = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords: [...siteKeywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      type: "website",
      images: [{ url: `${siteUrl}/opengraph-image` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/opengraph-image`],
    },
    other: {
      "theme-color": "#08111d",
    },
    metadataBase: new URL(siteUrl),
  };
}

export const defaultMetadata: Metadata = createPageMetadata({
  title: "DM Stack Labs | Web Development Agency & Custom Software",
  description: siteDescription,
  path: "/",
  keywords: [
    "web development agency",
    "custom website development",
    "full-stack web development",
    "UI/UX design",
    "business automation solutions",
  ],
});
