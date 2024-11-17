import React from "react";
import FirstHeader from "@/components/about-us/FirstHeader";
import OurStory from "@/components/about-us/OurStory";
import Mission from "@/components/about-us/Mission";
import Teams from "@/components/about-us/Teams";

const page = () => {
  return (
    <div>
      <FirstHeader/>
      <OurStory />
      <Mission />
      <Teams/>
    </div>
  );
};

export default page;
