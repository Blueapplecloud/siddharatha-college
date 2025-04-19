import React from "react";
import DepartmentPage from "../../../ResuableComponents/DepartmentPage";

function Civil() {
  return (
    <DepartmentPage
      bgImage="https://th.bing.com/th/id/OIP.JQKtVBZZ_MRcJGwiJkwdJQHaE5?w=280&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      departmentName="Civil Engineering"
      hodImage="https://siddhartha.ac.in/img/faculty/civil/civil-hod.jpg"
      hodMessage={[
        "The Department of Civil Engineering at Siddhartha Institute of Engineering and Technology, Ibrahimpatnam, is dedicated to equipping students with the knowledge and skills required to face real-world challenges in the civil engineering field.",
        "The department boasts a team of qualified and dynamic faculty members with expertise in various specializations such as geotechnical, environmental, transportation, structural, and construction engineering. With comprehensive lab facilities and state-of-the-art teaching aids, students gain hands-on experience through practical exposure, including regular site visits and training in advanced tools like AutoCAD, STAAD Pro, and ArcGIS.",
        "The department places special emphasis on training and placement, supporting students in preparing for competitive exams like GATE, TSPSC, and IES. It actively encourages participation in national-level technical events and motivates students to engage in research, innovation, and industry-based learning.",
        "Mr. Y. Naveen Kumar, the Head of the Department, brings over twelve years of teaching experience and six months of industry exposure. He has published multiple papers and completed certifications such as NPTEL and ARPIT, contributing significantly to the department’s growth."
      ]}
      hodName="Mr. Y. Naveen Kumar"
      hodDesignation="B.E, M.Tech, ISTE, (Ph.D) | HOD"
      vision="To be an outstanding knowledge centre for developing ethical and highly competent manpower in conducting research for civil engineering."
      missionList={[
        "To produce highly enthusiastic, ethical and energetic civil engineers to redefine and reshape the destiny of future generations.",
        "To provide research opportunities for faculty and students.",
        "To impart quality-based education for facilitating the adoption of advanced technologies and environmental stewardship."
      ]}
      aboutContent={[
        "The Department of Civil Engineering at Siddhartha Institute of Engineering & Technology was established with the aim of delivering top-quality education, strong research output, and industry-ready graduates.",
        "The department emphasizes practical exposure through modern lab facilities, hands-on software training, and industry-relevant site visits.",
        "Faculty members are actively involved in continuous professional development and research activities, ensuring that students are trained with the latest methodologies and tools in civil engineering."
      ]}
      coursesOffered={[
        { name: "B.Tech(Civil)", duration: "4 Years", intake: "60" }
      ]}
    />
  );
}

export default Civil;
