"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import UserSidebar from '../../../../src/component/user/sidebar';
import UserHeader from '../../../../src/component/user/header';

// Icons
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const UploadCloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

// Breadcrumb Component
const Breadcrumbs = ({ competitionName }: { competitionName: string }) => (
  <nav className="flex text-sm text-gray-500 mb-6 gap-2 items-center font-medium">
    <Link href="/dashboard-section/user-dashboard" className="hover:text-[#a68a2d]">Dashboard</Link>
    <span>/</span>
    <Link href="/dashboard-section/user-dashboard/my-competition-page" className="hover:text-[#a68a2d]">My Competitions</Link>
    <span>/</span>
    <span className="text-gray-900 truncate max-w-[200px]">{competitionName}</span>
  </nav>
);

export default function CompetitionDetailPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTeamsModalOpen, setIsTeamsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [teamSearchQuery, setTeamSearchQuery] = useState('');

  // Mock Data Lookup (Simulasi data statis untuk demo)
  const competition = {
    id: 1,
    name: "National UI/UX Design Competition 2026",
    category: "Design",
    status: "In Progress",
    description: "Join the most prestigious UI/UX design competition of the year. Challenge yourself to solve real-world problems through innovative design solutions. This year's theme focuses on 'Accessibility in the Digital Age', encouraging participants to create inclusive digital experiences for everyone.",
    timeline: [
      { title: "Registration Opens", date: "01 Jan 2026", completed: true },
      { title: "Technical Meeting", date: "15 Jan 2026", completed: true },
      { title: "Submission Period", date: "20 Feb 2026", completed: false, active: true },
      { title: "Finalist Announcement", date: "01 Mar 2026", completed: false },
      { title: "Grand Final & Awarding", date: "10 Mar 2026", completed: false },
    ],
    location: "Online / Zoom Meeting",
    organizer: "KATH Events",
    requirements: [
      "Must be an active university student.",
      "Team size: 1-3 members.",
      "Submission format: PDF Presentation & Figma Prototype link.",
      "Original work only, no plagiarism."
    ]
  };

  const participantTeams = [
    { id: 1, name: "KATH Creative", members: ["Ferry S", "Jane Doe", "Alex M"], avatarColor: "bg-[#a68a2d]" },
    { id: 2, name: "Design Wizards", members: ["Bob Smith", "Alice W"], avatarColor: "bg-blue-600" },
    { id: 3, name: "Pixel Perfect", members: ["Charlie B", "David L", "Eve K"], avatarColor: "bg-purple-600" },
    { id: 4, name: "UI Masters", members: ["Grace H", "Henry J"], avatarColor: "bg-green-600" },
  ];

  // Filter teams based on search
  const filteredTeams = participantTeams.filter(team => 
    team.name.toLowerCase().includes(teamSearchQuery.toLowerCase())
  );

  const handleOpenModal = () => {
    // Logika Flow: Jangan izinkan buka modal jika kompetisi sudah selesai
    if (competition.status === "Finished") {
      return;
    }
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (!hasSubmitted) setSelectedFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmitProject = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      setHasSubmitted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex">
      <UserSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <UserHeader />

        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-6xl mx-auto">
            <Breadcrumbs competitionName={competition.name} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Main Content */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Header Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#a68a2d]/5 rounded-bl-full -mr-10 -mt-10"></div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {competition.category}
                    </span>
                    <span className="bg-amber-50 text-amber-700 border border-amber-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {competition.status}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">{competition.name}</h1>
                  
                  <div className="flex flex-wrap gap-6 text-sm text-gray-500 border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-50 rounded-lg text-gray-700"><CalendarIcon /></div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Deadline</p>
                        <p className="font-bold text-gray-900">20 Feb 2026</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-50 rounded-lg text-gray-700"><MapPinIcon /></div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Location</p>
                        <p className="font-bold text-gray-900">{competition.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description & Requirements */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">About Competition</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {competition.description}
                  </p>
                  
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Requirements</h4>
                  <ul className="space-y-3">
                    {competition.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                        <span className="leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Sidebar */}
              <div className="space-y-6">
                {/* Action Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 sticky top-6 overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#a68a2d]"></div>
                  {competition.status === "Finished" ? (
                    <>
                      <div className="flex items-center gap-2 text-green-600 mb-2">
                        <CheckCircleIcon />
                        <h3 className="font-bold">Competition Ended</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-6">You can now download your participation certificate.</p>
                      <button className="w-full py-4 bg-[#a68a2d] text-white font-bold rounded-xl shadow-lg shadow-[#a68a2d]/20 hover:bg-[#8e7526] transition-all">
                        Download Certificate
                      </button>
                    </>
                  ) : hasSubmitted ? (
                    <>
                      <div className="flex items-center gap-2 text-blue-600 mb-2">
                        <CheckCircleIcon />
                        <h3 className="font-bold">Submission Received</h3>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg mb-6">
                        <p className="text-[10px] font-bold text-blue-600 uppercase mb-1">Current File</p>
                        <p className="text-xs font-medium text-blue-900 truncate">final_submission_v2_kath.pdf</p>
                      </div>
                      <button 
                        onClick={handleOpenModal}
                        className="w-full py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-2 group"
                      >
                        <UploadCloudIcon />
                        Edit Submission
                      </button>
                    </>
                  ) : (
                    <>
                      <h3 className="font-bold text-gray-900 mb-2">Ready to Submit?</h3>
                      <div className="flex items-center gap-2 text-amber-600 mb-4 bg-amber-50 p-2 rounded-lg">
                        <ClockIcon />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Ends in 12h : 45m : 02s</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-6">Check all requirements before submitting your work.</p>
                      <button 
                        onClick={handleOpenModal}
                        className="w-full py-4 bg-gray-900 hover:bg-black text-white font-bold rounded-xl shadow-lg shadow-gray-900/10 transition-all flex items-center justify-center gap-2"
                      >
                        <UploadCloudIcon />
                        Submit Now
                      </button>
                    </>
                  )}
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="font-bold text-gray-900 mb-6">Timeline</h3>
                  <div className="relative pl-2">
                    <div className="space-y-0">
                      {competition.timeline.map((item, index) => {
                        const isLast = index === competition.timeline.length - 1;
                        return (
                          <div key={index} className="relative pl-8 pb-8 group">
                            {!isLast && (
                              <div className={`absolute left-[7px] top-6 w-0.5 h-full transition-colors duration-500 ${item.completed ? 'bg-green-500' : 'bg-gray-100'}`}></div>
                            )}
                            <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 z-10 transition-all duration-300 ${
                              item.completed ? 'bg-green-500 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]' : 
                              (item as any).active ? 'bg-white border-[#a68a2d] ring-4 ring-[#a68a2d]/10' : 'bg-white border-gray-300'
                            }`}>
                              {item.completed && (
                                <svg className="w-2.5 h-2.5 text-white mx-auto mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <h4 className={`text-sm font-bold transition-colors ${item.completed || (item as any).active ? 'text-gray-900' : 'text-gray-400'}`}>{item.title}</h4>
                            <p className="text-xs text-gray-400 mt-1 font-medium">{item.date}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Participant Teams Section (Moved to Sidebar) */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#a68a2d]/10 text-[#a68a2d] rounded-lg">
                        <UsersIcon />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Participant Teams</h3>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">{participantTeams.length} Teams Registered</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setIsTeamsModalOpen(true)}
                      className="text-[10px] font-bold text-[#a68a2d] uppercase tracking-widest hover:underline transition-all"
                    >
                      See All
                    </button>
                  </div>

                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <SearchIcon />
                    </div>
                    <input 
                      type="text"
                      placeholder="Find a team..."
                      value={teamSearchQuery}
                      onChange={(e) => setTeamSearchQuery(e.target.value)}
                      className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#a68a2d]/20 focus:border-[#a68a2d] transition-all w-full"
                    />
                  </div>
                  
                  <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {filteredTeams.map((team) => (
                      <div key={team.id} className="py-3 group flex items-center justify-between">
                        <h4 className="font-medium text-gray-600 group-hover:text-[#a68a2d] transition-colors text-sm truncate max-w-[140px]">
                          {team.name}
                        </h4>
                        {team.name === "KATH Creative" && (
                          <span className="text-[9px] bg-[#a68a2d]/10 text-[#a68a2d] px-2 py-0.5 rounded font-bold uppercase tracking-tighter">Your Team</span>
                        )}
                      </div>
                    ))}
                    {filteredTeams.length === 0 && (
                      <p className="text-[10px] text-center py-4 font-bold text-gray-400 uppercase tracking-widest">No teams found</p>
                    )}
                  </div>
                </div>

                {/* Organizer Info */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center gap-4">
                  <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500 text-lg">
                    {competition.organizer.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Organizer</p>
                    <p className="font-bold text-gray-900">{competition.organizer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Submit Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform scale-100 transition-all">
            <div className="flex justify-between items-center p-8 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">Submit Project</h3>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                <XIcon />
              </button>
            </div>
            
            <form onSubmit={handleSubmitProject} className="p-8">
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Upload Submission (PDF) <span className="text-red-500">*</span>
                </label>
                <label className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer group ${selectedFile ? 'border-green-500 bg-green-50/30' : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'}`}>
                  {selectedFile ? (
                    <div className="flex flex-col items-center">
                      <div className="p-4 bg-green-500 text-white rounded-full mb-4 shadow-lg shadow-green-500/20">
                        <CheckCircleIcon />
                      </div>
                      <p className="text-sm font-bold text-gray-900">{selectedFile.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB • Click to change</p>
                    </div>
                  ) : (
                    <>
                      <div className="p-4 bg-gray-50 rounded-full mb-4 text-gray-400 group-hover:bg-white group-hover:text-gray-900 transition-colors shadow-sm">
                        <UploadCloudIcon />
                      </div>
                      <p className="text-sm font-bold text-gray-900">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500 mt-1">PDF only (Max. 10MB)</p>
                    </>
                  )}
                  <input type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
                </label>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-900 mb-3">Additional Notes <span className="text-gray-400 font-normal">(Optional)</span></label>
                <textarea 
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gray-900 focus:bg-white focus:ring-0 outline-none transition-all resize-none h-32 font-medium"
                  placeholder="Add any comments or links here..."
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button type="button" disabled={isSubmitting} onClick={handleCloseModal} className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50">
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting || !selectedFile}
                  className="flex-1 px-6 py-3 bg-gray-900 hover:bg-black text-white font-bold rounded-xl shadow-lg shadow-gray-900/20 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Participant Directory Modal */}
      {isTeamsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden transform scale-100 transition-all">
            <div className="flex justify-between items-center p-8 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Participant Directory</h3>
                <p className="text-sm text-gray-400 font-medium mt-1">Full list of teams competing in this event</p>
              </div>
              <button onClick={() => setIsTeamsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <XIcon />
              </button>
            </div>
            
            <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {participantTeams.map((team) => (
                  <div key={team.id} className="p-5 rounded-2xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-lg hover:shadow-gray-200/40 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-[#a68a2d] transition-colors text-base">{team.name}</h4>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Leader: {team.members[0]}</p>
                      </div>
                      <span className="bg-white px-2 py-1 rounded-md border border-gray-100 text-[9px] font-bold text-gray-500 uppercase">
                        {team.members.length} Members
                      </span>
                    </div>
                    
                    <div className="flex -space-x-2 overflow-hidden">
                      {team.members.map((member, idx) => (
                        <div 
                          key={idx} 
                          className={`inline-block h-7 w-7 rounded-full ring-2 ring-white ${team.avatarColor} flex items-center justify-center text-[9px] font-bold text-white shadow-sm`}
                          title={member}
                        >
                          {member.split(' ').map(n => n[0]).join('')}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
              <button onClick={() => setIsTeamsModalOpen(false)} className="px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all text-sm">
                Close Directory
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}