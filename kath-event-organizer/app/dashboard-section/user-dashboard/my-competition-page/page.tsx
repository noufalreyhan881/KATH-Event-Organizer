import React from 'react';
import Link from 'next/link';
import UserSidebar from '../../../src/component/user/sidebar';
import UserHeader from '../../../src/component/user/header';

// Icons
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
);
const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
);
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

export default function MyCompetitionPage() {
  const competitions = [
    {
      id: 1,
      name: "National UI/UX Design Competition 2026",
      category: "Design",
      organizer: "KATH Events",
      date: "20 Feb 2026",
      status: "In Progress",
      image: "bg-blue-50"
    },
    {
      id: 2,
      name: "Startup Pitching Contest",
      category: "Business",
      organizer: "TechHub Indonesia",
      date: "15 Mar 2026",
      status: "Registered",
      image: "bg-purple-50"
    },
    {
      id: 3,
      name: "Capture The Flag - Cybersecurity",
      category: "IT",
      organizer: "CyberDefense",
      date: "05 Jan 2026",
      status: "Finished",
      image: "bg-green-50"
    },
    {
      id: 4,
      name: "Mobile Legends Tournament",
      category: "E-Sport",
      organizer: "KATH Events",
      date: "10 Dec 2025",
      status: "Finished",
      image: "bg-red-50"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      <UserSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <UserHeader />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Competitions</h1>
              <p className="text-gray-500 text-sm mt-1">Manage and track all your joined competitions.</p>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <SearchIcon />
                </div>
                <input 
                  type="text" 
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a68a2d]/20 focus:border-[#a68a2d] sm:text-sm transition-all"
                  placeholder="Search competition..." 
                />
              </div>
              <button className="flex items-center justify-center px-4 py-2.5 border border-gray-200 bg-white text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                <FilterIcon />
              </button>
            </div>
          </div>

          {/* Grid List */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {competitions.map((comp) => (
              <div key={comp.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className={`h-32 w-full ${comp.image} flex items-center justify-center`}>
                  <span className="text-gray-400 font-medium">Competition Banner</span>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-[#a68a2d] uppercase tracking-wider">{comp.category}</span>
                    <StatusBadge status={comp.status} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{comp.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{comp.organizer}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <CalendarIcon />
                    <span className="ml-2">{comp.date}</span>
                  </div>

                  <Link href="/dashboard-section/user-dashboard/my-competition-page/view-details-page" className="block w-full text-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#a68a2d] hover:border-[#a68a2d] transition-all">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "Registered": "bg-blue-100 text-blue-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
    "Finished": "bg-green-100 text-green-800",
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status] || "bg-gray-100 text-gray-800"}`}>
      {status}
    </span>
  );
}
