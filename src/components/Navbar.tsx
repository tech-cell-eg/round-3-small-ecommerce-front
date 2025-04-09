import { Link } from "react-router-dom";
import icon from "../assets/icons/Icon.png";
import icon2 from "../assets/icons/Icon.svg";
import Button from "../assets/icons/Button.png";
import Logo from "../assets/icons/Logo.png";
import { useState } from "react";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="w-full py-2 responsive-padding  bg-black text-[10px] md:text-xs flex items-center justify-center text-white">
        <p>Subscribe to our Newsletter For Latest Collections</p>
        <img src={icon} alt="Arrow Right" className="w-4 h-4 ml-2 text-black" />
      </div>
      <header className="w-full py-4 responsive-padding  bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Navbar links on larger screens */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-4 w-60 h-14">
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className={`px-6 py-3.5 text-[#656567] rounded-4xl border-1 border-[#ececec] ${
                  activeLink === "/"
                    ? "bg-gray-400 text-black"
                    : "bg-transparent"
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => handleLinkClick("/products")}
                className={`px-6 py-3.5  rounded-4xl bg-gray-200 border-1 border-[#ececec] ${
                  activeLink === "/products"
                    ? "bg-gray-400"
                    : "bg-transparent text-[#656567] "
                }`}
              >
                Products
              </Link>
            </nav>
          </div>

          {/* Cart logo and button for larger screens */}
          <div className="hidden md:flex items-center justify-end sm:justify-start">
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} alt="logo" className="w-15 h-15" />
            </Link>
          </div>

          {/* Navbar links and cart icon for mobile */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/" className="p-2 relative  ">
              <img src={Button} alt="Cart" className="w-15 h-15" />
            </Link>
            <Link
              to="/support"
              className="p-4 w-46 h-14 text-sm text-center font-medium rounded-4xl border-1 border-[#ececec]"
            >
              Contact Support
            </Link>
          </div>

          {/* Mobile layout - logo and button */}
          <div className="flex md:hidden items-center justify-between w-full">
            {/* Logo on the left */}

            <Link to="/" className="flex items-center gap-2 justify-start">
              <img src={Logo} alt="logo" className="w-10 h-10" />
            </Link>

            {/* Button on the right */}
            <div className="flex gap-3">
              <Link to="/" className="p-2 relative">
                <img src={Button} alt="Cart" className="w-11 h-11" />
              </Link>
              <button className=" text-white     hover:cursor-pointer hover:bg-gray-50 rounded-full p-2  ">
                <img src={icon2} alt="Menu" className="w-8.5 h-8.5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
