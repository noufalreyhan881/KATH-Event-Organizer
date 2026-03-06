import React from 'react';

const ServicesGrid = () => {
  // Membuat array dummy 6 item sesuai tampilan di gambar
  const services = Array(6).fill({
    title: "Event Concepting",
    description: "Description Lorem Ipsum Geming Santuy",
  });

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Layout: 1 kolom di HP, 2 di Tablet, 3 di Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          
          {services.map((service, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              
              {/* Gambar / Placeholder Hitam */}
              <div className="w-full aspect-square bg-black mb-6 overflow-hidden relative">
                {/* Jika ada gambar asli, uncomment kode di bawah:
                  <img 
                    src={`/path-to-service-${index}.jpg`} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                */}
              </div>

              {/* Konten Teks */}
              <div className="flex flex-col items-start">
                <h3 className="text-black text-xl font-bold uppercase mb-2 tracking-wide">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-8">
                  {service.description}
                </p>
                
                {/* Tombol View More */}
                <span className="text-black text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-black transition-all pb-1">
                  View More Details
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;