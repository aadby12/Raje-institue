export function AboutPreview() {
  return (
    <section id="about" className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">About Raje Institute</p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Preparing Students for Professional Healthcare Support Roles
          </h2>
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            Raje Institute is committed to practical education that helps students grow with
            confidence, discipline, and purpose. Our training environment supports both personal
            development and professional preparation for healthcare-related career pathways.
          </p>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-300 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Learn More
          </a>
        </div>

        <div className="grid gap-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Mission-Focused Learning</p>
            <p className="mt-1 text-sm text-slate-700">
              Build reliable, practical skills that support patient-facing healthcare environments.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Student-Centered Progress</p>
            <p className="mt-1 text-sm text-slate-700">
              Mentorship and guidance designed to keep every learner motivated and career-ready.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Professional Preparation</p>
            <p className="mt-1 text-sm text-slate-700">
              Focus on conduct, communication, and confidence required in modern workplaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
