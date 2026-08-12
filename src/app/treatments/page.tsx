import { ButtonLink } from "@/components/ui/Button";
import { TreatmentCard } from "@/components/wellness/TreatmentCard";
import { treatmentCategories, treatments } from "@/content/treatments";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Treatments",
  description:
    "Six one-to-one treatments at Cove — bodywork, facial therapy, breathwork and slow movement, from 45 to 120 minutes.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <>
      <section className="wrap pt-10 md:pt-16">
        <p className="eyebrow">Treatments</p>
        <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-12">
          <h1 className="serif col-span-full text-balance text-[2.75rem] leading-[1.03] md:col-span-7 md:text-6xl lg:text-7xl">
            Six ways to put yourself down for a while
          </h1>
          <p className="col-span-full max-w-prose leading-relaxed text-ink-soft md:col-span-4 md:col-start-9">
            Every session at Cove is one-to-one and deliberately long. Prices
            and durations below are demo content for this template.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-xs tracking-wide text-ink-faint">
          {treatmentCategories.map((category) => (
            <li key={category}>
              {category}
              <span className="ml-2 text-ink-faint/70">
                {treatments.filter((t) => t.category === category).length}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap mt-14 md:mt-20" aria-label="All treatments">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <TreatmentCard
              key={treatment.slug}
              treatment={treatment}
              headingLevel="h2"
            />
          ))}
        </div>
      </section>

      <section className="mt-24 border-t border-line md:mt-32">
        <div className="wrap py-16 md:py-24">
          <h2 className="serif max-w-2xl text-balance text-3xl leading-tight md:text-4xl lg:text-5xl">
            Not sure which one you need? Neither are most people.
          </h2>
          <p className="mt-6 max-w-prose leading-relaxed text-ink-soft">
            Send us a note describing the last few months and we will suggest a
            starting point. There is no booking system here — just a
            conversation.
          </p>
          <ButtonLink href="/contact" className="mt-10">
            Start a conversation
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
