import React from 'react';

const CTASection = () => {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#1a1a1a] rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden group">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/fa8073312e772a6fbf1c0ec2c2f307b5.jpg" 
              alt="Background" 
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#a68a2d]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:bg-[#a68a2d]/10 transition-colors duration-700"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#a68a2d]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl group-hover:bg-[#a68a2d]/10 transition-colors duration-700"></div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Ready to Plan Your <span className="text-[#a68a2d]">Dream Event?</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto relative z-10">
            Let us handle the details while you enjoy the moment. Contact us today to discuss your vision.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#a68a2d] hover:bg-[#8e7526] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 uppercase tracking-widest text-sm shadow-lg shadow-[#a68a2d]/20 relative z-10"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;