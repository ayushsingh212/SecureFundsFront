import "@/app/globals.css";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* SIDEBAR */}
      <aside className="w-72 bg-navy text-white fixed inset-y-0 z-50 flex flex-col">

        {/* Logo */}
        <div className="p-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-corporate p-1.5 rounded-sm">
              <span className="material-symbols-outlined">
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

        {/* NAV */}
        <nav className="flex-1 py-6 space-y-1">

          <SidebarLink href="/dashboard" icon="dashboard">
            Dashboard
          </SidebarLink>

          <SidebarLink href="/dashboard/loans" icon="payments">
            My Loans
          </SidebarLink>

          <SidebarLink href="/dashboard/eligibility" icon="analytics">
            Loan Eligibility
          </SidebarLink>

          <SidebarLink href="/dashboard/documents" icon="description">
            Documents
          </SidebarLink>

          <SidebarLink href="/dashboard/profile" icon="person">
            Profile
          </SidebarLink>

          <SidebarLink href="/dashboard/support" icon="contact_support">
            Support
          </SidebarLink>

        </nav>

        {/* FOOTER */}
        <div className="p-8 border-t border-white/10">

          <button className="w-full py-3 border border-white/20 text-[10px] uppercase tracking-widest hover:bg-white/5">
            Sign Out
          </button>

        </div>

      </aside>


      {/* MAIN */}
      <main className="flex-1 ml-72">

        {/* HEADER */}
        <header className="sticky top-0 z-40 bg-white border-b px-10 py-5 flex justify-between">

          <div>
            <h2 className="text-lg font-serif text-navy">
              Client Dashboard
            </h2>

            <p className="text-[10px] text-slate-400 uppercase tracking-widest">
              Secure Institutional Access
            </p>
          </div>

          <div className="flex items-center gap-6">

            <button className="p-2 text-slate-400">
              <span className="material-symbols-outlined">
                notifications
              </span>
            </button>

            <div className="flex items-center gap-3">

              <div className="text-right">
                <p className="text-xs font-bold">Raghavan Iyer</p>
                <p className="text-[9px] text-emerald-corporate uppercase">
                  Premium
                </p>
              </div>

              <div className="w-10 h-10 border flex items-center justify-center font-bold">
                RI
              </div>

            </div>

          </div>

        </header>


        {/* PAGE CONTENT */}
        <div className="p-10 max-w-7xl mx-auto">
          {children}
        </div>

      </main>

    </div>
  );
}


/* Sidebar Item Component */

function SidebarLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-6 py-4 text-sm text-slate-400 hover:bg-navy-light hover:text-white transition-all"
    >
      <span className="material-symbols-outlined">
        {icon}
      </span>

      {children}
    </Link>
  );
}
