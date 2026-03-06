"use client";

import React from 'react';
import Link from 'next/link';
import AdminSidebar from '@/components/layout/admin-sidebar';

export default function BlogFormPage({ isEdit = false }: { isEdit?: boolean }) {
  const pageTitle = isEdit ? "Edit Post" : "Create New Post";
  const breadcrumb = isEdit ? "Edit Post" : "Create Post";

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 md:px-8 sticky top-0 z-40">
           <div className="flex items-center">
             <h2 className="text-xl font-bold text-gray-800">{pageTitle}</h2>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
            <nav className="flex text-sm text-gray-500 mb-6 gap-2 items-center font-medium">
                <Link href="/admin/blog" className="hover:text-[#a68a2d] transition-colors">Blog Management</Link>
                <span>/</span>
                <span className="text-gray-900">{breadcrumb}</span>
            </nav>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">Post Title</label>
                        <input 
                            type="text"
                            defaultValue={isEdit ? "The Future of Luxury Event Planning" : ""}
                            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all"
                            placeholder="Enter post title..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">Category</label>
                         <select
                            defaultValue={isEdit ? "Insights" : ""}
                            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all appearance-none"
                        >
                            <option value="" disabled>Select a category</option>
                            <option>Insights</option>
                            <option>Tips</option>
                            <option>Case Study</option>
                            <option>News</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">Content</label>
                        <textarea
                            rows={10}
                             defaultValue={isEdit ? "Content of the existing blog post..." : ""}
                            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all"
                            placeholder="Write your article here... (Markdown is supported)"
                        />
                    </div>

                    <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                        <Link href="/admin/blog" className="px-5 py-2.5 border border-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors">
                            Cancel
                        </Link>
                        <button 
                            type="submit"
                            className="px-5 py-2.5 bg-[#a68a2d] hover:bg-[#8c7324] text-white font-bold rounded-lg shadow-md shadow-[#a68a2d]/20 transition-all"
                        >
                            {isEdit ? "Save Changes" : "Publish Post"}
                        </button>
                    </div>
                </form>
            </div>
        </main>
      </div>
    </div>
  );
}
