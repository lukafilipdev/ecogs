import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MapCard } from "@/components/ui/MapCard";
import { OfficeHoursCard } from "@/components/ui/OfficeHoursCard";
import { contact, site } from "@/content/site";
import { reveal } from "@/lib/reveal";

const row =
  "flex justify-between gap-3 border-b border-rule pb-3.5 text-ink hover:text-plum";

export function ContactSection() {
  return (
    <section className="bg-mist py-[clamp(88px,10vw,160px)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div {...reveal("up")}>
            <Eyebrow>Kontakt</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(52px,7.4vw,124px)] leading-[.92] tracking-[-.025em]">
              Vedno <em className="text-plum">dobrodošli.</em>
            </h2>
          </div>
          <p
            {...reveal("up", 100)}
            className="max-w-[380px] text-[17px] leading-relaxed text-copy"
          >
            Za pogovor, krst, poroko, pogreb ali preprosto vprašanje — pokličite
            ali nam pišite.
          </p>
        </div>

        <div className="mt-[clamp(40px,5vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(12px,1.6vw,20px)]">
          <div
            {...reveal("up")}
            className="flex flex-col justify-between gap-8 bg-white p-[clamp(28px,3vw,44px)]"
          >
            <div>
              <Eyebrow className="tracking-[.18em]">{site.fullName}</Eyebrow>
              <address className="mt-[22px] font-serif text-[32px] leading-[1.12] not-italic">
                {contact.street}
                <br />
                {contact.postalCode} {contact.city}
              </address>
              <div className="mt-7 flex flex-col gap-3.5 text-base">
                <a href={contact.phoneHref} className={row}>
                  <span className="text-muted">Telefon</span>
                  <span className="font-semibold">{contact.phoneDisplay}</span>
                </a>
                <a href={contact.emailHref} className={row}>
                  <span className="text-muted">E-pošta</span>
                  <span className="text-right font-semibold [overflow-wrap:anywhere]">
                    {contact.email}
                  </span>
                </a>
                <div className="flex justify-between gap-3">
                  <span className="text-muted">Duhovnica</span>
                  <span className="text-right font-semibold">
                    {contact.pastor}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <ButtonLink
                href={contact.phoneHref}
                variant="plum"
                className="flex-auto"
              >
                Pokličite nas
              </ButtonLink>
              <ButtonLink
                href="/kontakt"
                variant="outline"
                className="flex-auto"
              >
                Pošljite sporočilo
              </ButtonLink>
            </div>
          </div>

          <OfficeHoursCard
            revealDelay={100}
            note="Za osebni pogovor se lahko dogovorite tudi po telefonu — tudi izven uradnih ur."
          />

          <MapCard revealDelay={200} className="min-h-[420px]" />
        </div>
      </Container>
    </section>
  );
}
