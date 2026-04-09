import { contactInfo, navItems } from "@/data/homepage";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-slate-900">Raje Institute</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Professional healthcare training institute in Ghana focused on practical, career-ready
            student development.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Quick Links</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition hover:text-slate-900">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Programs</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">
            <li>MCA / Pharmacy Assistant</li>
            <li>Community Health Support (Upcoming)</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Contact</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.email}</li>
            <li>{contactInfo.location}</li>
            <li>Mon-Sat, 8:00am - 5:00pm</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 w-full max-w-6xl border-t border-slate-200 px-4 pt-5 text-xs text-slate-600">
        © {new Date().getFullYear()} Raje Institute. All rights reserved.
      </div>
    </footer>
  );
}
