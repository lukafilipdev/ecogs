"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]:not([data-revealed])";
const PARALLAX_SELECTOR = "[data-parallax]";

/**
 * Drives the declarative scroll effects used across the site:
 *  - `data-reveal`   → marks elements `data-revealed` once they enter the viewport
 *                      (the animation itself lives in globals.css)
 *  - `data-parallax` → translates elements relative to their parent on scroll
 *
 * One observer and one scroll listener serve the whole app, so sections can
 * stay Server Components. A MutationObserver picks up elements added by
 * client navigation or filtering.
 */
export function MotionEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Observed element → element to reveal. "line" (translated out of an
    // overflow-hidden wrapper) and "mask" (fully clip-pathed) start out
    // invisible to IntersectionObserver, so their parent is observed instead.
    const revealTargets = new Map<Element, Element[]>();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          revealTargets
            .get(entry.target)
            ?.forEach((el) => el.setAttribute("data-revealed", ""));
          revealTargets.delete(entry.target);
          revealObserver.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );

    let parallaxElements: HTMLElement[] = [];

    const scan = () => {
      // Forget elements removed by navigation.
      for (const observed of revealTargets.keys()) {
        if (observed.isConnected) continue;
        revealObserver.unobserve(observed);
        revealTargets.delete(observed);
      }
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
        const hidden =
          el.dataset.reveal === "line" || el.dataset.reveal === "mask";
        const observed = hidden ? (el.parentElement ?? el) : el;
        const pending = revealTargets.get(observed) ?? [];
        if (pending.includes(el)) return;
        revealTargets.set(observed, [...pending, el]);
        revealObserver.observe(observed);
      });
      parallaxElements = Array.from(
        document.querySelectorAll<HTMLElement>(PARALLAX_SELECTOR),
      );
    };

    const updateParallax = () => {
      const viewportHeight = window.innerHeight;
      for (const el of parallaxElements) {
        const rect = el.parentElement?.getBoundingClientRect();
        if (!rect || rect.bottom < -200 || rect.top > viewportHeight + 200) {
          continue;
        }
        const speed = Number(el.dataset.parallax) || 0.1;
        const offset =
          (rect.top + rect.height / 2 - viewportHeight / 2) * speed;
        el.style.transform = `translate3d(0, ${(-offset).toFixed(1)}px, 0)`;
      }
    };

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        updateParallax();
      });
    };

    const mutationObserver = new MutationObserver(() => {
      scan();
      if (!reducedMotion) updateParallax();
    });

    scan();
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    if (!reducedMotion) {
      updateParallax();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
