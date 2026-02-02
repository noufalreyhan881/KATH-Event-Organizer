import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#544616] text-white pt-20 pb-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand (Logo & Slogan) - Spanning 4 cols */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h1 className="text-7xl font-bold tracking-tight mb-4">KATH</h1>
            <p className="text-sm tracking-[0.15em] font-light uppercase opacity-90">
              Kindling All The Hapiness
            </p>
          </div>

          {/* Column 2: Quick Links - Spanning 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Contact Us', 'Blogs'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-[#a68a2d] transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials - Spanning 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Socials</h3>
            <ul className="space-y-4">
              {['Facebook', 'Instagram', 'Whatsapp'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-[#a68a2d] transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter - Spanning 4 cols */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border border-white/30 rounded-sm px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#a68a2d] transition-colors"
              />
              <button 
                type="submit" 
                className="w-full bg-[#a68a2d] hover:bg-[#8e7526] text-white font-bold py-3 rounded-sm transition-colors duration-300 text-sm uppercase tracking-wide shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Optional Copyright Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} KATH Event Organizer. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;