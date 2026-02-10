import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  ShoppingBag,
  Phone,
  LogIn,
  UserPlus,
  Bot,
  ShoppingCart
} from "lucide-react";

const Header: React.FC = () => {
  // Tusaale: tirada alaabta cart-ka
  const cartCount = 3;

  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Bot className="text-[#570a5c]" size={28} />
          <h1 className="text-2xl font-bold text-[#16066c]">
            Smart<span className="text-[#570a5c]">Market</span>
          </h1>
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="flex items-center gap-1 text-gray-600 hover:text-[#570a5c] transition">
            <Home size={18} />
            Home
          </Link>

          <Link to="/products" className="flex items-center gap-1 text-gray-600 hover:text-[#570a5c] transition">
            <ShoppingBag size={18} />
            Products
          </Link>

          <Link to="/contact" className="flex items-center gap-1 text-gray-600 hover:text-[#570a5c] transition">
            <Phone size={18} />
            Contact
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">

          {/* CART ICON */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="text-[#570a5c]" size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* AUTH BUTTONS */}
          <Link to="/login">
            <button className="flex items-center gap-1 border border-[#570a5c] text-[#570a5c] px-4 py-2 rounded-lg hover:bg-[#570a5c] hover:text-white transition">
              <LogIn size={18} />
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="flex items-center gap-1 bg-[#570a5c] text-white px-4 py-2 rounded-lg hover:bg-[#16066c] transition">
              <UserPlus size={18} />
              Sign Up
            </button>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
