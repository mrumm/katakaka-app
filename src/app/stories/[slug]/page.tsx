import Link from "next/link";
import { notFound } from "next/navigation";
import Bubbles from "@/components/Bubbles";
import { getStoryBySlug, stories } from "@/lib/stories";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const story = getStoryBySlug(params.slug);
  if (!story) return { title: "Story not found" };
  return {
    title: `${story.title} - Katakaka`,
    description: story.summary,
  };
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = getStoryBySlug(params.slug);
  if (!story) notFound();

  return (
    <div className="relative min-h-screen">
      <Bubbles />

      <main className="relative z-10 max-w-3xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-block mb-8 bg-white/20 backdrop-blur rounded-full px-5 py-2
            hover:bg-white/30 transition-colors border-2 border-white/30"
        >
          &larr; Back to all stories
        </Link>

        <div className={`bg-gradient-to-br ${story.color} rounded-3xl p-8 mb-8 border-4 border-white/30`}>
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
            href="/"
            className="inline-block bg-sand text-ocean-deep font-bold rounded-full
              px-8 py-4 text-xl hover:scale-105 transition-transform shadow-lg"
          >
            Read another adventure!
          </Link>
        </div>
      </main>
    </div>
  );
}
