import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useInView, useAnimation } from "framer-motion";

const listItems = [
  "Autonomous Institution",
  "Accredited by NAAC and NBA for academic excellence",
  "Honored with multiple accolades for innovation and employability",
  "MoUs with tech leaders like Microsoft and TCS for research and labs",
  "Committed to promoting inclusive and supportive learning spaces",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SiddharthaGlance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="w-full flex flex-col md:flex-row items-start justify-between gap-8 px-6 md:px-16 py-10"
    >
      {/* Left Content */}
      <motion.div
        className="md:w-1/2"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl font-bold text-[#003B2F] mb-4"
          variants={itemVariants}
        >
          SIDDHARTHA at a glance
        </motion.h1>

        <motion.p
          className="text-justify text-[#202020] text-[17px] leading-7 mb-6"
          variants={itemVariants}
        >
          Rooted in a legacy of academic brilliance and holistic development,
          Siddhartha Institute of Technology has emerged as a hub of innovation,
          leadership, and excellence. With its autonomous curriculum, industry-relevant
          training, and student-centric approach, Siddhartha empowers students to
          become forward-thinking engineers and entrepreneurs. Backed by strong
          industry ties and community-driven initiatives, the institution fosters a
          nurturing environment where talent is cultivated and success is celebrated.
        </motion.p>

        <motion.ul
          className="space-y-3 text-[16.5px] font-semibold text-[#1d1d1d]"
          variants={containerVariants}
        >
          {listItems.map((item, index) => (
            <motion.li key={index} className="relative pl-6" variants={itemVariants}>
              <FaArrowRight className="absolute left-0 top-1 text-yellow-500" />
              {item}
              <hr className="mt-2 border-gray-300" />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="https://th.bing.com/th/id/OIP.LvUqo_Yaj4ntNz9gg3ysPgAAAA?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Siddhartha Orientation"
          className="rounded-md w-full shadow-lg h-full"
        />
      </motion.div>
    </div>
  );
};

export default SiddharthaGlance;
