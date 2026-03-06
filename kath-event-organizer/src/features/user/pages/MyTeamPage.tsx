"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
);

// Breadcrumb Component
const Breadcrumbs = () => (
  <nav className="flex text-sm text-gray-500 mb-4 gap-2 items-center font-medium">
    <Link href="/dashboard-section/user-dashboard" className="hover:text-[#a68a2d] transition-colors">Dashboard</Link>
    <span>/</span>
    <span className="text-gray-900">My Team</span>
  </nav>
);

export default function MyTeamPage() {
  const router = useRouter();
  // Mock Data: User sudah punya tim
  const [hasTeam, setHasTeam] = useState(true);
  const [copied, setCopied] = useState(false);
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
  const [inviteSuccess, setInviteSuccess] = useState(false);

  const openModal = (title: string, message: string, confirmText: string, action: () => void, type: 'danger' | 'warning' = 'danger') => {
    setModalConfig({ title, message, confirmText, confirmAction: action, type });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(team.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirm = () => {
    modalConfig.confirmAction();
    closeModal();
  };

  const handleLeaveTeam = () => {
    if (currentUser.role === 'Leader' && team.members.length > 1) {
      openModal(
        "Action Required",
        "As a leader, you must promote another member to Leader before leaving the team.",
        "Got it",
        () => {},
        'warning'
      );
    } else {
      openModal(
        "Leave Team",
        "Are you sure you want to leave this team? You will need to join or create a new team to participate.",
        "Leave Team",
        () => setHasTeam(false),
        'danger'
      );
    }
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
    setInviteSuccess(true);
    setTimeout(() => {
      setInviteSuccess(false);
      setInviteModalOpen(false);
      setInviteEmail('');
    }, 1500);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto">
            <Breadcrumbs />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">My Team</h1>
                <p className="text-gray-500 mt-2">Manage your squad and competition details.</p>
              </div>
            </div>

            {hasTeam ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Team Info Card */}
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                        <UsersIcon />
                      </div>
                      {currentUser.role === 'Leader' && (
                        <Link href="/dashboard-section/user-dashboard/my-team-page/settings" className="p-2 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all">
                          <SettingsIcon />
                        </Link>
                      )}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{team.name}</h2>
                    <p className="text-sm text-gray-500 mb-8 leading-relaxed">{team.competition}</p>
                    
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 mb-6 group">
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-2">Team Code</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-mono font-bold text-gray-900 tracking-wider">{team.code}</span>
                        <button 
                          className={`p-2 rounded-lg transition-all ${copied ? 'text-green-600 bg-green-50' : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'}`}
                          onClick={handleCopyCode}
                          title="Copy Code"
                        >
                          {copied ? <span className="text-[10px] font-bold uppercase">Copied!</span> : <CopyIcon />}
                        </button>
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleLeaveTeam}
                      className="w-full py-3 border border-red-100 text-red-600 bg-red-50/50 rounded-xl text-sm font-bold hover:bg-red-50 hover:border-red-200 transition-all"
                    >
                      Leave Team
                    </button>
                  </div>
                </div>

                {/* Members List */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
                      <h3 className="font-bold text-gray-900 text-lg">Team Members</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">{team.members.length} / 3 Members</span>
                        {currentUser.role === 'Leader' && team.members.length < 3 && (
                          <button 
                            onClick={() => setInviteModalOpen(true)} 
                            className="text-sm flex items-center gap-2 text-gray-900 hover:text-blue-600 font-bold transition-colors px-3 py-1.5 hover:bg-blue-50 rounded-lg"
                          >
                            <UserPlusIcon /> Invite
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {team.members.map((member) => (
                        <div key={member.id} className={`p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-gray-50/50 transition-colors group gap-4 ${member.status === 'Pending' ? 'opacity-70' : ''}`}>
                          <div className="flex items-center gap-5">
                            <div className={`h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm ${member.role === 'Leader' ? 'bg-gray-900' : member.status === 'Pending' ? 'bg-gray-200 text-gray-400' : 'bg-gray-300'}`}>
                              {member.name.charAt(0)}
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-1">
                                <p className="font-bold text-gray-900 text-base">{member.name}</p>
                                {member.role === 'Leader' && (
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">Leader</span>
                                )}
                                {member.status === 'Pending' && (
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 italic">Invited</span>
                                )}
                              </div>
                              <p className="text-sm text-gray-500">{member.email}</p>
                              <p className="text-xs text-gray-400 mt-1">{member.university}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pl-[4.25rem] sm:pl-0">
                            {currentUser.role === 'Leader' && member.id !== currentUser.id && (
                              <div className="flex items-center gap-1 opacity-100 transition-opacity">
                                {member.status === 'Pending' && (
                                  <button 
                                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                    title="Resend Invitation"
                                  >
                                    <RefreshIcon />
                                  </button>
                                )}
                                <button 
                                  onClick={() => handlePromoteMember(member.id, member.name)}
                                  className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                                  title="Promote to Leader"
                                >
                                  <CrownIcon />
                                </button>
                                <button 
                                  onClick={() => handleKickMember(member.id, member.name)}
                                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                  title="Remove Member"
                                >
                                  <UserMinusIcon />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-dashed border-gray-200">
                <div className="h-24 w-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-6">
                  <UsersIcon />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">No Team Found</h2>
                <p className="text-gray-500 max-w-md text-center mb-10 text-lg">You haven't joined a team yet. Create your own squad or join an existing one to start competing.</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md px-6">
                  <Link href="/dashboard-section/user-dashboard/my-team-page/create-team" className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 hover:bg-black text-white font-bold rounded-xl transition-all shadow-lg shadow-gray-900/10">
                    <PlusIcon /> Create Team
                  </Link>
                  <Link href="/dashboard-section/user-dashboard/my-team-page/team-list" className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-100 hover:border-gray-300 text-gray-700 font-bold rounded-xl transition-all">
                    <SearchIcon /> Find Team
                  </Link>
                </div>
              </div>
            )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform scale-100 transition-all">
            <div className="p-8 text-center">
              <div className={`mx-auto h-16 w-16 rounded-full flex items-center justify-center mb-6 ${modalConfig.type === 'danger' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'}`}>
                <AlertTriangleIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{modalConfig.title}</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">{modalConfig.message}</p>
              
              <div className="flex gap-4">
                <button 
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleConfirm}
                  className={`flex-1 px-6 py-3 text-white font-bold rounded-xl shadow-lg transition-all ${modalConfig.type === 'danger' ? 'bg-red-600 hover:bg-red-700 shadow-red-600/20' : 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/20'}`}
                >
                  {modalConfig.confirmText}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {inviteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform scale-100 transition-all">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Invite Member</h3>
                <button onClick={() => setInviteModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
              <p className="text-gray-500 mb-8">Enter the email address of the person you want to invite to your team.</p>
              
              <form onSubmit={handleSendInvite}>
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-900 mb-3">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    placeholder="friend@example.com"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-gray-900 focus:bg-white focus:ring-0 outline-none transition-all font-medium"
                  />
                </div>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setInviteModalOpen(false)} className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors">Cancel</button>
                  <button type="submit" className="flex-1 px-6 py-3 bg-gray-900 hover:bg-black text-white font-bold rounded-xl shadow-lg shadow-gray-900/20 transition-all">Send Invite</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}