import type { Metadata } from "next";
import { locales, isValidLocale, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/stories";
import "../globals.css";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = isValidLocale(params.lang) ? params.lang : "en";
  const t = await getTranslation(lang);
  return {
    title: t.ui.siteTitle,
    description: t.ui.siteDescription,
  };
}

export default function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const lang: Locale = isValidLocale(params.lang) ? params.lang : "en";
  return (
    <html lang={lang}>
      <body className="font-fun antialiased">{children}</body>
    </html>
  );
}
