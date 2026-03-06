import Bubbles from "@/components/Bubbles";
import StoryCard from "@/components/StoryCard";
import { stories, characters } from "@/lib/stories";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Bubbles />

      <main className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="text-8xl mb-4 animate-swim inline-block">
            {characters.katakaka.emoji}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-sand drop-shadow-lg">
            Katakaka
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-2">
            The Silly Fish from Tahiti
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            She never listens to the adults. She never follows the rules. And
            her adventures are ALWAYS hilarious. Join Katakaka and her friends
            near the North Pole!
          </p>
        </div>

        {/* Characters */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-sand">
            Meet the Friends
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.values(characters).map((char) => (
              <div
                key={char.name}
                className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center
                  border-2 border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="text-5xl mb-2 animate-float">{char.emoji}</div>
                <h3 className="font-bold text-lg">{char.name}</h3>
                <p className="text-sm text-white/70">{char.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stories */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-sand">
            The Adventures
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pb-8 text-white/50 text-sm">
          <p>
            Made with love for silly fish everywhere{" "}
            {characters.katakaka.emoji}
          </p>
        </footer>
      </main>
    </div>
  );
}
