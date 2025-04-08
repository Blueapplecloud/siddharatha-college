import { FaBook, FaUniversity } from "react-icons/fa";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { GiNestedHearts } from "react-icons/gi";
import { MdGroups3 } from "react-icons/md";
import { BsDiagram3 } from "react-icons/bs";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    title: "Academic Excellence",
    icon: <BsDiagram3 className="text-3xl" />,
    description:
      "We uphold the highest standards in education, preparing students for success in their careers and beyond.",
    bg: "bg-green-900 text-white",
  },
  {
    title: "Research and Development",
    icon: <FaBook className="text-3xl text-green-900" />,
    description:
      "We drive innovation through active engagement in research, fostering advancements in technology and real-world solutions.",
    bg: "bg-white text-green-900",
  },
  {
    title: "Diversity, Equity, and Inclusion",
    icon: <GiNestedHearts className="text-3xl" />,
    description:
      "We create an inclusive environment where diversity is embraced, and everyone has an equal opportunity to succeed.",
    bg: "bg-green-900 text-white",
  },
  {
    title: "Financial Independence",
    icon: <FaUniversity className="text-3xl text-green-900" />,
    description:
      "We equip students with the knowledge and skills to achieve financial independence and thrive in their chosen fields.",
    bg: "bg-white text-green-900",
  },
  {
    title: "Engagement and Growth",
    icon: <MdGroups3 className="text-3xl" />,
    description:
      "We encourage active participation in initiatives that contribute to societal growth and positive community impact.",
    bg: "bg-green-900 text-white",
  },
];




const words = ["SIDDHARATHA", "is", "Beyond", "Ordinary"];
 function AnimatedHeading() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 
  return (
    <motion.div
      ref={ref}
      className="w-[355px] flex gap-x-2 text-4xl font-bold text-green-900 mb-4"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.3, duration: 0.5 }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}


export default function BeyondOrdinary() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {AnimatedHeading()}
        <p className="text-gray-700 mb-8 max-w-5xl ">
          Our programs are designed to equip students with the skills and knowledge needed to excel in today’s rapidly changing technological landscape.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded font-semibold flex items-center gap-2 mb-12 hover:bg-white hover:text-orange-500 transition cursor-pointer">
          Learn More About SIDDHARATHA
          <FaArrowUpRightFromSquare className="text-sm" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card, index) => (
           <div
           key={index}
           className={`${card.bg} p-6 h-100 flex flex-col justify-between transition-all duration-[300ms] ease-in-out hover:scale-110 hover:bg-amber-400`}
         >
         
         
         
              <div className="flex flex-col gap-4">
                <div className="border-t-2 border-white w-10 mb-2" />
                <div className="text-white">{card.icon}</div>
                <h3 className="font-bold text-lg">{card.title}</h3>
                <p className="text-sm text-inherit">{card.description}</p>
              </div>
              <div className="mt-4">
                <a href="#" className="flex items-center gap-2 font-semibold underline">
                  Explore <FaArrowUpRightFromSquare className="text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}