import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    label: "Highest Package Placed",
    value: "51.03 LPA",
    percentage: 100,
    bgColor: "bg-yellow-400",
  },
  {
    label: "Percentage of Students Placed",
    value: "69.58%",
    percentage: 69.58,
    bgColor: "bg-teal-900 text-white",
  },
  {
    label: "Avg. Base Salary",
    value: "8.64 LPA",
    percentage: 17,
    bgColor: "bg-black text-white",
  },
];

const additionalStats = [
  {
    label: "2021-22 Median Salary",
    value: "₹ 6 LPA",
  },
  {
    label: "23-24 Median Salary",
    value: "₹ 7.6 LPA",
  },
  {
    label: "Increase in Salary",
    value: "~ 27 %",
  },
];

const getRandomValue = (original) => {
  const isPercentage = original.includes("%");
  const isLPA = original.includes("LPA");
  const isRupee = original.includes("₹");

  const base = parseFloat(original.replace(/[^\d.]/g, ""));
  const random = (Math.random() * base * 2).toFixed(2);

  let suffix = "";
  if (isPercentage) suffix = "%";
  if (isLPA) suffix = " LPA";
  if (isRupee) suffix = "₹ ";

  return `${isRupee ? suffix : ""}${random}${!isRupee ? suffix : ""}`;
};

const PlacementsSuccessBar = () => {
  const [shuffledValues, setShuffledValues] = useState(
    stats.map((s) => s.value)
  );
  const [shuffledAdditional, setShuffledAdditional] = useState(
    additionalStats.map((s) => s.value)
  );
  const hasShuffled = useRef(false);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isInView && !hasShuffled.current) {
      hasShuffled.current = true;
      const duration = 3000;
      const interval = 100;
      let timePassed = 0;

      const shuffleInterval = setInterval(() => {
        setShuffledValues((prev) =>
          prev.map((_, i) => getRandomValue(stats[i].value))
        );
        setShuffledAdditional((prev) =>
          prev.map((_, i) => getRandomValue(additionalStats[i].value))
        );

        timePassed += interval;
        if (timePassed >= duration) {
          clearInterval(shuffleInterval);
          setShuffledValues(stats.map((s) => s.value));
          setShuffledAdditional(additionalStats.map((s) => s.value));
        }
      }, interval);

      return () => clearInterval(shuffleInterval);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      className="px-6 py-12 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-6">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>{stat.label}</span>
              <span>{shuffledValues[index]}</span>
            </div>
            <div className="w-full bg-gray-300 h-6 rounded overflow-hidden">
              <motion.div
                className={`h-6 ${stat.bgColor} rounded transition-all duration-300`}
                initial={{ width: "0%" }}
                animate={isInView ? { width: `${stat.percentage}%` } : {}}
                transition={{ duration: 2, delay: 0.2 * index }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="text-md mt-4 text-gray-600 font-medium">
        Statistics According to 2024 Placements.
      </p>

      <div className="flex flex-wrap gap-4 mt-6">
        {[
          "2021-25 Placement Statistics",
          "2020-24 Placement Statistics",
          "2019-23 Placement Statistics",
        ].map((text, i) => (
          <button
            key={i}
            className="bg-amber-600 hover:bg-amber-400 hover:text-white text-white text-lg px-6 py-3 rounded transition-colors"
          >
            {text}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {additionalStats.map((stat, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 hover:bg-amber-400 hover:text-white p-8 rounded-xl shadow text-center text-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className="text-3xl font-extrabold text-teal-900">
              {shuffledAdditional[i]}
            </div>
            <div className="mt-3 text-md">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PlacementsSuccessBar;
