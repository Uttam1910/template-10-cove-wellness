import { notFound } from "next/navigation";

import { Artwork } from "@/components/ui/Artwork";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button";
import { TreatmentCard } from "@/components/wellness/TreatmentCard";
import {
  getTreatment,
  relatedTreatments,
  treatments,
} from "@/content/treatments";
import { pageMetadata } from "@/lib/seo";

/** Only the six demo treatments exist — nothing is rendered on demand. */
export const dynamicParams = false;

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};

  return pageMetadata({
    title: treatment.name,
    description: treatment.summary,
    path: `/treatments/${treatment.slug}`,
  });
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const related = relatedTreatments(slug);

  return (
    <>
      <article>
        <header className="wrap pt-8 md:pt-12">
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Treatments", href: "/treatments" },
            ]}
            current={treatment.name}
          />

          <p className="eyebrow mt-10">{treatment.category}</p>
          <h1 className="serif mt-5 max-w-4xl text-balance text-[2.75rem] leading-[1.03] md:text-6xl lg:text-7xl">
            {treatment.name}
          </h1>

          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-4 border-t border-line pt-5">
            <div>
              <dt className="eyebrow">Duration</dt>
              <dd className="serif mt-1.5 text-lg">{treatment.duration}</dd>
            </div>
            <div>
              <dt className="eyebrow">From</dt>
              <dd className="serif mt-1.5 text-lg">{treatment.price}</dd>
            </div>
            <div>
              <dt className="eyebrow">Format</dt>
              <dd className="serif mt-1.5 text-lg">One to one</dd>
            </div>
          </dl>
        </header>

        <div className="wrap mt-10 md:mt-14">
          <Artwork
            art={treatment.artwork}
            className="aspect-[4/3] w-full md:aspect-[16/7]"
            sizes="100vw"
            priority
          />
        </div>

        <div className="wrap mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p className="serif text-balance text-2xl leading-[1.3] md:text-[1.75rem]">
              {treatment.intro}
            </p>

            <h2 className="eyebrow mt-14 border-t border-line pt-5">
              Overview
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
              {treatment.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h2 className="eyebrow mt-14 border-t border-line pt-5">
              What to expect
            </h2>
            <ol className="mt-6">
              {treatment.expect.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[auto_1fr] gap-x-6 border-b border-line py-5 md:gap-x-10"
                >
                  <span className="eyebrow pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="serif text-xl leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="border border-line bg-bg-soft p-6 md:p-8">
              <h2 className="eyebrow">What it tends to give you</h2>
              <ul className="mt-5 space-y-3">
                {treatment.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="border-t border-line pt-3 text-sm leading-relaxed text-ink-soft"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs leading-relaxed text-ink-faint">
                Cove makes no medical or therapeutic claims. If you have a
                health condition, speak to your own practitioner first.
              </p>
              <ButtonLink href="/contact" className="mt-8 w-full">
                Ask about {treatment.name}
              </ButtonLink>
            </div>
          </aside>
        </div>
      </article>

      <section className="wrap mt-24 md:mt-32" aria-labelledby="related">
        <div className="border-t border-line pt-6">
          <h2 id="related" className="eyebrow">
            Other treatments
          </h2>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <TreatmentCard key={item.slug} treatment={item} />
          ))}
        </div>
      </section>
    </>
  );
}
