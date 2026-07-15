type SectionTransitionProps = {
  className?: string;
};

export default function SectionTransition({
  className = "",
}: SectionTransitionProps) {
  return (
    <div
      className={`
        relative
        h-24
        overflow-hidden
        ${className}
      `}
    >
      {/* Atmosphere */}

      <div className="absolute inset-0">

        {/* Licht */}

        <div className="absolute left-1/2 top-0 h-40 w-[900px] -translate-x-1/2 rounded-full bg-blue-500/[0.025] blur-[120px]" />

        {/* Verlauf */}

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      </div>

    </div>
  );
}