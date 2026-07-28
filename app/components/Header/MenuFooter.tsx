"use client";

type Props = {
  onNavigate: () => void;
};

export default function MenuFooter({
  onNavigate,
}: Props) {
  return (
    <footer className="pt-12 pb-2">

      {/* Divider */}

      <div className="h-px w-20 bg-gradient-to-r from-blue-500/60 to-transparent" />

      {/* CTA */}

      <a
        href="/executive-briefing"
        onClick={onNavigate}
        className="
          group

          mt-10
          inline-flex
          items-center
          gap-4

          text-[22px]
          font-extralight
          tracking-[-0.02em]

          text-slate-900

          transition-all
          duration-500
          ease-[cubic-bezier(0.25,1,0.5,1)]

          hover:text-blue-600
        "
      >

        Executive Briefing

        <span
          className="
            transition-all
            duration-500

            group-hover:translate-x-1
          "
        >
          →
        </span>

      </a>

      {/* Signature */}

      <div className="mt-12">

        <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">

          Nielsen Energy Operations

        </div>

        <p className="mt-4 text-[15px] leading-8 text-slate-500">

          Executive Energy Consulting

          <br />

          Deutschland

        </p>

      </div>

    </footer>
  );
}