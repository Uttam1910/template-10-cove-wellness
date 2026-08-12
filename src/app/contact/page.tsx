import { ContactForm } from "@/components/forms/ContactForm";
import { Artwork } from "@/components/ui/Artwork";
import { contact } from "@/content/contact";
import { socialLinks } from "@/content/navigation";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Find the Cove studio, opening hours and contact details, or send a note through the demo enquiry form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="wrap pt-10 md:pt-16">
        <p className="eyebrow">{contact.eyebrow}</p>
        <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-12">
          <h1 className="serif col-span-full text-balance text-[2.75rem] leading-[1.03] md:col-span-7 md:text-6xl lg:text-7xl">
            {contact.title}
          </h1>
          <p className="col-span-full max-w-prose leading-relaxed text-ink-soft md:col-span-4 md:col-start-9">
            {contact.lead}
          </p>
        </div>
      </section>

      <section className="wrap mt-16 grid gap-14 md:mt-24 md:grid-cols-12 md:gap-12">
        {/* Details */}
        <div className="md:col-span-5">
          <h2 className="eyebrow border-t border-line pt-5">Studio</h2>
          <address className="mt-5 not-italic leading-relaxed text-ink-soft">
            {contact.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>

          <dl className="mt-8 space-y-4">
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-1.5 text-sm">
                <a
                  href={`mailto:${contact.email}`}
                  className="link-quiet inline-block py-1 text-ink-soft hover:text-ink"
                >
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Telephone</dt>
              <dd className="mt-1.5 text-sm">
                <a
                  href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                  className="link-quiet inline-block py-1 text-ink-soft hover:text-ink"
                >
                  {contact.phone}
                </a>
              </dd>
            </div>
          </dl>

          <h2 className="eyebrow mt-12 border-t border-line pt-5">
            Opening hours
          </h2>
          <dl className="mt-5">
            {contact.hours.map((entry) => (
              <div
                key={entry.days}
                className="flex items-baseline justify-between gap-6 border-b border-line py-3 text-sm"
              >
                <dt className="text-ink-soft">{entry.days}</dt>
                <dd className="text-ink-faint">{entry.time}</dd>
              </div>
            ))}
          </dl>

          <h2 className="eyebrow mt-12 border-t border-line pt-5">Elsewhere</h2>
          <ul className="mt-4 flex flex-wrap gap-x-6">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="link-quiet inline-block py-1.5 text-sm text-ink-soft hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Artwork
            art={{
              motif: "ripple",
              tone: "sage",
              alt: "Concentric ripples spreading across still sage-green water",
            }}
            className="mt-12 aspect-[3/2] w-full"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>

        {/* Form */}
        <div className="md:col-span-6 md:col-start-7">
          <h2 className="eyebrow border-t border-line pt-5">Send a note</h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
