"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { primaryNav } from "@/content/navigation";
import { site } from "@/content/site";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the panel whenever navigation happens, including via the back
  // button. Derived during render rather than in an effect, so the closed
  // panel is painted in the same pass as the new page.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Escape closes the panel; body scroll is locked while it is open.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <div className="wrap flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          className="serif flex items-baseline gap-2 text-xl tracking-tight md:text-2xl"
          aria-label={`${site.name} — home`}
        >
          {site.name}
          <span
            aria-hidden="true"
            className="hidden text-[0.6rem] uppercase tracking-[0.24em] text-ink-faint sm:inline"
          >
            {site.tagline}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`link-quiet text-sm transition-colors ${
                      active ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center border border-line text-ink-soft transition-colors hover:border-ink-faint hover:text-ink md:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-line bg-bg md:hidden"
      >
        <nav aria-label="Mobile" className="wrap py-8">
          <ul className="flex flex-col">
            {primaryNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`serif flex min-h-14 items-center text-3xl ${
                      active ? "text-accent" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-xs leading-relaxed text-ink-faint">
            {site.demoNotice}
          </p>
        </nav>
      </div>
    </header>
  );
}
