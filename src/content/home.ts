/**
 * Homepage copy. Section order lives in `src/app/page.tsx`; every word
 * rendered on the homepage comes from this file.
 */
export const home = {
  hero: {
    eyebrow: "Wellness studio & retreat — Cornwall",
    title: "Return to yourself,",
    titleAccent: "slowly.",
    lead: "Cove is a small studio for restorative treatments, breathwork and unhurried movement. Nine sessions a day, three quiet rooms, and no clock in sight.",
    primaryCta: { label: "Explore treatments", href: "/treatments" },
    secondaryCta: { label: "Discover retreats", href: "/retreats" },
    meta: [
      { label: "Founded", value: "2020" },
      { label: "Sessions", value: "45–120 min" },
      { label: "Guests per retreat", value: "8–12" },
    ],
    artwork: {
      motif: "botanical" as const,
      tone: "sage" as const,
      alt: "Tall botanical stems and leaf forms rising through soft sage light",
    },
  },

  intro: {
    eyebrow: "01 — Philosophy",
    statement:
      "Rest is not time away from your life. It is the part of your life where you become able to live the rest of it.",
    body: [
      "We built Cove around a single stubborn belief: that most people do not need a new routine, a supplement or a protocol. They need a quiet room, a long hour and someone paying attention.",
      "Everything here is arranged around that — the length of the sessions, the number of people in the building, the pace at which we work.",
    ],
  },

  treatments: {
    eyebrow: "02 — Treatments",
    title: "Six ways to put yourself down for a while",
    description:
      "Body, face, breath and movement. Each session is one-to-one and long enough to be worth the journey.",
    ctaLabel: "All treatments",
    ctaHref: "/treatments",
    /** Slugs shown on the homepage, in order. */
    featured: [
      "deep-rest",
      "mineral-ritual",
      "facial-therapy",
      "breathwork",
      "slow-movement",
      "private-session",
    ],
  },

  philosophy: {
    eyebrow: "03 — Approach",
    title: "Five things we pay attention to",
    lead: "Not a system, and not a philosophy in the grand sense. Just the five things we keep returning to, in the order they tend to matter.",
    pillars: [
      {
        title: "Body",
        description:
          "Where the week actually accumulates. We work broadly and slowly rather than hunting for knots.",
      },
      {
        title: "Breath",
        description:
          "The one system you can steer directly. Taught plainly, so you can use it outside the studio.",
      },
      {
        title: "Rest",
        description:
          "Treated as the treatment, not the recovery from it. Nobody is moved on at the hour.",
      },
      {
        title: "Movement",
        description:
          "Unhurried and unmeasured. Closer to how you moved at eight than to how you train at thirty-eight.",
      },
      {
        title: "Ritual",
        description:
          "Salt, clay, warm cloth, still water. Ordinary materials given enough time to mean something.",
      },
    ],
    artwork: {
      motif: "stone" as const,
      tone: "olive" as const,
      alt: "Smooth stones stacked in balance against a deep olive ground",
    },
  },

  retreats: {
    eyebrow: "04 — Retreats",
    title: "Longer, quieter, further from the road",
    description:
      "Three retreats a year, kept deliberately small. A weekend by the water, four nights under trees, or a single day at the turn of the season.",
    ctaLabel: "All retreats",
    ctaHref: "/retreats",
  },

  practitioners: {
    eyebrow: "05 — Practitioners",
    title: "Four people, one building",
    description:
      "You will work with the same practitioner throughout a session, and usually across a retreat. Nobody here is a rotating resource.",
    ctaLabel: "More about Cove",
    ctaHref: "/about",
  },

  journal: {
    eyebrow: "06 — Journal",
    title: "Notes from the studio",
    description:
      "Occasional writing on rest, breath, movement and the practical business of slowing down.",
    ctaLabel: "Read the journal",
    ctaHref: "/journal",
  },

  closing: {
    eyebrow: "Visit",
    title: "Make space for what restores you",
    body: "Tell us what your last few months have looked like and we will suggest where to start. No forms to fill in beyond the one on the contact page.",
    ctaLabel: "Start a conversation",
    ctaHref: "/contact",
    artwork: {
      motif: "horizon" as const,
      tone: "clay" as const,
      alt: "Layered landscape ridges beneath a warm setting sun",
    },
  },
} as const;
