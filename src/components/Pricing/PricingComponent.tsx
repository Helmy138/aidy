import React from 'react';

const PricingComponent: React.FC = () => {
 return (
   <div className="bg-black text-white py-20">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <h2 className="text-4xl font-bold mb-8">Pricing</h2>
       <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
         <div className="bg-gray-800 rounded-lg overflow-hidden">
           <div className="p-6">
             <h3 className="text-2xl font-bold mb-2">Basic</h3>
             <p className="text-4xl font-bold mb-4">$24/month</p>
             <p className="mb-4">Ideal for sporadic sourcing</p>
             <ul className="space-y-2 mb-6">
               <li className="flex items-center">
                 <svg
                   className="w-5 h-5 text-green-500 mr-2"
                   viewBox="0 0 20 20"
                   fill="currentColor"
                 >
                   <path
                     fillRule="evenodd"
                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                     clipRule="evenodd"
                   />
                 </svg>
                 +20 Cutting-edge AI Models
               </li>
               <li className="flex items-center">
                 <svg
                   className="w-5 h-5 text-green-500 mr-2"
                   viewBox="0 0 20 20"
                   fill="currentColor"
                 >
                   <path
                     fillRule="evenodd"
                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                     clipRule="evenodd"
                   />
                 </svg>
                 Cognitive Assistant
               </li>
               {/* Other features */}
             </ul>
             <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md w-full">
               Request Now
             </button>
           </div>
         </div>
         <div className="bg-gray-800 rounded-lg overflow-hidden">
           <div className="p-6">
             <h3 className="text-2xl font-bold mb-2">Premium</h3>
             <p className="text-4xl font-bold mb-4">$36/month</p>
             <p className="mb-4">Ideal for those with minor to moderate use.</p>
             <ul className="space-y-2 mb-6">
               {/* Premium features */}
             </ul>
             <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-6 rounded-md w-full">
               Get Started
             </button>
           </div>
         </div>
         <div className="bg-gray-800 rounded-lg overflow-hidden">
           <div className="p-6">
             <h3 className="text-2xl font-bold mb-2">Ultimate</h3>
             <p className="text-4xl font-bold mb-4">$48/month</p>
             <p className="mb-4">Tailored for swift expansion</p>
             <ul className="space-y-2 mb-6">
               {/* Ultimate features */}
             </ul>
             <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md w-full">
               Get Started
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default PricingComponent;