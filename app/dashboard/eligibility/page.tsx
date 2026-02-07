"use client";

import { useState } from "react";

export default function EligibilityPage() {

  const [income, setIncome] = useState(350000);
  const [emi, setEmi] = useState(45000);
  const [amount, setAmount] = useState(15000000);


  const dti = Math.round((emi / income) * 100);


  return (
    <div className="space-y-10">


      {/* ================= HEADER ================= */}
      <div>

        <h1 className="text-xl font-serif text-navy">
          Loan Eligibility Assessment
        </h1>

        <p className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">
          Institutional Credit Evaluation System
        </p>

      </div>


      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


        {/* ================= INPUT PANEL ================= */}
        <div className="lg:col-span-2 space-y-8">


          <div className="bg-white border border-slate-200 rounded shadow-sm p-8">


            <div className="flex items-center gap-2 mb-8 border-b pb-4">

              <span className="material-symbols-outlined text-emerald-corporate">
                query_stats
              </span>

              <h3 className="text-sm font-bold uppercase tracking-widest">
                Financial Profile
              </h3>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


              {/* Income */}
              <InputField
                label="Net Monthly Income"
                value={income}
                onChange={setIncome}
              />


              {/* EMI */}
              <InputField
                label="Existing EMIs"
                value={emi}
                onChange={setEmi}
              />


              {/* Employment */}
              <SelectField
                label="Employment Type"
                options={[
                  "Salaried (MNC)",
                  "Self-Employed",
                  "Business Owner",
                  "Freelancer",
                ]}
              />


              {/* Experience */}
              <SelectField
                label="Work Experience"
                options={[
                  "Under 2 Years",
                  "2 - 5 Years",
                  "5 - 10 Years",
                  "10+ Years",
                ]}
              />

            </div>


            {/* Loan Slider */}
            <div className="mt-10 pt-8 border-t">

              <div className="flex justify-between mb-3">

                <span className="text-[10px] uppercase tracking-widest text-slate-400">
                  Desired Loan Amount
                </span>

                <span className="font-bold text-navy">
                  ₹{amount.toLocaleString()}
                </span>

              </div>


              <input
                type="range"
                min={500000}
                max={100000000}
                step={100000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-emerald-corporate"
              />


              <div className="flex justify-between mt-2 text-[9px] text-slate-300 font-bold uppercase">

                <span>₹5L</span>
                <span>₹10Cr</span>

              </div>

            </div>

          </div>



          {/* ================= METRICS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


            {/* DTI */}
            <MetricCard
              title="Debt to Income Ratio"
              value={`${dti}%`}
              grade="AA+"
            />


            {/* Rate */}
            <MetricCard
              title="Interest Benchmark"
              value="8.45%"
              grade="Based on CIBIL 812"
            />

          </div>

        </div>



        {/* ================= RESULT PANEL ================= */}
        <div className="space-y-8">


          {/* Borrowing */}
          <div className="bg-white border border-slate-200 rounded shadow-sm p-8 text-center">


            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Borrowing Power
            </h3>


            <div className="text-5xl font-serif text-navy mb-3">
              ₹2.4Cr
            </div>


            <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-6">
              Estimated Limit
            </p>


            {/* Meter */}
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">

              <div
                className="h-full bg-emerald-corporate"
                style={{ width: "75%" }}
              />

            </div>


            <p className="text-[10px] mt-3 text-emerald-corporate font-bold uppercase">
              Low Risk Profile
            </p>

          </div>



          {/* CTA */}
          <div className="bg-navy text-white rounded p-8 text-center space-y-4">


            <h4 className="text-sm font-bold uppercase tracking-widest">
              Ready to Proceed?
            </h4>


            <p className="text-xs text-slate-300">
              Final approval after document verification.
            </p>


            <button className="w-full bg-emerald-corporate py-3 text-[10px] uppercase tracking-widest font-bold hover:opacity-90">
              Finalize Assessment
            </button>

          </div>

        </div>

      </div>



      {/* ================= OFFERS ================= */}
      <section className="space-y-6">


        <div className="flex justify-between items-center">

          <h3 className="text-sm font-bold uppercase tracking-widest">
            Pre-Approved Offers
          </h3>


          <span className="text-[10px] text-emerald-corporate uppercase font-bold flex items-center gap-1">
            <span className="w-2 h-2 bg-emerald-corporate rounded-full animate-pulse" />
            Live
          </span>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


          <OfferCard
            icon="business_center"
            title="Corporate Expansion"
            amount="₹1.2Cr"
            rate="8.25%"
            tenure="84 Months"
            best
          />


          <OfferCard
            icon="real_estate_agent"
            title="Property Top-Up"
            amount="₹50L"
            rate="7.9%"
            tenure="120 Months"
          />


          <OfferCard
            icon="account_balance_wallet"
            title="Credit Line"
            amount="₹25L"
            rate="10.5%"
            tenure="Flexible"
          />

        </div>

      </section>

    </div>
  );
}



/* ================= COMPONENTS ================= */


function InputField({ label, value, onChange }: any) {
  return (
    <div>

      <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-2">
        {label}
      </label>


      <div className="relative">

        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          ₹
        </span>


        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full pl-7 py-3 border border-slate-200 rounded bg-slate-50 text-sm focus:ring-1 focus:ring-emerald-corporate outline-none"
        />

      </div>

    </div>
  );
}



function SelectField({ label, options }: any) {
  return (
    <div>

      <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-2">
        {label}
      </label>


      <select className="w-full bg-slate-50 border border-slate-200 rounded py-3 px-3 text-sm">

        {options.map((o: string) => (
          <option key={o}>{o}</option>
        ))}

      </select>

    </div>
  );
}



function MetricCard({ title, value, grade }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded shadow-sm p-6">


      <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-3">
        {title}
      </p>


      <h3 className="text-3xl font-serif text-emerald-corporate mb-1">
        {value}
      </h3>


      <p className="text-[10px] text-slate-500 uppercase font-bold">
        {grade}
      </p>

    </div>
  );
}



function OfferCard({
  icon,
  title,
  amount,
  rate,
  tenure,
  best,
}: any) {
  return (
    <div
      className={`bg-white border rounded p-6 hover:shadow-md transition relative
      ${best ? "border-emerald-corporate" : "border-slate-200"}`}
    >


      {best && (
        <span className="absolute top-0 right-0 bg-emerald-corporate text-white text-[9px] px-3 py-1 uppercase font-bold">
          Best Value
        </span>
      )}


      <div className="flex items-center gap-3 mb-5">

        <div className="w-10 h-10 bg-slate-50 border flex items-center justify-center">

          <span className="material-symbols-outlined text-navy">
            {icon}
          </span>

        </div>


        <div>

          <p className="text-xs font-bold text-navy">
            {title}
          </p>

          <p className="text-[10px] text-slate-400">
            Up to {amount}
          </p>

        </div>

      </div>


      <div className="grid grid-cols-2 gap-4 mb-6">

        <div>
          <p className="text-[9px] uppercase text-slate-400">Rate</p>
          <p className="font-bold">{rate}</p>
        </div>

        <div>
          <p className="text-[9px] uppercase text-slate-400">Tenure</p>
          <p className="font-bold">{tenure}</p>
        </div>

      </div>


      <button className="w-full bg-emerald-corporate text-white py-2.5 text-[10px] uppercase tracking-widest font-bold hover:opacity-90">
        Apply Now
      </button>

    </div>
  );
}
