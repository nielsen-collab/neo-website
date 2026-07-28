import PremiumDivider from "../../components/ui/PremiumDivider";

export default function ConversationInfo() {
  const steps = [
    {
      number: "01",
      title: "Anfrage senden",
      text: "Beschreiben Sie Ihr Anliegen in wenigen Worten.",
    },
    {
      number: "02",
      title: "Persönlicher Rückruf",
      text: "Ich melde mich persönlich innerhalb kurzer Zeit.",
    },
    {
      number: "03",
      title: "Executive Briefing",
      text: "Gemeinsam besprechen wir Ihre nächsten strategischen Schritte.",
    },
  ];

  return (
    <div className="max-w-[470px]">

      {/* Eyebrow */}

      <div className="mb-6 flex items-center gap-4">

        <span className="h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_16px_rgba(37,99,235,0.35)]" />

        <p className="text-[13px] font-semibold uppercase tracking-[0.42em] text-blue-600">
          EXECUTIVE CONVERSATION
        </p>

      </div>

      {/* Headline */}

      <h2 className="leading-[0.98] tracking-[-0.05em]">

        <span className="block text-[48px] font-extralight text-slate-900">
          So geht es
        </span>

        <span className="block text-[48px] font-extralight text-slate-900">
          jetzt weiter.
        </span>

      </h2>

      {/* Divider */}

      <div className="mt-7 w-20">
        <PremiumDivider />
      </div>

      {/* Intro */}

      <p className="mt-8 max-w-[440px] text-[19px] font-light leading-[1.8] text-slate-600">

        Sie haben den ersten Schritt bereits gemacht.

        <br />
        <br />

        Jetzt geht es nur noch darum,
        gemeinsam den richtigen Weg
        für Ihr Unternehmen festzulegen.

      </p>

      {/* Steps */}

      <div className="mt-14">

        {steps.map((step, index) => (

          <div key={step.number}>

            <div className="flex gap-5">

              <div className="min-w-[44px]">

                <span className="text-[22px] font-extralight tracking-[-0.03em] text-blue-600">

                  {step.number}

                </span>

              </div>

              <div>

                <h3 className="text-[20px] font-light text-slate-900">

                  {step.title}

                </h3>

                <p className="mt-2 max-w-[360px] text-[16px] leading-7 text-slate-600">

                  {step.text}

                </p>

              </div>

            </div>

            {index !== steps.length - 1 && (

              <div className="my-8 ml-[44px] h-px bg-slate-200" />

            )}

          </div>

        ))}

      </div>

    </div>
  );
}