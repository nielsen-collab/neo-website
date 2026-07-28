import PremiumSurface from "./ui/PremiumSurface";
import PremiumHeading from "./ui/PremiumHeading";
import PremiumCard from "./ui/PremiumCard";

const situations = [
  {
    number: "01",
    title: "Gesetzliche Anforderungen sicher erfüllen.",
    text:
      "Gesetzliche Anforderungen wie DIN EN 16247, EnEfG, ISO 50001 oder DIN V 18599 sind häufig der Anlass eines Projekts. Für NEO bilden sie jedoch nicht das Ziel, sondern die Grundlage für belastbare unternehmerische Entscheidungen.",
    featured: true,
  },
  {
    number: "02",
    title: "Energiekosten strategisch steuern.",
    text:
      "Energie beeinflusst längst Wettbewerbsfähigkeit, Investitionen und Unternehmenswert. Wir schaffen Transparenz über Kosten, Potenziale und wirtschaftliche Auswirkungen.",
  },
  {
    number: "03",
    title: "Investitionen sicher bewerten.",
    text:
      "Gebäude, Technik und Energieversorgung sind langfristige Entscheidungen. Wir liefern belastbare Entscheidungsgrundlagen für wirtschaftlich sinnvolle Investitionen.",
  },
  {
    number: "04",
    title: "Fördermittel gezielt nutzen.",
    text:
      "Förderprogramme entfalten ihren größten Nutzen, wenn sie von Beginn an Teil der strategischen Investitionsplanung sind.",
  },
  {
    number: "05",
    title: "Energie dauerhaft verankern.",
    text:
      "Wir entwickeln Strukturen, damit Energie nicht Projekt bleibt, sondern zu einem festen Bestandteil Ihrer Unternehmensstrategie wird.",
  },
];

export default function Services() {
  return (
    <PremiumSurface className="pt-14 pb-16 lg:pt-24 lg:pb-24">

      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-20">

        <PremiumHeading
          eyebrow="WANN UNTERNEHMEN HANDELN MÜSSEN"
          title="Die Pflicht ist oft der Anlass. Der Mehrwert ist die Entscheidung."
        />

        <p className="mt-8 max-w-[900px] text-[18px] leading-[1.8] text-slate-600 md:text-[20px] lg:mt-10 lg:text-[22px] lg:leading-[1.9]">

          Nicht jede unternehmerische Entscheidung beginnt mit Energie.
          Energie beeinflusst jedoch Investitionen, Risiken,
          Finanzierung und Wettbewerbsfähigkeit. Genau dort beginnt
          die Zusammenarbeit mit NEO.

        </p>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">

          {situations.map((item, index) => (

            <PremiumCard
              key={item.number}
              className={`flex flex-col p-8 md:p-10 lg:p-12 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >

              <div className="text-[13px] font-semibold tracking-[0.30em] text-blue-600 md:text-[14px] md:tracking-[0.35em]">

                {item.number}

              </div>

              <h3
                className={`mt-6 font-extralight tracking-[-0.03em] text-slate-900 ${
                  index === 0
                    ? "text-[34px] leading-[1.15] md:text-[40px] lg:text-[46px] lg:leading-[1.08]"
                    : "text-[28px] leading-[1.2] md:text-[32px] lg:text-[34px]"
                }`}
              >

                {item.title}

              </h3>

              <p
                className={`mt-6 text-slate-600 ${
                  index === 0
                    ? "max-w-[900px] text-[18px] leading-[1.8] md:text-[20px] lg:text-[21px] lg:leading-[1.9]"
                    : "flex-1 text-[17px] leading-[1.8] md:text-[18px] lg:text-[19px] lg:leading-[1.9]"
                }`}
              >

                {item.text}

              </p>

              {index === 0 && (
                <>
                  <div className="mt-10 h-px w-full bg-slate-200 lg:mt-14" />

                  <div className="mt-8 lg:mt-12">

                    <div className="text-[11px] font-semibold uppercase tracking-[0.30em] text-slate-400 md:text-[12px] md:tracking-[0.35em]">

                      Regulatorische Grundlagen

                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-y-3 text-[15px] text-slate-600 md:mt-6 md:text-[16px]">

                      <div>DIN EN 16247</div>
                      <div>EnEfG</div>

                      <div>ISO 50001</div>
                      <div>DIN V 18599</div>

                    </div>

                  </div>
                </>
              )}

              <div className="mt-auto pt-10 lg:pt-12">

                <div className="h-px w-20 bg-gradient-to-r from-blue-500/70 to-transparent lg:w-24" />

              </div>

            </PremiumCard>

          ))}

        </div>

      </div>

    </PremiumSurface>
  );
}