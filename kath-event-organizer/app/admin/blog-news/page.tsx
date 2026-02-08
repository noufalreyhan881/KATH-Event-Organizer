import React from 'react';
import Link from 'next/link';
import AdminSidebar from '../../src/component/admin/sidebar';

// Icons Components (SVG) - Reusing same style as Dashboard
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
);
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
);

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 md:px-8 sticky top-0 z-40">
          <div className="flex items-center">
             <button className="md:hidden mr-4 text-gray-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
             </button>
             <h2 className="text-xl font-bold text-gray-800">Blog & News Management</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-[#a68a2d] flex items-center justify-center text-white font-bold shadow-md shadow-[#a68a2d]/20">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          
          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="relative w-full sm:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400"><SearchIcon /></span>
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#a68a2d] focus:border-[#a68a2d] sm:text-sm transition-colors" 
                placeholder="Search articles..." 
              />
            </div>
            <Link href="/admin/blog-news/create" className="flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-[#a68a2d] hover:bg-[#8c7324] shadow-md shadow-[#a68a2d]/20 transition-all">
              <span className="mr-2"><PlusIcon /></span>
              Create New Post
            </Link>
          </div>

          {/* Blog Posts Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Title</th>
                    <th className="px-6 py-4 font-semibold">Category</th>
                    <th className="px-6 py-4 font-semibold">Author</th>
                    <th className="px-6 py-4 font-semibold">Date</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <BlogRow 
                    title="Tips Memilih Vendor Wedding Terbaik" 
                    category="Tips & Tricks" 
                    author="Admin" 
                    date="22 Feb 2026" 
                    status="Published" 
                  />
                  <BlogRow 
                    title="Tren Dekorasi Event 2026" 
                    category="Trends" 
                    author="Sarah J." 
                    date="18 Feb 2026" 
                    status="Draft" 
                  />
                  <BlogRow 
                    title="Highlight: Grand Wedding Expo" 
                    category="Events" 
                    author="Admin" 
                    date="10 Feb 2026" 
                    status="Published" 
                  />
                  <BlogRow 
                    title="5 Kesalahan Fatal Saat Mengurus Event Kantor" 
                    category="Corporate" 
                    author="Budi S." 
                    date="05 Feb 2026" 
                    status="Archived" 
                  />
                </tbody>
              </table>
            </div>
            
            {/* Pagination (Simple) */}
            <div className="bg-white px-6 py-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm text-gray-500">Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">12</span> results</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50">Previous</button>
                <button className="px-3 py-1 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

// Helper Components

function BlogRow({ title, category, author, date, status }: { title: string; category: string; author: string; date: string; status: string }) {
  const statusStyles: Record<string, string> = {
    "Published": "bg-green-50 text-green-600 border-green-100",
    "Draft": "bg-gray-100 text-gray-600 border-gray-200",
    "Archived": "bg-red-50 text-red-600 border-red-100",
  };
  
  return (
    <tr className="hover:bg-gray-50 transition-colors group">
      <td className="px-6 py-4">
        <p className="font-medium text-gray-900 line-clamp-1">{title}</p>
      </td>
      <td className="px-6 py-4 text-gray-600">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
          {category}
        </span>
      </td>
      <td className="px-6 py-4 text-gray-500 text-sm">{author}</td>
      <td className="px-6 py-4 text-gray-500 text-sm">{date}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusStyles[status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex items-center justify-end gap-2">
          <button className="p-1.5 text-gray-500 hover:text-[#a68a2d] transition-colors rounded hover:bg-[#a68a2d]/10" title="Edit">
            <EditIcon />
          </button>
          <button className="p-1.5 text-gray-500 hover:text-red-600 transition-colors rounded hover:bg-red-50" title="Delete">
            <TrashIcon />
          </button>
        </div>
      </td>
    </tr>
  );
}