import Link from 'next/link';
import React from 'react';

interface ArticleProps {
  id: number;
  title: string;
  createdAt: Date;
  image?: string;
}

const OtherNewsSection = ({ articles }: { articles?: ArticleProps[] }) => {
  const newsItems = articles || [];

  if (newsItems.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section: Judul Kiri & Link Kanan */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <h2 className="text-[#a68a2d] text-2xl md:text-3xl font-normal uppercase tracking-wide">
            BERITA LAINNYA
          </h2>
          <Link
            href="/blog"
            className="text-[#a68a2d] text-sm md:text-base hover:underline hover:text-[#8e7526] transition-colors"
          >
            Lihat Selengkapnya
          </Link>
        </div>

        {/* Grid Layout: 1 Kolom (Mobile) -> 3 Kolom (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Link href={`/blog-news-page?id=${item.id}`} key={item.id}>
              <div className="group cursor-pointer flex flex-col">
                
                {/* Image Placeholder (Hitam) */}
                <div className="w-full aspect-[4/3] bg-black mb-4 overflow-hidden relative">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">No Image</span>
                    </div>
                  )}
                </div>

                {/* Konten Teks */}
                <div className="flex flex-col">
                  <h3 className="text-black font-bold text-lg leading-snug mb-3 group-hover:text-[#a68a2d] transition-colors line-clamp-3">
                    {item.title}
                  </h3>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                    {new Date(item.createdAt).toLocaleDateString("id-ID", { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase()}
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OtherNewsSection;