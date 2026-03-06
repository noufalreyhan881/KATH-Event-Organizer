"use client";

import React from 'react';
import Link from 'next/link';

// Icons
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);
const HashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
);

export default function TeamListPage() {
  return (
    <>
      <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <Link href="/dashboard-section/user-dashboard/my-team-page" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors">
                <ArrowLeftIcon />
                <span className="ml-2">Back to Dashboard</span>
              </Link>
            </div>

            <div className="mb-10">
              <h1 className="text-3xl font-bold text-gray-900">Team Collaboration</h1>
              <p className="text-gray-500 mt-2 text-lg">Join an existing squad or lead a new one.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Join Team Card */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <HashIcon />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Join with Code</h2>
                <p className="text-gray-500 mb-6">Enter the unique code provided by your team leader to join instantly.</p>
                
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="e.g. KTH-8829" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a68a2d]/20 focus:border-[#a68a2d] outline-none transition-all text-sm font-medium"
                  />
                  <button className="w-full px-6 py-3 bg-gray-900 hover:bg-black text-white text-sm font-bold rounded-lg transition-colors">
                    Join Team
                  </button>
                </div>
              </div>

              {/* Create Team Card */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="h-12 w-12 bg-[#a68a2d]/10 rounded-xl flex items-center justify-center text-[#a68a2d] mb-6">
                  <PlusIcon />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Create New Team</h2>
                <p className="text-gray-500 mb-8 flex-grow">Start a new team and invite your friends to compete together.</p>
                
                <Link href="/dashboard-section/user-dashboard/my-team-page/create-team" className="w-full px-6 py-3 bg-white border-2 border-gray-200 hover:border-[#a68a2d] text-gray-700 hover:text-[#a68a2d] text-sm font-bold rounded-lg transition-all text-center">
                  Create Team
                </Link>
              </div>
            </div>
          </div>
    </>
  );
}