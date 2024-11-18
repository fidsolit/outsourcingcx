"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import OutsourcingCXIcon from "./outsourcingicon";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerVariants = {
    open: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
    closed: {
      transition: { staggerChildren: 0.1, staggerDirection: 1 },
    },
  };

  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    open: (custom: number) => ({
      rotate: custom,
      y: custom > 0 ? 6 : -6, // Moves lines up/down
    }),
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }, // Middle line disappears
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-900 text-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">
          <OutsourcingCXIcon />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <button
        className="block md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          className="space-y-2 relative"
          animate={isOpen ? "open" : "closed"}
          variants={hamburgerVariants}
        >
          {/* Top line */}
          <motion.span
            className="block w-8 h-1 bg-white origin-center"
            variants={lineVariants}
            custom={45} // Top line rotates 45 degrees
            transition={{ duration: 0.3 }}
          />
          {/* Middle line */}
          <motion.span
            className="block w-8 h-1 bg-white origin-center"
            variants={middleLineVariants}
            transition={{ duration: 0.3 }}
          />
          {/* Bottom line */}
          <motion.span
            className="block w-8 h-1 bg-white origin-center"
            variants={lineVariants}
            custom={-45} // Bottom line rotates -45 degrees
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </button>

      {/* Navigation List */}
      <motion.ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:space-x-8 list-none absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {navItems.map((item) => (
          <motion.li
            key={item.name}
            className="text-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={item.href}
              className="hover:text-blue-400 transition-colors block py-2 md:py-0"
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contactus" },
];

// Framer Motion Variants
const containerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default Navbar;
