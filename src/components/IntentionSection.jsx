import { ShieldCheck, Smile, Sparkles } from "lucide-react";

export default function IntentionSection() {
  return (
    <section
      id="intention"
      className="relative py-20 bg-white"
      style={{ position: "relative", zIndex: 30 }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Our Intention & Commitment
        </h2>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
          At O<sup>2</sup>, our intention is simple —
          <span className="font-semibold text-emerald-600">
            to provide every customer with a premium hygiene kit
          </span>{" "}
          that brings freshness, comfort, and confidence wherever they are.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-emerald-100">
            <ShieldCheck className="mx-auto h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="font-semibold text-xl text-gray-900 mb-2">Quality First</h3>
            <p className="text-gray-600 text-sm">
              Every product in our kit is selected for safety, purity, and reliability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-teal-100">
            <Smile className="mx-auto h-12 w-12 text-teal-600 mb-4" />
            <h3 className="font-semibold text-xl text-gray-900 mb-2">Customer Comfort</h3>
            <p className="text-gray-600 text-sm">
              We focus on making you feel clean, confident, and stress-free – anytime, anywhere.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-emerald-100">
            <Sparkles className="mx-auto h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="font-semibold text-xl text-gray-900 mb-2">Premium Hygiene</h3>
            <p className="text-gray-600 text-sm">
              Your daily hygiene made luxurious with our curated essential kit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
