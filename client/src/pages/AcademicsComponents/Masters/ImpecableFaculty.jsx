import React from "react";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const heading = "Our Impecable Faculty";
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // adjust this to slow down animation
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ImpecableFaculty() {
  return (
    <section className="bg-[#e8e8e8] px-6 md:px-20 py-20 flex flex-col md:flex-row justify-around items-center">
      {/* Left Text Content */}
      <div className="md:w-2/3">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6 flex flex-wrap pb-3"
          variants={container}
          initial="hidden"
          animate="visible"
          style={{
            color: "#013F41",
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          {heading.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="mr-2 inline-block text-5xl"
              variants={wordAnimation}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <p className="text-lg leading-relaxed font-semibold text-gray-600">
          Discover the pivotal moments that have shaped the institution’s
          growth, from its foundational years to its emergence as a leading
          engineering college.
        </p>
      </div>

      {/* Right Download Button */}
      <div className="mt-8 md:mt-0">
        <button className="bg-[#D1830F] hover:bg-[#e29527] text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all">
          Know Faculty Info <FaArrowRight className="text-lg" />
        </button>
      </div>
    </section>
  );
}

export default ImpecableFaculty;
