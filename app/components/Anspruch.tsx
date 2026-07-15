export default function Anspruch() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-8">

        <div className="max-w-3xl mb-20">

          <p className="text-blue-600 uppercase tracking-[0.35em] text-sm font-semibold mb-6">
            Unser Anspruch
          </p>

          <h2 className="text-5xl font-light leading-tight tracking-tight text-gray-900">
            Technische Präzision.
            <br />
            Unternehmerische Perspektive.
          </h2>

          <p className="mt-10 text-xl leading-9 text-gray-500">
            Energie- und Gebäudeaudits sind kein Selbstzweck.
            Sie schaffen Transparenz.
            Entscheidend wird daraus jedoch erst eine fundierte
            Investitionsentscheidung.
            Genau hier setzt NEO an:
            Wir verbinden technische Analyse mit wirtschaftlicher
            Bewertung und begleiten Unternehmen bis zur belastbaren
            Entscheidungsgrundlage.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          <div className="border-t border-gray-300 pt-8">

            <h3 className="text-2xl font-medium mb-4">
              Energieaudits
            </h3>

            <p className="text-blue-600 font-medium mb-6">
              DIN EN 16247
            </p>

            <p className="text-gray-500 leading-8">
              Analyse des gesamten Unternehmens zur Identifikation
              wirtschaftlicher Energieeinsparpotenziale.
            </p>

          </div>

          <div className="border-t border-gray-300 pt-8">

            <h3 className="text-2xl font-medium mb-4">
              Gebäudeaudits
            </h3>

            <p className="text-blue-600 font-medium mb-6">
              DIN V 18599
            </p>

            <p className="text-gray-500 leading-8">
              Energetische Bewertung von Nichtwohngebäuden als Grundlage
              für Investitions- und Sanierungsentscheidungen.
            </p>

          </div>

          <div className="border-t border-gray-300 pt-8">

            <h3 className="text-2xl font-medium mb-4">
              Förderstrategie
            </h3>

            <p className="text-blue-600 font-medium mb-6">
              BAFA & Förderung
            </p>

            <p className="text-gray-500 leading-8">
              Wir verbinden technische Maßnahmen mit wirtschaftlicher
              Bewertung und passenden Fördermöglichkeiten.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}