import { getImageProps } from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import type { ImageSource } from "@/content/types";

/** Viewports at or below this width receive the mobile crop. */
const MOBILE_QUERY = "(max-width: 760px)";

type ArtDirectedImageProps = Omit<
  ComponentPropsWithoutRef<"img">,
  "src" | "srcSet" | "width" | "height"
> & {
  desktop: ImageSource;
  mobile: ImageSource;
  alt: string;
  /** Load eagerly with high priority (above-the-fold heroes). */
  priority?: boolean;
};

/**
 * Serves a different crop on small screens via <picture>, while still
 * using the Next.js image optimizer for every source.
 */
export function ArtDirectedImage({
  desktop,
  mobile,
  alt,
  priority = false,
  ...imgProps
}: ArtDirectedImageProps) {
  const common = {
    alt,
    sizes: "100vw",
    fetchPriority: priority ? "high" : undefined,
    loading: priority ? "eager" : "lazy",
  } as const;

  const { srcSet: mobileSrcSet } = getImageProps({
    ...common,
    src: mobile,
  }).props;
  const { props: desktopProps } = getImageProps({ ...common, src: desktop });

  return (
    <picture className="block size-full">
      <source media={MOBILE_QUERY} srcSet={mobileSrcSet} />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt is set via getImageProps */}
      <img {...desktopProps} {...imgProps} />
    </picture>
  );
}
