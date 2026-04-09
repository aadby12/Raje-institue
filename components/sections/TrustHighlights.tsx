import { trustHighlights } from "@/data/homepage";

export function TrustHighlights() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-7 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Trust Highlights</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Built on Practical Training and Student Growth
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="mb-2 text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm leading-6 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
