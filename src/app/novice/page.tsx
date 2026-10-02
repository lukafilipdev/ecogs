import type { Metadata } from "next";
import { Suspense } from "react";
import { NewsArchive } from "@/components/news/NewsArchive";
import { NewsArchiveView } from "@/components/news/NewsArchiveView";
import { Container } from "@/components/ui/Container";
import { MaskedLine, PageHero } from "@/components/ui/PageHero";
import { photos } from "@/content/photos";
import { getNewsCategories, getPublishedArticles } from "@/lib/news";
import { reveal } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Novice",
  description:
    "Obvestila, vabila in utrinki iz življenja Evangeličanske cerkvene občine Gornji Slaveči.",
};

export default async function NewsPage() {
  const articles = await getPublishedArticles();
  const categories = getNewsCategories();

  return (
    <>
      <PageHero
        image={photos.c109}
        alt=""
        overlay="linear-gradient(180deg, rgba(28,19,34,.6) 0%, rgba(28,19,34,.35) 40%, rgba(28,19,34,.9) 100%)"
        className="min-h-[clamp(440px,64svh,680px)]"
        contentClassName="pb-[clamp(40px,5vw,72px)]"
      >
        <div
          {...reveal("up")}
          className="text-xs font-semibold tracking-[.2em] uppercase"
        >
          Obvestila · vabila · utrinki
        </div>
        <h1 className="mt-3.5 font-serif text-[clamp(72px,12vw,180px)] leading-[.88] tracking-[-.03em]">
          <MaskedLine delay={150} wrapperClassName="">
            Novice
          </MaskedLine>
        </h1>
      </PageHero>

      <section className="bg-cream pt-[clamp(40px,5vw,72px)] pb-[clamp(88px,10vw,150px)]">
        <Container>
          {/* Static HTML shows every article; the client applies ?kategorija= */}
          <Suspense
            fallback={
              <NewsArchiveView
                articles={articles}
                categories={categories}
                activeSlug={null}
              />
            }
          >
            <NewsArchive articles={articles} categories={categories} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
