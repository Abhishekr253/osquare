import React from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import o2 from "../assets/images/o2.png"; // your kit image

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 flex flex-col items-center space-y-16">
      {/* Heading */}
      <div className="flex items-center mb-12 mt-4">
        <Sparkles className="h-8 w-8 text-emerald-600 mr-2" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          About Us
        </h1>
      </div>

      {/* About Us Main Content */}
      <div className="w-full max-w-5xl mx-auto px-4 text-gray-700 space-y-6 leading-relaxed text-base sm:text-lg md:text-xl">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          Your Comfort, Simplified
        </h2>

        <p>
          Welcome to{" "}
          <strong>
            o<sup>2 </sup>
          </strong>
          !
          <br />
          <br />
          We believe that feeling fresh, comfortable, and prepared is
          non-negotiable, whether you are traveling across the globe or just
          stepping into a new environment. Our mission is to eliminate the small
          anxieties that come with being away from home, ensuring you have the
          necessities for pristine personal hygiene and convenience.
        </p>

        {/* Centered O2 image */}
        <div className="flex justify-center my-10">
          <img
            src={o2}
            alt="O2 Kit"
            className="w-auto max-w-[380px] object-contain rounded-xl shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          The Idea Behind the Kit
        </h2>

        <p>
          We recognized a common gap: many kits miss critical items for true
          comfort and peace of mind. That’s why we meticulously designed our
          kits to be complete hygiene and comfort solutions. We don't just
          include the basics like toothbrushes and shower gel; we include items
          that enhance your well-being, such as wet wipes, handwash, and
          hygienic toilet seat covers and tissues.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">
          What Makes Our Kits Essential?
        </h2>

        <p>
          <strong>Complete Hygiene:</strong> Every kit is a standalone hygiene
          station, featuring items from handwash to toothpaste and a comb, so
          you're always ready.
        </p>

        <p>
          <strong>Ultimate Comfort:</strong> We include thoughtful additions
          like a shower cap and toilet seat covers to ensure maximum personal
          comfort and cleanliness, wherever you are.
        </p>

        <p>
          <strong>Effortless Travel:</strong> Our kits are perfectly sized,
          pre-packed, and ready for any destination or emergency, taking the
          stress out of packing and preparation.
        </p>

        <p>
          With{" "}
          <strong>
            o<sup>2 </sup>
          </strong>
          , you no longer have to worry about the small necessities. We package
          the essentials, so you can enjoy every moment feeling confident,
          clean, and completely at ease.
        </p>

        <p className="font-semibold text-center text-emerald-700 text-xl mt-6">
          We provide the comfort. You explore the world.
        </p>

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
