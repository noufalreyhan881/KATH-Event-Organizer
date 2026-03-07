"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import { DASHBOARD_ROUTES } from '@/config/routes';

// Icons
const SaveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
);
const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
);

// Breadcrumb Component untuk navigasi logis
const Breadcrumbs = () => (
  <nav className="flex text-sm text-gray-500 mb-4 gap-2 items-center font-medium">
    <Link href={DASHBOARD_ROUTES.USER} className="hover:text-[#a68a2d] transition-colors">Dashboard</Link>
    <span>/</span>
    <span className="text-gray-900">Settings</span>
  </nav>
);

export default function SettingsPage() {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState('');

  const handleUpdatePassword = () => {
    setError('');
    
    // Logika Validasi Sederhana
    if (!passwords.current || !passwords.new || !passwords.confirm) {
      setError('All password fields are required.');
      return;
    }
    
    if (passwords.new !== passwords.confirm) {
      setError('New password and confirmation do not match.');
      return;
    }

    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      setPasswords({ current: '', new: '', confirm: '' });
      // Di sini nantinya panggil Toast sukses
    }, 2000);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
              <p className="text-gray-500 text-sm mt-1">Manage your password and notification preferences.</p>
            </div>

            <div className="space-y-6">
              {/* Change Password Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <LockIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Security</h3>
                    <p className="text-sm text-gray-500">Update your password to keep your account secure.</p>
                  </div>
                </div>

                <form className="space-y-4 max-w-lg">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input 
                      type="password"
                      value={passwords.current}
                      onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <input 
                      type="password"
                      value={passwords.new}
                      onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                    <input 
                      type="password"
                      value={passwords.confirm}
                      onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                  {error && <p className="text-red-500 text-xs font-bold uppercase tracking-wider">{error}</p>}
                  <div className="pt-2">
                    <button 
                      type="button" 
                      onClick={handleUpdatePassword}
                      disabled={isUpdating}
                      className="px-6 py-2.5 bg-[#a68a2d] hover:bg-[#8c7324] text-white font-bold rounded-lg shadow-md shadow-[#a68a2d]/20 transition-all disabled:opacity-70 flex items-center gap-2"
                    >
                      {isUpdating ? "Updating..." : "Update Password"}
                    </button>
                  </div>
                </form>
              </div>

              {/* Notifications Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
                    <BellIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Notifications</h3>
                    <p className="text-sm text-gray-500">Choose what updates you want to receive.</p>
                  </div>
                </div>

                <div className="space-y-4 max-w-2xl">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="email_updates" type="checkbox" defaultChecked className="w-4 h-4 text-[#a68a2d] border-gray-300 rounded focus:ring-[#a68a2d]" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="email_updates" className="font-medium text-gray-900">Email Updates</label>
                      <p className="text-gray-500">Receive emails about new competitions and features.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="competition_reminders" type="checkbox" defaultChecked className="w-4 h-4 text-[#a68a2d] border-gray-300 rounded focus:ring-[#a68a2d]" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="competition_reminders" className="font-medium text-gray-900">Competition Reminders</label>
                      <p className="text-gray-500">Get notified about upcoming deadlines for your joined competitions.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="marketing" type="checkbox" className="w-4 h-4 text-[#a68a2d] border-gray-300 rounded focus:ring-[#a68a2d]" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="marketing" className="font-medium text-gray-900">Marketing & Offers</label>
                      <p className="text-gray-500">Receive special offers and partner promotions.</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-4">
                    <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                      <SaveIcon />
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  );
}