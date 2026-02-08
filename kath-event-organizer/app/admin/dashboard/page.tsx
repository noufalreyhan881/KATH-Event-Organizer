import React from 'react';
import Link from 'next/link';
import AdminSidebar from '../../src/component/admin/sidebar';

// Icons Components (SVG)
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const InboxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
);
const CurrencyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
);

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 md:px-8 sticky top-0 z-40">
          <div className="flex items-center">
             {/* Mobile Menu Button (Hidden on Desktop) */}
             <button className="md:hidden mr-4 text-gray-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
             </button>
             <h2 className="text-xl font-bold text-gray-800">Dashboard Overview</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-[#a68a2d] flex items-center justify-center text-white font-bold shadow-md shadow-[#a68a2d]/20">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard title="Total Events" value="24" icon={<CalendarIcon />} trend="+12%" />
            <StatCard title="Active Clients" value="18" icon={<UsersIcon />} trend="+5%" />
            <StatCard title="Pending Inquiries" value="7" icon={<InboxIcon />} trend="New" />
            <StatCard title="Total Revenue" value="Rp 1.2M" icon={<CurrencyIcon />} trend="+8%" />
          </div>

          {/* Recent Activity / Projects */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-800">Recent Projects</h3>
              <Link href="#" className="text-sm text-[#a68a2d] font-medium hover:underline">View All</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Project Name</th>
                    <th className="px-6 py-4 font-semibold">Client</th>
                    <th className="px-6 py-4 font-semibold">Date</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <TableRow name="Grand Wedding Expo" client="Cakrawala Univ" date="20 Feb 2026" status="In Progress" />
                  <TableRow name="Tech Summit 2025" client="Global Tech" date="15 Mar 2026" status="Planning" />
                  <TableRow name="Product Launch" client="Automotive Co" date="10 Apr 2026" status="Completed" />
                  <TableRow name="Music Festival" client="Sound Live" date="05 May 2026" status="Planning" />
                  <TableRow name="Corporate Gathering" client="Bank Central" date="12 Jan 2026" status="Completed" />
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

// Helper Components

function StatCard({ title, value, icon, trend }: { title: string; value: string; icon: React.ReactNode; trend: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between hover:shadow-md transition-shadow duration-300">
      <div>
        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full mt-2 inline-block border border-green-100">
          {trend}
        </span>
      </div>
      <div className="p-3 bg-[#a68a2d]/10 rounded-lg text-[#a68a2d]">
        {icon}
      </div>
    </div>
  );
}

function TableRow({ name, client, date, status }: { name: string; client: string; date: string; status: string }) {
  const statusStyles: Record<string, string> = {
    "In Progress": "bg-blue-50 text-blue-600 border-blue-100",
    "Planning": "bg-yellow-50 text-yellow-600 border-yellow-100",
    "Completed": "bg-green-50 text-green-600 border-green-100",
  };
  
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 font-medium text-gray-900">{name}</td>
      <td className="px-6 py-4 text-gray-600">{client}</td>
      <td className="px-6 py-4 text-gray-500 text-sm">{date}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusStyles[status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4">
        <button className="text-[#a68a2d] hover:text-[#8c7324] font-medium text-sm transition-colors">Edit</button>
      </td>
    </tr>
  );
}