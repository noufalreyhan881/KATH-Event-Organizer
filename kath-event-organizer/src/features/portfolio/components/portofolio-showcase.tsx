import React from 'react';

const PortfolioShowcase = () => {
  // Data Dummy Proyek
  const projects = [
    {
      id: 1,
      title: "Grand Wedding Expo",
      description: "Pameran pernikahan terbesar tahun ini dengan 50+ vendor.",
      image: "/path-to-project-1.jpg",
      categories: ["Wedding", "Exhibition"]
    },
    {
      id: 2,
      title: "Tech Summit 2025",
      description: "Konferensi teknologi internasional di Bali Convention Center.",
      image: "/path-to-project-2.jpg",
      categories: ["Corporate", "Technology"]
    },
    {
      id: 3,
      title: "Product Launching",
      description: "Peluncuran eksklusif seri otomotif terbaru.",
      image: "/path-to-project-3.jpg",
      categories: ["Launch", "Automotive"]
    },
    {
      id: 4,
      title: "Music Festival",
      description: "Festival musik outdoor dengan bintang tamu mancanegara.",
      image: "/path-to-project-4.jpg",
      categories: ["Concert", "Entertainment"]
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Layout: 1 Kolom (Mobile) -> 2 Kolom (Desktop) sesuai referensi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col">
              
              {/* 1. Image Area (Hitam di gambar referensi) */}
              <div className="w-full aspect-video bg-black mb-6 overflow-hidden rounded-sm relative cursor-pointer">
                {/* Ganti dengan <img src={project.image} ... /> */}
                <div className="w-full h-full bg-black/90 group-hover:bg-black/80 transition-colors flex items-center justify-center">
                   <span className="text-white/20 font-bold text-xl">IMAGE PLACEHOLDER</span>
                </div>
              </div>

              {/* 2. Text Content */}
              <div className="flex flex-col items-start">
                {/* Title - Warna Emas & Bold */}
                <h3 className="text-[#a68a2d] text-2xl font-bold mb-3 cursor-pointer hover:text-[#8e7526] transition-colors">
                  {project.title}
                </h3>
                
                {/* Description - Warna Emas pudar */}
                <p className="text-[#a68a2d] text-base mb-6 font-light opacity-90">
                  {project.description}
                </p>
                
                {/* 3. Category Tags (Tombol Emas) */}
                <div className="flex flex-wrap gap-3">
                  {project.categories.map((cat, index) => (
                    <span 
                      key={index} 
                      className="bg-[#a68a2d] text-white text-[11px] font-bold px-5 py-2 rounded-md uppercase tracking-wide hover:bg-[#8e7526] transition-colors cursor-pointer shadow-sm"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;