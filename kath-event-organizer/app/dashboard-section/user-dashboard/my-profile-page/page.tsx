import React from 'react';
import Link from 'next/link';
import UserSidebar from '../../../src/component/user/sidebar';
import UserHeader from '../../../src/component/user/header';

// Icons
const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const SchoolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 5v17"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/></svg>
);
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);
const HistoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/><path d="M12 7v5l4 2"/></svg>
);
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

export default function MyProfilePage() {
  // Mock User Data
  const user = {
    name: "Ferry S",
    role: "Participant",
    email: "ferry.s@example.com",
    phone: "+62 812 3456 7890",
    university: "Cakrawala University",
    location: "Jakarta, Indonesia",
    bio: "Passionate UI/UX Designer and Frontend Developer. Love to participate in hackathons and design competitions.",
    linkedin: "linkedin.com/in/ferrys",
    website: "ferrys.dev",
    joined: "January 2025",
    stats: {
      competitions: 12,
      wins: 4,
      certificates: 8
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex">
      <UserSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <UserHeader />

        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-5xl mx-auto">
            
            {/* Profile Header Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
              <div className="h-40 bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>
                {/* Decorative circle */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
              </div>
              
              <div className="px-8 pb-8">
                <div className="flex flex-col md:flex-row items-end -mt-12 mb-6 gap-6">
                  <div className="h-28 w-28 rounded-2xl bg-white p-1.5 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="h-full w-full rounded-xl bg-gray-100 flex items-center justify-center text-3xl font-bold text-gray-400">
                      {user.name.charAt(0)}
                    </div>
                  </div>
                  
                  <div className="flex-1 pb-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-1">{user.name}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">{user.role}</span>
                      <span className="flex items-center gap-1"><MapPinIcon /> {user.location}</span>
                      <span className="flex items-center gap-1"><SchoolIcon /> {user.university}</span>
                    </div>
                  </div>

                  <div className="flex gap-3 mb-1 w-full md:w-auto">
                    <Link href="/dashboard-section/user-dashboard/competition-history" className="flex-1 md:flex-none justify-center flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                      <HistoryIcon />
                      History
                    </Link>
                    <Link href="/dashboard-section/user-dashboard/my-profile-page/edit-profile-page" className="flex-1 md:flex-none justify-center flex items-center gap-2 px-5 py-2.5 bg-gray-900 border border-transparent rounded-xl text-sm font-bold text-white hover:bg-black transition-colors shadow-lg shadow-gray-900/20">
                      <EditIcon />
                      Edit Profile
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                  <div className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="block text-3xl font-bold text-gray-900 mb-1">{user.stats.competitions}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Competitions</span>
                  </div>
                  <div className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors border-l border-r border-gray-100">
                    <span className="block text-3xl font-bold text-gray-900 mb-1">{user.stats.wins}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Wins</span>
                  </div>
                  <div className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="block text-3xl font-bold text-gray-900 mb-1">{user.stats.certificates}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Certificates</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Contact Info (Left Column) */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="font-bold text-gray-900 mb-6 text-lg">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4 group">
                      <div className="h-10 w-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        <MailIcon />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Email</p>
                        <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="h-10 w-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                        <PhoneIcon />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Phone</p>
                        <p className="text-sm font-medium text-gray-900">{user.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="h-10 w-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                        <LinkedinIcon />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">LinkedIn</p>
                        <a href={`https://${user.linkedin}`} target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">{user.linkedin}</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="h-10 w-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                        <GlobeIcon />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Website</p>
                        <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors">{user.website}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Section (Right Column) */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">About Me</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {user.bio}
                  </p>
                  
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4">Joined Since</h4>
                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 w-fit px-4 py-2 rounded-lg">
                      <CalendarIcon />
                      <span>{user.joined}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
