import { ReactNode } from "react";

type LegalSectionProps = {
  number: string;
  title: string;
  children: ReactNode;
  last?: boolean;
};

export default function LegalSection({
  number,
  title,
  children,
  last = false,
}: LegalSectionProps) {
  return (
    <section className="py-14 md:py-16">

      <div className="flex items-start gap-4 md:gap-10">

        {/* Kapitelnummer */}

        <div className="min-w-[28px] md:min-w-[52px]">

          <p className="text-[14px] font-medium tracking-[0.18em] text-blue-600">
            {number}
          </p>

        </div>

        {/* Inhalt */}

        <div className="flex-1 max-w-none md:max-w-[760px]">

          <h2 className="text-[32px] font-extralight tracking-[-0.03em] text-slate-900 md:text-[38px]">
            {title}
          </h2>

          <div
            className="
              prose
              prose-slate
              mt-8
              max-w-none

              prose-p:text-[18px]
              lg:prose-p:text-[20px]
              prose-p:leading-[1.9]
              prose-p:text-slate-600

              prose-li:text-[18px]
              lg:prose-li:text-[20px]
              prose-li:leading-[1.9]

              prose-strong:text-slate-900

              prose-a:text-blue-600
              prose-a:no-underline
              hover:prose-a:underline
            "
          >
            {children}
          </div>

        </div>

      </div>

      {!last && (
        <div className="mt-16 h-px w-24 bg-slate-200" />
      )}

    </section>
  );
}