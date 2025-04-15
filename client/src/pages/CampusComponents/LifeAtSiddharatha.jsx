import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import AboutHeader from "../../ResuableComponents/AboutHeading";
import { FaRegCommentDots } from "react-icons/fa";
import {
  FaTools,
  FaUserGraduate,
  FaUsers,
  FaRegNewspaper,
} from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";
import StudentCorner from "./StudentCorner";

const LifeAtSiddhartha = () => {
  const cardData = [
    {
      title: "Skill Enhancement",
      description:
        "GNITS fosters a supportive and inclusive environment that empowers women to thrive in technology and engineering, providing the confidence and skills needed for leadership and success.",
      icon: <FaTools />,
      // bgImage: "url('images/student/img1.jpeg')",
    },
    {
      title: "Student Counseling",
      description:
        "GNITS offers state-of-the-art labs and research centers, giving students the opportunity to engage in hands-on learning and innovate in emerging fields like AI, VLSI, and more.",
      icon: <MdOutlineSupportAgent />,
      // bgImage: "url('images/student/img2.jpeg')",
    },
    {
      title: "Student Chapters",
      description:
        "Our curriculum is developed with direct industry input, ensuring students gain cutting-edge, relevant skills that prepare them for dynamic and successful global careers.",
      icon: <FaUsers />,
      // bgImage: "url('images/student/img3.jpeg')",
    },
    {
      title: "EDC Cell",
      description:
        "Our dedicated placement cell works to connect students with top employers, offering career guidance and ensuring excellent job opportunities in prestigious companies worldwide.",
      icon: <GiNetworkBars />,
      // bgImage: "url('images/student/img4.jpeg')",
    },
    {
      title: "NPTEL",
      description:
        "GNITS encourages students to grow beyond academics through leadership programs, extracurricular activities, and skill-building workshops, fostering well-rounded personal and professional development.",
      icon: <HiOutlineAcademicCap />,
      // bgImage: "url('images/student/img5.jpeg')",
    },
    {
      title: "EC Council Academia",
      description:
        "GNITS encourages students to grow beyond academics through leadership programs, extracurricular activities, and skill-building workshops, fostering well-rounded personal and professional development.",
      icon: <FaUserGraduate />,
      // bgImage: "url('images/student/img6.jpeg')",
    },
    {
      title: "Newsletter",
      description:
        "GNITS offers state-of-the-art labs and research centers, giving students the opportunity to engage in hands-on learning and innovate in emerging fields like AI, VLSI, and more.",
      icon: <FaRegNewspaper />,
      // bgImage: "url('images/student/img7.jpeg')",
    },
    {
      title: "Student Blog",
      description:
        "GNITS encourages students to grow beyond academics through leadership programs, extracurricular activities, and skill-building workshops, fostering well-rounded personal and professional development.",
      icon: <BsPencilSquare />,
      // bgImage: "url('images/student/img8.jpeg')",
    },
  ];
  return (
    <>
      <AboutHeader
        title="Campus Life"
        image="https://universityinnovation.org/images/4/4f/Depvr.JPG"
      />
      <div className="px-4 md:px-10 py-10 md:py-20 bg-gray-100">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-12 flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Content Section */}
          <div className="md:w-1/2">
            <motion.h2
              className="text-5xl font-serif font-semibold text-[#003f3c] mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
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
        <StudentCorner />
      </div>
    </>
  );
};

export default LifeAtSiddhartha;
