import { color } from "framer-motion";
import React from "react";

const CareerPath = ({ careerPaths }) => {
  return (
    <div className="bg-gray-100 py-12 px-20">
      <div className="max-w-4xl  px-6">
        <h2
          className="text-2xl sm:text-3xl font-bold  mb-4"
          style={{
            color: "#013F41",
          }}
        >
          Career Path
        </h2>
        <p className="text-gray-700 font-semibold mb-8 md:text-lg py-2">
          Discover the pivotal moments that have shaped the institution's
          growth, from its foundational years to its emergence as a leading
          engineering college.
        </p>
        <div className="flex flex-wrap justify-start gap-4">
          {careerPaths.map((path, index) => (
            <div
              key={index}
              className=" text-white font-medium px-4 py-2  rounded-md shadow-md hover:bg-orange-400 transition duration-300"
              style={{ backgroundColor: "#D1830F" }}
            >
              {path}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPath;
