import { notFound } from "next/navigation";

import { Artwork } from "@/components/ui/Artwork";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button";
import { ArticleCard } from "@/components/wellness/ArticleCard";
import {
  articles,
  formatDate,
  getArticle,
  relatedArticles,
} from "@/content/journal";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/journal/${article.slug}`,
    type: "article",
    publishedTime: article.date,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = relatedArticles(slug);

  return (
    <>
      <article>
        <header className="wrap pt-8 md:pt-12">
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Journal", href: "/journal" },
            ]}
            current={article.category}
          />

          <h1 className="serif mt-10 max-w-4xl text-balance text-[2.5rem] leading-[1.05] md:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-line pt-5 text-xs text-ink-faint">
            <span className="eyebrow">{article.category}</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span>{article.readingTime}</span>
          </div>
        </header>

        <div className="wrap mt-10 md:mt-14">
          <Artwork
            art={article.artwork}
            className="aspect-[4/3] w-full md:aspect-[16/7]"
            sizes="100vw"
            priority
          />
        </div>

        <div className="wrap mt-14 grid gap-12 md:mt-20 md:grid-cols-12">
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-2">
            <p className="serif text-balance text-2xl leading-[1.3] md:text-[1.75rem]">
              {article.excerpt}
            </p>

            {article.body.map((section) => (
              <section key={section.heading} className="mt-12">
                <h2 className="serif text-2xl leading-tight md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5 leading-relaxed text-ink-soft">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <p className="mt-14 border-t border-line pt-5 text-xs leading-relaxed text-ink-faint">
              Written for the Cove website template. This is fictional demo
              content and is not health advice.
            </p>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="border border-line bg-bg-soft p-6 md:sticky md:top-28 md:p-8">
              <h2 className="serif text-xl leading-tight">
                Rather do it than read about it?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Most of what we write about happens in the studio in a much
                better room than this one.
              </p>
              <ButtonLink
                href="/treatments"
                variant="secondary"
                className="mt-6 w-full"
              >
                See treatments
              </ButtonLink>
            </div>
          </aside>
        </div>
      </article>

      <section className="wrap mt-24 md:mt-32" aria-labelledby="related">
        <div className="border-t border-line pt-6">
          <h2 id="related" className="eyebrow">
            Keep reading
          </h2>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ArticleCard key={item.slug} article={item} />
          ))}
        </div>
      </section>
    </>
  );
}
