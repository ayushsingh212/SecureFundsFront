"use client";

export default function DocumentsPage() {
  return (
    <div className="space-y-12">

      {/* ================= HEADER ================= */}
      <div>

        <h1 className="text-xl font-serif text-navy">
          Secure Document Vault
        </h1>

        <p className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">
          RBI-Partnered Institutional Access
        </p>

      </div>


      {/* ================= CATEGORIES ================= */}
      <section>

        <h3 className="text-sm font-bold uppercase tracking-widest text-navy mb-6">
          Document Categories
        </h3>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <CategoryCard
            icon="fingerprint"
            title="Identity Proofs"
            desc="Aadhar, PAN, Passport"
            count="12 Files"
            status="Verified"
          />

          <CategoryCard
            icon="account_balance_wallet"
            title="Income Documents"
            desc="ITR, Payslips, Bank Statements"
            count="08 Files"
            status="Review"
          />

          <CategoryCard
            icon="article"
            title="Loan Agreements"
            desc="Sanction Letters, Deeds"
            count="04 Files"
            status="Verified"
          />

        </div>

      </section>


      {/* ================= UPLOAD + ACTIVITY ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">


        {/* Upload */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">

          <div className="flex justify-between items-center mb-8">

            <div>

              <h3 className="text-sm font-bold uppercase tracking-widest text-navy">
                Institutional Upload Zone
              </h3>

              <p className="text-xs text-slate-400 mt-1">
                Verified original documents
              </p>

            </div>


            <span className="material-symbols-outlined text-slate-300 text-3xl">
              verified
            </span>

          </div>


          {/* Upload Area */}
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-emerald-corporate transition-all cursor-pointer">

            <div className="w-16 h-16 bg-off-white rounded-full flex items-center justify-center mx-auto mb-4 border">

              <span className="material-symbols-outlined text-4xl text-emerald-corporate">
                upload_file
              </span>

            </div>


            <p className="text-base font-semibold text-navy">
              Click to browse or drag & drop
            </p>

            <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest">
              Max 50MB • PDF / JPG / PNG
            </p>

          </div>


          {/* Recent */}
          <div className="mt-12">

            <div className="flex justify-between mb-6">

              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                Recent Activity
              </h4>

              <button className="text-[10px] font-bold text-navy hover:text-emerald-corporate uppercase">
                View All Logs
              </button>

            </div>


            <ActivityItem
              name="FY23_GST_Returns.pdf"
              meta="Income Docs • 2.4MB • 4h ago"
              status="Review"
            />

            <ActivityItem
              name="Property_Registration.jpg"
              meta="Property Docs • 1.1MB • Yesterday"
              status="Verified"
            />

          </div>

        </div>


        {/* ================= ACTION PANEL ================= */}
        <div className="space-y-6">


          {/* Alerts */}
          <div className="bg-white border border-warning-amber/30 rounded-xl p-6">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-8 h-8 bg-warning-amber rounded flex items-center justify-center">

                <span className="material-symbols-outlined text-white">
                  priority_high
                </span>

              </div>


              <h3 className="text-sm font-bold uppercase tracking-widest">
                Action Required
              </h3>

            </div>


            <AlertCard />

          </div>


          {/* Security */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">

            <h4 className="text-[10px] uppercase tracking-widest text-slate-400 mb-4">
              Security Snapshot
            </h4>


            <SecurityItem text="Last Login: IP 103.22.XX.45 (Bangalore)" />
            <SecurityItem text="AES-256 Encryption Active" />

          </div>


          {/* Quick */}
          <div className="grid grid-cols-2 gap-4">

            <QuickBtn icon="print" text="Export All" />
            <QuickBtn icon="encrypted" text="Secure Link" />

          </div>

        </div>

      </div>

    </div>
  );
}


/* ================= COMPONENTS ================= */


function CategoryCard({
  icon,
  title,
  desc,
  count,
  status,
}: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-md transition">

      <div className="flex justify-between mb-6">

        <div className="p-3 bg-navy text-white rounded-lg">

          <span className="material-symbols-outlined text-2xl">
            {icon}
          </span>

        </div>


        <span
          className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase
          ${
            status === "Verified"
              ? "bg-emerald-corporate/10 text-emerald-corporate"
              : "bg-warning-amber/10 text-warning-amber"
          }`}
        >
          {status}
        </span>

      </div>


      <h3 className="text-xl font-serif text-navy mb-1">
        {title}
      </h3>

      <p className="text-xs text-slate-400 mb-6">
        {desc}
      </p>


      <div className="flex justify-between text-xs font-semibold">

        <span className="text-slate-500">
          {count}
        </span>

        <span className="text-emerald-corporate">
          Secure
        </span>

      </div>

    </div>
  );
}



function ActivityItem({
  name,
  meta,
  status,
}: any) {
  return (
    <div className="flex justify-between items-center py-4 border-b last:border-0">

      <div>

        <p className="text-sm font-semibold text-navy">
          {name}
        </p>

        <p className="text-[10px] text-slate-400">
          {meta}
        </p>

      </div>


      <span
        className={`text-[10px] px-2 py-1 font-bold uppercase rounded
        ${
          status === "Verified"
            ? "bg-emerald-corporate/10 text-emerald-corporate"
            : "bg-warning-amber/10 text-warning-amber"
        }`}
      >
        {status}
      </span>

    </div>
  );
}



function AlertCard() {
  return (
    <div className="p-4 border border-warning-amber/30 bg-warning-light rounded-xl">

      <p className="text-[10px] font-bold text-warning-amber uppercase mb-2">
        Document Rejected
      </p>

      <p className="text-sm font-bold text-navy">
        Company_PAN_Card.pdf
      </p>

      <p className="text-xs text-slate-600 mb-4">
        Signature mismatch. Please upload original.
      </p>


      <button className="w-full bg-navy text-white py-2.5 text-[10px] uppercase tracking-widest font-bold hover:bg-navy-light rounded">
        Re-upload
      </button>

    </div>
  );
}



function SecurityItem({ text }: any) {
  return (
    <div className="flex items-center gap-2 mb-2">

      <div className="w-1.5 h-1.5 bg-emerald-corporate rounded-full" />

      <p className="text-[10px] text-slate-500">
        {text}
      </p>

    </div>
  );
}



function QuickBtn({ icon, text }: any) {
  return (
    <button className="flex flex-col items-center justify-center gap-2 bg-white border border-slate-200 py-6 rounded-xl hover:bg-navy hover:text-white transition group">

      <span className="material-symbols-outlined text-emerald-corporate group-hover:text-white">
        {icon}
      </span>

      <span className="text-[9px] font-bold uppercase tracking-widest">
        {text}
      </span>

    </button>
  );
}
