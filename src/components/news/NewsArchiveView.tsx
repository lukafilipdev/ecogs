import Link from "next/link";
import type { Article, NewsCategory } from "@/content/types";
import { cn } from "@/lib/cn";
import { reveal } from "@/lib/reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ArticleCard } from "./ArticleCard";
import { ArticleGrid } from "./ArticleGrid";
import { ArticleMeta } from "./ArticleMeta";

export const CATEGORY_PARAM = "kategorija";

interface NewsArchiveViewProps {
  articles: Article[];
  categories: { slug: string; label: NewsCategory }[];
  /** Selected category slug, or null for all. */
  activeSlug: string | null;
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: string;
}) {
  return (
    <Link
      href={href}
      scroll={false}
      replace
      aria-current={active ? "page" : undefined}
      className={cn(
        "inline-flex min-h-11 flex-none items-center rounded-full border px-5 py-3 text-sm font-semibold transition-colors duration-300",
        active
          ? "border-ink bg-ink text-white hover:text-white"
          : "border-rule-strong bg-transparent text-ink hover:border-ink hover:text-ink",
      )}
    >
      {children}
    </Link>
  );
}

function LeadArticle({ article }: { article: Article }) {
  return (
    <Link
      href={`/novice/${article.slug}`}
      {...reveal("up")}
      className="group mb-[clamp(48px,6vw,88px)] flex flex-wrap items-center gap-[clamp(24px,4vw,64px)] border-b border-rule-soft pb-[clamp(48px,6vw,88px)] text-ink hover:text-ink"
    >
      <MediaFrame
        image={article.image}
        alt={article.title}
        sizes="(min-width: 1000px) 55vw, 100vw"
        zoom="sm"
        className="aspect-[3/2] min-w-0 flex-[1.4_1_480px] bg-mist [&_img]:duration-[1600ms]"
      />
      <div className="min-w-0 flex-[1_1_340px]">
        <ArticleMeta article={article} variant="badge" />
        <h2 className="mt-[18px] font-serif text-[clamp(36px,4vw,64px)] leading-none tracking-[-.02em] text-balance">
          {article.title}
        </h2>
        <p className="mt-[18px] text-[17px] leading-relaxed text-copy">
          {article.excerpt}
        </p>
        <span className="mt-[22px] inline-flex gap-2.5 text-[15px] font-semibold text-plum">
          Preberi več →
        </span>
      </div>
    </Link>
  );
}

export function NewsArchiveView({
  articles,
  categories,
  activeSlug,
}: NewsArchiveViewProps) {
  const activeCategory = categories.find((c) => c.slug === activeSlug);
  const filtered = activeCategory
    ? articles.filter((article) => article.category === activeCategory.label)
    : articles;
  const [lead, ...rest] = filtered;

  return (
    <>
      <nav
        aria-label="Kategorije novic"
        className="no-scrollbar mb-[clamp(36px,4vw,56px)] flex gap-2 overflow-x-auto pb-1.5"
      >
        <FilterChip href="/novice" active={!activeCategory}>
          Vse
        </FilterChip>
        {categories.map((category) => (
          <FilterChip
            key={category.slug}
            href={`/novice?${CATEGORY_PARAM}=${category.slug}`}
            active={category.slug === activeCategory?.slug}
          >
            {category.label}
          </FilterChip>
        ))}
      </nav>

      {lead ? (
        <>
          <LeadArticle key={lead.slug} article={lead} />
          <ArticleGrid>
            {rest.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                showExcerpt
                titleClassName="text-[clamp(28px,2.4vw,36px)]"
              />
            ))}
          </ArticleGrid>
        </>
      ) : (
        <p className="py-20 text-center font-serif text-[32px] text-muted">
          V tej kategoriji trenutno ni novic.
        </p>
      )}
    </>
  );
}
