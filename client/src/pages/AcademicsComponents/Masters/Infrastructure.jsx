import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageList = [
  "/images/clgimg2.jpeg",
  "/images/clgimg2.jpeg",
  "/images/clgimg2.jpeg",
];

const InfrastructureSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-teal-900 pb-4"
            style={{
              color: "#013F41",
              fontWeight: "bold",
            }}
          >
            Infrastructure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 leading-relaxed font-semibold "
          >
            Siddhartha features cutting-edge labs and advanced resources,
            fostering hands-on learning in emerging technologies like IoT, AI,
            and Data Science, equipping students for industry success.
          </motion.p>
        </div>

        {/* Right Carousel */}
        <div className="w-full lg:w-[650px] max-w-[90%] mx-auto border-4 border-gray-200 rounded-2xl shadow-xl overflow-hidden">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators
            interval={4000}
            transitionTime={800}
          >
            {imageList.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`Infrastructure ${index + 1}`}
                  className="object-cover w-full h-[400px]"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureSection;
