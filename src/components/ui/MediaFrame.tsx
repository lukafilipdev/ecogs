import Image from "next/image";
import type { CSSProperties } from "react";
import type { ImageSource } from "@/content/types";
import { cn } from "@/lib/cn";
import { parallax, reveal, type RevealVariant } from "@/lib/reveal";

const hoverZoom = {
  none: "",
  sm: "group-hover:scale-[1.04]",
  md: "group-hover:scale-[1.05]",
  lg: "group-hover:scale-[1.06]",
};

interface MediaFrameProps {
  image: ImageSource;
  alt: string;
  /** Size + aspect-ratio + background classes for the frame. */
  className?: string;
  style?: CSSProperties;
  sizes: string;
  /** Scales the image when an ancestor `.group` is hovered. */
  zoom?: keyof typeof hoverZoom;
  /** Moves the image on scroll; the image is over-sized to hide the edges. */
  parallaxSpeed?: number;
  revealAs?: RevealVariant;
  revealDelay?: number;
  priority?: boolean;
}

/** An image cropped into a fixed-ratio frame. */
export function MediaFrame({
  image,
  alt,
  className,
  style,
  sizes,
  zoom = "none",
  parallaxSpeed,
  revealAs,
  revealDelay,
  priority,
}: MediaFrameProps) {
  const revealProps = revealAs ? reveal(revealAs, revealDelay) : undefined;

  const img = (
    <Image
      src={image}
      alt={alt}
      fill
      sizes={sizes}
      placeholder="blur"
      preload={priority}
      className={cn(
        "object-cover transition-transform duration-[1400ms] ease-out-soft",
        hoverZoom[zoom],
      )}
    />
  );

  return (
    <div
      {...revealProps}
      className={cn("relative overflow-hidden", className)}
      style={{ ...revealProps?.style, ...style }}
    >
      {parallaxSpeed ? (
        <div
          {...parallax(parallaxSpeed)}
          className="absolute inset-x-0 -top-[8%] h-[116%]"
        >
          {img}
        </div>
      ) : (
        img
      )}
    </div>
  );
}
