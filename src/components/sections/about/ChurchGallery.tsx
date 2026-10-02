import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { GalleryImage } from "@/content/types";
import { reveal } from "@/lib/reveal";

export function ChurchGallery({ images }: { images: GalleryImage[] }) {
  return (
    <section className="bg-cream py-[clamp(88px,10vw,150px)]">
      <Container>
        <div className="mb-[clamp(36px,4vw,64px)] flex flex-wrap items-end justify-between gap-5">
          <h2
            {...reveal("up")}
            className="font-serif text-[clamp(44px,5.4vw,84px)] leading-[.98] tracking-[-.02em]"
          >
            Naša <em>cerkev</em>
          </h2>
          <p className="max-w-[420px] text-base leading-relaxed text-muted">
            Notranjost je leta 1938 poslikal cerkveni slikar Ivan Cmerekar.
            Oltar krasi podoba Jezusa na Oljski gori.
          </p>
        </div>

        <div className="columns-[3_280px] gap-x-[clamp(12px,1.6vw,20px)]">
          {images.map(({ image, alt }) => (
            <figure
              key={image.src}
              {...reveal("mask")}
              className="group mb-[clamp(12px,1.6vw,20px)] break-inside-avoid overflow-hidden bg-mist"
            >
              <Image
                src={image}
                alt={alt}
                sizes="(min-width: 960px) 33vw, (min-width: 600px) 50vw, 100vw"
                placeholder="blur"
                className="h-auto w-full transition-transform duration-[1400ms] ease-out-soft group-hover:scale-[1.04]"
              />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
