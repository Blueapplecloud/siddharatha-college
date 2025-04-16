import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

// Define the data for the cards
const highlightsData = [
  {
    value: 120.42, // Store the numeric value for animation
    valueSuffix: " Lakhs",
    subText: "SEED grants",
    imageSrc: "...", // Replace with actual image source
    altText: "SEED grants image",
  },
  {
    value: 57,
    subText: "Patents",
    imageSrc: "...", // Replace with actual image source
    altText: "Patents image",
  },
  {
    value: 823,
    subText: "Journal Publications",
    imageSrc: "...", // Replace with actual image source
    altText: "Journal Publications image",
  },
  {
    value: 90, // Approximate value for animation
    valuePrefix: "~",
    subText: "Consultancy Projects",
    imageSrc: "...", // Replace with actual image source
    altText: "Consultancy Projects image",
  },
  {
    value: null, // No numeric value fobgr these cards
    subText: "Research Advisory & Ethics Committee",
    imageSrc: "...", // Replace with actual image source
    altText: "Research Advisory & Ethics Committee image",
  },
  {
    value: null,
    subText: "Workshops/Seminars-Memorial Lecturers",
    imageSrc: "...", // Replace with actual image source
    altText: "Workshops/Seminars-Memorial Lecturers image",
  },
  {
    value: null,
    subText: "Books/Book Chapters/Conferences",
    imageSrc: "...", // Replace with actual image source
    altText: "Books/Book Chapters/Conferences image",
  },
  {
    value: null,
    subText: "International Conference Organized",
    imageSrc: "...", // Replace with actual image source
    altText: "International Conference Organized image",
  },
];

// Animated Value Component
const AnimatedValue = ({ targetValue, prefix = "", suffix = "" }) => {
  const [value, setValue] = useState(0);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (targetValue !== null) {
      let startTime;
      const duration = 1000; // Animation duration in milliseconds

      const animateValue = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setValue(Math.floor(progress * targetValue));
        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animateValue);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animateValue);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    } else {
      setValue(null); // Reset value if no target value
    }
  }, [targetValue]);

  return (
    <div className="text-2xl font-bold">
      {prefix}
      {value !== null ? value : ""}
      {suffix}
    </div>
  );
};

// Card Component
const HighlightCard = ({ data }) => {
  return (
    <div className="relative w-full h-55 rounded-md overflow-hidden shadow-md group">
      {/* 🔸 Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/chairman.jpg')" }}
      />
      {/* 🔸 Overlay Layer */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      {/* 🔸 Hover Overlay Layer */}
      <div className="absolute inset-0  z-10  group-hover:bg-orange-500 transition-opacity duration-300 pointer-events-none" />

      {/* 🔸 Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
        {/* Border line */}
        <div className="w-1/5 border-t-2 border-white mt-2 mb-3"></div>

        {/* Icon */}
        <div className="text-yellow-300 mb-2">
          <FaArrowRight size={30} />
        </div>

        {/* Text Content */}
        {data?.value !== null && (
          <div className="text-2xl font-bold">
            <AnimatedValue
              targetValue={data.value}
              prefix={data.valuePrefix || ""}
              suffix={data.valueSuffix || ""}
            />
          </div>
        )}
        <div className="text-lg">{data?.subText}</div>
      </div>
    </div>
  );
};

// Main R&D Highlights Component
const RDHighlightsAd = () => {
  return (
    <div className="bg-[#003D3D] py-8 px-30 text-white">
      <div className="container mx-auto px-4 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 py-4">
          R&D Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlightsData.map((item, index) => (
            <HighlightCard key={index} data={item} />
          ))}
        </div>
        <div className="mt-6 text-right">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
            Explore Research Centers{" "}
            <FaArrowRight className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RDHighlightsAd;
export { HighlightCard };
