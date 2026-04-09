"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/homepage";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header id="home" className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3.5">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-sm font-bold text-white shadow-sm">
            RI
          </span>
          <span className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
            Raje Institute
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#admissions"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Apply Now
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-800 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 md:hidden"
        >
          <span className="text-xl leading-none">{menuOpen ? "×" : "≡"}</span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-slate-900/35 transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed right-0 top-[4.95rem] z-50 h-[calc(100dvh-4.95rem)] w-[88%] max-w-sm border-l border-slate-200 bg-white px-5 py-5 shadow-2xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#admissions"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Apply Now
          </a>
          <p className="mt-3 text-xs text-slate-500">Admissions support available Monday to Saturday.</p>
        </nav>
      </div>
    </header>
  );
}
