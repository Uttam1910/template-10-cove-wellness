import Link from "next/link";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** Optional inline link rendered to the right on wide screens. */
  action?: { label: string; href: string };
  /** Heading level — sections use h2, sub-sections h3. */
  as?: "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`border-t border-line pt-6 md:pt-8 ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-end md:gap-10">
        <Tag className="serif col-span-full text-balance text-3xl leading-[1.08] md:col-span-7 md:text-4xl lg:text-5xl">
          {title}
        </Tag>
        {description ? (
          <p className="col-span-full max-w-prose text-[0.95rem] leading-relaxed text-ink-soft md:col-span-4 md:col-start-9">
            {description}
          </p>
        ) : null}
      </div>
      {action ? (
        <p className="mt-6">
          <Link
            href={action.href}
            className="link-quiet inline-block py-1.5 text-sm text-ink-soft hover:text-ink"
          >
            {action.label}
          </Link>
        </p>
      ) : null}
    </div>
  );
}
