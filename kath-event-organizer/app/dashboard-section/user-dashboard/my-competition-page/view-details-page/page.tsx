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
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      <UserSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <UserHeader />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/dashboard-section/user-dashboard/my-competition-page" className="inline-flex items-center text-sm text-gray-500 hover:text-[#a68a2d] transition-colors">
              <span className="mr-2"><ArrowLeftIcon /></span>
              Back to My Competitions
            </Link>
          </div>

          {/* Header Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {competition.category}
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {competition.status}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{competition.name}</h1>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <CalendarIcon />
                    <span>Deadline: 20 Feb 2026</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPinIcon />
                    <span>{competition.location}</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleOpenModal}
                className="px-6 py-2.5 bg-[#a68a2d] hover:bg-[#8c7324] text-white font-medium rounded-lg shadow-md shadow-[#a68a2d]/20 transition-all"
              >
                Submit Project
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Description */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">About Competition</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {competition.description}
                </p>
                
                <h4 className="font-bold text-gray-900 mb-3">Requirements</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  {competition.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Timeline & Info */}
            <div className="space-y-6">
              
              {/* Timeline */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Timeline</h3>
                <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[9px] before:w-0.5 before:bg-gray-200">
                  {competition.timeline.map((item, index) => (
                    <div key={index} className="relative pl-8">
                      <div className={`absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 ${item.completed ? 'bg-[#a68a2d] border-[#a68a2d]' : 'bg-white border-gray-300'} z-10`}></div>
                      <h4 className={`text-sm font-semibold ${item.completed ? 'text-[#a68a2d]' : 'text-gray-900'}`}>{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{item.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organizer Info */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase mb-3">Organizer</h3>
                <p className="font-bold text-gray-900 text-lg">{competition.organizer}</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">✓ Official Verified Account</p>
              </div>

            </div>
          </div>
        </main>
      </div>

      {/* Submit Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Submit Project</h3>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                <XIcon />
              </button>
            </div>
            
            <form onSubmit={handleSubmitProject} className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Submission (PDF)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="p-3 bg-gray-100 rounded-full mb-3 text-gray-500 group-hover:bg-white group-hover:text-[#a68a2d] transition-colors">
                    <UploadCloudIcon />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PDF only (Max. 10MB)</p>
                  <input type="file" accept=".pdf" className="hidden" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all resize-none h-24"
                  placeholder="Add any comments or links here..."
                ></textarea>
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={handleCloseModal} className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="flex-1 px-4 py-2.5 bg-[#a68a2d] hover:bg-[#8c7324] text-white font-medium rounded-lg shadow-md shadow-[#a68a2d]/20 transition-colors">
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