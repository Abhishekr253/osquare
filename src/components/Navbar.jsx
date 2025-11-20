import { Menu, X, Package, Download } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import brochure from "../assets/brochure.pdf";
import logo from "../assets/logo-photoroom.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "aboutUs", route: "/aboutUs" }, // updated
    { name: "Products", id: "products", route: "/details" }, // updated
  ];

  const whatsappNumber = "917356140302"; // MUST be in full international format
  const message = "Hello! I am interested in the O² personal care kit."; // No HTML tags!

  const handleClick = (item) => {
    setIsOpen(false);

    if (item.id === "home") {
      navigate("/");
    } else if (item.route) {
      navigate(item.route); // navigate to the route
    } else {
      onNavigate(item.id); // scroll to section
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 shadow-md z-50 bg-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">
          {/* LEFT — Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleClick("home")}
          >
            <img
              src={logo}
              alt="O2 Logo"
              className="h-14 w-24 object-contain"
            />
          </div>

          {/* CENTER — Nav Items */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item)}
                className="text-black hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* RIGHT — Download Brochure */}
          <div className="hidden md:flex items-center">
            <a
              href={brochure}
              download="O2_Hygiene_Brochure.pdf"
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Get Brochure
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-40">
          <div className="bg-black/90 text-white backdrop-blur-md p-6 rounded-b-2xl shadow-xl animate-slideDown">
            {/* Nav Links */}
            <div className="space-y-4 mb-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item)}
                  className="block w-full text-left px-3 py-2 text-lg font-medium hover:text-emerald-400 transition"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Brochure Button */}
            <a
              href={brochure}
              download="O2_Hygiene_Brochure.pdf"
              className="w-full bg-emerald-600 hover:bg-emerald-700 px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-white font-semibold text-lg"
            >
              <Download className="h-5 w-5" />
              Get Brochure
            </a>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-6 opacity-90 h-12">
              <a
                href="https://www.instagram.com/02_hygeine?igsh=NXFub2FyeTBkNjNm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  message
                )}`}
                className="hover:text-emerald-400 text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
