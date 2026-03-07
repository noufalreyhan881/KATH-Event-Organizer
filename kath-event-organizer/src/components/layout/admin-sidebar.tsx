"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DASHBOARD_ROUTES } from '@/config/routes';

// Icons Components (SVG)
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const NewspaperIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
);
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);
const LogoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
);

export default function AdminSidebar() {
  const pathname = usePathname();

  // Helper to check if link is active
  const isActive = (path: string) => pathname === path;

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto md:shadow-none border-r border-gray-200 hidden md:flex md:flex-col">
      <div className="flex items-center justify-center h-20 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-[#a68a2d] tracking-widest uppercase">KATH</h1>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        <NavItem href={DASHBOARD_ROUTES.ADMIN} icon={<HomeIcon />} label="Dashboard" active={isActive(DASHBOARD_ROUTES.ADMIN)} />
        <NavItem href={DASHBOARD_ROUTES.ADMIN_PORTFOLIO} icon={<BriefcaseIcon />} label="Portfolio" active={isActive(DASHBOARD_ROUTES.ADMIN_PORTFOLIO)} />
        <NavItem href={DASHBOARD_ROUTES.ADMIN_BLOG} icon={<NewspaperIcon />} label="Blog & News" active={isActive(DASHBOARD_ROUTES.ADMIN_BLOG)} />
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors">
          <LogoutIcon />
          <span className="ml-3">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}

function NavItem({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group ${
        active 
          ? 'bg-[#a68a2d] text-white shadow-md shadow-[#a68a2d]/30' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-[#a68a2d]'
      }`}
    >
      <span className={`transition-colors ${active ? 'text-white' : 'text-gray-400 group-hover:text-[#a68a2d]'}`}>
        {icon}
      </span>
      <span className="ml-3 font-medium">{label}</span>
    </Link>
  );
}