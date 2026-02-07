"use client";

export default function LoansPage() {
  return (
    <div className="space-y-10">


      {/* ================= HEADER ================= */}
      <div>

        <h1 className="text-xl font-serif text-navy">
          Loan Portfolio
        </h1>

        <p className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">
          Comprehensive Credit Asset Statement
        </p>

      </div>



      {/* ================= SUMMARY ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">


        <SummaryCard
          icon="account_balance_wallet"
          title="Total Borrowed"
          value="₹2,85,00,000"
          note="Across 4 facilities"
        />


        <SummaryCard
          icon="verified_user"
          title="Total Repaid"
          value="₹1,42,50,000"
          note="50% amortized"
          highlight
        />


        <SummaryCard
          icon="hourglass_top"
          title="Active Balance"
          value="₹1,42,50,000"
          note="Current tenure"
        />


        <SummaryCard
          icon="event_upcoming"
          title="Upcoming EMI"
          value="₹2,45,000"
          note="Due in 12 days"
          warning
        />

      </div>



      {/* ================= TABLE ================= */}
      <div className="bg-white border border-slate-200 rounded shadow-sm overflow-hidden">


        {/* Toolbar */}
        <div className="p-6 border-b flex justify-between items-center">

          <h3 className="text-sm font-bold uppercase tracking-widest text-navy">
            Active & Historic Loans
          </h3>


          <div className="flex gap-3">

            <ActionBtn icon="filter_list" label="Filter" />
            <ActionBtn icon="download" label="Statement" />

          </div>

        </div>



        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full text-left">


            <thead className="bg-slate-50 border-b">

              <tr>

                <TableHead>Loan</TableHead>
                <TableHead>Disbursal</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Status</TableHead>
                <TableHead align="right">Action</TableHead>

              </tr>

            </thead>



            <tbody className="divide-y divide-slate-100">


              <LoanRow
                name="Business Expansion Loan"
                id="SF-99231-MSME"
                date="12 Jan 2023"
                amount="₹1,50,00,000"
                rate="9.25%"
                status="active"
              />


              <LoanRow
                name="Commercial Vehicle Finance"
                id="SF-88412-CV"
                date="05 Nov 2021"
                amount="₹75,00,000"
                rate="10.50%"
                status="repaid"
              />


              <LoanRow
                name="Machinery Term Loan"
                id="SF-77109-MTL"
                date="22 Aug 2023"
                amount="₹45,00,000"
                rate="8.75%"
                status="active"
              />


              <LoanRow
                name="Working Capital Credit"
                id="SF-44230-WCC"
                date="14 Sep 2024"
                amount="₹15,00,000"
                rate="11.20%"
                status="pending"
              />

            </tbody>

          </table>

        </div>



        {/* Pagination */}
        <div className="p-6 bg-slate-50 flex justify-between items-center">

          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Showing 1–4 of 4
          </p>


          <div className="flex gap-2">

            <PageBtn icon="chevron_left" disabled />
            <PageNum active>1</PageNum>
            <PageBtn icon="chevron_right" disabled />

          </div>

        </div>

      </div>



      {/* ================= QUICK ACTIONS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


        <QuickAction
          icon="calendar_month"
          label="Repayment Schedule"
        />


        <QuickAction
          icon="add_circle"
          label="Request Top-Up"
        />


        <QuickAction
          icon="support_agent"
          label="Portfolio Specialist"
        />

      </div>

    </div>
  );
}



/* ================= COMPONENTS ================= */


function SummaryCard({
  icon,
  title,
  value,
  note,
  highlight,
  warning,
}: any) {
  return (
    <div
      className={`bg-white border rounded p-6 shadow-sm border-l-4
      ${highlight ? "border-l-emerald-corporate" : ""}
      ${warning ? "border-l-amber-500" : ""}
      ${!highlight && !warning ? "border-l-navy" : ""}`}
    >

      <div className="flex items-center gap-3 mb-3">

        <span className={`material-symbols-outlined 
          ${highlight ? "text-emerald-corporate" : "text-navy"}`}
        >
          {icon}
        </span>


        <p className="text-[10px] uppercase tracking-widest text-slate-400">
          {title}
        </p>

      </div>


      <h3 className="text-2xl font-serif text-navy">
        {value}
      </h3>


      <p className="text-[10px] font-semibold text-slate-400 mt-1">
        {note}
      </p>

    </div>
  );
}



function TableHead({ children, align }: any) {
  return (
    <th
      className={`px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400
      ${align === "right" ? "text-right" : ""}`}
    >
      {children}
    </th>
  );
}



function LoanRow({
  name,
  id,
  date,
  amount,
  rate,
  status,
}: any) {

  const statusStyle: any = {
    active: "bg-emerald-corporate/10 text-emerald-corporate",
    repaid: "bg-navy/10 text-navy",
    pending: "bg-amber-100 text-amber-700",
  };


  return (
    <tr className="hover:bg-slate-50 transition-colors">


      <td className="px-6 py-4">

        <div>

          <p className="font-bold text-navy text-sm">
            {name}
          </p>

          <p className="text-[10px] text-slate-400 uppercase tracking-tighter">
            {id}
          </p>

        </div>

      </td>


      <td className="px-6 py-4 text-sm text-slate-600">
        {date}
      </td>


      <td className="px-6 py-4 font-bold text-sm">
        {amount}
      </td>


      <td className="px-6 py-4 text-sm">
        {rate}
      </td>


      <td className="px-6 py-4">

        <span
          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider
          ${statusStyle[status]}`}
        >
          {status}
        </span>

      </td>


      <td className="px-6 py-4 text-right">

        <button
          className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all
          ${status === "repaid"
            ? "border border-slate-200 text-navy hover:bg-slate-50"
            : "bg-navy text-white hover:bg-navy-light"
          }`}
        >
          {status === "repaid" ? "View NOC" : "View Details"}
        </button>

      </td>

    </tr>
  );
}



function ActionBtn({ icon, label }: any) {
  return (
    <button className="px-4 py-2 border border-slate-200 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50">

      <span className="material-symbols-outlined text-sm">
        {icon}
      </span>

      {label}

    </button>
  );
}



function PageBtn({ icon, disabled }: any) {
  return (
    <button
      disabled={disabled}
      className={`w-8 h-8 flex items-center justify-center border
      ${disabled
        ? "border-slate-200 text-slate-300 cursor-not-allowed"
        : "border-slate-300 hover:bg-slate-100"
      }`}
    >

      <span className="material-symbols-outlined text-sm">
        {icon}
      </span>

    </button>
  );
}



function PageNum({ children, active }: any) {
  return (
    <button
      className={`w-8 h-8 flex items-center justify-center text-[10px] font-bold
      ${active
        ? "bg-navy text-white"
        : "border border-slate-200"
      }`}
    >
      {children}
    </button>
  );
}



function QuickAction({ icon, label }: any) {
  return (
    <button className="flex items-center justify-center gap-3 bg-white border border-slate-200 py-6 hover:bg-navy hover:text-white transition-all group">

      <span className="material-symbols-outlined text-emerald-corporate group-hover:text-white">
        {icon}
      </span>


      <span className="text-[10px] font-bold uppercase tracking-widest">
        {label}
      </span>

    </button>
  );
}
