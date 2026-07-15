import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import PremiumSurface from "../ui/PremiumSurface";
import NeoGrid from "../ui/NeoGrid";

export default function Hero() {
  return (
    <PremiumSurface className="pt-24 pb-28">

      <NeoGrid>

        <div className="grid items-start gap-24 lg:grid-cols-[1.05fr_0.95fr]">

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