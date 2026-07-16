import PremiumSurface from "../../components/ui/PremiumSurface";
import PremiumPanel from "../../components/ui/PremiumPanel";
import PremiumDivider from "../../components/ui/PremiumDivider";

export default function ConversationSection() {
  return (
    <PremiumSurface className="pt-8 pb-32">

      <div className="mx-auto max-w-[1450px] px-8">

        <div className="grid items-start gap-24 lg:grid-cols-[1fr_0.95fr]">

          {/* ================================================= */}
          {/* LINKE SEITE                                       */}
          {/* ================================================= */}

          <div>

            {/* Eyebrow */}

            <div className="mb-8 flex items-center gap-4">

              <span className="h-3 w-3 rounded-full bg-blue-600" />

              <p className="text-[13px] font-semibold uppercase tracking-[0.42em] text-blue-600">

                EXECUTIVE CONVERSATION

              </p>

            </div>

            {/* Headline */}

            <h2
              className="
                text-[60px]
                font-extralight
                leading-[0.96]
                tracking-[-0.05em]
                text-slate-900
              "
            >

              Was Sie
              <br />
              erwartet.

            </h2>

            {/* Divider */}

            <div className="mt-8 w-24">

              <PremiumDivider />

            </div>

            {/* Intro */}

            <p
              className="
                mt-10
                max-w-[560px]
                text-[22px]
                font-light
                leading-[1.8]
                text-slate-600
              "
            >

              Im Executive Briefing sprechen wir nicht zuerst
              über Technik.

              <br />
              <br />

              Wir betrachten Ihr Unternehmen als Ganzes
              und identifizieren gemeinsam die
              strategischen Hebel mit dem größten
              wirtschaftlichen Nutzen.

            </p>

            {/* Benefits */}

            <div className="mt-16 space-y-7">

              <div className="flex gap-5">

                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />

                <div>

                  <h3 className="text-[19px] font-medium text-slate-900">

                    30–45 Minuten

                  </h3>

                  <p className="mt-2 text-[17px] leading-8 text-slate-600">

                    Klar strukturiertes Executive Briefing.

                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />

                <div>

                  <h3 className="text-[19px] font-medium text-slate-900">

                    Persönlich

                  </h3>

                  <p className="mt-2 text-[17px] leading-8 text-slate-600">

                    Direkt mit Arne Nielsen.

                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />

                <div>

                  <h3 className="text-[19px] font-medium text-slate-900">

                    Vertraulich

                  </h3>

                  <p className="mt-2 text-[17px] leading-8 text-slate-600">

                    Diskret. Auf Augenhöhe.

                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />

                <div>

                  <h3 className="text-[19px] font-medium text-slate-900">

                    Erste Orientierung

                  </h3>

                  <p className="mt-2 text-[17px] leading-8 text-slate-600">

                    Konkrete Impulse für Ihren nächsten Schritt.

                  </p>

                </div>

              </div>

            </div>

          </div>          {/* ================================================= */}
          {/* RECHTE SEITE                                      */}
          {/* ================================================= */}

          <div className="lg:flex lg:justify-end">

            <PremiumPanel className="w-full max-w-[520px] p-10">

              {/* Header */}

              <div className="flex items-center gap-3">

                <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-blue-600">

                  EXECUTIVE REQUEST

                </p>

              </div>

              <h3 className="mt-5 text-[34px] font-extralight leading-[1.05] tracking-[-0.04em] text-slate-900">

                Lassen Sie uns
                <br />
                sprechen.

              </h3>

              <div className="mt-6 w-16">

                <PremiumDivider />

              </div>

              <p className="mt-8 text-[17px] leading-8 text-slate-600">

                Ein kurzer Überblick genügt.

                <br />

                Ich melde mich persönlich bei Ihnen.

              </p>

              {/* Platzhalter für Formular */}

              <div className="mt-12 rounded-[24px] border border-dashed border-slate-300 bg-white/60 p-12">

                <p className="text-center text-[18px] font-light text-slate-500">

                  Hier entsteht das neue
                  Executive Conversation Formular.

                </p>

              </div>

            </PremiumPanel>

          </div>

        </div>

      </div>

    </PremiumSurface>
  );
}