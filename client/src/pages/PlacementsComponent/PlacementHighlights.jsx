import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cards = [
  {
    title: "Strong Industry Connections",
    description:
      "SIDDHARTHA maintains robust relationships with leading companies from core, IT, and non-IT sectors. Companies like Deloitte, Microsoft, JPMC, Infosys, and ServiceNow regularly participate in campus recruitment, providing opportunities for students in various disciplines.",
    bgImage:
      "https://gnits.ac.in/wp-content/uploads/2024/12/SDS_0040-1-768x512.jpg",
  },
  {
    title: "Diverse Range of Recruiters",
    description:
      "Recruiters from both core engineering sectors (such as L&T, Carrier, Ashok Leyland, and Siemens) and service/IT sectors (such as Accenture, Capgemini, and Cognizant) frequently visit SIDDHARTHA for campus placements. This gives students flexibility in career paths based on their skills and preferences.",
    bgImage:
      "https://care.ac.in/engineering/wp-content/uploads/sites/7/2023/02/C1-scaled.jpg",
  },
  {
    title: "Impressive Placement Records",
    description:
      "With an average placement rate of over 80% each year, SIDDHARTHA ensures that its students secure positions in reputed companies with competitive salary packages. The highest package offered recently was around 53 Lakhs per annum, with an average package of around 8 Lakhs per annum.",
    bgImage: "https://sxuk.edu.in/img/campus/placement2019-01.jpg",
  },
  {
    title: "Industrial Training and Internships",
    description:
      "SIDDHARTHA emphasizes hands-on industrial exposure by providing industrial training opportunities and internships with organizations such as PWC, Apple, Micron, CISCO. These internships bridge the gap between academic learning and real-world experience.",
    bgImage:
      "https://www.gcoeara.ac.in/images/gallery/auto/Internal%20Combustion%20Engine%20Lab1.jpg",
  },
  {
    title: "Pre-Placement Training (PPT)",
    description:
      "The institute conducts comprehensive Pre-Placement Training (PPT) sessions for students, focusing on aptitude tests, soft skills, technical interviews, programming and group discussions to ensure they are well-prepared for the recruitment process.",
    bgImage:
      "https://cgpit-bardoli.edu.in/wp-content/uploads/2021/12/unnamed-10.jpg",
  },
  {
    title: "Research and Innovation",
    description:
      "With a strong emphasis on research, SIDDHARTHA graduates are encouraged to engage in innovative projects and contribute to advancements in their field.",
    bgImage:
      "https://www.bowdoin.edu/biology/images/student-research-biology.jpg",
  },
];

const PlacementHighlights = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="py-16 px-6 md:px-12 bg-gradient-to-r from-white to-amber-100"
      id="placement-highlights"
    >
      <div className="text-left mb-12 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-black text-gray-800 leading-tight">
          Key Placement Highlights
        </h2>
        <p className="text-gray-600">
          At SIDDHARTHA, our placement program is a cornerstone of our
          commitment to student success, ensuring that our graduates are fully
          prepared to enter the professional world with confidence by offering a
          comprehensive range of training sessions, workshops, and industry
          interactions designed to enhance technical skills, communication
          abilities, and overall employability.
        </p>
      </div>

      <div
        ref={ref}
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300 h-101"
          >
            <div
              className="absolute inset-0 bg-cover bg-center brightness-50 transition duration-300 group-hover:brightness-50"
              style={{ backgroundImage: `url(${card.bgImage})` }}
            />

            <div className="absolute inset-0 bg-transparent group-hover:!bg-[#5e3d2c]/90 transition duration-300 z-10" />

            <div className="relative z-20 p-6 h-full flex flex-col justify-center text-left text-white">
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlacementHighlights;
