"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { PUBLIC_ROUTES } from '@/config/routes';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#a68a2d] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        
        {isSubmitted ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">Check Your Email</h1>
            <p className="text-gray-600 mt-3">
              We have sent a password reset link to <span className="font-bold text-black">{email}</span>. Please check your inbox and follow the instructions.
            </p>
            <div className="mt-8">
              <Link href={PUBLIC_ROUTES.LOGIN} className="text-[#a68a2d] font-medium hover:text-[#8c7324] transition-colors">
                &larr; Back to Sign In
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-black">Forgot Password?</h1>
              <p className="text-gray-600 mt-2">No worries, we'll send you reset instructions.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-black mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-200'} focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all duration-200`}
                />
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-[#a68a2d] hover:bg-[#8c7324] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold rounded-lg shadow-lg shadow-[#a68a2d]/30 transition-all duration-200 transform hover:-translate-y-0.5 disabled:hover:translate-y-0"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Sending...
                  </span>
                ) : "Send Reset Instructions"}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-600">
              <Link href={PUBLIC_ROUTES.LOGIN} className="text-[#a68a2d] font-medium hover:text-[#8c7324] transition-colors">
                &larr; Back to Sign In
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
