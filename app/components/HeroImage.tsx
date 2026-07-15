import Image from "next/image";
import CompetencePanel from "./foundation/CompetencePanel";

export default function HeroImage() {
  return (
    <div className="flex justify-end">

      <div className="w-[560px]">

        {/* Portrait */}

        <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-white/80 p-3 backdrop-blur-xl shadow-[0_25px_80px_rgba(15,23,42,0.08)]">

          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-blue-100/10" />

          <Image
            src="/arne-hero1.jpg"
            alt="Arne Nielsen"
            width={560}
            height={700}
            priority
            className="relative rounded-[24px] object-cover"
          />

        </div>

        {/* Signatur */}

        <div className="mt-8">

          <h3 className="text-[18px] font-semibold uppercase tracking-[0.22em] text-slate-900">
            ARNE NIELSEN
          </h3>

          <p className="mt-2 text-[15px] text-slate-500">
            Gründer · Nielsen Energy Operations
          </p>

        </div>

        {/* NEO Signature Panel */}

        <CompetencePanel />

      </div>

    </div>
  );
}