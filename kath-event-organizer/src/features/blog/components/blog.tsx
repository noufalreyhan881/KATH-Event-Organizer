import React from 'react';

const LatestNews = () => {
  const newsItems = [
    { id: 1, title: "Title News One", date: "02 June 2025" },
    { id: 2, title: "Title News Two", date: "02 June 2025" },
    { id: 3, title: "Title News Three", date: "02 June 2025" },
    { id: 4, title: "Title News Four", date: "02 June 2025" },
  ];

  return (
    <section className="bg-white pb-20">
      
      {/* Header Block (Full Width Gold Background) */}
      <div className="bg-[#a68a2d] py-16 px-6 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-3">Latest News</h2>
            <p className="text-white/90 font-light text-sm md:text-base">
              Stay informed! Explore our latest updates on event organizer, etc.
            </p>
          </div>
          
          <button className="bg-white text-[#a68a2d] px-8 py-3 rounded-md font-semibold text-sm uppercase tracking-wide hover:bg-gray-100 transition-colors shadow-md">
            View All Blogs
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Featured Big Card */}
          <div className="lg:col-span-1 group cursor-pointer relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
            {/* Background Image */}
            <img 
              src="/path-to-featured-image.jpg" 
              alt="Featured Event" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 p-6 w-full text-white">
              <h3 className="text-2xl font-bold leading-tight mb-2 group-hover:text-[#f0dfae] transition-colors">
                Event Perlombaan KATH 2025
              </h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                Lorem ipsum dolor amet gemink santuy consectetur adipiscing elit.
              </p>
              
              <div className="flex items-center text-sm font-medium text-[#a68a2d]">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>02 June 2025</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x2 Grid of Smaller News */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            {newsItems.map((item) => (
              <div key={item.id} className="group cursor-pointer flex flex-col h-full">
                {/* Image Container */}
                <div className="w-full aspect-[350/150] overflow-hidden rounded-lg mb-4 shadow-sm relative">
                  <img 
                    src={`/path-to-news-${item.id}.jpg`} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-grow">
                  <h4 className="text-[#a68a2d] text-xl font-bold mb-2 group-hover:text-[#8e7526] transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <div className="mt-auto flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2 text-[#a68a2d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LatestNews;