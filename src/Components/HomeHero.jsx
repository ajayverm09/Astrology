import React from "react";

const Hero = () => {
  return (
    <>
      {/* Custom Keyframes */}
      <style>
        {`
          @keyframes zoomInBg {
            0% { transform: scale(1); }
            100% { transform: scale(1.15); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Slow Zoom */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[zoomInBg_20s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage:
              "url('https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/banner-bg-1.jpg')",
          }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight mb-6"
            style={{ animation: "fadeInUp 1.2s ease-out forwards" }}
          >
            Astrology Is Just A Finger <br /> Pointing At Reality
          </h1>
          <p
            className="text-gray-300 text-base sm:text-lg mb-8"
            style={{ animation: "fadeInUp 1.5s ease-out forwards" }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <div
            className="flex justify-center gap-4 flex-wrap"
            style={{ animation: "fadeInUp 2s ease-out forwards" }}
          >
            <button className="bg-purple-700 hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-800 text-white px-6 py-3 rounded-md transition duration-300 shadow-lg hover:scale-105">
              Book Now
            </button>
            <button className="border border-gray-300 text-gray-300 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-800 px-6 py-3 rounded-md transition duration-300 shadow-lg hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
