import Image from "next/image";

export default function Founder() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-40">

      {/* Ambient Light */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-220px] top-10 h-[700px] w-[700px] rounded-full bg-blue-500/5 blur-[180px]" />

        <div className="absolute right-[-260px] bottom-0 h-[700px] w-[700px] rounded-full bg-slate-200/30 blur-[200px]" />

      </div>

      <div className="relative mx-auto grid max-w-[1500px] items-center gap-14 px-6 md:px-10 lg:grid-cols-[38%_62%] lg:gap-16 xl:grid-cols-[42%_58%] xl:gap-20 lg:px-20">

        {/* Portrait */}

        <div className="group relative mx-auto w-full max-w-[430px] lg:mx-0 lg:max-w-[380px] xl:max-w-none">

          <div className="absolute -inset-6 lg:-inset-8 rounded-[42px] bg-blue-500/10 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              lg:rounded-[34px]
              border
              border-white/70
              bg-white/70
              p-2
              lg:p-3
              backdrop-blur-xl
              shadow-[0_35px_90px_rgba(15,23,42,.10)]
              transition-all
              duration-700
              group-hover:-translate-y-1
            "
          >

            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-blue-100/10" />

            <Image
              src="/arne-hero1.jpg"
              alt="Arne Nielsen"
              width={520}
              height={670}
              className="relative h-auto w-full rounded-[22px] lg:rounded-[26px]"
            />

          </div>

        </div>

        {/* Inhalt */}

        <div className="mx-auto w-full max-w-[620px] lg:mx-0 lg:max-w-[700px]">

          <div className="flex items-center gap-4">

            <span className="h-3 w-3 rounded-full bg-blue-600" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-600 md:text-[13px] md:tracking-[0.45em]">

              GRÜNDER

            </span>

          </div>

          <h2
            className="
              mt-6
              text-[40px]
              font-extralight
              leading-[1.05]
              tracking-[-0.05em]
              text-slate-900

              sm:text-[50px]

              lg:mt-8
              lg:text-[54px]
              lg:leading-[1.02]

              xl:text-[66px]
            "
          >

            Vertrauen beginnt

            <br />

            mit einer Entscheidung.

          </h2>

          <div className="mt-8 h-px w-20 bg-gradient-to-r from-blue-600/40 to-transparent lg:mt-12 lg:w-24" />

          <p className="mt-8 text-[18px] leading-[1.8] text-slate-600 md:text-[20px] lg:mt-12 lg:text-[22px] lg:leading-[1.9]">

            Ich habe NEO gegründet, weil ich überzeugt bin,
            dass Unternehmen keine weiteren Berichte benötigen.

          </p>

          <p className="mt-6 text-[18px] leading-[1.8] text-slate-600 md:text-[20px] lg:mt-8 lg:text-[22px] lg:leading-[1.9]">

            Sie benötigen einen Partner,
            der technische Analysen in
            unternehmerische Entscheidungen übersetzt
            und Verantwortung für den gemeinsamen Weg übernimmt.

          </p>

          <p className="mt-6 text-[18px] leading-[1.8] text-slate-600 md:text-[20px] lg:mt-8 lg:text-[22px] lg:leading-[1.9]">

            Technik schafft Transparenz.
            Vertrauen entsteht jedoch erst,
            wenn Menschen gemeinsam tragfähige Entscheidungen treffen.

          </p>

          {/* Statement */}

          <div className="mt-10 border-l-2 border-blue-600 pl-6 lg:mt-16 lg:pl-8">

            <p className="text-[24px] font-extralight leading-[1.5] tracking-[-0.03em] text-slate-900 md:text-[28px] lg:text-[32px]">

              „Ich glaube nicht an perfekte Berichte.

              <br />

              Ich glaube an bessere Entscheidungen."

            </p>

          </div>

          <div className="mt-10 h-px w-20 bg-gradient-to-r from-blue-600/40 to-transparent lg:mt-16 lg:w-24" />

          <p className="mt-6 text-[17px] font-medium tracking-[0.02em] text-slate-900 lg:mt-8 lg:text-[18px]">

            Arne Nielsen

          </p>

          <p className="mt-2 text-[15px] text-slate-500 lg:text-[16px]">

            Gründer · Nielsen Energy Operations

          </p>

        </div>

      </div>

    </section>
  );
}