"use client";

import React from 'react';
import Link from 'next/link';
import AdminSidebar from '@/components/layout/admin-sidebar';

export default function PortfolioFormPage({ isEdit = false }: { isEdit?: boolean }) {
  const pageTitle = isEdit ? "Edit Project" : "Add New Project";
  const breadcrumb = isEdit ? "Edit Project" : "Create Project";

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 md:px-8 sticky top-0 z-40">
           <div className="flex items-center">
             <h2 className="text-xl font-bold text-gray-800">{pageTitle}</h2>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
            <nav className="flex text-sm text-gray-500 mb-6 gap-2 items-center font-medium">
                <Link href="/admin/portfolio" className="hover:text-[#a68a2d] transition-colors">Portfolio Management</Link>
                <span>/</span>
                <span className="text-gray-900">{breadcrumb}</span>
            </nav>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">Project Title</label>
                        <input 
                            type="text"
                            defaultValue={isEdit ? "Grand Wedding Expo" : ""}
                            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all"
                            placeholder="Enter project title..."
                        />
                    </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">Client</label>
                        <input 
                            type="text"
                            defaultValue={isEdit ? "Cakrawala Univ" : ""}
                            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all"
                            placeholder="Enter client name..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">Categories</label>
                         <input 
                            type="text"
                            defaultValue={isEdit ? "Wedding, Exhibition" : ""}
                            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all"
                            placeholder="e.g., Wedding, Corporate, Concert"
                        />
                         <p className="text-xs text-gray-500 mt-1">Separate categories with a comma.</p>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">Description</label>
                        <textarea
                            rows={6}
                            defaultValue={isEdit ? "Pameran pernikahan terbesar tahun ini dengan 50+ vendor." : ""}
                            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all"
                            placeholder="Briefly describe the project..."
                        />
                    </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">Project Image</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#a68a2d] hover:text-[#8c7324] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#a68a2d]">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                        <Link href="/admin/portfolio" className="px-5 py-2.5 border border-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors">
                            Cancel
                        </Link>
                        <button 
                            type="submit"
                            className="px-5 py-2.5 bg-[#a68a2d] hover:bg-[#8c7324] text-white font-bold rounded-lg shadow-md shadow-[#a68a2d]/20 transition-all"
                        >
                            {isEdit ? "Save Changes" : "Create Project"}
                        </button>
                    </div>
                </form>
            </div>
        </main>
      </div>
    </div>
  );
}
