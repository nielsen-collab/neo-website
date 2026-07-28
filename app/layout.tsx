import type { Metadata } from "next";
import "./globals.css";

import CookieBanner from "./components/CookieBanner";

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
      <body>

        {children}

        <CookieBanner />

      </body>
    </html>
  );
}