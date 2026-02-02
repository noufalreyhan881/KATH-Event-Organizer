import React from 'react';

const BlogNewsHeader = () => {
  // Data Dummy untuk Artikel Utama (Kiri)
  const featuredPost = {
    id: 1,
    title: "The Future of Luxury Event Planning in 2026",
    date: "02 Feb 2026",
    category: "Insights",
    image: "/path-to-featured-image.jpg" // Ganti dengan path gambar asli
  };

  // Data Dummy untuk 3 Artikel Samping (Kanan)
  const sidePosts = [
    {
      id: 2,
      title: "5 Tips for Perfect Vendor Matchmaking",
      date: "01 Feb 2026",
      category: "Tips",
      image: "/path-to-side-1.jpg"
    },
    {
      id: 3,
      title: "Behind the Scenes: Cakrawala Graduation",
      date: "28 Jan 2026",
      category: "Case Study",
      image: "/path-to-side-2.jpg"
    },
    {
      id: 4,
      title: "Understanding the New Event Regulations",
      date: "20 Jan 2026",
      category: "News",
      image: "/path-to-side-3.jpg"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Title (Optional) */}
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-[#a68a2d] text-4xl font-bold uppercase tracking-wide">
              News & Insights
            </h2>
            <p className="text-gray-500 mt-2">Latest updates from KATH world.</p>
          </div>
          <a href="/blog" className="hidden md:block text-[#a68a2d] font-bold text-sm uppercase tracking-widest border-b border-[#a68a2d] pb-1 hover:opacity-70 transition-opacity">
            View All Articles
          </a>
        </div>

        {/* LAYOUT GRID UTAMA (Sesuai gambar referensi) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[600px]">
          
          {/* KOLOM KIRI: Featured Post (1 Blok Besar) */}
          <div className="relative h-[400px] lg:h-full group overflow-hidden rounded-sm cursor-pointer">
            {/* Background Image/Color */}
            <div className="absolute inset-0 bg-black">
              {/* Uncomment baris bawah untuk gambar asli */}
              {/* <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" /> */}
            </div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
              <span className="bg-[#a68a2d] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-4 inline-block">
                {featuredPost.category}
              </span>
              <h3 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4 group-hover:text-[#f0dfae] transition-colors">
                {featuredPost.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-2">
                {featuredPost.date} &bull; 5 Min Read
              </p>
            </div>
          </div>

          {/* KOLOM KANAN: Side Posts (3 Blok Kecil Vertikal) */}
          <div className="flex flex-col gap-4 h-full">
            
            {sidePosts.map((post) => (
              <div key={post.id} className="relative flex-1 group overflow-hidden rounded-sm cursor-pointer min-h-[180px]">
                {/* Background Image/Color */}
                <div className="absolute inset-0 bg-black">
                   {/* <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" /> */}
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#a68a2d] text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {post.date}
                    </span>
                  </div>
                  <h4 className="text-white text-xl font-bold leading-snug group-hover:text-[#a68a2d] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden text-center">
          <a href="/blog" className="text-[#a68a2d] font-bold text-sm uppercase tracking-widest border-b border-[#a68a2d] pb-1">
            View All Articles
          </a>
        </div>

      </div>
    </section>
  );
};

export default BlogNewsHeader;