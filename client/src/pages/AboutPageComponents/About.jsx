import React from "react";
import { motion } from "framer-motion";
import AboutHeader from "../../ResuableComponents/AboutHeading";
import SiddharthaGlance from "./Glance";
import Milestones from "./MileStone.jsx";
// import bgImage from "../assets/about-bg.jpg"; // Replace with actual path

let features=["Skill Enhancement", "Personal Growth", "Resilience", "Leadership Development", "Equality", "Advocacy"]

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    }}

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const ScrollFeatureStrip = () => {
  return (
<>
<AboutHeader 
  title="About SIDDHARTHA" 
  image="https://th.bing.com/th/id/R.c2ac677dae296ac13edc863dac478d09?rik=dDCcTL32%2bFG1Aw&riu=http%3a%2f%2fwww.sistk.org%2fimages%2f1.png&ehk=lJLTsg8S%2fpYeMZBruh0Qr%2fP%2fwCyjABUEAYWvN9n15W4%3d&risl=&pid=ImgRaw&r=0" // or an imported image or URL
/>

      <div className="overflow-hidden whitespace-nowrap bg-white py-4 text-yellow-600 text-lg font-semibold">
      <motion.div
        className="flex gap-x-8"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...features, ...features].map((feature, index) => (
          <div key={index} className="mx-2 flex items-center">
            <span>{feature}</span>
            {index % features.length !== features.length - 1 && (
              <span className="mx-2">/</span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
        <SiddharthaGlance/>
        <Milestones/>
</>
  );
};

export {  ScrollFeatureStrip };
