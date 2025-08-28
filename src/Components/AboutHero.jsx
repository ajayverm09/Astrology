import { motion } from "framer-motion";

const AboutBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16 md:py-24 lg:py-32"
      style={{
        backgroundImage:
          "url('https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/bg10-1.jpg')",
      }}
    >
      {/* Overlay to dim the background */}
      <div className="absolute inset-0 bg-[#4b1fa6]/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Us
        </motion.h1>

        {/* Animated Breadcrumb */}
        <motion.nav
          aria-label="breadcrumb"
          className="inline-flex items-center bg-white/20 rounded-full px-5 py-2 text-gray-100 text-sm sm:text-base backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <a
            href="/"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            Home
          </a>
          <span className="mx-2 text-gray-200">›</span>
          <span className="font-semibold text-yellow-300">About Us</span>
        </motion.nav>
      </div>

      {/* Floating Decorative Element */}
      <motion.div
        className="absolute top-6 left-6 w-12 h-12 bg-yellow-400 rounded-full opacity-60 blur-lg"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 bg-purple-500 rounded-full opacity-50 blur-xl"
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AboutBanner;
