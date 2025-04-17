import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import AboutHeader from "../../ResuableComponents/AboutHeading";
import FacilitiesAtSiddhartha from "./FacilitiesAtSiddhartha";
import TransportRoutes from "./TransportRoutes";
import StudentCorner from "./StudentCorner";
 

const LifeAtSiddhartha = () => {
  return (
    <>
      <AboutHeader
        title="Campus Life"
        image="https://universityinnovation.org/images/4/4f/Depvr.JPG"
      />

      <div className="px-4 md:px-10 py-10 bg-gray-100">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Content Section */}
          {/* Content Section */}
          <div className="md:w-1/2">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 pt-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              Life At <span className="text-[#005f57]">SIDDHARTHA</span>
            </motion.h2>

            <p className="text-lg leading-relaxed text-gray-700">
              Life at SIDDHARTHA is dynamic and inspiring, designed to empower
              students with a rich learning environment and holistic
              development. The institution is built with modern infrastructure
              that encourages both academic achievement and individual growth. A
              wide variety of student-led clubs and communities provide avenues
              for co-curricular engagement, innovation, and recreation. Annual
              fests and inter-college competitions offer platforms to showcase
              talent, explore new interests, and grow beyond academics.
            </p>
          </div>

          {/* Carousel Section */}
          <div className="md:w-1/2">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={3000}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <div>
                <img
                  src="https://th.bing.com/th/id/OIP._wH6ItTsnkyyki7hublrtgHaDP?w=314&h=152&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="Life at Siddhartha 1"
                  className="object-cover h-[400px] w-full"
                />
              </div>
              <div>
                <img
                  src="https://th.bing.com/th/id/OIP.jVzn7G3R6GPcG_nuMG20jAHaE8?w=272&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="Life at Siddhartha 2"
                  className="object-cover h-[400px] w-full"
                />
              </div>
              <div>
                <img
                  src="https://th.bing.com/th/id/OIP.FcP5XKbtezdlEUE7PH_B1wHaE8?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="Life at Siddhartha 3"
                  className="object-cover h-[400px] w-full"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <FacilitiesAtSiddhartha />
      <TransportRoutes />
      <StudentCorner />

    </>
  );
};

export default LifeAtSiddhartha;
