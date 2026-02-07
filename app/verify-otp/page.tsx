"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function VerifyOtpPage() {
  const router = useRouter();
  const inputs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value && inputs.current[index + 1]) {
      inputs.current[index + 1].focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/reset-password");
  };

  return (
    <main className="min-h-screen flex flex-col bg-off-white">

      {/* HEADER */}
      <header className="bg-white border-b border-slate-100">

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

          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">
              lock
            </span>
            Encrypted
          </div>

        </div>

      </header>


      {/* MAIN */}
      <div className="flex-1 flex items-center justify-center p-6">

        <div className="w-full max-w-lg bg-white p-12 border shadow-2xl relative">

          <div className="absolute top-0 left-0 w-full h-1.5 bg-navy" />


          <div className="text-center mb-10">

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-corporate/10 mb-6">
              <span className="material-symbols-outlined text-emerald-corporate text-3xl">
                shield_person
              </span>
            </div>

            <h2 className="text-3xl font-serif text-navy mb-3">
              Security Verification
            </h2>

            <p className="text-sm text-slate-500 max-w-xs mx-auto">
              Enter the 6-digit code sent to your registered device.
            </p>

          </div>


          <form onSubmit={handleSubmit} className="space-y-10">

            <div className="flex justify-between gap-3">

              {[0, 1, 2, 3, 4, 5].map((i) => (
                <input
                  key={i}
                  maxLength={1}
                  ref={(el) => {
                    if (el) inputs.current[i] = el;
                  }}
                  onChange={(e) =>
                    handleChange(i, e.target.value)
                  }
                  className="w-12 h-16 text-center text-2xl font-bold border border-slate-200 focus:border-emerald-corporate focus:ring-1 focus:ring-emerald-corporate"
                />
              ))}

            </div>


            <button
              type="submit"
              className="w-full bg-emerald-corporate hover:bg-emerald-700 text-white font-bold uppercase tracking-widest py-5 shadow-lg flex justify-center gap-3"
            >
              Verify & Proceed
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}
