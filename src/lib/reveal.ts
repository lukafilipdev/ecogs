import type { CSSProperties } from "react";

export type RevealVariant = "up" | "line" | "mask" | "zoom" | "fade";

interface RevealProps {
  "data-reveal": RevealVariant;
  style?: CSSProperties;
  suppressHydrationWarning: true;
}

/**
 * Props that opt an element into the scroll-reveal animation handled by
 * `<MotionEffects />`. Spread onto any element: `<div {...reveal("up", 150)}>`.
 *
 * MotionEffects may add `data-revealed` before a Suspense boundary hydrates,
 * hence `suppressHydrationWarning` (it only affects this element's attributes).
 */
export function reveal(variant: RevealVariant, delayMs = 0): RevealProps {
  const props: RevealProps = {
    "data-reveal": variant,
    suppressHydrationWarning: true,
  };
  if (delayMs) {
    props.style = { "--reveal-delay": `${delayMs}ms` } as CSSProperties;
  }
  return props;
}

/** Props that opt an element into scroll parallax. Its parent should clip overflow. */
export function parallax(speed: number) {
  return { "data-parallax": speed, suppressHydrationWarning: true };
}
