import Navbar from "../src/component/navbar";
import MeetOurTeam from "../src/component/our-team";
import Footer from "../src/component/footer";

export default function AboutUsPage() {
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
        About Us.
      </h1>
    </section>

    <section className="w-full bg-[#e5e5e5]"> {/* Background abu-abu terang sesuai gambar */}
      <div className="flex flex-col md:flex-row min-h-[500px] md:h-[600px]">
        
        {/* Kolom Kiri: Konten Teks */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 md:py-0">
          <h2 className="text-[#a68a2d] text-5xl md:text-6xl font-bold mb-8">
            Who Are We?
          </h2>
          <p className="text-[#333333] text-base md:text-lg leading-loose text-justify font-normal">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien 
            vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. 
            Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec 
            metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc 
            posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per 
            conubia nostra inceptos himenaeos.
          </p>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
          <img 
            src="/path-to-your-team-image.jpg" // Ganti dengan path gambar tim Anda
            alt="Who Are We Team" 
            className="w-full h-full object-cover object-top md:object-center"
          />
        </div>

      </div>
    </section>

    <section className="w-full bg-[#e5e5e5]"> {/* Background abu-abu terang */}
      <div className="flex flex-col md:flex-row min-h-[500px] md:h-[600px]">
        
        {/* Kolom Kiri: Gambar (Meeting/Overhead View) */}
        <div className="w-full md:w-1/2 h-[400px] md:h-auto relative order-1 md:order-1">
          <img 
            src="/path-to-your-meeting-image.jpg" // Ganti dengan path gambar meeting tim Anda
            alt="Our Story Team Meeting" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Kolom Kanan: Konten Teks */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 md:py-0 order-2 md:order-2">
          <h2 className="text-[#a68a2d] text-5xl md:text-6xl font-bold mb-6">
            Our Story
          </h2>
          <p className="text-[#333333] text-base md:text-lg leading-loose text-justify font-normal">
            Cerita kami adalah tentang kreativitas tanpa batas. Di KATH, kami percaya bahwa 
            sebuah acara harus memiliki jiwa dan detak jantungnya sendiri. Berawal dari hasrat 
            untuk menciptakan pengalaman yang "beda", kami tumbuh menjadi Event Organizer 
            yang siap mendobrak standar biasa. Kami tidak hanya mengatur jadwal; kami 
            merancang atmosfer, membangun hype, dan menciptakan kenangan yang akan 
            terus dibicarakan. Let's make some noise together.
          </p>
        </div>

      </div>
    </section>

    <MeetOurTeam />

    <Footer />

    </main>
  );
}