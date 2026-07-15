type PremiumDividerProps = {
  width?: string;
  className?: string;
};

export default function PremiumDivider({
  width = "100%",
  className = "",
}: PremiumDividerProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width }}
    >
      <div className="relative h-px">

        {/* Hauptlinie */}

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/90 to-transparent" />

        {/* Blauer Glow */}

        <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-blue-500/20 blur-sm" />

        {/* Lichtreflex */}

        <div className="absolute left-1/2 top-0 h-px w-16 -translate-x-1/2 bg-white/80" />

      </div>
    </div>
  );
}