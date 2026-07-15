import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEO | Nielsen Energy Operations",
  description:
    "NEO verbindet technische Analyse mit unternehmerischer Entscheidungskompetenz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}