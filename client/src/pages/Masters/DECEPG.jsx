import React from "react";
import AboutHeader from "../../ResuableComponents/AboutHeading";
import CourseOverview from "./CourseOverview";
import WhyChoseSITS from "./WhyChoseSITS";
import {
  FaBrain,
  FaNetworkWired,
  FaChalkboardTeacher,
  FaAward,
} from "react-icons/fa";
import FeaturesSection from "./FeaturesSection";
import ProgramCurriculum from "./ProgramCurriculum";
import InfrastructureSection from "./Infrastructure";
import ImpecableFaculty from "./ImpecableFaculty";
import StudentsSay from "./StudntsSay";
import TestimonialsCarousel from "./Testimonials";
import PlacementsSection from "./PlacementsSection";
import Accordion from "./Accordions";
import WhatsNext from "./WhatsNext";
import CareerPath from "./CareerPath";

function DECEPG() {
  const courseOverview = {
    title: "Course Overview",
    text1:
      "The M.Tech in Digital Electronics and Communication Engineering at Siddhartha is designed to equip students with deep expertise in digital communication, VLSI design, signal processing, and embedded systems. The program combines rigorous theoretical learning with hands-on experience, enabling students to master complex technologies and solve real-world challenges in digital electronics and communication.",
    text2:
      "Graduates of this program are prepared for leadership roles in industries such as telecommunications, semiconductor design, and embedded systems. The curriculum also lays a strong foundation for those interested in pursuing advanced research or academic careers.",
    img: "/images/overview_dece.jpg",
  };

  const whyChoseSITS = {
    heading: "Why Choose Siddhartha for Your Master’s?",
    text: "Siddhartha offers a dynamic learning environment where students gain both theoretical and practical expertise in digital electronics and communication. With state-of-the-art facilities, strong industry connections, and a curriculum designed to meet modern industry needs, Siddhartha ensures that students are well-equipped to excel in advanced technical roles and research.",
    image: "/images/overview_peed.jpg",
  };
  const features = [
    {
      icon: <FaBrain size={40} />,
      title: "State-of-the-Art Labs",
      description:
        "Gain hands-on experience in cutting-edge VLSI, Embedded Systems, and Signal Processing labs equipped with the latest technology.",
      img: "/images/overview_peed.jpg",
    },
    {
      icon: <FaNetworkWired size={40} />,
      title: "Tech-Driven Curriculum",
      description:
        "Stay ahead with a curriculum that emphasizes emerging technologies like blockchain, cybersecurity, and cloud computing.",
      img: "/images/overview_dece.jpg",
    },
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "Mentored by Experts",
      description:
        "Learn from faculty who bring real-world experience and research excellence to guide your academic journey.",
      img: "/images/overview_dece.jpg",
    },
    {
      icon: <FaAward size={40} />,
      title: "Versatile Career Options",
      description:
        "Equip yourself for diverse roles in software engineering, AI development, data science, and tech leadership across industries.",
      img: "/images/overview_dece.jpg",
    },
  ];
  const careerPaths = [
    "Digital Design Engineer",
    "Embedded Systems Engineer",
    "VLSI Design Engineer",
    "Signal Processing Engineer",
    "Telecommunications Engineer",
    "Telecom Network Engineer",
    "FPGA Developer",
  ];
  return (
    <div className="w-full  border-1">
      <AboutHeader
        title="Digital Electronics and Communication Engineering "
        image="/images/clgimg.jpeg"
      />
      <CourseOverview
        title={courseOverview.title}
        text1={courseOverview.text1}
        text2={courseOverview.text2}
        img={courseOverview.img}
      />

      <WhyChoseSITS
        heading={whyChoseSITS.heading}
        text={whyChoseSITS.text}
        image={whyChoseSITS.image}
      />
      <FeaturesSection features={features} />
      <ProgramCurriculum />
      <CareerPath careerPaths={careerPaths} />
      <InfrastructureSection />
      <ImpecableFaculty />
      <StudentsSay />
      <TestimonialsCarousel />
      <PlacementsSection />
      <Accordion />
      <WhatsNext />
    </div>
  );
}

export default DECEPG;
