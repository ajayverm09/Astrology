import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const socials = [
    { id: 1, icon: <FaFacebookF />, url: "https://facebook.com" },
    { id: 2, icon: <FaTwitter />, url: "https://twitter.com" },
    { id: 3, icon: <FaInstagram />, url: "https://instagram.com" },
    { id: 4, icon: <FaLinkedinIn />, url: "https://linkedin.com" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div>
      <footer className="bg-[#12022F] text-white py-12 px-6 relative overflow-hidden">
        {/* Decorative gradient lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
          {/* Logo & Description */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img
              src="https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/logo1-1.svg"
              alt="Astrology Logo"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 mb-6 text-sm md:text-base">
              Astrologer is your trusted destination for astrology, horoscope
              readings.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socials.map(({ id, icon, url }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-400/10
                           hover:bg-violet-600 hover:shadow-lg hover:shadow-purple-500/40 hover:-translate-y-1 
                           transition-all duration-300"
                  aria-label={`Link to ${url}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold mb-2 border-b-2 border-purple-500 inline-block pb-1">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm md:text-base">
              <Link to="/about">
                <li className="flex items-center hover:text-white cursor-pointer gap-2 transition-colors">
                  <span className="text-purple-500">▣</span> About Us
                </li>
              </Link>
              <Link to="/blogs">
                <li className="flex items-center hover:text-white cursor-pointer gap-2 transition-colors">
                  <span className="text-purple-500">▣</span> Blog
                </li>
              </Link>
              <Link to="/contact">
                <li className="flex items-center hover:text-white cursor-pointer gap-2 transition-colors">
                  <span className="text-purple-500">▣</span> Contact Us
                </li>
              </Link>
            </ul>
          </motion.div>

          {/* Horoscope Forecasts */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold mb-2 border-b-2 border-purple-500 inline-block pb-1">
              Horoscope Forecasts
            </h3>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm md:text-base">
              <li className="flex items-center cursor-pointer hover:text-white gap-2 transition-colors">
                <span className="text-purple-500">▣</span> Horoscopes
              </li>
              <li className="flex items-center cursor-pointer hover:text-white gap-2 transition-colors">
                <span className="text-purple-500">▣</span> Gemstones
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold mb-2 border-b-2 border-purple-500 inline-block pb-1">
              Our Newsletter
            </h3>
            <p className="text-gray-400 mt-4 text-sm md:text-base">
              Subscribe to our newsletter and receive weekly astrological
              updates, personalized horoscope
            </p>

            {/* Email input with send button */}
            <div className="mt-6 relative max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email..."
                className="w-full rounded-md border border-gray-600 bg-[#1a0f44] py-3 px-4 pr-14 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md
   px-4 py-2 text-white font-semibold bg-purple-700 hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-800 hover:shadow-lg hover:shadow-purple-500/50 duration-300
   transition-all"
                aria-label="Subscribe"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuv4a-lvejiXWd7zQEPnS32yNo27GMSGqJA&s"
                  alt="Send"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Copyright */}
      <p className="bg-[#5C10C0] h-10 flex justify-center items-center text-center text-sm md:text-base py-2 text-white relative">
        Copyright © 2025-26 Astrology. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
