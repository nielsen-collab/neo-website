import PremiumPanel from "../../components/ui/PremiumPanel";
import PremiumTextarea from "../../components/ui/PremiumTextarea";
import PremiumCheckbox from "../../components/ui/PremiumCheckbox";

import ConversationInput from "./ConversationInput";
import ConversationSubmit from "./ConversationSubmit";

export default function ConversationForm() {
  return (
    <section
      id="formular"
      className="mx-auto max-w-[1500px] px-8 py-36"
    >
      <div className="grid items-start gap-24 lg:grid-cols-[0.85fr_1fr]">

        {/* -------------------------------- */}
        {/* Linke Seite                      */}
        {/* -------------------------------- */}

        <div>

          <div className="mb-8 flex items-center gap-4">

            <span className="h-3 w-3 rounded-full bg-blue-600" />

            <p className="text-[13px] font-semibold uppercase tracking-[0.42em] text-blue-600">
              KONTAKT
            </p>

          </div>

          <h2 className="text-[72px] font-extralight leading-[0.94] tracking-[-0.055em] text-slate-900">

            Lassen Sie

            <br />

            uns sprechen.

          </h2>

          <p className="mt-10 max-w-[520px] text-[22px] font-light leading-[1.8] text-slate-600">

            Beschreiben Sie kurz Ihr Anliegen.
            Gemeinsam identifizieren wir die
            größten strategischen Hebel
            für Ihr Unternehmen.

          </p>

          <div className="mt-16 space-y-5">

            <div className="flex items-center gap-3">

              <span className="text-blue-600">✓</span>

              <span className="text-[18px] text-slate-600">
                Persönliches Erstgespräch
              </span>

            </div>

            <div className="flex items-center gap-3">

              <span className="text-blue-600">✓</span>

              <span className="text-[18px] text-slate-600">
                Vertraulich
              </span>

            </div>

            <div className="flex items-center gap-3">

              <span className="text-blue-600">✓</span>

              <span className="text-[18px] text-slate-600">
                30–45 Minuten
              </span>

            </div>

            <div className="flex items-center gap-3">

              <span className="text-blue-600">✓</span>

              <span className="text-[18px] text-slate-600">
                Ohne Vorbereitung
              </span>

            </div>

          </div>

        </div>

        {/* -------------------------------- */}
        {/* Formular                         */}
        {/* -------------------------------- */}

        <PremiumPanel>

          {/* Header */}

          <div className="mb-10">

            <div className="flex items-center gap-3">

              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-blue-600">

                EXECUTIVE REQUEST

              </p>

            </div>

            <h3 className="mt-5 text-[34px] font-extralight tracking-[-0.04em] text-slate-900">

              Erstgespräch anfragen.

            </h3>

            <div className="mt-5 h-px w-16 bg-gradient-to-r from-blue-300 to-transparent" />

          </div>

          {/* Formular */}

          <div className="grid gap-7 md:grid-cols-2">

            <ConversationInput
              label="Vorname"
              placeholder="Max"
              required
            />

            <ConversationInput
              label="Nachname"
              placeholder="Mustermann"
              required
            />

            <ConversationInput
              label="Unternehmen"
              placeholder="Unternehmen"
              className="md:col-span-2"
            />

            <ConversationInput
              label="E-Mail"
              type="email"
              placeholder="max@unternehmen.de"
              required
            />

            <ConversationInput
              label="Telefon"
              placeholder="+49..."
            />

            <ConversationInput
              label="Thema"
              placeholder="Worum geht es?"
              className="md:col-span-2"
            />

            <div className="md:col-span-2">

              <PremiumTextarea
                label="Nachricht"
                placeholder="Beschreiben Sie kurz Ihre Ausgangssituation."
                rows={7}
              />

            </div>

          </div>

          <div className="mt-10">

            <PremiumCheckbox>

              Ich akzeptiere die Datenschutzerklärung und bin damit
              einverstanden, dass meine Angaben zur Bearbeitung
              meiner Anfrage gespeichert werden.

            </PremiumCheckbox>

          </div>

          <ConversationSubmit />

        </PremiumPanel>

      </div>

    </section>
  );
}