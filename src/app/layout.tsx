import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katakaka - The Silly Fish from Tahiti",
  description:
    "Join Katakaka the silly fish on her wild adventures with friends near the North Pole!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-fun antialiased">{children}</body>
    </html>
  );
}
