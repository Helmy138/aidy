import React from "react";

interface TestimonialProps {
  quote: string;
  rating: number;
  name: string;
  title: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote:
      "Aidy has greatly enhanced client interactions. Its intuitive design and fast, accurate responses streamlined onboarding.",
    rating: 5,
    name: "Brooklyn Simmons",
    title: "CEO of Wednesday",
  },
  {
    quote:
      "Aidy's knack for effortlessly managing complex interactions is truly impressive. It's much more than just a simple support tool.",
    rating: 5,
    name: "Cameron Williamson",
    title: "Co-founder of Monday",
  },
  {
    quote:
      "This chatbot has greatly enhanced our customer service with quick, highly effective responses and increased customer satisfaction.",
    rating: 4,
    name: "Leslie Alexander",
    title: "Director of Saturday",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-black text-white p-10">
      <div className="text-center mb-10">
        <span className="text-green-400 font-semibold text-lg">
          Customer Reviews
        </span>
        <h1 className="text-4xl font-bold mt-2">What Our Clients Say</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col space-y-4"
          >
            <div className="text-green-400 text-3xl">“</div>
            <p className="text-lg text-gray-300">{testimonial.quote}</p>
            <div className="flex space-x-1 text-yellow-400">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-2xl ${
                    i < testimonial.rating ? "text-yellow-400" : "text-gray-600"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="text-white font-semibold">{testimonial.name}</div>
            <div className="text-gray-400">{testimonial.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};  

export default Testimonials;
