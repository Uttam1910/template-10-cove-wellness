import type { Retreat } from "./types";

/**
 * Demo retreats. There is no availability, reservation or payment logic in
 * this template — every retreat CTA points at the contact page.
 */
export const retreats: Retreat[] = [
  {
    slug: "weekend-reset",
    title: "Weekend Reset",
    duration: "Two nights",
    location: "Cove House, the coast",
    season: "Year round",
    summary:
      "Friday evening to Sunday afternoon in a quiet house near the water. Two treatments, three shared meals, and no schedule after four o'clock.",
    description:
      "The Weekend Reset exists for people who cannot take a fortnight off. You arrive on Friday in time for dinner and leave on Sunday having done very little on purpose. Mornings hold a movement session and a treatment; afternoons are unstructured. There is a long table, a working fireplace, and a rule about phones that everyone privately appreciates by Saturday lunchtime.",
    highlights: [
      "Two nights in a private room",
      "One Deep Rest and one treatment of your choosing",
      "Morning movement and evening breath practice",
      "All meals, cooked in the house",
      "Eight guests maximum",
    ],
    price: "From £680 per person",
    artwork: {
      motif: "horizon",
      tone: "sand",
      alt: "Soft coastal ridges layered beneath a low evening sun",
    },
  },
  {
    slug: "forest-immersion",
    title: "Forest Immersion",
    duration: "Four nights",
    location: "Northern woodland",
    season: "May – September",
    summary:
      "Four nights under trees, at walking pace. The slowest thing we run, and the one people find hardest to explain afterwards.",
    description:
      "Forest Immersion is deliberately under-programmed. Each day holds one long walk, one treatment and one shared meal; everything else is yours. We stay in a timber house at the edge of managed woodland, cook simply, and spend a great deal of time outdoors in ordinary weather. Guests often describe the third day as the point where something shifts — we have stopped trying to schedule around it.",
    highlights: [
      "Four nights in a timber house at the forest edge",
      "A daily guided walk, weather regardless",
      "Three treatments across the stay",
      "Evening fire and shared cooking",
      "Ten guests maximum",
    ],
    price: "From £1,240 per person",
    artwork: {
      motif: "botanical",
      tone: "olive",
      alt: "Tall botanical silhouettes rising across a deep olive field",
    },
  },
  {
    slug: "seasonal-renewal",
    title: "Seasonal Renewal",
    duration: "One day",
    location: "Cove Studio",
    season: "Four times yearly",
    summary:
      "A single day at the turn of each season — rest, reflection and a long lunch. Our shortest retreat and the easiest to say yes to.",
    description:
      "Four times a year, at the hinge of each season, we close the studio to treatments and give the whole day to a small group. The shape is simple: slow movement in the morning, a mineral ritual before lunch, and an afternoon given over to rest, writing and quiet. It is designed for people who want the effect of a retreat without arranging childcare for a week.",
    highlights: [
      "One full day, 9am to 6pm",
      "Slow movement and guided breath practice",
      "A Mineral Ritual treatment",
      "A long shared lunch",
      "Twelve guests maximum",
    ],
    price: "From £240 per person",
    artwork: {
      motif: "bloom",
      tone: "clay",
      alt: "Opening petal forms radiating in warm clay tones",
    },
  },
];

export function getRetreat(slug: string): Retreat | undefined {
  return retreats.find((retreat) => retreat.slug === slug);
}
