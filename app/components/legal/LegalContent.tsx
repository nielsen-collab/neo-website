type LegalContentProps = {
  children: React.ReactNode;
};

export default function LegalContent({
  children,
}: LegalContentProps) {
  return (
    <section className="pt-12 pb-20 lg:pt-20 lg:pb-32">

      <div className="mx-auto max-w-[900px] px-6 md:px-10 lg:px-20">

        {/* Übergang */}

        <div className="mb-16 lg:mb-20">

          <div className="h-px w-24 bg-slate-200" />

          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">

            ANGABEN GEMÄSS § 5 DDG

          </p>

          <p className="mt-4 max-w-[620px] text-[18px] leading-[1.8] text-slate-500 lg:text-[20px]">

            Die nachfolgenden Informationen erfüllen die gesetzlichen
            Informationspflichten nach dem Digitale-Dienste-Gesetz (DDG).

          </p>

        </div>

        {/* Inhalt */}

        <div
          className="
            prose
            prose-slate
            max-w-none

            prose-headings:font-extralight
            prose-headings:tracking-[-0.03em]
            prose-headings:text-slate-900

            prose-h2:mt-14
            prose-h2:text-[30px]
            lg:prose-h2:text-[38px]

            prose-h3:mt-10
            prose-h3:text-[22px]
            lg:prose-h3:text-[26px]

            prose-p:text-[18px]
            lg:prose-p:text-[20px]
            prose-p:leading-[1.9]
            prose-p:text-slate-600

            prose-li:text-[18px]
            lg:prose-li:text-[20px]
            prose-li:leading-[1.9]

            prose-a:text-blue-600
            prose-a:no-underline
            hover:prose-a:underline

            prose-strong:text-slate-900
          "
        >

          {children}

        </div>

      </div>

    </section>
  );
}