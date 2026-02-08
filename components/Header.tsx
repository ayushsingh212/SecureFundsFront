"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">

          <div className="bg-navy p-2 rounded">
            <img
              src="/securefundsfinancelogo.png"
              width={28}
              height={28}
              alt="Logo"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-extrabold text-navy tracking-tighter leading-none">
              SECURE FUNDS FINANCE
            </h1>

            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-emerald-corporate">
              Loan Information & Referral
            </span>
          </div>

        </Link>

        <nav className="hidden lg:flex items-center gap-10">

          <Link href="#loans" className="nav-link">
            Loan Types
          </Link>

          <Link href="#services" className="nav-link">
            Services
          </Link>

          <Link href="#process" className="nav-link">
            How It Works
          </Link>

          <Link href="#enquiry" className="nav-link">
            Check Eligibility
          </Link>

          <Link href="#contact" className="nav-link">
            Contact
          </Link>

        </nav>

        <div className="hidden lg:flex items-center gap-6">

          <Link href="#enquiry">

            <button className="bg-navy hover:bg-navy-light text-white text-xs font-bold uppercase tracking-widest px-8 py-3 transition-all shadow-sm">
              Free Enquiry
            </button>

          </Link>

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex items-center justify-center w-10 h-10 border border-slate-200 rounded text-navy"
        >

          <span className="material-symbols-outlined text-xl">
            {open ? "close" : "menu"}
          </span>

        </button>

      </div>

      {open && (

        <div className="lg:hidden border-t border-slate-200 bg-white shadow-md">

          <div className="px-6 py-6 space-y-5">

            <Link
              href="#loans"
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold text-navy"
            >
              Loan Types
            </Link>

            <Link
              href="#services"
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold text-navy"
            >
              Services
            </Link>

            <Link
              href="#process"
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold text-navy"
            >
              How It Works
            </Link>

            <Link
              href="#enquiry"
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold text-navy"
            >
              Check Eligibility
            </Link>

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold text-navy"
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-slate-100">

              <Link href="#enquiry" onClick={() => setOpen(false)}>

                <button className="w-full bg-navy text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-navy-light transition-all">
                  Free Enquiry
                </button>

              </Link>

            </div>

          </div>

        </div>

      )}

    </header>
  );
}
