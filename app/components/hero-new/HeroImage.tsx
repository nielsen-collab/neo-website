import Image from "next/image";

import CompetencePanel from "../foundation/CompetencePanel";

export default function HeroImage() {
  return (
    <div className="relative">

      <div className="relative overflow-hidden rounded-[32px]">

        <Image
          src="/arne-hero1.jpg"
          alt="Arne Nielsen"
          width={620}
          height={760}
          priority
          className="
            w-full
            object-cover
            rounded-[32px]
          "
        />

      </div>

      <div className="mt-8">

        <CompetencePanel />

      </div>

    </div>
  );
}