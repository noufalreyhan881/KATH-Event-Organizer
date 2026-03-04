import React from 'react';
import Link from 'next/link';
import UserSidebar from '../../../src/component/user/sidebar';
import UserHeader from '../../../src/component/user/header';

// Icons
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);
const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
);
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
);

export default function CompetitionHistoryPage() {
  // Mock Data History
  const history = [
    {
      id: 1,
      name: "National UI/UX Design Competition 2025",
      category: "Design",
      date: "15 Jan 2025",
      result: "1st Place Winner",
      status: "Completed",
      points: 100
    },
    {
      id: 2,
      name: "Hackathon 4.0: Future Tech",
      category: "IT",
      date: "10 Dec 2024",
      result: "Participant",
      status: "Completed",
      points: 20
    },
    {
      id: 3,
      name: "Startup Weekend Indonesia",
      category: "Business",
      date: "05 Nov 2024",
      result: "Best Pitching Team",
      status: "Completed",
      points: 80
    },
    {
      id: 4,
      name: "Cybersecurity Capture The Flag",
      category: "IT",
      date: "20 Oct 2024",
      result: "Finalist",
      status: "Completed",
      points: 50
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      <UserSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <UserHeader />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <Link href="/dashboard-section/user-dashboard/my-profile-page" className="inline-flex items-center text-sm text-gray-500 hover:text-[#a68a2d] transition-colors">
                <span className="mr-2"><ArrowLeftIcon /></span>
                Back to Profile
              </Link>
            </div>

            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Competition History</h1>
              <p className="text-gray-500 text-sm mt-1">Track your past participations and results.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="divide-y divide-gray-100">
                {history.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {item.category}
                        </span>
                        <span className="flex items-center text-xs text-gray-500">
                          <CalendarIcon />
                          <span className="ml-1">{item.date}</span>
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600 flex items-center gap-1.5 mt-1">
                          <TrophyIcon /> <span className="font-medium text-gray-700">{item.result}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#a68a2d] text-[#a68a2d] rounded-lg text-sm font-medium hover:bg-[#a68a2d] hover:text-white transition-colors shadow-sm">
                        <DownloadIcon />
                        Certificate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}