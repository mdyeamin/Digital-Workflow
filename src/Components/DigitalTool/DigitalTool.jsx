import React from "react";
import { FiCheck } from "react-icons/fi";

const DigitalTool = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto">
      

      {/* === Products Grid === */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* --- Single Card Start (Map This) --- */}
        <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
          {/* Best Seller Badge */}
          <div className="absolute top-6 right-6 px-4 py-1 rounded-full bg-orange-100 text-orange-500 text-[10px] font-bold uppercase tracking-widest">
            Best Seller
          </div>

          {/* Icon Box */}
          <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
            📝
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
            AI Writing Pro
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
            Generate high-quality content, blogs, and marketing copy in seconds
            with advanced AI.
          </p>

          {/* Pricing */}
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-3xl font-extrabold text-[#1a1a1a]">$29</span>
            <span className="text-gray-400 font-bold text-sm">/Mo</span>
          </div>

          {/* Features List */}
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-sm text-gray-600 font-bold">
              <FiCheck className="text-green-500 text-xl" />
              Unlimited AI generations
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-600 font-bold">
              <FiCheck className="text-green-500 text-xl" />
              50+ writing templates
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-600 font-bold">
              <FiCheck className="text-green-500 text-xl" />
              Grammar checker
            </li>
          </ul>

          {/* Buy Now Button (Your Gradient Design) */}
          <button
            className="
              w-full text-white py-4 font-bold uppercase tracking-widest text-xs
              rounded-2xl
              bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)]
              bg-[length:200%_auto] bg-left
              transition-all duration-500 ease-out
              hover:bg-right hover:scale-[1.02] active:scale-95
              shadow-lg hover:shadow-[#7922f8]/40
            "
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalTool;
