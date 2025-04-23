import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

const points = [
  "Hosts an annual national-level technical fest with wide participation.",
  "Organizes 20+ workshops and seminars each year on various technical topics.",
  "Facilitates innovation incubation through idea generation contests.",
  "Offers professional certification programs in collaboration with industry leaders.",
  "Regularly conducts faculty development programs to enhance teaching methods.",
];

const ISTE = () => {
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
        ISTE Student Chapter
      </motion.h2>

      {/* Description */}
      <p className="text-[#444] leading-relaxed text-[16px] font-[Urbanist]">
        The ISTE Student Chapter at <strong>SIDDHARTHA</strong> serves as a
        cornerstone for the holistic development of engineering students,
        emphasizing both technical proficiency and professional growth. The
        chapter engages students from all engineering disciplines in a variety
        of programs designed to enhance their skills in areas such as technical
        writing, research methodologies, and project management. ISTE SIDDHARTHA
        is renowned for organizing national-level paper presentations, technical
        quizzes, and seminars that encourage students to explore new ideas and
        innovations in engineering education. The chapter also plays a crucial
        role in bridging the gap between academia and industry by facilitating
        industrial visits, internships, and interactive sessions with industry
        experts. By fostering a well-rounded educational experience, ISTE
        SIDDHARTHA prepares its members to excel in their careers and contribute
        meaningfully to the engineering community.
      </p>

      {/* Image and Points */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://gnits.ac.in/wp-content/uploads/2024/09/GNITS-Best-ISTE-Chapter-768x576-1.jpg"
            alt="ISTE Event"
            className="rounded-xl w-full h-full object-cover shadow-md"
          />
        </div>

        {/* Right Chevron Points */}
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
      </div>
    </div>
  );
};

export default ISTE;
