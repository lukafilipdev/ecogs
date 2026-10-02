import Image from "next/image";
import type { ReactNode } from "react";
import logoWhite from "@/assets/brand/logo-white.png";
import { Container } from "@/components/ui/Container";
import { SmartLink } from "@/components/ui/SmartLink";
import {
  contact,
  externalLinks,
  legalLinks,
  mainNav,
  site,
} from "@/content/site";

const footerLink = "block text-white hover:text-lilac";

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-3.5 text-xs font-semibold tracking-[.18em] text-muted-light uppercase">
        {title}
      </h2>
      {children}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-ink-deep pt-[clamp(72px,9vw,128px)] text-white">
      <Container>
        <div className="flex flex-wrap justify-between gap-x-[clamp(32px,5vw,80px)] gap-y-12">
          <div className="max-w-[420px] flex-[1_1_300px]">
            <Image
              src={logoWhite}
              alt="ECOGS Gornji Slaveči"
              sizes="160px"
              className="h-[52px] w-auto"
            />
            <p className="mt-7 font-serif text-[28px] leading-[1.2]">
              {site.fullName}
            </p>
          </div>

          <div className="grid flex-[1_1_560px] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-8 gap-y-9 text-[15px] leading-[1.7]">
            <FooterColumn title="Naslov">
              <address className="not-italic">
                {contact.street}
                <br />
                {contact.postalCode} {contact.city}
                <br />
                {contact.country}
              </address>
            </FooterColumn>

            <FooterColumn title="Kontakt">
              <a href={contact.phoneHref} className={footerLink}>
                {contact.phoneDisplay}
              </a>
              <a
                href={contact.emailHref}
                className={`${footerLink} [overflow-wrap:anywhere]`}
              >
                {contact.email}
              </a>
            </FooterColumn>

            <FooterColumn title="Strani">
              <nav aria-label="Noga">
                {mainNav.map((item) => (
                  <SmartLink
                    key={item.href}
                    href={item.href}
                    className={footerLink}
                  >
                    {item.label}
                  </SmartLink>
                ))}
              </nav>
            </FooterColumn>

            <FooterColumn title="Povezave">
              {externalLinks.map((item) => (
                <SmartLink
                  key={item.href}
                  href={item.href}
                  className={footerLink}
                >
                  {item.label}
                </SmartLink>
              ))}
            </FooterColumn>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="mt-[clamp(64px,8vw,120px)] px-[clamp(12px,2vw,32px)] text-center font-serif text-[14.6vw] leading-[.78] tracking-[-.04em] whitespace-nowrap text-night-rule"
      >
        Gornji <em>Slaveči</em>
      </div>

      <Container className="flex flex-wrap justify-between gap-x-7 gap-y-3 border-t border-night-rule pt-7 pb-[calc(28px+env(safe-area-inset-bottom))] text-[13px] text-muted-light">
        <span>
          © {new Date().getFullYear()} {site.name} — {site.fullName}
        </span>
        <div className="flex gap-6">
          {legalLinks.map((item) => (
            <SmartLink
              key={item.label}
              href={item.href}
              className="text-muted-light hover:text-white"
            >
              {item.label}
            </SmartLink>
          ))}
        </div>
      </Container>
    </footer>
  );
}
