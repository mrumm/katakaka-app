import Link from "next/link";
import { notFound } from "next/navigation";
import Bubbles from "@/components/Bubbles";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { locales, isValidLocale, type Locale } from "@/lib/i18n";
import { getTranslation, getStoryBySlug } from "@/lib/stories";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    const t = await getTranslation(lang);
    for (const story of t.stories) {
      params.push({ lang, slug: story.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const lang: Locale = isValidLocale(params.lang) ? params.lang : "en";
  const t = await getTranslation(lang);
  const story = getStoryBySlug(t.stories, params.slug);
  if (!story) return { title: "Story not found" };
  return {
    title: `${story.title} - Katakaka`,
    description: story.summary,
  };
}

export default async function StoryPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const lang: Locale = isValidLocale(params.lang) ? params.lang : "en";
  const t = await getTranslation(lang);
  const story = getStoryBySlug(t.stories, params.slug);
  if (!story) notFound();

  return (
    <div className="relative min-h-screen">
      <Bubbles />

      <main className="relative z-10 max-w-3xl mx-auto px-4 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href={`/${lang}`}
            className="inline-block bg-white/20 backdrop-blur rounded-full px-5 py-2
              hover:bg-white/30 transition-colors border-2 border-white/30"
          >
            &larr; {t.ui.backToStories}
          </Link>
          <LanguageSwitcher current={lang} />
        </div>

        <div
          className={`bg-gradient-to-br ${story.color} rounded-3xl p-8 mb-8 border-4 border-white/30`}
        >
          <div className="text-7xl mb-4">{story.emoji}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-ocean-deep">
            {story.title}
          </h1>
        </div>

        <div className="space-y-6">
          {story.paragraphs.map((paragraph, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur rounded-2xl p-6
                border-2 border-white/20 text-lg leading-relaxed"
            >
              {paragraph}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/${lang}`}
            className="inline-block bg-sand text-ocean-deep font-bold rounded-full
              px-8 py-4 text-xl hover:scale-105 transition-transform shadow-lg"
          >
            {t.ui.readAnother}
          </Link>
        </div>
      </main>
    </div>
  );
}
