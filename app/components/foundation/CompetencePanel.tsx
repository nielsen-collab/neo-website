export default function CompetencePanel() {
  const points = [
    "Technische Expertise",
    "Unternehmerische Perspektive",
    "Begleitung bis zur Umsetzung",
  ];

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-gradient-to-br
        from-slate-700
        via-slate-800
        to-slate-900
        ring-1
        ring-white/5
        shadow-[0_24px_80px_rgba(15,23,42,.18)]
      "
    >
      {/* Material Layer */}

      <div className="absolute inset-0">

        {/* Licht oben links */}

        <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-white/6 blur-3xl" />

        {/* leichter Verlauf */}

        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/[0.10]" />

        {/* feine Textur */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,.55) 1px, transparent 0)
            `,
            backgroundSize: "8px 8px",
          }}
        />

      </div>

      <div className="relative px-10 py-9">

        {/* Header */}

        <div className="flex items-center gap-3">

          <span className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,.45)]" />

          <span className="text-[12px] font-semibold uppercase tracking-[0.38em] text-blue-300">
            UNSER ANSATZ
          </span>

        </div>

        <h3 className="mt-6 text-[34px] font-extralight leading-[1.08] tracking-[-0.045em] text-white">

          Technische Analyse.

          <br />

          Unternehmerische Klarheit.

        </h3>

        <div className="mt-7 h-px w-20 bg-gradient-to-r from-white/25 to-transparent" />

        <div className="mt-8 space-y-5">

          {points.map((point) => (

            <div
              key={point}
              className="flex items-center gap-4"
            >

              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

              <span className="text-[17px] font-light tracking-[0.01em] text-slate-200">
                {point}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}