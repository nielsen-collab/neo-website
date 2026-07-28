import PremiumSurface from "../ui/PremiumSurface";
import PremiumHeading from "../ui/PremiumHeading";
import OfficeSection from "./OfficeSection";
import OfficeCTA from "./OfficeCTA";

export default function NeoOffice() {
  return (
    <PremiumSurface className="pt-14 pb-20 lg:pt-24 lg:pb-28">

      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-20">

        <PremiumHeading
          eyebrow="NEO OFFICE"
          title="Willkommen im NEO Office."
        />

        {/* Hero */}

        <div className="mt-8 max-w-[980px] lg:mt-12">

          <h2 className="text-[44px] font-extralight leading-[1.02] tracking-[-0.05em] text-slate-900 sm:text-[56px] lg:text-[74px] lg:leading-[0.98] lg:tracking-[-0.06em]">

            Nicht jede Anfrage beginnt

            <br />

            mit einem

            <br />

            <span className="text-blue-600">
              Executive Briefing.
            </span>

          </h2>

          <p className="mt-8 max-w-[760px] text-[18px] leading-[1.8] text-slate-600 md:text-[20px] lg:mt-10 lg:text-[24px] lg:leading-[1.8]">

            Das NEO Office ist die zentrale Anlaufstelle für
            geschäftliche Anliegen rund um Nielsen Energy Operations.
            Je nach Anliegen finden Sie hier den passenden
            Ansprechpartner.

          </p>

        </div>

        {/* Office Sections */}

        <div className="mt-16 grid grid-cols-1 items-stretch gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">

          <OfficeSection
            title="Geschäftsanfragen"
            description="Für allgemeine geschäftliche Anliegen sowie die erste Kontaktaufnahme mit Nielsen Energy Operations."
            contactTitle="Arne Nielsen"
            email="arne@nielsen-neo.de"
            phone="+49 7462 3599010"
          />

          <OfficeSection
            title="Laufende Projekte"
            description="Für organisatorische Rückfragen zu bestehenden Projekten und laufenden Mandaten."
            contactTitle="Arne Nielsen"
            email="arne@nielsen-neo.de"
            phone="+49 7462 3599010"
          />

          <OfficeSection
            title="Institutionen"
            description="Für Behörden, Banken, öffentliche Einrichtungen und Verbände."
            contactTitle="NEO Office"
            email="office@nielsen-neo.de"
            phone="+49 7462 3599010"
          />

          <OfficeSection
            title="Medien"
            description="Für Presseanfragen, Interviews und Vortragsanfragen."
            contactTitle="NEO Office"
            email="office@nielsen-neo.de"
            phone="+49 7462 3599010"
          />

        </div>

        {/* Executive Briefing */}

        <OfficeCTA />

      </div>

    </PremiumSurface>
  );
}