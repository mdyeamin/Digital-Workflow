import React from "react";
import { toast } from "react-toastify";

const Cart = ({ item, cart, setCart }) => {
  const handleRemove = (item) => {
    const deleteItem = cart.filter((carditem) => carditem.id !== item.id);
    setCart(deleteItem);
    toast.success(`${item.name} removed`)
  };

  return (
    <div className="flex items-center justify-between p-2 md:p-6 bg-gray-50/50 rounded-2xl border border-gray-50 transition-hover hover:border-gray-200">
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
          {item.icon}
        </div>
        <div>
          <h3 className="font-bold text-[#1a1a1a] text-lg">{item.name}</h3>
          <p className="text-gray-400 font-bold text-sm">${item.price}</p>
        </div>
      </div>
      <button
        onClick={() => handleRemove(item)}
        className="text-pink-500 font-bold text-sm hover:text-pink-600 cursor-pointer transition-colors"
      >
        Remove
      </button>
    </div>
  );
};

export default Cart;
