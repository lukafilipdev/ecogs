import type { Article } from "@/content/types";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/format";

interface ArticleMetaProps {
  article: Pick<Article, "category" | "date">;
  /** "badge" renders the category as a pill, "inline" as coloured text. */
  variant?: "badge" | "inline";
  className?: string;
}

export function ArticleMeta({
  article,
  variant = "inline",
  className,
}: ArticleMetaProps) {
  const date = <time dateTime={article.date}>{formatDate(article.date)}</time>;

  if (variant === "badge") {
    return (
      <div
        className={cn(
          "flex items-center gap-3.5 text-[13px] text-muted",
          className,
        )}
      >
        <span className="rounded-full bg-mist px-3 py-1.5 text-[11px] font-bold tracking-[.14em] text-plum uppercase">
          {article.category}
        </span>
        {date}
      </div>
    );
  }

  return (
    <div className={cn("text-[13px] text-muted", className)}>
      <span className="font-semibold text-plum">{article.category}</span>
      {"  ·  "}
      {date}
    </div>
  );
}
