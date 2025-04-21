import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaAward } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// we have to install below this commands
// npm install framer-motion
// npm install react-icons
// npm install react-slick
// npm install slick-carousel

const awards = [
  {
    text: "Pride Of Nation Award, 2023 – Southern India. For Best Engineering College For Women Of The Year – Telangana",
  },
  {
    text: "Best Engineering College in the state of erstwhile T.S & A.P by ISTE (2007).",
  },
  {
    text: "Engineering Education Excellence Award - 2022 by Institution of Engineers (India)",
  },
  {
    text: "Life Member of The Institution of Engineers, India (2016).",
  },
  {
    text: "Only Engineering College in the country established MAC Lab by M/s Apple, U.S (2016).",
  },
  {
    text: "Received Educational Leadership Award from Dewang Mehta, National Education Award (2017).",
  },
  {
    text: "Received National Employability Award from Aspiring Minds (2018).",
  },
  {
    text: "Awarded as “Best College for Placements” for the year 2018 by “Stumagz”",
  },
];

const recognitions = [
  "R10 PES India Chapters Zone Global Workshop",
  "Achieved NIRF Ranking 2022: Rank Band in Engineering : 251-300",
  "Received National Employability Award from AMCAT for the 6th consecutive time in 2021",
  "Achieved Rank under Band Promising Category in Atal Ranking of Institutions on Innovation Achievements (ARIIA) Ranking 2021.",
  "Received Certificate of Appreciation for implementing 100 KWP grid connected Solar Power Plant (2014).",
];

const images = [
  "https://gnits.ac.in/wp-content/uploads/2024/12/SWE02874-scaled-e1737466635575-768x480.jpg",
  "https://gnits.ac.in/wp-content/uploads/2025/01/WhatsApp-Image-2024-05-27-at-4.23.36-PM-e1737466663575-768x486.jpeg",
  "https://gnits.ac.in/wp-content/uploads/2025/01/WhatsApp-Image-2024-08-28-at-10.17.37-AM-e1737466389596.jpeg",
  "https://gnits.ac.in/wp-content/uploads/2025/01/with-logo1-e1737466600254-768x461.png",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  cssEase: "linear",
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  pauseOnHover: true,
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const AwardsandRecognitions = ({ title, image }) => {
  const location = useLocation();
  title = "Awards and Recognitions";
  const defaultImage =
    "https://th-i.thgim.com/public/sport/fsqtpk/article67655340.ece/alternates/FREE_1200/TH20RBI.jpg";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
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
                className="text-white hover:!text-yellow-300 !no-underline"
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

      <div className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-bold text-[#003B3F] mb-6">
              Celebrating Our Achievements
            </h1>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              SIDDHARTHA has consistently been recognized for its commitment to
              academic excellence, innovation, and leadership in education. Our
              institution has garnered numerous awards and accolades from
              prestigious organizations, reflecting the hard work and dedication
              of our faculty, staff, and students.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://gnits.ac.in/wp-content/uploads/2024/12/C1913T01-1-768x432.jpg"
              alt="SIDDHARTHA Alumni Event"
              className="rounded-xl w-full max-w-big object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Awards Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-10 border-b-2 border-gray-300 w-fit">
              Awards
            </h2>
            <ul className="space-y-8">
              {awards.map((award, index) => (
                <li key={index} className="flex items-start font-bold gap-4">
                  <div className="text-yellow-500 text-4xl mt-1">
                    <FaAward />
                  </div>
                  <div className="flex flex-col">
                    <div className="w-46 h-0.5 bg-blue-200 mb-2 rounded"></div>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      {award.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Recognitions Section */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-gray-300 w-fit">
              Recognitions
            </h2>
            <div className="space-y-6">
              {recognitions.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-green-700 text-4xl">
                    <FaMedal />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-gray-800 font-bold leading-relaxed">
                      {item}
                    </p>
                    <div className="w-46 h-0.5 bg-yellow-200 mb-2 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto p-4">
        <Slider {...settings}>
          {images.map((url, index) => (
            <div key={index} className="px-2">
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                className="rounded-xl w-full h-96 object-cover shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      <style>
        {`
      .slick-dots {
        bottom: -25px;
        display: flex !important;
        justify-content: center;
        gap: 10px;
      }

      .slick-dots li button:before {
        font-size: 10px;
        color: #ccc;
        opacity: 1;
      }

      .slick-dots li.slick-active button:before {
        color: #000;
      }
    `}
      </style>
    </>
  );
};

export default AwardsandRecognitions;
