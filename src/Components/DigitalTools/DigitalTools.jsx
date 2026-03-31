import React, { use } from "react";
import { FiCheck } from "react-icons/fi";
import DigitalTool from "../DigitalTool/DigitalTool";

const DigitalTools = ({ digiToolsFetch }) => {
  const digiToolsData = use(digiToolsFetch).data;
  return (
    <section className="py-16 px-4 bg-white">
      {/* === Header Part === */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base font-medium">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* --- Tab Switcher --- */}
        <div className="flex items-center justify-center mt-8">
          <div className="inline-flex items-center p-1 bg-white border border-gray-100 rounded-full shadow-sm">
            <button className="px-6 py-2 md:px-10 md:py-3 rounded-full bg-[#7922f8] text-white font-bold text-xs md:text-sm shadow-lg transition-transform active:scale-95">
              Products
            </button>
            <button className="px-6 py-2 md:px-10 md:py-3 rounded-full text-gray-400 font-bold text-xs md:text-sm hover:text-[#7922f8] transition-colors">
              Cart (2)
            </button>
          </div>
        </div>
      </div>
      {digiToolsData.map((data) => (
        <DigitalTool key={data.id} data={data} />
      ))}
    </section>
  );
};

export default DigitalTools;
