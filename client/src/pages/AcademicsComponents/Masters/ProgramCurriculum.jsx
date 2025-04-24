import { FaCloudDownloadAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const heading = "Program Curriculum";

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

const ProgramCurriculum = () => {
  return (
    <section className="bg-[#013F41] text-white px-6 md:px-20 py-20 flex flex-col md:flex-row justify-around items-center">
      {/* Left Text Content */}
      <div className="md:w-2/3">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 flex flex-wrap"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {heading.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="mr-2 inline-block"
              variants={wordAnimation}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <p className="text-lg leading-relaxed">
          Discover the pivotal moments that have shaped the institution’s
          growth, from its foundational years to its emergence as a leading
          engineering college.
        </p>
      </div>

      {/* Right Download Button */}
      <div className="mt-8 md:mt-0">
        <button className="bg-[#D1830F] hover:bg-[#e29527] text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all">
          Download Here <FaCloudDownloadAlt className="text-lg" />
        </button>
      </div>
    </section>
  );
};

export default ProgramCurriculum;
