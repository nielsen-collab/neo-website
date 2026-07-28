import PremiumPanel from "../ui/PremiumPanel";

export default function LegalInfoCard() {
  return (
    <PremiumPanel
      className="
        max-w-[680px]
        rounded-[40px]
        p-10
        md:p-16
        lg:p-20
      "
    >
      {/* Header */}

      <div className="flex items-center gap-4">

        <span className="h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,.35)]" />

        <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-blue-600">
          RECHTLICHE INFORMATIONEN
        </p>

      </div>

      <h2 className="mt-10 text-[42px] font-extralight leading-[0.95] tracking-[-0.05em] text-slate-900 md:text-[54px]">
        Angaben gemäß § 5 DDG
      </h2>

      <div className="mt-14 space-y-12">

        <InfoRow
          label="Unternehmen"
          value={
            <>
              NEO – Nielsen Energy Operations
              <br />
              Einzelunternehmen
            </>
          }
        />

        <InfoRow
          label="Inhaber"
          value="Arne Nielsen"
        />

        <InfoRow
          label="Anschrift"
          value={
            <>
              Am Freizeitzentrum 21/2
              <br />
              78194 Immendingen
              <br />
              Deutschland
            </>
          }
        />

        <InfoRow
          label="Telefon"
          value="+49 7462 3599010"
        />

        <InfoRow
          label="Mobil"
          value="+49 173 1828348"
        />

        <InfoRow
          label="E-Mail"
          value="arne@nielsen-neo.de"
        />

        <InfoRow
          label="Website"
          value="www.nielsen-neo.de"
        />

        <InfoRow
          label="USt-IdNr."
          value="DE291155222"
        />

        <InfoRow
          label="Verantwortlich"
          value="Arne Nielsen"
          last
        />

      </div>

    </PremiumPanel>
  );
}

type InfoRowProps = {
  label: string;
  value: React.ReactNode;
  last?: boolean;
};

function InfoRow({
  label,
  value,
  last = false,
}: InfoRowProps) {
  return (
    <div>

      <div className="grid gap-5 md:grid-cols-[150px_1fr]">

        <p className="text-[11px] font-semibold uppercase tracking-[0.30em] text-slate-400">

          {label}

        </p>

        <div className="text-[18px] font-light leading-[1.9] text-slate-900 md:text-[20px]">

          {value}

        </div>

      </div>

      {!last && (

        <div className="mt-10 h-px w-24 bg-slate-200" />

      )}

    </div>
  );
}