"use client";
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 px-5 md:px-10 lg:px-20">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="w-96 h-96 bg-blue-400 rounded-full blur-3xl absolute -top-10 -left-20 animate-pulse"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        ></motion.div>
        <motion.div
          className="w-96 h-96 bg-pink-400 rounded-full blur-3xl absolute top-40 right-10 animate-pulse"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        ></motion.div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Trusted Outsourcing Partner
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We provide tailored outsourcing solutions to help businesses grow and
          succeed in today's competitive market. From software development to
          customer support, our expert team is dedicated to delivering top-notch
          services that meet your unique needs.
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
              description: "Custom applications for your business needs.",
            },
            {
              title: "Customer Support",
              description: "24/7 customer service to ensure satisfaction.",
            },
            {
              title: "Data Entry",
              description: "Accurate data handling to save your time.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
