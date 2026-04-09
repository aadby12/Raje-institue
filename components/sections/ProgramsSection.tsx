import { programs } from "@/data/homepage";

export function ProgramsSection() {
  return (
    <section id="programs" className="bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Programs</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Career-Relevant Healthcare Training
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                {program.duration}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{program.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{program.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {program.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-5 inline-flex rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition group-hover:bg-slate-800 hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                {program.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
