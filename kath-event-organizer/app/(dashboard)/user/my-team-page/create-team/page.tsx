"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Icons
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

export default function CreateTeamPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    teamName: '',
    competition: '',
    description: ''
  });
  const [errors, setErrors] = useState({
    teamName: '',
    competition: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = { teamName: '', competition: '' };
    let isValid = true;

    if (!formData.teamName.trim()) {
      newErrors.teamName = 'Team name is required.';
      isValid = false;
    } else if (formData.teamName.length < 3) {
      newErrors.teamName = 'Team name must be at least 3 characters long.';
      isValid = false;
    }

    if (!formData.competition) {
      newErrors.competition = 'Please select a competition.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    // Simulasi API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Team "${formData.teamName}" created successfully!`);
      router.push('/dashboard-section/user-dashboard/my-team-page');
    }, 1500); // 1.5 detik delay
  };

  return (
    <>
      <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <Link href="/dashboard-section/user-dashboard/my-team-page/team-list" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors">
                <ArrowLeftIcon />
                <span className="ml-2">Back to Team List</span>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Create New Team</h1>
                <p className="text-gray-500 mt-2">Start a new journey by creating your own team.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Team Name</label>
                  <input 
                    type="text" 
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="e.g. Pixel Pioneers"
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-[#a68a2d]/20 focus:border-[#a68a2d] outline-none transition-all text-sm font-medium ${errors.teamName ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {errors.teamName && <p className="mt-2 text-sm text-red-600">{errors.teamName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Select Competition</label>
                  <div className="relative">
                    <select 
                      name="competition"
                      value={formData.competition}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-[#a68a2d]/20 focus:border-[#a68a2d] outline-none transition-all text-sm font-medium appearance-none ${errors.competition ? 'border-red-500' : 'border-gray-200'}`}
                    >
                      <option value="">Select a competition...</option>
                      <option value="ui-ux-design">National UI/UX Design Competition 2026</option>
                      <option value="capture-the-flag">Capture The Flag - Cybersecurity</option>
                      <option value="business-pitch">Startup Pitching Contest</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                  {errors.competition && <p className="mt-2 text-sm text-red-600">{errors.competition}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Team Description <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us a bit about your team..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a68a2d]/20 focus:border-[#a68a2d] outline-none transition-all text-sm font-medium resize-none"
                  ></textarea>
                </div>

                <div className="pt-4 flex flex-col-reverse sm:flex-row gap-3">
                  <Link
                    href="/dashboard-section/user-dashboard/my-team-page/team-list"
                    className="w-full flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-lg transition-colors text-center"
                  >
                    Cancel
                  </Link>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-black text-white font-bold rounded-lg transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Creating...</span>
                      </>
                    ) : (
                      <>
                        <PlusIcon />
                        <span>Create Team</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
    </>
  );
}