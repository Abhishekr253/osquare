import { Sparkles } from 'lucide-react';
// import o2 from '../assets/images/o2box.png';    // Desktop image
// import mobileBg from '../assets/images/mobileBg.png'; // Add your mobile BG

export default function Banner({ title, subtitle, description }) {
  subtitle = subtitle || "Your Premium Personal Care Kit";
  description = description || "Experience luxury and convenience with our curated hygiene essentials.";

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden w-full">

      {/* Background Image for mobile & desktop */}
      <div
        className="
          absolute inset-0 
          bg-cover bg-center w-full h-full 
          overflow-hidden animate-zoomSlow
          
          bg-[url('/src/assets/images/o2.png')]   /* mobile by default */
          md:bg-[url('/src/assets/images/o2box.png')]   /* desktop override */
        "
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl w-full">
        <div className="flex justify-center mb-4">
          <Sparkles className="h-12 w-12 text-emerald-600" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {title || <>Welcome to O<sup>2</sup></>}
        </h1>
        <p className="text-lg md:text-xl text-white/90">{subtitle}</p>

        {description && (
          <p className="mt-2 text-white/80 px-2">{description}</p>
        )}
      </div>
    </div>
  );
}
