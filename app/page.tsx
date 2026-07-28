import Header from "./components/Header/Header";
import Hero from "./components/hero-new/Hero";

import Services from "./components/Services";
import WhyNeo from "./components/WhyNeo";
import Attitude from "./components/Attitude";
import Process from "./components/Process";
import Founder from "./components/Founder";
import Footer from "./components/Footer";

import FadeIn from "./components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <Header />

      <main>

        <section id="hero">
          <Hero />
        </section>

        {/* TEST: FadeIn entfernt */}

        <section id="services">
          <Services />
        </section>

        <section id="whyneo">
          <FadeIn>
            <WhyNeo />
          </FadeIn>
        </section>

        <section id="attitude">
          <FadeIn>
            <Attitude />
          </FadeIn>
        </section>

        <section id="process">
          <FadeIn>
            <Process />
          </FadeIn>
        </section>

        <section id="founder">
          <FadeIn>
            <Founder />
          </FadeIn>
        </section>

        <section id="kontakt">
          <FadeIn>
            <Footer />
          </FadeIn>
        </section>

      </main>
    </>
  );
}