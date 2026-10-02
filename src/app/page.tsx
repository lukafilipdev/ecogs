import { CommunityLife } from "@/components/sections/home/CommunityLife";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { HistoryTeaser } from "@/components/sections/home/HistoryTeaser";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { NewsHighlights } from "@/components/sections/home/NewsHighlights";
import { VerseInterlude } from "@/components/sections/home/VerseInterlude";
import { WelcomeSection } from "@/components/sections/home/WelcomeSection";
import { communityActivities } from "@/content/community";
import { milestones } from "@/content/history";
import { contact, site } from "@/content/site";
import { getPublishedArticles } from "@/lib/news";

const churchJsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: site.fullName,
  url: site.url,
  telephone: contact.phone,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.street,
    postalCode: contact.postalCode,
    addressLocality: contact.city,
    addressCountry: "SI",
  },
};

export default async function HomePage() {
  const articles = await getPublishedArticles();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchJsonLd) }}
      />
      <HomeHero latest={articles[0]} />
      <WelcomeSection />
      <NewsHighlights articles={articles.slice(0, 3)} />
      <VerseInterlude />
      <CommunityLife activities={communityActivities} />
      <HistoryTeaser milestones={milestones} />
      <ContactSection />
    </>
  );
}
