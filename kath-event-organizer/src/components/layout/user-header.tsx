import React from 'react';

const UserHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 md:px-8 sticky top-0 z-40">
      <div className="flex items-center">
        <button className="md:hidden mr-4 text-gray-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <h2 className="text-xl font-bold text-gray-800">User Dashboard</h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-900">Ferry S</p>
            <p className="text-xs text-gray-500">Participant</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-[#a68a2d] flex items-center justify-center text-white font-bold shadow-md shadow-[#a68a2d]/20">
            FS
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;