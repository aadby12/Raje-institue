import { whyChooseUs } from "@/data/homepage";

export function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
            Why Choose Raje Institute
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            A Professional Institute for Ambitious Students
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
