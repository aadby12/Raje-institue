export function AdmissionsCTA() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-slate-900 py-14 text-white sm:py-20">
      <div className="pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-teal-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl" />
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="inline-flex rounded-full bg-teal-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-100 ring-1 ring-teal-200/25">
                Admissions Open
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Your Future in Healthcare Can Start This Intake
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
                Secure your place in a practical, career-focused learning environment where you are
                trained with purpose, guided with care, and prepared for real opportunities.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm">
              <p className="font-semibold text-white">Next Intake Support</p>
              <p className="mt-1 text-slate-200">Admissions guidance available now.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Apply Now
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request Information
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
