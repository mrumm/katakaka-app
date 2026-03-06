import type { Locale } from "./i18n";

export interface Story {
  slug: string;
  emoji: string;
  color: string;
  title: string;
  summary: string;
  paragraphs: string[];
}

export interface CharacterInfo {
  name: string;
  description: string;
  emoji: string;
}

export interface UIStrings {
  siteTitle: string;
  siteDescription: string;
  subtitle: string;
  heroText: string;
  meetFriends: string;
  theAdventures: string;
  readStory: string;
  readAnother: string;
  backToStories: string;
  footer: string;
}

export interface TranslationData {
  ui: UIStrings;
  characters: Record<string, CharacterInfo>;
  stories: Story[];
}

const translations: Record<Locale, () => Promise<TranslationData>> = {
  en: () => import("./translations/en").then((m) => m.default),
  de: () => import("./translations/de").then((m) => m.default),
  fr: () => import("./translations/fr").then((m) => m.default),
  nl: () => import("./translations/nl").then((m) => m.default),
};

export async function getTranslation(locale: Locale): Promise<TranslationData> {
  return translations[locale]();
}

export function getStoryBySlug(
  stories: Story[],
  slug: string
): Story | undefined {
  return stories.find((s) => s.slug === slug);
}
