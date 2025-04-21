import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaAward } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const awards = [
  {
    text: "First-of-its-kind Academic Women Incubator focusing on Deep Tech.",
  },
  {
    text: "Support for startups in Clean Tech, ESDM, Sustainability, EVs, and Drones.",
  },
  {
    text: "Aimed at building market-ready prototypes in a limited time frame.",
  },
];


const alumniData = [
  {
    name: "Dr. P. Sekhar Babu",
    title: "Principal, Siddhartha",
    image:
      "https://siddhartha.ac.in/img/about/SekharBabu1.jpg",
    about:
      "At SIDDHARTHA, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Dr. G.Nagaiah",
    title: "Chairman, Siddhartha",
    image:
      "https://siddhartha.ac.in/img/about/Dr.G.Nagaiah_Pic.jpg",
    about:
      "At SIDDHARTHA, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Dr. D.Pradeep Kumar",
    title: "Secretary, Siddhartha",
    image:
      "https://siddhartha.ac.in/img/about/Dr.D.Pradeep_pic.jpg",
    about:
      "At SIDDHARTHA, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Mrs. G.Govardhani",
    title: "Joint Secretary, Siddhartha",
    image: "https://siddhartha.ac.in/img/about/Management/Govardhani.jpg",
    about:
      "At SIDDHARTHA, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
];


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

const IncubationHeader = ({ title, image }) => {
  const location = useLocation();
  title = "Incubation Cell";
  const defaultImage =
    "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/3089/2018/10/11/Campus-View%20of%20Siddhartha%20Institute%20of%20Technology%20and%20Sciences_Campus-View.jpg";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  const heading = "SIDDHARTHA Innovation Ecosystem";
  const words = heading.split(" ");

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
              Innovation at SIDDHARTHA
            </h1>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              The Siddhartha Innovation and Incubation Centre, launched in July
              2022, is a pioneering academic incubator focusing on women-led
              Deep Tech startups. In February 2023, SIDDHARTHA was selected by
              Atal Innovation Mission (AIM), NITI Aayog to establish the Atal
              Incubation Centre (AIC-Siddhartha Foundation). This initiative
              promotes women entrepreneurs, focusing on creating sustainable and
              tech-driven solutions aligned with the UN Sustainable Development
              Goals (SDGs).
            </p>
          </div>
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/originals/09/b5/5b/09b55b317dc4b34820229af0c265b356.jpg"
              alt="SIDDHARTHA Alumni Event"
              className="rounded-xl w-68 h-70 object-cover"
            />
          </div>
        </div>
      </div>

      {/* <div className="bg-white py-16 px-6 lg:px-20"> */}
      <div className="bg-white pb-4 px-6 lg:px-20">
        <ul className="space-y-8">
          {awards.map((award, index) => (
            <li key={index} className="flex items-start font-small gap-3">
              <div className="text-yellow-500 text-4xl mt-1">
                <FaAward />
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-gray-800 leading-relaxed">
                  {award.text}
                </p>
                <div className="w-86 h-0.5 bg-yellow-200 mb-2 rounded"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="flex flex-col md:flex-row gap-8 justify-center px-20 py-20 bg-white"> */}
      <div className="flex flex-col md:flex-row gap-8 justify-center px-20 pt-4 pb-20 bg-white">
        {/* Vision Card */}
        <div className="bg-gray-100 hover:bg-yellow-300 transition-colors duration-300 p-10 rounded shadow-md w-full md:w-1/2">
          <div className="border-t-2 border-teal-800 w-30 mb-4"></div>
          <h2 className="text-2xl font-semibold text-teal-900 mb-4">Vision</h2>
          <p className="text-gray-800 leading-relaxed">
            Empowering Sustainable Entrepreneurship for Women through Design-Led
            Innovation for Global Impact. Becoming the top-notch Deep-Tech
            incubator for Women in India.
          </p>
        </div>
        {/* Mission Card */}
        <div className="bg-gray-100 hover:bg-yellow-300 transition-colors duration-300 p-10 rounded shadow-md w-full md:w-1/2">
          <div className="border-t-2 border-teal-800 w-30 mb-4"></div>
          <h2 className="text-2xl font-semibold text-teal-900 mb-4">Mission</h2>
          <ul className="list-disc pl-5 text-gray-800 space-y-2 leading-relaxed">
            <li>
              Our mission is to foster a dynamic ecosystem that nurtures,
              catalyses, and accelerates entrepreneurship and design-led
              innovations.
            </li>
            <li>
              We are dedicated to supporting Start-ups that passionately embrace
              the United Nations Sustainable Development Goals, striving for a
              harmonious world where creativity, entrepreneurship, and
              sustainability intersect to drive lasting positive change.
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="bg-white py-16 px-6 lg:px-20"> */}
      <div className="bg-white pb-2 pt-2 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://gnits.ac.in/wp-content/uploads/2024/09/NITI-AIM-Logo.jpg-e1730809268267.png"
              alt="SIDDHARTHA Alumni Event"
              className="rounded-xl w-45 h-50 object-cover"
            />
          </div>
          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-bold text-[#003B3F] mb-6">
              Atal Incubation Centre (AIC-SIDDHARTHA)
            </h1>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              The AIC-Siddhartha Foundation provides a springboard for women
              entrepreneurs looking to establish technology-based business
              ventures. It fosters an innovative environment, offering necessary
              resources, mentorship, and infrastructure to support entrepreneurs
              in creating market-viable prototypes.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {/* Card 1:  Networking Opportunities */}
        <div
          className="relative w-full sm:w-[300px] md:w-[400px] h-[275px] rounded-xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://indiancyberinstitute.com/wp-content/uploads/2019/04/1.jpg')",
          }}
        >
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-start p-6 text-white space-y-4">
            {/* Top Section */}
            <div>
              <div className="w-10 h-0.5 bg-yellow-300 mb-2"></div>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                Networking Opportunities
              </h3>
            </div>

            {/* Bottom Section */}
            <div>
              <p className="text-sm text-gray-200 mb-3 leading-relaxed font-sans">
                Siddhartha fosters a vibrant ecosystem that connects students
                with industry leaders and innovators, providing invaluable
                networking opportunities to boost their entrepreneurial
                journeys.
              </p>
              <a
                href="#"
                className="!text-yellow-400 hover:!text-yellow-300  font-semibold inline-flex items-center transition duration-200"
              >
                Explore Programs
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Facilities */}

        <div
          className="relative w-full sm:w-[300px] md:w-[375px] h-[275px] rounded-xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://th.bing.com/th/id/OIP.WCpEnsQQ4SbAbXn6c2-Z0wHaEc?rs=1&pid=ImgDetMain')",
          }}
        >
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-start p-6 text-white space-y-4">
            {/* Top Section */}
            <div>
              <div className="w-10 h-0.5 bg-yellow-300 mb-2"></div>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                Facilities
              </h3>
            </div>

            {/* Bottom Section */}
            <div>
              <p className="text-sm text-gray-200 mb-3 leading-relaxed font-sans">
                Our state-of-the-art facilities are designed to support
                creativity and collaboration, offering students the ideal
                environment to develop their innovative projects
              </p>
              <a
                href="#"
                className="!text-yellow-400 hover:!text-yellow-300 font-semibold inline-flex items-center transition duration-200"
              >
                Explore Programs
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: Funding Opportunities */}

        <div
          className="relative w-full sm:w-[300px] md:w-[375px] h-[275px] rounded-xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('https://media.getmyuni.com/azure/college-images-test/sri-siddhartha-institute-of-technology-ssit-tumkur/a420cf58cfb74694b623b3ded7a77a71.jpeg')",
          }}
        >
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-start p-6 text-white space-y-4">
            {/* Top Section */}
            <div>
              <div className="w-10 h-0.5 bg-yellow-300 mb-2"></div>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug"> 
                Funding Opportunities
              </h3>
            </div>

            {/* Bottom Section */}
            <div>
              <p className="text-sm text-gray-200 mb-3 leading-relaxed font-sans">
              Siddhartha provides access to diverse funding sources, empowering aspiring 
              entrepreneurs with the financial resources necessary to turn their
               groundbreaking ideas into successful ventures.


              </p>
              <a
                href="#"
                className="!text-yellow-400 hover:!text-yellow-300 font-semibold inline-flex items-center transition duration-200"
              >
                Explore Programs
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>


    <section className="bg-gray-200 py-12 px-6 md:px-24">
      <div className="  max-w-7xl mx-auto text-left">
        <motion.h2
          className="text-4xl font-bold text-teal-900 leading-tight mb-6"
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

        <p className="mt-6 text-base text-gray-700 leading-relaxed font-medium max-w-3xl mb-8">
        The Innovation Cell at SIDDHARTHA brings together resources, ideas, and
          people to create an innovative environment for students and faculty.
          It encourages creativity and helps students turn their concepts into
          real-world business solutions. The Innovation Cell provides access to
          the institution’s resources, such as workshops, labs, libraries, and
          research centers.
        </p>

        <div className="flex justify-end">
        <Link
          to=""
          className="mt-8 inline-flex bg-[#D6820B] text-white px-6 py-4 text-base font-semibold rounded-none items-center gap-2 hover:bg-[#bb6f07] transition"
          style={{ textDecoration: "none" }}
        >
          View Ecosystem
          <ArrowUpRight className="w-5 h-5" />
        </Link>
        </div>
        </div>
        </section>




        <div className="flex flex-wrap gap-6 justify-center">
        {/* Card 1:  Entrepreneurship Development Cell​ */}
        <div
          className="relative w-full sm:w-[300px] md:w-[400px] h-[320px] rounded-xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://gsep.pepperdine.edu/blog/images/benefits-of-a-master-of-arts-in-teaching.jpg')",
          }}
        >
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-start p-6 text-white space-y-4">
            {/* Top Section */}
            <div>
              <div className="w-10 h-0.5 bg-yellow-300 mb-2"></div>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug"> 
              Entrepreneurship Development Cell​
              </h3>
            </div>

            {/* Bottom Section */}
            <div>
              <p className="text-sm text-gray-200 mb-3 leading-relaxed font-sans">
              The EDC at SIDDHARTHA promotes entrepreneurship among women through workshops, 
              panel discussions, and a technology incubation center. In partnership with 
              JNTU, Hyderabad, the EDC nurtures entrepreneurial spirit and provides 
              infrastructure support to startups.


              </p>
              <a
                href="#"
                className="!text-yellow-400 hover:!text-yellow-300  font-semibold inline-flex items-center transition duration-200"
              >
                Explore Programs
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Intellectual Property Rights Cell */}

        <div
          className="relative w-full sm:w-[300px] md:w-[375px] h-[320px] rounded-xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://bsi.gov.in/uploads/gallery/cza_gallery1654777231_46231.png')",
          }}
        >
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-start p-6 text-white space-y-4">
            {/* Top Section */}
            <div>
              <div className="w-10 h-0.5 bg-yellow-300 mb-2"></div>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              Intellectual Property Rights Cell
              </h3>
            </div>

            {/* Bottom Section */}
            <div>
              <p className="text-sm text-gray-200 mb-3 leading-relaxed font-sans">
              The IPR Cell at SIDDHARTHA is dedicated to identifying, protecting, and leveraging
               intellectual property generated through research and innovation. It provides 
               a platform for the commercialization of inventions . 
              </p>
              <a
                href="#"
                className="!text-yellow-400 hover:!text-yellow-300 font-semibold inline-flex items-center transition duration-200"
              >
                Explore Programs
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: Institution’s Innovation Council (IIC) */}

        <div
          className="relative w-full sm:w-[300px] md:w-[375px] h-[320px] rounded-xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('https://ssit.edu.in/edc/6.jpg')",
          }}
        >
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-start p-6 text-white space-y-4">
            {/* Top Section */}
            <div>
              <div className="w-10 h-0.5 bg-yellow-300 mb-2"></div>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug"> 
            Institution’s Innovation Council (IIC)
              </h3>
            </div>

            {/* Bottom Section */}
            <div>
              <p className="text-sm text-gray-200 mb-3 leading-relaxed font-sans">
              Ministry of Education (MoE), Govt. of India has established “MoE’s Innovation
               Cell (MIC)” to systematically foster the culture for more things to Innovation amongst all 
               Higher Education Institutions (HEIs).
              </p>
              <a
                href="#"
                className="!text-yellow-400 hover:!text-yellow-300 font-semibold inline-flex items-center transition duration-200"
              >
                Explore Programs
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>

     
      <div className="flex  gap-4 mt-8 ml-45">
          <Link
            to=""
            className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
            style={{ textDecoration: 'none' }}
          >
            NISP
          </Link>
          <Link
            to=""
            className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
            style={{ textDecoration: 'none' }}
          >
            ARIIA
          </Link>
        </div> <br />


        <section className="bg-[#004d40] text-white py-12 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6">
          Innovation Policies
        </h1>
        {/* Paragraph */}
        <p className="text-lg leading-relaxed font-medium max-w-4xl mb-8">
          The Policies at SIDDHARTHA support innovation, entrepreneurship, and IP
          protection. The Innovation and Incubation Policy fosters women-led
          Deep Tech startups aligned with UNSDGs. The Entrepreneurship
          Development Policy provides resources and mentorship for business
          creation. The IPR Policy safeguards and commercializes intellectual
          property. The NISP, through the IIC, promotes a startup culture,
          encouraging collaboration and innovation across industries. Together,
          these policies create a robust ecosystem for sustainable
          entrepreneurship and technological advancement.
        </p>
        {/* Buttons */}
        <div className="flex justify-end   gap-4">
        <Link
            to=""
            className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
            style={{ textDecoration: 'none' }}
          >
            IPR Policy
          </Link> 
          <Link
            to=""
            className="bg-[#D6820B] text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-[#bb6f07] transition"
            style={{ textDecoration: 'none' }}
          >
            NISP Policy
          </Link>
        </div>
      </div>
    </section>   
<br />

    <div className="px-6 md:px-12 lg:px-24">
    <h1 className="text-10xl font-bold text-[#003B3F] mb-10 leading-tight tracking-wide">
  Team Members
</h1>
    <div className="grid grid-cols-4 gap-16">

          {alumniData.map((alumnus, index) => (
            <div
            key={index}
            className="break-inside-avoid bg-[#DBDBDB] hover:bg-yellow-400 transition duration-300 rounded-lg shadow-md p-6 text-left flex flex-col items-center w-84"
            >
              <img
                src={alumnus.image}
                alt={alumnus.name}
                className="w-40 h-40 rounded-full mb-4 object-cover"
                />
              <h3 className="font-sans text-2xl font-bold text-gray-800 text-center">
                {alumnus.name}
              </h3>
              <p className="font-sans text-sm font-medium text-gray-600 text-center">
                {alumnus.title}
              </p>
            </div>
          ))}
        </div>
          </div>
          <br /> <br /> <br />
    </>
  );
};

export default IncubationHeader;
