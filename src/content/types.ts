/**
 * Content types for the Cove template.
 *
 * Everything a buyer needs to rebrand lives in `src/content/*` and is typed
 * here, so mistakes surface at build time rather than in the browser.
 */

/** The seven hand-drawn SVG motifs shipped with the template. */
export type ArtworkMotif =
  | "ripple"
  | "botanical"
  | "stone"
  | "horizon"
  | "bloom"
  | "mineral"
  | "flow";

/** Natural tone families. Each maps to a set of CSS vars in `globals.css`. */
export type ArtworkTone = "sage" | "clay" | "sand" | "olive" | "stone";

/**
 * Artwork is either generated locally (default) or a real image file.
 *
 * To swap in photography, replace the entry with:
 *   { image: "/images/deep-rest.jpg", alt: "..." }
 * No component changes are required.
 */
export type Artwork =
  | { motif: ArtworkMotif; tone: ArtworkTone; alt: string; image?: never }
  | { image: string; alt: string; motif?: never; tone?: never };

export type TreatmentCategory = "Body" | "Face" | "Mind" | "Movement";

export interface Treatment {
  slug: string;
  name: string;
  category: TreatmentCategory;
  /** Card-length description. */
  summary: string;
  /** Lead paragraph on the detail page. */
  intro: string;
  /** Body copy for the detail page. */
  overview: string[];
  /** Ordered walkthrough of the session. */
  expect: { title: string; description: string }[];
  benefits: string[];
  duration: string;
  /** Demo pricing — clearly fictional. */
  price: string;
  artwork: Artwork;
}

export interface Retreat {
  slug: string;
  title: string;
  duration: string;
  location: string;
  season: string;
  summary: string;
  description: string;
  highlights: string[];
  price: string;
  artwork: Artwork;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  /** ISO date — used for <time> and sitemap freshness. */
  date: string;
  readingTime: string;
  excerpt: string;
  artwork: Artwork;
  body: { heading: string; paragraphs: string[] }[];
}

export interface Practitioner {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  artwork: Artwork;
}

export interface LinkItem {
  label: string;
  href: string;
}
