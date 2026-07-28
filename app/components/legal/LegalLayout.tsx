import { ReactNode } from "react";

import Header from "../Header/Header";
import Footer from "../Footer";

import LegalHero from "./LegalHero";
import ExecutiveIdentityPanel from "./ExecutiveIdentityPanel";
import LegalContent from "./LegalContent";
import PrivacyCard from "./PrivacyCard";

type LegalLayoutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;

  usePrivacyCard?: boolean;
};

export default function LegalLayout({
  eyebrow,
  title,
  intro,
  children,
  usePrivacyCard = false,
}: LegalLayoutProps) {
  return (
    <>
      <Header />

      <main>

        <LegalHero
          eyebrow={eyebrow}
          title={title}
          intro={intro}
        />

        {/* Executive Identity */}

        <section className="pb-16 lg:pb-24">

          <div className="mx-auto max-w-[1300px] px-6 md:px-10 lg:px-20">

            <ExecutiveIdentityPanel />

          </div>

        </section>

        {/* Rechtlicher Inhalt */}

        {usePrivacyCard ? (

          <PrivacyCard>

            {children}

          </PrivacyCard>

        ) : (

          <LegalContent>

            {children}

          </LegalContent>

        )}

      </main>

      <Footer showCTA={false} />

    </>
  );
}