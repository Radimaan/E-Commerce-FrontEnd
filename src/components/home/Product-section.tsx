import React from "react";
import { ShoppingCart, Bot, Star } from "lucide-react";

const ProductSection: React.FC = () => {

  const ProductItems = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 19.99,
      rating: 4.8,
      image: "https://i.pinimg.com/736x/75/af/77/75af775c2565c429cd29cde46e253171.jpg",
    },
    {
      id: 2,
      name: "Hp Elitebook",
      price: 999.99,
      rating: 3.5,
      image: "https://i.pinimg.com/1200x/bc/92/0f/bc920f14dcb94368ecf3ba9510d3a5b5.jpg",
    },
    {
      id: 3,
      name: "Dell XPS",
      price: 89.99,
      rating: 4.9,
      image: "https://i.pinimg.com/736x/16/03/8f/16038f45852fb9253eda715da109ed79.jpg",
    },
    // Add more products as needed
  ];
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#16066c]">
            Featured Products
          </h2>
          <p className="mt-2 text-gray-600">
            Smart prices, AI negotiation, and quality products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Product Card */}
          {ProductItems.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">

            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-fill "
              />

              {/* Rating */}
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full flex items-center gap-1 text-sm">
                <Star size={16} className="text-yellow-500" />
                <span className="font-medium">{product.rating}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>

              <p className="text-[#570a5c] font-bold text-xl mt-1">
                ${product.price.toFixed(2)}
              </p>

              {/* Actions */}
              <div className="mt-5 flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#570a5c] text-white py-2.5 rounded-lg hover:bg-[#16066c] transition">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>

                <button className="flex items-center justify-center gap-2 border border-[#570a5c] text-[#570a5c] px-4 py-2.5 rounded-lg hover:bg-[#570a5c] hover:text-white transition">
                  <Bot size={18} />
                </button>
              </div>
            </div>

          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
