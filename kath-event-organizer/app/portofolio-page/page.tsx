"use client";

import React, { useState } from "react";
import Navbar from "../src/component/navbar";
import Footer from "../src/component/footer";
import CategoryFilter from "../src/component/category-filter";
import PortfolioShowcase from "../src/component/portofolio-showcase";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Gold Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/path-to-your-portfolio-header.jpg')", // Replace with your image path
          }}
        >
          {/* Gold Overlay */}
          <div className="absolute inset-0 bg-[#a68a2d]/80 mix-blend-multiply"></div>
        </div>

        {/* Centered Text */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold relative z-10">
          Our Portfolios.
        </h1>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-[#a68a2d] text-3xl md:text-4xl font-bold uppercase tracking-wide mb-12 text-center">
          Latest Projects
        </h2>

        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <PortfolioShowcase />
      </div>

    <Footer />
    </main>
  );
}