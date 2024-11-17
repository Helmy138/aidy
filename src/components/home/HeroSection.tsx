import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Logo Section */}
      <div className="absolute top-8 left-8">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/assets/logo-ai.jpg"
              alt="logo ai"
              width={32}
              height={32}
              className="text-lime-400"
            />
          </div>
          <span className="text-2xl font-bold">Aidy</span>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="absolute top-8 right-8 flex gap-6">
        <Link href="#" className="hover:text-lime-400 transition-colors">
          <FaFacebook size={24} />
        </Link>
        <Link href="#" className="hover:text-lime-400 transition-colors">
          <FaTwitter size={24} />
        </Link>
        <Link href="#" className="hover:text-lime-400 transition-colors">
          <FaInstagram size={24} />
        </Link>
        <Link href="#" className="hover:text-lime-400 transition-colors">
          <FaYoutube size={24} />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Experience the Future
          <br />
          of AI With Aidy
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Join millions and upgrade to Aidy today to feel the difference!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#"
            className="px-8 py-3 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-500 transition-colors flex items-center gap-2"
          >
            Get Started
            <span className="text-xl">→</span>
          </Link>
          <Link
            href="#"
            className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
