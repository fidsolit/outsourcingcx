// File: components/FancyNavbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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

  const topLineVariants = {
    open: {
      rotate: 45,
      y: 6,
      transition: { duration: 0.3 },
    },
    closed: {
      rotate: 0,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const middleLineVariants = {
    open: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const bottomLineVariants = {
    open: {
      rotate: -45,
      y: -6,
      transition: { duration: 0.3 },
    },
    closed: {
      rotate: 0,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-900 text-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/" className="hover:text-blue-400 transition-colors">
          MyLogo
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
            className="block w-8 h-1 bg-white"
            variants={topLineVariants}
          />
          {/* Middle line */}
          <motion.span
            className="block w-8 h-1 bg-white"
            variants={middleLineVariants}
          />
          {/* Bottom line */}
          <motion.span
            className="block w-8 h-1 bg-white"
            variants={bottomLineVariants}
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
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
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
