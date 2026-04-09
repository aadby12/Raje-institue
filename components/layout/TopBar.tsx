import { contactInfo } from "@/data/homepage";

export function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
            className="transition hover:text-teal-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
          >
            {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="transition hover:text-teal-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
          >
            {contactInfo.email}
          </a>
        </div>
        <p className="text-slate-200">Mon-Sat, 8:00am - 5:00pm</p>
      </div>
    </div>
  );
}
