"use client";

import { useState } from "react";

const loans = [
  {
    title: "Business Expansion Loan",
    desc: "Scale operations and infrastructure",
    rate: "8.25% p.a.",
    limit: "Up to ₹2 Cr",
    icon: "business_center",
  },
  {
    title: "Home Loan",
    desc: "Residential & commercial property finance",
    rate: "7.90% p.a.",
    limit: "Up to ₹5 Cr",
    icon: "home",
  },
  {
    title: "Personal Loan",
    desc: "Instant unsecured funding",
    rate: "10.5% p.a.",
    limit: "Up to ₹25 Lakh",
    icon: "account_balance_wallet",
  },
  {
    title: "Vehicle Loan",
    desc: "Commercial & private vehicles",
    rate: "9.10% p.a.",
    limit: "Up to ₹1 Cr",
    icon: "directions_car",
  },
  {
    title: "Working Capital Loan",
    desc: "Cashflow & inventory funding",
    rate: "8.75% p.a.",
    limit: "Up to ₹3 Cr",
    icon: "trending_up",
  },
  {
    title: "Education Loan",
    desc: "Domestic & overseas studies",
    rate: "7.40% p.a.",
    limit: "Up to ₹80 Lakh",
    icon: "school",
  },
];

export default function LoanExplorer() {
  const [query, setQuery] = useState("");

  const filtered = loans.filter((loan) =>
    loan.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="bg-off-white py-24">

      <div className="max-w-7xl mx-auto px-6 space-y-12">


        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[10px] uppercase tracking-widest text-emerald-corporate font-bold mb-3">
            Loan Solutions
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
            Find the Right Loan for Your Needs
          </h2>

          <p className="text-slate-500 text-sm">
            Explore RBI-compliant institutional financing products
          </p>

        </div>




        <div className="max-w-xl mx-auto">

          <div className="relative">

            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search business, home, vehicle, personal..."
              className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded shadow-sm focus:ring-1 focus:ring-emerald-corporate outline-none"
            />

          </div>

        </div>





        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


          {filtered.map((loan, i) => (

            <div
              key={i}
              className="bg-white border border-slate-200 rounded shadow-sm p-8 hover:shadow-md transition-all group"
            >


              <div className="flex items-center gap-4 mb-6">

                <div className="w-12 h-12 bg-navy text-white rounded flex items-center justify-center">

                  <span className="material-symbols-outlined text-xl">
                    {loan.icon}
                  </span>

                </div>


                <h3 className="text-lg font-serif text-navy">
                  {loan.title}
                </h3>

              </div>




              <p className="text-sm text-slate-500 mb-6">
                {loan.desc}
              </p>




              <div className="grid grid-cols-2 gap-4 mb-6">


                <div>

                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                    Interest Rate
                  </p>

                  <p className="text-sm font-bold text-navy">
                    {loan.rate}
                  </p>

                </div>


                <div>

                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                    Maximum Limit
                  </p>

                  <p className="text-sm font-bold text-navy">
                    {loan.limit}
                  </p>

                </div>

              </div>




              <button className="w-full bg-navy text-white py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-navy-light transition-all">
                Check Eligibility
              </button>

            </div>

          ))}

        </div>




        {filtered.length === 0 && (

          <div className="text-center text-slate-400 text-sm">
            No loan products found
          </div>

        )}

      </div>

    </section>
  );
}
