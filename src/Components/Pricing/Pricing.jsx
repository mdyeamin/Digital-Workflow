import React, { use } from "react";
import PricingCard from "./PricingCard";

const Pricing = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise).data;

  return (
    <section className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 font-medium max-w-lg mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {pricingData.map((data) => (
            <PricingCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
