import Image from "next/image";
import { photos } from "@/content/photos";
import { parallax, reveal } from "@/lib/reveal";

export function VerseInterlude() {
  return (
    <section className="relative flex h-[clamp(620px,112svh,1120px)] items-center justify-center overflow-hidden bg-ink text-white">
      <div
        {...parallax(0.12)}
        className="absolute inset-x-0 -top-[12%] -bottom-[12%]"
      >
        <Image
          src={photos.c166}
          alt="Pogled po cerkveni ladji proti odprtim vratom"
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-[50%_45%]"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(28,19,34,.7)_0%,rgba(28,19,34,.42)_70%)]" />

      <figure className="relative max-w-[1180px] px-6 text-center">
        <figcaption
          {...reveal("fade")}
          className="text-xs font-semibold tracking-[.3em] uppercase"
        >
          1 Jn 4,16
        </figcaption>
        <blockquote
          {...reveal("up", 150)}
          className="mt-7 font-serif text-[clamp(42px,6.6vw,108px)] leading-none tracking-[-.015em] text-balance italic"
        >
          »Bog je ljubezen in kdor ostaja v ljubezni, ostaja v Bogu.«
        </blockquote>
        <div
          {...reveal("fade", 500)}
          aria-hidden="true"
          className="mx-auto mt-10 h-[72px] w-px bg-white"
        />
      </figure>
    </section>
  );
}
