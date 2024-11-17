import React from 'react'
import { FaCheck } from "react-icons/fa";

const CompanyFeature = () => {
  const features = [
    "Multi-Language Support",
    "Code Optimization and Refactoring",
    "Code Testing and Validation",
  ]
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Left Section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-[#1a1a1a] rounded-full">
            <span className="text-[#b4ff4c]">Feature</span>
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Clean and Efficient Code Generation
          </h1>

          <p className="text-lg text-gray-300">
            Boost your development speed with Aidy's clean and efficient code
            generation.
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-[#b4ff4c] rounded-full p-1">
                  <FaCheck className="text-black w-4 h-4" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Code Preview */}
        <div className="bg-[#1a1a1a] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-400">html</span>
          </div>
          <pre className="text-sm">
            <code className="text-gray-300">
              <span className="text-blue-400">{"<!DOCTYPE "}</span>
              <span className="text-pink-400">html</span>
              <span className="text-blue-400">{">"}</span>
              {"\n"}
              <span className="text-blue-400">{"<html "}</span>
              <span className="text-pink-400">lang</span>
              <span>=</span>
              <span className="text-green-400">"en"</span>
              <span className="text-blue-400">{">"}</span>
              {"\n  "}
              <span className="text-blue-400">{"<head>"}</span>
              {"\n    "}
              <span className="text-blue-400">{"<meta "}</span>
              <span className="text-pink-400">charset</span>
              <span>=</span>
              <span className="text-green-400">"UTF-8"</span>
              <span className="text-blue-400">{">"}</span>
              {"\n    "}
              <span className="text-blue-400">{"<meta "}</span>
              <span className="text-pink-400">name</span>
              <span>=</span>
              <span className="text-green-400">"viewport"</span>
              <span> content=</span>
              <span className="text-green-400">
                "width=device-width, initial-scale=1.0"
              </span>
              <span className="text-blue-400">{">"}</span>
              {"\n    "}
              <span className="text-blue-400">{"<title>"}</span>
              AI SaaS Web Application
              <span className="text-blue-400">{"</title>"}</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default CompanyFeature