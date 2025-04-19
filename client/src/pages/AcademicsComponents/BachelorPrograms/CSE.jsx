import React from "react";
import DepartmentPage from "../../../ResuableComponents/DepartmentPage";

function CSE() {
  return (
    <DepartmentPage
      bgImage="https://5.imimg.com/data5/UZ/QK/NW/SELLER-50714668/best-computer-science-college-of-hooghly-1000x1000.jpg"
      departmentName="Computer Science and Engineering"
      hodImage="https://siddhartha.ac.in/img/faculty/cse/Dr.%20P.%20Sunitha%20Professor%209348199958.jpg"
      hodMessage={[
        "I congratulate all the students who opted for Computer Science and Engineering branch. Engineering is a human activity aimed at creating new artifacts, algorithms, processes, and systems that provide services to humans.",
        "Computer Science and Engineering is one of the evolving, innovating, and emerging broad engineering disciplines. It deals with human interaction with computers, software, and networks to facilitate global communication through the World Wide Web.",
        "Project work gives students an edge to enhance their problem-solving and programming skills, helping them align with industry standards and transition smoothly into the workforce.",
      ]}
      hodName="Dr. P. Sunitha CSI, IAENG"
      hodDesignation="M.Tech, Ph.D | Professor & HOD"
      vision="To inculcate the students with problem-solving skills to challenge next-generation technologies."
      missionList={[
        "DM1 - Enable students to learn innovative methods for solving complex problems.",
        "DM2 - Provide industry interaction to get acquainted with its futuristic needs.",
        "DM3 - Create an environment to facilitate the students with necessary technologies.",
      ]}
      aboutContent={[
        "The Department of CSE was established in 2008 with an intake of 60 students in the UG Programme. The intake was enhanced to 120 in 2010. The Department also started a Post-Graduate programme, M.Tech (Computer Science and Engineering), with an intake of 18 students.",
        "The Department has highly qualified and experienced faculty with four Professors, five Associate Professors, and twenty-three Assistant Professors. There are five Doctorates in the Department.",
        "The Department has good infrastructure and is equipped with full-fledged laboratories. The staff members are deputed to participate in workshops, conferences, and FDPs to keep in place with recent developments in the field of Computer Science & Engineering.",
      ]}
      coursesOffered={[
        { name: "B.Tech(CSE)", duration: "4 Years", intake: "180" },
        { name: "M.Tech(CSE)", duration: "2 Years", intake: "18" },
      ]}
    />
  );
}

export default CSE;
