import React from "react";
import { motion } from "framer-motion";

const signs = [
  { name: "Aries", icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/ser1-1.svg" },
  { name: "Taurus", icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/ser2-1.svg" },
  { name: "Gemini", icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/ser33.svg" },
  { name: "Cancer", icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/ser3-1.svg" },
  { name: "Leo", icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/ser55.svg" },
  { name: "Virgo", icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/ser6.svg" },
  { name: "Libra", icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/ser7.svg" },
  { name: "Scorpio", icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/ser8.svg" },
  { name: "Sagittarius", icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/ser9.svg" },
  { name: "Capricorn", icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/ser10.svg" },
  { name: "Aquarius", icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/ser12.svg" },
  { name: "Pisces", icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/ser11.svg" },
];

export default function HoroscopeForecasts() {
  return (
    <div className="bg-[#140030] min-h-screen flex flex-col items-center px-6 py-16 text-center text-gray-300 font-serif">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-3xl md:text-4xl font-bold mb-4"
      >
        Horoscope Forecasts
      </motion.h1>

      {/* Decorative flourish */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mb-6 flex justify-center"
      >
        <img
          src="https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/08/divider-1-1.svg"
          alt="Divider"
          className="h-8 w-auto"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mb-12 text-sm max-w-md mx-auto leading-relaxed text-gray-400"
      >
        It is a long established fact that a reader will be distracted by the
        <br /> readable content of a page when looking at its layout.
      </motion.p>

      {/* Horoscope Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl w-full"
      >
        {signs.map((sign, index) => (
          <motion.div
            key={sign.name}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="group border border-gray-500 rounded-xl p-6 bg-[#1c003f] 
                       cursor-pointer transition-all duration-300 hover:border-purple-500 
                       hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-2"
          >
            <motion.img
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 1 }}
              src={sign.icon}
              alt={sign.name}
              className="mx-auto mb-4 w-14 h-14"
            />
            <h3 className="text-white font-semibold mb-4 text-lg">{sign.name}</h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-700 hover:bg-purple-600 text-white text-xs px-4 py-2 rounded transition-all"
            >
              Mar 21 - Apr 23
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
