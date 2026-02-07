"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [identity, setIdentity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/verify-otp");
  };

  return (
    <main className="min-h-screen flex flex-col">

      {/* HEADER */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <div className="bg-navy p-2 rounded">
              <span className="material-symbols-outlined text-white text-2xl">
                account_balance
              </span>
            </div>

            <div>
              <h1 className="text-xl font-extrabold text-navy tracking-tighter">
                SECUREFUNDS
              </h1>

              <span className="text-[9px] uppercase tracking-widest font-bold text-emerald-corporate">
                RBI Authorized Partner
              </span>
            </div>
          </div>

          <Link
            href="/login"
            className="text-xs font-bold uppercase tracking-widest text-navy/60 hover:text-navy flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>
            Return to Login
          </Link>

        </div>
      </header>


      {/* MAIN */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div
          className="hidden lg:block relative bg-cover bg-center grayscale"
          style={{
            backgroundImage:
              "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBBv0wSn_w6Jj4aU4LF0UGdbRRV6OWt9IY8lEwVrAPbO_SZTjjwYRF8hGnUwnJWqHPz48p0ZQnDB4GOIjfGFBqpr_ij0Un6jmLOZWvWVyIeYQa6cupdwiYP3CsZHiU7bWVEHsKoOrMW63HeJmxRQHbSHl-gB5C6YjWfDW_I7Lz3P2jQkHw-WcSlmxnGpa9e5Bopg5-82U785q8nYyWowcU8ZfiUepd7zQRXmvgi2ztv6qWM1Z8DYu4_Oct0LB3BBcbsSPfn8hfMg_oU)",
          }}
        >
          <div className="absolute inset-0 bg-navy/30" />
        </div>


        {/* FORM */}
        <div className="flex items-center justify-center bg-off-white p-8">

          <div className="w-full max-w-md bg-white p-12 border shadow-xl">

            <div className="mb-10">

              <h2 className="text-2xl font-serif text-navy mb-3">
                Account Recovery
              </h2>

              <p className="text-sm text-slate-500 leading-relaxed">
                Enter your registered credentials to receive a secure
                verification code.
              </p>

            </div>


            <form onSubmit={handleSubmit} className="space-y-8">

              <div>
                <label className="form-label">
                  Registered Email / Mobile
                </label>

                <input
                  value={identity}
                  onChange={(e) => setIdentity(e.target.value)}
                  placeholder="director@firm.com"
                  className="form-input pl-12"
                />
              </div>


              <button
                type="submit"
                className="w-full bg-navy hover:bg-navy-light text-white font-bold py-5 text-xs uppercase tracking-widest shadow-lg flex items-center justify-center gap-3"
              >
                Request Verification Code
                <span className="material-symbols-outlined text-sm">
                  send
                </span>
              </button>

            </form>

          </div>

        </div>

      </div>

    </main>
  );
}
