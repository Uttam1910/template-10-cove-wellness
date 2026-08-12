import Link from "next/link";

import { Artwork } from "@/components/ui/Artwork";
import { ButtonLink } from "@/components/ui/Button";
import type { Retreat } from "@/content/types";

/**
 * Two presentations of the same content:
 *
 * - "teaser"  — compact vertical card, used on the homepage grid.
 * - "feature" — full editorial row with highlights, used on /retreats.
 *
 * There is no availability, reservation or payment logic anywhere in this
 * template; every retreat CTA simply opens a conversation.
 */
export function RetreatCard({
  retreat,
  index = 0,
  layout = "feature",
  headingLevel: Heading = "h3",
}: {
  retreat: Retreat;
  index?: number;
  layout?: "teaser" | "feature";
  /** h2 when the cards are a page's top-level content, h3 under a section heading. */
  headingLevel?: "h2" | "h3";
}) {
  const meta = (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-ink-faint">
      <span className="eyebrow">{retreat.duration}</span>
      <span>{retreat.location}</span>
      <span>{retreat.season}</span>
    </div>
  );

  if (layout === "teaser") {
    return (
      <article className="group relative flex flex-col border-t border-line pt-5">
        {meta}
        <Artwork
          art={retreat.artwork}
          className="mt-5 aspect-[3/4] w-full"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
        <Heading className="serif mt-5 text-2xl leading-tight">
          <Link href="/retreats" className="link-quiet">
            <span className="absolute inset-0" aria-hidden="true" />
            {retreat.title}
          </Link>
        </Heading>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {retreat.summary}
        </p>
        <p className="mt-5 text-xs text-ink-faint transition-colors group-hover:text-accent">
          {retreat.price}
        </p>
      </article>
    );
  }

  const flipped = index % 2 === 1;

  return (
    <article className="grid gap-8 border-t border-line pt-8 md:grid-cols-12 md:gap-10 md:pt-12">
      <div
        className={`md:col-span-5 ${flipped ? "md:order-2 md:col-start-8" : ""}`}
      >
        <Artwork
          art={retreat.artwork}
          className="aspect-[5/4] w-full md:aspect-[4/5]"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>

      <div
        className={`flex flex-col md:col-span-6 ${
          flipped ? "md:order-1 md:col-start-1" : "md:col-start-7"
        }`}
      >
        {meta}
        <Heading className="serif mt-4 text-3xl leading-tight md:text-4xl lg:text-5xl">
          {retreat.title}
        </Heading>
        <p className="mt-5 max-w-prose leading-relaxed text-ink-soft">
          {retreat.description}
        </p>

        <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
          {retreat.highlights.map((highlight) => (
            <li
              key={highlight}
              className="border-t border-line py-2.5 text-sm text-ink-soft"
            >
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <ButtonLink href="/contact" variant="secondary">
            Contact Cove
          </ButtonLink>
          <span className="text-sm text-ink-faint">{retreat.price}</span>
        </div>
      </div>
    </article>
  );
}
