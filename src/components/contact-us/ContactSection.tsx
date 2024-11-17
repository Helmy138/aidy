import React from 'react';

const ContactSection: React.FC = () => {
 return (
   <div className="bg-black text-white py-20">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
       <div>
         <h2 className="text-4xl font-bold mb-8">Get in Touch With Us</h2>
         <p className="text-lg leading-relaxed mb-8">
           Here to Support You! Reach Out for Assistance, Feedback, or Questions.
         </p>
         <div className="space-y-4">
           <div className="flex items-center">
             <svg
               className="w-6 h-6 text-green-500 mr-2"
               viewBox="0 0 20 20"
               fill="currentColor"
             >
               <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
             </svg>
             <a href="tel:+12587705369" className="text-lg">
               +258 8770 5369
             </a>
           </div>
           <div className="flex items-center">
             <svg
               className="w-6 h-6 text-green-500 mr-2"
               viewBox="0 0 20 20"
               fill="currentColor"
             >
               <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
               <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
             </svg>
             <a href="mailto:contact@aidy.com" className="text-lg">
               contact@aidy.com
             </a>
           </div>
           <div className="flex items-center">
             <svg
               className="w-6 h-6 text-green-500 mr-2"
               viewBox="0 0 20 20"
               fill="currentColor"
             >
               <path
                 fillRule="evenodd"
                 d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                 clipRule="evenodd"
               />
             </svg>
             <span className="text-lg">8502 Preston Rd. Inglewood, Maine 98380</span>
           </div>
         </div>
       </div>
       <div>
         <h2 className="text-4xl font-bold mb-8">Get a quote</h2>
         <p className="text-lg leading-relaxed mb-8">
           Fill up the form and our Team will get back to you within 24 hours.
         </p>
         <form className="space-y-4">
           <input
             type="text"
             placeholder="Name"
             className="bg-gray-800 rounded-lg px-4 py-2 w-full"
           />
           <input
             type="email"
             placeholder="Email"
             className="bg-gray-800 rounded-lg px-4 py-2 w-full"
           />
           <input
             type="text"
             placeholder="Subject"
             className="bg-gray-800 rounded-lg px-4 py-2 w-full"
           />
           <textarea
             placeholder="Your Message"
             className="bg-gray-800 rounded-lg px-4 py-2 w-full resize-none"
             rows={4}
           ></textarea>
           <button
             type="submit"
             className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md w-full"
           >
             Send Message
           </button>
         </form>
       </div>
     </div>
   </div>
 );
};

export default ContactSection;