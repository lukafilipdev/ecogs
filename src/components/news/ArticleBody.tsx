import Image from "next/image";
import type { ArticleBlock } from "@/content/types";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { reveal } from "@/lib/reveal";

const PROSE_WIDTH = "(min-width: 780px) 700px, 100vw";

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="mb-[26px] text-lg leading-[1.78] text-pretty text-prose">
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h2 className="mt-[52px] mb-[18px] font-serif text-[clamp(30px,3vw,40px)] leading-[1.1]">
          {block.text}
        </h2>
      );

    case "quote":
      return (
        <figure
          {...reveal("up")}
          className="my-14 border-y border-rule-strong py-10 text-center"
        >
          <blockquote className="font-serif text-[clamp(30px,3.4vw,44px)] leading-[1.12] text-balance text-ink italic">
            »{block.text}«
          </blockquote>
          <figcaption className="mt-[18px] text-xs font-semibold tracking-[.2em] text-plum uppercase">
            {block.cite}
          </figcaption>
        </figure>
      );

    case "image":
      return (
        <figure className="my-12">
          <div {...reveal("mask")} className="overflow-hidden bg-mist">
            <Image
              src={block.image}
              alt={block.caption}
              sizes={PROSE_WIDTH}
              placeholder="blur"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            {block.caption}
          </figcaption>
        </figure>
      );

    case "gallery":
      return (
        <figure className="my-12">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-2.5">
            {block.images.map((image) => (
              <div key={image.src} className="group">
                <MediaFrame
                  image={image}
                  alt="Utrinek z dogodka"
                  sizes="(min-width: 780px) 240px, 50vw"
                  zoom="md"
                  revealAs="mask"
                  className="aspect-[4/5] bg-mist [&_img]:duration-[1200ms]"
                />
              </div>
            ))}
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            {block.caption}
          </figcaption>
        </figure>
      );
  }
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </>
  );
}
