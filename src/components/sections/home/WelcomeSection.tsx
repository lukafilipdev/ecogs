import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { TextLink } from "@/components/ui/TextLink";
import { photos } from "@/content/photos";
import { reveal } from "@/lib/reveal";

export function WelcomeSection() {
  return (
    <section className="bg-cream pt-[clamp(96px,12vw,184px)] pb-[clamp(80px,10vw,150px)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-[clamp(32px,5vw,80px)]">
          <h2
            {...reveal("up")}
            className="max-w-[1000px] flex-[1_1_560px] font-serif text-[clamp(48px,7.4vw,120px)] leading-[.96] tracking-[-.025em] text-balance"
          >
            Cerkev je več kot stavba.{" "}
            <em className="text-plum">Je skupnost.</em>
          </h2>
          <div {...reveal("up", 150)} className="flex-[0_1_400px]">
            <Eyebrow>Dobrodošli</Eyebrow>
            <p className="mt-[18px] text-lg leading-[1.65] text-pretty text-copy">
              ECOGS povezuje vero, družine in generacije v Gornjih Slavečih in
              okoliških vaseh Goričkega. Smo del Evangeličanske cerkve v
              Sloveniji — skupnost, ki se zbira ob Božji besedi, pesmi in drug
              ob drugem.
            </p>
          </div>
        </div>

        <div className="mt-[clamp(56px,8vw,120px)] flex flex-wrap items-start gap-[clamp(20px,3vw,48px)]">
          <figure className="min-w-0 flex-[1.7_1_560px]">
            <MediaFrame
              image={photos.c17}
              alt="Cerkev s strani, v ozadju goričke gorice"
              sizes="(min-width: 1100px) 60vw, 100vw"
              parallaxSpeed={0.07}
              revealAs="mask"
              className="aspect-[3/2] bg-sand"
            />
            <figcaption className="mt-3.5 flex justify-between gap-4 text-[13px] text-muted">
              <span>Cerkev, posvečena 28. oktobra 1928</span>
              <span>Gornji Slaveči</span>
            </figcaption>
          </figure>

          <div className="ml-auto max-w-[min(420px,78%)] flex-[1_1_280px] pt-[clamp(0px,11vw,200px)]">
            <MediaFrame
              image={photos.c106}
              alt="Pesmarica na cerkveni klopi"
              sizes="(min-width: 760px) 420px, 78vw"
              parallaxSpeed={0.1}
              revealAs="mask"
              revealDelay={200}
              className="aspect-[4/5] bg-sand"
            />
            <p
              {...reveal("up")}
              className="mt-[26px] font-serif text-[clamp(24px,2vw,30px)] leading-[1.2] text-balance"
            >
              Vrata so odprta vsem — domačinom, obiskovalcem in popotnikom.
            </p>
            <TextLink href="/o-nas" tone="plum" className="mt-5 py-2.5">
              Kdo smo
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
