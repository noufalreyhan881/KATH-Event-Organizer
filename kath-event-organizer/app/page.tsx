import Navbar from "./src/component/navbar";
import LatestNews from "./src/component/blog";
import FAQSection from "./src/component/faq-section";
import OurClients from "./src/component/our-clients-section";
import Footer from "./src/component/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center font-sans">
  {/* Background Image Layer */}
  <div 
    className="absolute inset-0 z-0 scale-105 animate-soft-zoom"
    style={{
      backgroundImage: `url('/path-to-your-image_11ac7c.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay untuk kontras teks */}
    <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]"></div>
  </div>

  {/* Content Layer */}
  <div className="relative z-10 text-center px-6 max-w-5xl">
    {/* Sub-heading kecil */}
    <span className="text-[#a68a2d] uppercase tracking-[0.3em] text-sm font-semibold mb-4 block drop-shadow-sm">
      Luxury Interior Design
    </span>
    
    {/* Main Title */}
    <h1 className="text-white text-5xl md:text-8xl font-serif mb-8 leading-[1.1] drop-shadow-xl">
      Elegan Terpancar <br /> 
      <span className="italic font-light">dalam Detail</span>
    </h1>
    
    {/* Description */}
    <p className="text-white/80 text-base md:text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed italic">
      "Menghadirkan harmoni antara kemewahan klasik dan fungsionalitas modern untuk ruang hunian Anda."
    </p>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
      <button className="group relative bg-[#a68a2d] text-white px-10 py-4 overflow-hidden transition-all duration-300 hover:bg-[#8e7526]">
        <span className="relative z-10 tracking-[0.2em] uppercase text-xs font-bold">
          Jelajahi Karya
        </span>
      </button>
      
      <button className="border border-white/50 text-white px-10 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#a68a2d] tracking-[0.2em] uppercase text-xs font-bold">
        Konsultasi
      </button>
    </div>
  </div>

  {/* Decorative Elements: Bottom Gradient & Scroll Indicator */}
  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/20 to-transparent z-20"></div>
  
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
    <div className="w-[1px] h-12 bg-white/60 mx-auto"></div>
  </div>
</section>

<section className="py-20 px-6 bg-[#f3f4f6]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Kolom Gambar */}
    <div className="w-full md:w-1/2">
      <div className="relative">
        <img 
          src="/path-to-your-event-image.jpg" 
          alt="KATH Event" 
          className="w-full h-auto shadow-2xl"
        />
        {/* Dekorasi list garis jika diperlukan agar mirip desain UI */}
        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-4 border-b-4 border-[#a68a2d] -z-10"></div>
      </div>
    </div>

    {/* Kolom Konten Teks */}
    <div className="w-full md:w-1/2 flex flex-col items-start">
      <h3 className="text-[#a68a2d] font-bold text-lg mb-4 uppercase tracking-wider">
        Tentang KATH
      </h3>
      
      <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
        Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.
      </h2>
      
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Dengan pengalaman lebih dari 7 tahun, Kami bangga menjadi mitra bagi setiap klien 
        yang mempercayakan kami untuk menangani setiap detail acara sehingga bisa 
        berlangsung dengan sukses dan berkesan.
      </p>

      <button className="bg-[#a68a2d] hover:bg-[#8e7526] text-white font-medium py-3 px-8 transition-colors duration-300">
        Lihat Selengkapnya
      </button>
    </div>

  </div>
</section>

<section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    
    {/* Header Section */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
      <h2 className="text-[#a68a2d] text-3xl md:text-4xl font-bold uppercase tracking-wide">
        Our Services
      </h2>
      <a href="#" className="hidden md:block text-[#a68a2d] text-sm font-medium hover:text-[#8e7526] transition-colors uppercase tracking-widest">
        View More Details
      </a>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
      
      {/* Service Card 1 */}
      <div className="group cursor-pointer">
        <div className="w-full aspect-square bg-black mb-6 overflow-hidden relative">
          {/* Placeholder Image - Ganti src dengan gambar asli */}
          <img 
            src="/path-to-service-1.jpg" 
            alt="Event Concepting" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        </div>
        <h3 className="text-[#a68a2d] text-xl font-bold uppercase mb-3 tracking-wide">
          Event Concepting
        </h3>
        <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">
          Description Lorem Ipsum Geming Santuy
        </p>
        <span className="inline-block text-[#a68a2d] text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-[#a68a2d] transition-all pb-1">
          View More Details
        </span>
      </div>

      {/* Service Card 2 */}
      <div className="group cursor-pointer">
        <div className="w-full aspect-square bg-black mb-6 overflow-hidden relative">
          <img 
            src="/path-to-service-2.jpg" 
            alt="Production" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        </div>
        <h3 className="text-[#a68a2d] text-xl font-bold uppercase mb-3 tracking-wide">
          Production Management
        </h3>
        <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">
          Planning Execution High Quality
        </p>
        <span className="inline-block text-[#a68a2d] text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-[#a68a2d] transition-all pb-1">
          View More Details
        </span>
      </div>

      {/* Service Card 3 */}
      <div className="group cursor-pointer">
        <div className="w-full aspect-square bg-black mb-6 overflow-hidden relative">
          <img 
            src="/path-to-service-3.jpg" 
            alt="Creative Design" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        </div>
        <h3 className="text-[#a68a2d] text-xl font-bold uppercase mb-3 tracking-wide">
          Creative Design
        </h3>
        <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">
          Visual Identity Brand Experience
        </p>
        <span className="inline-block text-[#a68a2d] text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-[#a68a2d] transition-all pb-1">
          View More Details
        </span>
      </div>

    </div>

    {/* Mobile View More Button (Hanya muncul di HP) */}
    <div className="mt-12 md:hidden text-center">
       <a href="#" className="text-[#a68a2d] text-sm font-bold uppercase tracking-widest border-b border-[#a68a2d] pb-1">
        View All Services
      </a>
    </div>

  </div>
</section>

<section className="py-20 px-6 bg-[#e5e7eb]"> {/* Background abu-abu muda sesuai gambar */}
  <div className="max-w-[1400px] mx-auto">
    
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-[#a68a2d] text-3xl md:text-4xl font-bold uppercase tracking-widest">
        Our Projects
      </h2>
    </div>

    {/* Projects Grid */}
    {/* Menggunakan Grid 5 kolom di desktop untuk meniru layout gambar */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      
      {/* Project Card 1 */}
      <div className="group relative h-[450px] w-full cursor-pointer overflow-hidden shadow-lg">
        <img 
          src="/path-to-graduation-image.jpg" 
          alt="Graduation Event" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Text Content */}
        <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-bold text-lg uppercase tracking-wider mb-1">
            Event Concepting
          </h3>
          <p className="text-white/70 text-xs uppercase tracking-widest font-light">
            Cakrawala University
          </p>
        </div>
      </div>

      {/* Project Card 2 */}
      <div className="group relative h-[450px] w-full cursor-pointer overflow-hidden shadow-lg">
        <img 
          src="/path-to-graduation-image.jpg" 
          alt="Graduation Event" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-bold text-lg uppercase tracking-wider mb-1">
            Event Concepting
          </h3>
          <p className="text-white/70 text-xs uppercase tracking-widest font-light">
            Cakrawala University
          </p>
        </div>
      </div>

      {/* Project Card 3 */}
      <div className="group relative h-[450px] w-full cursor-pointer overflow-hidden shadow-lg">
        <img 
          src="/path-to-graduation-image.jpg" 
          alt="Graduation Event" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-bold text-lg uppercase tracking-wider mb-1">
            Event Concepting
          </h3>
          <p className="text-white/70 text-xs uppercase tracking-widest font-light">
            Cakrawala University
          </p>
        </div>
      </div>

      {/* Project Card 4 */}
      <div className="group relative h-[450px] w-full cursor-pointer overflow-hidden shadow-lg">
        <img 
          src="/path-to-graduation-image.jpg" 
          alt="Graduation Event" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-bold text-lg uppercase tracking-wider mb-1">
            Event Concepting
          </h3>
          <p className="text-white/70 text-xs uppercase tracking-widest font-light">
            Cakrawala University
          </p>
        </div>
      </div>

      {/* "Click For More" Card (Last Item) */}
      <a href="/portofolio-page" className="group h-[450px] w-full bg-white flex flex-col items-center justify-center cursor-pointer shadow-lg hover:bg-gray-50 transition-colors">
        <div className="w-12 h-12 rounded-full border border-[#a68a2d] flex items-center justify-center mb-4 group-hover:bg-[#a68a2d] transition-all duration-300">
          {/* Arrow Icon */}
          <svg 
            className="w-5 h-5 text-[#a68a2d] group-hover:text-white transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        <span className="text-[#a68a2d] text-xs font-bold uppercase tracking-widest">
          Click For More
        </span>
      </a>

    </div>
  </div>
</section>

<section className="py-20 px-6 bg-[#a68a2d]">
  <div className="max-w-7xl mx-auto">
    
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wide mb-6">
        What Makes Us Different?
      </h2>
      <p className="text-white/90 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
        We don't just organize events; we curate experiences. Here is why our clients trust us with their most precious moments.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Feature 1 */}
      <div className="bg-white p-10 rounded-xl shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
        <div className="w-16 h-16 bg-[#a68a2d]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#a68a2d] transition-colors duration-500">
          <svg className="w-8 h-8 text-[#a68a2d] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
        </div>
        <h3 className="text-gray-900 text-xl font-bold uppercase tracking-wider mb-4 group-hover:text-[#a68a2d] transition-colors">
          Visionary Concepts
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We turn abstract ideas into concrete, breathtaking realities with our innovative design approach.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white p-10 rounded-xl shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
        <div className="w-16 h-16 bg-[#a68a2d]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#a68a2d] transition-colors duration-500">
          <svg className="w-8 h-8 text-[#a68a2d] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h3 className="text-gray-900 text-xl font-bold uppercase tracking-wider mb-4 group-hover:text-[#a68a2d] transition-colors">
          Precision Execution
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Flawless attention to detail ensures every moment goes exactly as planned, down to the second.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white p-10 rounded-xl shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
        <div className="w-16 h-16 bg-[#a68a2d]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#a68a2d] transition-colors duration-500">
          <svg className="w-8 h-8 text-[#a68a2d] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
        <h3 className="text-gray-900 text-xl font-bold uppercase tracking-wider mb-4 group-hover:text-[#a68a2d] transition-colors">
          Expert Team
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Decades of combined experience in luxury event management and interior styling.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="bg-white p-10 rounded-xl shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
        <div className="w-16 h-16 bg-[#a68a2d]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#a68a2d] transition-colors duration-500">
          <svg className="w-8 h-8 text-[#a68a2d] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        </div>
        <h3 className="text-gray-900 text-xl font-bold uppercase tracking-wider mb-4 group-hover:text-[#a68a2d] transition-colors">
          Tailored Experience
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Every event is custom-designed to reflect your unique personality, brand, and style.
        </p>
      </div>

      {/* Feature 5 */}
      <div className="bg-white p-10 rounded-xl shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
        <div className="w-16 h-16 bg-[#a68a2d]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#a68a2d] transition-colors duration-500">
          <svg className="w-8 h-8 text-[#a68a2d] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h3 className="text-gray-900 text-xl font-bold uppercase tracking-wider mb-4 group-hover:text-[#a68a2d] transition-colors">
          Global Network
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Access to premium vendors, exclusive venues, and resources that are otherwise out of reach.
        </p>
      </div>

      {/* Feature 6 */}
      <div className="bg-white p-10 rounded-xl shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
        <div className="w-16 h-16 bg-[#a68a2d]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#a68a2d] transition-colors duration-500">
          <svg className="w-8 h-8 text-[#a68a2d] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h3 className="text-gray-900 text-xl font-bold uppercase tracking-wider mb-4 group-hover:text-[#a68a2d] transition-colors">
          Quality Assurance
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We maintain the highest standards of quality in every aspect of production and design.
        </p>
      </div>

    </div>
  </div>
</section>

      <LatestNews />

      <FAQSection />

      <OurClients />

      <Footer />
    </main>
  );
}
