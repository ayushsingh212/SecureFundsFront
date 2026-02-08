"use client";

import { useState } from "react";

export default function EnquirySection() {
  const [consent, setConsent] = useState(false);

  return (
    <section
      id="enquiry"
      className="py-24 bg-off-white border-t border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-navy mb-4">
            Indicative Loan Eligibility Enquiry
          </h2>

          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Share your basic details to receive general loan-related guidance.
          </p>
        </div>

        <div className="bg-white border border-slate-200 shadow-lg p-10">

          <form className="space-y-8">

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                Type of Loan
              </label>

              <select className="w-full border-slate-200 py-3 text-sm">
                <option>Personal Loan</option>
                <option>Home Loan</option>
                <option>Business Loan</option>
                <option>Loan Against Property</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  className="w-full border-slate-200 py-3 text-sm"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  className="w-full border-slate-200 py-3 text-sm"
                  placeholder="10-digit Mobile"
                />
              </div>

            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                City
              </label>

              <input
                type="text"
                className="w-full border-slate-200 py-3 text-sm"
                placeholder="Your City"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                Income Range
              </label>

              <select className="w-full border-slate-200 py-3 text-sm">
                <option>Below ₹20,000</option>
                <option>₹20,000 – ₹40,000</option>
                <option>₹40,000 – ₹75,000</option>
                <option>Above ₹75,000</option>
              </select>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 text-xs text-slate-500">
              We do not ask for Aadhaar, PAN, OTP, or banking passwords.
            </div>

            <div className="flex items-start gap-3">

              <input
                type="checkbox"
                checked={consent}
                onChange={() => setConsent(!consent)}
                className="mt-1"
              />

              <p className="text-xs text-slate-500 leading-relaxed">
                I agree to be contacted regarding my enquiry. I understand that
                eligibility results are indicative only and subject to lender
                approval.
              </p>

            </div>

            <button
              disabled={!consent}
              className="w-full bg-navy hover:bg-navy-light text-white py-4 text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50"
            >
              Submit Enquiry
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
