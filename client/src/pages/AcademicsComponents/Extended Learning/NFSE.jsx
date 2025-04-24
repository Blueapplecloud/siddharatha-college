import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Aboutheading = "Program Structure";
const Aboutwords = Aboutheading.split(" ");

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const NfseSanskrit = ({ title, image }) => {
  const location = useLocation();
  title = "Non-Formal Sanskrit Education (NFSE)";
  const defaultImage =
    "https://media.getmyuni.com/azure/college-image/big/siddharth-institute-of-engineering-technology-sietk-puttur.jpg";

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
          <div
            className="relative z-10 text-white"
            style={{
              paddingLeft: "clamp(24px, 10%, 10%)",
              paddingRight: "16px",
              fontFamily: "'Urbanist', sans-serif",
            }}
          >
            <motion.h1
              className="!text-[45px] md:text-4xl font-extrabold mt-4 pt-2 border-t border-amber-400 inline-block"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {title}
            </motion.h1>

            <motion.div
              className="!text-xl md:text-base mt-2"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <Link
                to="/"
                className="text-white hover:!text-yellow-300 underline"
              >
                Home
              </Link>{" "}
              /{" "}
              {decodeURIComponent(location.pathname)
                .slice(1)
                .split("/")
                .map((segment, index) => (
                  <span key={index} className="capitalize text-white">
                    {index > 0 && " / "}
                    {segment
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </span>
                ))}
            </motion.div>
          </div>
        )}
      </div>

      <div className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <motion.h1
              className="text-4xl font-bold text-[#003B3F] mb-6 leading-tight flex flex-wrap"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {Aboutwords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              The NFSE program is structured into tiered certificate courses
              that cater to various proficiency levels, from beginners to
              advanced learners. Each course is designed to simplify Sanskrit
              learning, combining traditional methods with modern educational
              techniques to make the language accessible and engaging. Classes
              are conducted by experienced faculty, ensuring personalized
              attention and a supportive learning environment. The curriculum
              covers essential aspects of Sanskrit, including grammar,
              literature, and conversation, making it comprehensive and
              practical.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              The Non-Formal Sanskrit Education (NFSE) program at SIDDHARTHA,
              launched in collaboration with Central Sanskrit University in
              2017, is dedicated to the revival and promotion of Sanskrit. It
              offers a unique opportunity for students, faculty, and
              professionals to engage with one of the world’s oldest and most
              influential languages, fostering a deeper connection with India’s
              rich cultural heritage.
            </p>
          </div>
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://static.toiimg.com/thumb/msid-85477269,imgsize-24578,width-400,resizemode-4/85477269.jpg"
              alt="GNITS Alumni Event"
              className="rounded-xl w-150 h-120 object-cover"
            />
          </div>
        </div>
      </div>
      <section ref={ref}>
        <div style={{ backgroundColor: "#e4ebf0", padding: "4rem 2rem" }}>
          <div className="pl-24 sm:pl-32 md:pl-40">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                color: "#004a44",
                fontSize: "2.5rem",
                lineHeight: "1.2",
                fontWeight: "600",
              }}
            >
              Why Learn Sanskrit?
              <br />
            </motion.h1>
            <br />
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {/* Card 1: Cultural Heritage */}
            <div
              className="relative w-full sm:w-[300px] md:w-[300px] h-[275px] rounded-xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://knowindia.india.gov.in/assets/images/gallery/culture-and-heritage/19s.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/30 to-transparent"></div>
              <div className="absolute top-28 left-1/2 transform -translate-x-1/2 text-white">
                <h4 className="text-4xl font-bold leading-tight whitespace-nowrap">
                  Cultural Heritage
                </h4>
              </div>
              <div className="absolute bottom-18 left-6 sm:left-10 text-white max-w-xs">
                <p
                  className="text-sm text-gray-200 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Delve into India’s ancient traditions through Sanskrit
                </p>
              </div>
            </div>
            {/* Card 2: Cognitive Development */}

            <div
              className="relative w-full sm:w-[300px] md:w-[300px] h-[275px] rounded-xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2011/04/22172447/shamwoo-student-coaching-tution-school-competition-studying-exams-education-learning-classroo-wikimedia-commons.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/30 to-transparent"></div>
              <div className="absolute top-28 left-1/2 transform -translate-x-1/2 text-white">
                <h4 className="text-4xl font-bold leading-tight whitespace-nowrap">
                  Cognitive Development
                </h4>
              </div>
              <div className="absolute bottom-18 left-6 sm:left-10 text-white max-w-xs">
                <p
                  className="text-sm text-gray-200 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Enhance analytical skills with Sanskrit’s logical structure
                </p>
              </div>
            </div>
            {/* Card 3: Academic Research */}
            <div
              className="relative w-full sm:w-[300px] md:w-[300px] h-[275px] rounded-xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://thesmartlocal.com/images/easyblog_articles/5376/b2ap3_thumbnail_image4.png')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/30 to-transparent"></div>
              <div className="absolute top-28 left-1/2 transform -translate-x-1/2 text-white">
                <h4 className="text-4xl font-bold leading-tight whitespace-nowrap">
                  Academic Research
                </h4>
              </div>
              <div className="absolute bottom-18 left-6 sm:left-10 text-white max-w-xs">
                <p
                  className="text-sm text-gray-200 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Explore new academic avenues in humanities and philosophy.
                </p>
              </div>
            </div>

            {/* Card 4: Spiritual Insight */}
            <div
              className="relative w-full sm:w-[300px] md:w-[300px] h-[275px] rounded-xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://slrtce.in/wp-content/uploads/2022/10/facilities-scaled.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/30 to-transparent"></div>
              <div className="absolute top-28 left-1/2 transform -translate-x-1/2 text-white">
                <h4 className="text-4xl font-bold leading-tight whitespace-nowrap">
                  Spiritual Insight
                </h4>
              </div>
              <div className="absolute bottom-18 left-6 sm:left-10 text-white max-w-xs">
                <p
                  className="text-sm text-gray-200 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Gain deeper spiritual understanding through original texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NfseSanskrit;
