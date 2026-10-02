"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { CommunityActivity } from "@/content/types";
import { cn } from "@/lib/cn";
import { reveal } from "@/lib/reveal";

export function CommunityLife({
  activities,
}: {
  activities: CommunityActivity[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = activities[activeIndex];

  return (
    <section className="bg-ink py-[clamp(88px,11vw,170px)] text-white">
      <Container>
        <div {...reveal("up")} className="max-w-[1100px]">
          <Eyebrow tone="lilac">Življenje skupnosti</Eyebrow>
          <h2 className="mt-4 font-serif text-[clamp(48px,7vw,116px)] leading-[.95] tracking-[-.025em] text-balance">
            Vera, ki živi <em className="text-lilac">med ljudmi.</em>
          </h2>
        </div>

        <div className="mt-[clamp(48px,6vw,96px)] flex flex-row-reverse flex-wrap items-start gap-[clamp(32px,5vw,88px)]">
          <div
            {...reveal("mask")}
            className="relative aspect-[4/5] max-h-[760px] min-w-0 flex-[1_1_400px] overflow-hidden bg-night"
          >
            {activities.map((activity, index) => (
              <Image
                key={activity.title}
                src={activity.image}
                alt={activity.title}
                fill
                sizes="(min-width: 1000px) 45vw, 100vw"
                aria-hidden={index !== activeIndex}
                className={cn(
                  "object-cover transition-[opacity,transform] duration-[1000ms,2400ms] ease-[ease,var(--ease-out-soft)]",
                  index === activeIndex
                    ? "scale-100 opacity-100"
                    : "scale-[1.06] opacity-0",
                )}
              />
            ))}
            <div
              aria-live="polite"
              className="absolute bottom-5 left-5 rounded-full bg-ink/72 px-3.5 py-2 text-xs font-semibold tracking-[.16em] uppercase"
            >
              {active.title}
            </div>
          </div>

          <ul className="min-w-0 flex-[1.1_1_440px] border-b border-night-line">
            {activities.map((activity, index) => {
              const isActive = index === activeIndex;
              const select = () => setActiveIndex(index);
              return (
                <li key={activity.title} className="border-t border-night-line">
                  <button
                    type="button"
                    onMouseEnter={select}
                    onFocus={select}
                    onClick={select}
                    aria-pressed={isActive}
                    className="block w-full cursor-pointer py-[clamp(20px,2.2vw,30px)] text-left"
                  >
                    <span className="flex items-baseline gap-[clamp(16px,2vw,32px)]">
                      <span className="w-7 flex-none text-xs font-semibold tracking-[.14em] text-muted-light">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "flex-1 font-serif text-[clamp(30px,3.3vw,52px)] leading-[1.05] transition-[opacity,padding] duration-[400ms,500ms] ease-out-soft",
                          isActive
                            ? "italic opacity-100 nav:pl-[18px]"
                            : "opacity-42",
                        )}
                      >
                        {activity.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "text-[22px] transition-opacity duration-400",
                          isActive ? "opacity-100" : "opacity-0",
                        )}
                      >
                        →
                      </span>
                    </span>
                    <span
                      className={cn(
                        "block overflow-hidden transition-[max-height] duration-600 ease-out-soft",
                        isActive ? "max-h-40" : "max-h-0",
                      )}
                    >
                      <span className="mt-3.5 ml-[clamp(44px,calc(2vw+28px),60px)] block max-w-[460px] text-base leading-relaxed text-copy-light">
                        {activity.text}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
