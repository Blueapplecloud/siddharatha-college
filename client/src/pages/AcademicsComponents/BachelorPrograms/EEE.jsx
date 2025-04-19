import React from "react";
import DepartmentPage from "../../../ResuableComponents/DepartmentPage";

function EEE() {
  return (
    <DepartmentPage
      bgImage="https://oakter.com/wp-content/uploads/2023/09/Why-Companies-Are-Choosing-India-As-a-Hub-for-Electronic-Contract-Manufacturing.jpg"
      departmentName="Electrical & Electronics Engineering"
      hodImage="https://siddhartha.ac.in/img/faculty/eee/Prof.%20Satish%20Goud.jpg"
      hodMessage={[
        "The Department of Electrical and Electronics Engineering at Siddhartha Institute of Engineering & Technology is committed to delivering strong academic and practical knowledge in the core areas of electrical and electronics engineering.",
        "With a team of dedicated and experienced faculty members, the department focuses on both advanced teaching methodologies and active research. Faculty members regularly publish in reputed journals and engage in seminars and workshops to further enhance their expertise and student learning.",
        "The department offers a four-year undergraduate B.Tech program designed to meet the needs of current and future industry demands, particularly aligned with Industry 4.0. Students are encouraged to work on innovative research ideas with the support of faculty and modern laboratory facilities.",
        "Graduates from this program are well-prepared for careers across a wide spectrum, including power industries, government PSUs, R&D units, IT firms, telecommunications, and start-up ventures."
      ]}
      hodName="Prof. G. Sathish Goud"
      hodDesignation="M.Tech, Ph.D | HOD"
      vision="To produce professionally competent graduates in the field of Electrical and Electronics Engineering for addressing the challenges in industry and society."
      missionList={[
        "To develop Institute-Industry Interaction for collaborative research and entrepreneurial skills among the stakeholders.",
        "To offer high-quality graduate programs in Electrical and Electronics and prepare students for professional careers and higher studies.",
        "To promote excellence in teaching, research, and positive contributions to society."
      ]}
      aboutContent={[
        "The Department of Electrical and Electronics Engineering at Siddhartha Institute of Engineering & Technology is led by Prof. G. Sathish Goud, a doctorate with 13 years of teaching experience, supported by a strong team of qualified faculty. The department emphasizes continual learning and professional development through active participation in ISTE, IETE programs, and journal publications.",
        "Established in 2008, the EEE department has grown significantly, now offering undergraduate and postgraduate programs with well-equipped labs as per JNTUH norms. The department fosters student engagement through seminars, quizzes, and industrial visits under the student body Vid-Youth Tarang.",
        "With a curriculum aligned to modern advancements like electric vehicles and HVDC systems, the department prepares students for promising careers in government and private sectors."
      ]}
      coursesOffered={[
        { name: "B.Tech(EEE)", duration: "4 Years", intake: "120" }
      ]}
    />
  );
}

export default EEE;
