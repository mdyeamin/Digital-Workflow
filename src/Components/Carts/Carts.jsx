import React from "react";
import Empty from "./Empty";
import Cart from "./Cart";
import { toast } from "react-toastify";

const Carts = ({ cart, setCart }) => {
  const cartTotal = cart.map((price) => price.price);
  const sum = cartTotal.reduce((a, b) => a + b, 0);


  const ProceedToCheckout = () => {
    (setCart([]), toast.success("Checkout all Done!"));
  };
  return (
    <>
      {cart.length === 0 ? (
        <Empty />
      ) : (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          {/* Main Cart Container */}

          <div className="w-full max-w-4xl bg-white rounded-4xl shadow-sm border border-gray-100 p-8 md:p-12">
            {/* Title */}
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">
              Your Cart
            </h2>

            {/* Cart Items List */}
            <div className="space-y-4 mb-10">
              {/* Item 1: AI Writing Pro */}

              {cart.map((item) => (
                <Cart key={item.id} item={item} cart={cart} setCart={setCart} />
              ))}
            </div>

            {/* Footer Area */}
            <div className="space-y-6">
              <div className="flex justify-between items-center px-2">
                <span className="text-gray-400 font-bold">Total:</span>
                <span className="text-3xl font-black text-[#1a1a1a]">
                 ${sum}
                </span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={ProceedToCheckout}
                className="
            w-full py-5 rounded-2xl text-white font-bold uppercase tracking-widest text-sm
            bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)]
            bg-[length:200%_auto] bg-left
            transition-all duration-500 ease-out
            hover:bg-right hover:scale-[1.01] active:scale-[0.98]
            shadow-xl shadow-[#7922f8]/20
          "
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carts;
