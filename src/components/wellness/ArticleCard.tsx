import Link from "next/link";

import { Artwork } from "@/components/ui/Artwork";
import { formatDate } from "@/content/journal";
import type { Article } from "@/content/types";

export function ArticleCard({
  article,
  showExcerpt = true,
}: {
  article: Article;
  showExcerpt?: boolean;
}) {
  return (
    <article className="group relative flex flex-col border-t border-line pt-5">
      <div className="flex items-baseline justify-between gap-4">
        <span className="eyebrow">{article.category}</span>
        <span className="text-xs text-ink-faint">{article.readingTime}</span>
      </div>

      <Artwork
        art={article.artwork}
        className="mt-5 aspect-[3/2] w-full"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      <h3 className="serif mt-5 text-xl leading-snug md:text-2xl">
        <Link href={`/journal/${article.slug}`} className="link-quiet">
          <span className="absolute inset-0" aria-hidden="true" />
          {article.title}
        </Link>
      </h3>

      {showExcerpt ? (
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {article.excerpt}
        </p>
      ) : null}

      <time
        dateTime={article.date}
        className="mt-5 text-xs text-ink-faint transition-colors group-hover:text-accent"
      >
        {formatDate(article.date)}
      </time>
    </article>
  );
}
