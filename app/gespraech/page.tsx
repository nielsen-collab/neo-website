import ConversationHero from "./components/ConversationHero";
import Footer from "../components/Footer";

export default function GespraechPage() {
  return (
    <main className="min-h-screen bg-white">

      <ConversationHero />

      <Footer showCTA={false} />

    </main>
  );
}