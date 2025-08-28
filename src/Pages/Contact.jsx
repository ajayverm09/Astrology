import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import ContactBanner from "../Components/ContactBanner";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ContactSection = () => {
  return (
    <div>
      <ContactBanner />

      <section className="bg-[#1e0935] text-white py-16 px-4 md:px-10">
        {/* Section Title */}
        <motion.div
          className="max-w-7xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Get In Touch With Us!
          </h2>

          <div className="mb-6 flex justify-center">
            <img
              src="https://demo.kamleshyadav.com/themeforest/astrologer/demo12/wp-content/uploads/sites/15/2025/08/divider-1-1.svg"
              alt="Divider"
              className="h-8 w-auto"
            />
          </div>

          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua suspendisse and the gravida.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Panel */}
          <motion.div
            className="border border-gray-600 rounded-lg p-6 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="bg-[#2a0f48] p-3 rounded">
                <FaMapMarkerAlt className="text-purple-400" />
              </div>
              <p>113, JA Street, United States of America</p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="bg-[#2a0f48] p-3 rounded">
                <FaPhoneAlt className="text-purple-400" />
              </div>
              <p>+1-121-235-6245 , +1-121-235-7856</p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="bg-[#2a0f48] p-3 rounded">
                <FaEnvelope className="text-purple-400" />
              </div>
              <p>support@website.com , info@website.com</p>
            </div>

            {/* Map */}
            <div>
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=Storey%20Ave,%20San%20Francisco,%20CA%2094129&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                className="rounded-md border border-white/20"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Panel - Contact Form */}
          <motion.div
            className="border border-gray-600 rounded-lg p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <h3 className="text-xl font-semibold mb-6">Have A Question?</h3>
            <form className="space-y-4">
              {/* Name */}
              <motion.div variants={fadeUp} custom={3}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:border-purple-500"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeUp} custom={4}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:border-purple-500"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp} custom={5}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your message"
                  className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:border-purple-500 resize-none"
                ></textarea>
              </motion.div>

              {/* Submit */}
              <motion.div variants={fadeUp} custom={6}>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white py-2 rounded-md font-semibold"
                >
                  SUBMIT
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
