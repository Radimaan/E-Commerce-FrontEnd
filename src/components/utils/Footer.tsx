import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Bot
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#16066c] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Bot size={28} className="text-[#f3d9ff]" />
            <h2 className="text-2xl font-bold">
              Smart<span className="text-[#f3d9ff]">Market</span>
            </h2>
          </div>
          <p className="text-gray-300 text-sm">
            AI-powered smart supermarket system that allows customers to
            negotiate prices, earn points, and enjoy a smarter shopping
            experience.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">AI Deals</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              Hargeisa, Somaliland
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              +252 63 0000000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              info@smartmarket.com
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4">
            <Facebook className="hover:text-[#f3d9ff] cursor-pointer" />
            <Twitter className="hover:text-[#f3d9ff] cursor-pointer" />
            <Instagram className="hover:text-[#f3d9ff] cursor-pointer" />
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} SmartMarket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
