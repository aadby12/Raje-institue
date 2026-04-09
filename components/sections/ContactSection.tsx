import { contactInfo } from "@/data/homepage";

export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-5 px-4 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
            Contact and Inquiry
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Speak with Admissions
          </h2>
          <p className="mt-2 text-sm text-slate-700">Walk-in inquiries welcome at our Avenor office in Accra.</p>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Phone:</span> {contactInfo.phone}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Email:</span> {contactInfo.email}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Location:</span> {contactInfo.location}
            </p>
          </div>
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-full min-h-12 items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-500 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:w-auto"
          >
            Chat on WhatsApp
          </a>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Request Information</h3>
          <p className="mt-1 text-sm text-slate-700">
            Share your details and our admissions team will contact you shortly.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-800">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                placeholder="Eg. Ama Mensah"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-800">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                placeholder="+233..."
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-800">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                placeholder="I want to apply for the MCA / Pharmacy Assistant program."
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 sm:w-auto"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
