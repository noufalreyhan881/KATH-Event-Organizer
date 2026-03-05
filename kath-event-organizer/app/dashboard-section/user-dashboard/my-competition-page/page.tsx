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
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
      image: "bg-blue-50 text-blue-600"
    },
    {
      id: 2,
      name: "Startup Pitching Contest",
      category: "Business",
      organizer: "TechHub Indonesia",
      date: "15 Mar 2026",
      status: "Registered",
      image: "bg-purple-50 text-purple-600"
    },
    {
      id: 3,
      name: "Capture The Flag - Cybersecurity",
      category: "IT",
      organizer: "CyberDefense",
      date: "05 Jan 2026",
      status: "Finished",
      image: "bg-green-50 text-green-600"
    },
    {
      id: 4,
      name: "Mobile Legends Tournament",
      category: "E-Sport",
      organizer: "KATH Events",
      date: "10 Dec 2025",
      status: "Finished",
      image: "bg-red-50 text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex">
      <UserSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <UserHeader />

        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">My Competitions</h1>
                <p className="text-gray-500 mt-2">Track your progress and manage your event participations.</p>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-72">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <SearchIcon />
                  </div>
                  <input 
                    type="text" 
                    className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-900 sm:text-sm transition-all font-medium"
                    placeholder="Search competition..." 
                  />
                </div>
                <button className="flex items-center justify-center px-4 py-3 border border-gray-200 bg-white text-gray-600 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                  <FilterIcon />
                </button>
              </div>
            </div>

            {/* Grid List */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {competitions.map((comp) => (
                <div key={comp.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                  <div className={`h-40 w-full ${comp.image} flex items-center justify-center rounded-t-2xl relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10 bg-current"></div>
                    <span className="font-bold text-lg opacity-80">{comp.category}</span>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-1 rounded-md">{comp.category}</span>
                      <StatusBadge status={comp.status} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{comp.name}</h3>
                    <p className="text-sm text-gray-500 mb-6">{comp.organizer}</p>
                    
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 font-medium">
                        <CalendarIcon />
                        <span className="ml-2">{comp.date}</span>
                      </div>

                      <Link href="/dashboard-section/user-dashboard/my-competition-page/view-details-page" className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-900 hover:text-white transition-all">
                        <ArrowRightIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "Registered": "bg-blue-50 text-blue-700 border-blue-100",
    "In Progress": "bg-amber-50 text-amber-700 border-amber-100",
    "Finished": "bg-green-50 text-green-700 border-green-100",
  };
  
  const defaultStyle = "bg-gray-50 text-gray-700 border-gray-100";
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${styles[status] || defaultStyle}`}>
      {status}
    </span>
  );
}
