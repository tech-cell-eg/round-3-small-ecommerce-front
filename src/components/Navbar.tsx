import { Link } from "react-router-dom";
import icon from "../assets/icons/Icon.png";
import Button from "../assets/icons/Button.png";
import Logo from "../assets/icons/Logo.png";

export const Navbar = () => {
  return (
    <>
      <div className="w-full py-2 px-4 md:px-8 bg-black text-[10px] md:text-xs flex items-center justify-center text-white">
        <p>Subscribe to our Newsletter For Latest Collections</p>
        <img src={icon} alt="Arrow Right" className="w-4 h-4 ml-2 text-black" />
      </div>
      <header className="w-full py-4 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Navbar links on larger screens */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-4 w-60 h-14">
              <Link
                to="/"
                className="px-6 py-3.5 text-[#656567] rounded-4xl border-1 border-[#ececec]"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="px-6 py-3.5 text-black rounded-4xl bg-gray-200 border-1 border-[#ececec]"
              >
                Products
              </Link>
            </nav>
          </div>

          {/* Cart logo and button for larger screens */}
          <div className="hidden md:flex items-center justify-end sm:justify-start">
            <Link to="/cart" className="flex items-center gap-2">
              <img src={Logo} alt="Cart" className="w-10 h-10" />
            </Link>
          </div>

          {/* Navbar links and cart icon for mobile */}
          <div className="hidden md:flex items-center gap-3 w-60 h-14">
            <Link to="/cart" className="p-2 relative">
              <img src={Button} alt="Cart" className="w-8 h-8" />
            </Link>
            <Link
              to="/contact"
              className="p-3 text-sm font-medium rounded-4xl border-1 border-[#ececec]"
            >
              Contact Support
            </Link>
          </div>

          {/* Mobile layout - logo and button */}
          <div className="flex md:hidden items-center justify-between w-full">
            {/* Logo on the left */}

            <Link to="/cart" className="flex items-center gap-2 justify-start">
              <img src={Logo} alt="Cart" className="w-10 h-10" />
            </Link>

            {/* Button on the right */}
            <div className="flex gap-3">
              <Link to="/cart" className="p-2 relative">
                <img src={Button} alt="Cart" className="w-6 h-6" />
              </Link>
              <button className="p-1 text-white bg-black rounded-full">
                <img src={icon} alt="Menu" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
