import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sophia Reed",
    role: "Spiritual Healer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Sophia guided me through a difficult phase in my life. Her insights were incredibly accurate and calming.",
  },
  {
    name: "James Turner",
    role: "Tarot Reader",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    text: "James gave me a whole new perspective on my relationship. Highly recommended for honest readings.",
  },
  {
    name: "Luna Patel",
    role: "Numerologist",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    text: "The session with Luna was mind-opening. Her numerology report aligned perfectly with my experiences.",
  },
  {
    name: "Ethan Brooks",
    role: "Energy Coach",
    image: "https://randomuser.me/api/portraits/men/89.jpg",
    text: "Ethan helped me shift my mindset and unlock positivity. Truly a gifted energy guide.",
  },
  {
    name: "Isabella Martinez",
    role: "Astrologer",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    text: "Isabella’s birth chart reading was detailed and spot-on. I left the session feeling empowered and clear.",
  },
  {
    name: "Noah Kim",
    role: "Palm Reader",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    text: "I was skeptical at first, but Noah’s palm reading revealed things no one else could’ve known.",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="bg-[#1a0033] text-white py-16 text-center relative overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-semibold mb-2"
      >
        Testimonials
      </motion.h2>

      {/* Divider */}
      <div className="mb-6 flex justify-center">
        <img
          src="https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/08/divider-1-1.svg"
          alt="Divider"
          className="h-8 w-auto"
        />
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-300 max-w-2xl mx-auto mb-12 px-4 text-sm md:text-base"
      >
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </motion.p>

      {/* Swiper Wrapper */}
      <div className="relative w-full max-w-6xl mx-auto px-6 flex items-center justify-center">
        {/* Prev Button */}
        <div className="swiper-button-prev-custom hidden md:flex absolute -left-5 md:-left-16 z-10 bg-[#0F0221] px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-[#4B1FA6] hover:scale-110 transition">
          Prev
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Mousewheel]}
          slidesPerView={1}
          spaceBetween={20}
          mousewheel={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            el: ".swiper-pagination-custom",
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#4b1fa6] rounded-lg px-6 py-8 h-full flex flex-col items-center mx-2
                           transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl hover:scale-105"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4 border-4 border-purple-300 shadow-lg"
                />
                <p className="text-gray-200 mb-4 italic">{testimonial.text}</p>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <span className="mt-2 bg-[#190236] px-4 py-1 rounded-full font-semibold text-sm md:text-base hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-800 duration-300">
                  {testimonial.role}
                </span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <div className="swiper-button-next-custom hidden md:flex absolute -right-5 md:-right-16 z-10 bg-[#0F0221] px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-[#4B1FA6] hover:scale-110 transition">
          Next
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="swiper-pagination-custom mt-8 flex justify-center gap-2" />
    </section>
  );
};

export default TestimonialSlider;
