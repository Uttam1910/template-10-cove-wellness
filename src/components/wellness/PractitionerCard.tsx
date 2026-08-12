import { Artwork } from "@/components/ui/Artwork";
import type { Practitioner } from "@/content/types";

export function PractitionerCard({
  practitioner,
}: {
  practitioner: Practitioner;
}) {
  return (
    <article className="border-t border-line pt-5">
      <Artwork
        art={practitioner.artwork}
        className="aspect-square w-full"
        sizes="(max-width: 640px) 50vw, 25vw"
      />
      <h3 className="serif mt-5 text-xl leading-tight">{practitioner.name}</h3>
      <p className="mt-1 text-xs tracking-wide text-accent">
        {practitioner.role}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {practitioner.bio}
      </p>
      <p className="mt-4 text-xs text-ink-faint">{practitioner.specialty}</p>
    </article>
  );
}
