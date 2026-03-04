import React from 'react';
import Link from 'next/link';
import AdminSidebar from '../../../../src/component/admin/sidebar';

// Icons
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" x2="5" y1="12" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
);
const SaveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
);
const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
);

export default function CreateBlogPage() {
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
             <h2 className="text-xl font-bold text-gray-800">Create New Post</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-[#a68a2d] hover:bg-[#8c7324] shadow-md shadow-[#a68a2d]/20 transition-all">
              <span className="mr-2"><SaveIcon /></span>
              Publish Post
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <form className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Title */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Post Title</label>
                  <input 
                    type="text" 
                    placeholder="Enter article title here..." 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] focus:bg-white focus:ring-2 focus:ring-[#a68a2d]/20 outline-none transition-all"
                  />
                </div>

                {/* Content Editor (Placeholder) */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-[500px]">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Content</label>
                  <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <textarea 
                      className="w-full h-full bg-transparent border-none outline-none resize-none placeholder-gray-400"
                      placeholder="Write your story here..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Right Column: Sidebar Settings */}
              <div className="space-y-6">
                
                {/* Status & Visibility */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-4">Publish Settings</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Status</label>
                      <select className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] outline-none text-sm">
                        <option>Published</option>
                        <option>Draft</option>
                        <option>Archived</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Publish Date</label>
                      <input 
                        type="date" 
                        className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Author</label>
                      <input 
                        type="text" 
                        defaultValue="Admin User"
                        className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#a68a2d] outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Category */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-4">Category</h3>
                  <div className="space-y-2">
                    {['Insights', 'Tips', 'Case Study', 'News', 'Events'].map((cat) => (
                      <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="category" className="text-[#a68a2d] focus:ring-[#a68a2d]" />
                        <span className="text-sm text-gray-600">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Featured Image */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-4">Featured Image</h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="p-3 bg-gray-100 rounded-full mb-3 text-gray-500">
                      <UploadIcon />
                    </div>
                    <p className="text-sm font-medium text-gray-900">Click to upload</p>
                    <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG or GIF</p>
                  </div>
                </div>

              </div>

            </form>
          </div>
        </main>
      </div>
    </div>
  );
}