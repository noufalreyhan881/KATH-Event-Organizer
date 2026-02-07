import React from 'react';

const OtherNewsSection = () => {
  // Data Dummy untuk 3 Berita Lainnya
  const otherNewsItems = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien.",
      date: "07 FEBRUARI 2026",
      image: "/path-to-news-1.jpg"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien.",
      date: "07 FEBRUARI 2026",
      image: "/path-to-news-2.jpg"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien.",
      date: "07 FEBRUARI 2026",
      image: "/path-to-news-3.jpg"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section: Judul Kiri & Link Kanan */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <h2 className="text-[#a68a2d] text-2xl md:text-3xl font-normal uppercase tracking-wide">
            BERITA LAINNYA
          </h2>
          <a 
            href="/blog" 
            className="text-[#a68a2d] text-sm md:text-base hover:underline hover:text-[#8e7526] transition-colors"
          >
            Lihat Selengkapnya
          </a>
        </div>

        {/* Grid Layout: 1 Kolom (Mobile) -> 3 Kolom (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherNewsItems.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col">
              
              {/* Image Placeholder (Hitam) */}
              <div className="w-full aspect-[4/3] bg-black mb-4 overflow-hidden relative">
                {/* Uncomment untuk gambar asli:
                <img 
                  src={item.image} 
                  alt="News Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                />
                */}
              </div>

              {/* Konten Teks */}
              <div className="flex flex-col">
                <h3 className="text-black font-bold text-lg leading-snug mb-3 group-hover:text-[#a68a2d] transition-colors line-clamp-3">
                  {item.title}
                </h3>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                  {item.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OtherNewsSection;