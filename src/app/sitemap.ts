import type { MetadataRoute } from "next";
import { mainNav, site } from "@/content/site";
import { getPublishedArticles } from "@/lib/news";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getPublishedArticles();

  return [
    ...mainNav.map((item) => ({
      url: new URL(item.href, site.url).toString(),
    })),
    ...articles.map((article) => ({
      url: new URL(`/novice/${article.slug}`, site.url).toString(),
      lastModified: article.date,
    })),
  ];
}
