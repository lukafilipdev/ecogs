import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MapCard } from "@/components/ui/MapCard";
import { OfficeHoursCard } from "@/components/ui/OfficeHoursCard";
import { MaskedLine, PageHero } from "@/components/ui/PageHero";
import { photos } from "@/content/photos";
import { contact, site } from "@/content/site";
import { reveal } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `${contact.street}, ${contact.postalCode} ${contact.city}. Telefon ${contact.phoneDisplay}. Bogoslužje vsako nedeljo in ob praznikih ob ${contact.serviceTime}.`,
};

const detail = "border-t border-rule pt-[22px] text-base leading-relaxed";

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={photos.c59}
        alt="Odprta vrata v cerkev"
        overlay="linear-gradient(180deg, rgba(28,19,34,.55) 0%, rgba(28,19,34,.2) 40%, rgba(28,19,34,.9) 100%)"
        className="min-h-[clamp(460px,68svh,720px)]"
        contentClassName="pb-[clamp(44px,6vw,80px)]"
        imageClassName="object-[40%_50%]"
      >
        <Eyebrow tone="white" {...reveal("up")}>
          Kontakt
        </Eyebrow>
        <h1 className="mt-4 font-serif text-[clamp(64px,11vw,176px)] leading-[.9] tracking-[-.03em]">
          <MaskedLine delay={150} wrapperClassName="pb-[.08em]">
            Vrata so <em>odprta.</em>
          </MaskedLine>
        </h1>
      </PageHero>

      <section className="bg-mist py-[clamp(56px,7vw,110px)]">
        <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(12px,1.6vw,20px)]">
          <div {...reveal("up")} className="bg-white p-[clamp(28px,3vw,44px)]">
            <Eyebrow className="tracking-[.18em]">Naslov</Eyebrow>
            <address className="mt-[18px] font-serif text-[32px] leading-[1.12] not-italic">
              {site.fullName}
              <br />
              {contact.street}
              <br />
              {contact.postalCode} {contact.city}
            </address>
            <p className={`mt-[26px] ${detail}`}>
              <span className="text-muted">Bogoslužje</span>
              <br />
              <strong className="font-semibold">
                Vsako nedeljo in ob praznikih ob {contact.serviceTime}
              </strong>
            </p>
          </div>

          <div
            {...reveal("up", 100)}
            className="flex flex-col gap-[22px] bg-white p-[clamp(28px,3vw,44px)]"
          >
            <Eyebrow className="tracking-[.18em]">Pokličite ali pišite</Eyebrow>
            <a
              href={contact.phoneHref}
              className="font-serif text-[clamp(38px,3.4vw,52px)] leading-none text-ink hover:text-plum"
            >
              {contact.phoneDisplay}
            </a>
            <a
              href={contact.emailHref}
              className="text-lg font-semibold [overflow-wrap:anywhere] text-plum"
            >
              {contact.email}
            </a>
            <p className={detail}>
              <span className="text-muted">Duhovnica</span>
              <br />
              <strong className="font-semibold">{contact.pastor}</strong>
            </p>
            <ButtonLink
              href={contact.phoneHref}
              variant="plum"
              className="mt-auto"
            >
              Pokličite nas
            </ButtonLink>
          </div>

          <OfficeHoursCard
            revealDelay={200}
            note="Za osebni pogovor se lahko dogovorite tudi po telefonu."
            className="justify-start gap-0"
          />
        </Container>
      </section>

      <section className="bg-cream py-[clamp(80px,9vw,140px)]">
        <Container className="flex flex-wrap gap-[clamp(40px,6vw,100px)]">
          <div className="min-w-0 flex-[1_1_440px]">
            <h2
              {...reveal("up")}
              className="font-serif text-[clamp(44px,5vw,76px)] leading-[.98] tracking-[-.02em]"
            >
              Pošljite <em>sporočilo</em>
            </h2>
            <p className="mt-[18px] max-w-[460px] text-[17px] leading-relaxed text-muted">
              Odgovorili vam bomo v najkrajšem možnem času.
            </p>
            <ContactForm />
          </div>
          <MapCard
            zoom={13}
            revealAs="mask"
            className="min-h-[520px] min-w-0 flex-[1.2_1_440px]"
          />
        </Container>
      </section>
    </>
  );
}
