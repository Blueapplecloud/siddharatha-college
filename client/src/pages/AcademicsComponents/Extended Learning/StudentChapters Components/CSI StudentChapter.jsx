import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const points = [
  "Approximately 400 students, primarily from Computer Science and IT.",
  "15+ coding competitions, tech talks, and workshops focusing on software development and IT technologies.",
  "3-4 major hackathons with 200+ participants each year.",
  "10+ projects each year, encouraging collaboration across different engineering disciplines.",
  "Specialized training sessions for 100+ students annually through partnerships with leading IT companies.",
  "Development of 2–3 software applications annually for non-profits and local communities.",
];

const CSI = () => {
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
          CSI Student Chapter
        </motion.h2>

        {/* Description */}
        <p className="text-[#444] leading-relaxed text-[16px] font-[Urbanist]">
          The CSI Student Chapter at <strong>SIDDHARTHA</strong> is a vibrant
          community of computer science and IT enthusiasts committed to staying
          at the forefront of technological advancements. As one of the most
          active student bodies on campus, the chapter is instrumental in
          organizing a wide range of activities that promote coding, software
          development, and IT skills. Through hackathons, tech talks, webinars,
          and workshops on topics like Data Science, Machine Learning, and
          Cybersecurity, the CSI chapter nurtures a culture of innovation and
          problem-solving. The chapter also provides its members with
          opportunities to participate in inter-college competitions and
          collaborate on projects that address real-world challenges. With a
          focus on both technical expertise and soft skills, CSI SIDDHARTHA
          ensures that its members are well-prepared to meet the demands of the
          ever-evolving IT industry.
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
                <CheckCircle className="text-[#C7923E] w-5 h-5 mt-1" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://gnits.ac.in/wp-content/uploads/2024/09/csi-logo.png"
              alt="CSI Logo"
              className="rounded-xl w-full h-full object-contain shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSI;
