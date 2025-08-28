import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Hamburger icons

const linkHover = {
  whileHover: {
    color: "#fff",
    textShadow: "0 0 8px #ffffff, 0 0 20px #a67cff",
    scale: 1.05,
  },
  transition: { duration: 0.3 },
};

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <motion.nav
      className="bg-[#5C10C0] text-white shadow-lg fixed top-0 left-0 w-full z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/logo1-1.svg"
            alt="Astrology Logo"
            className="h-10 mr-3 drop-shadow-lg"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {links.map((link, idx) => {
            const isActive = location.pathname === link.path;

            return (
              <motion.li
                key={idx}
                {...linkHover}
                className={`cursor-pointer py-1 ${
                  isActive ? "text-white font-bold" : "text-white/80"
                }`}
              >
                <Link to={link.path}>{link.name}</Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#4B0FA0] px-6 py-4 space-y-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, idx) => {
              const isActive = location.pathname === link.path;

              return (
                <motion.div
                  key={idx}
                  {...linkHover}
                  className={`block text-lg cursor-pointer ${
                    isActive ? "text-white font-bold" : "text-white/80"
                  }`}
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  <Link to={link.path}>{link.name}</Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
