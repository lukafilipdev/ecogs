import Link from "next/link";
import { ArticleMeta } from "@/components/news/ArticleMeta";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { TextLink } from "@/components/ui/TextLink";
import { contact } from "@/content/site";
import type { Article } from "@/content/types";
import { reveal } from "@/lib/reveal";

function FeaturedArticle({ article }: { article: Article }) {
  return (
    <Link
      href={`/novice/${article.slug}`}
      {...reveal("up")}
      className="group block min-w-0 flex-[1.5_1_520px] text-ink hover:text-ink"
    >
      <MediaFrame
        image={article.image}
        alt={article.title}
        sizes="(min-width: 1100px) 55vw, 100vw"
        zoom="md"
        className="aspect-[4/3] bg-mist [&_img]:duration-[1600ms]"
      />
      <ArticleMeta article={article} variant="badge" className="mt-6" />
      <h3 className="mt-4 font-serif text-[clamp(32px,3.4vw,54px)] leading-[1.02] tracking-[-.015em] text-balance">
        {article.title}
      </h3>
      <p className="mt-3.5 max-w-[620px] text-[17px] leading-relaxed text-copy">
        {article.excerpt}
      </p>
      <span className="mt-[18px] inline-flex gap-2.5 text-[15px] font-semibold text-plum">
        Preberi več <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

function CompactArticle({ article }: { article: Article }) {
  return (
    <Link
      href={`/novice/${article.slug}`}
      {...reveal("up")}
      className="group flex items-start gap-[clamp(16px,2vw,28px)] border-t border-rule py-[clamp(22px,2.4vw,32px)] text-ink hover:text-ink"
    >
      <MediaFrame
        image={article.image}
        alt={article.title}
        sizes="180px"
        zoom="lg"
        className="aspect-square flex-[0_0_clamp(112px,12vw,180px)] bg-mist"
      />
      <div className="min-w-0">
        <ArticleMeta article={article} />
        <h3 className="mt-2.5 font-serif text-[clamp(24px,2.1vw,32px)] leading-[1.08] text-balance">
          {article.title}
        </h3>
        <span className="mt-3 inline-flex gap-2 text-sm font-semibold text-plum">
          Preberi več →
        </span>
      </div>
    </Link>
  );
}

export function NewsHighlights({ articles }: { articles: Article[] }) {
  const [featured, ...rest] = articles;
  if (!featured) return null;

  return (
    <section className="bg-white py-[clamp(88px,10vw,150px)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6 pb-[clamp(32px,4vw,56px)]">
          <div {...reveal("up")}>
            <Eyebrow>Novice</Eyebrow>
            <h2 className="mt-3.5 font-serif text-[clamp(44px,5.4vw,84px)] leading-[.98] tracking-[-.02em]">
              Iz življenja <em>naše občine</em>
            </h2>
          </div>
          <TextLink href="/novice">Vse novice</TextLink>
        </div>

        <div className="flex flex-wrap items-start gap-[clamp(32px,4vw,64px)]">
          <FeaturedArticle article={featured} />

          <div className="flex min-w-0 flex-[1_1_360px] flex-col">
            {rest.map((article) => (
              <CompactArticle key={article.slug} article={article} />
            ))}
            <div className="border-t border-rule pt-7">
              <div className="flex flex-wrap items-center justify-between gap-4 bg-cream p-7">
                <div>
                  <Eyebrow className="tracking-[.18em]">
                    Naslednje bogoslužje
                  </Eyebrow>
                  <div className="mt-2 font-serif text-3xl leading-[1.1]">
                    Nedelja, ob {contact.serviceTime}
                  </div>
                </div>
                <TextLink href="/kontakt" arrow={false} className="text-sm">
                  Kako do nas
                </TextLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
