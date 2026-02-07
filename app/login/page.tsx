"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT PANEL */}
      <section
        className="hidden lg:flex flex-col justify-between p-16 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
        }}
      >
        <div>

          <div className="flex items-center gap-3 mb-12">
            <div className="bg-white p-2 rounded">
              <span className="material-symbols-outlined text-navy text-2xl">
                account_balance
              </span>
            </div>

            <div>
              <p className="font-bold text-lg">SECUREFUNDS</p>
              <p className="text-xs tracking-widest text-emerald-400 uppercase">
                RBI Authorized Partner
              </p>
            </div>
          </div>

          <h1 className="text-4xl font-serif leading-tight mb-6">
            Securing the Future of
            <br />
            Institutional Credit
          </h1>

          <p className="text-white/80 max-w-md leading-relaxed">
            Access your corporate dashboard to manage credit facilities,
            settlements, and institutional portfolios.
          </p>

        </div>

        <p className="text-xs text-white/60">
          © 2026 SecureFundsFinance India Pvt Ltd
        </p>
      </section>


      {/* RIGHT PANEL */}
      <section className="flex items-center justify-center px-6">

        <div className="w-full max-w-md">

          {/* HEADER */}
          <div className="mb-10 text-center">

            <div className="inline-flex items-center gap-2 border px-4 py-2 rounded mb-6 bg-off-white">
              <span className="material-symbols-outlined text-emerald-corporate">
                verified
              </span>

              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                RBI Authorized Partner Portal
              </span>
            </div>

            <h2 className="text-3xl font-serif text-navy mb-3">
              Secure Login
            </h2>

            <p className="text-slate-500 text-sm">
              Enter your authorized credentials
            </p>

          </div>


          {/* GOOGLE LOGIN */}
          <button
            onClick={() => signIn("google")}
            className="w-full border border-slate-200 py-3 mb-6 font-semibold hover:bg-off-white flex items-center justify-center gap-3 transition"
          >
            <img src="/google.svg" className="w-5 h-5" />
            Continue with Google
          </button>


          {/* DIVIDER */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-slate-200 flex-1"></div>
            <span className="text-xs text-slate-400 font-bold uppercase">
              or
            </span>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>


          {/* FORM */}
          <form className="space-y-6">

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-600">
                Official Email / Mobile
              </label>

              <input
                type="text"
                placeholder="corporate@securefunds.in"
                className="w-full border border-slate-200 px-4 py-3 focus:outline-none focus:border-emerald-corporate"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">

                <label className="text-xs font-bold uppercase tracking-widest text-slate-600">
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-bold text-emerald-corporate hover:underline"
                >
                  Forgot Password?
                </Link>

              </div>

              <input
                type="password"
                className="w-full border border-slate-200 px-4 py-3 focus:outline-none focus:border-emerald-corporate"
              />
            </div>


            <div className="flex items-center gap-3 text-sm text-slate-500">
              <input type="checkbox" />
              Remember this device for 30 days
            </div>


            <button
              type="submit"
              className="w-full bg-navy hover:bg-navy-light text-white py-4 font-bold uppercase tracking-widest text-sm transition-all"
            >
              Secure Login
            </button>

          </form>


          {/* FOOTER */}
          <div className="mt-10 text-center text-sm text-slate-500">

            New institutional client?{" "}
            <Link
              href="/register"
              className="font-bold text-navy hover:underline"
            >
              Register Account
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
