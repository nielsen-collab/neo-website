import Header from "../components/Header/Header";
import NeoOffice from "../components/NeoOffice/NeoOffice";
import Footer from "../components/Footer";

export default function OfficePage() {
  return (
    <>
      <Header />

      <main>

        <NeoOffice />

        <Footer showCTA={false} />

      </main>
    </>
  );
}