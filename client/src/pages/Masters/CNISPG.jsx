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

function CNISPG() {
  const courseOverview = {
    title: "Course Overview",
    text1:
      "The M.Tech in Computer Networks and Information Security at Siddhartha is a specialized program focused on building expertise in designing secure network architectures, managing cyber threats, and implementing advanced security protocols. The program covers key areas such as network security, cryptography, ethical hacking, and cloud security, ensuring that students gain the skills needed to protect and manage complex information systems.",
    text2:
      "Graduates are prepared for roles in network administration, cybersecurity analysis, and information security management. The curriculum also provides a strong foundation for those interested in advanced research in cybersecurity.",
    img: "/images/overview_cnis.jpg",
  };

  const whyChoseSITS = {
    heading: "Why Choose Siddhartha for Your Master’s?",
    text: "SiddharthaS provides a cutting-edge curriculum, expert faculty, and hands-on experience in the latest technologies, ensuring students are ready to excel in the dynamic field of computer science.",
    image: "/images/overview_cnis.jpg",
  };
  const features = [
    {
      icon: <FaBrain size={40} />,
      title: "AI and Data Science Labs",
      description:
        "Engage in hands-on projects using cutting-edge tools for artificial intelligence, machine learning, and big data analytics.",
      img: "/images/overview_cnis.jpg",
    },
    {
      icon: <FaNetworkWired size={40} />,
      title: "Tech-Driven Curriculum",
      description:
        "Stay ahead with a curriculum that emphasizes emerging technologies like blockchain, cybersecurity, and cloud computing.",
      img: "/images/overview_cnis.jpg",
    },
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "Mentored by Experts",
      description:
        "Learn from faculty who bring real-world experience and research excellence to guide your academic journey.",
      img: "/images/overview_cnis.jpg",
    },
    {
      icon: <FaAward size={40} />,
      title: "Versatile Career Options",
      description:
        "Equip yourself for diverse roles in software engineering, AI development, data science, and tech leadership across industries.",
      img: "/images/overview_cnis.jpg",
    },
  ];
  const careerPaths = [
    "Network Security Engineer",
    "Cybersecurity Analyst",
    "Network Architect",
    "Information Security Manager",
    "Cloud Security Specialist",
    "Penetration Tester",
    "Security Consultant",
    "And more...",
  ];
  return (
    <div className="w-full  border-1">
      <AboutHeader
        title="Computer Networks and Information Security"
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

export default CNISPG;
