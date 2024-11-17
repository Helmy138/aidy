import React from "react";
import Image from "next/image";

const Teams: React.FC = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8">Meet The Team</h2>
        <p className="text-lg leading-relaxed mb-8">
          Our team is a dynamic mix of engineers, designers, data scientists,
          and experts, all driven by a passion...
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="/assets/om.jpg"
                alt="Team Member 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">John</h3>
              <p className="text-gray-300">Lead Engineer</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="/assets/cewek.jpg"
                alt="Team Member 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">Gwen</h3>
              <p className="text-gray-300">UX Designer</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="/assets/guy.avif"
                alt="Team Member 3"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">Michael</h3>
              <p className="text-gray-300">Data Scientist</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teams;

