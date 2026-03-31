import React, { use } from "react";
import DigitalTool from "../DigitalTool/DigitalTool";
import Carts from "../Carts/Carts";

const DigitalTools = ({ digiToolsFetch, cart,setCart,products,setProducts }) => {

  const digiToolsData = use(digiToolsFetch).data;
  const handleProducts = () => {
    setProducts("Products");
  };

  const handleCart = () => {
    setProducts("Cart");
  };

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
            <button
              onClick={handleProducts}
              className={`px-6 py-2 md:px-10 md:py-3 rounded-full ${products === "Products" && "bg-[#7922f8] text-white font-bold text-xs md:text-sm shadow-lg transition-transform active:scale-95"} ${products === "Cart" && "text-gray-400 font-bold text-xs md:text-sm hover:text-[#7922f8] transition-colors"} cursor-pointer`}
            >
              Products
            </button>
            <button
              onClick={handleCart}
              className={`px-6 py-2 md:px-10 md:py-3 rounded-full ${products === "Cart" && "bg-[#7922f8] text-white font-bold text-xs md:text-sm shadow-lg transition-transform active:scale-95"} ${products === "Products" && "text-gray-400 font-bold text-xs md:text-sm hover:text-[#7922f8] transition-colors"} cursor-pointer`}
            >
              Cart 
              {
cart.length>0 && ` (${cart.length})`
              } 

            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {products === "Cart" ? 
        <Carts cart={cart} setCart={setCart} />
        :
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {digiToolsData.map((data) => (
            <DigitalTool key={data.id} data={data} cart={cart} setCart={setCart}/>
          ))}
        </div>
        }
      </div>
    </section>
  );
};

export default DigitalTools;
