"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../src/component/admin/sidebar';

// Icons
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
);
const SaveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
);
const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
);

export default function CreateBlogPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    author: 'Admin', // Default author
    date: new Date().toISOString().split('T')[0], // Default today
    status: 'Draft',
    content: '',
    images: [] as File[]
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, images: [...prev.images, ...newFiles] }));
      if (errors.images) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.images;
          return newErrors;
        });
      }
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.author.trim()) newErrors.author = "Author is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.content.trim()) newErrors.content = "Content is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Blog Data Submitted:", formData);
    alert("Article created successfully!");
    router.push('/admin/blog-news');
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 md:px-8 sticky top-0 z-40">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-gray-800">Create New Article</h2>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/admin/blog-news" className="inline-flex items-center text-gray-500 hover:text-[#a68a2d] transition-colors">
                <ArrowLeftIcon />
                <span className="ml-2 font-medium">Back to Blog List</span>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                
                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Article Title <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`block w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#a68a2d]/20 focus:border-[#a68a2d] transition-colors ${errors.title ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                    placeholder="Enter article title..."
                  />
                  {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category */}
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category <span className="text-red-500">*</span></label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#a68a2d]/20 focus:border-[#a68a2d] transition-colors ${errors.category ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                    >
                      <option value="">Select Category</option>
                      <option value="Insights">Insights</option>
                      <option value="Tips">Tips & Tricks</option>
                      <option value="News">News</option>
                      <option value="Events">Events</option>
                    </select>
                    {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
                  </div>

                  {/* Status */}
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a68a2d]/20 focus:border-[#a68a2d] transition-colors"
                    >
                      <option value="Draft">Draft</option>
                      <option value="Published">Published</option>
                      <option value="Archived">Archived</option>
                    </select>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content <span className="text-red-500">*</span></label>
                  <textarea
                    id="content"
                    name="content"
                    rows={8}
                    value={formData.content}
                    onChange={handleChange}
                    className={`block w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#a68a2d]/20 focus:border-[#a68a2d] transition-colors ${errors.content ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                    placeholder="Write your article content here..."
                  ></textarea>
                  {errors.content && <p className="mt-1 text-sm text-red-500">{errors.content}</p>}
                </div>

                {/* Featured Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Featured Images</label>
                  <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg transition-colors ${errors.images ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-[#a68a2d]'}`}>
                    <div className="space-y-1 text-center">
                      <div className="mx-auto h-12 w-12 text-gray-400">
                        <UploadIcon />
                      </div>
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="image-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#a68a2d] hover:text-[#8c7324] focus-within:outline-none">
                          <span>Upload files</span>
                          <input id="image-upload" name="images" type="file" className="sr-only" accept="image/*" multiple onChange={handleImageChange} />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                      {formData.images.length > 0 && (
                        <div className="mt-4 text-left">
                          <p className="text-sm font-medium text-gray-700 mb-2">Selected Files ({formData.images.length}):</p>
                          <ul className="space-y-2">
                            {formData.images.map((file, idx) => (
                              <li key={idx} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded text-sm text-gray-600">
                                <span className="truncate max-w-xs">{file.name}</span>
                                <button 
                                  type="button"
                                  onClick={() => removeImage(idx)}
                                  className="text-red-500 hover:text-red-700 ml-2 p-1"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <button type="submit" disabled={isSubmitting} className="flex items-center px-6 py-2.5 bg-[#a68a2d] text-white rounded-lg font-medium shadow-md hover:bg-[#8c7324] transition-all disabled:opacity-70">
                    <span className="mr-2"><SaveIcon /></span>
                    {isSubmitting ? 'Saving...' : 'Save Article'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}