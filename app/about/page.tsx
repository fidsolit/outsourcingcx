"use client";
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    // <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-900 to-black text-gray-900 py-20 px-5 md:px-10 lg:px-20">
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-5 md:px-10 lg:px-20">
      {/* Fancy Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="w-80 h-80 bg-gray-800 rounded-full blur-2xl absolute -top-10 -left-20 animate-pulse"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        ></motion.div>
        <motion.div
          className="w-80 h-80 bg-gray-700 rounded-full blur-2xl absolute top-40 right-10 animate-pulse"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        ></motion.div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Reliable Outsourcing Partner
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We deliver high-quality outsourcing solutions tailored to your
          business needs. From software development to customer support, our
          team ensures excellence in every service.
        </motion.p>

        {/* Key Services */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            {
              title: "Software Development",
              description: "Bespoke software to drive your business forward.",
            },
            {
              title: "Customer Support",
              description: "24/7 support to keep your customers satisfied.",
            },
            {
              title: "Data Management",
              description: "Secure and efficient data handling solutions.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
