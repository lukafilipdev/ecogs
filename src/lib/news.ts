/**
 * News data access layer. Pages only talk to these functions, so swapping
 * the static content for a CMS later means changing this file alone.
 */
import { articles, defaultArticleBody, newsCategories } from "@/content/news";
import type { Article, ArticleBlock } from "@/content/types";

const WORDS_PER_MINUTE = 200;

export async function getPublishedArticles(): Promise<Article[]> {
  return articles
    .filter((article) => article.published)
    .toSorted((a, b) => b.date.localeCompare(a.date));
}

export async function getArticleBySlug(slug: string) {
  const published = await getPublishedArticles();
  return published.find((article) => article.slug === slug) ?? null;
}

export async function getRelatedArticles(slug: string, limit = 3) {
  const published = await getPublishedArticles();
  return published.filter((article) => article.slug !== slug).slice(0, limit);
}

export function getArticleBody(article: Article): ArticleBlock[] {
  return article.body ?? defaultArticleBody;
}

export function getReadingTimeMinutes(article: Article) {
  const text = [
    article.excerpt,
    ...getArticleBody(article).map((block) =>
      "text" in block ? block.text : "",
    ),
  ].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function getNewsCategories() {
  return newsCategories;
}
