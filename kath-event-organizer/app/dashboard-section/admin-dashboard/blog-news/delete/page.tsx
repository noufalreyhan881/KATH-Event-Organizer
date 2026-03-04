import React from 'react';
import Link from 'next/link';
import AdminSidebar from '../../../../src/component/admin/sidebar';

// Icons
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" x2="5" y1="12" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
);
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
);

export default function DeleteBlogPage({ params }: { params: { id: string } }) {
  // Mock Data - In a real app, you would fetch the post details using params.id
  const post = {
    id: params.id,
    title: "The Future of Luxury Event Planning",
    category: "Insights",
    date: "02 Feb 2026",
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 md:px-8 sticky top-0 z-40">
           <div className="flex items-center gap-4">
             <Link href="/admin/blog-news" className="text-gray-500 hover:text-[#a68a2d] transition-colors">
                <ArrowLeftIcon />
             </Link>
             <h2 className="text-xl font-bold text-gray-800">Delete Post</h2>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-8 flex items-center justify-center">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                <TrashIcon />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Are you sure?</h3>
              <p className="text-gray-500 mb-6">
                You are about to delete the post <strong>"{post.title}"</strong>. This action cannot be undone.
              </p>

              <div className="bg-gray-50 rounded-lg p-4 mb-8 text-left text-sm border border-gray-100">
                <div className="flex justify-between mb-2">
                    <span className="text-gray-500">Category</span>
                    <span className="font-medium text-gray-900">{post.category}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Date</span>
                    <span className="font-medium text-gray-900">{post.date}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Link href="/admin/blog-news" className="flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Cancel
                </Link>
                <button className="flex items-center justify-center px-4 py-2.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 shadow-lg shadow-red-600/20 transition-colors">
                  Delete Post
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}