import type { Metadata } from "next";

import { Artwork } from "@/components/ui/Artwork";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist on the Cove website.",
  robots: { index: false, follow: false },
  // A 404 should not claim to be the canonical version of anything.
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <section className="wrap grid items-center gap-12 py-20 md:grid-cols-12 md:py-32">
      <div className="md:col-span-6">
        <p className="eyebrow">Error 404</p>
        <h1 className="serif mt-6 text-balance text-[2.75rem] leading-[1.03] md:text-6xl">
          This path does not lead anywhere
        </h1>
        <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
          The page you were looking for has moved, or never existed. No harm
          done — here are two better directions.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to the homepage</ButtonLink>
          <ButtonLink href="/treatments" variant="secondary">
            Browse treatments
          </ButtonLink>
        </div>
      </div>
      <div className="md:col-span-5 md:col-start-8">
        <Artwork
          art={{
            motif: "horizon",
            tone: "stone",
            alt: "Quiet layered ridges receding under a pale sky",
          }}
          className="aspect-[4/3] w-full"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
    </section>
  );
}
