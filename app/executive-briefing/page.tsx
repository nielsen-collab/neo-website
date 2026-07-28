import PremiumSurface from "../components/ui/PremiumSurface";

import SubpageHeader from "../components/SubpageHeader";

import ConversationHero from "./components/ConversationHero";
import ConversationSection from "./components/ConversationSection";

import Footer from "../components/Footer";

export default function GespraechPage() {
  return (
    <main className="min-h-screen bg-white">

      <SubpageHeader />

      <PremiumSurface>

        <ConversationHero />

        <ConversationSection />

      </PremiumSurface>

      <Footer showCTA={false} />

    </main>
  );
}