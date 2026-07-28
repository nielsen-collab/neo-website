import { ReactNode } from "react";

type PremiumPanelProps = {
  children: ReactNode;
  className?: string;
};

export default function PremiumPanel({
  children,
  className = "",
}: PremiumPanelProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-white/45
        bg-white/72
        backdrop-blur-3xl

        shadow-[
          0_8px_20px_rgba(15,23,42,0.04),
          0_28px_70px_rgba(15,23,42,0.06),
          0_55px_140px_rgba(15,23,42,0.05)
        ]

        transition-all
        duration-700
        ease-[cubic-bezier(0.25,1,0.5,1)]

        hover:-translate-y-[2px]

        hover:shadow-[
          0_12px_28px_rgba(15,23,42,0.05),
          0_36px_90px_rgba(15,23,42,0.08),
          0_70px_170px_rgba(15,23,42,0.07)
        ]

        ${className}
      `}
    >
      {/* Ambient Light */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-blue-500/[0.045]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-16
            bottom-0
            h-56
            w-56
            rounded-full
            bg-slate-200/35
            blur-[90px]
          "
        />

      </div>

      {/* obere Lichtkante */}

      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/40" />

      {/* Content */}

      <div className="relative z-10">

        {children}

      </div>

    </div>
  );
}