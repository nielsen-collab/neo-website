import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-28">

      {/* Light */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute right-0 top-0 h-[900px] w-[900px] rounded-full bg-blue-500/5 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-[1600px] px-12 lg:px-20">

        <div className="grid items-start gap-20 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Linke Spalte */}

          <HeroContent />

          {/* Rechte Spalte */}

          <div className="mt-8">

            <HeroImage />

          </div>

        </div>

      </div>

    </section>
  );
}