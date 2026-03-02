import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappNumber = "917356140302";
  const message =
    "Hello! I would like to place my order for the O² personal care kit.";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      
      {/* Always Bouncing Label */}
      <span
        className="
          mr-3 bg-gray-900 text-white text-sm px-4 py-2 rounded-full shadow-lg
          animate-bounce
        "
      >
        🛒 Place Your Order Now!
      </span>

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Place Order on WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
      </button>
    </div>
  );
}