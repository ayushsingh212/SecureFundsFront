"use client";

export default function DashboardPage() {
  return (
    <div className="space-y-12">

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Balance */}
        <div className="dashboard-card border-l-4 border-l-navy">

          <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-4">
            Current Loan Balance
          </p>

          <h3 className="text-3xl font-serif text-navy mb-2">
            ₹1,42,50,000
          </h3>

          <div className="flex items-center gap-2 text-emerald-corporate text-[10px] font-bold">
            <span className="material-symbols-outlined text-sm">
              trending_down
            </span>

            Scheduled decrease by 12% next month
          </div>

        </div>


        {/* EMI */}
        <div className="dashboard-card border-l-4 border-l-emerald-corporate">

          <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-4">
            Next EMI Due
          </p>

          <h3 className="text-3xl font-serif text-navy mb-2">
            05 Oct 2024
          </h3>

          <p className="text-[10px] font-bold text-slate-600 uppercase">
            Amount: ₹2,45,000
          </p>

        </div>


        {/* Credit */}
        <div className="dashboard-card">

          <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">
            Credit Score
          </p>

          <div className="flex items-end justify-between">

            <div>
              <h3 className="text-4xl font-serif text-emerald-corporate">
                812
              </h3>

              <p className="text-[10px] uppercase tracking-widest text-slate-500">
                Excellent Status
              </p>
            </div>


            {/* Progress Ring */}
            <div className="w-16 h-16 relative">

              <svg className="w-full h-full transform -rotate-90">

                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  strokeWidth="6"
                  fill="transparent"
                  className="text-slate-100"
                  stroke="currentColor"
                />

                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray="175"
                  strokeDashoffset="35"
                  className="text-emerald-corporate"
                  stroke="currentColor"
                />

              </svg>

            </div>

          </div>

        </div>

      </div>


      {/* ================= APPLICATION STATUS ================= */}
      <div className="dashboard-card">

        <div className="flex justify-between mb-10">

          <h3 className="text-sm font-bold uppercase tracking-widest">
            Active Application: Business Expansion Loan
          </h3>

          <span className="bg-navy text-white text-[9px] px-3 py-1 font-bold uppercase">
            Ref: SF-99231
          </span>

        </div>


        {/* Stepper */}
        <div className="relative flex justify-between max-w-5xl mx-auto px-10">

          <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-100" />
          <div className="absolute top-5 left-0 w-2/3 h-0.5 bg-emerald-corporate" />


          {["Application", "Vetting", "Approval", "Disbursal"].map(
            (step, i) => (
              <div
                key={step}
                className="flex flex-col items-center gap-3 z-10"
              >

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center
                  ${
                    i < 3
                      ? "bg-emerald-corporate text-white"
                      : "bg-white border text-slate-300"
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">
                    {i < 2 ? "check" : i === 2 ? "hourglass_empty" : "wallet"}
                  </span>
                </div>

                <p
                  className={`text-[10px] uppercase tracking-widest font-bold
                  ${i === 2 ? "text-emerald-corporate" : ""}`}
                >
                  {step}
                </p>

              </div>
            )
          )}

        </div>

      </div>


      {/* ================= ELIGIBILITY + DOCUMENTS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


        {/* Eligibility */}
        <div className="dashboard-card flex flex-col">

          <h3 className="text-xl font-serif mb-2">
            Check New Loan Eligibility
          </h3>

          <p className="text-sm text-slate-500 mb-8">
            Adjust parameters to see your credit capacity
          </p>


          <div>

            <div className="flex justify-between mb-3">

              <label className="text-[11px] uppercase tracking-widest text-slate-400">
                Desired Loan Amount
              </label>

              <span className="font-bold text-navy">
                ₹75,00,000
              </span>

            </div>


            <input
              type="range"
              min={500000}
              max={50000000}
              step={100000}
              className="w-full accent-emerald-corporate"
            />


            <div className="flex justify-between mt-2 text-[9px] text-slate-300 uppercase">
              <span>₹5L</span>
              <span>₹5Cr</span>
            </div>

          </div>


          <button className="mt-auto bg-navy text-white py-4 mt-8 uppercase tracking-widest text-xs font-bold hover:bg-navy-light">
            Begin Assessment
          </button>

        </div>


        {/* Documents */}
        <div className="dashboard-card">

          <div className="flex justify-between mb-6">

            <h3 className="text-sm font-bold uppercase tracking-widest">
              Document Center
            </h3>

            <button className="text-[10px] text-emerald-corporate font-bold uppercase hover:underline">
              View All
            </button>

          </div>


          {/* File */}
          <DocItem
            name="FY23_Tax_Returns.pdf"
            time="Uploaded 2 days ago"
            status="Verified"
          />

          <DocItem
            name="KYC_Entity_Proof.jpg"
            time="Uploaded 4 hours ago"
            status="Pending"
          />


          {/* Upload */}
          <div className="mt-8 border-2 border-dashed border-slate-200 p-8 text-center rounded hover:border-emerald-corporate cursor-pointer">

            <span className="material-symbols-outlined text-3xl text-slate-300 mb-2 block">
              cloud_upload
            </span>

            <p className="text-xs text-slate-500">
              Drag & drop or{" "}
              <span className="text-emerald-corporate font-bold">
                browse
              </span>
            </p>

            <p className="text-[9px] text-slate-300 mt-1 uppercase">
              Max 25MB
            </p>

          </div>

        </div>

      </div>


      {/* ================= QUICK ACTIONS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <ActionBtn
          icon="calendar_month"
          text="Repayment Schedule"
        />

        <ActionBtn
          icon="add_circle"
          text="Apply for Top-up"
        />

        <ActionBtn
          icon="support_agent"
          text="Request Support"
        />

      </div>

    </div>
  );
}


/* ================= SUB COMPONENTS ================= */


function DocItem({
  name,
  time,
  status,
}: {
  name: string;
  time: string;
  status: string;
}) {
  return (
    <div className="flex justify-between items-center p-3 border border-slate-100 rounded mb-3 hover:bg-off-white">

      <div className="flex items-center gap-4">

        <span className="material-symbols-outlined text-slate-400">
          description
        </span>

        <div>
          <p className="text-xs font-bold text-navy">
            {name}
          </p>

          <p className="text-[9px] text-slate-400">
            {time}
          </p>
        </div>

      </div>


      <span
        className={`text-[8px] px-2 py-1 font-bold uppercase rounded
        ${
          status === "Verified"
            ? "bg-emerald-corporate/10 text-emerald-corporate"
            : "bg-slate-100 text-slate-400"
        }`}
      >
        {status}
      </span>

    </div>
  );
}



function ActionBtn({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <button className="flex items-center justify-center gap-3 bg-white border border-slate-200 py-6 hover:bg-navy hover:text-white transition-all group">

      <span className="material-symbols-outlined text-emerald-corporate group-hover:text-white">
        {icon}
      </span>

      <span className="text-[10px] font-bold uppercase tracking-widest">
        {text}
      </span>

    </button>
  );
}
