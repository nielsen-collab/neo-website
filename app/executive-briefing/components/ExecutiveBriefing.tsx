export default function ExecutiveBriefing() {
  const items = [
    {
      title: "30–45 Minuten",
      text: "Strategisches Erstgespräch",
    },
    {
      title: "Persönlich",
      text: "Direkter Austausch mit Arne Nielsen",
    },
    {
      title: "Vertraulich",
      text: "Diskret. Auf Augenhöhe.",
    },
  ];

  return (
    <div
      className="
        relative
        mx-auto

        w-full
        max-w-[390px]

        overflow-hidden
        rounded-[30px]

        border
        border-white/70

        bg-white/70
        backdrop-blur-3xl

        shadow-[0_18px_55px_rgba(15,23,42,0.06)]
      "
    >
      {/* Ambient Light */}

      <div className="absolute inset-0">

        <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-blue-500/[0.05] blur-[80px]" />

        <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-slate-200/30 blur-[65px]" />

      </div>

      {/* Mobile Polish */}

      <div className="relative px-6 py-6 md:px-8 md:py-8">

        {/* Header */}

        <div className="flex items-center gap-3">

          <span className="h-2.5 w-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.35)]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-blue-600 md:text-[11px] md:tracking-[0.34em]">

            EXECUTIVE BRIEFING

          </span>

        </div>

        {/* Headline */}

        <h2 className="mt-5 text-[30px] font-extralight leading-[0.98] tracking-[-0.045em] text-slate-900 md:mt-6 md:text-[34px]">

          Ihr

          <br />

          Erstgespräch.

        </h2>

        {/* Divider */}

        <div className="mt-5 h-px w-16 bg-gradient-to-r from-blue-300 to-transparent md:mt-6" />

        {/* Inhalte */}

        <div className="mt-5 md:mt-6">

          {items.map((item, index) => (

            <div key={item.title}>

              <div className="py-4">

                <h3 className="text-[16px] font-semibold text-slate-900">

                  {item.title}

                </h3>

                <p className="mt-1.5 text-[14px] leading-6 text-slate-500">

                  {item.text}

                </p>

              </div>

              {index !== items.length - 1 && (
                <div className="h-px bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />
              )}

            </div>

          ))}

        </div>

        {/* Executive Note */}

        <div
          className="
            mt-6

            rounded-[22px]

            border
            border-blue-100

            bg-gradient-to-br
            from-blue-50/70
            via-white
            to-white

            p-5
            md:p-6

            shadow-[0_10px_26px_rgba(37,99,235,0.05)]
          "
        >

          <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-blue-600 md:text-[11px] md:tracking-[0.32em]">

            EXECUTIVE NOTE

          </p>

          <p className="mt-4 text-[17px] font-extralight leading-[1.4] tracking-[-0.02em] text-slate-900 md:mt-5 md:text-[18px]">

            Sie verlassen das Gespräch mit einer ersten
            strategischen Einschätzung Ihrer Situation.

          </p>

          <div className="mt-4 h-px w-14 bg-gradient-to-r from-blue-300 to-transparent md:mt-5" />

          <p className="mt-4 text-[13px] leading-7 text-slate-600 md:mt-5 md:leading-8">

            Keine Vorbereitung.

            <br />

            Persönlich.

            <br />

            Vertraulich.

          </p>

        </div>

      </div>

    </div>
  );
}