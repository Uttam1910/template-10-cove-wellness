import type { Treatment } from "./types";

/**
 * Demo treatments. Prices and durations are fictional placeholder content.
 * Copy is deliberately descriptive rather than medical — Cove makes no
 * clinical or therapeutic claims.
 */
export const treatments: Treatment[] = [
  {
    slug: "deep-rest",
    name: "Deep Rest",
    category: "Body",
    summary:
      "A long, unhurried treatment built around weight, warmth and stillness — for the weeks that ask too much of you.",
    intro:
      "Ninety minutes with nowhere to be. Deep Rest is our slowest session: warm compresses, sustained pressure and long silences, paced so the body has time to believe it can stop.",
    overview: [
      "Most people arrive at Cove carrying more than they realise. Deep Rest is designed for that state — the low, humming tiredness that a short massage never quite reaches.",
      "The session begins on the floor rather than the table, with a few minutes of settling and slow breathing. From there your practitioner works through the back, shoulders and hips using broad, sustained contact rather than quick technique, following what the body offers instead of a fixed sequence.",
      "We keep the room dim, the linen warm and the conversation minimal. Many people fall asleep. That is not a failure of the treatment — it is the point of it.",
    ],
    expect: [
      {
        title: "Settling",
        description:
          "Ten minutes in the anteroom with tea, low light and no expectation to talk.",
      },
      {
        title: "The work",
        description:
          "Sixty minutes of slow, weighted bodywork across the back, hips and shoulders, adjusted continuously to your feedback.",
      },
      {
        title: "Return",
        description:
          "A quiet twenty minutes under blankets before you dress. We never rush this part.",
      },
    ],
    benefits: [
      "A genuine pause in a demanding week",
      "Release through the shoulders, neck and lower back",
      "A slower breath rhythm that tends to stay with you",
      "Better transition into sleep the same evening",
    ],
    duration: "90 minutes",
    price: "£165",
    artwork: {
      motif: "stone",
      tone: "sage",
      alt: "Stacked smooth stone forms resting in soft sage light",
    },
  },
  {
    slug: "mineral-ritual",
    name: "Mineral Ritual",
    category: "Body",
    summary:
      "Salt, clay and warm water in sequence. A grounding full-body ritual that leaves the skin soft and the mind quieter.",
    intro:
      "A three-part ritual drawn from bathing traditions rather than clinics: dry salt, warm clay, still water. Simple materials, given time to work.",
    overview: [
      "Mineral Ritual is the most tactile treatment at Cove. It moves through three stages — exfoliation with coarse sea salt, a warm clay application across the back and limbs, and a long rinse in still, body-temperature water.",
      "Between stages you rest. The waiting is deliberate: it is the interval that turns a sequence of steps into a ritual, and it is usually the part people remember.",
      "You leave with skin that feels genuinely different and, more often than not, an appetite for an early night.",
    ],
    expect: [
      {
        title: "Salt",
        description:
          "A brisk, warming full-body exfoliation to wake the surface of the skin.",
      },
      {
        title: "Clay",
        description:
          "Warm mineral clay applied across the back, arms and legs, then twenty minutes wrapped and still.",
      },
      {
        title: "Water",
        description:
          "A long rinse in body-temperature water, followed by oil and a period of rest.",
      },
    ],
    benefits: [
      "Noticeably softer, better-hydrated skin",
      "A grounding, sensory experience without stimulation",
      "Warmth held in the body for hours afterwards",
      "A clear ending to a difficult stretch of work",
    ],
    duration: "75 minutes",
    price: "£145",
    artwork: {
      motif: "mineral",
      tone: "clay",
      alt: "Faceted mineral shapes in warm clay tones",
    },
  },
  {
    slug: "facial-therapy",
    name: "Facial Therapy",
    category: "Face",
    summary:
      "Slow facial work with warm cloths, plant oils and sustained pressure through the jaw, brow and scalp.",
    intro:
      "Less a facial than an hour of attention paid to the places you hold tension without noticing — the jaw, the space between the brows, the base of the skull.",
    overview: [
      "Facial Therapy is built around touch rather than product. We use a short list of plant oils and warm cloths, and spend the time on slow, repeated work through the jaw, temples, brow and scalp.",
      "Your practitioner will spend a few minutes at the start simply looking and asking questions — where you clench, how you sleep, what the last month has been like. The session is shaped around the answers.",
      "It is a quiet treatment. Most people are surprised by how much they were holding in the face.",
    ],
    expect: [
      {
        title: "Reading",
        description:
          "A short conversation about skin, sleep and where tension tends to gather.",
      },
      {
        title: "Warmth",
        description:
          "Warm cloths and cleansing oil, applied slowly, to soften the surface and the jaw.",
      },
      {
        title: "Release",
        description:
          "Forty minutes of sustained facial, scalp and neck work, finishing at the base of the skull.",
      },
    ],
    benefits: [
      "Released tension through the jaw and brow",
      "Softer, better-conditioned skin",
      "Relief for people who clench or grind at night",
      "A rare hour of undivided attention",
    ],
    duration: "60 minutes",
    price: "£120",
    artwork: {
      motif: "bloom",
      tone: "sand",
      alt: "Radiating petal arcs opening from a warm sand-coloured centre",
    },
  },
  {
    slug: "breathwork",
    name: "Breathwork",
    category: "Mind",
    summary:
      "A guided session in conscious breathing — practical, unmystical, and surprisingly effective on a bad week.",
    intro:
      "Forty-five minutes learning to use your breath deliberately. No incense, no chanting — just a set of patterns you can take home and actually use.",
    overview: [
      "Breathwork at Cove is taught plainly. You will lie down, and your practitioner will guide you through several breathing patterns, explaining what each one tends to do and asking what you notice.",
      "Some patterns lengthen the exhale to settle a busy nervous system. Others are brisker, and are useful when tiredness has tipped into flatness. You will leave knowing which is which.",
      "The session ends with ten minutes of unguided breathing and silence — the part that is hardest to arrange at home, and the reason most people come back.",
    ],
    expect: [
      {
        title: "Orientation",
        description:
          "A short explanation of what we are doing and why, with room for questions.",
      },
      {
        title: "Guided practice",
        description:
          "Three or four breathing patterns, guided aloud, adjusted to how you respond.",
      },
      {
        title: "Silence",
        description:
          "Ten unguided minutes, then a few notes to take home.",
      },
    ],
    benefits: [
      "A practical tool you can use outside the studio",
      "A settled nervous system after a demanding day",
      "Clearer sense of your own tension patterns",
      "A gentler entry point than seated meditation",
    ],
    duration: "45 minutes",
    price: "£70",
    artwork: {
      motif: "ripple",
      tone: "stone",
      alt: "Concentric ripples spreading across still water",
    },
  },
  {
    slug: "slow-movement",
    name: "Slow Movement",
    category: "Movement",
    summary:
      "Floor-based movement at a deliberately unhurried pace. Mobility without performance, effort without strain.",
    intro:
      "An hour of slow, floor-based movement — rolling, reaching, hanging, resting. Closer to how you moved as a child than to how you train as an adult.",
    overview: [
      "Slow Movement is a one-to-one session for people whose bodies have become quietly stiff: desks, driving, phones, years of the same three positions.",
      "We work on the floor with props and low support, moving through ranges rather than repetitions. Nothing is held to a count. Your practitioner will often ask you to do less than you think you should.",
      "It is not a workout, and there is no sequence to memorise. What you take away is a better sense of where you actually move from.",
    ],
    expect: [
      {
        title: "Assessment",
        description:
          "Fifteen minutes watching how you stand, breathe, reach and rotate.",
      },
      {
        title: "Movement",
        description:
          "Floor-based sequences at conversational pace, with rest built in between.",
      },
      {
        title: "Take-home",
        description:
          "Two or three movements chosen for you, written down before you leave.",
      },
    ],
    benefits: [
      "Easier rotation through the spine and hips",
      "A gentler relationship with your own body",
      "Movement that suits stiff mornings and long desk days",
      "No equipment needed to continue at home",
    ],
    duration: "60 minutes",
    price: "£90",
    artwork: {
      motif: "flow",
      tone: "olive",
      alt: "Flowing parallel lines curving across an olive field",
    },
  },
  {
    slug: "private-session",
    name: "Private Session",
    category: "Mind",
    summary:
      "Two hours shaped entirely around you — bodywork, breath and rest, combined however the day requires.",
    intro:
      "Our longest and least prescribed treatment. You arrive, we talk, and the session is built from there. For thresholds, hard seasons and the weeks that need more than an hour.",
    overview: [
      "A Private Session has no fixed structure. It might be mostly bodywork with a short breath practice at the end, or mostly conversation and rest with very little touch at all.",
      "We reserve these sessions for moments that warrant them — after a loss, before a move, at the end of a long project, or simply when nothing else has helped.",
      "You will work with one practitioner throughout, in the studio's largest room, with the afternoon left open behind you.",
    ],
    expect: [
      {
        title: "Conversation",
        description:
          "Twenty unhurried minutes to establish what this particular day needs.",
      },
      {
        title: "The session",
        description:
          "Ninety minutes combining bodywork, breath and rest in whatever proportion serves.",
      },
      {
        title: "Close",
        description:
          "Tea, quiet and no fixed departure time.",
      },
    ],
    benefits: [
      "Completely adapted to the day you are having",
      "Time enough for the body to fully unwind",
      "Continuity with a single practitioner",
      "Space to mark a transition properly",
    ],
    duration: "120 minutes",
    price: "£240",
    artwork: {
      motif: "horizon",
      tone: "sage",
      alt: "Layered soft landscape ridges beneath a low sun",
    },
  },
];

export const treatmentCategories = [
  "Body",
  "Face",
  "Mind",
  "Movement",
] as const;

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((treatment) => treatment.slug === slug);
}

/** Up to three other treatments, preferring the same category. */
export function relatedTreatments(slug: string): Treatment[] {
  const current = getTreatment(slug);
  if (!current) return treatments.slice(0, 3);

  const others = treatments.filter((treatment) => treatment.slug !== slug);
  const sameCategory = others.filter((t) => t.category === current.category);
  const rest = others.filter((t) => t.category !== current.category);

  return [...sameCategory, ...rest].slice(0, 3);
}
