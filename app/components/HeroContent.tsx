export default function HeroContent() {
  return (
    <div className="relative max-w-[700px]">

      {/* Eyebrow */}

      <div className="mb-10 flex items-center gap-4">

        <span className="h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,0.35)]" />

        <p className="text-[13px] font-semibold uppercase tracking-[0.45em] text-blue-600">
          NIELSEN ENERGY OPERATIONS
        </p>

      </div>

      {/* Headline */}

      <h1 className="leading-[0.98] tracking-[-0.055em]">

        <span className="block text-[68px] font-extralight text-slate-900">
          Analysen schaffen
        </span>

        <span className="block text-[68px] font-extralight text-slate-900">
          Erkenntnisse.
        </span>

        <div className="h-8" />

        <span className="block text-[68px] font-extralight text-blue-600">
          Entscheidungen
        </span>

        <span className="block text-[68px] font-extralight text-blue-600">
          schaffen Zukunft.
        </span>

      </h1>

      {/* Divider */}

      <div className="mt-12 h-px w-28 bg-slate-200" />

      {/* Text */}

      <p className="mt-12 max-w-[620px] text-[23px] leading-[1.85] text-slate-600">

        NEO verbindet technische Analyse mit
        unternehmerischer Entscheidungskompetenz.
        Aus komplexen Energie-, Gebäude- und
        Unternehmensdaten entstehen belastbare
        Entscheidungsgrundlagen für nachhaltige
        Veränderungen.

      </p>

      {/* CTA */}

      <div className="mt-14 flex flex-wrap gap-5">

        <a
          href="#kontakt"
          className="rounded-full bg-blue-600 px-9 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
        >
          Erstgespräch vereinbaren
        </a>

        <a
          href="#prozess"
          className="rounded-full border border-slate-300 px-9 py-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-slate-900 hover:text-slate-900"
        >
          Das NEO-Prinzip
        </a>

      </div>

    </div>
  );
}