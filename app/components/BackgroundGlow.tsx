export default function BackgroundGlow() {
  return (
    <>
      {/* Hauptlicht rechts */}

      <div
        className="
          pointer-events-none
          fixed
          right-[-250px]
          top-[120px]
          h-[950px]
          w-[950px]
          rounded-full
          bg-blue-500/7
          blur-[170px]
          animate-pulse
        "
        style={{
          animationDuration: "14s",
        }}
      />

      {/* zweites Licht links */}

      <div
        className="
          pointer-events-none
          fixed
          left-[-320px]
          bottom-[-180px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-sky-300/6
          blur-[180px]
        "
      />

      {/* kleiner Glow */}

      <div
        className="
          pointer-events-none
          fixed
          left-1/2
          top-[260px]
          h-[260px]
          w-[260px]
          -translate-x-1/2
          rounded-full
          bg-blue-400/8
          blur-[120px]
        "
      />
    </>
  );
}