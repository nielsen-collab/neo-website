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

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[900px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.035]
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-[-200px]
            top-1/3
            h-[700px]
            w-[700px]
            rounded-full
            bg-slate-200/30
            blur-[180px]
          "
        />

      </div>

      <div className="relative z-10">

        {children}

      </div>

    </section>
  );
}