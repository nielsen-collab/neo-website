import PremiumSurface from "./ui/PremiumSurface";
import PremiumHeading from "./ui/PremiumHeading";

const process = [
  {
    step: "01",
    title: "Verstehen",
    text: "Wir analysieren die Ausgangssituation, stellen die richtigen Fragen und schaffen Transparenz über Zusammenhänge.",
  },
  {
    step: "02",
    title: "Bewerten",
    text: "Gemeinsam entwickeln wir belastbare Entscheidungsgrundlagen und bewerten Chancen, Risiken und wirtschaftliche Auswirkungen.",
  },
  {
    step: "03",
    title: "Entscheiden",
    text: "Technische Erkenntnisse werden in unternehmerische Entscheidungen übersetzt – nachvollziehbar, fundiert und verantwortungsvoll.",
  },
  {
    step: "04",
    title: "Umsetzen",
    text: "NEO begleitet die Umsetzung und bleibt Sparringspartner über den eigentlichen Projektabschluss hinaus.",
  },
];

export default function Process() {
  return (
    <PremiumSurface className="py-24 lg:py-40">

      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-20">

        <PremiumHeading
          eyebrow="DAS NEO-PRINZIP"
          title="Technische Analyse ist nur der Anfang."
        />

        <div className="mt-14 grid gap-6 lg:mt-20 lg:gap-8">

          {process.map((item) => (

            <div
              key={item.step}
              className="
                group
                relative
                overflow-hidden
                rounded-[26px]
                lg:rounded-[34px]
                border
                border-slate-700/40
                bg-[#0F172A]
                p-6
                md:p-8
                lg:p-10
                shadow-[0_30px_80px_rgba(2,6,23,0.35)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-blue-500/30
                hover:shadow-[0_40px_100px_rgba(37,99,235,0.18)]
              "
            >

              {/* Ambient Light */}

              <div className="pointer-events-none absolute inset-0">

                <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

              </div>

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    md:h-16
                    md:w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-blue-500
                    to-blue-700
                    text-sm
                    md:text-base
                    font-semibold
                    text-white
                    shadow-[0_14px_30px_rgba(37,99,235,.35)]
                  "
                >
                  {item.step}
                </div>

                <div className="max-w-[900px]">

                  <h3 className="text-[28px] font-extralight tracking-[-0.03em] text-white md:text-[32px] lg:text-[36px]">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-[17px] leading-[1.8] text-slate-300 md:mt-5 md:text-[18px] lg:text-[20px] lg:leading-[1.9]">

                    {item.text}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </PremiumSurface>
  );
}