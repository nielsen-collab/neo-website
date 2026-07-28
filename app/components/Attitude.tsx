import PremiumSurface from "./ui/PremiumSurface";
import PremiumHeading from "./ui/PremiumHeading";

const values = [
  {
    title: "Unabhängigkeit.",
    text:
      "Unsere Empfehlungen orientieren sich ausschließlich an den Interessen unserer Kunden. Nicht an Herstellern. Nicht an Produkten. Sondern an langfristig tragfähigen Entscheidungen.",
  },
  {
    title: "Klarheit.",
    text:
      "Komplexe technische Zusammenhänge werden verständlich. Denn gute Entscheidungen entstehen nicht durch mehr Informationen, sondern durch die richtigen Erkenntnisse.",
  },
  {
    title: "Verantwortung.",
    text:
      "Jede Empfehlung muss wirtschaftlich nachvollziehbar sein und auch morgen noch Bestand haben. Nachhaltigkeit beginnt mit verantwortungsvollen Entscheidungen.",
  },
  {
    title: "Partnerschaft.",
    text:
      "Unsere Arbeit endet nicht mit einem Bericht. Wir begleiten Unternehmen bei der Umsetzung und bleiben langfristiger Sparringspartner.",
  },
];

export default function Attitude() {
  return (
    <PremiumSurface className="pt-14 pb-8 lg:pt-24 lg:pb-12">

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-20">

        <PremiumHeading
          eyebrow="HALTUNG"
          title="Wofür NEO steht."
        />

        {/* Statement */}

        <div className="mt-8 max-w-[900px] lg:mt-10">

          <p className="text-[30px] font-extralight leading-[1.45] tracking-[-0.03em] text-slate-900 sm:text-[34px] lg:text-[38px] lg:leading-[1.5]">

            Vertrauen entsteht nicht durch Worte.

            <br />

            Vertrauen entsteht durch

            <span className="text-blue-600">
              {" "}konsequentes Handeln.
            </span>

          </p>

        </div>

        {/* Values */}

        <div className="mt-14 lg:mt-20">

          {values.map((item) => (

            <div
              key={item.title}
              className="border-t border-slate-100 py-10 md:py-12 lg:py-16"
            >

              <div className="grid gap-6 md:gap-8 lg:gap-12 lg:grid-cols-[320px_1fr]">

                <div>

                  <h3 className="text-[30px] font-extralight tracking-[-0.03em] text-slate-900 md:text-[34px] lg:text-[42px]">

                    {item.title}

                  </h3>

                </div>

                <div>

                  <p className="mt-2 max-w-[760px] text-[17px] leading-[1.9] text-slate-600 md:mt-3 md:text-[19px] lg:mt-4 lg:text-[22px] lg:leading-[2]">

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