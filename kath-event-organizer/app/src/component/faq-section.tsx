"use client";

import React, { useState } from 'react';

const FAQSection = () => {
  // State untuk melacak pertanyaan mana yang sedang terbuka
  // null berarti semua tertutup
  const [activeIndex, setActiveIndex] = useState(0); 

  const faqs = [
    {
      question: "Lorem ipsum geming santai?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      question: "Lorem ipsum geming santai?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      question: "Lorem ipsum geming santai?",
      answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
    },
    {
      question: "Lorem ipsum geming santai?",
      answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
      question: "Lorem ipsum geming santai?",
      answer: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-[#a68a2d]"> {/* Background Emas */}
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
            Frequently Asked Questions Everything <br className="hidden md:block" />
            You Need To Know!
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-300
                  ${activeIndex === index 
                    ? 'bg-[#e5e7eb]' // Warna abu-abu saat aktif (mirip baris 1 di gambar)
                    : 'bg-[#fdfbf7] hover:bg-[#f3f4f6]' // Warna krem/putih saat tidak aktif
                  }
                `}
              >
                <span className="text-[#a68a2d] font-bold text-lg">
                  {faq.question}
                </span>
                
                {/* Icon (+ / -) with rotation animation */}
                <span className={`text-[#a68a2d] text-2xl font-light transform transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                  +
                </span>
              </button>

              {/* Answer Content (Collapsible) */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                  bg-[#fdfbf7]/90
                `}
              >
                <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;