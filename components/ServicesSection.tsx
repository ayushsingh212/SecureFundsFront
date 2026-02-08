"use client";

import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: "person",
      title: "Personal Loan",
      description:
        "General information and referral assistance for personal loan enquiries.",
    },
    {
      icon: "home",
      title: "Home Loan",
      description:
        "Information support and referral for home loan requirements.",
    },
    {
      icon: "business",
      title: "Business Loan",
      description:
        "Guidance and enquiry referral for business financing needs.",
    },
    {
      icon: "apartment",
      title: "Loan Against Property",
      description:
        "Information and referral assistance for property-backed loans.",
    },
  ];

  return (
    <section
      id="services"
      className="py-28 bg-off-white border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-8">


        <div className="text-center mb-20">

          <h3 className="text-3xl font-serif text-navy mb-4">
            Types of Loan Information We Assist With
          </h3>

          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Below are common loan categories. We also assist with other
            loan-related enquiries.
          </p>

        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">


          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 p-8 text-center hover:shadow-md transition-all"
            >


              <div className="w-14 h-14 mx-auto mb-6 bg-navy/5 rounded-full flex items-center justify-center">

                <span className="material-symbols-outlined text-emerald-corporate text-2xl">
                  {service.icon}
                </span>

              </div>


              <h4 className="text-lg font-serif text-navy mb-3">
                {service.title}
              </h4>


              <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
                {service.description}
              </p>


              <Link href="/check-eligibility">

                <button className="w-full py-3 border border-slate-200 text-[10px] font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all">
                  Submit Enquiry
                </button>

              </Link>


            </div>
          ))}



          <div className="bg-navy text-white p-8 text-center flex flex-col justify-between">


            <div>

              <div className="w-14 h-14 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">

                <span className="material-symbols-outlined text-2xl">
                  more_horiz
                </span>

              </div>


              <h4 className="text-lg font-serif mb-3">
                Other Loan Types
              </h4>


              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                We also assist with education, vehicle, MSME, startup,
                professional and other loan enquiries.
              </p>

            </div>


            <Link href="/check-eligibility">

              <button className="w-full py-3 border border-white/30 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all">
                Search & Enquire
              </button>

            </Link>


          </div>


        </div>



        <div className="mt-16 bg-slate-50 border border-slate-200 p-6 text-center">

          <p className="text-xs text-slate-500 leading-relaxed">

            We provide general loan-related information and referral assistance.
            We do not approve loans, guarantee sanctions, decide interest rates,
            or collect payments.

          </p>

        </div>


      </div>
    </section>
  );
}
