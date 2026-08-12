/**
 * Global site metadata.
 *
 * IMPORTANT: `url` is a placeholder. Replace it with your real production
 * domain before deploying — canonical URLs, the sitemap, robots.txt and
 * Open Graph tags are all derived from it.
 */
export const site = {
  name: "Cove",
  tagline: "Wellness Studio & Retreat",
  url: "https://cove.example.com",
  description:
    "Cove is a wellness studio and retreat house for restorative treatments, breathwork and slow movement. A quiet place to put yourself back together.",
  locale: "en_GB",
  themeColor: { light: "#f6f2ea", dark: "#15180f" },
  /** Shown in the footer so the template is never mistaken for a real business. */
  demoNotice:
    "Cove is a fictional brand created for this website template. All treatments, retreats, prices, articles and people are demo content.",
} as const;
