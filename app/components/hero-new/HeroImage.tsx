import Image from "next/image";
import CompetencePanel from "../foundation/CompetencePanel";

export default function HeroImage() {
  return (
    <div className="flex justify-center lg:justify-end">

      <div className="w-full max-w-[360px] sm:max-w-[430px] lg:max-w-[540px]">

        {/* Portrait */}

        <div className="group relative">

          {/* Ambient Glow */}

          <div className="pointer-events-none absolute -inset-6 md:-inset-8 rounded-[48px] bg-blue-500/10 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

          {/* Glass Frame */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              md:rounded-[34px]
              border
              border-white/70
              bg-white/65
              p-2
              md:p-3
              backdrop-blur-2xl
              shadow-[0_35px_90px_rgba(15,23,42,0.12)]
              transition-all
              duration-700
              group-hover:-translate-y-1
              group-hover:shadow-[0_45px_120px_rgba(37,99,235,0.18)]
            "
          >

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-white/80
                via-white/10
                to-blue-100/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -left-1/2
                top-0
                h-full
                w-1/2
                -skew-x-12
                bg-gradient-to-r
                from-transparent
                via-white/35
                to-transparent
                opacity-0
                transition-all
                duration-1000
                group-hover:left-[130%]
                group-hover:opacity-100
              "
            />

            <Image
              src="/arne-hero1.jpg"
              alt="Arne Nielsen"
              width={540}
              height={690}
              priority
              className="
                relative
                h-auto
                w-full
                rounded-[22px]
                md:rounded-[26px]
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.015]
              "
            />

          </div>

        </div>

        {/* Signatur */}

        <div className="mt-6 flex items-center justify-between md:mt-7">

          <div>

            <h3 className="text-[15px] font-semibold uppercase tracking-[0.20em] text-slate-900 md:text-[16px] md:tracking-[0.24em]">
              ARNE NIELSEN
            </h3>

            <p className="mt-1 text-[13px] text-slate-500 md:text-[14px]">
              Founder · Nielsen Energy Operations
            </p>

          </div>

          <div className="h-px w-16 bg-gradient-to-r from-slate-200 to-transparent md:w-24" />

        </div>

        {/* Executive Card */}

        <div className="mt-5 md:mt-6">
          <CompetencePanel />
        </div>

      </div>

    </div>
  );
}