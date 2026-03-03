import React from 'react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

const BlogMainGrid = async () => {
  const posts = await prisma.article.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link href={`/blog-news-page?id=${post.id}`} key={post.id}>
              <div className="group cursor-pointer flex flex-col h-full">
                <div className="w-full aspect-[4/3] bg-black mb-6 overflow-hidden relative rounded-sm">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-700"></div>
                  )}
                  <div className="absolute top-4 left-4 bg-[#a68a2d] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    {"News"}
                  </div>
                </div>
                
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center text-gray-400 text-xs mb-3 uppercase tracking-widest font-medium">
                    <span>{new Date(post.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}</span>
                  </div>
                  
                  <h3 className="text-black text-xl font-bold mb-3 group-hover:text-[#a68a2d] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.content?.substring(0, 150)}...
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-block text-[#a68a2d] text-xs font-bold uppercase tracking-widest border-b border-[#a68a2d]/30 group-hover:border-[#a68a2d] transition-all pb-1">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogMainGrid;