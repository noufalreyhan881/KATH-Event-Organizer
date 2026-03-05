"use client";

import React, { useState } from 'react';
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

export default function CompetitionDetailPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      { title: "Submission Deadline", date: "20 Feb 2026", completed: false },
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

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitProject = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi proses upload
    alert("Project submitted successfully!");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex">
      <UserSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <UserHeader />

        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Link href="/dashboard-section/user-dashboard/my-competition-page" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors">
                <ArrowLeftIcon />
                <span className="ml-2">Back to My Competitions</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Main Content */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Header Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
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
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
                  <h3 className="font-bold text-gray-900 mb-2">Ready to Submit?</h3>
                  <p className="text-sm text-gray-500 mb-6">Make sure you have checked all requirements before submitting your work.</p>
                  <button 
                    onClick={handleOpenModal}
                    className="w-full py-4 bg-gray-900 hover:bg-black text-white font-bold rounded-xl shadow-lg shadow-gray-900/10 transition-all flex items-center justify-center gap-2"
                  >
                    <UploadCloudIcon />
                    Submit Project
                  </button>
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="font-bold text-gray-900 mb-6">Timeline</h3>
                  <div className="relative pl-2">
                    <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
                    <div className="space-y-8">
                      {competition.timeline.map((item, index) => (
                        <div key={index} className="relative pl-8 group">
                          <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 z-10 transition-colors ${item.completed ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300'}`}></div>
                          <h4 className={`text-sm font-bold ${item.completed ? 'text-gray-900' : 'text-gray-500'}`}>{item.title}</h4>
                          <p className="text-xs text-gray-400 mt-1 font-medium">{item.date}</p>
                        </div>
                      ))}
                    </div>
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
                <label className="block text-sm font-bold text-gray-900 mb-3">Upload Submission (PDF)</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer group">
                  <div className="p-4 bg-gray-50 rounded-full mb-4 text-gray-400 group-hover:bg-white group-hover:text-gray-900 transition-colors shadow-sm">
                    <UploadCloudIcon />
                  </div>
                  <p className="text-sm font-bold text-gray-900">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PDF only (Max. 10MB)</p>
                  <input type="file" accept=".pdf" className="hidden" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-900 mb-3">Additional Notes <span className="text-gray-400 font-normal">(Optional)</span></label>
                <textarea 
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gray-900 focus:bg-white focus:ring-0 outline-none transition-all resize-none h-32 font-medium"
                  placeholder="Add any comments or links here..."
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button type="button" onClick={handleCloseModal} className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="flex-1 px-6 py-3 bg-gray-900 hover:bg-black text-white font-bold rounded-xl shadow-lg shadow-gray-900/20 transition-all">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}