import React from 'react';
import AboutHeading from "../../../ResuableComponents/AboutHeading";
import { motion } from 'framer-motion';
import { ArrowDownCircleIcon   } from '@heroicons/react/24/solid'; // Import the icon

const timetableData = [
  {
    title: 'Academic Timetable: 2024-25',
    items: [
      'I B.Tech - I Sem',
      'II BTech-II sem',
      'B.Tech -II semester',
      'III BTech II sem',
      'IV BTech II sem',
      'CST-III-II Sem TT',
      'IT-III-II Sem TT',
      'IT-II-II Sem TT',
    ],
  },
  {
    title: 'B.Tech 2024-25',
    items: [
      'III-II-Minor-AIML-TT',
      'IV DS -II-sem',
      'IV-AIML-II-sem.',
      'II-II CSE',
      'III-II-CSE',
      'IV-II-sem',
    ],
  },
  {
    title: 'M.Tech 2024-25',
    items: [
      'M.Tech I Year II Sem',
      'I-II M.Tech TT',
      'EEE (PEED)',
    ],
  },
  {
    title: 'CSE - AIML',
    items: [
      'IV B.Tech',
      'III B.Tech',
      'II B.Tech',
    ],
  },
  {
    title: 'CSE - DS',
    items: [
      'IV B.Tech',
      'III B.Tech',
      'II B.Tech',
    ],
  },
  {
    title: 'ECE',
    items: [
      'IV B.Tech',
      'III B.Tech',
      'II B.Tech',
    ],
  },
  {
    title: 'EEE',
    items: [
      'IV B.Tech',
      'III B.Tech',
      'II B.Tech',
    ],
  },
  {
    title: 'ETE',
    items: [
      'IV B.Tech',
      'III B.Tech',
      'II B.Tech',
    ],
  },
  {
    title: 'IT',
    items: [
      'IV B.Tech',
      'III B.Tech',
      'II B.Tech',
    ],
  },
  {
    title: 'M-Tech',
    items: [
      'M.Tech II Sem (CSE)',
      'I M.Tech II Sem(PEED)',
      'I M.Tech II Sem(WMC)',
    ],
  },
];

function AcademicTimetables() {
  return (
    <>
      <section>
        <AboutHeading title="Academic Timetables" image="images/clgimg2.jpeg" />
      </section>
      <section className="px-10 md:px-16 py-8 text-[#003d3d]">
        <motion.h1
          className="text-[#003d3d] text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Year wise Curriculum Schedule
        </motion.h1>

        {timetableData.map((section, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-lg font-semibold text-[#004643] mb-4">{section.title}</h3>
            <div className="flex flex-wrap gap-2 p-2">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  className="bg-[#d4880c] text-white py-3 px-3 rounded-md text-sm font-semibold hover:bg-[#e0a730] transition duration-300 flex items-center gap-2"
                >
                  <ArrowDownCircleIcon   className="w-5 h-5 " />
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default AcademicTimetables;