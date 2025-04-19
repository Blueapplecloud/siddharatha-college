import React from "react";
import DepartmentPage from "../../../ResuableComponents/DepartmentPage";

function CSEAIML() {
  return (
    <DepartmentPage
      bgImage="https://res.cloudinary.com/nsitcollege/image/upload/v1557564703/general/c-r.png"
      departmentName="CSE – Artificial Intelligence and Machine Learning"
      hodImage="https://siddhartha.ac.in/img/faculty/cse/IMG_20240307_121549_2.jpg"
      hodMessage={[
        "Artificial Intelligence is a branch of Computer Science that focuses on creating intelligent machines that replicate human-like behavior.",
        "The department is enriched with specialized labs in Machine Learning, IoT, and Big Data Analytics. Future plans include expanding to Robotics, Neural Networks, Intelligent Systems, Data Analytics, and Natural Language Processing.",
        "Our computer laboratories are equipped with advanced systems like 12th Gen i7 processors, fully air-conditioned, and supported by centralized UPS backup. We aim to be among India's top AI engineering institutions by offering top-quality education and facilities.",
        "Prof. P. Raghu leads the department with a vision for academic excellence and cutting-edge learning environments."
      ]}
      hodName="Prof. P. Raghu"
      hodDesignation="M.Tech, Ph.D | Assoc. Prof, HOD"
      vision="To develop skilled AI & ML engineers through latest tools by imparting quality education to serve the society."
      missionList={[
        "Enable students to gain knowledge on the concepts and technologies of Artificial Intelligence and Machine Learning.",
        "Facilitate the students with innovative tools to face the challenging future generation.",
        "Associate with industry to explore latest technologies."
      ]}
      aboutContent={[
        "AI & ML are rapidly evolving fields that are transforming industries worldwide. This specialization within CSE is aimed at developing professionals with deep technical skills in building smart applications using AI algorithms.",
        "The program integrates theoretical foundations with practical learning through advanced labs and real-world projects. Students explore topics such as intelligent systems, analytics, and data-driven decision-making.",
        "Graduates are equipped to create high-performance applications and solutions, combining technical excellence with analytical thinking. The department ensures an engaging, research-oriented environment fostering innovation and leadership in the AI domain."
      ]}
      coursesOffered={[
        { name: "B.Tech(CSE - AI & ML)", duration: "4 Years", intake: "60" }
      ]}
    />
  );
}

export default CSEAIML;
