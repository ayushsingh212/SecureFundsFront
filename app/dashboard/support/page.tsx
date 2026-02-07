"use client";

export default function SupportPage() {
  return (
    <div className="space-y-10">


      <div>

        <h1 className="text-xl font-serif text-navy">
          Concierge Support & Helpdesk
        </h1>

        <p className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">
          Priority access for premium members
        </p>

      </div>



      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


        <div className="bg-white border border-slate-200 rounded shadow-sm p-6 flex flex-col items-center text-center border-t-4 border-emerald-corporate">


          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
            Relationship Manager
          </p>


          <div className="relative mb-4">

            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center border-4 border-off-white shadow-sm">

              <span className="material-symbols-outlined text-5xl text-slate-300">
                person
              </span>

            </div>


            <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-corporate border-2 border-white rounded-full" />

          </div>



          <h3 className="text-xl font-serif text-navy">
            Vikram Malhotra
          </h3>


          <p className="text-[10px] text-emerald-corporate font-bold uppercase tracking-widest mb-6">
            Senior Portfolio Manager
          </p>



          <div className="w-full space-y-3 mb-8">

            <InfoRow label="Direct Line" value="+91 22 4932 8810" />

            <InfoRow label="Email" value="v.malhotra@securefunds.in" />

            <InfoRow
              label="Availability"
              value="Active Now"
              highlight
            />

          </div>



          <button className="w-full bg-navy text-white py-4 font-bold text-xs uppercase tracking-widest hover:bg-navy-light transition-all flex items-center justify-center gap-2">

            <span className="material-symbols-outlined text-sm">
              chat_bubble
            </span>

            Start Direct Chat

          </button>

        </div>



        <div className="lg:col-span-2 space-y-8">


          <div className="bg-white border border-slate-200 rounded shadow-sm p-6 flex flex-col">


            <div className="flex justify-between items-center mb-6">

              <h3 className="text-sm font-bold uppercase tracking-widest text-navy">
                Private Consultation
              </h3>


              <span className="text-[10px] text-slate-400">
                Avg wait: 15 mins
              </span>

            </div>



            <div className="grid grid-cols-2 gap-4 mb-8">


              <ConsultationCard
                icon="videocam"
                title="Video Conference"
                subtitle="Secure Link"
              />


              <ConsultationCard
                icon="call"
                title="Audio Call"
                subtitle="Direct Callback"
              />

            </div>



            <div className="mt-auto">


              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                Available Slots (IST)
              </p>



              <div className="flex gap-2 overflow-x-auto pb-4">

                <Slot label="Today, 2:30 PM" />

                <Slot label="Today, 4:00 PM" />

                <Slot label="Tomorrow, 10:00 AM" />

              </div>



              <button className="w-full mt-4 bg-emerald-corporate text-white py-4 font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all">
                Confirm Appointment
              </button>

            </div>

          </div>

        </div>

      </div>




      <div className="bg-white border border-slate-200 rounded shadow-sm p-6">


        <div className="flex justify-between items-center mb-8">

          <div>

            <h3 className="text-sm font-bold uppercase tracking-widest text-navy">
              Support Tickets
            </h3>

            <p className="text-[10px] text-slate-400 mt-1">
              Active & resolved inquiries
            </p>

          </div>



          <button className="flex items-center gap-2 bg-off-white border border-slate-200 px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-100 transition-all">

            <span className="material-symbols-outlined text-sm">
              add
            </span>

            New Ticket

          </button>

        </div>



        <div className="overflow-x-auto">


          <table className="w-full text-left">

            <thead>

              <tr className="border-b border-slate-100">

                <Th>Ticket ID</Th>

                <Th>Subject</Th>

                <Th>Raised On</Th>

                <Th>Status</Th>

                <Th align="right">Action</Th>

              </tr>

            </thead>


            <tbody className="divide-y divide-slate-50">


              <TicketRow
                id="#TKT-88210"
                subject="Interest Certificate FY23-24"
                date="22 Sep 2024"
                status="Resolved"
                color="emerald"
                action="View"
              />


              <TicketRow
                id="#TKT-90112"
                subject="Top-up Eligibility Query"
                date="Yesterday, 11:30 AM"
                status="In Progress"
                color="navy"
                action="Follow Up"
              />


              <TicketRow
                id="#TKT-91004"
                subject="Document Retrieval"
                date="2 Hours ago"
                status="Awaiting User"
                color="amber"
                action="Respond"
              />

            </tbody>

          </table>

        </div>

      </div>




      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


        <QuickCard icon="help" label="FAQs" />

        <QuickCard icon="menu_book" label="User Guides" />

        <QuickCard icon="security" label="Security Tips" />

        <QuickCard icon="policy" label="Policies" />

      </div>

    </div>
  );
}



function InfoRow({ label, value, highlight }: any) {
  return (
    <div className="flex items-center justify-between text-xs border-b border-slate-50 pb-2">

      <span className="text-slate-400">
        {label}
      </span>


      <span
        className={`font-bold ${
          highlight
            ? "text-emerald-corporate"
            : "text-navy"
        }`}
      >
        {value}
      </span>

    </div>
  );
}



function ConsultationCard({ icon, title, subtitle }: any) {
  return (
    <div className="p-4 border border-slate-100 rounded hover:border-emerald-corporate cursor-pointer transition-all group">

      <span className="material-symbols-outlined text-emerald-corporate mb-2">
        {icon}
      </span>


      <p className="text-xs font-bold text-navy">
        {title}
      </p>


      <p className="text-[10px] text-slate-400">
        {subtitle}
      </p>

    </div>
  );
}



function Slot({ label }: any) {
  return (
    <button className="px-4 py-2 border border-slate-200 text-[10px] font-bold whitespace-nowrap hover:bg-navy hover:text-white transition-all">
      {label}
    </button>
  );
}



function Th({ children, align }: any) {
  return (
    <th
      className={`pb-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 ${
        align === "right" ? "text-right" : ""
      }`}
    >
      {children}
    </th>
  );
}



function TicketRow({ id, subject, date, status, color, action }: any) {
  return (
    <tr className="hover:bg-off-white transition-colors">

      <td className="py-4 text-xs font-bold text-navy">
        {id}
      </td>


      <td className="py-4 text-xs">
        {subject}
      </td>


      <td className="py-4 text-[10px] font-medium text-slate-500 uppercase">
        {date}
      </td>


      <td className="py-4">

        <span
          className={`text-[8px] font-bold px-2 py-1 uppercase tracking-widest rounded
          ${
            color === "emerald"
              ? "bg-emerald-corporate/10 text-emerald-corporate"
              : color === "navy"
              ? "bg-navy/10 text-navy"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {status}
        </span>

      </td>


      <td className="py-4 text-right">

        <button className="text-[10px] font-bold text-navy uppercase tracking-widest hover:underline">
          {action}
        </button>

      </td>

    </tr>
  );
}



function QuickCard({ icon, label }: any) {
  return (
    <div className="bg-white border border-slate-200 p-4 flex items-center gap-4 hover:bg-navy hover:text-white transition-all cursor-pointer group">

      <span className="material-symbols-outlined text-emerald-corporate group-hover:text-white">
        {icon}
      </span>


      <span className="text-[10px] font-bold uppercase tracking-widest">
        {label}
      </span>

    </div>
  );
}
