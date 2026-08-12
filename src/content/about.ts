import type { Practitioner } from "./types";

/**
 * Fictional practitioners. Bios describe approach and background in general
 * terms only — the template deliberately avoids inventing credentials,
 * registrations or qualifications that could be mistaken for real ones.
 */
export const practitioners: Practitioner[] = [
  {
    name: "Ines Ferreira",
    role: "Founder & Bodywork",
    specialty: "Deep Rest, Private Sessions",
    bio: "Ines opened Cove after fifteen years of working in rooms that were always slightly too bright and slightly too rushed. She works slowly, talks less than most, and is responsible for the studio's rule that no session ever ends on the hour.",
    artwork: {
      motif: "horizon",
      tone: "olive",
      alt: "Layered olive-green ridges receding under a low sun",
    },
  },
  {
    name: "Tobias Lund",
    role: "Breath & Rest",
    specialty: "Breathwork, Seasonal Renewal",
    bio: "Tobias came to breath practice sideways, through choral singing and a long stretch of insomnia. He teaches without vocabulary anyone has to accept first, which is why he tends to be the one people send their sceptical friends to.",
    artwork: {
      motif: "ripple",
      tone: "sand",
      alt: "Concentric ripples moving across warm, still water",
    },
  },
  {
    name: "Amara Okonjo",
    role: "Movement",
    specialty: "Slow Movement, Retreat mornings",
    bio: "Amara spent a decade in dance and now works almost entirely on the floor, at half speed. Her sessions are known for asking people to do considerably less than they arrived intending to.",
    artwork: {
      motif: "flow",
      tone: "clay",
      alt: "Flowing curved lines drifting across a warm clay field",
    },
  },
  {
    name: "Ruth Bellamy",
    role: "Face & Skin",
    specialty: "Facial Therapy, Mineral Ritual",
    bio: "Ruth is interested in skin as something that responds to sleep, weather and worry rather than to a shelf of products. She keeps the studio's oil list short and has strong opinions about warm cloths.",
    artwork: {
      motif: "bloom",
      tone: "stone",
      alt: "Opening petal forms in pale stone tones",
    },
  },
];

export const about = {
  eyebrow: "About Cove",
  title: "A small studio built around the length of an afternoon",
  lead: "Cove began with a simple frustration: almost every wellness space is designed around throughput. We wanted to build the opposite — a room where the clock is not the organising principle.",
  story: {
    heading: "How it started",
    paragraphs: [
      "Cove opened in a converted joinery workshop with three rooms, one kettle and a diary that was deliberately half empty. The building had good light and bad heating, and we spent the first winter in coats.",
      "The idea was modest. Fewer appointments, longer sessions, and enough space between them that nobody — practitioner or guest — is ever being hurried out of a room. Everything else we do follows from that one decision.",
      "Six years on the heating works, the diary is still deliberately half empty, and the joinery bench is now the table we eat at on retreat weekends.",
    ],
  },
  principles: [
    {
      title: "Restoration, not escape",
      description:
        "We are not interested in the fantasy of somewhere else. The point of resting well is that you return to your own life with more of yourself intact.",
    },
    {
      title: "Time is the treatment",
      description:
        "Most of what we offer could be delivered in half the time and would be worth a fraction as much. The unhurried pace is not an indulgence; it is the mechanism.",
    },
    {
      title: "Plain language",
      description:
        "We explain what we are doing and why, in words that do not require you to adopt a belief system. If something is simply pleasant rather than transformative, we will say so.",
    },
    {
      title: "Natural materials",
      description:
        "Linen, clay, salt, timber, water. The studio is built from things that age visibly, because rooms that show their age are easier to relax in.",
    },
  ],
  facts: [
    { label: "Founded", value: "2020" },
    { label: "Treatment rooms", value: "Three" },
    { label: "Sessions per day", value: "Nine, at most" },
    { label: "Retreat guests", value: "Eight to twelve" },
  ],
  closing: {
    heading: "Come and see the room",
    body: "The best way to understand Cove is to stand in it. Send us a note and we will find a quiet hour to show you around.",
    ctaLabel: "Start a conversation",
    ctaHref: "/contact",
  },
} as const;
