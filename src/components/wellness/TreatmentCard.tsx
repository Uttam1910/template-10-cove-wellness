import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Artwork } from "@/components/ui/Artwork";
import type { Treatment } from "@/content/types";

export function TreatmentCard({
  treatment,
  headingLevel: Heading = "h3",
}: {
  treatment: Treatment;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <article className="group relative flex flex-col border-t border-line pt-5">
      <div className="flex items-baseline justify-between gap-4">
        <span className="eyebrow">{treatment.category}</span>
        <span className="text-xs text-ink-faint">{treatment.duration}</span>
      </div>

      <Artwork
        art={treatment.artwork}
        className="mt-5 aspect-[4/5] w-full"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      <Heading className="serif mt-5 text-2xl leading-tight">
        <Link href={`/treatments/${treatment.slug}`} className="link-quiet">
          <span className="absolute inset-0" aria-hidden="true" />
          {treatment.name}
        </Link>
      </Heading>

      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {treatment.summary}
      </p>

      <p className="mt-5 flex items-center gap-2 text-sm text-ink-faint transition-colors group-hover:text-accent">
        <span>{treatment.price}</span>
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </p>
    </article>
  );
}
