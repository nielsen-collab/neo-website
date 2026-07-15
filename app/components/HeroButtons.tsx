export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-5">

      <a
        href="#kontakt"
        className="rounded-full bg-blue-600 px-8 py-4 text-white font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
      >
        Erstgespräch vereinbaren
      </a>

      <a
        href="#leistungen"
        className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-8 py-4 font-medium text-slate-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
      >
        Unser Ansatz

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>

      </a>

    </div>
  );
}