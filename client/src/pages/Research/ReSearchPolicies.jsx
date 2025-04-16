import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const ResearchPolicies = () => {
  const policies = [
    "Research and Consultancy Policy",
    "Intellectual Property Rights Policy",
    "Code of Ethics Policy",
    "Plagiarism Policy",
    "SEED Policy",
  ];

  return (
    <div className="bg-blue-50 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Section */}
        <div className="flex flex-col space-y-6">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="flex items-center justify-start mb-4 border-b border-yellow-500 pb-2"
            >
              <FaArrowCircleRight className="mr-4" />
              <span className="text-gray-800 font-medium">{policy}</span>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="">
          <h1
            className="text-3xl font-bold mb-4"
            style={{
              color: "#06483D",
            }}
          >
            Research Policies
          </h1>
          <p className="text-gray-600">
            Our research policies are designed to uphold the highest standards
            of ethical conduct, innovation, and academic integrity. We emphasize
            transparency, data integrity, and the responsible use of resources.
            Researchers are expected to maintain rigorous standards in their
            work, ensuring that all research activities are conducted with
            honesty, respect for participants, and a commitment to advancing
            knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchPolicies;
