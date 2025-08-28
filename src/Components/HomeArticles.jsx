import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    image:
      "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2021/03/post2-1-600x345.jpg",
    date: "March 30, 2021",
    author: "Astrologer",
    comments: 0,
    title: "Consectetur Adipiscing Elit Sedeiusmod Tempor Incididunt",
    excerpt: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
  },
  {
    id: 2,
    image:
      "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2021/03/post1-600x345.jpg",
    date: "March 30, 2021",
    author: "Astrologer",
    comments: 0,
    title: "Consectetur Adipiscing Elit Sedeiusmod Tempor Incididunt",
    excerpt: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
  },
  {
    id: 3,
    image:
      "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2021/03/post4-600x345.jpg",
    date: "March 30, 2021",
    author: "Astrologer",
    comments: 0,
    title: "Consectetur Adipiscing Elit Sedeiusmod Tempor Incididunt",
    excerpt: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
  },
];

const LatestArticles = () => {
  return (
    <div className="bg-[#140021] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading with fade-up animation */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Latest Articles
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          className="mb-6 flex justify-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/08/divider-1-1.svg"
            alt="Divider"
            className="h-8 w-auto"
          />
        </motion.div>

        <motion.p
          className="text-gray-300 mb-12 max-w-2xl mx-auto text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </motion.p>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              className="bg-transparent rounded overflow-hidden shadow-lg hover:shadow-purple-700/40 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Image with hover zoom */}
              <div className="relative group overflow-hidden rounded">
                <img
                  src={article.image}
                  alt="article"
                  className="w-full h-56 md:h-52 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-purple-600 hover:bg-[#140021] px-4 py-1 text-xs md:text-sm font-bold rounded cursor-default select-none"
                  whileHover={{ scale: 1.1 }}
                >
                  {article.date.toUpperCase()}
                </motion.div>
              </div>

              {/* Content */}
              <div className="pt-5 text-left">
                <div className="flex flex-wrap items-center text-xs md:text-sm text-gray-400 mb-2 gap-3">
                  <span>👤 By - {article.author}</span>
                  <span>💬 {article.comments} comments</span>
                </div>
                <h3 className="text-lg font-bold hover:text-purple-500 leading-tight mb-3 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {article.excerpt}{" "}
                  <span className="text-purple-400">[...]</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          className="flex justify-center mt-12 space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition">
            1
          </button>
          <Link to="/blogs" className="bg-gray-800 hover:bg-purple-700 text-white px-4 py-2 rounded transition">
            2
          </Link>
          <Link to="/blogs" className="bg-gray-800 hover:bg-purple-700 text-white px-4 py-2 rounded transition">
            »
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LatestArticles;
