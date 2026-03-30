import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
const navItems = [
  { id: 1, name: "Products", url: "/products" },
  { id: 2, name: "Features", url: "/features" },
  { id: 3, name: "Pricing", url: "/pricing" },
  { id: 4, name: "Testimonials", url: "/testimonials" },
  { id: 5, name: "FAQ", url: "/faq" },
];
const navLinks = navItems.map((nav) => (
  <li key={nav.id} className="list-none group transition-all duration-300">
    <a
      href={nav.url}
      className="
      
      block py-3 px-8 
      bg-white text-black 
      font-bold uppercase tracking-widest text-sm
      border-b-2 border-transparent
      transition-all duration-300
      
      
      hover:text-[#4f38f6]
      
      group-hover:border-b-2 
      group-hover:border-[#9315fa]
      
      md:inline-block md:py-0 md:px-4
      md:bg-white md:text-black
      
      
      md:after:content-[''] md:after:absolute md:after:bottom-0 md:after:left-0 
      md:after:w-full md:after:h-0.5 
      md:after:bg-linear-to-r md:after:from-[#4f38f6] md:after:via-[#7922f8] md:after:to-[#9315fa]
      md:after:transform md:after:scale-x-0 md:hover:after:scale-x-100
      md:after:transition-transform md:after:duration-300
    "
    >
      {nav.name}
    </a>
  </li>
));

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="shadow w-full">
        <div className="mx-5">
          <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <button onClick={() => setMenu(!menu)}>
                {menu ? (
                  <IoCloseSharp className="md:hidden text-xl" />
                ) : (
                  <GiHamburgerMenu className="md:hidden text-xl  " />
                )}
              </button>

              <ul
                className={`md:hidden absolute top-20 ${menu ? "left-0" : "-left-50"} duration-500 space-y-2 shadow-md border border-gray-300`}
              >
                {navLinks}
              </ul>

              <h4 className="text-xl lg:text-4xl font-bold bg-linear-to-r from-[#4f38f6] via-[#7922f8] to-[#9315fa] bg-clip-text text-transparent">
                DigiTools
              </h4>
            </div>
            <ul className="flex hidden md:flex items-center">{navLinks}</ul>
            <div className="flex items-center gap-3 ">
              <div className="relative inline-flex items-center p-2 group cursor-pointer">
            
                <FiShoppingCart className="text-2xl transition-transform group-hover:scale-110" />

            
                <span
                  className={`
    absolute top-1 right-0 
    flex items-center justify-center 
    w-4 h-4 
    text-[10px] font-bold text-white
    bg-red-600 rounded-full
    border border-white/20
    animate-bounce
  `}
                >
                  2
                </span>
              </div>
              <p>Login</p>
              <button
                className="
                    text-white px-5 py-2 font-bold uppercase tracking-widest text-[10px]
                    rounded-full 
                    bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)]
                    bg-[length:200%_auto] 
                    bg-left
                    transition-all duration-500 ease-out
                    
                    md:px-4 md:py-2 md:text-xs
                    
                    lg:px-6 lg:py-3 lg:text-sm
                    
                    hover:bg-right
                    hover:scale-105 active:scale-95
                    shadow-lg hover:shadow-[#7922f8]/40
                "
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
