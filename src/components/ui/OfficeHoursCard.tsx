import { officeHours } from "@/content/site";
import { cn } from "@/lib/cn";
import { reveal } from "@/lib/reveal";
import { Eyebrow } from "./Eyebrow";

interface OfficeHoursCardProps {
  note: string;
  revealDelay?: number;
  className?: string;
}

export function OfficeHoursCard({
  note,
  revealDelay,
  className,
}: OfficeHoursCardProps) {
  return (
    <div
      {...reveal("up", revealDelay)}
      className={cn(
        "flex flex-col justify-between gap-7 bg-ink p-[clamp(28px,3vw,44px)] text-white",
        className,
      )}
    >
      <div>
        <Eyebrow tone="lilac" className="tracking-[.18em]">
          Uradne ure
        </Eyebrow>
        <h3 className="mt-3.5 font-serif text-[28px] leading-[1.15]">
          Čas za pogovor z duhovnico
        </h3>
        <dl className="mt-[26px] flex flex-col">
          {officeHours.map((slot) => (
            <div
              key={slot.day}
              className="flex items-baseline justify-between gap-4 border-t border-night-line py-[18px]"
            >
              <dt className="font-serif text-3xl italic">{slot.day}</dt>
              <dd className="text-lg font-semibold tracking-[.02em] tabular-nums">
                {slot.time}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="border-t border-night-line pt-[18px] text-[15px] leading-relaxed text-copy-light">
        {note}
      </p>
    </div>
  );
}
