import React from "react";
import DepartmentPage from "../../../ResuableComponents/DepartmentPage";

function Mech() {
  return (
    <DepartmentPage
      bgImage="https://www.smitgp.edu.in/uploads/course/1628595966-Mechanical_Diploma.jpg"
      departmentName="Mechanical Engineering"
      hodImage="https://siddhartha.ac.in/img/faculty/mech/SLNReddy.jpg"
      hodMessage={[
        "The Department of Mechanical Engineering at Siddhartha Institute of Engineering and Technology is dedicated to equipping students with the knowledge and skills required to excel in the dynamic field of mechanical engineering.",
        "The department is staffed by highly qualified faculty members with expertise in areas such as thermodynamics, manufacturing, CAD/CAM, and structural mechanics. Our modern labs, paired with advanced software training (AutoCAD, CATIA, Creo, ANSYS), offer students valuable hands-on experience.",
        "We emphasize practical learning through site visits, training programs, and project work to ensure that our students are well-prepared for industry challenges. The department also offers opportunities for students to engage in research, innovation, and interdisciplinary projects.",
        "Mr. S.L. Narasimha Reddy, the Head of the Department, brings a wealth of experience with a strong academic background and a passion for developing mechanical engineering solutions. His commitment to excellence has been instrumental in shaping the department’s growth."
      ]}
      hodName="Mr. S.L. Narasimha Reddy"
      hodDesignation="M.Tech, Ph.D | HOD"
      vision="To be a leading knowledge center for producing highly skilled and ethical mechanical engineers who contribute to societal development."
      missionList={[
        "To impart in-depth technical knowledge and foster skill development in mechanical engineering.",
        "To encourage research and innovation for the advancement of engineering technologies.",
        "To develop graduates who are industry-ready and can contribute to global engineering challenges."
      ]}
      aboutContent={[
        "The Department of Mechanical Engineering at Siddhartha Institute of Engineering & Technology was established in 2009 and aims to produce highly skilled mechanical engineers equipped with the latest industry knowledge.",
        "The department offers a comprehensive education that combines theory with practical exposure. Students receive hands-on training with state-of-the-art software and are encouraged to participate in research and development activities.",
        "Our faculty members are actively involved in research and technical publications, ensuring that students are trained with the latest tools and methodologies in mechanical engineering."
      ]}
      coursesOffered={[
        { name: "B.Tech(Mechanical)", duration: "4 Years", intake: "60" }
      ]}
    />
  );
}

export default Mech;
