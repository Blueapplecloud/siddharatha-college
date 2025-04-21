import React from "react";
import AboutHeader from "../../ResuableComponents/AboutHeading";
import PlacementsSuccessBar from "./PlacementsSuccessBar";
import PlacementHighlights from "./PlacementHighlights";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import PlacementScrollBar from "../../ResuableComponents/PlacementScrollBar";

const Placements = () => {
  const { ref: topRef, inView: topInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: bottomRef, inView: bottomInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <AboutHeader
        title="Financial Independence"
        image="https://gnits.ac.in/wp-content/uploads/2024/09/DSC_1198-scaled.jpg"
      />

      {/* Top Section*/}
      <motion.div
        ref={topRef}
        initial={{ opacity: 0, y: 50 }}
        animate={topInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-10 gap-[40px]"
      >
        {/* Text Section */}
        <div className="md:w-1/2 text-left">
          <h2 className="!text-[42px] !font-bold md:text-5xl text-gray-800 leading-tight border-b-4 pb-2 border-amber-300"
          style={{ fontFamily: "'Urbanist', sans-serif" }}>
            World-class Placements
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Beyond securing job offers, our placement program focuses on helping
            students find roles that align with their long-term career goals and
            personal aspirations. We take pride in our holistic approach,
            equipping students with essential skills for a successful career
            journey.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://www.takshashilauniv.ac.in/wp-content/uploads/2023/05/how-to-prepare-for-college-placements-768x512.jpg"
            alt="Placements"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      <PlacementsSuccessBar />
      <PlacementHighlights />
      <br />
      {/* Bottom Section - Top Tier Recruiters */}
      <motion.div
        ref={bottomRef}
        className="flex flex-col md:flex-row items-center w-full px-4 md:px-8 py-4 bg-blue-100 rounded-lg shadow-lg gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={bottomInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://gnits.ac.in/wp-content/uploads/2024/09/DSC_1181-scaled.jpg"
            alt="Top Recruiters"
            className="max-w-full max-h-[500px] h-auto rounded-lg shadow-md object-cover ml-25"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left mr-10">
          <h2 className="text-5xl md:text-5xl !font-bold text-gray-800 leading-tight border-b-4 pb-2 border-amber-300" style={{ fontFamily: "'Urbanist', sans-serif" }}>
            Top-Tier Recruiters and Competitive Offers
          </h2>
          <p className="text-base text-gray-700 mt-3 leading-relaxed">
            Each year, <strong>SIDDHARTHA</strong> attracts top-tier companies
            from various industries, including giants like Microsoft, Google, JP
            Morgan, Infosys, and TCS. These companies recognize the quality of
            our graduates and offer them diverse roles with competitive salary
            packages. Our strong industry connections and partnerships ensure
            that our students have access to exciting career opportunities,
            whether they are interested in software development, data analysis,
            cybersecurity, or other specialized fields.
          </p>
        </div>
      </motion.div>
      <br />
      <PlacementScrollBar />
    </>
  );
};

export default Placements;
