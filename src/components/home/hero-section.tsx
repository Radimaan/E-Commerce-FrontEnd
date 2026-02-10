import React from "react";
import { BotMessageSquare, ShoppingCart } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="w-full h-[420px] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/b1/55/af/b155af78b8a4fe1a5361d8332e548296.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#570a5c]/90 to-[#16066c]/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            AI-Powered Smart Supermarket
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Negotiate prices with AI, earn reward points, and enjoy a smarter
            shopping experience.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="flex items-center gap-2 bg-white text-[#570a5c] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              <ShoppingCart />
              Start Shopping
            </button>

            <button className="flex items-center gap-2 border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#570a5c] transition">
              <BotMessageSquare />
              Try AI Negotiation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
