import { Package, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-photoroom.png";

export default function Footer() {
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about", route: "/aboutUs" },
    { name: "Products", id: "products", route: "/details" },
    { name: "Contact", id: "contact" },
  ];

    const whatsappNumber = "917356140302";   // MUST be in full international format
  const message = "Hello! I am interested in the O² personal care kit."; // No HTML tags!

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/02_hygeine?igsh=NXFub2FyeTBkNjNm",
    },
    { name: "WhatsApp", icon: FaWhatsapp, url: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  message
                )}`} ,
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => handleClick("home")}
            >
              <img
                src={logo}
                alt="O2 Logo"
                className="h-24 w-24 md:w-44 object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner for premium personal care essentials. We
              provide quality hygiene products that make your daily routine
              convenient and luxurious.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => navigate(link.route)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Location</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Vadakkencherry, Palakkad, Kerala, India - 678687
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-400">+91 7356140302</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-400">ohygieneO2@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} O <sup>2</sup>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
