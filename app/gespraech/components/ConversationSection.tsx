import PremiumSurface from "../../components/ui/PremiumSurface";
import NeoGrid from "../../components/ui/NeoGrid";

import ExecutiveRequest from "./ExecutiveRequest";
import ConversationInfo from "./ConversationInfo";

export default function ConversationSection() {
  return (
    <PremiumSurface className="overflow-visible pt-8 pb-20 lg:pt-20 lg:pb-28">

      <NeoGrid>

        <div className="relative">

          {/* Desktop Layout */}

          <div className="hidden lg:grid lg:grid-cols-[1.18fr_0.82fr] lg:gap-20 lg:items-start">

            {/* Linke Spalte */}

            <div className="relative">

              <div className="relative -mt-[250px] z-20 w-[560px]">

                <ExecutiveRequest />

              </div>

            </div>

            {/* Rechte Spalte */}

            <div className="relative -mt-12">

              <ConversationInfo />

            </div>

          </div>

          {/* Mobile */}

          <div className="lg:hidden">

            <section className="pb-8">

              <ExecutiveRequest />

            </section>

            <section className="pt-8">

              <ConversationInfo />

            </section>

          </div>

        </div>

      </NeoGrid>

    </PremiumSurface>
  );
}