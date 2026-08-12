import { Artwork } from "@/components/ui/Artwork";
import { ButtonLink } from "@/components/ui/Button";
import { PractitionerCard } from "@/components/wellness/PractitionerCard";
import { about, practitioners } from "@/content/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Cove is a three-room wellness studio built around long sessions, plain language and natural materials. Meet the practitioners and read the story.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="wrap pt-10 md:pt-16">
        <p className="eyebrow">{about.eyebrow}</p>
        <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-12">
          <h1 className="serif col-span-full text-balance text-[2.75rem] leading-[1.03] md:col-span-8 md:text-6xl lg:text-7xl">
            {about.title}
          </h1>
          <p className="col-span-full max-w-prose leading-relaxed text-ink-soft md:col-span-4 md:col-start-9">
            {about.lead}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="wrap mt-16 md:mt-24">
        <div className="grid gap-12 border-t border-line pt-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Artwork
              art={{
                motif: "stone",
                tone: "sand",
                alt: "Smooth stacked stones in warm sand tones",
              }}
              className="aspect-[4/5] w-full"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <h2 className="serif text-3xl leading-tight md:text-4xl">
              {about.story.heading}
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
              {about.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-8">
              {about.facts.map((fact) => (
                <div key={fact.label} className="border-t border-line py-4">
                  <dt className="eyebrow">{fact.label}</dt>
                  <dd className="serif mt-1.5 text-xl">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mt-24 bg-bg-soft py-20 md:mt-32 md:py-28">
        <div className="wrap">
          <h2 className="eyebrow">Four principles</h2>
          <ol className="mt-10 grid gap-x-10 gap-y-2 md:grid-cols-2">
            {about.principles.map((principle, index) => (
              <li
                key={principle.title}
                className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-line py-6 md:gap-x-8 md:py-8"
              >
                <span className="eyebrow pt-1.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="serif text-2xl leading-tight md:text-3xl">
                    {principle.title}
                  </h3>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-soft">
                    {principle.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Practitioners */}
      <section
        id="practitioners"
        className="wrap mt-24 scroll-mt-24 md:mt-32"
        aria-labelledby="practitioners-heading"
      >
        <div className="border-t border-line pt-6">
          <p className="eyebrow">Practitioners</p>
          <h2
            id="practitioners-heading"
            className="serif mt-6 max-w-2xl text-balance text-3xl leading-tight md:text-4xl lg:text-5xl"
          >
            Four people, one building, no rotating rota
          </h2>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {practitioners.map((practitioner) => (
            <PractitionerCard
              key={practitioner.name}
              practitioner={practitioner}
            />
          ))}
        </div>
        <p className="mt-10 max-w-prose text-xs leading-relaxed text-ink-faint">
          The people above are fictional characters written for this website
          template. No qualifications, registrations or professional
          credentials are implied.
        </p>
      </section>

      {/* Closing */}
      <section className="mt-24 border-t border-line md:mt-32">
        <div className="wrap grid items-center gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6">
            <h2 className="serif text-balance text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              {about.closing.heading}
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
              {about.closing.body}
            </p>
            <ButtonLink href={about.closing.ctaHref} className="mt-10">
              {about.closing.ctaLabel}
            </ButtonLink>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Artwork
              art={{
                motif: "flow",
                tone: "sage",
                alt: "Long flowing lines drifting across a soft sage field",
              }}
              className="aspect-[4/3] w-full"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
