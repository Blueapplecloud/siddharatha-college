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

function PE_ED() {
  const courseOverview = {
    title: "Course Overview",
    text1:
      "The Master’s program in Power Electronics and Electrical Devices at Siddhartha is tailored for students eager to deepen their expertise in electrical systems. Offering a strong foundation in both theory and application, this program prepares you for a successful career in industry, research, or academia. Through a blend of rigorous coursework and practical experience, you’ll gain the skills needed to excel in the ever-evolving field of power electronics and electrical engineering.",
    text2:
      "This program is not just about learning—it’s about transforming the way electrical systems are understood and applied. Siddhartha is committed to producing graduates who can innovate and lead in a rapidly changing technological landscape. By focusing on the latest advancements in power electronics, renewable energy, and smart grid technologies, the program ensures that you are equipped to address the pressing energy challenges of today and tomorrow. Whether you aspire to push the boundaries of research or drive innovation in industry, this program provides the comprehensive education and practical experience needed to make a lasting impact in the field.",
    img: "/images/overview_peed.jpg",
  };

  const whyChoseSITS = {
    heading: "Why Choose Siddhartha for Your Master’s?",
    text: "Siddhartha provides a rigorous, industry-focused Master’s program in Power Electronics and Electrical Devices. With cutting-edge labs, experienced faculty, and strong industry ties, Siddhartha equips you with the skills and knowledge to excel in your career and drive innovation in the field.",
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
    "Power Electronics Engineer",
    "Electrical Design Engineer",
    "Smart Grid Specialist",
    "Renewable Energy Consultant",
    "Electrical Vehicle Engineer",
    "Research and Development Engineer",
  ];
  return (
    <div className="w-full  border-1">
      <AboutHeader
        title="Power Electronics and Electrical Drives"
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

export default PE_ED;
