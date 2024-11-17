import React from "react";
import PageHeader from "@/components/Pricing/PageHeader";
import PricingComponent from "@/components/Pricing/PricingComponent";
import FAQ from "@/components/Pricing/Faq";

const page = () => {
  return (
    <div>
      <PageHeader />
      <PricingComponent />
      <FAQ />
    </div>
  );
};

export default page;

