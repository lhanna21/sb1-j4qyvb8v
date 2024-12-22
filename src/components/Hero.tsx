import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 animate-gradient-x"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
          <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text animate-pulse">
            Light Up Your Event
          </span>
          <span className="block text-3xl sm:text-4xl mt-4 font-light">
            with Prestige Glow Hire
          </span>
        </h1>
        
        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          Transform your space with our stunning collection of LED furniture.
          Perfect for weddings, corporate events, and unforgettable parties.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full overflow-hidden shadow-[0_0_15px_rgba(219,39,119,0.5)] hover:shadow-[0_0_25px_rgba(219,39,119,0.7)] transition-all duration-300">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Collection
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button className="px-8 py-3 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:border-white/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}