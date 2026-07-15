import ConversationHero from "./components/ConversationHero";
import ConversationForm from "./components/ConversationForm";
import Footer from "../components/Footer";

export default function GespraechPage() {
  return (
    <main className="min-h-screen bg-white">

      <ConversationHero />

      <ConversationForm />

      <Footer />

    </main>
  );
}