import { products } from "../data/products";
import o2 from "../assets/images/o2.png";
import { ArrowLeft } from "lucide-react";

export default function ProductDetail() {
  const kitImage =
    "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1600";

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Complete Kit Details
        </h2>

        {/* Kit Image */}
        <div className="rounded-2xl overflow-hidden mb-16 flex justify-center">
          <img
            src={o2}
            alt="Complete Kit"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* All Products */}
        <div className="space-y-20">
          {products.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-xl shadow-lg p-6 md:p-8 bg-white"
              style={{ marginBottom: "2rem" }}
            >
              {/* Image */}
              <div
                className={`
          rounded-xl overflow-hidden border border-gray-300 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg
          flex items-center justify-center bg-white
          ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}
        `}
              >
                <div className="w-full aspect-video flex items-center justify-center bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain p-2"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={index % 2 !== 0 ? "md:order-1" : "md:order-2"}>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  {item.name}
                </h3>

                <p className="text-lg text-emerald-600 font-medium mb-4">
                  {item.description}
                </p>

                <p className="text-gray-700 leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/"
          className="flex items-center 
                      justify-center md:justify-start 
                      bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition  
                      w-fit mx-auto md:mx-0 mt-8 text-sm"
        >
          <ArrowLeft className="mr-2 mt-[3px] md:mt-[0px] " />
          Back
        </a>
      </div>
    </div>
  );
}
