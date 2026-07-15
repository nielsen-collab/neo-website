import { ReactNode } from "react";

type PremiumCardProps = {
  children: ReactNode;
  className?: string;
};

export default function PremiumCard({
  children,
  className = "",
}: PremiumCardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/70
        bg-white/72
        backdrop-blur-2xl
        shadow-[0_30px_90px_rgba(15,23,42,0.10)]
        ${className}
      `}
    >
      {/* Soft Light */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/60
          via-transparent
          to-blue-100/10
        "
      />

      <div className="relative z-10">

        {children}

      </div>
    </div>
  );
}