import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappNumber = "917356140302";   // MUST be in full international format
  const message = "Hello! I am interested in the O² personal care kit."; // No HTML tags!

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />

      {/* Text Label */}
      <span
        className="
          absolute right-full mr-3 top-1/2 -translate-y-1/2 
          bg-gray-900 text-white text-sm px-3 py-1 rounded-lg 
          opacity-0 translate-x-2 group-hover:opacity-100 
          group-hover:translate-x-0 transition-all duration-300
          whitespace-nowrap shadow-lg
        "
      >
        Click here to chat with us!
      </span>
    </button>
  );
}
