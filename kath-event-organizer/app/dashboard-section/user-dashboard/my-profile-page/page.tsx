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
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      <UserSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <UserHeader />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Profile Header Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
              <div className="h-32 bg-gradient-to-r from-[#a68a2d] to-[#d4b04c]"></div>
              <div className="px-6 pb-6 relative">
                <div className="flex flex-col md:flex-row items-start md:items-end -mt-12 mb-4 gap-4">
                  <div className="h-24 w-24 rounded-full bg-white p-1 shadow-md">
                    <div className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-500">
                      FS
                    </div>
                  </div>
                  <div className="flex-1 pt-2 md:pt-0">
                    <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                    <p className="text-gray-500">{user.role}</p>
                  </div>
                  <div className="flex gap-3 mt-4 md:mt-0">
                    <Link href="/dashboard-section/user-dashboard/competition-history" className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                      <HistoryIcon />
                      History
                    </Link>
                    <Link href="/dashboard-section/user-dashboard/my-profile-page/edit-profile-page" className="flex items-center gap-2 px-4 py-2 bg-[#a68a2d] border border-transparent rounded-lg text-sm font-medium text-white hover:bg-[#8c7324] transition-colors shadow-sm">
                      <EditIcon />
                      Edit Profile
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 border-t border-gray-100 pt-6">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-[#a68a2d]">{user.stats.competitions}</span>
                    <span className="text-sm text-gray-500">Competitions</span>
                  </div>
                  <div className="text-center border-l border-r border-gray-100">
                    <span className="block text-2xl font-bold text-[#a68a2d]">{user.stats.wins}</span>
                    <span className="text-sm text-gray-500">Wins</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-[#a68a2d]">{user.stats.certificates}</span>
                    <span className="text-sm text-gray-500">Certificates</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* About Section */}
              <div className="md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">About Me</h3>
                <p className="text-gray-600 leading-relaxed">
                  {user.bio}
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MailIcon />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <PhoneIcon />
                    <span className="text-sm">{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <SchoolIcon />
                    <span className="text-sm">{user.university}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPinIcon />
                    <span className="text-sm">{user.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <LinkedinIcon />
                    <a href={`https://${user.linkedin}`} target="_blank" rel="noreferrer" className="text-sm hover:text-[#a68a2d] transition-colors">{user.linkedin}</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <GlobeIcon />
                    <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-sm hover:text-[#a68a2d] transition-colors">{user.website}</a>
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
