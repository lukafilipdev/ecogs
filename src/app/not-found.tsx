import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-end bg-ink pt-40 pb-[clamp(56px,8vw,120px)] text-white">
      <Container>
        <Eyebrow tone="lilac">Napaka 404</Eyebrow>
        <h1 className="mt-4 font-serif text-[clamp(56px,9vw,148px)] leading-[.92] tracking-[-.03em]">
          Strani ni <em>mogoče najti.</em>
        </h1>
        <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-copy-light">
          Stran, ki jo iščete, je bila morda premaknjena ali ne obstaja več.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="light" size="lg">
            Na domačo stran
          </ButtonLink>
          <ButtonLink href="/novice" variant="light-outline">
            Novice
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
