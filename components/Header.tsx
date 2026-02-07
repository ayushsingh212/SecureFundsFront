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
            <span className="material-symbols-outlined text-white text-xl">
              account_balance
            </span>
          </div>

          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-extrabold text-navy tracking-tighter leading-none">
              SECURE FUNDS FINANCE
            </h1>

            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-emerald-corporate">
              TRUSTED BY CUSTOMERS
            </span>
          </div>

        </Link>




        <nav className="hidden lg:flex items-center gap-10">

          <Link href="#corporate" className="nav-link">
            Corporate Banking
          </Link>

          <Link href="#personal" className="nav-link">
            Personal Credit
          </Link>

          <Link href="#wealth" className="nav-link">
            Wealth Management
          </Link>

          <Link href="#compliance" className="nav-link">
            Compliance
          </Link>

        </nav>




        <div className="hidden lg:flex items-center gap-6">

          <Link href="/login">

            <button className="text-sm font-semibold text-navy hover:text-emerald-corporate transition-colors">
              Client Login
            </button>

          </Link>


          <button className="bg-navy hover:bg-navy-light text-white text-xs font-bold uppercase tracking-widest px-8 py-3 transition-all shadow-sm">
            Inquire Now
          </button>

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
              href="#corporate"
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold text-navy"
            >
              Corporate Banking
            </Link>

            <Link
              href="#personal"
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold text-navy"
            >
              Personal Credit
            </Link>

            <Link
              href="#wealth"
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold text-navy"
            >
              Wealth Management
            </Link>

            <Link
              href="#compliance"
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold text-navy"
            >
              Compliance
            </Link>



            <div className="pt-4 border-t border-slate-100 space-y-4">


              <Link href="/login" onClick={() => setOpen(false)}>

                <button className="w-full border border-navy text-navy py-3 text-xs font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all">
                  Client Login
                </button>

              </Link>


              <button className="w-full bg-navy text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-navy-light transition-all">
                Inquire Now
              </button>

            </div>


          </div>

        </div>

      )}

    </header>
  );
}
