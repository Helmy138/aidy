'use client'

import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Aidy Chatbot?",
      answer:
        "Aidy is an AI-powered chatbot designed to help you achieve your goals and improve your productivity. It offers personalized information, reminders, and encouragement tailored to your specific needs.",
    },
    {
      question: "How does Aidy work?",
      answer: "Aidy uses advanced AI algorithms to assist you with tasks, answer your questions, and help you stay on track.",
    },
    {
      question: "What features does Aidy offer?",
      answer: "Features include task reminders, goal tracking, personalized suggestions, and 24/7 availability.",
    },
    {
      question: "Is my data safe with Aidy?",
      answer: "Yes, Aidy prioritizes your privacy and uses advanced encryption to ensure your data is secure.",
    },
    {
      question: "Who can benefit from using Aidy?",
      answer: "Anyone looking to improve productivity, stay organized, and achieve their goals can benefit from Aidy.",
    },
    {
      question: "Can I join with my team on Aidy?",
      answer: "Yes, Aidy supports team collaboration features to help you and your team work together efficiently.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-black text-white p-6 md:p-10 rounded-lg">
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">❓</div>
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <p className="text-gray-400">Your quick guide to common inquiries and solutions.</p>
      </div>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className={`flex justify-between items-center p-4 rounded-lg cursor-pointer ${
                activeIndex === index ? "bg-yellow-400 text-black" : "bg-gray-800"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-medium">{index + 1}. {faq.question}</h2>
              <span>{activeIndex === index ? "➖" : "➕"}</span>
            </div>
            {activeIndex === index && (
              <div className="mt-2 p-4 bg-gray-900 rounded-lg">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
