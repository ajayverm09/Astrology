import React from "react";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Gemstone",
    price: 20,
    oldPrice: 80,
    rating: 5,
    image:
      "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2021/05/Group-1404.jpg",
  },
  {
    id: 2,
    title: "Gemstone",
    price: 20,
    oldPrice: 80,
    rating: 3,
    image:
      "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2021/05/Group-1404-1.jpg",
  },
  {
    id: 3,
    title: "Gemstone",
    price: 20,
    oldPrice: 80,
    rating: 4,
    image:
      "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2021/05/Group-1404-3.jpg",
  },
  {
    id: 4,
    title: "Gemstone",
    price: 20,
    oldPrice: 80,
    rating: 2,
    image:
      "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2021/05/Group-1404-5.jpg",
  },
];

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="mb-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-purple-600"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const PopularProducts = () => {
  return (
    <section className="bg-[#190236] py-16 px-6 text-center text-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-serif mb-2"
      >
        Popular Products
      </motion.h2>

      {/* Decorative line */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-6 flex justify-center"
      >
        <img
          src="https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/08/divider-1-1.svg"
          alt="Divider"
          className="h-8 w-auto"
        />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="max-w-xl mx-auto mb-12 text-purple-300 leading-relaxed"
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </motion.p>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-[#0F0220] rounded-md overflow-hidden shadow-lg group transform hover:scale-105 transition duration-300"
          >
            {/* Image Wrapper */}
            <div className="bg-[#0F0220] p-6 relative overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="h-52 w-72 object-contain mx-auto transform group-hover:scale-110 transition duration-500"
              />

              {/* Hover Action Overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-all duration-500
                bg-purple-700 flex justify-around items-center text-white p-2"
              >
                <FaHeart className="cursor-pointer hover:text-red-400 transition" />
                <button className="text-white font-semibold hover:scale-110 transition">
                  Add To Cart
                </button>
                <FaSearch className="cursor-pointer hover:text-blue-300 transition" />
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-purple-800 p-4 text-left">
              <StarRating rating={product.rating} />
              <h3 className="text-lg text-purple-300 font-serif">
                {product.title}
              </h3>
              <p className="mt-1 font-semibold text-white">
                ${product.price}{" "}
                <span className="line-through text-gray-400">
                  ${product.oldPrice}
                </span>{" "}
                <span className="text-green-500">(75% Off)</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(168,85,247,0.7)" }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 px-8 py-3 font-semibold text-white rounded-md bg-purple-700 
                   hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-800 
                   transition duration-300"
      >
        View More
      </motion.button>
    </section>
  );
};

export default PopularProducts;
