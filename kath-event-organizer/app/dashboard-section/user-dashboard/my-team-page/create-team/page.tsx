"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import UserSidebar from '../../../../src/component/user/sidebar';
import UserHeader from '../../../../src/component/user/header';

// Icons
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

export default function CreateTeamPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    teamName: '',
    competition: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi pembuatan tim
    alert(`Team "${formData.teamName}" created successfully!`);
    // Redirect kembali ke halaman My Team (yang nantinya akan menampilkan tim baru)
    router.push('/dashboard-section/user-dashboard/my-team-page');
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      <UserSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <UserHeader />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Link href="/dashboard-section/user-dashboard/my-team-page/team-list" className="inline-flex items-center text-sm text-gray-500 hover:text-[#a68a2d] transition-colors">
                <span className="mr-2"><ArrowLeftIcon /></span>
                Back to Team List
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Create New Team</h1>
                <p className="text-gray-500 text-sm mt-1">Start a new journey by creating your own team.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Team Name</label>
                  <input 
                    type="text" 
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="e.g. Pixel Pioneers"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Competition</label>
                  <select 
                    name="competition"
                    value={formData.competition}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all"
                  >
                    <option value="">Select a competition...</option>
                    <option value="ui-ux-design">National UI/UX Design Competition 2026</option>
                    <option value="capture-the-flag">Capture The Flag - Cybersecurity</option>
                    <option value="business-pitch">Startup Pitching Contest</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Team Description (Optional)</label>
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us a bit about your team..."
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button 
                    type="submit" 
                    className="flex items-center gap-2 px-6 py-2.5 bg-[#a68a2d] hover:bg-[#8c7324] text-white font-medium rounded-lg shadow-md shadow-[#a68a2d]/20 transition-all"
                  >
                    <PlusIcon />
                    Create Team
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}