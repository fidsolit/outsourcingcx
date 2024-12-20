"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto py-16 px-8 dark">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <Image
            src="/images/oldcustomers.png"
            alt="Customer Experience Illustration"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-lg"
          /> */}
        </motion.div>
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transform Your Customer Experience
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Enhance customer satisfaction with professional, outsourced CX
          services tailored to your business needs.
        </motion.p>
        <Link href="/contactus">
          <motion.button
            className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get Started
          </motion.button>
        </Link>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg hover:scale-125 shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why OutsourcingCX?
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          At OutsourcingCX, we specialize in providing comprehensive customer
          service solutions, including support, sales, and technical assistance.
          Our dedicated team ensures that your customers receive timely,
          empathetic, and professional responses to every interaction, helping
          you focus on growing your core business.
        </p>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Enhance Your Customer Experience?
        </motion.h2>
        <Link href="/contactus">
          <motion.button
            className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </Link>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Customer Support",
    description:
      "24/7 customer service to handle inquiries and provide timely assistance to your clients.",
    image: "/images/outsourcepic1.png",
  },
  {
    title: "Technical Assistance",
    description:
      "Expert support for resolving technical issues, ensuring smooth operations for your customers.",
    image: "/images/outsourcepic2.png",
  },
  {
    title: "Sales Support",
    description:
      "Boost your sales with professional outreach and customer engagement tailored to your market.",
    image: "/images/outsourcepic3.png",
  },
];
