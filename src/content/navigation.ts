import type { LinkItem } from "./types";

export const primaryNav: LinkItem[] = [
  { label: "Treatments", href: "/treatments" },
  { label: "Retreats", href: "/retreats" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: LinkItem[] }[] = [
  {
    title: "Visit",
    links: [
      { label: "Treatments", href: "/treatments" },
      { label: "Retreats", href: "/retreats" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Read",
    links: [
      { label: "Journal", href: "/journal" },
      { label: "Our story", href: "/about" },
      { label: "Practitioners", href: "/about#practitioners" },
    ],
  },
];

/** Demo social handles — replace with your own or delete the entries. */
export const socialLinks: LinkItem[] = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Journal RSS", href: "/journal" },
  { label: "Newsletter", href: "/contact" },
];
