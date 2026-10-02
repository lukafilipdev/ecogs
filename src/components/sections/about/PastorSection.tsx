import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { contact } from "@/content/site";
import type { ImageSource } from "@/content/types";
import { reveal } from "@/lib/reveal";

/** Pass `photo` once a portrait is available; until then a placeholder is shown. */
export function PastorSection({ photo }: { photo?: ImageSource }) {
  return (
    <section className="bg-ink py-[clamp(88px,10vw,150px)] text-white">
      <Container className="flex flex-wrap items-center gap-[clamp(36px,6vw,110px)]">
        <div
          {...reveal("mask")}
          className="relative flex aspect-[4/5] w-full min-w-0 flex-[0_1_460px] items-end overflow-hidden bg-[repeating-linear-gradient(135deg,var(--color-night)_0_14px,var(--color-night-stripe)_14px_28px)] p-[22px]"
        >
          {photo ? (
            <Image
              src={photo}
              alt={contact.pastor}
              fill
              sizes="(min-width: 900px) 460px, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          ) : (
            <span className="font-mono text-xs text-muted-light">
              fotografija duhovnice · 4:5
            </span>
          )}
        </div>

        <div className="min-w-0 flex-[1_1_420px]">
          <Eyebrow tone="lilac" {...reveal("up")}>
            Duhovnica
          </Eyebrow>
          <h2
            {...reveal("up", 100)}
            className="mt-4 font-serif text-[clamp(44px,5.4vw,84px)] leading-[.98] tracking-[-.02em]"
          >
            mag. Simona <em>Prosič Filip</em>
          </h2>
          <p
            {...reveal("up", 200)}
            className="mt-[26px] max-w-[560px] text-lg leading-[1.7] text-copy-light"
          >
            Duhovnica vodi bogoslužja, pripravlja na krst, konfirmacijo in
            poroko ter spremlja člane občine v veselih in težkih trenutkih. Za
            pogovor je vedno na voljo — v uradnih urah ali po dogovoru.
          </p>
          <div
            {...reveal("up", 300)}
            className="mt-[34px] flex flex-wrap gap-3"
          >
            <ButtonLink href={contact.phoneHref} variant="light" size="lg">
              Dogovorite se za pogovor
            </ButtonLink>
            <ButtonLink href={contact.emailHref} variant="light-outline">
              Pišite nam
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
