import PremiumSurface from "./ui/PremiumSurface";
import PremiumHeading from "./ui/PremiumHeading";
import PremiumCard from "./ui/PremiumCard";

const principles = [
  {
    number: "01",
    title: "Technische Analyse",
    text: "Wir schaffen Transparenz über Energie, Gebäude und Prozesse.",
  },
  {
    number: "02",
    title: "Wirtschaftliche Bewertung",
    text: "Wir übersetzen technische Erkenntnisse in belastbare unternehmerische Entscheidungen.",
  },
  {
    number: "03",
    title: "Strategische Begleitung",
    text: "Wir begleiten Unternehmen bis aus Entscheidungen messbare Ergebnisse werden.",
  },
];

export default function WhyNeo() {
  return (
    <PremiumSurface className="pt-14 pb-16 lg:pt-24 lg:pb-24">

      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-20">

        <PremiumHeading
          eyebrow="UNSER ANSATZ"
          title="Was NEO anders macht."
        />

        {/* HERO STATEMENT */}

        <div className="mt-14 max-w-[980px] lg:mt-20">

          <h2 className="text-[44px] font-extralight leading-[1.02] tracking-[-0.05em] text-slate-900 sm:text-[56px] lg:text-[74px] lg:leading-[0.98] lg:tracking-[-0.06em]">

            Wir beraten

            <br />

            <span className="text-slate-300">
              keine Energie.
            </span>

            <br />

            <span className="text-blue-600">
              Wir beraten
              Entscheidungen.
            </span>

          </h2>

          <p className="mt-8 max-w-[760px] text-[18px] leading-[1.8] text-slate-600 md:text-[20px] lg:mt-10 lg:text-[24px] lg:leading-[1.8]">

            Energie ist niemals Selbstzweck.
            Sie beeinflusst Investitionen,
            Wettbewerbsfähigkeit und die Zukunft eines Unternehmens.
            Deshalb verbindet NEO technische Analyse mit
            unternehmerischem Denken.

          </p>

        </div>

        {/* CARDS */}

        <div className="mt-14 grid gap-6 lg:mt-20 lg:gap-8 lg:grid-cols-3">

          {principles.map((item) => (

            <PremiumCard
              key={item.number}
              className="flex h-full flex-col p-8 md:p-10"
            >

              <div className="text-[13px] font-semibold tracking-[0.30em] text-blue-600 md:text-[14px] md:tracking-[0.35em]">

                {item.number}

              </div>

              <h3 className="mt-6 text-[28px] font-extralight leading-tight tracking-[-0.03em] text-slate-900 md:mt-8 md:text-[32px] lg:text-[36px]">

                {item.title}

              </h3>

              <p className="mt-6 flex-1 text-[17px] leading-[1.8] text-slate-600 md:mt-8 md:text-[18px] lg:text-[20px] lg:leading-[1.9]">

                {item.text}

              </p>

              <div className="mt-8 h-px w-20 bg-gradient-to-r from-blue-500/70 to-transparent lg:mt-10 lg:w-24" />

            </PremiumCard>

          ))}

        </div>

      </div>

    </PremiumSurface>
  );
}