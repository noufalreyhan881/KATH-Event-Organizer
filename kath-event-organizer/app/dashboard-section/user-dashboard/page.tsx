import React from 'react';
import Link from 'next/link';
import UserSidebar from '../../src/component/user/sidebar';
import UserHeader from '../../src/component/user/header';

// Icons
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const FlagIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>;

const StatusBadge = ({ status }: { status: 'Registered' | 'In Progress' | 'Finished' }) => {
  const styles = {
    'Registered': 'bg-blue-100 text-blue-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    'Finished': 'bg-green-100 text-green-800',
  };
  const icons = {
    'Registered': <CheckCircleIcon />,
    'In Progress': <ClockIcon />,
    'Finished': <FlagIcon />,
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
      {icons[status]}
      {status}
    </span>
  );
};

export default function UserDashboardPage() {
  // Mock Data
  const competitions = [
    { id: 1, name: "National UI/UX Design Competition 2026", category: "Design", registered: "15 Jan 2026", status: "In Progress" as const },
    { id: 2, name: "Startup Pitching Contest", category: "Business", registered: "10 Jan 2026", status: "Registered" as const },
    { id: 3, name: "Capture The Flag - Cybersecurity", category: "IT", registered: "05 Jan 2026", status: "Finished" as const },
  ];

  const summaryData = [
    { label: 'Competitions Joined', value: '12' },
    { label: 'Active Competitions', value: '3' },
    { label: 'Total Wins', value: '4' },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      <UserSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <UserHeader />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {/* Welcome Message */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Ferry!</h1>
            <p className="text-gray-500 mt-1">Here's your competition tracking summary.</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {summaryData.map(item => (
              <div key={item.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-sm font-medium text-gray-500">{item.label}</p>
                <p className="text-4xl font-bold text-[#a68a2d] mt-2">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Competitions Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">My Active Competitions</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Competition Name</th>
                    <th className="px-6 py-4 font-semibold">Category</th>
                    <th className="px-6 py-4 font-semibold">Registered Date</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {competitions.map((comp) => (
                    <tr key={comp.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{comp.name}</td>
                      <td className="px-6 py-4 text-gray-600">{comp.category}</td>
                      <td className="px-6 py-4 text-gray-500">{comp.registered}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={comp.status} />
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link href={`/dashboard-section/user-dashboard/competitions/${comp.id}`} className="inline-block text-[#a68a2d] hover:text-[#8c7324] font-semibold text-xs py-1 px-3 border border-[#a68a2d] rounded-md transition-colors">
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}