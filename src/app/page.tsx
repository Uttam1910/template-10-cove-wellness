import { Artwork } from "@/components/ui/Artwork";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/wellness/ArticleCard";
import { PractitionerCard } from "@/components/wellness/PractitionerCard";
import { RetreatCard } from "@/components/wellness/RetreatCard";
import { TreatmentCard } from "@/components/wellness/TreatmentCard";
import { practitioners } from "@/content/about";
import { home } from "@/content/home";
import { sortedArticles } from "@/content/journal";
import { retreats } from "@/content/retreats";
import { getTreatment } from "@/content/treatments";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cove — Wellness Studio & Retreat",
  description:
    "A small Cornish studio for restorative treatments, breathwork and unhurried movement. Explore treatments, retreats and the Cove journal.",
  path: "/",
});

const featured = home.treatments.featured
  .map((slug) => getTreatment(slug))
  .filter((treatment) => treatment !== undefined);

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="wrap pt-10 md:pt-16">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">{home.hero.eyebrow}</p>
            <h1 className="serif mt-6 text-balance text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              {home.hero.title}{" "}
              <span className="italic text-accent">
                {home.hero.titleAccent}
              </span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
              {home.hero.lead}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={home.hero.primaryCta.href}>
                {home.hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={home.hero.secondaryCta.href}
                variant="secondary"
              >
                {home.hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Artwork
              art={home.hero.artwork}
              className="aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-px border-t border-line sm:grid-cols-3">
          {home.hero.meta.map((item) => (
            <div key={item.label} className="border-b border-line py-4 sm:border-b-0">
              <dt className="eyebrow">{item.label}</dt>
              <dd className="serif mt-2 text-xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* --------------------------------------------------- Introduction */}
      <section className="wrap mt-24 md:mt-32">
        <div className="border-t border-line pt-6 md:pt-8">
          <p className="eyebrow">{home.intro.eyebrow}</p>
          <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-12">
            <p className="serif col-span-full text-balance text-2xl leading-[1.25] md:col-span-7 md:text-[2rem] lg:text-[2.5rem]">
              {home.intro.statement}
            </p>
            <div className="col-span-full space-y-5 text-[0.95rem] leading-relaxed text-ink-soft md:col-span-4 md:col-start-9">
              {home.intro.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- Featured treatments */}
      <section className="wrap mt-24 md:mt-32">
        <SectionHeading
          eyebrow={home.treatments.eyebrow}
          title={home.treatments.title}
          description={home.treatments.description}
          action={{
            label: home.treatments.ctaLabel,
            href: home.treatments.ctaHref,
          }}
        />
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((treatment) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- Philosophy */}
      <section className="mt-24 bg-bg-soft py-20 md:mt-32 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">{home.philosophy.eyebrow}</p>
            <h2 className="serif mt-6 text-balance text-3xl leading-tight md:text-4xl lg:text-5xl">
              {home.philosophy.title}
            </h2>
            <p className="mt-6 max-w-prose leading-relaxed text-ink-soft">
              {home.philosophy.lead}
            </p>
            <Artwork
              art={home.philosophy.artwork}
              className="mt-10 aspect-[3/2] w-full"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          <ol className="lg:col-span-6 lg:col-start-7">
            {home.philosophy.pillars.map((pillar, index) => (
              <li
                key={pillar.title}
                className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-line py-6 md:gap-x-10 md:py-8"
              >
                <span className="eyebrow pt-1.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="serif text-2xl leading-tight md:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-soft">
                    {pillar.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------- Retreats */}
      <section className="wrap mt-24 md:mt-32">
        <SectionHeading
          eyebrow={home.retreats.eyebrow}
          title={home.retreats.title}
          description={home.retreats.description}
          action={{
            label: home.retreats.ctaLabel,
            href: home.retreats.ctaHref,
          }}
        />
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {retreats.map((retreat) => (
            <RetreatCard
              key={retreat.slug}
              retreat={retreat}
              layout="teaser"
            />
          ))}
        </div>
      </section>

      {/* -------------------------------------------------- Practitioners */}
      <section className="wrap mt-24 md:mt-32">
        <SectionHeading
          eyebrow={home.practitioners.eyebrow}
          title={home.practitioners.title}
          description={home.practitioners.description}
          action={{
            label: home.practitioners.ctaLabel,
            href: home.practitioners.ctaHref,
          }}
        />
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {practitioners.map((practitioner) => (
            <PractitionerCard
              key={practitioner.name}
              practitioner={practitioner}
            />
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------- Journal */}
      <section className="wrap mt-24 md:mt-32">
        <SectionHeading
          eyebrow={home.journal.eyebrow}
          title={home.journal.title}
          description={home.journal.description}
          action={{
            label: home.journal.ctaLabel,
            href: home.journal.ctaHref,
          }}
        />
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {sortedArticles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------ Final CTA */}
      <section className="mt-24 border-t border-line md:mt-32">
        <div className="wrap grid items-center gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24">
          <div className="md:col-span-6">
            <p className="eyebrow">{home.closing.eyebrow}</p>
            <h2 className="serif mt-6 text-balance text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              {home.closing.title}
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
              {home.closing.body}
            </p>
            <ButtonLink href={home.closing.ctaHref} className="mt-10">
              {home.closing.ctaLabel}
            </ButtonLink>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Artwork
              art={home.closing.artwork}
              className="aspect-[4/3] w-full"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
