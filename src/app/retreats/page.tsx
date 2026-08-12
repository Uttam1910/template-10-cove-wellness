import { ButtonLink } from "@/components/ui/Button";
import { RetreatCard } from "@/components/wellness/RetreatCard";
import { retreats } from "@/content/retreats";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Retreats",
  description:
    "Three small Cove retreats — a coastal Weekend Reset, four nights of Forest Immersion, and a single-day Seasonal Renewal.",
  path: "/retreats",
});

export default function RetreatsPage() {
  return (
    <>
      <section className="wrap pt-10 md:pt-16">
        <p className="eyebrow">Retreats</p>
        <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-12">
          <h1 className="serif col-span-full text-balance text-[2.75rem] leading-[1.03] md:col-span-7 md:text-6xl lg:text-7xl">
            Longer, quieter, further from the road
          </h1>
          <div className="col-span-full max-w-prose space-y-4 leading-relaxed text-ink-soft md:col-span-4 md:col-start-9">
            <p>
              We run three retreats. Each one is small, under-programmed and
              built around the same idea as the studio: give people enough time
              and they will do the rest themselves.
            </p>
            <p className="text-sm text-ink-faint">
              This template has no availability or reservation logic. Every
              retreat enquiry goes to the contact page.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap mt-16 space-y-20 md:mt-24 md:space-y-28">
        {retreats.map((retreat, index) => (
          <RetreatCard
            key={retreat.slug}
            retreat={retreat}
            index={index}
            headingLevel="h2"
          />
        ))}
      </section>

      <section className="mt-24 border-t border-line md:mt-32">
        <div className="wrap py-16 md:py-24">
          <h2 className="serif max-w-2xl text-balance text-3xl leading-tight md:text-4xl lg:text-5xl">
            Retreats are arranged by conversation, not by calendar
          </h2>
          <p className="mt-6 max-w-prose leading-relaxed text-ink-soft">
            Tell us which one interests you and roughly when. We will write back
            with dates, what the house is like, and an honest opinion about
            whether it suits what you are after.
          </p>
          <ButtonLink href="/contact" className="mt-10">
            Contact Cove
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
