import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const alumniData = [
  {
    name: "Ananya Rao",
    title: "Product Manager, Google",
    image:
      "https://www.the-sun.com/wp-content/uploads/sites/6/2024/03/AK_MUSK_OP.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
    about:
      "At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Ravi Teja",
    title: "Software Engineer, Amazon",
    image:
      "https://www.americanbazaaronline.com/wp-content/uploads/2020/06/Sundar-Pichai.png",
    about:
      "At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Megha Reddy",
    title: "AI Researcher, Microsoft",
    image:
      "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2023/05/manufacturing-press-imec-keynote-blog-1920x1080.jpg",
    about:
      "At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Karthik Das",
    title: "CTO, StartupX",
    image: "https://api.time.com/wp-content/uploads/2014/01/bill-gates.jpg",
    about:
      "At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.At Siddhartha, real-world leadership challenges come to life. ",
  },
  {
    name: "Ananya Rao",
    title: "Product Manager, Google",
    image:
      "https://www.the-sun.com/wp-content/uploads/sites/6/2024/03/AK_MUSK_OP.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
    about:
      "At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Ravi Teja",
    title: "Software Engineer, Amazon",
    image:
      "https://www.americanbazaaronline.com/wp-content/uploads/2020/06/Sundar-Pichai.png",
    about:
      "At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.  At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.  ",
  },
  {
    name: "Megha Reddy",
    title: "AI Researcher, Microsoft",
    image:
      "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2023/05/manufacturing-press-imec-keynote-blog-1920x1080.jpg",
    about:
      "At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. ",
  },
  {
    name: "Karthik Das",
    title: "CTO, StartupX",
    image: "https://api.time.com/wp-content/uploads/2014/01/bill-gates.jpg",
    about:
      "At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.  learn how to think expansively, act decisively, and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Ravi Teja",
    title: "Software Engineer, Amazon",
    image:
      "https://www.americanbazaaronline.com/wp-content/uploads/2020/06/Sundar-Pichai.png",
    about:
      "At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things. At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Karthik Das",
    title: "CTO, StartupX",
    image: "https://api.time.com/wp-content/uploads/2014/01/bill-gates.jpg",
    about:
      "At Siddhartha, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
];


const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const AlumniHeader = ({ title, image }) => {
  const location = useLocation();
  title = "Siddhartha Alumni";
  const defaultImage = "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/3089/2018/10/11/Campus-View%20of%20Siddhartha%20Institute%20of%20Technology%20and%20Sciences_Campus-View.jpg"; // fallback background image

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-[40vh] md:h-[45vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${image || defaultImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/70"></div>

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
      </div>





      {/* Success Stories Section */}
      <div className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-[#003B3F] mb-6">
              Success Stories
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Our alumni are the true testament to the quality of education and
              the holistic development offered at SIDDHARTHA. They have gone on to
              excel in various fields, making significant contributions not only
              in their professional careers but also in their communities. From
              leading successful tech startups to holding influential positions
              in multinational companies, SIDDHARTHA graduates have consistently
              demonstrated leadership, innovation, and a commitment to
              excellence.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              In this section, we celebrate the achievements of our alumni by
              sharing their inspiring journeys. These stories highlight the
              diverse paths our graduates have taken, showcasing the impact of a
              SIDDHARTHA education on their personal and professional lives. Whether
              it’s breaking new ground in research, spearheading major projects
              in global organizations, or driving social change through
              entrepreneurial ventures, our alumni continue to make us proud.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://gnits.ac.in/wp-content/uploads/2024/08/alumnae-1536x1152.jpeg"
              alt="GNITS Alumni Event"
              className="rounded-xl w-full max-w-big object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-[#003B3F] mb-10 text-center">
          Alumni Spotlight
        </h2>

        {/* Masonry layout using columns */}

        <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 gap-16 space-y-6">
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
              <p className="font-sans text-base font-normal text-gray-800 mt-2 text-justify">
                {alumnus.about}
              </p>
            </div>
          ))}
        </div>
      </div>
  </>
  );
};

export default AlumniHeader;
