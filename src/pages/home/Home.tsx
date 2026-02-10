import React from "react";
import HeroSection from "../../components/home/hero-section";
import { ArrowBigDown } from "lucide-react";
import ProductSection from "../../components/home/Product-section";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <HeroSection />
      <ArrowBigDown className="mx-auto mt-4 animate-bounce text-gray-500" size={32} />
      <ProductSection />
    </div>
  );
}
export default Home;