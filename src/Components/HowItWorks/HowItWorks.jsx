import React from 'react';
import { FiPackage, FiUser, FiZap } from 'react-icons/fi';

const HowItWorks = () => {
    const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: <FiUser className="text-5xl text-[#7922f8]" />,
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs perfectly.",
      icon: <FiPackage className="text-5xl text-[#7922f8]" />,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately without delay.",
      icon: <FiZap className="text-5xl text-[#7922f8]" />,
    },
  ];
    return (
        <section className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* --- Section Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 font-medium max-w-lg mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* --- Steps Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              {/* Step Number Badge */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-linear-to-br from-[#4f38f6] to-[#9315fa] text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-purple-200">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className="w-24 h-24 rounded-full bg-purple-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default HowItWorks;