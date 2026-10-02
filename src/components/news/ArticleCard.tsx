import Link from "next/link";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { Article } from "@/content/types";
import { cn } from "@/lib/cn";
import { reveal } from "@/lib/reveal";
import { ArticleMeta } from "./ArticleMeta";

interface ArticleCardProps {
  article: Article;
  showExcerpt?: boolean;
  titleClassName?: string;
}

/** Grid card used in the news archive and "Preberite tudi". */
export function ArticleCard({
  article,
  showExcerpt = false,
  titleClassName = "text-[clamp(26px,2.2vw,32px)]",
}: ArticleCardProps) {
  return (
    <Link
      href={`/novice/${article.slug}`}
      {...reveal("up")}
      className="group block text-ink hover:text-ink"
    >
      <MediaFrame
        image={article.image}
        alt={article.title}
        sizes="(min-width: 1100px) 33vw, (min-width: 700px) 50vw, 100vw"
        zoom="md"
        className="aspect-[3/2] bg-mist"
      />
      <ArticleMeta article={article} className="mt-5" />
      <h3
        className={cn(
          "mt-2.5 font-serif leading-[1.06] text-balance",
          titleClassName,
        )}
      >
        {article.title}
      </h3>
      {showExcerpt && (
        <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
          {article.excerpt}
        </p>
      )}
    </Link>
  );
}
