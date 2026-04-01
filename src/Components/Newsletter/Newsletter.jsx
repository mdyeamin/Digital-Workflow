import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-10 ">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Ready to supercharge 
              your workflow
            </h2>
            <p className="text-white/80 font-medium text-lg max-w-xl text-center">
              Join 10,000+ creators and developers who are already using our
              premium tools to build the future.
            </p>
   
          </div>

          
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <button
              className="
              w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-[#7922f8] 
              font-bold uppercase tracking-widest text-sm
              transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl
            "
            >
              Get Started Now
            </button>
            <button
              className="
              w-full sm:w-auto px-10 py-5 rounded-2xl border-2 border-white text-white 
              font-bold uppercase tracking-widest text-sm
              transition-all duration-300 hover:bg-white hover:text-[#7922f8]
            "
            >
              View Demo
            </button>

          </div>
            <p className="text-white/80 font-medium text-lg max-w-xl text-center">
              14-day free trial • No credit card required • Cancel anytime
            </p>
   
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
