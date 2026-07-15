export default function Stats() {
  const principles = [
    {
      number: "01",
      title: "Wir beginnen beim Ziel.",
      text: "Nicht bei einem Audit. Nicht bei einer Norm. Sondern bei der unternehmerischen Fragestellung.",
    },
    {
      number: "02",
      title: "Wir denken wirtschaftlich.",
      text: "Technische Analysen sind wichtig. Entscheidend ist ihr wirtschaftlicher Nutzen für das Unternehmen.",
    },
    {
      number: "03",
      title: "Wir schaffen Orientierung.",
      text: "Komplexe Zusammenhänge werden verständlich. Aus Erkenntnissen entstehen fundierte Entscheidungen.",
    },
    {
      number: "04",
      title: "Wir befähigen Unternehmen.",
      text: "Unser Ziel ist nicht Abhängigkeit. Unser Ziel ist nachhaltige unternehmerische Stärke.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-44">

      <div className="pointer-events-none absolute right-[-280px] bottom-[-180px] h-[720px] w-[720px] rounded-full bg-blue-500/5 blur-[180px]" />

      <div className="mx-auto max-w-[1400px] px-12">

        <div className="mx-auto max-w-[760px] text-center">

          <div className="mb-10 flex items-center justify-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />

            <p className="text-[13px] font-semibold uppercase tracking-[0.45em] text-blue-600">
              UNSERE GRUNDSÄTZE
            </p>
          </div>

          <h2 className="text-[58px] font-extralight leading-[1.08] tracking-[-0.04em] text-slate-900">
            Entscheidungen entstehen
            <br />
            nicht zufällig.
          </h2>

          <div className="mx-auto mt-14 h-px w-24 bg-slate-200" />

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">

          {principles.map((item) => (
            <div
              key={item.number}
              className="rounded-[34px] border border-slate-200/70 bg-white/70 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-[14px] font-semibold tracking-[0.35em] text-blue-600">
                {item.number}
              </p>

              <h3 className="mt-6 text-[30px] font-light text-slate-900">
                {item.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}