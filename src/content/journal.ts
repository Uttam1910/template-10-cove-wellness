import type { Article } from "./types";

/**
 * Demo journal articles, stored as typed content rather than Markdown so the
 * template stays dependency-free. Add an entry here and the listing page,
 * detail page and sitemap all pick it up.
 */
export const articles: Article[] = [
  {
    slug: "the-case-for-doing-less",
    title: "The case for doing less, badly",
    category: "Slow living",
    date: "2026-06-18",
    readingTime: "6 min read",
    excerpt:
      "Most rest routines fail because they are designed by the same part of you that made the schedule. A short argument for lowering the bar until something sticks.",
    artwork: {
      motif: "ripple",
      tone: "sage",
      alt: "Wide concentric ripples spreading slowly outward",
    },
    body: [
      {
        heading: "The optimisation trap",
        paragraphs: [
          "People arrive at the studio with impressive plans. A 5am start, twenty minutes of breathwork, cold water, a walk before email. The plan is usually abandoned within a fortnight, and the abandonment is taken as evidence of a character flaw rather than a design flaw.",
          "It is a design flaw. The plan was written by the same part of you that overcommitted in the first place — the part that treats rest as another performance with a standard to meet.",
        ],
      },
      {
        heading: "Lower the bar until it holds",
        paragraphs: [
          "The practices that survive are almost embarrassingly small. Three slow breaths before opening a laptop. Standing outside for the length of one cup of tea. Putting the phone in another room while you eat.",
          "None of these will appear on a list of protocols. All of them will still be happening in six months, which is the only measure that matters. A practice you do imperfectly for a year outperforms a perfect one you do for nine days.",
        ],
      },
      {
        heading: "What to try this week",
        paragraphs: [
          "Pick one moment that already exists in your day — the kettle boiling, the commute, the walk from the car — and do nothing else during it. Do not add anything to your day. Subtract from a moment already in it.",
          "If it feels too easy, that is the correct amount of easy. Difficulty is not the ingredient that makes rest work.",
        ],
      },
    ],
  },
  {
    slug: "what-your-jaw-is-holding",
    title: "What your jaw is holding",
    category: "Body",
    date: "2026-05-27",
    readingTime: "5 min read",
    excerpt:
      "The jaw is the most reliable tension indicator in the body, and the one people are least aware of. A practitioner's notes on the face.",
    artwork: {
      motif: "bloom",
      tone: "clay",
      alt: "Soft petal arcs opening around a warm centre",
    },
    body: [
      {
        heading: "A quiet indicator",
        paragraphs: [
          "Ask someone whether their shoulders are tight and they will usually know. Ask about the jaw and there is a pause, then a small, surprised adjustment as they notice it for the first time that day.",
          "The jaw holds tension well because it is designed to work constantly and without conscious attention. It is also structurally connected to the neck, the base of the skull and the breath, which is why work there tends to travel.",
        ],
      },
      {
        heading: "How it shows up",
        paragraphs: [
          "Morning tightness that eases by mid-afternoon. Headaches that arrive at the temples rather than the forehead. A sense that your teeth do not quite meet the same way after a long week.",
          "None of this is unusual and none of it is cause for alarm — but it is worth noticing, because it is information about a state you may not have registered any other way.",
        ],
      },
      {
        heading: "Softening it",
        paragraphs: [
          "Let the tongue rest wide on the floor of the mouth rather than pressed to the roof. Let the back teeth part very slightly. Exhale longer than you inhale for a minute or two.",
          "It is a small correction and it does not last, which is fine. The practice is the noticing, repeated, not the holding of a perfect position.",
        ],
      },
    ],
  },
  {
    slug: "sleep-is-not-a-productivity-tool",
    title: "Sleep is not a productivity tool",
    category: "Rest",
    date: "2026-05-02",
    readingTime: "7 min read",
    excerpt:
      "On what happens when rest becomes another metric to optimise, and how to get out of the loop you have built around your own recovery.",
    artwork: {
      motif: "horizon",
      tone: "stone",
      alt: "Layered ridges settling under a pale, low horizon",
    },
    body: [
      {
        heading: "The scored night",
        paragraphs: [
          "There is a particular kind of tiredness that comes from being told, each morning, how badly you slept. The number is often accurate. It is also, for many people, the thing that makes the following night worse.",
          "Rest resists measurement in a way that training does not. The act of scoring it introduces exactly the vigilance that prevents it.",
        ],
      },
      {
        heading: "Rest as a condition, not an output",
        paragraphs: [
          "It helps to stop framing sleep as recovery for the next day's work. Framed that way, a bad night becomes a deficit to make up, and the following evening arrives with a target attached.",
          "Sleep is not preparation for the useful part of life. It is a large, ordinary portion of the life itself, and it goes better when nothing is riding on it.",
        ],
      },
      {
        heading: "Practical, unglamorous adjustments",
        paragraphs: [
          "Keep the hour before bed dim and boring. Let the room be colder than feels reasonable. Get outside within an hour of waking, even under grey sky.",
          "And if you wake at three and cannot settle: get up, sit somewhere low-lit, and read something undemanding until you are genuinely sleepy. Lying in the dark negotiating with yourself teaches the bed the wrong lesson.",
        ],
      },
    ],
  },
  {
    slug: "moving-at-conversational-pace",
    title: "Moving at conversational pace",
    category: "Movement",
    date: "2026-04-11",
    readingTime: "5 min read",
    excerpt:
      "Why the most useful movement of your week is probably the slowest one, and what changes when you stop counting repetitions.",
    artwork: {
      motif: "flow",
      tone: "olive",
      alt: "Long curved lines flowing across a deep olive ground",
    },
    body: [
      {
        heading: "The missing intensity",
        paragraphs: [
          "Most people have a hard setting and an off setting. They train, or they sit. What tends to be missing is the enormous middle — the unhurried, unmeasured movement that used to fill an ordinary day.",
          "That middle is where stiffness is actually addressed. It is difficult to sell, because it does not look like anything.",
        ],
      },
      {
        heading: "Doing less than you can",
        paragraphs: [
          "In a Slow Movement session we will often ask you to work at around half of what you are capable of. Reduced effort makes the small stabilising work available again — the parts that a big, determined range simply overrides.",
          "The instruction people find hardest is not to push. It is to stop before the interesting part.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Lie on the floor and roll slowly from your back to your side and up to sitting, without using your hands, taking a full minute. Then go back down the same way.",
          "It is a warm-up on paper. Do it every morning for a month and pay attention to what your hips have to say about it.",
        ],
      },
    ],
  },
  {
    slug: "a-ritual-for-the-turn-of-the-season",
    title: "A ritual for the turn of the season",
    category: "Ritual",
    date: "2026-03-19",
    readingTime: "4 min read",
    excerpt:
      "Four times a year the light changes and almost nobody marks it. A simple, unceremonious ritual you can do alone in an afternoon.",
    artwork: {
      motif: "botanical",
      tone: "sage",
      alt: "Slender botanical stems and leaves against a soft sage ground",
    },
    body: [
      {
        heading: "Why mark anything",
        paragraphs: [
          "Seasons used to be structurally unavoidable — they determined what you ate, when you worked and how long you slept. Now they are largely weather, and they pass without comment.",
          "Marking them is not sentimental. It is a way of giving the year some grain, so that time does not arrive at December as one undifferentiated block.",
        ],
      },
      {
        heading: "The ritual",
        paragraphs: [
          "Set aside two hours. Clean one room properly — not the whole house, one room. Open a window while you do it, whatever the temperature.",
          "Then sit down with a notebook and write two short lists: what you are carrying into the season, and what you are putting down. Do not plan. Do not set goals. Just name the two.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "Make something warm to drink and do nothing for twenty minutes. That is the whole of it.",
          "The lists rarely change behaviour directly. What they do is make the following three months feel chosen rather than merely survived.",
        ],
      },
    ],
  },
  {
    slug: "breath-without-the-mysticism",
    title: "Breath, without the mysticism",
    category: "Breath",
    date: "2026-02-24",
    readingTime: "6 min read",
    excerpt:
      "Breathwork has a language problem. Stripped of the vocabulary, what remains is a small set of genuinely useful patterns.",
    artwork: {
      motif: "mineral",
      tone: "stone",
      alt: "Angular mineral facets catching pale light",
    },
    body: [
      {
        heading: "The vocabulary problem",
        paragraphs: [
          "A great many people who would benefit from breath practice never try it, because the available language asks them to accept a worldview first.",
          "It is not necessary. You can approach the breath the way you would approach posture or sleep — as a mechanical thing you have some influence over, which affects how you feel.",
        ],
      },
      {
        heading: "Two patterns worth knowing",
        paragraphs: [
          "The first: breathe in for four, out for eight, through the nose, for two minutes. A longer exhale reliably settles most people. Use it before a difficult conversation, or at the end of a day that will not switch off.",
          "The second: three or four brisker, fuller breaths, then a normal pause. Useful when tiredness has flattened into inertia and a walk is not available.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "Not very much, the first few times. Breath practice is unspectacular by design, and the effect is closer to a room's temperature changing than a light being switched on.",
          "Give it a fortnight of small attempts before deciding whether it does anything for you. That is roughly how long it takes to become boring enough to work.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

/** Newest first. */
export const sortedArticles: Article[] = [...articles].sort(
  (a, b) => Date.parse(b.date) - Date.parse(a.date),
);

export function relatedArticles(slug: string): Article[] {
  const current = getArticle(slug);
  const others = sortedArticles.filter((article) => article.slug !== slug);
  if (!current) return others.slice(0, 3);

  const sameCategory = others.filter((a) => a.category === current.category);
  const rest = others.filter((a) => a.category !== current.category);
  return [...sameCategory, ...rest].slice(0, 3);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
