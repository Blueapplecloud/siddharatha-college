import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FaAward } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Placements = [
  {
    text: "A 100% placement rate for eligible students across various engineering disciplines has been consistently achieved by SIDDHARTHA.",
  },
  {
    text: "The highest package offered to a SIDDHARTHA graduate has reached INR 25 LPA (Lakhs per Annum).",
  },
  {
    text: "An average package of around INR 6.5 LPA has been secured by SIDDHARTHA graduates.",
  },
  {
    text: "More than 200 companies visit SIDDHARTHA annually for recruitment, including industry giants like Microsoft, Google, Amazon, Infosys, TCS, and Wipro.",
  },
  {
    text: "A significant number of SIDDHARTHA students secure international placements, with offers from top companies in the USA, Europe, and Southeast Asia.",
  },
];

const ResearchandInnovation = [
  {
    text: "SIDDHARTHA has been selected as one of only three global centers by Apple for Mac- ased Training, Inaugurated by Tim Cook",
  },
  {
    text: "Over 300 research papers have been published by SIDDHARTHA faculty and students in reputed national and international journals over the last five years.",
  },
  {
    text: "More than 20 patents have been filed by SIDDHARTHA in emerging fields like IoT, AI, sustainable energy, and smart systems.",
  },
  {
    text: "Research grants totaling over INR 5 crore have been secured by SIDDHARTHA from various national and international funding agencies, supporting cutting-edge research and innovation projects.",
  },
  {
    text: "More than 50 innovation projects, including prototypes and products, have been developed by SIDDHARTHA students, leading to the creation of 8 successful start-ups.",
  },
];

const AcademicExcellence = [
  {
    text: "Top ranks in state-level and national-level competitive exams, including GATE, have been consistently achieved by SIDDHARTHA students, with several securing scores in the 99th percentile.",
  },
  {
    text: "Over 30 JNTU Gold Medals have been awarded to SIDDHARTHA students in the last decade across various engineering disciplines.",
  },
  {
    text: "More than 20 patents have been filed by SIDDHARTHA in emerging fields like IoT, AI, sustainable energy, and smart systems.",
  },
  {
    text: "SIDDHARTHA has been accredited by the National Board of Accreditation (NBA) for its engineering programs, ensuring high standards of education and continuous quality improvement.",
  },
];

const InfrastructureandFacilities = [
  {
    text: "More than 50 state-of-the-art laboratories, including specialized labs for IoT, AI, MAC-based app development, VLSI, Embedded Systems, and more,",
  },
  {
    text: "The SIDDHARTHA library houses over 70,000 volumes of books and more than 1,000 e-journals. Subscriptions to leading research databases support academic and research activities.",
  },
  {
    text: "Over 50 smart classrooms have been equipped with the latest audiovisual technology at SIDDHARTHA to enhance interactive learning.",
  },
  {
    text: "Extensive sports facilities, including indoor and outdoor courts for various sports, a fully-equipped gym, and spaces for cultural and recreational activities, are provided by SIDDHARTHA, ensuring a balanced student life.",
  },
];

const Sports = [
  {
    text: "SIDDHARTHA has won the JNTU Girls Overall Championship for 11 consecutive years.",
  },
  {
    text: "Over 200 SIDDHARTHA students have represented the institution in national-level sports competitions, winning more than 300 medals and trophies in the past five years.",
  },
  {
    text: "Five to six major sports coaching camps are organized annually by SIDDHARTHA, training over 500 students across various disciplines like Throwball, Volleyball, Basketball, and more.",
  },
];

const CulturalandLeadershipDevelopment = [
  {
    text: "SIDDHARTHA is the only engineering college in Telangana that conducts an international Women in Leadership Conclave, attracting over 1,000 participants each year.",
  },
  {
    text: "More than 150 awards have been won by SIDDHARTHA students in state and national cultural fests, showcasing their talents in various arts and cultural activities.",
  },
];

const SustainabilityandSocialResponsibility = [
  {
    text: "A 100 KWP grid-connected solar power plant has been implemented by SIDDHARTHA, contributing to a significant reduction in the institution’s carbon footprint.",
  },
  {
    text: "Over 3,000 SIDDHARTHA students have participated in community service programs, contributing more than 10,000 hours of volunteer work annually, making a positive impact on society.",
  },
];

const AlumniNetwork = [
  {
    text: "A strong alumni network of over 15,000 graduates from SIDDHARTHA is spread across the globe, working in prestigious organizations and contributing to various sectors.",
  },
  {
    text: "More than 50 SIDDHARTHA alumni have founded successful start-ups, contributing to innovation and economic growth both in India and internationally.",
  },
];

const alumniData = [
  {
    name: "Ananya Rao",
    title: "Product Manager, Google",
    image:
      "https://www.the-sun.com/wp-content/uploads/sites/6/2024/03/AK_MUSK_OP.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
    about:
      "At SIDDHARTHA, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Ravi Teja",
    title: "Software Engineer, Amazon",
    image:
      "https://www.americanbazaaronline.com/wp-content/uploads/2020/06/Sundar-Pichai.png",
    about:
      "At SIDDHARTHA, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Megha Reddy",
    title: "AI Researcher, Microsoft",
    image:
      "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2023/05/manufacturing-press-imec-keynote-blog-1920x1080.jpg",
    about:
      "At SIDDHARTHA, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Karthik Das",
    title: "CTO, StartupX",
    image: "https://api.time.com/wp-content/uploads/2014/01/bill-gates.jpg",
    about:
      "At SIDDHARTHA, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
];
const recognitions = [
  {
    img: "https://gnits.ac.in/wp-content/uploads/2024/08/UGC_India_Logo.png",
    title: "UGC Autonomous",
  },
  {
    img: "https://gnits.ac.in/wp-content/uploads/2024/08/NAAC_LOGO.png",
    title: "NAAC Accredited",
  },
  {
    img: "https://gnits.ac.in/wp-content/uploads/2024/08/JNTU_Hyderabad_logo.png",
    title: "JNTU Recognized",
  },
  {
    img: "https://gnits.ac.in/wp-content/uploads/2024/08/ISO_9001-2015.svg",
    title: "ISO Certified",
  },
  {
    img: "https://gnits.ac.in/wp-content/uploads/2024/08/National_Board_of_Accreditation.svg.png",
    title: "NBA Accreditation",
  },
  {
    img: "https://gnits.ac.in/wp-content/uploads/2024/08/NIRF.png",
    title: "NIRF Ranking",
  },
];

// Animation variants for word-by-word heading
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

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const WhySITS = ({ title, image }) => {
  const location = useLocation();
  title = "Why Choose SITS?";
  const defaultImage =
    "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/3089/2018/10/11/Campus-View%20of%20Siddhartha%20Institute%20of%20Technology%20and%20Sciences_Campus-View.jpg";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const heading = "People who made it to the top";
  const words = heading.split(" ");

  const Aboutheading = "About SIDDHARTHA";
  const Aboutwords = Aboutheading.split(" ");

  const Researchheading = "Research and Innovation";
  const Researchwords = Researchheading.split(" ");

  const Culturalheading = "Cultural and Leadership Development";
  const Culturalwords = Culturalheading.split(" ");

  const Sustainabilityheading = "Sustainability and Social Responsibility";
  const Sustainabilitywords = Sustainabilityheading.split(" ");

  let navigate = useNavigate();

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
            <motion.h2
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
            </motion.h2>
            <h3 className="!text-yellow-400 ">
              A Premier Institution in Telangana Dedicated to Excellence in
              Engineering and Holistic Development.
            </h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              SIDDHARTHA institute of technology & sciences(SITS), established
              in 1997, is one of the most prestigious institutions dedicated to
              empowering women in engineering and technology. Located in
              Hyderabad, Telangana, SITS is affiliated with Jawaharlal Nehru
              Technological University, Hyderabad (JNTUH), and is approved by
              the All India Council for Technical Education (AICTE). The mission
              of SITS is to provide a transformative educational experience,
              equipping women with the knowledge, skills, and values necessary
              to excel in engineering. SITS envisions itself as a center of
              excellence, fostering technical education, research, innovation,
              and leadership .
            </p>
            <Link
              to=""
              className="mt-8 inline-flex bg-[#D6820B] text-white px-6 py-4 text-base font-semibold rounded-none items-center gap-2 hover:bg-[#bb6f07] transition w-fit h-5"
              style={{ textDecoration: "none" }}
            >
              Best Practices
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://gnits.ac.in/wp-content/uploads/2024/09/ROB00116-2048x1074.jpg"
              alt="GNITS Alumni Event"
              className="rounded-xl w-150 h-120 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-sky-100 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Placements Image Section */}
          <div className="flex justify-center">
            <img
              src="https://gnits.ac.in/wp-content/uploads/2024/09/DSC_1224-1300x1300.jpg"
              alt="GNITS Alumni Event"
              className="rounded-xl w-200 h-160 object-cover"
            />
          </div>

          {/* Placements Section */}
          <div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-10 border-b-2 border-gray-300 w-fit">
                Placements
              </h1>
              <ul className="space-y-4">
                {Placements.map((Placements, index) => (
                  <li key={index} className="flex items-start font-bold gap-4">
                    <div className="text-yellow-500 text-4xl mt-1">
                      <FaAward />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg text-gray-800 leading-relaxed">
                        {Placements.text}
                      </p>
                      <div className="w-46 h-0.5 bg-yellow-200 mb-2 rounded"></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Research and Innovation Section */}
          <div>
            <div>
              <ul className="space-y-4">
                {ResearchandInnovation.map((ResearchandInnovation, index) => (
                  <li key={index} className="flex items-start font-bold gap-4">
                    <div className="text-sky-900 text-4xl mt-1">
                      <FaAward />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg text-gray-800 leading-relaxed">
                        {ResearchandInnovation.text}
                      </p>
                      <div className="w-46 h-0.5 bg-blue-200 mb-2 rounded"></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div>
            <motion.h2
              className="text-8xl font-bold text-[#003B3F] mb-6 leading-tight flex flex-wrap"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {Researchwords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="mr-2 text-5xl"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <br />
            <img
              src="https://gnits.ac.in/wp-content/uploads/2024/09/1702278061232-1536x1024.jpeg"
              alt="GNITS Alumni Event"
              className="rounded-xl w-260 h-120 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/*Academic Excellence Image Section */}
          <div>
            <h1>Academic Excellence</h1>
            <br />
            <img
              src="https://gnits.ac.in/wp-content/uploads/2024/09/ROB09818-1536x1024.jpg"
              alt="GNITS Alumni Event"
              className="rounded-xl w-260 h-120 object-cover"
            />
          </div>

          {/*Academic Excellence Section */}
          <div>
            <div>
              <ul className="space-y-4">
                {AcademicExcellence.map((AcademicExcellence, index) => (
                  <li key={index} className="flex items-start font-bold gap-4">
                    <div className="text-yellow-500 text-4xl mt-1">
                      <FaAward />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg text-gray-800 leading-relaxed">
                        {AcademicExcellence.text}
                      </p>
                      <div className="w-46 h-0.5 bg-yellow-200 mb-2 rounded"></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-10 relative">
        <div className="flex flex-wrap justify-center gap-6 mb-8 px-4 relative z-10">
          {recognitions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md w-[120px]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-contain mb-2"
              />
              <p className="text-center text-sm font-medium">{item.title}</p>
            </div>
          ))}
        </div>
        {/* Merged effect */}

        <div className="bg-amber-600 text-white px-6 py-10 rounded-3xl text-start max-w-5xl mx-auto -mt-14 relative z-0 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Globally Recognized, Prestige Earned
          </h2>
          <p className="text-base md:text-lg font-light">
            At SIDDHARTHA, we blend academic excellence with industry
            recognition. With a prestigious NAAC “A” grade and consistent
            rankings among India’s top institutions, SIDDHARTHA is a recognized
            leader in engineering education, endorsed by AICTE, UGC, and
            JNTU(H). Here, we transform aspirations into achievements, providing
            a platform where your potential can truly shine.
          </p>
        </div>
      </section>

      <div className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Infrastructure and Facilities Section */}
          <div>
            <div>
              <ul className="space-y-4">
                {InfrastructureandFacilities.map(
                  (InfrastructureandFacilities, index) => (
                    <li
                      key={index}
                      className="flex items-start font-bold gap-4"
                    >
                      <div className="text-sky-900 text-4xl mt-1">
                        <FaAward />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-lg text-gray-800 leading-relaxed">
                          {InfrastructureandFacilities.text}
                        </p>
                        <div className="w-46 h-0.5 bg-blue-200 mb-2 rounded"></div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Infrastructure and Facilities Image Section */}
          <div>
            <h1>Infrastructure and Facilities</h1>
            <br />
            <img
              src="https://gnits.ac.in/wp-content/uploads/2024/09/DSC_3292-1536x1025.jpg"
              alt="GNITS Alumni Event"
              className="rounded-xl w-260 h-120 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sports Section */}
          <div>
            <div>
              <h2>Sports</h2>
              <br />
              <ul className="space-y-4">
                {Sports.map((Sports, index) => (
                  <li key={index} className="flex items-start font-bold gap-4">
                    <div className="text-yellow-500 text-4xl mt-1">
                      <FaAward />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg text-gray-800 leading-relaxed">
                        {Sports.text}
                      </p>
                      <div className="w-46 h-0.5 bg-yellow-500 mb-2 rounded"></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cultural and Leadership Development Section */}
          <div>
            <div className="bg-[#F2CA89] w-100 h-auto">
              <br />
              <motion.h2
                className="text-8xl font-bold text-[#003B3F] mb-6 leading-tight flex flex-wrap px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {Culturalwords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="mr-2 text-3xl "
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
              <br />
              <ul className="space-y-4">
                {CulturalandLeadershipDevelopment.map(
                  (CulturalandLeadershipDevelopment, index) => (
                    <li
                      key={index}
                      className="flex items-start font-bold gap-4"
                    >
                      <div className="text-yellow-500 text-4xl mt-1">
                        <FaAward />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-lg text-gray-800 leading-relaxed">
                          {CulturalandLeadershipDevelopment.text}
                        </p>
                        <div className="w-46 h-0.5 bg-yellow-500 mb-2 rounded"></div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sustainability and Social Responsibility Section */}
          <div>
            <div className="bg-[#F2CA89] w-100 h-auto">
              <br />
              <motion.h2
                className="text-8xl font-bold text-[#003B3F] mb-6 leading-tight flex flex-wrap px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {Sustainabilitywords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="mr-2 text-3xl "
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
              <br />
              <ul className="space-y-4">
                {SustainabilityandSocialResponsibility.map(
                  (SustainabilityandSocialResponsibility, index) => (
                    <li
                      key={index}
                      className="flex items-start font-bold gap-4"
                    >
                      <div className="text-yellow-500 text-4xl mt-1">
                        <FaAward />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-lg text-gray-800 leading-relaxed">
                          {SustainabilityandSocialResponsibility.text}
                        </p>
                        <div className="w-46 h-0.5 bg-yellow-500 mb-2 rounded"></div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Alumni Network Section */}
          <div>
            <div>
              <h2>Alumni Network</h2>
              <br />
              <ul className="space-y-4">
                {AlumniNetwork.map((AlumniNetwork, index) => (
                  <li key={index} className="flex items-start font-bold gap-4">
                    <div className="text-yellow-500 text-4xl mt-1">
                      <FaAward />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg text-gray-800 leading-relaxed">
                        {AlumniNetwork.text}
                      </p>
                      <div className="w-46 h-0.5 bg-yellow-500 mb-2 rounded"></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-12 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-teal-900 leading-tight flex flex-wrap"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {words.map((word, index) => (
              <motion.span key={index} variants={wordVariants} className="mr-2">
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <p className="mt-6 text-base text-gray-700 leading-relaxed font-medium max-w-3xl">
            At SIDDHARTHA, real-world leadership challenges come to life. Our
            programs and courses will help you learn how to think expansively,
            act decisively, and inspire those around you to achieve great
            things.
          </p>

          <Link
            to="/alumni"
            className="mt-8 inline-flex bg-[#D6820B] text-white px-6 py-4 text-base font-semibold rounded-none items-center gap-2 hover:bg-[#bb6f07] transition w-fit h-5"
            style={{ textDecoration: 'none' }}
          >
            View All Alumni
            <ArrowUpRight className="w-5 h-5" />
          </Link>

          <div className="mt-12">
            <div className="relative">
              {/* Custom Prev Button */}
              <div className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer text-gray-300 text-3xl">
                ❮
              </div>

              {/* Custom Next Button */}
              <div className="swiper-button-next-custom absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl">
                ❯
              </div>

              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                loop
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {alumniData.map((alumnus, index) => (
                  <SwiperSlide key={index} className="flex justify-center">
                    <div className="bg-[#DBDBDB] hover:bg-yellow-400 transition duration-300 rounded-lg shadow-md p-6 text-left w-full max-w-[22rem] h-[28rem]">
                      <img
                        src={alumnus.image}
                        alt={alumnus.name}
                        className="w-40 h-40 rounded-full mb-4 object-cover"
                      />
                      <h3 className="font-sans text-2xl font-bold text-gray-800">
                        {alumnus.name}
                      </h3>
                      <p className="font-sans text-sm font-normal text-gray-600">
                        {alumnus.title}
                      </p>
                      <p className="font-sans text-base font-medium text-gray-800 mt-2">
                        {alumnus.about}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhySITS;