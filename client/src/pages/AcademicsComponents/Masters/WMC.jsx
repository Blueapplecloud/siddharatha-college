import React from "react";
import AboutHeader from "../../../ResuableComponents/AboutHeading";
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

function WMC() {
  const courseOverview = {
    title: "Course Overview",
    text1:
      "The M.Tech in Wireless and Mobile Communication at GNITS is designed to equip students with in-depth knowledge of wireless communication technologies, mobile networks, and signal processing. The program combines advanced theoretical concepts with practical skills, preparing students to address the challenges of rapidly evolving communication systems. With a focus on modern wireless technologies such as 4G/5G, IoT, and mobile communication protocols, students gain the expertise needed to innovate and lead in this dynamic field.",
    text2:
      "Graduates are well-prepared for careers in telecommunications, mobile network design, and wireless system development. The curriculum also provides a strong foundation for those interested in research and advanced studies in wireless communication technologies.",
    img: "/images/overview_peed.jpg",
  };

  const whyChoseSITS = {
    heading: "Why Choose Siddhartha for Your Master’s?",
    text: "GNITS provides a cutting-edge learning environment with a curriculum focused on the latest wireless technologies, supported by industry partnerships and advanced labs, ensuring students are equipped to excel in the field.",
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
      img: "/images/overview_peed.jpg",
    },
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "Mentored by Experts",
      description:
        "Learn from faculty who bring real-world experience and research excellence to guide your academic journey.",
      img: "/images/overview_peed.jpg",
    },
    {
      icon: <FaAward size={40} />,
      title: "Versatile Career Options",
      description:
        "Equip yourself for diverse roles in software engineering, AI development, data science, and tech leadership across industries.",
      img: "/images/overview_peed.jpg",
    },
  ];
  const careerPaths = [
    "Wireless Communication Engineer",
    "Mobile Network Designer",
    "Signal Processing Specialist",
    "RF Engineer",
    "IOT Systems Developer",
    "Telecommunications Consultant",
    "Research Scientist in Wireless Technologies",
  ];
  return (
    <div className="w-full  border-1">
      <AboutHeader
        title="Wireless and Mobile Communication"
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

export default WMC;
