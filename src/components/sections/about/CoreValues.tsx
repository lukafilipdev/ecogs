import { Container } from "@/components/ui/Container";
import type { CoreValue } from "@/content/types";
import { reveal } from "@/lib/reveal";

export function CoreValues({ values }: { values: CoreValue[] }) {
  return (
    <Container
      as="ul"
      className="mt-[clamp(72px,9vw,140px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-[clamp(20px,3vw,40px)]"
    >
      {values.map((value, index) => (
        <li
          key={value.word}
          {...reveal("up", index * 100)}
          className="border-t border-rule-strong pt-6 pb-8"
        >
          <div className="text-xs font-semibold tracking-[.14em] text-plum">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="mt-3.5 font-serif text-[clamp(44px,4.4vw,68px)] leading-none italic">
            {value.word}
          </h3>
          <p className="mt-3.5 max-w-[280px] text-[15px] leading-relaxed text-muted">
            {value.text}
          </p>
        </li>
      ))}
    </Container>
  );
}
