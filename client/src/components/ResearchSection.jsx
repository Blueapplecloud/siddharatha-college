import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ResearchSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="bg-[#fdf4e7] py-12 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-10">
      {/* Left Image */}
      <div className="flex-1 rounded-lg overflow-hidden">
        <img
          src="/research-image.jpg" // Replace with your image path
          alt="Research at SIDDHARATHA"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#14352E] mb-4">
          Research at SIDDHARATHA
        </h2>
        <p className="text-[#14352E] mb-6 text-base lg:text-lg">
          At SIDDHARATHA, research is a cornerstone of our academic philosophy,
          driving innovation and technological advancements. Our Research and
          Development (R&D) Cell is a dynamic hub that fosters a strong
          research ecosystem, aligned with the goals of NEP 2020.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 items-center">
  {[
    { value: 1902, label: "Publications" },
    { value: 111, label: "Patents" },
    { value: 1796, label: "Citations" },
    { value: 156, label: "Funded Projects", prefix: "₹ ", suffix: " Lks +" },
    { value: 137, label: "Seed Grant Sanctioned", prefix: "₹ ", suffix: " Lks +" },
  ].map((stat, index) => (
    <div key={index} className="text-center">
      <h3 className="!text-[#D28D07] text-2xl font-extrabold tracking-wide">
        {inView ? (
          <CountUp
            start={0}
            end={stat.value}
            duration={3}
            prefix={stat.prefix || ""}
            suffix={stat.suffix || ""}
          />
        ) : (
          stat.prefix ? `${stat.prefix}0${stat.suffix || ""}` : "0"
        )}
      </h3>
      <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
    </div>
  ))}

  <button className="bg-[#D28D07] text-white text-sm px-5 py-2 rounded-md font-medium flex items-center gap-1 hover:bg-white hover:!text-[#D28D07] border border-[#D28D07] transition duration-300 mx-auto">
    Research <FaArrowUpRightFromSquare className="text-sm" />
  </button>
</div>


        
      </div>
    </div>
  );
};

export default ResearchSection;
