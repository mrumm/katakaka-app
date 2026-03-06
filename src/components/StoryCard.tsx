import Link from "next/link";
import type { Story } from "@/lib/stories";
import type { Locale } from "@/lib/i18n";

export default function StoryCard({
  story,
  lang,
  readLabel,
}: {
  story: Story;
  lang: Locale;
  readLabel: string;
}) {
  return (
    <Link href={`/${lang}/stories/${story.slug}`}>
      <div
        className={`bg-gradient-to-br ${story.color} rounded-3xl p-6 shadow-xl
          hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer
          border-4 border-white/30`}
      >
        <div className="text-6xl mb-4">{story.emoji}</div>
        <h3 className="text-2xl font-bold mb-2 text-ocean-deep">
          {story.title}
        </h3>
        <p className="text-ocean-deep/80 text-lg">{story.summary}</p>
        <div className="mt-4 inline-block bg-white/40 rounded-full px-4 py-2 text-ocean-deep font-bold">
          {readLabel}
        </div>
      </div>
    </Link>
  );
}
