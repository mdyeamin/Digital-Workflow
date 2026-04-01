import React from "react";

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 bg-white rounded-4xl border-2 border-dashed border-gray-100">
      <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
        <span className="text-5xl opacity-50">🛒</span>
      </div>

      <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
        Your Cart is Empty
      </h3>
      <p className="text-gray-400 font-medium text-center max-w-70 mb-8">
        Looks like you haven't added any premium tools to your cart yet.
      </p>

      
      <button
        className="
    px-8 py-3 rounded-full text-white font-bold uppercase tracking-widest text-[10px]
    bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)]
    bg-[length:200%_auto] bg-left
    transition-all duration-500 ease-out
    hover:bg-right hover:scale-105 active:scale-95
    shadow-lg shadow-[#7922f8]/20
  "
      >
        Explore Products
      </button>
    </div>
  );
};

export default Empty;
