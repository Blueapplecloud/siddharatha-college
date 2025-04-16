import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ResearchCenters = () => {
  const centers = [
    { name: "MAC – Center of Excellence" },
    { name: "IoT Enabled Centre of Excellence" },
    {
      name: "Centre of Excellence for Advanced Research in Artificial Intelligence",
    },
    { name: "CoE for Deep Learning in Eye Diseases Prognosis" },
    { name: "AR – VR Centre of Excellence" },
    { name: "Centre of Excellence in Antenna Radiation and Pattern Analysis" },
    { name: "CoE for Signal Processing and Machine Learning (CoESPML)" },
    { name: "Centre of Excellence for Internet of Things (IoT)" },
    { name: "Cyber Security Centre of Excellence" },
  ];

  return (
    <div className="bg-white px-4 py-8 md:px-16 md:py-12">
      <div className=" mb-8">
        <h1
          className="text-4xl md:text-4xl font-bold  mb-4"
          style={{
            color: "#06483D",
            fontWeight: "bold",
          }}
        >
          State-of-the-Art Research Centers
        </h1>
        <p className="font-semibold">
          Siddhartha has centers of excellence in artificial intelligence,
          antenna radiation, signal processing etc. Our research center helps
          students innovate and do research. They are equipped with the
          necessary infrastructure to help students with their projects.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {centers.map((center, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4  hover:bg-orange-400 transition-colors duration-300 flex flex-col justify-between"
          >
            <p className="text-lg font-semibold text-gray-800 mb-4">
              {center.name}
            </p>
            <a
              href="#"
              className="flex items-center text-gray-800 hover:text-white font-medium"
              style={{
                color: "#06483D",
              }}
            >
              View CoE <FiArrowUpRight className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchCenters;
