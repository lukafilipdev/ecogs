import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReadingProgress } from "@/components/motion/ReadingProgress";
import { ArticleBody } from "@/components/news/ArticleBody";
import { ArticleCard } from "@/components/news/ArticleCard";
import { ArticleGrid } from "@/components/news/ArticleGrid";
import { ShareLinks } from "@/components/news/ShareLinks";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { site } from "@/content/site";
import { formatDate } from "@/lib/format";
import {
  getArticleBody,
  getArticleBySlug,
  getPublishedArticles,
  getReadingTimeMinutes,
  getRelatedArticles,
} from "@/lib/news";
import { reveal } from "@/lib/reveal";

export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = await getPublishedArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/novice/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/novice/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      images: [{ url: article.image.src }],
    },
  };
}

export default async function ArticlePage({
  params,
}: PageProps<"/novice/[slug]">) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const related = await getRelatedArticles(article.slug);
  const url = new URL(`/novice/${article.slug}`, site.url).toString();

  return (
    <article>
      <ReadingProgress />

      <header className="bg-ink pt-[clamp(140px,16vw,220px)] pb-[clamp(120px,14vw,200px)] text-white">
        <Container size="medium">
          <div
            {...reveal("up")}
            className="flex flex-wrap items-center gap-x-3.5 gap-y-2.5 text-[13px] text-copy-light"
          >
            <Link
              href="/novice"
              className="font-semibold text-white hover:text-lilac"
            >
              ← Novice
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-lilac">{article.category}</span>
          </div>
          <h1
            {...reveal("up", 100)}
            className="mt-[26px] font-serif text-[clamp(44px,6.4vw,100px)] leading-[.98] tracking-[-.025em] text-balance"
          >
            {article.title}
          </h1>
          <div
            {...reveal("up", 200)}
            className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-sm text-copy-light"
          >
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span>{getReadingTimeMinutes(article)} min branja</span>
            <span>Objavila: {site.name}</span>
          </div>
        </Container>
      </header>

      <div className="mx-auto mt-[clamp(-160px,-11vw,-80px)] max-w-[1320px] px-[clamp(0px,4vw,56px)]">
        <div
          {...reveal("mask")}
          className="relative aspect-video min-h-[300px] overflow-hidden bg-night"
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            preload
            sizes="(min-width: 1320px) 1210px, 92vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[740px] px-[clamp(20px,4vw,40px)] pt-[clamp(48px,6vw,88px)]">
        <p className="mb-9 font-serif text-[clamp(26px,2.4vw,32px)] leading-[1.3] text-pretty text-ink">
          {article.excerpt}
        </p>
        <ArticleBody blocks={getArticleBody(article)} />
        <ShareLinks url={url} title={article.title} />
      </div>

      {related.length > 0 && (
        <section className="mt-[clamp(88px,10vw,140px)] bg-white py-[clamp(72px,8vw,120px)]">
          <Container>
            <div className="mb-[clamp(32px,4vw,56px)] flex flex-wrap items-end justify-between gap-5">
              <h2 className="font-serif text-[clamp(40px,4.4vw,68px)] leading-none">
                Preberite <em>tudi</em>
              </h2>
              <TextLink href="/novice">Vse novice</TextLink>
            </div>
            <ArticleGrid minColumnWidth={300}>
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </ArticleGrid>
          </Container>
        </section>
      )}
    </article>
  );
}
