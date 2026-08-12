import Link from "next/link";

import { contact } from "@/content/contact";
import { footerNav, socialLinks } from "@/content/navigation";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-bg-soft md:mt-32">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-20">
        <div className="md:col-span-5">
          <p className="serif text-3xl tracking-tight md:text-4xl">
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
            {site.description}
          </p>
          <address className="mt-6 not-italic text-sm leading-relaxed text-ink-faint">
            {contact.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>

        {footerNav.map((group) => (
          <nav
            key={group.title}
            aria-label={group.title}
            className="md:col-span-2"
          >
            <h2 className="eyebrow">{group.title}</h2>
            <ul className="mt-4 space-y-1">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="link-quiet inline-block py-1.5 text-sm text-ink-soft hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="md:col-span-3">
          <h2 className="eyebrow">Elsewhere</h2>
          <ul className="mt-4 space-y-1">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="link-quiet inline-block py-1.5 text-sm text-ink-soft hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink-soft">
            <a
              href={`mailto:${contact.email}`}
              className="link-quiet inline-block py-1.5"
            >
              {contact.email}
            </a>
          </p>
        </div>
      </div>

      <div className="wrap flex flex-col gap-3 border-t border-line py-6 text-xs text-ink-faint md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Template demo content.
        </p>
        <p className="max-w-xl md:text-right">{site.demoNotice}</p>
      </div>
    </footer>
  );
}
