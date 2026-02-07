import React from 'react';

const ArticleDetail = () => {
  return (
    <article className="w-full bg-[#e5e5e5] min-h-screen pb-20">
      
      {/* 1. Hero Image Section */}
      {/* Dimensi sesuai hint di gambar: 1110x500 (namun dibuat full-width agar responsif) */}
      <div className="w-full h-[300px] md:h-[500px] bg-black flex items-center justify-center overflow-hidden">
         {/* Placeholder Text */}
         <span className="text-white/50 text-xl font-mono">1110x500 Image Placeholder</span>
         
         {/* Uncomment baris di bawah untuk gambar asli */}
         {/* <img src="/path-to-article-image.jpg" alt="Article Hero" className="w-full h-full object-cover" /> */}
      </div>

      {/* 2. Content Container */}
      <div className="max-w-[1110px] mx-auto px-6 md:px-0">
        
        {/* Header: Title & Date */}
        <div className="py-12 text-center max-w-4xl mx-auto">
          <h1 className="text-black text-3xl md:text-5xl font-bold leading-tight mb-4">
            Lorem ipsum dolor sit amet consectetur <br className="hidden md:block" />
            adipiscing elit quisque faucibus ex sapien.
          </h1>
          <p className="text-gray-600 text-sm uppercase tracking-widest font-medium">
            Sunday, 20 February 2026
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-[#a68a2d] mb-12 opacity-50"></div>

        {/* Body Paragraphs */}
        <div className="text-[#333333] text-base md:text-lg leading-loose text-justify space-y-6 font-normal">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>

      </div>
    </article>
  );
};

export default ArticleDetail;