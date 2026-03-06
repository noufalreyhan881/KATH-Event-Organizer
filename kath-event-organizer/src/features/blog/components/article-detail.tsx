import React from 'react';

interface ArticleProps {
  id: number;
  title: string;
  createdAt: Date;
  content?: string;
  image?: string;
}

const ArticleDetail = ({ article }: { article?: ArticleProps }) => {
  if (!article) {
    return (
      <div className="w-full py-20 text-center bg-[#e5e5e5]">
        <p className="text-gray-500">Belum ada artikel utama.</p>
      </div>
    );
  }

  return (
    <article className="w-full bg-[#e5e5e5] min-h-screen pb-20">
      
      {/* 1. Hero Image Section */}
      {/* Dimensi sesuai hint di gambar: 1110x500 (namun dibuat full-width agar responsif) */}
      <div className="w-full h-[300px] md:h-[500px] bg-black flex items-center justify-center overflow-hidden">
        {article.image ? (
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-white/50 text-xl font-mono">Image not available</span>
        )}
      </div>

      {/* 2. Content Container */}
      <div className="max-w-[1110px] mx-auto px-6 md:px-0">
        
        {/* Header: Title & Date */}
        <div className="py-12 text-center max-w-4xl mx-auto">
          <h1 className="text-black text-3xl md:text-5xl font-bold leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-gray-600 text-sm uppercase tracking-widest font-medium">
            {new Date(article.createdAt).toLocaleDateString("en-US", {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            })}
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-[#a68a2d] mb-12 opacity-50"></div>

        {/* Body Paragraphs */}
        <div
          className="text-[#333333] text-base md:text-lg leading-loose text-justify space-y-6 font-normal"
          dangerouslySetInnerHTML={{ __html: article.content || "<p>Content not available.</p>" }}
        />

      </div>
    </article>
  );
};

export default ArticleDetail;