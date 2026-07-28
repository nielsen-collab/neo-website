import { ReactNode } from "react";

type PremiumSurfaceProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function PremiumSurface({
  children,
  className = "",
  id,
}: PremiumSurfaceProps) {
  return (
    <section
      id={id}
      className={`
        relative
        overflow-hidden
        ${className}
      `}
    >
      {/* Ambient Light */}

      <div className="pointer-events-none absolute inset-0">

        {/* Hauptlicht */}

        <div
          className="
            absolute
            left-1/2
            top-[-120px]
            h-[1100px]
            w-[1100px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.028]
            blur-[240px]
          "
        />

        {/* Sekundäres Licht rechts */}

        <div
          className="
            absolute
            right-[-220px]
            top-1/3
            h-[820px]
            w-[820px]
            rounded-full
            bg-slate-100/40
            blur-[240px]
          "
        />

        {/* Subtiles Markenlicht links unten */}

        <div
          className="
            absolute
            -left-48
            bottom-[-220px]
            h-[700px]
            w-[700px]
            rounded-full
            bg-blue-400/[0.018]
            blur-[260px]
          "
        />

      </div>

      <div className="relative z-10">

        {children}

      </div>

    </section>
  );
}