import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaDownload } from "react-icons/fa";


const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const TimeTableExam = ({ title, image }) => {
  const location = useLocation();
  title = "ExamCell";
  const defaultImage =
    "https://www.mymathews.com/media/institute_banner/SIET_Banner.jpg";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <div
        className="relative h-[40vh] md:h-[45vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${image || defaultImage})` }}
        ref={ref}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/80"></div>

        {isInView && (
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
        )}
      </div>

      <div className="flex flex-wrap gap-4 mt-8 p-16">
        <Link
          to=""
          className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
          style={{ textDecoration: "none" }}
        >
          Notice Board
        </Link>
        <Link
          to=""
          className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
          style={{ textDecoration: "none" }}
        >
          Result Announcement
        </Link>

        <Link
          to=""
          className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
          style={{ textDecoration: "none" }}
        >
          Student Marks
        </Link>
        <Link
          to=""
          className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
          style={{ textDecoration: "none" }}
        >
          Online Certificate Verification System
        </Link>
        <Link
          to=""
          className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
          style={{ textDecoration: "none" }}
        >
          WES
        </Link>
        <Link
          to=""
          className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
          style={{ textDecoration: "none" }}
        >
          Student Verification
        </Link>
        <Link
          to=""
          className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
          style={{ textDecoration: "none" }}
        >
          Contact Numbers
        </Link>
        <Link
          to=""
          className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
          style={{ textDecoration: "none" }}
        >
          Time-Tables
        </Link>
        <Link
          to=""
          className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
          style={{ textDecoration: "none" }}
        >
          CGPA-Percentage
        </Link>
      </div>


<div className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-bold text-[#003B3F] mb-6">
            Exams @ SIDDHARTHA
            </h1>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Exam Cell at Siddhartha is an essential part of the academic structure, 
            upholding the institution’s commitment to academic excellence and 
            fair evaluation. Through meticulous planning, strict adherence to 
            guidelines, and a focus on transparency, the Exam Cell ensures the
             smooth functioning of examinations, providing students with a reliable
              and supportive environment during this critical phase of their academic journey
            </p>
          </div>

          {/* Image Section */}
          <div className="flex flex-col items-center justify-center min-h-[300px] px-6 py-10 bg-gradient-to-r from-[#F9D976] to-[#F39F86]">
      <h1 className="text-4xl font-bold text-green-900 mb-8">View Results</h1>

      <button className="flex items-center gap-2 bg-green-700 text-white font-bold px-6 py-3 mb-4 hover:bg-green-800 transition">
        <FaDownload className="text-lg" />
        View Results
      </button>

      <button className="flex items-center gap-2 bg-green-700 text-white font-bold px-6 py-3 hover:bg-green-800 transition">
        <FaDownload className="text-lg" />
        Consolidated All Results
      </button>
    </div>
        </div>
      </div>


    </>
  );
};

export default TimeTableExam;
