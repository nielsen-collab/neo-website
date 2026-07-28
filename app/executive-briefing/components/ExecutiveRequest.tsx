import PremiumPanel from "../../components/ui/PremiumPanel";
import PremiumDivider from "../../components/ui/PremiumDivider";

import PremiumInput from "../../components/ui/PremiumInput";
import PremiumTextarea from "../../components/ui/PremiumTextarea";
import PremiumCheckbox from "../../components/ui/PremiumCheckbox";
import PremiumButton from "../../components/ui/PremiumButton";

export default function ExecutiveRequest() {
  return (
    <PremiumPanel
      className="
        relative
        w-full
        max-w-[640px]
        rounded-[34px]
        p-8
        md:rounded-[40px]
        md:p-14
      "
    >
      {/* Header */}

      <div className="flex items-center gap-3">

        <span className="h-2.5 w-2.5 rounded-full bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,0.35)]" />

        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-600 md:text-[13px] md:tracking-[0.45em]">
          EXECUTIVE REQUEST
        </p>

      </div>

      {/* Headline */}

      <h2 className="mt-6 text-[42px] font-extralight leading-[0.95] tracking-[-0.055em] text-slate-900 md:mt-8 md:text-[50px]">

        Lassen Sie uns
        <br />
        sprechen.

      </h2>

      <div className="mt-6 w-20 md:mt-8 md:w-24">
        <PremiumDivider />
      </div>

      <p className="mt-6 max-w-[460px] text-[18px] font-light leading-[1.8] text-slate-600 md:mt-8 md:text-[20px] md:leading-[1.9]">

        Ein kurzer Überblick genügt.

        <br />
        <br />

        Ich melde mich persönlich bei Ihnen
        und wir vereinbaren gemeinsam den
        nächsten sinnvollen Schritt.

      </p>

      {/* Formular */}

      <div className="mt-10 space-y-5 md:mt-12 md:space-y-6">

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">

          <PremiumInput
            label="Vorname"
            placeholder="Max"
          />

          <PremiumInput
            label="Nachname"
            placeholder="Mustermann"
          />

        </div>

        <PremiumInput
          label="Unternehmen"
          placeholder="Unternehmen"
        />

        <PremiumInput
          type="email"
          label="E-Mail"
          placeholder="name@unternehmen.de"
        />

        <PremiumTextarea
          label="Nachricht"
          rows={5}
          placeholder="Beschreiben Sie Ihr Anliegen in wenigen Sätzen."
        />

      </div>

      {/* Datenschutz */}

      <div className="mt-8 md:mt-10">

        <PremiumCheckbox>

          Ich akzeptiere die Datenschutzerklärung und bin mit der Speicherung meiner Angaben zur Bearbeitung meiner Anfrage einverstanden.

        </PremiumCheckbox>

      </div>

      {/* Button */}

      <div className="mt-10 flex justify-center md:mt-14">

        <PremiumButton
          href="#"
          className="w-full justify-center px-8 md:w-auto md:px-12"
        >
          Executive Briefing anfragen
        </PremiumButton>

      </div>

    </PremiumPanel>
  );
}