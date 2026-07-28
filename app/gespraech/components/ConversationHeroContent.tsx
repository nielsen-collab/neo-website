import PremiumDivider from "../../components/ui/PremiumDivider";

export default function ConversationHeroContent() {
  return (
    <div className="relative max-w-[610px]">

      {/* Eyebrow */}

      <div className="mb-12 flex items-center gap-4 md:mb-14">

        <span className="h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,0.35)]" />

        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-600 md:text-[13px] md:tracking-[0.45em]">
          NIELSEN ENERGY OPERATIONS
        </p>

      </div>

      {/* Headline */}

      <h1 className="text-[46px] font-extralight leading-[1.02] tracking-[-0.05em] sm:text-[58px] lg:text-[76px] lg:leading-[0.98] lg:tracking-[-0.055em]">

        <span className="text-slate-900">
          Gute Entscheidungen
          <br />
          beginnen mit
          <br />
          einem Gespräch.
        </span>

      </h1>

      {/* Divider */}

      <div className="mt-8 w-20 md:mt-10 md:w-24">
        <PremiumDivider />
      </div>

      {/* Text */}

      <p className="mt-8 max-w-[540px] text-[18px] leading-[1.8] text-slate-600 md:mt-10 md:text-[20px] lg:text-[22px] lg:leading-[1.9]">

        Jede Entscheidung beginnt mit einem offenen Austausch.
        Gemeinsam betrachten wir Ihre Ausgangssituation,
        bewerten Chancen und Risiken und entwickeln
        belastbare Entscheidungsgrundlagen für Ihr Unternehmen.

      </p>

    </div>
  );
}