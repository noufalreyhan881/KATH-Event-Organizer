import React from 'react';

const OurClients = () => {
  // Membuat array dummy berisi 8 item untuk meniru jumlah kotak di gambar
  const clients = Array(8).fill("Client Logo");

  return (
    <section className="py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-[#a68a2d] text-3xl md:text-4xl font-bold uppercase tracking-wider">
            Our Clients
          </h2>
        </div>

        {/* Clients Grid */}
        {/* Responsif: 2 kolom di HP, 4 di Tablet, 8 di Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
          {clients.map((item, index) => (
            <div 
              key={index}
              className="aspect-square bg-[#e3dac3] flex items-center justify-center hover:bg-[#d4cbb4] transition-colors cursor-pointer group"
            >
              {/* Placeholder Text / Image Area */}
              <span className="text-black/60 font-medium text-sm group-hover:text-black transition-colors">
                125x125
              </span>
              
              {/* Jika ingin menggunakan gambar asli, ganti span di atas dengan:
                 <img src={`/path-to-client-${index}.png`} alt="Client" className="w-3/4 h-auto opacity-70 group-hover:opacity-100 transition-opacity" />
              */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurClients;