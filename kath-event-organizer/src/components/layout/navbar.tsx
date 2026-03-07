"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuthContext } from '@/context/AuthContext';
import { PUBLIC_ROUTES, DASHBOARD_ROUTES } from '@/config/routes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, isLoading } = useAuthContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: PUBLIC_ROUTES.HOME },
    { name: 'About', href: PUBLIC_ROUTES.ABOUT },
    { name: 'Services', href: PUBLIC_ROUTES.SERVICES },
    { name: 'Portfolio', href: PUBLIC_ROUTES.PORTFOLIO },
    { name: 'Blog', href: PUBLIC_ROUTES.BLOG },
  ];

  const AuthButtons = () => (
    <div className="flex items-center gap-2">
      {!isLoading && (
        <>
          {isAuthenticated ? (
            <Link 
              href={DASHBOARD_ROUTES.USER_PROFILE}
              className="px-4 py-2 text-sm font-medium text-white bg-[#a68a2d] rounded-md hover:bg-[#b39e5f] transition-all"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link 
                href={PUBLIC_ROUTES.LOGIN}
                className="px-4 py-2 text-sm font-medium text-[#a68a2d] bg-transparent border border-[#a68a2d] rounded-md hover:bg-gray-50 transition-all"
              >
                Masuk
              </Link>
              <Link 
                href={PUBLIC_ROUTES.REGISTER}
                className="px-4 py-2 text-sm font-medium text-white bg-[#a68a2d] rounded-md hover:bg-[#b39e5f] transition-all"
              >
                Daftar
              </Link>
            </>
          )}
        </>
      )}
    </div>
  );

  return (
    <nav className={`sticky top-0 z-50 w-full px-6 py-4 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm' 
        : 'bg-white border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link 
          href={PUBLIC_ROUTES.HOME}
          className="text-[#a68a2d] text-4xl font-serif tracking-tight"
        >
          KATH
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[#a68a2d] font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a68a2d] transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex">
          <AuthButtons />
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#a68a2d] focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="block text-[#a68a2d] font-medium py-2 px-4 hover:bg-gray-50 hover:pl-6 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t border-gray-200 my-2"></div>
          {/* Auth Buttons (Mobile) */}
          <div className="flex justify-center pt-2">
            <AuthButtons />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;