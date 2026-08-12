import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "quiet";

const base =
  "inline-flex items-center justify-center gap-2 text-sm tracking-wide transition-colors duration-200 min-h-11 px-6";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-bg hover:bg-accent hover:text-bg border border-ink hover:border-accent",
  secondary:
    "border border-line-strong text-ink hover:border-ink hover:bg-bg-soft",
  quiet: "px-0 min-h-0 text-ink-soft hover:text-ink link-quiet",
};

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  /** Adds a small arrow — used for "read more" style links. */
  arrow?: boolean;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = false,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {arrow ? <ArrowUpRight aria-hidden="true" className="h-4 w-4" /> : null}
    </Link>
  );
}
