"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import AdminSidebar from '../../src/component/admin/sidebar';

// Icons
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
);
const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
);
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
);
const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
);

export default function PortfolioPage() {
  // State untuk data portfolio (simulasi database)
  const [portfolios, setPortfolios] = useState([
    {
      id: 1,
      title: "Grand Wedding Expo",
      client: "Cakrawala Univ",
      date: "20 Feb 2026",
      categories: ["Wedding", "Exhibition"],
      description: "Pameran pernikahan terbesar tahun ini dengan 50+ vendor."
    },
    {
      id: 2,
      title: "Tech Summit 2025",
      client: "Global Tech",
      date: "15 Mar 2026",
      categories: ["Corporate", "Technology"],
      description: "Konferensi teknologi internasional di Bali Convention Center."
    },
    {
      id: 3,
      title: "Product Launching",
      client: "Automotive Co",
      date: "10 Apr 2026",
      categories: ["Launch", "Automotive"],
      description: "Peluncuran eksklusif seri otomotif terbaru."
    },
    {
      id: 4,
      title: "Music Festival",
      client: "Sound Live",
      date: "05 May 2026",
      categories: ["Concert", "Entertainment"],
      description: "Festival musik outdoor dengan bintang tamu mancanegara."
    }
  ]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setItemToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (itemToDelete !== null) {
      setPortfolios(prev => prev.filter(item => item.id !== itemToDelete));
      setIsDeleteModalOpen(false);
      setItemToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 md:px-8 sticky top-0 z-40">
          <div className="flex items-center">
            <button className="md:hidden mr-4 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <h2 className="text-xl font-bold text-gray-800">Portfolio Management</h2>
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

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="relative w-full sm:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400"><SearchIcon /></span>
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#a68a2d] focus:border-[#a68a2d] sm:text-sm transition-colors"
                placeholder="Search projects..." 
              />
            </div>
            
            <Link href="/admin/portofolios/create" className="flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-[#a68a2d] hover:bg-[#8c7324] shadow-md shadow-[#a68a2d]/20 transition-all">
              <span className="mr-2"><PlusIcon /></span>
              Add New Project
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 font-semibold w-24">Image</th>
                    <th className="px-6 py-4 font-semibold">Project Name</th>
                    <th className="px-6 py-4 font-semibold">Client</th>
                    <th className="px-6 py-4 font-semibold">Date</th>
                    <th className="px-6 py-4 font-semibold">Categories</th>
                    <th className="px-6 py-4 font-semibold">Description</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {portfolios.map((portfolio) => (
                    <PortfolioRow 
                      key={portfolio.id}
                      {...portfolio}
                      onDelete={() => handleDeleteClick(portfolio.id)}
                    />
                  ))}
                  {portfolios.length === 0 && (
                    <tr>
                      <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                        No projects found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="bg-white px-6 py-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{portfolios.length}</span> of <span className="font-medium">{portfolios.length}</span> results
              </span>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50">Previous</button>
                <button className="px-3 py-1 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </main>

        {/* Delete Confirmation Modal */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 transform transition-all scale-100 animate-in fade-in zoom-in duration-200">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Delete Project?</h3>
                <p className="text-sm text-gray-500 mb-6">
                  Are you sure you want to delete this project? This action cannot be undone.
                </p>
                <div className="flex justify-center gap-3">
                  <button 
                    onClick={() => setIsDeleteModalOpen(false)}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={confirmDelete}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition-colors shadow-md shadow-red-600/20"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PortfolioRow({ id, title, client, date, categories, description, onDelete }: { id: number, title: string, client: string, date: string, categories: string[], description: string, onDelete: () => void }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors group">
      <td className="px-6 py-4">
        <div className="h-12 w-16 bg-gray-200 rounded overflow-hidden flex items-center justify-center text-gray-400">
          <ImageIcon />
        </div>
      </td>
      <td className="px-6 py-4">
        <p className="font-medium text-gray-900">{title}</p>
      </td>
      <td className="px-6 py-4 text-gray-600 text-sm">{client}</td>
      <td className="px-6 py-4 text-gray-500 text-sm">{date}</td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-1">
          {categories.map((cat, idx) => (
            <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#a68a2d]/10 text-[#a68a2d] border border-[#a68a2d]/20">
              {cat}
            </span>
          ))}
        </div>
      </td>
      <td className="px-6 py-4 text-gray-500 text-sm max-w-xs truncate">{description}</td>
      <td className="px-6 py-4 text-right">
        <div className="flex items-center justify-end gap-2">
          <Link href={`/admin/portofolios/edit/${id}`} className="p-1.5 text-gray-500 hover:text-[#a68a2d] transition-colors rounded hover:bg-[#a68a2d]/10" title="Edit">
            <EditIcon />
          </Link>
          <button onClick={onDelete} className="p-1.5 text-gray-500 hover:text-red-600 transition-colors rounded hover:bg-red-50" title="Delete">
            <TrashIcon />
          </button>
        </div>
      </td>
    </tr>
  );
}