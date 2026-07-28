import Header from "./components/Header/Header";
import Hero from "./components/hero-new/Hero";

import Services from "./components/Services";
import WhyNeo from "./components/WhyNeo";
import Attitude from "./components/Attitude";
import Process from "./components/Process";
import Founder from "./components/Founder";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>

        <section id="hero">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="whyneo">
          <WhyNeo />
        </section>

        <section id="attitude">
          <Attitude />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="founder">
          <Founder />
        </section>

        <section id="kontakt">
          <Footer />
        </section>

      </main>
    </>
  );
}