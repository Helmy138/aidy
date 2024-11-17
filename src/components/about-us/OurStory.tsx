import { Fullscreen } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const OurStory = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8">Our Story</h2>
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-lg leading-relaxed mb-8">
              Our chatbot is built on the foundation of advanced AI and driven by a deeper purpose: helping people communicate, solve problems, and find the information they need with ease and understanding. As we continue to evolve, our focus remains on enhancing these interactions and bringing technology closer to the heart of human conversation.
            </p>
            <ul className="text-lg leading-relaxed space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Advanced AI Foundation
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Purpose-Driven
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Continuous Evolution
              </li>
            </ul>
          </div>
          <div className="flex-1 ml-8">
            <div className="relative w-full h-48 sm:h-64 lg:h-80">
              <Image
                src="/assets/ai1.avif"
                alt="ai"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex items-center mt-4">
              <div className="flex-1 flex items-center">
                <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center mr-2">
                  <Image
                    src="/assets/logo-ai.jpg"
                    alt="logo ai"
                    width={100}
                    height={100}
                    className="text-yellow-500"
                  />
                </div>
                <span className="font-medium">4.9</span>
              </div>
              <div className="flex-1 text-right">
                <span>Based on 420 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;