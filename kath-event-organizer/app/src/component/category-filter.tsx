import React from 'react';

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  // Daftar kategori sesuai teks pada gambar referensi
  const categories = [
    "All",
    "Event Concepting",
    "Vendor Matchmaking",
    "Event Service Package",
    "Documentation",
    "Digital Services"
  ];

  return (
    <div className="w-full overflow-x-auto py-6">
      <div className="flex items-center gap-6 md:gap-10 min-w-max px-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`
              text-lg md:text-xl transition-all duration-300 whitespace-nowrap
              ${activeCategory === category 
                ? 'font-bold text-[#a68a2d]'   // Style saat Aktif (Bold)
                : 'font-normal text-[#a68a2d] hover:text-[#8e7526] hover:opacity-80' // Style saat Tidak Aktif
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;