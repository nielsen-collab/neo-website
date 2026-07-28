type LegalHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

import PremiumSurface from "../ui/PremiumSurface";
import NeoGrid from "../ui/NeoGrid";
import PremiumDivider from "../ui/PremiumDivider";

export default function LegalHero({
  eyebrow,
  title,
  intro,
}: LegalHeroProps) {
  return (
    <PremiumSurface className="pt-24 pb-12 lg:pt-24 lg:pb-12">

      <NeoGrid>

        <div className="max-w-[760px]">

          {/* Eyebrow */}

          <div className="mb-12 flex items-center gap-4 md:mb-14">

            <span className="h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,0.35)]" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-600 md:text-[13px] md:tracking-[0.45em]">
              {eyebrow}
            </p>

          </div>

          {/* Headline */}

          <h1 className="text-[46px] font-extralight leading-[1.02] tracking-[-0.05em] text-slate-900 sm:text-[58px] lg:text-[76px] lg:leading-[0.98] lg:tracking-[-0.055em]">

            {title}

          </h1>

          {/* Divider */}

          <div className="mt-8 w-20 md:mt-10 md:w-24">
            <PremiumDivider />
          </div>

          {/* Intro */}

          <p className="mt-8 max-w-[620px] text-[18px] leading-[1.8] text-slate-600 md:mt-10 md:text-[20px] lg:text-[22px] lg:leading-[1.9]">

            {intro}

          </p>

        </div>

      </NeoGrid>

    </PremiumSurface>
  );
}