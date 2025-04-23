import React, { useRef } from 'react';
import AboutHeading from "../../ResuableComponents/AboutHeading";
import { motion, useInView } from 'framer-motion';
import { HiOutlineDocumentText } from 'react-icons/hi2';

const WelfareMeasures = () => {
  const measures = [
    "Consolidated Welfare Measures 2023–2024",
    "Gratuity Payable 2023–2024",
    "ESI 2023–2024",
    "Transport 2023–2024",
    "Medical Reimbursement 2023–2024",
    "Group Insurance Staff 2023–2024",
    "EPF 2023–2024",
    "Group Accident Insurance Students 2023–2024",
  ];
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { once: true });
    const headingWords1 = "Welfare Measures".split(" ");

  return (
    <>
      <AboutHeading title="Welfare Measures" image="images/clgimg2.jpeg" />

      <section className="px-10 md:px-16 py-10">
            <h2>
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
                </h2>
        <div className="bg-[#004643] text-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
          {measures.map((measure, index) => (
            <div key={index}>
              <div className="flex items-start gap-4">
                <HiOutlineDocumentText className="text-[#d4880c] text-4xl min-w-[2rem]" />
                <span className="font-bold text-2xl">{measure}</span>
              </div>
              <div className="mt-3 border-b border-white w-[70%]"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WelfareMeasures;
