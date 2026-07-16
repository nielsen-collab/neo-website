import PremiumDivider from "../../components/ui/PremiumDivider";

export default function ConversationHeroContent() {
  return (
    <div className="relative max-w-[620px]">

      {/* Eyebrow */}

      <div className="mb-7 flex items-center gap-4">

        <span className="h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,0.35)]" />

        <p className="text-[13px] font-semibold uppercase tracking-[0.42em] text-blue-600">
          NIELSEN ENERGY OPERATIONS
        </p>

      </div>

      {/* Headline */}

      <h1 className="leading-[0.94] tracking-[-0.06em]">

        <span className="block text-[74px] font-extralight text-slate-900">
          Gute
        </span>

        <span className="block text-[74px] font-extralight text-slate-900">
          Entscheidungen
        </span>

        <span className="block text-[74px] font-extralight text-slate-900">
          beginnen mit
        </span>

        <div className="h-6" />

        <span className="block text-[64px] font-extralight leading-[0.98] tracking-[-0.055em] text-blue-600">
          einem Gespräch.
        </span>

      </h1>

      {/* Divider */}

      <div className="mt-7 w-28">
        <PremiumDivider />
      </div>

      {/* Text */}

      <p className="mt-7 max-w-[580px] text-[23px] font-light leading-[1.75] text-slate-600">

        In einem persönlichen Erstgespräch betrachten wir Ihre
        Ausgangssituation gemeinsam und identifizieren die größten
        strategischen Hebel für Ihr Unternehmen.

      </p>

      {/* Statement */}

      <p className="mt-6 text-[22px] font-extralight tracking-[-0.02em] text-slate-700">

        Vertraulich. Persönlich. Auf Augenhöhe.

      </p>

    </div>
  );
}