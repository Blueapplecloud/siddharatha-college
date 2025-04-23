// components/WhyChoseSITS.jsx

import { FaArrowRight } from "react-icons/fa";
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
const WhyChoseSITS = ({ heading, text, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-16 bg-white">
      {/* Left Content */}
      <div className="md:w-2/3 mb-10 md:mb-0 mr-3">
        <motion.div
          className="text-4xl md:text-4xl font-bold text-teal-900 leading-tight flex flex-wrap pb-3"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {heading.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordAnimation}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        <p className="mt-6 text-gray-700 text-lg leading-relaxed font-semibold">
          {text}
        </p>
      </div>

      {/* Right Image with Overlay */}
      <div className="relative md:w-2/5 w-full md:h-50 rounded-xl overflow-hidden">
        <img
          src={image}
          alt="Students in lab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <button className="bg-orange-500 text-white px-6 py-3 rounded shadow-md flex items-center gap-2 hover:bg-orange-600 transition-all text-lg font-semibold">
            Enroll Today <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseSITS;
