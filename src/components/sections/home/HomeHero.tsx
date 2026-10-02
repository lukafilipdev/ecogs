import Link from "next/link";
import { ArtDirectedImage } from "@/components/ui/ArtDirectedImage";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MaskedLine } from "@/components/ui/PageHero";
import { photos } from "@/content/photos";
import { contact } from "@/content/site";
import type { Article } from "@/content/types";
import { parallax, reveal } from "@/lib/reveal";

export function HomeHero({ latest }: { latest?: Article }) {
  return (
    <section className="relative flex min-h-[max(640px,100svh)] flex-col justify-end overflow-hidden bg-ink pt-[clamp(110px,14vh,150px)] text-white">
      <div
        {...parallax(0.22)}
        className="absolute inset-x-0 -top-[6%] -bottom-[6%]"
      >
        <ArtDirectedImage
          desktop={photos.c266}
          mobile={photos.c6}
          alt="Evangeličanska cerkev v Gornjih Slavečih sredi goričke pokrajine"
          priority
          className="size-full object-cover object-[50%_40%]"
          {...reveal("zoom")}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,19,34,.55)_0%,rgba(28,19,34,0)_26%,rgba(28,19,34,0)_42%,rgba(28,19,34,.86)_100%)]" />

      <Container className="relative">
        <div className="flex flex-wrap items-end justify-between gap-[clamp(28px,4vw,64px)]">
          <div className="min-w-0 flex-[1_1_520px]">
            <div
              {...reveal("up", 500)}
              className="flex items-center gap-3.5 text-xs font-semibold tracking-[.22em] uppercase"
            >
              <span className="h-px w-9 bg-white" aria-hidden="true" />
              Evangeličanska cerkvena občina
            </div>
            <h1 className="mt-[18px] font-serif text-[clamp(64px,13vw,196px)] leading-[.88] tracking-[-.025em]">
              <MaskedLine delay={650}>Gornji</MaskedLine>
              <MaskedLine
                delay={800}
                wrapperClassName="pb-[.1em]"
                className="pl-[clamp(0px,6vw,110px)] italic"
              >
                Slaveči
              </MaskedLine>
            </h1>
          </div>

          <div
            {...reveal("up", 1100)}
            className="flex-[0_1_380px] pb-[clamp(8px,2vw,34px)]"
          >
            <p className="font-serif text-[clamp(26px,2.4vw,34px)] leading-[1.15] text-balance">
              Skupnost vere, upanja in bližine — na Goričkem od leta 1918.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/o-nas" variant="light" size="lg">
                Spoznajte nas <span aria-hidden="true">→</span>
              </ButtonLink>
              <ButtonLink href="/novice" variant="light-outline">
                Najnovejše novice
              </ButtonLink>
            </div>
          </div>
        </div>

        <div
          {...reveal("fade", 1400)}
          className="mt-[clamp(36px,5vw,64px)] flex flex-wrap items-center justify-between gap-x-10 gap-y-3.5 border-t border-hero-rule pt-5 pb-[calc(22px+env(safe-area-inset-bottom))] text-sm"
        >
          <div className="flex flex-wrap gap-x-9 gap-y-2">
            <span>
              <span className="text-lilac">Bogoslužje</span>
              {"  "}nedelje in prazniki ob {contact.serviceTime}
            </span>
            <span>
              <span className="text-lilac">Naslov</span>
              {"  "}
              {contact.street}, {contact.city}
            </span>
          </div>
          {latest && (
            <Link
              href={`/novice/${latest.slug}`}
              className="flex min-h-11 min-w-0 items-center gap-3 text-white transition-opacity hover:text-white hover:opacity-80"
            >
              <span className="rounded-full bg-plum px-2.5 py-[5px] text-[11px] font-bold tracking-[.16em] uppercase">
                Novo
              </span>
              <span className="max-w-[360px] truncate">{latest.title}</span>
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
