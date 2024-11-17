import React from 'react';
import Link from 'next/link';

const Hero   = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-900/20" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
          The Future of
          <br />
          The Next-Gen Chatbot
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
          Meet Aidy, the next-gen AI chatbot designed to enhance conversations with intuitive responses,
          seamless integration, and powerful automation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="#"
            className="px-8 py-4 bg-[#CCFF00] text-black font-semibold rounded-full hover:bg-[#BBEE00] transition-colors duration-300 flex items-center justify-center gap-2 text-lg min-w-[200px]"
          >
            Get Started
            <span className="text-xl">→</span>
          </Link>
          <Link 
            href="#"
            className="px-8 py-4 border border-white text-white rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center justify-center text-lg min-w-[200px]"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;