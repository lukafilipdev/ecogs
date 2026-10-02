import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { HistoryChapter } from "@/content/types";
import { reveal } from "@/lib/reveal";

export function HistoryChapterRow({ chapter }: { chapter: HistoryChapter }) {
  const { figure } = chapter;

  return (
    <li className="flex flex-wrap gap-x-[clamp(32px,5vw,96px)] gap-y-3 border-t border-rule-strong py-[clamp(40px,5vw,72px)]">
      <div className="max-w-[480px] flex-[1_1_300px]">
        <div
          {...reveal("up")}
          className="sticky top-[110px] font-serif text-[clamp(88px,11vw,184px)] leading-[.85] tracking-[-.04em] text-plum-soft"
        >
          {chapter.year}
        </div>
      </div>

      <div className="min-w-0 flex-[1.3_1_460px]">
        <Eyebrow {...reveal("up")}>{chapter.kicker}</Eyebrow>
        <h2
          {...reveal("up")}
          className="mt-3.5 font-serif text-[clamp(34px,3.4vw,52px)] leading-[1.04] text-balance"
        >
          {chapter.title}
        </h2>
        <p
          {...reveal("up")}
          className="mt-5 max-w-[640px] text-lg leading-[1.72] text-pretty text-copy"
        >
          {chapter.text}
        </p>

        {figure && (
          <figure className="mt-9">
            <MediaFrame
              image={figure.image}
              alt={figure.caption}
              sizes="(min-width: 1000px) 55vw, 100vw"
              parallaxSpeed={0.06}
              revealAs="mask"
              className="bg-sand"
              style={{ aspectRatio: figure.ratio }}
            />
            <figcaption className="mt-3 text-sm text-muted">
              {figure.caption}
            </figcaption>
          </figure>
        )}
      </div>
    </li>
  );
}
