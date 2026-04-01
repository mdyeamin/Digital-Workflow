import React from "react";
import { FiCheck } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";

const DigitalTool = ({ data, cart, setCart }) => {
    const {name,tag,icon,description,price,features,tagBg,tagText}= data;
    


  const handleBuyNow = (data) => {
     const isCart =  cart.some(item=>item.id === data.id)
     
     !isCart && setCart([...cart,data]);
     !isCart && toast.success(`${data.name} added successfully `);
     isCart && toast.warning(`${data.name} card already added`);
    
  };
  return (

    <div className="flex flex-col bg-white border border-gray-100 rounded-4xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
      
      <div className={`absolute top-6 right-6 px-4 py-1 rounded-full ${tagBg} ${tagText} text-[10px] font-bold uppercase tracking-widest`}>
        {tag}
      </div>

      
      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      
      <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">{name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
        {description}
      </p>

      
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-3xl font-extrabold text-[#1a1a1a]">
          ${price}
        </span>
        <span className="text-gray-400 font-bold text-sm">/Mo</span>
      </div>

      
      <ul className="space-y-4 mb-10 flex-1">
        {
        features.map((feature,index)=>(

        <li key={index} className="flex items-center gap-3 text-sm text-gray-600 font-bold">
          <FiCheck className="text-green-500 text-xl" />
          {feature}
        </li>
        ))
        }
        
      </ul>

      {/* Buy Now Button (Your Gradient Design) */}
      <button
        onClick={() => handleBuyNow(data)}
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
        {cart.some(item=>item.id === data.id)? <span className="flex items-center justify-center gap-1">
      <TiTick className="text-xl" /> Added to Cart
    </span> :"Buy Now"}

      </button>
    </div>
  );
};

export default DigitalTool;
