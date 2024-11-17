import React from "react";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: "💬", // Replace with an actual icon if available
    title: "Prompt Collection",
    description:
      "Spark creativity with a vast collection of prompts designed to ignite your imagination.",
  },
  {
    icon: "🧩",
    title: "Flexible Outputs",
    description:
      "Customize outputs by adjusting parameters, providing feedback, and refining the content.",
  },
  {
    icon: "⚡",
    title: "Instant Response",
    description:
      "Get real-time suggestions to keep the conversation going smoothly.",
  },
  {
    icon: "🌐",
    title: "Browser Extension",
    description:
      "Manage conversations, summarize web pages, and engage with PDFs effortlessly.",
  },
];

const Category: React.FC = () => {
  return (
    <div className="bg-black text-white p-10">
      <div className="text-center mb-10">
        <span className="text-green-400 font-semibold text-lg">Category</span>
        <h1 className="text-4xl font-bold mt-2">
          Discover Our Full Suite of Aidy
        </h1>
        <p className="text-gray-400 mt-2">
          The next-level chatbot assistant you need
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="text-green-400 text-3xl">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
