"use client";

import "@/app/globals.css";
import { useState } from "react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 overflow-hidden">



      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}



      <aside
        className={`fixed inset-y-0 left-0 w-72 bg-navy text-white z-50 flex flex-col transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >


        <div className="p-8 border-b border-white/10">

          <div className="flex items-center gap-3">

            <div className="bg-emerald-corporate p-1.5 rounded-sm">
              <span className="material-symbols-outlined text-white">
                account_balance
              </span>
            </div>

            <h1 className="text-lg font-extrabold tracking-tight">
              SECUREFUNDS
            </h1>

          </div>


          <p className="text-[9px] uppercase tracking-widest text-emerald-corporate mt-2">
            Institutional Dashboard
          </p>

        </div>




        <nav className="flex-1 py-6 space-y-1">

          <SidebarLink href="/dashboard" icon="dashboard" onClick={() => setOpen(false)}>
            Dashboard
          </SidebarLink>

          <SidebarLink href="/dashboard/loans" icon="payments" onClick={() => setOpen(false)}>
            My Loans
          </SidebarLink>

          <SidebarLink href="/dashboard/eligibility" icon="analytics" onClick={() => setOpen(false)}>
            Loan Eligibility
          </SidebarLink>

          <SidebarLink href="/dashboard/documents" icon="description" onClick={() => setOpen(false)}>
            Documents
          </SidebarLink>

          <SidebarLink href="/dashboard/profile" icon="person" onClick={() => setOpen(false)}>
            Profile
          </SidebarLink>

          <SidebarLink href="/dashboard/support" icon="contact_support" onClick={() => setOpen(false)}>
            Support
          </SidebarLink>

        </nav>




        <div className="p-8 border-t border-white/10">

          <button className="w-full py-3 border border-white/20 text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all">
            Sign Out
          </button>

        </div>

      </aside>





      <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">



        <header className="sticky top-0 z-30 bg-white border-b px-6 lg:px-10 py-4 flex items-center justify-between">


          <div className="flex items-center gap-4">

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden border border-slate-200 w-9 h-9 flex items-center justify-center rounded text-navy"
            >

              <span className="material-symbols-outlined">
                menu
              </span>

            </button>


            <div>

              <h2 className="text-base lg:text-lg font-serif text-navy">
                Client Dashboard
              </h2>

              <p className="hidden sm:block text-[9px] text-slate-400 uppercase tracking-widest">
                Secure Institutional Access
              </p>

            </div>

          </div>




          <div className="flex items-center gap-4 lg:gap-6">

            <button className="p-2 text-slate-400 hover:text-navy transition-colors">
              <span className="material-symbols-outlined">
                notifications
              </span>
            </button>


            <div className="flex items-center gap-3">

              <div className="hidden sm:block text-right">

                <p className="text-xs font-bold text-navy">
                  Raghavan Iyer
                </p>

                <p className="text-[9px] text-emerald-corporate uppercase">
                  Premium
                </p>

              </div>


              <div className="w-9 h-9 lg:w-10 lg:h-10 border border-slate-200 bg-off-white flex items-center justify-center font-bold text-navy">
                RI
              </div>

            </div>

          </div>


        </header>





        <div className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full">
          {children}
        </div>



      </main>

    </div>
  );
}




function SidebarLink({
  href,
  icon,
  children,
  onClick,
}: {
  href: string;
  icon: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-6 py-4 text-sm text-slate-400 hover:bg-navy-light hover:text-white transition-all"
    >

      <span className="material-symbols-outlined">
        {icon}
      </span>

      {children}

    </Link>
  );
}
