import type { Metadata } from "next";
import { HistoryChapterRow } from "@/components/sections/history/HistoryChapterRow";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MaskedLine, PageHero } from "@/components/ui/PageHero";
import { historyChapters } from "@/content/history";
import { photos } from "@/content/photos";
import { reveal } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Zgodovina",
  description:
    "Od prve verske šole leta 1874 do danes — zgodovina Evangeličanske cerkvene občine Gornji Slaveči.",
};

export default function HistoryPage() {
  return (
    <>
      <PageHero
        image={photos.c17}
        mobileImage={photos.c239}
        alt="Cerkev s strani"
        overlay="linear-gradient(180deg, rgba(28,19,34,.5) 0%, rgba(28,19,34,.1) 35%, rgba(28,19,34,.9) 100%)"
        className="min-h-[max(600px,92svh)]"
        contentClassName="flex flex-wrap items-end justify-between gap-7 pb-[clamp(44px,6vw,88px)]"
      >
        <div>
          <Eyebrow tone="white" {...reveal("up")}>
            Zgodovina
          </Eyebrow>
          <h1 className="mt-4 font-serif text-[clamp(60px,10vw,168px)] leading-[.9] tracking-[-.03em]">
            <MaskedLine delay={150}>Več kot stoletje</MaskedLine>
            <MaskedLine
              delay={300}
              wrapperClassName="pb-[.08em]"
              className="italic"
            >
              vere in dela.
            </MaskedLine>
          </h1>
        </div>
        <div
          {...reveal("up", 500)}
          className="font-serif text-[clamp(28px,3vw,44px)] leading-none"
        >
          1874 — danes
        </div>
      </PageHero>

      <section className="bg-cream pt-[clamp(88px,10vw,160px)] pb-[clamp(40px,5vw,80px)]">
        <Container size="medium">
          <p
            {...reveal("up")}
            className="font-serif text-[clamp(30px,3.4vw,50px)] leading-[1.14] tracking-[-.01em] text-pretty"
          >
            V vaseh med Cankovo in Sotino je živelo veliko evangeličanov, a
            duhovnik je v Gornje Slaveče prihajal le ob večjih praznikih. To je
            zgodba o tem, kako je skupnost zgradila svoj dom — kamen za kamnom,
            dar za darom.
          </p>
        </Container>
      </section>

      <section className="bg-cream pt-[clamp(40px,5vw,80px)] pb-[clamp(96px,11vw,170px)]">
        <Container>
          <ol>
            {historyChapters.map((chapter) => (
              <HistoryChapterRow key={chapter.year} chapter={chapter} />
            ))}
          </ol>

          <div className="flex flex-wrap items-end justify-between gap-7 border-t border-rule-strong pt-[clamp(56px,6vw,96px)]">
            <h2
              {...reveal("up")}
              className="max-w-[800px] font-serif text-[clamp(44px,5.4vw,84px)] leading-[.98] tracking-[-.02em]"
            >
              Zgodbo pišemo <em className="text-plum">še naprej.</em>
            </h2>
            <ButtonLink href="/kontakt" variant="plum" size="lg">
              Obiščite nas →
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
