import { useState } from "react";
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
  <li key={nav.id} className="md:border-none py-2 px-8 bg-gray-500">
    <a href={nav.url}>{nav.name}</a>
  </li>
));

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <>
      <div className="shadow w-full">
        <div className="mx-5 md:mx-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
            <div className="flex items-center gap-5">
              <button onClick={() => setMenu(!menu)}>
                {menu ? (
                  <IoCloseSharp className="md:hidden text-3xl" />
                ) : (
                  <GiHamburgerMenu className="md:hidden text-3xl  " />
                )}
              </button>

              <ul className={`md:hidden absolute top-15 ${menu ? "left-0":"-left-40"} duration-500 space-y-2 bg-gray-700`}>
                {navLinks}
                </ul>

              <h4 className="text-4xl font-bold bg-linear-to-r from-[#4f38f6] via-[#7922f8] to-[#9315fa] bg-clip-text text-transparent">
                DigiTools
              </h4>
            </div>
            <ul className="flex gap-8 hidden md:flex">{navLinks}</ul>
            <div className="buttons">
              <button>Click</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
