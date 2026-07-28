import { ReactNode } from "react";
import PremiumPanel from "../ui/PremiumPanel";

type PrivacyCardProps = {
  children: ReactNode;
};

export default function PrivacyCard({
  children,
}: PrivacyCardProps) {
  return (
    <section className="pb-16 lg:pb-24">

      <div className="mx-auto max-w-[1300px] px-6 md:px-10 lg:px-20">

        <PremiumPanel
          className="
            max-w-[980px]
            rounded-[40px]
            p-10
            md:p-16
            lg:p-20
          "
        >

          {/* Header */}

          <div className="flex items-center gap-4">

            <span className="h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,.35)]" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-blue-600">
              DATENSCHUTZERKLÄRUNG
            </p>

          </div>

          {/* Headline */}

          <h2 className="mt-10 text-[42px] font-extralight leading-[0.95] tracking-[-0.05em] text-slate-900 md:text-[54px]">
            Datenschutz
            <br />
            auf einen Blick
          </h2>

          {/* Inhalt */}

          <div className="mt-14 max-w-[760px]">

            <div
              className="
                prose
                prose-slate
                max-w-none

                prose-headings:font-extralight
                prose-headings:tracking-[-0.03em]
                prose-headings:text-slate-900

                prose-h2:mt-16
                prose-h2:text-[30px]
                lg:prose-h2:text-[34px]

                prose-h3:mt-10
                prose-h3:text-[22px]

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

        </PremiumPanel>

      </div>

    </section>
  );
}