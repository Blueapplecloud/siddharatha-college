import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const AboutHeader = ({ title, image }) => {
  const location = useLocation();
  const defaultImage = "/default-bg.jpg";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      className="relative h-[40vh] md:h-[45vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${image || defaultImage})` }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/80"></div>

      {isInView && (
        <div className="relative z-10 text-white px-6 md:px-16 w-full">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mt-4 pt-2 border-t border-amber-400 inline-block"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {title}
          </motion.h1>

          <motion.div
            className="text-sm md:text-base mt-2"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <Link
              to="/"
              className="text-white hover:!text-yellow-300 !underline"
            >
              Home
            </Link>{" "}
            /{" "}
            <span className="text-white capitalize">
              {location.pathname.slice(1)}
            </span>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AboutHeader;
