import React from "react";
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

function StudentCorner() {
  const cardData = [
    {
      title: "Skill Enhancement",
      description:
        "Siddhartha fosters a supportive and inclusive environment that empowers women to thrive in technology and engineering, providing the confidence and skills needed for leadership and success.",
      icon: <FaTools />,
    },
    {
      title: "Student Counseling",
      description:
        "Siddhartha offers state-of-the-art labs and research centers, giving students the opportunity to engage in hands-on learning and innovate in emerging fields like AI, VLSI, and more.",
      icon: <MdOutlineSupportAgent />,
    },
    {
      title: "Student Chapters",
      description:
        "Our curriculum is developed with direct industry input, ensuring students gain cutting-edge, relevant skills that prepare them for dynamic and successful global careers.",
      icon: <FaUsers />,
    },
    {
      title: "EDC Cell",
      description:
        "Our dedicated placement cell works to connect students with top employers, offering career guidance and ensuring excellent job opportunities in prestigious companies worldwide.",
      icon: <GiNetworkBars />,
    },
    {
      title: "NPTEL",
      description:
        "Siddhartha encourages students to grow beyond academics through leadership programs, extracurricular activities, and skill-building workshops, fostering well-rounded personal and professional development.",
      icon: <HiOutlineAcademicCap />,
    },
    {
      title: "EC Council Academia",
      description:
        "Siddhartha encourages students to grow beyond academics through leadership programs, extracurricular activities, and skill-building workshops, fostering well-rounded personal and professional development.",
      icon: <FaUserGraduate />,
    },
    {
      title: "Newsletter",
      description:
        "Siddhartha offers state-of-the-art labs and research centers, giving students the opportunity to engage in hands-on learning and innovate in emerging fields like AI, VLSI, and more.",
      icon: <FaRegNewspaper />,
    },
    {
      title: "Student Blog",
      description:
        "Siddhartha encourages students to grow beyond academics through leadership programs, extracurricular activities, and skill-building workshops, fostering well-rounded personal and professional development.",
      icon: <BsPencilSquare />,
    },
  ];

  return (
    <div>
      {/* Holistic Grievance Redressal */}
      <div className="bg-[#003F41] text-white py-16 px-6 md:px-24">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          {/* Left Section */}
          <div className="w-full md:w-2/3">
            <h2
              className="!text-[37px] !font-bold mb-6"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Holistic Grievance Redressal
            </h2>
            <p className="text-sm md:text-base font-medium leading-relaxed">
              At Siddhartha, we are committed to fostering a supportive and
              inclusive environment for our students, faculty, and staff. Our
              holistic grievance redressal approach ensures that every concern
              is addressed promptly and fairly, promoting a culture of mutual
              respect and harmony. By integrating transparent processes and
              responsive measures, we aim to create an atmosphere where every
              member of our community feels valued and heard, thereby
              contributing to the overall well-being and academic excellence of
              the institution.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/4 flex flex-col items-center justify-center text-center">
            <h3 className="text-sm md:text-xl font-semibold mb-4 whitespace-nowrap">
              Online Grievance Redressal
            </h3>
            <button className="bg-[#D98C00] text-white font-semibold px-6 py-3 rounded flex items-center gap-2 shadow-lg hover:bg-[#c87f00] transition">
              <FaRegCommentDots size={20} />
              Register Grievance
            </button>
          </div>
        </div>
      </div>

      {/* students corner */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-15 py-5">
        <div className="w-full max-w-7xl">
          <h1
            className="!text-[37px] !font-bold mb-4"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            Students Corner
          </h1>
          <p className="mb-8">
            Siddhartha empowers women to excel in technology through
            industry-aligned education, advanced resources, holistic
            development, and strong placement support. Unlock your potential and
            shape the future with Siddhartha.
          </p>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
              cardData.length % 3 === 2 ? "lg:grid-cols-2" : ""
            } py-15`}
          >
            {cardData.map((card, index) => (
              <div
                key={index}
                className="p-6 bg-[#003F41] rounded-lg shadow-md hover:shadow-lg transition relative overflow-hidden flex flex-col justify-between items-start min-h-[350px] abute inset-0 hover:bg-gradient-to-r from-green-400 to-blue-500 hover:duration-300"
                style={{
                  backgroundImage: card.bgImage,
                  backgroundSize: "cover",
                }}
              >
                {/* Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 hover:opacity-80 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl text-green-600 mb-4">
                    {card.icon}
                  </div>
                  <h2 className="text-lg font-semibold text-white mb-2">
                    {card.title}
                  </h2>
                  <div className="w-full h-0.5 bg-gray-300 my-2"></div>
                  <p className="text-white">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCorner;
