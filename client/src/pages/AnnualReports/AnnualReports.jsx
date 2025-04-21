import React, { useRef } from 'react';
import AboutHeading from "../../ResuableComponents/AboutHeading";
import { motion, useInView } from 'framer-motion';

const AnnualReports = () => {
  const reportYears = [
    "2023-24", "2022-23", "2021-22",
    "2020-21", "2019-20", "2018-19"
  ];
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const headingWords1 = "Records and Archives".split(" ");

  return (
    <>
      <AboutHeading title="Annual Reports" image="images/clgimg2.jpeg" />

      <section className="px-10  md:px-16 pt-20 pb-3">
        <motion.div
                  ref={headingRef}
                  className="flex flex-wrap gap-2 text-[#003d3d] text-4xl font-bold mb-4"
                >
                  {headingWords1.map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2, duration: 0.3 }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
        <p className=" text-1xl text-gray-900 mb-6 max-w-6xl mb-3">
          Our comprehensive overview of the institution’s activities, achievements, and performance over the course of a year.
        </p>

        <div className="flex flex-wrap gap-4">
          {reportYears.map((year) => (
            <button
              key={year}
              className="bg-[#d4880c] hover:bg-amber-700 text-white px-6 py-3 font-semibold transition-all duration-300"
            >
              {year}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default AnnualReports;
