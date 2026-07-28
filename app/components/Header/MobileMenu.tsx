"use client";

import MenuHeader from "./MenuHeader";
import MenuNavigation from "./MenuNavigation";
import MenuFooter from "./MenuFooter";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  return (
    <div
      className={`
        fixed
        inset-0
        z-[999]
        overflow-y-auto

        bg-white

        transition-all
        duration-500

        ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }
      `}
    >
      {/* Ambient Light */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-[-260px]

            h-[620px]
            w-[620px]

            -translate-x-1/2

            rounded-full

            bg-blue-500/[0.025]

            blur-[180px]
          "
        />

      </div>

      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Header */}

        <div className="px-8 pt-8">

          <MenuHeader
            onClose={onClose}
          />

        </div>

        {/* Stage */}

        <section className="px-8 pt-10">

          <div className="h-px w-24 bg-gradient-to-r from-blue-500/60 to-transparent" />

          <p
            className="
              mt-8

              max-w-[420px]

              text-[13px]

              font-medium

              uppercase

              tracking-[0.32em]

              text-slate-400
            "
          >
            Nielsen Energy Operations
          </p>

          <h2
            className="
              mt-6

              max-w-[520px]

              text-[46px]

              font-extralight

              leading-[0.98]

              tracking-[-0.06em]

              text-slate-900
            "
          >
            Analysen schaffen
            <br />
            Erkenntnisse.
          </h2>

          <h2
            className="
              mt-5

              max-w-[520px]

              text-[46px]

              font-extralight

              leading-[0.98]

              tracking-[-0.06em]

              text-blue-600
            "
          >
            Entscheidungen schaffen
            <br />
            Zukunft.
          </h2>

        </section>

        {/* Navigation */}

        <section className="flex-1 px-8 pt-14">

          <MenuNavigation
            onNavigate={onClose}
          />

        </section>

        {/* Footer */}

        <section className="px-8 pb-8">

          <MenuFooter
            onNavigate={onClose}
          />

        </section>

      </div>

    </div>
  );
}