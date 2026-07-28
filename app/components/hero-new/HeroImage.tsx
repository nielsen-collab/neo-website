import Image from "next/image";

import CompetencePanel from "../foundation/CompetencePanel";

export default function HeroImage() {
  return (
    <div className="relative">

      {/* Portrait */}

      <div className="relative overflow-hidden rounded-[32px]">

        <Image
          src="/arne-hero1.jpg"
          alt="Arne Nielsen"
          width={620}
          height={760}
          priority
          className="
            w-full
            rounded-[32px]
            object-cover
          "
        />

      </div>


      {/* Founder Information */}

      <div className="mt-7">

        <p
          className="
            text-[13px]
            font-semibold
            uppercase
            tracking-[0.38em]
            text-slate-900
          "
        >
          ARNE NIELSEN
        </p>


        <p
          className="
            mt-2
            text-[15px]
            font-light
            text-slate-500
          "
        >
          Founder · Nielsen Energy Operations
        </p>

      </div>


      {/* Kompetenzkarte */}

      <div className="mt-8">

        <CompetencePanel />

      </div>

    </div>
  );
}