import { contact } from "@/content/site";
import { cn } from "@/lib/cn";
import { reveal, type RevealVariant } from "@/lib/reveal";

interface MapCardProps {
  zoom?: number;
  revealAs?: RevealVariant;
  revealDelay?: number;
  className?: string;
}

/** Greyscale Google Maps embed with a directions link overlay. */
export function MapCard({
  zoom = 14,
  revealAs = "up",
  revealDelay,
  className,
}: MapCardProps) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    contact.mapEmbedQuery,
  )}&z=${zoom}&output=embed`;

  return (
    <div
      {...reveal(revealAs, revealDelay)}
      className={cn("relative overflow-hidden bg-haze", className)}
    >
      <iframe
        title={`Zemljevid – ${contact.street}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 size-full border-0 [filter:grayscale(1)_contrast(.92)_brightness(1.04)]"
      />
      <a
        href={contact.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-x-4 bottom-4 flex items-center justify-between bg-white px-5 py-4 text-[15px] font-semibold text-ink hover:text-plum"
      >
        Navodila za pot <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
