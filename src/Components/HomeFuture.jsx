import React from "react";

const Future = () => {
  return (
    <>
      {/* Custom keyframes */}
      <style>
        {`
          @keyframes rotateFast {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 15px rgba(168, 85, 247, 0.6); }
            50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8); }
          }
        `}
      </style>

      <section className="bg-[#130A2C] text-white py-16 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left animate-[fadeUp_1s_ease-out]">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 leading-snug">
              We Can Use Astrology To Find Your Future
            </h2>
            <p className="text-gray-300 mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English.
            </p>

            {/* Animated list */}
            <ul className="text-gray-200 space-y-3 mb-8">
              {["🌟 Astrology is just a finger pointing at reality",
                "🌟 Millionaires don't have astrologers, billionaires do",
                "🌟 It is not in the stars to hold our destiny but in ourselves.",
                "🌟 Astrology is like a gateway drug to a more cosmic world view."
              ].map((item, i) => (
                <li 
                  key={i}
                  className="opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
                  style={{ animationDelay: `${i * 0.3 + 0.5}s` }}
                >
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-purple-700 hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-800 text-white px-6 py-3 rounded-md transition duration-300 animate-[pulseGlow_3s_infinite]">
              Read More
            </button>
          </div>

          {/* Image & Animated Circles */}
          <div className="flex-1 relative w-full max-w-md animate-[fadeUp_1s_ease-out]">
            {/* Top Right Rotating Circle */}
            <div className="absolute -top-4 -right-4 w-24 h-24 flex items-center justify-center animate-[rotateFast_15s_linear_infinite]">
              <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center">
                  <div
                    className="w-14 h-14 rounded-full opacity-80"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #38bdf8 0deg 90deg, #60a5fa 90deg 180deg, #818cf8 180deg 270deg, #a78bfa 270deg 360deg)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Bottom Left Gradient Circle */}
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full p-1 animate-[rotateFast_22.5s_linear_infinite]"
              style={{
                background:
                  "conic-gradient(from 0deg, #8b5cf6 0deg 90deg, #6366f1 90deg 180deg, #a78bfa 180deg 270deg, #c4b5fd 270deg 360deg)",
              }}
            >
              <div className="w-full h-full bg-[#130A2C] rounded-full"></div>
            </div>

            {/* Main Image */}
            <img
              src="https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/08/abt-1.png"
              alt="Astrologer"
              className="rounded-xl relative z-10 w-full object-cover shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Future;
