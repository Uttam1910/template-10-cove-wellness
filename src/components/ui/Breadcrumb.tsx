import Link from "next/link";

import type { LinkItem } from "@/content/types";

interface BreadcrumbProps {
  /** Ancestor links, excluding the current page. */
  trail: LinkItem[];
  current: string;
}

export function Breadcrumb({ trail, current }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs tracking-wide text-ink-faint">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {trail.map((item) => (
          <li key={item.href} className="flex items-center gap-2">
            <Link
              href={item.href}
              className="link-quiet inline-block py-1 hover:text-ink"
            >
              {item.label}
            </Link>
            <span aria-hidden="true">/</span>
          </li>
        ))}
        <li aria-current="page" className="text-ink-soft">
          {current}
        </li>
      </ol>
    </nav>
  );
}
