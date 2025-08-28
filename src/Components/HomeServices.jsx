import React from "react";

const Services = () => {
  const leftServices = [
    {
      title: "Astrology Tips",
      icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/svg.svg",
    },
    {
      title: "Gem Stone",
      icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/zod1.svg",
    },
    {
      title: "Vastu Tips",
      icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/zod2.svg",
    },
  ];

  const rightServices = [
    {
      title: "Health Tips",
      icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/zod3.svg",
    },
    {
      title: "Numerology Tips",
      icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/zop4.svg",
    },
    {
      title: "Kundli Dosha",
      icon: "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/zod6.svg",
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <section className="bg-[#0F0221] text-white py-16 px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 animate-[fadeInUp_1s_ease]">
            Our Services
          </h2>
          <div className="mb-6 flex justify-center animate-[fadeInUp_1.2s_ease]">
            <img
              src="https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/08/divider-1-1.svg"
              alt="Divider"
              className="h-8 w-auto"
            />
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_1.4s_ease]">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua spen disse and the gravida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Services */}
          <div className="space-y-8 flex flex-col items-center md:items-end">
            {leftServices.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border border-gray-600 p-6 rounded-lg
                           w-full max-w-[300px] min-h-[110px]
                           transition-transform duration-300 ease-in-out
                           hover:scale-[1.05] hover:bg-violet-700 animate-[fadeInUp_1s_ease]"
                style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
              >
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Center Image with rotating background */}
          <div className="relative flex justify-center items-center my-10 md:my-0">
            <div
              className="absolute w-44 h-44 md:w-56 md:h-56 rounded-full animate-[spin-slow_25s_linear_infinite]"
              style={{
                backgroundImage:
                  "url('https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/service_img2-1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <img
              src="https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/07/service_img1-1.png"
              alt="Palm"
              className="relative z-10 w-40 md:w-52 animate-[fadeInUp_1.5s_ease]"
            />
          </div>

          {/* Right Services */}
          <div className="space-y-8 flex flex-col items-center md:items-start">
            {rightServices.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border border-gray-600 p-6 rounded-lg
                           w-full max-w-[300px] min-h-[110px]
                           transition-transform duration-300 ease-in-out
                           hover:scale-[1.05] hover:bg-violet-700 animate-[fadeInUp_1s_ease]"
                style={{ animationDelay: `${index * 0.2 + 0.8}s` }}
              >
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
