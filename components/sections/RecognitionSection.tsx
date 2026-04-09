import { recognitionBadges } from "@/data/homepage";

export function RecognitionSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-6 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
            Recognition and Institutional Information
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            A Professional Structure Designed for Long-Term Trust
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            This section is prepared to present institutional affiliations, formal recognition,
            and partnership updates as they are confirmed and published.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {recognitionBadges.map((item) => (
            <div
              key={item}
              className="grid min-h-24 place-items-center rounded-xl border border-dashed border-slate-300 bg-slate-50 p-3 text-center text-xs font-semibold text-slate-700 shadow-sm sm:text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
