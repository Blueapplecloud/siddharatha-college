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

const Aboutheading = "Partnering with NPTEL";
const Aboutwords = Aboutheading.split(" ");

const Programheading = "Program Structure";
const Programwords = Programheading.split(" ");

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const Nptel = ({ title, image }) => {
  const location = useLocation();
  title = "NPTEL";
  const defaultImage =
    "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/3089/2018/10/11/Campus-View%20of%20Siddhartha%20Institute%20of%20Technology%20and%20Sciences_Campus-View.jpg";

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
              The National Programme on Technology Enhanced Learning (NPTEL) at
              SIDDHARTHA is an initiative by the IITs and IISc to provide
              quality online education in engineering, science, and humanities.
              SIDDHARTHA partners with NPTEL to offer students access to these
              high-quality courses, helping them enhance their knowledge and
              skills.
            </p>
          </div>
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://gnits.ac.in/wp-content/uploads/2024/12/SDS_0031.jpg"
              alt="GNITS Alumni Event"
              className="rounded-xl w-150 h-80 object-cover"
            />
          </div>
        </div>
      </div>
      <section ref={ref}>
        <div style={{ backgroundColor: "#e4ebf0", padding: "4rem 2rem" }}>
          <div className="flex flex-wrap gap-6 justify-center">
            {/* Card 1: Quality Education */}
            <div
              className="relative w-full sm:w-[300px] md:w-[300px] h-[275px] rounded-xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://thumbs.dreamstime.com/b/education-university-students-writing-exam-classroom-vision-innovation-ambition-college-student-group-men-women-notes-264259723.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/30 to-transparent"></div>

              <div className="absolute top-22 left-4 sm:left-6 text-white">
                <div className="w-10 h-0.5 bg-yellow-300 mb-0"></div> <br />
                <h5 className="text-4xl font-bold leading-tight whitespace-nowrap">
                  Quality Education
                </h5>
              </div>
              <div className="absolute bottom-18 left-6 sm:left-6 text-white max-w-xs">
                <p
                  className="text-sm text-gray-200 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Learn from top professors at India’s premier institutions
                </p>
              </div>
            </div>
            {/* Card 2: 
Wide Range of Courses */}

            <div
              className="relative w-full sm:w-[300px] md:w-[300px] h-[275px] rounded-xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2011/04/22172447/shamwoo-student-coaching-tution-school-competition-studying-exams-education-learning-classroo-wikimedia-commons.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/30 to-transparent"></div>
              <div className="absolute top-22 left-4 sm:left-6 text-white">
                <div className="w-10 h-0.5 bg-yellow-300 mb-0"></div> <br />
                <h5 className="text-4xl font-bold leading-tight whitespace-nowrap">
                  Wide Range of Courses
                </h5>
              </div>
              <div className="absolute bottom-18 left-6 sm:left-6 text-white max-w-xs">
                <p
                  className="text-sm text-gray-200 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Choose from diverse subjects in engineering, science, and
                  humanities.
                </p>
              </div>
            </div>
            {/* Card 3: 
Flexible Learning*/}
            <div
              className="relative w-full sm:w-[300px] md:w-[300px] h-[275px] rounded-xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://t4.ftcdn.net/jpg/05/39/10/47/360_F_539104776_BchIZKRhIUXDY0ZaVHxaoIDvRa2eAG3d.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/30 to-transparent"></div>
              <div className="absolute top-22 left-4 sm:left-6 text-white">
                <div className="w-10 h-0.5 bg-yellow-300 mb-0"></div> <br />
                <h5 className="text-4xl font-bold leading-tight whitespace-nowrap">
                  Flexible Learning
                </h5>
              </div>
              <div className="absolute bottom-18 left-6 sm:left-6 text-white max-w-xs">
                <p
                  className="text-sm text-gray-200 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Study at your own pace with online video lectures and
                  resources.
                </p>
              </div>
            </div>

            {/* Card 4: 
Certification*/}
            <div
              className="relative w-full sm:w-[300px] md:w-[300px] h-[275px] rounded-xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://christjuniorcollege.in/img/all-imgs/academics/departments/English.webp')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/30 to-transparent"></div>
              <div className="absolute top-22 left-4 sm:left-6 text-white">
                <div className="w-10 h-0.5 bg-yellow-300 mb-0"></div> <br />
                <h5 className="text-4xl font-bold leading-tight whitespace-nowrap">
                  Certification
                </h5>
              </div>
              <div className="absolute bottom-18 left-6 sm:left-6 text-white max-w-xs">
                <p
                  className="text-sm text-gray-200 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Earn certificates recognized by industries and academic
                  institutions nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              {Programwords.map((word, index) => (
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
              The NPTEL courses at SIDDHARTHA are delivered online, featuring
              video lectures, assignments, and quizzes. Students can access a
              wide range of subjects and are encouraged to engage in self-paced
              learning. Optional certification is available upon completing the
              course and passing the final exam.
            </p>
            <br />
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Get in touch with our NPTEL coordinator today to find out how you
              can enroll and start your journey towards academic excellence
            </p>
          </div>
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://gnits.ac.in/wp-content/uploads/2024/08/DSC_3269-Copy-1024x576.jpg"
              alt="GNITS Alumni Event"
              className="rounded-xl w-150 h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nptel;
