import React from "react";

import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
const heading = "Our Students Say";
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

function StudentsSay() {
  return (
    <section className="bg-[#ffffff] px-8 md:px-20 py-20  flex flex-col md:flex-col justify-around items-start">
      {/* Left Text Content */}
      <div className="md:w-2/3 pl-10">
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
          From leading successful tech startups to holding influential positions
          in multinational companies, Siddhartha graduates have consistently
          demonstrated leadership, innovation, and a commitment to excellence.
        </p>
      </div>

      {/* Right Download Button */}
      <div className="mt-8 md:mt-0 px-10">
        <button className="bg-[#D1830F] hover:bg-[#e29527] text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all">
          Know Faculty Info <MdArrowOutward className="text-lg" />
        </button>
      </div>
    </section>
  );
}

export default StudentsSay;
