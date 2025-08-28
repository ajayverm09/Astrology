import React from "react";
import { motion } from "framer-motion";

const PricingPlan = () => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-[#110027] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Pricing Plan
        </motion.h2>

        {/* Decorative divider */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut", delay: 0.3 }}
        >
          <img
            src="https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/08/divider-1-1.svg"
            alt="Decorative divider"
            className="h-6"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="max-w-xl mx-auto mb-12 text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut
          labore etesde dolore magna aliquapsendisse and the gravida.
        </motion.p>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, y: -10 }}
            className="border border-gray-700 rounded-2xl hover:bg-[#5C10C0] p-8 flex flex-col items-center space-y-6 shadow-lg transition-all"
          >
            <motion.img
              src="https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/pricing1.svg"
              alt="Basic Plan Icon"
              className="w-16 h-16"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <div className="text-4xl font-bold flex items-baseline space-x-1">
              <span>10</span>
              <span className="text-xl">$</span>
            </div>
            <h3 className="text-xl font-serif font-semibold">Basic Plan</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Ask One Question</li>
              <li>Half-Hour Reading</li>
              <li>Newborn / Child Reading</li>
              <li>Relationship Reading</li>
            </ul>
            <button className="mt-auto bg-purple-700 px-6 py-2 rounded-lg text-white font-semibold hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-800 duration-300">
              Choose Now
            </button>
          </motion.div>

          {/* Standard Plan - Highlighted */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.08, y: -12 }}
            className="bg-purple-700 rounded-2xl p-8 flex flex-col items-center space-y-6 text-white shadow-xl relative overflow-hidden"
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 blur-2xl"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ repeat: Infinity, duration: 5 }}
            />
            <motion.img
              src="https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/pricing2.svg"
              alt="Standard Plan Icon"
              className="w-16 h-16 relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <div className="text-4xl font-bold flex items-baseline space-x-1 relative z-10">
              <span>45</span>
              <span className="text-xl">$</span>
            </div>
            <h3 className="text-xl font-serif font-semibold relative z-10">
              Standard Plan
            </h3>
            <ul className="text-purple-200 space-y-2 text-sm relative z-10">
              <li>Ask One Question</li>
              <li>Half-Hour Reading</li>
              <li>Newborn / Child Reading</li>
              <li>Relationship Reading</li>
            </ul>
            <button className="mt-auto bg-[#110027] px-6 py-2 rounded-lg text-white font-semibold hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-800 duration-300 relative z-10">
              Choose Now
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, y: -10 }}
            className="border border-gray-700 rounded-2xl p-8 hover:bg-[#5C10C0] flex flex-col items-center space-y-6 shadow-lg transition-all"
          >
            <motion.img
              src="https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/pricing3.svg"
              alt="Premium Plan Icon"
              className="w-16 h-16"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <div className="text-4xl font-bold flex items-baseline space-x-1">
              <span>55</span>
              <span className="text-xl">$</span>
            </div>
            <h3 className="text-xl font-serif font-semibold">Premium Plan</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Ask One Question</li>
              <li>Half-Hour Reading</li>
              <li>Newborn / Child Reading</li>
              <li>Relationship Reading</li>
            </ul>
            <button className="mt-auto bg-purple-700 px-6 py-2 rounded-lg text-white font-semibold hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-800 duration-300">
              Choose Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
