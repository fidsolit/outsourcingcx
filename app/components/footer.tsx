// Footer.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import OutsourcingCXIcon from "./outsourcingicon";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white  py-8 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Section - Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" /> */}
          <OutsourcingCXIcon />
          <span className="text-xl font-bold">Outsourcingcx</span>
        </motion.div>

        {/* Middle Section - Links */}
        <motion.div
          className="flex space-x-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {["Home", "About", "Services", "Contact"].map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        {/* Right Section - Social Icons */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {["twitter", "facebook", "instagram"].map((icon, index) => (
            <motion.a
              key={index}
              href={`https://${icon}.com`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white"
            >
              <i className={`fab fa-${icon}`}></i>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="mt-4 text-center text-gray-500">
        © {new Date().getFullYear()} outsourcingcx.net All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
