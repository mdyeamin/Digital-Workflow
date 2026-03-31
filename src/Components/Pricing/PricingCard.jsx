import React from 'react';
import { FiCheck } from 'react-icons/fi';

const PricingCard = ({data}) => {
    const {plan,price,description,tag,isPopular,buttonText,features} = data;
    return (
          <div
            className={`
            relative flex flex-col ${isPopular && "bg-[#7922f8] text-white md:scale-105 "}  p-10 rounded-3xl border-2 border-[#7922f8]
            shadow-2xl shadow-[#7922f8]/40 text-left md:scale-95 
            transition-all duration-500 ease-out
            hover:shadow-3xl hover:shadow-[#7922f8]/60 hover:-translate-y-3
          `}
          >
            {/* Most Popular Badge */}
            {
                isPopular &&
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 px-5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-md">
              Most Popular
            </div>
            }

            <h3 className="text-2xl font-bold mb-2">{plan}</h3>
            <p className=" text-sm font-medium mb-6">
              {description}
            </p>

            <div className="flex items-baseline mb-8 ">
              <span className="text-5xl font-extrabold">${price}</span>
              <span className=" font-bold ml-1">/Month</span>
            </div>

            <ul className="space-y-4 mb-10 min-h-40 flex-1">
              
              {
                features.map((feature,index)=>(
                    <li
                  key={index}
                  className="flex items-center gap-3 text-sm  font-bold"
                >
                  <FiCheck className="text-xl shrink-0" /> {feature}
                </li>
                ))
              }
            </ul>

            {/* --- Start Pro Trial Button --- */}
            <button
  className={`
    w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs
    /* Initial State: White background & Purple text */
    ${!isPopular ? "bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)]": "bg-white"} 
  ${isPopular ? "text-[#4f38f6]":"text-white"}
    transition-all duration-500 ease-out
    
    
  ${!isPopular && "hover:bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)]"}
   
    hover:scale-[1.03] 
    
    
    active:scale-[0.98]
    shadow-xl shadow-black/10
  `}
>
  {buttonText}
</button>
          </div>
    );
};

export default PricingCard;