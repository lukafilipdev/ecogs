import type { Metadata } from "next";
import { ChurchGallery } from "@/components/sections/about/ChurchGallery";
import { CoreValues } from "@/components/sections/about/CoreValues";
import { PastorSection } from "@/components/sections/about/PastorSection";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MaskedLine, PageHero } from "@/components/ui/PageHero";
import { churchGallery, coreValues } from "@/content/community";
import { photos } from "@/content/photos";
import { reveal } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "O nas",
  description:
    "Evangeličanska skupnost Gornjih Slavečev in okoliških vasi — samostojna cerkvena občina od leta 1918.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={photos.c3}
        mobileImage={photos.c38}
        alt="Pročelje cerkve z zvonikom in stopniščem"
        overlay="linear-gradient(180deg, rgba(28,19,34,.55) 0%, rgba(28,19,34,0) 30%, rgba(28,19,34,.88) 100%)"
        className="min-h-[max(560px,86svh)]"
        contentClassName="pb-[clamp(44px,6vw,88px)]"
        imageClassName="object-[50%_30%]"
      >
        <Eyebrow tone="white" {...reveal("up")}>
          O nas
        </Eyebrow>
        <h1 className="mt-4 max-w-[1200px] font-serif text-[clamp(56px,9vw,148px)] leading-[.92] tracking-[-.03em]">
          <MaskedLine delay={150}>Skupnost, ki je</MaskedLine>
          <MaskedLine
            delay={300}
            wrapperClassName="pb-[.08em]"
            className="italic"
          >
            doma na Goričkem.
          </MaskedLine>
        </h1>
      </PageHero>

      <section className="bg-cream py-[clamp(88px,11vw,170px)]">
        <Container className="flex flex-wrap gap-[clamp(32px,6vw,120px)]">
          <Eyebrow {...reveal("up")} className="flex-[0_1_320px]">
            Kdo smo
          </Eyebrow>
          <div className="max-w-[900px] min-w-0 flex-[1_1_560px]">
            <p
              {...reveal("up")}
              className="font-serif text-[clamp(32px,3.6vw,54px)] leading-[1.1] tracking-[-.01em] text-pretty"
            >
              Smo evangeličanska skupnost Gornjih Slavečev in okoliških vasi med
              Cankovo, Sotino in državno mejo. Samostojna cerkvena občina smo od
              leta 1918.
            </p>
            <div className="mt-[clamp(40px,4vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-[clamp(24px,4vw,56px)] gap-y-6">
              <p
                {...reveal("up")}
                className="text-[17px] leading-[1.7] text-copy"
              >
                Pred tem so bili naši verniki del bodonske in križevske cerkvene
                občine, do cerkve pa so imeli tudi po 18 kilometrov. Danes je
                naša cerkev prostor bogoslužja, glasbe, veroučnih srečanj in
                praznovanj.
              </p>
              <p
                {...reveal("up", 100)}
                className="text-[17px] leading-[1.7] text-copy"
              >
                Kot del Evangeličanske cerkve v Sloveniji živimo luteransko
                izročilo: vera iz milosti, Božja beseda v središču in skupnost,
                v kateri ima vsak svoje mesto.
              </p>
            </div>
          </div>
        </Container>
        <CoreValues values={coreValues} />
      </section>

      <PastorSection />
      <ChurchGallery images={churchGallery} />
    </>
  );
}
