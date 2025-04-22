import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

const points = [
  "Conducts 12–15 technical workshops and project exhibitions annually.",
  "Supports interdisciplinary projects in IoT, VLSI, and telecommunications.",
  "Facilitates student presentations at national IETE conferences.",
  "Maintains strong alumni connections for mentoring and guidance.",
  "Engages in community outreach initiatives using technology.",
];

const IETE = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="w-full bg-[#e3ecf0]">
      <div className="py-16 px-4 lg:px-8 max-w-7xl mx-auto flex flex-col gap-8">
        {/* Heading */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[38px] !font-bold text-[#1E2B4F] font-[Urbanist] text-left"
        >
          IETE Student Chapter
        </motion.h2>

        {/* Description */}
        <p className="text-[#444] leading-relaxed text-[16px] font-[Urbanist]">
          The IETE Student Forum at <strong>SIDDHARTHA</strong> is a hub for
          students passionate about electronics and telecommunication
          engineering, offering a platform for exploring and advancing in these
          dynamic fields. The chapter is dedicated to enhancing students’
          understanding and practical skills through workshops, technical
          symposiums, and project exhibitions focused on electronics, wireless
          communication, signal processing, and VLSI design. IETE SIDDHARTHA
          encourages its members to participate in national-level conferences,
          where they can present their research and innovations, gaining
          recognition and experience in the broader engineering community. With
          a strong emphasis on hands-on learning, the chapter facilitates
          projects that often lead to significant contributions in the fields of
          electronics and telecommunications. Through networking events and
          mentorship programs, IETE SIDDHARTHA connects students with industry
          professionals and alumni, helping them build a strong foundation for
          their future careers.
        </p>

        {/* Image and Points */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Points */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 mt-15">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-[16px] font-[Urbanist] text-[#333]"
              >
                <ChevronRight className="text-[#C7923E] w-5 h-5 mt-1" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://gnits.ac.in/wp-content/uploads/2024/09/3Q3A4945-1536x1024.jpg"
              alt="IETE Activity"
              className="rounded-xl w-full h-full object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IETE;
