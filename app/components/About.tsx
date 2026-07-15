export default function About() {
  return (
    <section
      id="unternehmen"
      className="relative overflow-hidden py-44"
    >
      {/* Licht */}
      <div className="pointer-events-none absolute right-[-280px] top-20 h-[760px] w-[760px] rounded-full bg-blue-500/5 blur-[180px]" />

      <div className="relative mx-auto max-w-[1200px] px-12">

        <div className="mx-auto max-w-[820px] text-center">

          {/* Punkt */}

          <div className="mb-10 flex items-center justify-center gap-3">

            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />

            <p className="text-[13px] font-semibold uppercase tracking-[0.45em] text-blue-600">
              WARUM ES NEO GIBT
            </p>

          </div>

          <h2 className="text-[60px] font-extralight leading-[1.08] tracking-[-0.045em] text-slate-900">

            Energie ist kein
            <br />

            Technikthema.

          </h2>

          <div className="mx-auto mt-14 h-px w-24 bg-slate-200" />

          <p className="mx-auto mt-16 max-w-[760px] text-[26px] leading-[1.9] text-slate-600">

            Energie beeinflusst Investitionen,
            Wettbewerbsfähigkeit,
            Unternehmensentwicklung
            und langfristigen wirtschaftlichen Erfolg.

            <br />
            <br />

            Trotzdem wird Energie in vielen Unternehmen
            noch immer als Einzelprojekt behandelt.

          </p>

        </div>

        <div className="mx-auto mt-28 max-w-[960px] rounded-[36px] border border-slate-200/70 bg-white/70 p-14 backdrop-blur-xl">

          <p className="text-[30px] font-light leading-[1.8] tracking-[-0.02em] text-slate-900">

            NEO wurde gegründet,
            um Energie zu einem
            aktiven Bestandteil
            unternehmerischer Entscheidungen
            zu machen.

          </p>

        </div>

      </div>

    </section>
  );
}