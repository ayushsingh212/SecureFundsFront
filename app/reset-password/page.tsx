"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [current, setCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const score =
    (password.length >= 12 ? 30 : 0) +
    (/[A-Z]/.test(password) ? 20 : 0) +
    (/[a-z]/.test(password) ? 20 : 0) +
    (/[0-9]/.test(password) ? 15 : 0) +
    (/[^A-Za-z0-9]/.test(password) ? 15 : 0);

  const strength =
    score >= 80 ? "Strong" : score >= 50 ? "Medium" : "Weak";

  return (
    <main className="bg-off-white min-h-screen flex flex-col">

      {/* HEADER */}
      <header className="sticky top-0 bg-white border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-12 h-20 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <div className="bg-navy p-1.5 rounded-sm">
              <span className="material-symbols-outlined text-white text-xl">
                account_balance
              </span>
            </div>

            <div>
              <h1 className="text-lg font-extrabold text-navy tracking-tighter">
                SECUREFUNDS
              </h1>

              <span className="text-[8px] uppercase tracking-widest font-bold text-emerald-corporate">
                RBI Authorized Partner
              </span>
            </div>
          </div>


          <div className="flex items-center gap-8">

            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-navy">
              <span className="material-symbols-outlined text-lg">
                person
              </span>
              ID: 89231-A
            </div>

            <button className="bg-navy hover:bg-navy-light text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2.5">
              Sign Out
            </button>

          </div>

        </div>
      </header>


      {/* MAIN */}
      <main className="flex-1 py-24 flex justify-center">

        <div className="w-full max-w-xl px-8">

          {/* TITLE */}
          <div className="mb-12 text-center">

            <h2 className="text-3xl font-serif text-navy mb-4">
              Update Security Credentials
            </h2>

            <p className="text-slate-500 text-sm max-w-sm mx-auto">
              Maintain the integrity of your institutional account
              with regular security updates.
            </p>

          </div>


          {/* FORM CARD */}
          <div className="bg-white border border-slate-200 shadow-sm p-12">

            <form className="space-y-8">


              {/* CURRENT PASSWORD */}
              <div className="space-y-2">

                <label className="text-[10px] font-bold uppercase tracking-widest text-navy/60">
                  Current Password
                </label>

                <div className="relative">

                  <input
                    type={showCurrent ? "text" : "password"}
                    value={current}
                    onChange={(e) => setCurrent(e.target.value)}
                    placeholder="Enter current credentials"
                    className="form-input pr-10"
                  />

                  <span
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg cursor-pointer"
                  >
                    {showCurrent ? "visibility_off" : "visibility"}
                  </span>

                </div>

              </div>


              <div className="h-px bg-slate-100" />


              {/* NEW PASSWORD */}
              <div className="space-y-2">

                <label className="text-[10px] font-bold uppercase tracking-widest text-navy">
                  New Password
                </label>

                <div className="relative">

                  <input
                    type={showNew ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 12 characters"
                    className="form-input pr-10"
                  />

                  <span
                    onClick={() => setShowNew(!showNew)}
                    className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg cursor-pointer"
                  >
                    {showNew ? "visibility_off" : "visibility"}
                  </span>

                </div>


                {/* STRENGTH BAR */}
                <div className="pt-3">

                  <div className="flex justify-between mb-2">

                    <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-corporate">
                      Strength: {strength}
                    </span>

                    <span className="text-[9px] text-slate-400">
                      {score}/100
                    </span>

                  </div>

                  <div className="w-full h-1 bg-slate-100">
                    <div
                      className="h-full bg-emerald-corporate transition-all"
                      style={{ width: `${score}%` }}
                    />
                  </div>

                </div>

              </div>


              {/* CONFIRM */}
              <div className="space-y-2">

                <label className="text-[10px] font-bold uppercase tracking-widest text-navy">
                  Confirm New Password
                </label>

                <input
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Re-enter new credentials"
                  className="form-input"
                />

                {confirm && confirm !== password && (
                  <p className="text-xs text-red-500">
                    Passwords do not match
                  </p>
                )}

              </div>


              {/* SUBMIT */}
              <div className="pt-6">

                <button
                  disabled={
                    score < 80 || password !== confirm || !current
                  }
                  className={`w-full py-4 text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg ${
                    score >= 80 &&
                    password === confirm &&
                    current
                      ? "bg-navy hover:bg-navy-light text-white"
                      : "bg-slate-300 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  Update Password
                </button>

              </div>


              {/* INFO */}
              <div className="mt-8 flex gap-3 bg-off-white p-4">

                <span className="material-symbols-outlined text-emerald-corporate text-lg">
                  info
                </span>

                <p className="text-[10px] text-slate-500 italic leading-relaxed">
                  Passwords must contain uppercase, lowercase, numeric,
                  and symbolic characters. Updates require 2FA
                  verification.
                </p>

              </div>

            </form>

          </div>


          {/* FOOTER LINK */}
          <div className="mt-12 text-center">

            <Link
              href="/dashboard"
              className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-navy"
            >
              Return to Dashboard
            </Link>

          </div>

        </div>

      </main>


      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-12">

        <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="flex items-center gap-3">

            <div className="bg-navy/10 p-1 rounded-sm">
              <span className="material-symbols-outlined text-navy text-sm">
                security
              </span>
            </div>

            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
              Secure Protocol v4.22.0
            </span>

          </div>


          <div className="flex gap-10">

            <a className="text-[9px] font-bold uppercase tracking-widest text-slate-400 hover:text-navy">
              Privacy Policy
            </a>

            <a className="text-[9px] font-bold uppercase tracking-widest text-slate-400 hover:text-navy">
              System Status
            </a>

            <a className="text-[9px] font-bold uppercase tracking-widest text-slate-400 hover:text-navy">
              Security Disclosure
            </a>

          </div>


          <div className="text-[9px] text-slate-400 uppercase tracking-widest">
            © 2024 SecureFundsFinance India Pvt Ltd.
          </div>

        </div>

      </footer>

    </main>
  );
}
