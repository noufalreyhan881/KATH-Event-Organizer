"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { DASHBOARD_ROUTES } from '@/config/routes';

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

// Breadcrumb Component untuk navigasi logis
const Breadcrumbs = () => (
  <nav className="flex text-sm text-gray-500 mb-4 gap-2 items-center">
    <Link href={DASHBOARD_ROUTES.USER} className="hover:text-[#a68a2d]">Dashboard</Link>
    <span>/</span>
    <span className="text-gray-900 font-medium">My Competitions</span>
  </nav>
);

// Skeleton Loader Component untuk Grid Kompetisi
const CompetitionSkeleton = () => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full overflow-hidden">
    <div className="h-40 w-full bg-gray-200 animate-pulse" />
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="w-16 h-6 bg-gray-100 animate-pulse rounded-md" />
        <div className="w-20 h-6 bg-gray-100 animate-pulse rounded-full" />
      </div>
      <div className="space-y-2 mb-4">
        <div className="w-full h-6 bg-gray-100 animate-pulse rounded" />
        <div className="w-3/4 h-6 bg-gray-100 animate-pulse rounded" />
      </div>
      <div className="w-1/2 h-4 bg-gray-50 animate-pulse rounded mb-6" />
      <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
        <div className="w-24 h-4 bg-gray-50 animate-pulse rounded" />
        <div className="h-8 w-8 rounded-full bg-gray-50 animate-pulse" />
      </div>
    </div>
  </div>
);

export default function MyCompetitionPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [filterTab, setFilterTab] = useState<'active' | 'past'>('active');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulasi loading data selama 1.5 detik
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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

  const filteredCompetitions = competitions.filter(comp => {
    const matchesTab = filterTab === 'active' ? comp.status !== 'Finished' : comp.status === 'Finished';
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          comp.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <>
      <div className="max-w-6xl mx-auto">
            <Breadcrumbs />
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">My Competitions</h1>
                <p className="text-gray-500 mt-2">Track your progress and manage your event participations.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link 
                  href="/events" 
                  className="bg-[#a68a2d] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#8e7526] transition-all text-center shadow-lg shadow-[#a68a2d]/20"
                >
                  + Join New Event
                </Link>
                <div className="relative flex-1 md:w-72">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <SearchIcon />
                  </div>
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-900 sm:text-sm transition-all font-medium"
                    placeholder="Search competition..." 
                  />
                </div>
                <button className="flex items-center justify-center px-4 py-3 border border-gray-200 bg-white text-gray-600 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                  <FilterIcon />
                </button>
              </div>
            </div>

            {/* Tabs for better organization */}
            <div className="flex gap-8 border-b border-gray-200 mb-8">
              <button 
                onClick={() => setFilterTab('active')}
                className={`pb-4 text-sm font-bold uppercase tracking-wider transition-all ${filterTab === 'active' ? 'border-b-2 border-[#a68a2d] text-[#a68a2d]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Active Events ({competitions.filter(c => c.status !== 'Finished').length})
              </button>
              <button 
                onClick={() => setFilterTab('past')}
                className={`pb-4 text-sm font-bold uppercase tracking-wider transition-all ${filterTab === 'past' ? 'border-b-2 border-[#a68a2d] text-[#a68a2d]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Past Events ({competitions.filter(c => c.status === 'Finished').length})
              </button>
            </div>

            {/* Grid List */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {isLoading ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <CompetitionSkeleton key={index} />
                ))
              ) : filteredCompetitions.length === 0 ? (
                <div className="col-span-full py-20 text-center bg-white rounded-2xl border border-dashed border-gray-300">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CalendarIcon />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">No competitions joined yet</h3>
                  <p className="text-gray-500 mb-6">Explore our latest events and start your journey.</p>
                  <Link href="/events" className="text-[#a68a2d] font-bold hover:underline">
                    Browse Events
                  </Link>
                </div>
              ) : (
                filteredCompetitions.map((comp) => (
                <Link href={DASHBOARD_ROUTES.USER_COMPETITION_DETAIL(comp.id)} key={comp.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full overflow-hidden">
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

                      <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-50 text-gray-400 group-hover:bg-gray-900 group-hover:text-white transition-all">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </div>
                </Link>
                ))
              )}
            </div>
      </div>
    </>
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
