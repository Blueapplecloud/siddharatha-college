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

function CSEPG() {
  const courseOverview = {
    title: "Course Overview",
    text1:
      "The M.Tech in Computer Science and Engineering at Siddhartha offers an advanced exploration of core computer science principles, focusing on areas like artificial intelligence, data science, software engineering, and distributed computing. The program is designed to equip students with the skills required to innovate and solve complex technological challenges, making them adept in both theoretical foundations and practical applications.",
    text2:
      "Graduates are well-prepared for high-impact roles in software development, data analytics, and IT management, as well as for pursuing research and academic careers in computer science.",
    img: "/images/overview_cse.jpg",
  };

  const whyChoseSITS = {
    heading: "Why Choose Siddhartha for Your Master’s?",
    text: "SiddharthaS provides a cutting-edge curriculum, expert faculty, and hands-on experience in the latest technologies, ensuring students are ready to excel in the dynamic field of computer science.",
    image: "/images/overview_cse.jpg",
  };
  const features = [
    {
      icon: <FaBrain size={40} />,
      title: "AI and Data Science Labs",
      description:
        "Engage in hands-on projects using cutting-edge tools for artificial intelligence, machine learning, and big data analytics.",
      img: "/images/overview_cse.jpg",
    },
    {
      icon: <FaNetworkWired size={40} />,
      title: "Tech-Driven Curriculum",
      description:
        "Stay ahead with a curriculum that emphasizes emerging technologies like blockchain, cybersecurity, and cloud computing.",
      img: "/images/overview_cse.jpg",
    },
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "Mentored by Experts",
      description:
        "Learn from faculty who bring real-world experience and research excellence to guide your academic journey.",
      img: "/images/overview_cse.jpg",
    },
    {
      icon: <FaAward size={40} />,
      title: "Versatile Career Options",
      description:
        "Equip yourself for diverse roles in software engineering, AI development, data science, and tech leadership across industries.",
      img: "/images/overview_cse.jpg",
    },
  ];
  const careerPaths = [
    "Software Developer",
    "Data Scientist",
    "AI/ML Engineer",
    "IT Manager",
    "Systems Architect",
    "Cloud Solutions Architect",
    "Research Scientist in Computer Science",
    "And more...",
  ];
  return (
    <div className="w-full  border-1">
      <AboutHeader
        title="Computer Science and Engineering"
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

export default CSEPG;
