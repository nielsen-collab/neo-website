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
        border-white/70
        bg-white/72
        backdrop-blur-3xl
        shadow-[0_30px_90px_rgba(15,23,42,0.07)]
        transition-all
        duration-500
        hover:-translate-y-[2px]
        hover:shadow-[0_42px_110px_rgba(15,23,42,0.10)]
        ${className}
      `}
    >
      {/* Ambient Light */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -right-20
            -top-20
            h-56
            w-56
            rounded-full
            bg-blue-500/[0.05]
            blur-[90px]
          "
        />

        <div
          className="
            absolute
            -left-12
            bottom-0
            h-44
            w-44
            rounded-full
            bg-slate-200/40
            blur-[70px]
          "
        />

      </div>

      {/* obere Lichtkante */}

      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/60" />

      {/* Content */}

      <div className="relative z-10">

        {children}

      </div>

    </div>
  );
}