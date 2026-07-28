import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import PremiumSurface from "../ui/PremiumSurface";
import NeoGrid from "../ui/NeoGrid";

export default function Hero() {
  return (
    <PremiumSurface className="pt-16 pb-12 lg:pt-20">

      <NeoGrid>

        <div className="grid items-start gap-10 md:gap-16 lg:gap-24 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Linke Spalte */}

          <HeroContent />

          {/* Rechte Spalte */}

          <div className="pt-6">

            <HeroImage />

          </div>

        </div>

      </NeoGrid>

    </PremiumSurface>
  );
}