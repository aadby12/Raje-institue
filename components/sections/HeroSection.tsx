import { contactInfo, heroBadges } from "@/data/homepage";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-14 pt-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pb-20 md:pt-16">
        <div className="space-y-7">
          <p className="inline-flex rounded-full bg-teal-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-teal-700 ring-1 ring-teal-600/20">
            Healthcare Training Institute, Ghana
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Build a Respected Healthcare Career with Practical Training
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            At Raje Institute, students gain the confidence, discipline, and hands-on skills needed
            for Medicine Counter Assistant and Pharmacy Assistant opportunities in Ghana's evolving
            healthcare sector.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#admissions"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Start Application
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Contact Admissions
            </a>
          </div>
          <div className="grid grid-cols-2 gap-2.5 border-t border-slate-200 pt-5 sm:grid-cols-4">
            {heroBadges.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-700 shadow-sm sm:text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-teal-100/50 blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80"
            alt="Healthcare students in practical class"
            className="relative h-80 w-full rounded-2xl object-cover shadow-xl sm:h-[28rem]"
          />
          <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 rounded-xl bg-white/95 p-3 shadow-lg backdrop-blur">
            <div>
              <p className="text-lg font-bold text-slate-900">95%</p>
              <p className="text-[11px] text-slate-600 sm:text-xs">Practical focus</p>
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900">Small</p>
              <p className="text-[11px] text-slate-600 sm:text-xs">Class guidance</p>
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900">Career</p>
              <p className="text-[11px] text-slate-600 sm:text-xs">Readiness model</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}
