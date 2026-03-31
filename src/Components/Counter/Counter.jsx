import React from "react";

const Counter = () => {
  return (
    <section className="w-full bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)] py-8 md:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 items-center text-center text-white relative">
          <div className="space-y-1 md:space-y-2 relative">
            <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
              50K+
            </h2>
            <p className="text-[8px] sm:text-xs md:text-lg font-medium opacity-80 tracking-widest uppercase">
              Users
            </p>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 md:h-16 w-[1px] bg-white/20"></div>
          </div>

          <div className="space-y-1 md:space-y-2 relative">
            <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
              200+
            </h2>
            <p className="text-[8px] sm:text-xs md:text-lg font-medium opacity-80 tracking-widest uppercase">
              Tools
            </p>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 md:h-16 w-[1px] bg-white/20"></div>
          </div>
          <div className="space-y-1 md:space-y-2">
            <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
              4.9
            </h2>
            <p className="text-[8px] sm:text-xs md:text-lg font-medium opacity-80 tracking-widest uppercase">
              Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
