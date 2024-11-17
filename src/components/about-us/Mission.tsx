import React from 'react';
import Image from 'next/image';

const Mission: React.FC = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8">Aidy's Mission is to Benefit All of Humanity</h2>
            <p className="text-lg leading-relaxed mb-8">
              We want Aidy to be the best chatbot ever built, with thousands of features that humanity has never even imagined.
            </p>
            <div className="flex justify-start space-x-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md">
                Get Started
              </button>
              <button className="bg-transparent hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-md border border-gray-700">
                Request a Demo
              </button>
            </div>
          </div>
          <div className="flex-1 ml-8 space-y-4">
            <div className="relative w-full h-48 sm:h-64 lg:h-80">
              <Image
                src="/assets/foto1.avif"
                alt="Robot on Laptop"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-full h-48 sm:h-64 lg:h-80">
              <Image
                src="/assets/foto2.avif"
                alt="Robot with Human"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-full h-48 sm:h-64 lg:h-80">
              <Image
                src="/assets/foto3.avif"
                alt="Robot with Human"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;