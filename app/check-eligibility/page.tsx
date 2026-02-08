"use client";

import { useState } from "react";
import Link from "next/link";

export default function EligibilityPage() {
  const [income, setIncome] = useState(250000);
  const [emi, setEmi] = useState(45000);
  const [purpose, setPurpose] = useState("Corporate Working Capital");

  const creditLimit = Math.max((income - emi) * 40, 0);

  return (
    <div className="space-y-12">



      <div>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-navy"
        >
          <span className="material-symbols-outlined text-sm">
            arrow_back
          </span>
          Back to Dashboard
        </Link>


        <h1 className="text-3xl font-serif text-navy mt-6">
          Institutional Eligibility Assessment
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          Evaluate your borrowing capacity through secure internal analysis
        </p>

      </div>





      <div className="bg-white border border-slate-200 shadow-xl flex flex-col lg:flex-row overflow-hidden">


        <div className="flex-1 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">


          <div className="space-y-12">


            <div>

              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                01. Select Loan Purpose
              </label>

              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full border border-slate-200 focus:border-navy focus:ring-0 text-sm py-3 font-medium"
              >
                <option>Corporate Working Capital</option>
                <option>Commercial Asset Financing</option>
                <option>High-Net-Worth Personal Credit</option>
                <option>Infrastructure Development Fund</option>
              </select>

            </div>




            <div>

              <div className="flex justify-between mb-4">

                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  02. Net Monthly Income
                </label>

                <span className="text-lg font-bold text-navy">
                  ₹ {income.toLocaleString()}
                </span>

              </div>


              <input
                type="range"
                min={50000}
                max={2000000}
                step={10000}
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full h-1 bg-slate-200 rounded-full appearance-none accent-navy cursor-pointer"
              />


              <div className="flex justify-between mt-2 text-[9px] font-bold text-slate-300">
                <span>₹50K</span>
                <span>₹20L+</span>
              </div>

            </div>




            <div>

              <div className="flex justify-between mb-4">

                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  03. Current Monthly EMI
                </label>

                <span className="text-lg font-bold text-navy">
                  ₹ {emi.toLocaleString()}
                </span>

              </div>


              <input
                type="range"
                min={0}
                max={500000}
                step={5000}
                value={emi}
                onChange={(e) => setEmi(Number(e.target.value))}
                className="w-full h-1 bg-slate-200 rounded-full appearance-none accent-navy cursor-pointer"
              />


              <div className="flex justify-between mt-2 text-[9px] font-bold text-slate-300">
                <span>₹0</span>
                <span>₹5L+</span>
              </div>

            </div>


          </div>

        </div>






        <div className="w-full lg:w-96 bg-off-white p-8 lg:p-12 flex flex-col justify-between">


          <div>

            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 text-center">
              Eligibility Summary
            </h3>


            <div className="text-center mb-10">

              <p className="text-[10px] font-bold text-emerald-corporate uppercase tracking-widest mb-1">
                Estimated Credit Limit
              </p>

              <p className="text-4xl font-serif text-navy">
                ₹ {creditLimit.toLocaleString()}
              </p>

            </div>




            <div className="space-y-4">


              <div className="p-4 bg-white border flex justify-between">

                <span className="text-[10px] font-bold uppercase text-slate-500">
                  Credit Rating
                </span>

                <span className="text-xs font-bold text-emerald-corporate">
                  780 - 820
                </span>

              </div>


              <div className="p-4 bg-white border flex justify-between">

                <span className="text-[10px] font-bold uppercase text-slate-500">
                  Indicative Rate
                </span>

                <span className="text-xs font-bold text-navy">
                  9.25% p.a.
                </span>

              </div>


              <div className="p-4 bg-white border flex justify-between">

                <span className="text-[10px] font-bold uppercase text-slate-500">
                  Max Tenure
                </span>

                <span className="text-xs font-bold text-navy">
                  120 Months
                </span>

              </div>


            </div>


          </div>




          <div className="mt-10">

            <button className="w-full bg-navy hover:bg-navy-light text-white py-4 font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-lg mb-4">
              Proceed to Application
            </button>


            <p className="text-[9px] text-slate-400 text-center leading-relaxed">
              Calculations are indicative and subject to internal review
            </p>

          </div>


        </div>

      </div>






      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10 border-t border-slate-200">



        <div>

          <h3 className="text-lg font-bold text-navy mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-emerald-corporate" />
            Onboarding Protocol
          </h3>


          <div className="space-y-6">


            {[
              {
                step: "1",
                title: "Digital KYC Verification",
                desc: "Aadhaar and PAN-linked institutional validation",
              },
              {
                step: "2",
                title: "Financial Audit",
                desc: "Automated bank statement analysis",
              },
              {
                step: "3",
                title: "Disbursement Approval",
                desc: "RTGS-based secure transfer",
              },
            ].map((item, i) => (

              <div key={i} className="flex gap-6">


                <div className="w-10 h-10 bg-navy text-white flex items-center justify-center font-serif italic text-lg">
                  {item.step}
                </div>


                <div>

                  <p className="text-xs font-bold uppercase tracking-widest text-navy mb-1">
                    {item.title}
                  </p>

                  <p className="text-sm text-slate-500 font-light">
                    {item.desc}
                  </p>

                </div>


              </div>

            ))}


          </div>

        </div>






        <div>

          <h3 className="text-lg font-bold text-navy mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-emerald-corporate" />
            Required Documentation
          </h3>


          <div className="bg-white border border-slate-200 p-8">


            <ul className="space-y-4">


              {[
                "6 Months Bank Statements",
                "Income Tax Returns (2 Years)",
                "PAN & GST Certificate",
                "Business Incorporation Proof",
              ].map((doc, i) => (

                <li
                  key={i}
                  className="flex items-center gap-4 py-3 border-b last:border-b-0"
                >

                  <span className="material-symbols-outlined text-emerald-corporate">
                    description
                  </span>

                  <span className="text-xs font-bold uppercase tracking-wider text-navy">
                    {doc}
                  </span>

                </li>

              ))}


            </ul>


          </div>

        </div>



      </div>




      <div className="pt-16 border-t border-slate-200 text-center">

        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
          Have institutional queries?
        </p>

        <Link
          href="/dashboard/support"
          className="text-navy font-bold flex items-center justify-center gap-2 hover:text-emerald-corporate transition-colors"
        >
          Visit Support Center
          <span className="material-symbols-outlined">
            chevron_right
          </span>
        </Link>

      </div>



    </div>
  );
}
