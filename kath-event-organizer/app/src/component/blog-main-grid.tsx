import React from 'react';

const BlogMainGrid = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Luxury Event Planning in 2026",
      date: "02 Feb 2026",
      category: "Insights",
      image: "/path-to-blog-1.jpg",
      excerpt: "Discover the latest trends in luxury events and how to stay ahead of the curve with innovative planning strategies."
    },
    {
      id: 2,
      title: "5 Tips for Perfect Vendor Matchmaking",
      date: "01 Feb 2026",
      category: "Tips",
      image: "/path-to-blog-2.jpg",
      excerpt: "Finding the right vendors is crucial. Here are our top tips for success in building your dream team."
    },
    {
      id: 3,
      title: "Behind the Scenes: Cakrawala Graduation",
      date: "28 Jan 2026",
      category: "Case Study",
      image: "/path-to-blog-3.jpg",
      excerpt: "A look at how we managed the massive graduation event for Cakrawala University, from concept to execution."
    },
    {
      id: 4,
      title: "Understanding the New Event Regulations",
      date: "20 Jan 2026",
      category: "News",
      image: "/path-to-blog-4.jpg",
      excerpt: "Stay compliant with the latest government regulations for large gatherings and ensure your event runs smoothly."
    },
    {
      id: 5,
      title: "Sustainable Event Practices",
      date: "15 Jan 2026",
      category: "Sustainability",
      image: "/path-to-blog-5.jpg",
      excerpt: "How to make your events eco-friendly without compromising on luxury and guest experience."
    },
    {
      id: 6,
      title: "The Art of Event Documentation",
      date: "10 Jan 2026",
      category: "Photography",
      image: "/path-to-blog-6.jpg",
      excerpt: "Capturing the moments that matter: A comprehensive guide to professional event photography and videography."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer flex flex-col h-full">
              <div className="w-full aspect-[4/3] bg-black mb-6 overflow-hidden relative rounded-sm">
                {/* Placeholder for image - Ganti bg-gray-800 dengan <img> jika sudah ada gambar */}
                <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute top-4 left-4 bg-[#a68a2d] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <div className="flex items-center text-gray-400 text-xs mb-3 uppercase tracking-widest font-medium">
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-black text-xl font-bold mb-3 group-hover:text-[#a68a2d] transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <span className="inline-block text-[#a68a2d] text-xs font-bold uppercase tracking-widest border-b border-[#a68a2d]/30 group-hover:border-[#a68a2d] transition-all pb-1">
                    Read More
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogMainGrid;