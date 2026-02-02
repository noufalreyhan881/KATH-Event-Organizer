import Navbar from "../src/component/navbar";
import Footer from "../src/component/footer";
import LatestNews from "../src/component/blog";
import BlogNewsHeader from "../src/component/blog-news-header";

export default function BlogNewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Gold Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/path-to-your-blog-header.jpg')", // Replace with your image path
          }}
        >
          {/* Gold Overlay */}
          <div className="absolute inset-0 bg-[#a68a2d]/80 mix-blend-multiply"></div>
        </div>

        {/* Centered Text */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold relative z-10">
          Blog & News.
        </h1>
      </section>

      <BlogNewsHeader />

      <section className="bg-[#a68a2d] py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-12">
        
        {/* Judul Halaman (Kiri) */}
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-tight flex-1">
          Explore Our Latest Articles
        </h1>

        {/* Deskripsi Singkat (Kanan) */}
        <p className="text-white/90 text-sm md:text-base font-light leading-relaxed max-w-xl flex-1 md:text-right">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae 
          pellentesque sem placerat.
        </p>

      </div>
    </section>

      <Footer />
    </main>
  );
}