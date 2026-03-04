"use client";

import React from 'react';
import Link from 'next/link';
import UserSidebar from '../../../../src/component/user/sidebar';
import UserHeader from '../../../../src/component/user/header';

// Icons
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

export default function TeamListPage() {
  // Mock Available Teams
  const availableTeams = [
    { id: 101, name: "Code Breakers", members: 2, maxMembers: 3, competition: "Capture The Flag" },
    { id: 102, name: "Design Wizards", members: 1, maxMembers: 3, competition: "UI/UX Design" },
    { id: 103, name: "Startup Hustlers", members: 2, maxMembers: 4, competition: "Business Pitch" },
  ];

  const handleJoinTeam = (teamName: string) => {
    alert(`Request sent to join ${teamName}!`);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      <UserSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <UserHeader />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <Link href="/dashboard-section/user-dashboard/my-team-page" className="inline-flex items-center text-sm text-gray-500 hover:text-[#a68a2d] transition-colors">
                <span className="mr-2"><ArrowLeftIcon /></span>
                Back to My Team
              </Link>
            </div>

            <div className="space-y-8">
              {/* Join with Code Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="mx-auto h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 mb-4">
                  <UsersIcon />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Have a Team Code?</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">Enter the unique code provided by your team leader to join their team instantly.</p>
                <div className="flex max-w-md mx-auto gap-3">
                  <input 
                    type="text" 
                    placeholder="Enter Team Code (e.g. PXL-8829)" 
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg focus:border-[#a68a2d] focus:ring-2 focus:ring-[#a68a2d]/20 outline-none"
                  />
                  <button className="px-6 py-2.5 bg-[#a68a2d] hover:bg-[#8c7324] text-white font-medium rounded-lg shadow-md transition-colors">
                    Join
                  </button>
                </div>
              </div>

              {/* Available Teams List */}
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h3 className="text-lg font-bold text-gray-900">Find a Team to Join</h3>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="text-sm text-gray-500 hidden sm:inline">or</span>
                    <Link href="/dashboard-section/user-dashboard/my-team-page/create-team" className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-[#a68a2d] text-[#a68a2d] font-medium rounded-lg hover:bg-[#a68a2d] hover:text-white transition-colors w-full sm:w-auto">
                      <PlusIcon />
                      Create New Team
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableTeams.map((team) => (
                    <div key={team.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-gray-900">{team.name}</h4>
                        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">{team.members}/{team.maxMembers} Members</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-6">{team.competition}</p>
                      <button 
                        onClick={() => handleJoinTeam(team.name)}
                        className="w-full py-2 border border-[#a68a2d] text-[#a68a2d] rounded-lg text-sm font-medium hover:bg-[#a68a2d] hover:text-white transition-colors"
                      >
                        Request to Join
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}