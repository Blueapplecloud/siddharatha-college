import React from "react";
import DepartmentPage from "../../../ResuableComponents/DepartmentPage";

function ECE() {
  return (
    <DepartmentPage
      bgImage="https://th.bing.com/th/id/R.c4e60797561cf101e98e095fedb5330e?rik=vW%2f0J6j8g0ZNiw&riu=http%3a%2f%2ftecmoneragala.dtet.gov.lk%2fwp-content%2fuploads%2f2020%2f07%2fICT.jpg&ehk=VgBLjxmsK7XarB2sPzynFiDZnbYrnmE4HMfZOB839rw%3d&risl=&pid=ImgRaw&r=0"
      departmentName="Electronics and Communication Engineering"
      hodImage="https://siddhartha.ac.in/img/faculty/ece/FARAANJUM.jpg"
      hodMessage={[
        "The Department of Electronics and Communication Engineering (ECE) at Siddhartha Institute of Engineering and Technology focuses on providing students with a solid foundation in both theoretical and practical aspects of electronics and communication technologies.",
        "The department is equipped with state-of-the-art labs in Electronic Devices & Circuits, Pulse, Digital & IC Circuits, Basic Simulation, Communications, Digital Signal Processing, Microwave & Optical Communications, and Microprocessors. Advanced research labs include VLSI Center of Excellence and Embedded Systems.",
        "Students are encouraged to participate in research, innovation, and industry-based learning, with a special emphasis on placement training and preparation for exams like GATE, TSPSC, and IES.",
        "Dr. Farah Anjum, the Head of the Department, brings extensive experience and a commitment to fostering academic excellence in the department. She holds a Ph.D. and is actively involved in research and development activities."
      ]}
      hodName="Dr. Farah Anjum"
      hodDesignation="M.Tech, Ph.D | HOD"
      vision="To provide valuable resources for industry and society through excellence in technical education and research."
      missionList={[
        "To educate students with state-of-the-art technologies to meet the growing challenges of the industry.",
        "To carry out research through continuous interaction with research organizations and industry.",
        "To equip students with strong foundations to enable them for continuing education."
      ]}
      aboutContent={[
        "The Department of Electronics and Communication Engineering at Siddhartha Institute of Engineering and Technology was established in 2008. The department offers undergraduate and postgraduate programs in VLSI Design and Embedded Systems, focusing on the ever-evolving field of electronics and communication.",
        "The department provides students with ample opportunities for research and innovation through modern lab facilities, access to high-end software like MATLAB, Xilinx, and Co-design tools, and exposure to industry practices via internships and site visits.",
        "Faculty members are actively engaged in research activities and regularly publish papers in national and international conferences. The department’s strengths lie in its well-equipped labs and the dedication of its experienced faculty."
      ]}
      coursesOffered={[
        { name: "B.Tech(ECE)", duration: "4 Years", intake: "120" },
        { name: "M.Tech (VLSI & Embedded Systems)", duration: "2 Years", intake: "30" }
      ]}
    />
  );
}

export default ECE;
