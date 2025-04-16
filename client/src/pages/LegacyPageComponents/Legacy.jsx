import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AboutHeading from "../../ResuableComponents/AboutHeading";

const Legacy = () => {
const headingRef = useRef(null);
const isInView = useInView(headingRef, { once: true });
const headingWords1 = "Visionaries of Excellence".split(" ");
const headingWords2 = "Institutes Managed by G.Pulla Reddy Charities Trust".split(" ");

  return (
    <>
      <AboutHeading title="Legacy" image={"images/clgimg2.jpeg"} />
    <div className="p-2 font-sans">
      {/* Container 1 */}
      <div className="flex flex-wrap gap-12 p-5 items-start">
        <div className="flex-2 w-680px">
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

          <p className="mt-4 text-[#3e3e3e] font-semibold">
            <strong><u>Founding Vision and Purpose</u></strong><br />
            Sidhartha Institute of Technology and Science (for women), commonly referred to as SITS, 
            was founded in 1997 by Late Sri G. Pulla Reddy through the G. Pulla Reddy Charities Trust. 
            The institute is named in honor of his wife, Smt. G. Narayanamma. Sri G. Pulla Reddy, a visionary
            businessman, established the institution with the aim of promoting technical education among women, 
            empowering them to stand as equals in both professional and domestic spheres.
          </p>
          <p className="mt-4 text-[#3e3e3e] font-semibold ">
           <strong><u>Commitment to Women’s Empowerment</u><br /></strong>
            The establishment of SITS was driven by Sri G. Pulla Reddy’s dream of elevating the role of women in society. 
            The college’s vision reflects the critical role that women play in society, focusing on empowering them through 
            education that increases awareness and adaptability to modern scenarios.
          </p>
        </div>

        {/* Image 1 */}
        <div className="flex-1 min-w-[500px] ">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.2L8ZoZ41vrPVQqE59HuHRwHaE0&pid=Api&P=0&h=180"
            alt="Late Sri G.Pulla Reddy and Smt. G. Narayanamma"
            className="w-full max-w-[500px] h-100 rounded-[50px]"
          />
          <p className="block mt-4 text-center text-[#3e3e3e]">
            <b>Late Sri G. Pulla Reddy (1920–2007) & Late Smt. G. Narayanamma (1925–2010)</b>
          </p>
        </div>
      </div>

      {/* Container 2 */}
      <div className="bg-[#e8f1f1]  flex flex-wrap p-5 gap-5">
        {/* Text 2 */}
        <div className="flex-1 min-w-[300px]">
        <motion.div
          ref={headingRef}
          className="flex flex-wrap gap-2 text-[#003d3d] text-4xl font-bold mb-4"
        >
          <h3>
          {headingWords2.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              {word}
            </motion.span>
          ))}
          </h3>
        </motion.div>
          <p className="mb-4 text-[#3e3e3e] font-semibold">
            The G. Pulla Reddy Charities Trust, under the Chairmanship of Sri G.Raghava Reddy and other trustee members,
            manages a number of educational institutions and service organizations across Hyderabad and Kurnool.
          </p>

          <h5 className="!text-[#003d3d] text-lg font-semibold underline mb-1">
            Professional Colleges Managed by G.P.R. Charities Trust:
          </h5>
          <ul className="list-disc ml-5 pl-2 mb-4 text-[#3e3e3e] font-semibold">
            <li>Sidhartha Institute of Technology & Sciences, Hyderabad</li>
            <li>G. Pulla Reddy Engineering College, Kurnool</li>
            <li>G. Pulla Reddy Pharmacy College, Hyderabad</li>
            <li>G. Pulla Reddy Dental College, Kurnool</li>
          </ul>

          <h5 className="!text-[#003d3d] text-lg font-semibold underline mb-1">
            Other Educational Institutes Managed by G.P.R. Charities Trust:
          </h5>
          <ul className="list-disc ml-5 pl-2 mb-4 text-[#3e3e3e] font-semibold">
            <li>G. Pulla Reddy Degree & P.G. College, Hyderabad</li>
            <li>G. Pulla Reddy Junior College, Hyderabad</li>
            <li>G. Pulla Reddy High School, Hyderabad</li>
            <li>Sidhartha High School, Hyderabad</li>
            <li>G. Pulla Reddy Memorial School, Dilsukhnagar, Hyderabad</li>
          </ul>

          <h5 className="!text-[#003d3d] text-lg font-semibold underline mb-1">
            Service Organizations Managed by G.P.R. Charities Trust:
          </h5>
          <ul className="list-disc ml-5 pl-2 text-[#3e3e3e] font-semibold">
            <li>G. Narayanamma Hospital, Atmakur, Kurnool District</li>
            <li>Vignana Peetham (Orphanage), Kurnool</li>
            <li>Sanskrita Basha Prachara Samithi, Hyderabad</li>
            <li>G. Narayanamma Pulla Reddy Respite Home for Mentally Challenged Adult Women, Kurnool</li>
          </ul>
        </div>

        {/* Image 2 */}
        <div className="flex-1 min-w-[300px]">
          <img
            src="https://gnits.ac.in/wp-content/uploads/2024/12/SDS_9111.jpg"
            alt="SITS campus"
            className="w-full max-w-[900px] h-[700px] p-2 "
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Legacy;
