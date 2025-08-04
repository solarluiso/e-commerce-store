import React from "react";

const HeroSection = ({ onExploreClick }) => (
  <section
    className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: `
    radial-gradient(circle at center, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%),
    url('/homepage/hero.jpg')
  `,
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50" />
    <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-4">
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-400 mb-4 leading-tight">
        Mindful Living Starts Here
      </h1>
      <p className="text-center text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-xl">
        Discover the latest trends in lifestyle essentials.
      </p>
      <button
        onClick={onExploreClick}
        className="px-6 py-3 sm:px-8 sm:py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full text-base sm:text-lg md:text-xl font-semibold shadow-lg transition"
      >
        Explore Categories ↓
      </button>
    </div>
  </section>
);

export default HeroSection;
