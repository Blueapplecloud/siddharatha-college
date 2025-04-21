import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedTitle = ({ title }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="mb-10 mt-15">
      <h2
        className="!text-[35px] md:text-5xl !font-bold text-[#5e3d2c] text-left flex flex-wrap gap-1"
        style={{ fontFamily: "'Urbanist', sans-serif" }}
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.05,
                  duration: 0.4,
                  ease: "easeOut",
                },
              },
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>
    </div>
  );
};

export default AnimatedTitle;
