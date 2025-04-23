import React from "react";
import { motion } from "framer-motion";
import AboutHeader from "../../../ResuableComponents/AboutHeading";
import FacultyFeatures from "./FacultyFeatures";
import FacultySection from "./FacultySection";
import {
  ecehod,
  eceprofessors,
  ecepara,
  csehod,
  cseprofessors,
  csepara,
} from "../../../DataFile";
const OurTeam = () => {
  return (
    <section className="w-full py-10">
      <AboutHeader />
      <div className="px-3 py-5 text-justify">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl font-bold mb-4"
          style={{
            color: "#03291fe4",
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Distinguished Faculty
        </motion.h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Over the past five years, GNITS has made significant strides in
          innovation and intellectual property, reflecting our commitment to
          research and development. Our faculty and students have successfully
          published 57 patents, with a consistent increase in activity each
          year. In addition, 9 patents have been granted during this period,
          showcasing our capability to translate groundbreaking research into
          recognized intellectual property. In 2023 alone, GNITS published 13
          patents, marking a peak in our research output, and secured 1 patent
          grant, further solidifying our position as a leader in technological
          innovation.
        </p>
      </div>
      <FacultyFeatures />
      <FacultySection hod={ecehod} professors={eceprofessors} para={ecepara} />
      <FacultySection hod={csehod} professors={cseprofessors} para={csepara} />
    </section>
  );
};

export default OurTeam;
