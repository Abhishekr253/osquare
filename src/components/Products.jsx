import { products } from "../data/products";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Products() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleViewDetails = () => {
    navigate("/details");
  };

  return (
    <div ref={containerRef}>
      <section
        id="products"
        className="relative py-20 bg-gradient-to-br from-emerald-50 to-teal-50 min-h-[140vh]"
      >
        <div className="sticky max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore each product in our premium kit
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white p-3">
                  <div className="h-60 overflow-hidden rounded flex items-center justify-center bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-center text-sm font-semibold text-gray-900 mt-3 line-clamp-2">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleViewDetails}
              className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
            >
              <span>View More Details</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
