import Image from "next/image";
import type { ReactNode } from "react";
import type { ImageSource } from "@/content/types";
import { cn } from "@/lib/cn";
import { reveal } from "@/lib/reveal";
import { ArtDirectedImage } from "./ArtDirectedImage";
import { Container } from "./Container";

interface PageHeroProps {
  image: ImageSource;
  /** Optional portrait crop served on small screens. */
  mobileImage?: ImageSource;
  alt: string;
  /** CSS background for the readability overlay. */
  overlay: string;
  /** Section sizing (min-height). */
  className?: string;
  /** Classes for the inner content container (bottom padding, layout). */
  contentClassName?: string;
  imageClassName?: string;
  children: ReactNode;
}

/** Full-bleed photographic hero used at the top of every sub-page. */
export function PageHero({
  image,
  mobileImage,
  alt,
  overlay,
  className,
  contentClassName,
  imageClassName,
  children,
}: PageHeroProps) {
  const imgClass = cn("size-full object-cover", imageClassName);

  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-ink pt-[clamp(110px,14vh,150px)] text-white",
        className,
      )}
    >
      <div className="absolute inset-0">
        {mobileImage ? (
          <ArtDirectedImage
            desktop={image}
            mobile={mobileImage}
            alt={alt}
            priority
            className={imgClass}
            {...reveal("zoom")}
          />
        ) : (
          <Image
            src={image}
            alt={alt}
            fill
            preload
            sizes="100vw"
            className={imgClass}
            {...reveal("zoom")}
          />
        )}
      </div>
      <div className="absolute inset-0" style={{ background: overlay }} />
      <Container className={cn("relative", contentClassName)}>
        {children}
      </Container>
    </section>
  );
}

/** A heading line that slides up from behind a mask. */
export function MaskedLine({
  children,
  delay,
  className,
  wrapperClassName = "pb-[.04em]",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  wrapperClassName?: string;
}) {
  return (
    <span className={cn("block overflow-hidden", wrapperClassName)}>
      <span {...reveal("line", delay)} className={cn("block", className)}>
        {children}
      </span>
    </span>
  );
}
