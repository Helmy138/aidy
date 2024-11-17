import React from "react";
import Image from "next/image";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Marque from "@/components/home/Marque";
import CompanyFeature from "@/components/home/CompanyFeature";
import Category from "@/components/home/Category";
import HeroSection from "@/components/home/HeroSection";

const page = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Image src="/image1.avif" alt="logo" width={1500} height={1000} />
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-8">
          Trusted by Global Industry Leaders
        </h2>
        <Marque />
        <CompanyFeature />
        <Category />
        <HeroSection/>
      </div>
    </div>
  );
};

export default page;
