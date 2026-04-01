
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
  <li key={nav.id} className="list-none group transition-all duration-500">
  <a
    href={nav.url}
    className="
      relative block py-3 px-8 
      bg-white text-black 
      font-bold uppercase tracking-widest text-xs lg:text-sm
      transition-all duration-300
      
      hover:text-[#4f38f6]
      
      md:inline-block md:py-0 md:px-4 md:bg-transparent
      
      md:after:content-[''] 
      md:after:absolute 
      md:after:-bottom-0.5 md:after:left-0 
      md:after:w-full md:after:h-[4px] 
      md:after:bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)]
      md:after:transform md:after:scale-x-0 
      md:after:origin-left
      md:after:transition-transform md:after:duration-500
      md:hover:after:scale-x-100
    "
  >
    {nav.name}
  </a>
</li>
));

const NavBar = ({ cart,menu, setMenu }) => {
  
  return (
    <>
      <div className="shadow w-full fixed top-0 z-20 bg-white">
        <div className="mx-5">
          <div className="max-w-7xl mx-auto flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <button onClick={() => setMenu(!menu)}>
                {menu ? (
                  <IoCloseSharp className="md:hidden text-xl" />
                ) : (
                  <GiHamburgerMenu className="md:hidden text-xl  " />
                )}
              </button>

              <ul
                className={`md:hidden absolute top-20 ${menu ? "left-0" : "-left-50"} duration-500 space-y-2 shadow-md border border-gray-300 bg-white z-10`}
              >
                {navLinks}
              </ul>

              <h4 className="text-xl lg:text-4xl font-bold bg-linear-to-r from-[#4f38f6] via-[#7922f8] to-[#9315fa] bg-clip-text text-transparent">
                DigiTools
              </h4>
            </div>
            <ul className=" hidden md:flex items-center">{navLinks}</ul>
            <div className="flex items-center gap-3 ">
              <div className="relative inline-flex items-center p-2 group cursor-pointer">
                <FiShoppingCart className="text-2xl transition-transform group-hover:scale-110" />

                {cart.length > 0 && (
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
                    {cart.length}
                  </span>
                )}
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
