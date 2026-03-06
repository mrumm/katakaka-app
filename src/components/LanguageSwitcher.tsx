"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();

  function getLocalePath(locale: Locale) {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  }

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getLocalePath(locale)}
          className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all
            ${
              locale === current
                ? "bg-sand text-ocean-deep scale-110"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
        >
          {localeFlags[locale]} {localeNames[locale]}
        </Link>
      ))}
    </div>
  );
}
