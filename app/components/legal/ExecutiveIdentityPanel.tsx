import PremiumDivider from "../ui/PremiumDivider";

export default function ExecutiveIdentityPanel() {
  return (
    <section className="mt-12 md:mt-16 max-w-[720px]">

      {/* Eyebrow */}

      <div className="flex items-center gap-4">

        <span className="h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,.35)]" />

        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-600 md:text-[13px] md:tracking-[0.45em]">
          UNTERNEHMENSPROFIL
        </p>

      </div>

      <div className="mt-6 w-20">
        <PremiumDivider />
      </div>

      {/* Unternehmen */}

      <div className="mt-8">

        <h2 className="text-[58px] font-extralight leading-[0.92] tracking-[-0.06em] text-slate-900 lg:text-[76px]">
          NEO
        </h2>

        <p className="mt-2 text-[20px] font-light text-slate-500 lg:text-[23px]">
          Nielsen Energy Operations
        </p>

      </div>

      {/* Daten */}

      <div className="mt-10 space-y-7">

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.30em] text-slate-400">
            Rechtsform
          </p>

          <p className="mt-1 text-[24px] font-extralight text-slate-900">
            Einzelunternehmen
          </p>
        </div>

        <div className="h-px w-32 bg-slate-200" />

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.30em] text-slate-400">
            Inhaber
          </p>

          <p className="mt-1 text-[24px] font-extralight text-slate-900">
            Arne Nielsen
          </p>
        </div>

        <div className="h-px w-32 bg-slate-200" />

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.30em] text-slate-400">
            Standort
          </p>

          <p className="mt-2 text-[18px] leading-[1.8] text-slate-600">
            Am Freizeitzentrum 21/2
            <br />
            78194 Immendingen
            <br />
            Deutschland
          </p>
        </div>

        <div className="h-px w-32 bg-slate-200" />

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.30em] text-slate-400">
            Kontakt
          </p>

          <p className="mt-2 text-[18px] leading-[2] text-slate-600">
            +49 7462 3599010
            <br />
            +49 173 1828348
            <br />
            arne@nielsen-neo.de
            <br />
            www.nielsen-neo.de
          </p>
        </div>

        <div className="h-px w-32 bg-slate-200" />

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.30em] text-slate-400">
            USt-IdNr.
          </p>

          <p className="mt-1 text-[20px] font-light text-slate-900">
            DE291155222
          </p>
        </div>

      </div>

    </section>
  );
}