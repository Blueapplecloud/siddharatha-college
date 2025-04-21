import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DepartmentBanner = ({ backgroundImage, text }) => {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); 

  return (
    <div
      ref={ref}
      className="relative w-full h-[350px] flex items-center justify-center bg-cover bg-center"
      
      style={{ backgroundImage: `url(${backgroundImage})`,fontFamily: "'Urbanist', sans-serif" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Animated Text */}
      {isInView && (
        <div className="z-10 px-4 text-center">
          <h1 className="text-white !text-[42px] md:text-5xl !font-bold">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>
      )}
    </div>
  );
};

export default DepartmentBanner;
