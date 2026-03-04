"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import UserSidebar from '../../../src/component/user/sidebar';
import UserHeader from '../../../src/component/user/header';

// Icons
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);
const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
);
const UserMinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
);
const CrownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>
);
const UserPlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
);
const AlertTriangleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
);
const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
);

export default function MyTeamPage() {
  const router = useRouter();
  // Mock Data: User sudah punya tim
  const [hasTeam, setHasTeam] = useState(true);
  const [team, setTeam] = useState({
    name: "Pixel Pioneers",
    code: "PXL-8829",
    competition: "National UI/UX Design Competition 2026",
    members: [
      { id: 1, name: "Ferry S", role: "Leader", email: "ferry.s@example.com", university: "Cakrawala University", status: "Active" },
      { id: 2, name: "Sarah Jenkins", role: "Member", email: "sarah.j@example.com", university: "Tech Institute", status: "Active" },
      { id: 3, name: "Mike T", role: "Member", email: "mike.t@example.com", university: "Global Univ", status: "Pending" },
    ]
  });

  // Mock current user session (Simulasi user yang sedang login adalah Leader)
  const currentUser = { id: 1, role: 'Leader' };

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: '',
    message: '',
    confirmText: '',
    confirmAction: () => {},
    type: 'danger' as 'danger' | 'warning'
  });

  // Invite Modal State
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');

  const openModal = (title: string, message: string, confirmText: string, action: () => void, type: 'danger' | 'warning' = 'danger') => {
    setModalConfig({ title, message, confirmText, confirmAction: action, type });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleConfirm = () => {
    modalConfig.confirmAction();
    closeModal();
  };

  const handleLeaveTeam = () => {
    openModal(
      "Leave Team",
      "Are you sure you want to leave this team? You will need to join or create a new team to participate.",
      "Leave Team",
      () => setHasTeam(false),
      'danger'
    );
  };

  const handleKickMember = (id: number, name: string) => {
    openModal(
      "Remove Member",
      `Are you sure you want to remove ${name} from the team? This action cannot be undone.`,
      "Remove Member",
      () => setTeam(prev => ({
        ...prev,
        members: prev.members.filter(m => m.id !== id)
      })),
      'danger'
    );
  };

  const handlePromoteMember = (id: number, name: string) => {
    openModal(
      "Promote to Leader",
      `Are you sure you want to promote ${name} to Leader? You will become a regular member and lose leader privileges.`,
      "Promote",
      () => setTeam(prev => ({
        ...prev,
        members: prev.members.map(m => {
          if (m.id === id) return { ...m, role: 'Leader' };
          if (m.role === 'Leader') return { ...m, role: 'Member' };
          return m;
        })
      })),
      'warning'
    );
  };

  const handleSendInvite = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Invitation sent to ${inviteEmail}`);
    setInviteModalOpen(false);
    setInviteEmail('');
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      <UserSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <UserHeader />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">My Team</h1>
                <p className="text-gray-500 text-sm mt-1">Manage your team members and competition details.</p>
              </div>
            </div>

            {hasTeam ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Team Info Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                      <UsersIcon />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900">{team.name}</h2>
                        {currentUser.role === 'Leader' && (
                          <Link href="/dashboard-section/user-dashboard/my-team-page/settings" className="text-gray-400 hover:text-[#a68a2d] transition-colors" title="Team Settings"><SettingsIcon /></Link>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{team.competition}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mb-4">
                    <p className="text-xs text-gray-500 mb-1 uppercase font-semibold">Team Code</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-mono font-bold text-gray-800">{team.code}</span>
                      <button className="text-[#a68a2d] hover:text-[#8c7324]">
                        <CopyIcon />
                      </button>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleLeaveTeam}
                    className="w-full py-2 border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                  >
                    Leave Team
                  </button>
                </div>

                {/* Members List */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-gray-900">Team Members</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{team.members.length} / 3 Members</span>
                      {currentUser.role === 'Leader' && team.members.length < 3 && (
                        <button onClick={() => setInviteModalOpen(true)} className="text-xs flex items-center gap-1 text-[#a68a2d] hover:underline font-medium transition-colors">
                          <UserPlusIcon /> Invite
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {team.members.map((member) => (
                      <div key={member.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm">
                            {member.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{member.name} {member.role === 'Leader' && <span className="text-xs text-[#a68a2d] bg-[#a68a2d]/10 px-1.5 py-0.5 rounded ml-1">Leader</span>}</p>
                            <p className="text-xs text-gray-500">{member.email}</p>
                            <p className="text-xs text-gray-400">{member.university}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${member.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                            {member.status}
                          </span>
                          {currentUser.role === 'Leader' && member.id !== currentUser.id && (
                            <>
                              <button 
                                onClick={() => handlePromoteMember(member.id, member.name)}
                                className="p-1.5 text-gray-400 hover:text-[#a68a2d] hover:bg-[#a68a2d]/10 rounded-lg transition-colors"
                                title="Promote to Leader"
                              >
                                <CrownIcon />
                              </button>
                              <button 
                                onClick={() => handleKickMember(member.id, member.name)}
                                className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Kick Member"
                              >
                                <UserMinusIcon />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                <div className="mx-auto h-12 w-12 text-gray-400 mb-4"><UsersIcon /></div>
                <h3 className="text-lg font-medium text-gray-900">No Team Yet</h3>
                <p className="text-gray-500 mb-8">You are not part of any team. Create a new one or find a team to join.</p>
                <div className="flex justify-center gap-4">
                  <Link href="/dashboard-section/user-dashboard/my-team-page/create-team" className="flex items-center gap-2 px-6 py-2.5 bg-[#a68a2d] hover:bg-[#8c7324] text-white font-medium rounded-lg shadow-md transition-colors">
                    <PlusIcon /> Create New Team
                  </Link>
                  <Link href="/dashboard-section/user-dashboard/my-team-page/team-list" className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                    <SearchIcon /> Find a Team
                  </Link>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Custom Confirmation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 text-center">
              <div className={`mx-auto h-12 w-12 rounded-full flex items-center justify-center mb-4 ${modalConfig.type === 'danger' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
                <AlertTriangleIcon />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{modalConfig.title}</h3>
              <p className="text-gray-500 text-sm mb-6">{modalConfig.message}</p>
              
              <div className="flex gap-3">
                <button 
                  onClick={closeModal}
                  className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleConfirm}
                  className={`flex-1 px-4 py-2.5 text-white font-medium rounded-lg shadow-md transition-colors ${modalConfig.type === 'danger' ? 'bg-red-600 hover:bg-red-700 shadow-red-600/20' : 'bg-yellow-600 hover:bg-yellow-700 shadow-yellow-600/20'}`}
                >
                  {modalConfig.confirmText}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Invite Member Modal */}
      {inviteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Invite Member</h3>
              <p className="text-gray-500 text-sm mb-6">Enter the email address of the person you want to invite to your team.</p>
              
              <form onSubmit={handleSendInvite}>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    placeholder="friend@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all"
                  />
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setInviteModalOpen(false)} className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
                  <button type="submit" className="flex-1 px-4 py-2.5 bg-[#a68a2d] hover:bg-[#8c7324] text-white font-medium rounded-lg shadow-md shadow-[#a68a2d]/20 transition-colors">Send Invite</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}