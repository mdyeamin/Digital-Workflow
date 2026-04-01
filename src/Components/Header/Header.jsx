import React from "react";
import banner from "../../assets/ai.jpg";
import { FiPlayCircle } from "react-icons/fi";
const Header = () => {
  return (
    <div className="bg-white text-[#1a1a1a] flex items-center px-6 lg:px-12 my-10 mt-30">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-5 lg:gap-12 items-center">
        <div className="space-y-4 md:space-y-8 text-center md:text-left">
          <div
            className="
            inline-flex items-center gap-2 p-1 px-3 
            bg-[#4f38f6]/10 text-[#4f38f6]
            font-bold uppercase tracking-widest text-xs
            rounded-full transition-all hover:bg-[#4f38f6]/20
          "
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4f38f6] opacity-75"></span>
              <span className="relative inline-flex h-full w-full rounded-full bg-[#7922f8] opacity-100"></span>
            </span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tighter">
            Supercharge Your <br className="hidden lg:block" />
            <br className="lg:hidden" />
            <span className="bg-linear-to-r from-[#4f38f6] via-[#7922f8] to-[#9315fa] bg-clip-text text-transparent">
              Digital Workflow
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start mt-8">
            
            <button
              className="
    
      text-white px-6 py-3 font-bold uppercase tracking-widest text-[10px] sm:text-xs
      rounded-full 
      bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)]
      bg-[length:200%_auto] bg-left
      transition-all duration-500 ease-out
      
    
      lg:px-8 lg:py-3.5 lg:text-sm
      
    
      hover:bg-right hover:scale-105 active:scale-95
      shadow-lg hover:shadow-[#7922f8]/40
    "
            >
              Explore Products
            </button>

            
            <button
              className="
      group relative px-6 py-2 font-bold uppercase tracking-widest text-[10px] sm:text-xs
      rounded-full bg-white transition-all duration-500 overflow-hidden
      flex items-center justify-center gap-2 sm:gap-3
      
      border-2 border-transparent
      [background-image:linear-gradient(white,white),linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)]
      [background-origin:border-box]
      [background-clip:padding-box,border-box]

      lg:px-8 lg:py-3.5 lg:text-sm

      hover:bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)]
      hover:bg-[length:200%_auto] hover:bg-right
      hover:scale-105 active:scale-95
      shadow-md hover:shadow-[#7922f8]/40
    "
            >
              <FiPlayCircle
                className="
        text-lg lg:text-xl relative z-10
        text-[#7922f8] 
        group-hover:text-white transition-colors duration-500
      "
              />

              <span
                className="
        relative z-10
        bg-linear-to-r from-[#4f38f6] via-[#7922f8] to-[#9315fa]
        bg-clip-text text-transparent
        group-hover:text-white transition-all duration-500
      "
              >
                Watch Demo
              </span>
            </button>
          </div>
        </div>

        <div className="relative group p-4 ">
          {/* <div className=" transition-opacity group-hover:opacity-100 group-hover:shadow-[0_0_20px_0_rgba(34,211,238,0.3)]"></div> */}

          <div className="relative aspect-square overflow-hidden flex items-center justify-center ">
            <img
              src={banner}
              alt="AI Technology and Human Hand Interaction"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
