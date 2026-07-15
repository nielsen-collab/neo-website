import PremiumButton from "../ui/PremiumButton";
import PremiumDivider from "../ui/PremiumDivider";

export default function HeroContent() {
  return (
    <div className="relative max-w-[610px]">

      {/* Eyebrow */}

      <div className="mb-8 flex items-center gap-4 md:mb-10">

        <span className="h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,0.35)]" />

        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-600 md:text-[13px] md:tracking-[0.45em]">
          NIELSEN ENERGY OPERATIONS
        </p>

      </div>

      {/* Headline */}

      <h1 className="text-[46px] font-extralight leading-[1.02] tracking-[-0.05em] sm:text-[58px] lg:text-[76px] lg:leading-[0.98] lg:tracking-[-0.055em]">

        <span className="text-slate-900">
          Analysen schaffen
          <br />
          Erkenntnisse.
        </span>

        <br />
        <br />

        <span className="text-blue-600">
          Entscheidungen
          <br />
          schaffen Zukunft.
        </span>

      </h1>

      {/* Divider */}

      <div className="mt-8 w-20 md:mt-10 md:w-24">
        <PremiumDivider />
      </div>

      {/* Text */}

      <p className="mt-8 max-w-[540px] text-[18px] leading-[1.8] text-slate-600 md:mt-10 md:text-[20px] lg:text-[22px] lg:leading-[1.9]">

        NEO verbindet technische Analyse mit
        unternehmerischer Entscheidungskompetenz.
        Aus komplexen Energie-, Gebäude- und Unternehmensdaten
        entstehen belastbare Entscheidungsgrundlagen
        für nachhaltige Veränderungen.

      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap md:mt-14 md:gap-5">

        <PremiumButton href="#kontakt">
          Erstgespräch vereinbaren
        </PremiumButton>

        <PremiumButton
          href="#prozess"
          variant="secondary"
        >
          Das NEO-Prinzip
        </PremiumButton>

      </div>

      {/* Arbeitsgrundlagen */}

      <div className="mt-16 md:mt-20">

        <PremiumDivider />

        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500 md:mt-8 md:text-[12px] md:tracking-[0.38em]">

          Arbeitsgrundlagen

        </p>

        <p className="mt-4 text-[14px] leading-8 text-slate-600 md:mt-5 md:text-[15px]">

          DIN EN 16247

          <span className="mx-3 text-blue-600 md:mx-4">•</span>

          DIN V 18599

          <span className="mx-3 text-blue-600 md:mx-4">•</span>

          ISO 50001

          <span className="mx-3 text-blue-600 md:mx-4">•</span>

          ISO 14001

          <span className="mx-3 text-blue-600 md:mx-4">•</span>

          EDL-G / EnEfG

        </p>

      </div>

    </div>
  );
}