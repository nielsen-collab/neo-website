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

      {/* Safari Test: reduzierte Effekte */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-1/2
            top-[-120px]
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.025]
            blur-[80px]
          "
        />

        <div
          className="
            absolute
            right-[-120px]
            top-1/3
            h-[500px]
            w-[500px]
            rounded-full
            bg-slate-100/40
            blur-[80px]
          "
        />

      </div>

      <div className="relative z-10">
        {children}
      </div>

    </section>
  );
}