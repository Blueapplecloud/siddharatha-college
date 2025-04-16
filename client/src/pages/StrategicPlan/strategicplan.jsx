import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const Strategicplan = ({ title, image }) => {
  const location = useLocation();
  title = "Strategic Plan";
  const defaultImage = "https://www.srinivasgroup.com/img/home/banner3.jpg"; // fallback background image

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-[40vh] md:h-[45vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${image || defaultImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/70"></div>

        <div className="relative z-10 text-white px-6 md:px-16 w-full">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mt-4 pt-2 border-t border-amber-400 inline-block"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {title}
          </motion.h1>

          <motion.div
            className="text-sm md:text-base mt-2"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <Link
              to="/"
              className="text-white hover:!text-yellow-300 !no-underline"
            >
              Home
            </Link>{" "}
            /{" "}
            <span className="text-white capitalize">
              {location.pathname.slice(1)}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Strategic Plan Section */}
      <div className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-bold text-[#003B3F] mb-6">
              A Strategic Blueprint for Innovation, Excellence, and Impact
            </h1>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Our strategy is to empower women to excel academically, socially,
              and professionally, preparing them to be leaders in their
              communities and professions and provide a transformative
              educational experience that supports the holistic development of
              young women, fostering critical thinking, creativity, leadership,
              and social responsibility.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This plan focuses on academic rigor, student well-being, faculty
              excellence,and community involvement, providing an environment
              where young women can thrive academically and personally.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://gnits.ac.in/wp-content/uploads/2025/02/SDS_9835-1024x683.jpg"
              alt="GNITS Alumni Event"
              className="rounded-xl w-full max-w-big object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <Link
            to=""
            className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
            style={{ textDecoration: 'none' }}
          >
            2023–24 to 2027–28
          </Link>
          <Link
            to=""
            className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
            style={{ textDecoration: 'none' }}
          >
            2018–19 to 2022–23
          </Link>
        </div>
      </div>
    </>
  );
};

export default Strategicplan;
