import PremiumSurface from "../../components/ui/PremiumSurface";
import NeoGrid from "../../components/ui/NeoGrid";

import ConversationHeroContent from "./ConversationHeroContent";
import ExecutiveBriefing from "./ExecutiveBriefing";

export default function ConversationHero() {
  return (
    <PremiumSurface className="pt-6 pb-16 lg:pt-12 lg:pb-28">

      <NeoGrid>

        <div
          className="
            grid
            items-start

            gap-10
            lg:gap-24

            lg:grid-cols-[1.08fr_0.92fr]
          "
        >

          {/* Linke Seite */}

          <ConversationHeroContent />

          {/* Rechte Seite */}

          <div
            className="
              mt-6
              lg:mt-0
              lg:pt-2
              lg:flex
              lg:justify-end
            "
          >

            <ExecutiveBriefing />

          </div>

        </div>

      </NeoGrid>

    </PremiumSurface>
  );
}