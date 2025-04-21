import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutHeader from "../../ResuableComponents/AboutHeading";

const policiesData = [
  {
    title: "Governance Policies",
    description:
      "Governance policies are a set of guidelines that help make decisions.",
    policies: [
      "E-Governance Policy",
      "HR POLICY",
      "Training Policy for Technical Teacher",
      "Visiting Adjunct Faculty Policy",
      "IT-Policy",
      "Budget Policy",
    ],
  },
  {
    title: "Grievance Policies",
    policies: ["Internal Complaints Policy", "Grievance Redressal Policy"],
  },
  {
    title: "Innovation & Incubation Policies",
    policies: ["IPR Policy", "Innovation and Startup Policy"],
  },
  {
    title: "R&D Policies",
    policies: [
      "Research and Consultancy Policy",
      "Plagiarism Policy",
      "SEED Grant Policy",
    ],
  },
  {
    title: "Student Policies",
    policies: [
      "Admission-Policy",
      "Code-of-Ethics-Students",
      "Awards and Prizes Policy",
      "Placement Policy",
      "Internship Policy",
      "Hostel Policy",
      "Alumnae Policy",
    ],
  },
];

const Policies = () => {
  return (
    <>
      <AboutHeader
        title="Policies"
        image="https://gnits.ac.in/wp-content/uploads/2025/01/SDS_9579-scaled.jpg"
      />

      {policiesData.map((section, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, margin: "-100px" });

        return (
          <div
            key={index}
            className={`${
              index % 2 !== 0 ? "bg-[#e4ebf0]" : "bg-white"
            } w-full`}
          >
            <div className="w-full max-w-7xl mx-auto py-10 px-4 sm:px-8 md:px-16">
              <motion.h2
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="!text-[42px] !font-bold !text-green-900 mb-4"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                {section.title}
              </motion.h2>

              {section.description && (
                <p className="text-base sm:text-lg text-[#003333] mb-6">
                  {section.description}
                </p>
              )}

              <div className="flex flex-wrap gap-4">
                {section.policies.map((policy, idx) => (
                  <button
                    key={idx}
                    className="bg-[#d18800] text-white font-semibold px-6 py-4 text-base min-w-[220px] rounded-none shadow-md hover:brightness-110 transition-all duration-300"
                  >
                    {policy}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Policies;
