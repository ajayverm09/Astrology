import React, { useState } from "react";
import { motion } from "framer-motion";
import blogContents from "../Components/BlogContent";

// Article data
const articles = [
  {
    id: 1,
    image:
      "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2021/03/post2-1.jpg",
    title: "Consectetur Adipiscing Elit Sedeiusmod Tempor Incididunt",
    author: "Astrologer",
    comments: 0,
  },
  {
    id: 2,
    image:
      "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2021/03/post1.jpg",
    title: "Exploring the Zodiac Signs: What You Didn’t Know",
    author: "Astrologer",
    comments: 0,
  },
  {
    id: 3,
    image:
      "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2021/03/post4.jpg",
    title: "The Rise of Astrology in Modern Times",
    author: "Astrologer",
    comments: 0,
  },
  {
    id: 4,
    image:
      "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2021/03/post3.jpg",
    title: "How Planets Influence Your Daily Life",
    author: "Astrologer",
    comments: 2,
  },
  {
    id: 5,
    image:
      "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2021/03/post2.jpg",
    title: "Understanding Mercury Retrograde",
    author: "Astrologer",
    comments: 1,
  },
  {
    id: 6,
    image:
      "https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2021/03/post5.jpg",
    title: "Astrological Remedies: Do They Work?",
    author: "Astrologer",
    comments: 3,
  },
];

const articlesPerPage = 2;

const LatestArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className="bg-[#1a0033] text-white py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {currentArticles.map((article, index) => (
          <motion.div
            key={article.id}
            className="mb-16 px-2 sm:px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            {/* Image with hover animation */}
            <motion.div
              className="flex justify-start mb-6 overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full max-w-4xl object-cover rounded-lg"
              />
            </motion.div>

            {/* Title */}
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl hover:text-[#6610d7] mb-2 transition-colors duration-300">
              {article.title}
            </h2>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-purple-400 mb-4">
              <span>
                <strong>By</strong> {article.author}
              </span>
              <span>{article.comments} Comments</span>
            </div>

            {/* Content */}
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {blogContents[article.id] || "No content available."}
            </p>
          </motion.div>
        ))}

        {/* Pagination Controls */}
        <motion.div
          className="flex justify-center space-x-2 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <motion.button
                key={page}
                onClick={() => setCurrentPage(page)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-medium ${
                  currentPage === page
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 hover:bg-purple-700"
                }`}
              >
                {page}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default LatestArticles;
