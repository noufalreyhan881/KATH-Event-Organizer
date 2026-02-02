import Navbar from "../src/component/navbar";
import Footer from "../src/component/footer";
import ServicesGrid from "../src/component/services-grid";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gold Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/path-to-your-skyscraper-image.jpg')", // Replace with your image path
        }}
      >
        {/* Gold Overlay */}
        <div className="absolute inset-0 bg-[#a68a2d]/80 mix-blend-multiply"></div>
      </div>

      {/* Centered Text */}
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold relative z-10">
        Our Services.
      </h1>
    </section>

    <ServicesGrid />
    <Footer />
    </main>
  );
}