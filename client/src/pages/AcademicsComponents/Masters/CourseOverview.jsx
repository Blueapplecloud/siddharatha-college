import React from "react";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
function CourseOverview({ title, text1, text2, img }) {
  return (
    <div className="w-full  flex flex-col md:flex-row items-start justify-end-safe px-5 py-20">
      <div className="flex flex-col justify-center md:w-4/5 w-full md:px-4 md:text-base text-xs text-justify mr-4">
        <motion.div
          className="pb-3 text-4xl md:text-5xl leading-tight font-bold text-teal-900"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {title.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordAnimation}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        <p className="font-semibold text-gray-600">{text1}</p>
        <p className="font-semibold text-gray-600">{text2}</p>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg md:w-1/2  ">
        <img src={img} alt="img" />
      </div>
    </div>
  );
}

export default CourseOverview;
