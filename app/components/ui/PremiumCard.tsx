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
        border-slate-200
        bg-white
        shadow-[0_20px_50px_rgba(15,23,42,0.08)]
        ${className}
      `}
    >

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white
          via-transparent
          to-blue-50/40
        "
      />

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}