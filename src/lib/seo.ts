import type { Metadata } from "next";

import { site } from "@/content/site";

/**
 * The build-time social card from `app/opengraph-image.tsx`.
 *
 * Next only attaches file-based images to the segment that owns the file, so
 * we reference it explicitly here to give every page a card. Swap the `url`
 * for a static file (e.g. "/images/og.jpg") if you would rather art-direct it.
 */
const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.tagline}`,
};

/**
 * Builds per-page metadata: canonical URL, Open Graph and Twitter cards.
 * `site.url` is a placeholder — change it before deploying.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  /** Route path beginning with "/". */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const fullTitle = path === "/" ? title : `${title} — ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
