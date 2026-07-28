import PremiumDivider from "./PremiumDivider";

type PremiumHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

export default function PremiumHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}: PremiumHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`
        ${centered ? "text-center" : ""}
        ${className}
      `}
    >

      {/* Eyebrow */}

      <div
        className={`flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >

        <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />

        <span className="text-[11px] md:text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.35em] md:tracking-[0.40em] lg:tracking-[0.45em] text-blue-600">
          {eyebrow}
        </span>

      </div>


      {/* Headline */}

      <h2
        className="
          mt-5
          text-[38px]
          leading-[1.08]
          tracking-[-0.04em]
          font-extralight
          text-slate-900

          sm:text-[44px]

          md:text-[50px]

          lg:mt-6
          lg:text-[58px]
          lg:leading-[1.04]
          lg:tracking-[-0.045em]
        "
      >
        {title}
      </h2>


      {/* Divider */}

      <div className="mt-6 lg:mt-8">

        <PremiumDivider />

      </div>

    </div>
  );
}