import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const points = [
  "500+ active members from various engineering disciplines",
  "20+ technical workshops, webinars, and hackathons.",
  "50+ students participate annually in international IEEE events like IEEE Xtreme and IEEE Day.",
  "5-6 STEM education programs conducted in local schools each year.",
  "Sponsored workshops and competitions with participation from 10+ industry experts annually.",
  'Multiple "Best Student Branch" awards at regional IEEE conferences',
];

const IEEE = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="py-16 px-4 lg:px-8 max-w-7xl mx-auto flex flex-col gap-8">
      {/* Heading */}
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[38px] !font-bold text-[#1E2B4F] font-[Urbanist] text-left"
      >
        IEEE Student Chapter
      </motion.h2>

      {/* Description */}
      <p className="text-[#444] leading-relaxed text-[16px] font-[Urbanist]">
        The IEEE Student Branch at <strong>SIDDHARTHA</strong> stands as a
        dynamic platform for students passionate about advancing technology and
        innovation. With a strong focus on electronics, electrical, and computer
        engineering disciplines, the chapter is dedicated to fostering technical
        skills, professional development, and research among its members. IEEE{" "}
        <strong>SIDDHARTHA</strong> regularly organizes a diverse array of
        activities, including technical workshops, hackathons, coding
        competitions, and seminars on cutting-edge topics such as Robotics, IoT,
        AI, and Embedded Systems. The chapter also plays a pivotal role in
        connecting students with industry experts through guest lectures and
        mentorship programs, providing a bridge between academic learning and
        real-world applications. By participating in global IEEE events and
        conferences, <strong>SIDDHARTHA</strong> students are given the
        opportunity to showcase their talents on an international stage,
        enhancing their knowledge, networking, and career prospects.
      </p>

      {/* Image and Points */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://gnits.ac.in/wp-content/uploads/2024/09/WhatsApp-Image-2024-01-20-at-09.21.06-1-1024x768-1.jpeg"
            alt="IEEE Group"
            className="rounded-xl w-full h-full object-cover shadow-md"
          />
        </div>

        {/* Tick Mark Points */}
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
      </div>
    </div>
  );
};

export default IEEE;
