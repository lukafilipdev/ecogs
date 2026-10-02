import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { TextLink } from "@/components/ui/TextLink";
import { photos } from "@/content/photos";
import type { Milestone } from "@/content/types";
import { reveal } from "@/lib/reveal";

export function HistoryTeaser({ milestones }: { milestones: Milestone[] }) {
  return (
    <section className="overflow-hidden bg-cream pt-[clamp(96px,11vw,170px)] pb-[clamp(80px,9vw,140px)]">
      <Container>
        <div className="flex flex-wrap items-end gap-[clamp(32px,5vw,88px)]">
          <div {...reveal("up")} className="min-w-0 flex-[1_1_380px]">
            <Eyebrow>Od leta 1918</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(48px,6.6vw,108px)] leading-[.95] tracking-[-.025em]">
              Naša <em>zgodovina</em>
            </h2>
            <p className="mt-[26px] max-w-[480px] text-lg leading-[1.65] text-pretty text-copy">
              Verniki so nekoč do cerkve hodili tudi po 18 kilometrov. Iz želje
              po lastnem domu vere je nastala samostojna cerkvena občina — in
              cerkev, ki so jo zgradili z darovi domačinov, izseljencev v
              Ameriki in prijateljev od blizu in daleč.
            </p>
            <TextLink href="/zgodovina" className="mt-[26px]">
              Spoznajte našo zgodovino
            </TextLink>
          </div>
          <MediaFrame
            image={photos.c225}
            alt="Cerkev s poudarjenimi pilastri in zvonikom"
            sizes="(min-width: 1000px) 55vw, 100vw"
            parallaxSpeed={0.07}
            revealAs="mask"
            className="aspect-[16/10] min-w-0 flex-[1.4_1_520px] bg-sand"
          />
        </div>

        <ol className="mt-[clamp(64px,8vw,120px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-x-[clamp(24px,3vw,48px)]">
          {milestones.map((milestone, index) => (
            <li
              key={milestone.year}
              {...reveal("up", index * 120)}
              className="relative border-t border-rule-strong pt-7 pb-9"
            >
              <span
                aria-hidden="true"
                className="absolute -top-[5px] left-0 size-[9px] rounded-full bg-plum"
              />
              <div className="font-serif text-[clamp(76px,8vw,132px)] leading-[.9] tracking-[-.03em] text-plum-soft">
                {milestone.year}
              </div>
              <h3 className="mt-[18px] text-[17px] font-semibold">
                {milestone.title}
              </h3>
              <p className="mt-2 max-w-[300px] text-[15px] leading-relaxed text-muted">
                {milestone.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
