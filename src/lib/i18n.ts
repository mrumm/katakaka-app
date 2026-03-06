export const locales = ["en", "de", "fr", "nl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Fran\u00e7ais",
  nl: "Nederlands",
};

export const localeFlags: Record<Locale, string> = {
  en: "\ud83c\uddec\ud83c\udde7",
  de: "\ud83c\udde9\ud83c\uddea",
  fr: "\ud83c\uddeb\ud83c\uddf7",
  nl: "\ud83c\uddf3\ud83c\uddf1",
};

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}
