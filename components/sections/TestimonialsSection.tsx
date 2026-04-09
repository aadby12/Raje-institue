import { testimonials } from "@/data/homepage";

export function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Testimonials</p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What Students and Families Say
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <blockquote className="text-sm leading-6 text-slate-700">“{item.quote}”</blockquote>
              <figcaption className="mt-4">
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-600">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
