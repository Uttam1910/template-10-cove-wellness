import Link from "next/link";

import { Artwork } from "@/components/ui/Artwork";
import { ArticleCard } from "@/components/wellness/ArticleCard";
import { formatDate, sortedArticles } from "@/content/journal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Journal",
  description:
    "Notes from the Cove studio on rest, breath, movement, ritual and the practical business of slowing down.",
  path: "/journal",
});

export default function JournalPage() {
  const [lead, ...rest] = sortedArticles;

  return (
    <>
      <section className="wrap pt-10 md:pt-16">
        <p className="eyebrow">Journal</p>
        <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-12">
          <h1 className="serif col-span-full text-balance text-[2.75rem] leading-[1.03] md:col-span-7 md:text-6xl lg:text-7xl">
            Notes from the studio
          </h1>
          <p className="col-span-full max-w-prose leading-relaxed text-ink-soft md:col-span-4 md:col-start-9">
            Occasional writing on rest, breath, movement and ritual. No
            protocols, no supplements, and nothing you need to buy.
          </p>
        </div>
      </section>

      {/* Lead article, given the room it deserves. */}
      <section className="wrap mt-14 md:mt-20" aria-label="Latest article">
        <article className="group relative grid gap-8 border-t border-line pt-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <Artwork
              art={lead.artwork}
              className="aspect-[3/2] w-full"
              sizes="(max-width: 768px) 100vw, 55vw"
              priority
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-5">
            <div className="flex items-center gap-x-5 text-xs text-ink-faint">
              <span className="eyebrow">{lead.category}</span>
              <span>{lead.readingTime}</span>
            </div>
            <h2 className="serif mt-4 text-balance text-3xl leading-tight md:text-4xl">
              <Link href={`/journal/${lead.slug}`} className="link-quiet">
                <span className="absolute inset-0" aria-hidden="true" />
                {lead.title}
              </Link>
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">{lead.excerpt}</p>
            <time
              dateTime={lead.date}
              className="mt-6 text-xs text-ink-faint transition-colors group-hover:text-accent"
            >
              {formatDate(lead.date)}
            </time>
          </div>
        </article>
      </section>

      <section className="wrap mt-20 md:mt-28" aria-label="All articles">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
