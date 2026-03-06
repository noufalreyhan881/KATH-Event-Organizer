"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import UserSidebar from '../../../../src/component/user/sidebar';
import UserHeader from '../../../../src/component/user/header';

// Icons
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);
const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
);
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
);
const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

// Breadcrumb Component untuk navigasi logis
const Breadcrumbs = () => (
  <nav className="flex text-sm text-gray-500 mb-4 gap-2 items-center font-medium">
    <Link href="/dashboard-section/user-dashboard" className="hover:text-[#a68a2d] transition-colors">Dashboard</Link>
    <span>/</span>
    <span className="text-gray-900">Activity History</span>
  </nav>
);

function HistoryContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mengatur tab aktif berdasarkan query parameter saat halaman dimuat
  useEffect(() => {
    const tab = searchParams.get('tab');
    const validTabs = ['all', 'competitions', 'wins', 'certificates'];
    if (tab && validTabs.includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Data dummy untuk riwayat aktivitas
  const historyItems = [
    {
      id: 1,
      event: "Tech Summit 2024",
      date: "15 Jan 2024",
      role: "Participant",
      status: "Completed",
      category: "Technology",
      hasCertificate: true
    },
    {
      id: 2,
      event: "UI/UX Design Challenge",
      date: "10 Dec 2023",
      role: "Finalist",
      status: "Winner",
      category: "Design",
      hasCertificate: true
    },
    {
      id: 3,
      event: "Startup Weekend Jakarta",
      date: "05 Nov 2023",
      role: "Participant",
      status: "Completed",
      category: "Corporate",
      hasCertificate: true
    },
    {
      id: 4,
      event: "Grand Wedding Expo",
      date: "20 Oct 2023",
      role: "Volunteer",
      status: "Completed",
      category: "Wedding",
      hasCertificate: false
    }
  ];

  // Filter data berdasarkan tab
  const filteredItems = historyItems.filter((item) => {
    const matchesTab = 
      activeTab === 'all' || 
      (activeTab === 'competitions' && (item.category === 'Technology' || item.category === 'Design')) ||
      (activeTab === 'wins' && item.status === 'Winner') ||
      (activeTab === 'certificates' && item.hasCertificate);
    
    const matchesSearch = item.event.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const tabs = ['all', 'competitions', 'wins', 'certificates'];

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      <UserSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <UserHeader />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <Breadcrumbs />
              <Link 
                href="/dashboard-section/user-dashboard/my-profile-page" 
                className="inline-flex items-center gap-1 text-sm font-bold text-gray-500 hover:text-[#a68a2d] transition-colors mb-4 group"
              >
                <ChevronLeftIcon />
                Back to Profile
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Activity History</h1>
              <p className="text-gray-500 mt-1 font-medium">Track your journey and participation in KATH events.</p>
            </div>

            {/* Quick Stats Summary */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Events</span>
                <span className="text-2xl font-bold text-gray-900">{historyItems.length}</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <span className="block text-xs font-bold text-[#a68a2d] uppercase tracking-wider mb-1">Total Wins</span>
                <span className="text-2xl font-bold text-gray-900">{historyItems.filter(i => i.status === 'Winner').length}</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <span className="block text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">Certificates</span>
                <span className="text-2xl font-bold text-gray-900">{historyItems.filter(i => i.hasCertificate).length}</span>
              </div>
            </div>

            {/* Controls: Tabs & Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              {/* Tabs Navigation */}
              <div className="flex gap-1 bg-white p-1 rounded-xl border border-gray-100 w-fit">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                      activeTab === tab
                        ? 'bg-[#a68a2d] text-white shadow-md shadow-[#a68a2d]/20'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#a68a2d] transition-colors">
                  <SearchIcon />
                </div>
                <input 
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full md:w-64 pl-10 pr-4 py-2.5 bg-white border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#a68a2d]/20 focus:border-[#a68a2d] transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* History Table Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="text-xs text-gray-400 uppercase bg-gray-50/50 border-b border-gray-100">
                    <tr>
                      <th className="px-8 py-5 font-bold tracking-wider">Event & Category</th>
                      <th className="px-6 py-5 font-bold tracking-wider">Date</th>
                      <th className="px-6 py-5 font-bold tracking-wider">Role</th>
                      <th className="px-8 py-5 font-bold tracking-wider text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/80 transition-colors group">
                        <td className="px-8 py-6">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-gray-900 text-base group-hover:text-[#a68a2d] transition-colors">
                                {item.event}
                              </span>
                              {item.status === 'Winner' && <span className="text-[#a68a2d]"><TrophyIcon /></span>}
                            </div>
                            
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                              {item.category}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="flex items-center gap-2 text-gray-500 font-medium">
                            <CalendarIcon />
                            {item.date}
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <span className="text-gray-700 font-bold">
                            {item.role}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <div className="flex items-center justify-end gap-3">
                            {item.hasCertificate && (
                              <button className="p-2 text-gray-400 hover:text-[#a68a2d] hover:bg-[#a68a2d]/5 transition-all rounded-lg border border-gray-100" title="Download Certificate">
                                <DownloadIcon />
                              </button>
                            )}
                            <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${
                              item.status === 'Winner' 
                                ? 'bg-green-100 text-green-700 border border-green-200' 
                                : 'bg-blue-100 text-blue-700 border border-blue-200'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredItems.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-8 py-12 text-center">
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                              <SearchIcon />
                            </div>
                            <p className="text-gray-400 font-bold text-sm uppercase tracking-wider">
                              No records found
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination Footer */}
              <div className="px-8 py-5 bg-gray-50/30 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Showing {filteredItems.length} of {historyItems.length} entries
                </p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-xs font-bold text-gray-400 bg-white border border-gray-200 rounded-xl cursor-not-allowed">Previous</button>
                  <button className="px-4 py-2 text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:border-[#a68a2d] hover:text-[#a68a2d] transition-colors">Next</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function HistoryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <HistoryContent />
    </Suspense>
  );
}