import PremiumButton from "../ui/PremiumButton";

export default function OfficeCTA() {
  return (
    <section className="pt-24 lg:pt-32">

      <div className="max-w-[980px]">

        <div className="text-[12px] font-semibold uppercase tracking-[0.35em] text-blue-600">

          EXECUTIVE BRIEFING

        </div>

        <h2 className="mt-6 text-[42px] font-extralight leading-[1.05] tracking-[-0.05em] text-slate-900 sm:text-[54px] lg:text-[68px] lg:leading-[1.02]">

          Manche Entscheidungen

          <br />

          beginnen mit einem

          <br />

          <span className="text-blue-600">
            Gespräch.
          </span>

        </h2>

        <p className="mt-8 max-w-[760px] text-[18px] leading-[1.8] text-slate-600 md:text-[20px] lg:text-[22px] lg:leading-[1.9]">

          Wenn es nicht um organisatorische Fragen geht,
          sondern um strategische Entscheidungen für Ihr Unternehmen,
          beginnt die Zusammenarbeit mit einem Executive Briefing.

        </p>

        <div className="mt-10 h-px w-20 bg-gradient-to-r from-blue-500/70 to-transparent" />

        <div className="mt-10 lg:mt-12">

          <PremiumButton href="/executive-briefing">

            Executive Briefing vereinbaren

          </PremiumButton>

        </div>

      </div>

    </section>
  );
}