import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Building from './Building.png'; 

function Enroll() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

  const headingWords = ['Join', 'Siddhartha'];

  return (
    <section
      className="relative h-[450px] w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${Building})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent"></div>
       {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="pl-6 md:pl-16 max-w-[600px]">

          <motion.div
            ref={headingRef}
            className="flex gap-2 text-white text-[2.2rem] font-bold mb-4"
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <p className="text-xl text-white mb-8">
            Empower Your Future with Excellence
          </p>
          <a
            href="#enroll"
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 transition duration-300"
           style={{ textDecoration: 'none' }} 
           >
            <span>Enroll Today</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Enroll;
