import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../assets/icons/Button.png";
import icon from "../assets/icons/Icon.png";
import icon2 from "../assets/icons/Icon.svg";
import Logo from "../assets/icons/Logo.png";
import { useAppSelector } from "../redux/reduxHooks";
import { CartDropdown } from "./CartDropdown";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cart = useAppSelector((state) => state.cart);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const handleCartClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full py-2 responsive-padding  bg-black text-[10px] md:text-xs flex items-center justify-center text-white">
        <p>Subscribe to our Newsletter For Latest Collections</p>
        <img src={icon} alt="Arrow Right" className="w-4 h-4 ml-2 text-black" />
      </div>
      <header className="w-full py-4 responsive-padding bg-white border-b border-gray-200 sticky top-0 z-50">
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
            <button className="p-2 relative" onClick={handleCartClick}>
              <img src={Button} alt="Cart" className="w-15 h-15" />
              {/* cart counter */}
              {cart.length > 0 && (
                <div className="absolute top-0 right-0 size-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  {cart.length}
                </div>
              )}
              {isDropdownOpen ? (
                <div className="absolute top-20 right-0 z-10">
                  <CartDropdown />
                </div>
              ) : null}
            </button>
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
              <button
                className="p-2 relative cursor-pointer"
                onClick={handleCartClick}
              >
                <img src={Button} alt="Cart" className="w-11 h-11 " />
                <div className="absolute top-0 right-0 size-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  {cart.length}
                </div>
                {isDropdownOpen ? (
                  <div className="absolute top-20 -right-10 z-10">
                    <CartDropdown />
                  </div>
                ) : null}
              </button>
              <button
                className="text-white hover:cursor-pointer hover:bg-gray-50 rounded-2xl p-3"
                onClick={handleMenuClick}
              >
                <img src={icon2} alt="Menu" className="w-8.5 h-8.5" />
              </button>
              {isMenuOpen && (
                <div className="absolute top-20 right-0 bg-white shadow-md rounded-md z-10">
                  <ul className="flex flex-col">
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/support"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact Support
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
