import React from "react";
import DepartmentPage from "../../../ResuableComponents/DepartmentPage";

function CSD() {
  return (
    <DepartmentPage
      bgImage="https://chennai.vit.ac.in/wp-content/uploads/2020/01/scse-btech-cse-1024x474.jpg"
      departmentName="Computer Science & Engineering (Data Science)"
      hodImage="https://siddhartha.ac.in/img/faculty/cse/S.V.%20Pavan%20Kumar.jpg"
      hodMessage={[
        "The Department of Computer Science and Engineering (Data Science) at Siddhartha Institute of Engineering & Technology offers a B.Tech program started in 2020-21. It aims to shape students into industry-ready professionals through expert faculty and practical exposure. The course blends computer science, statistics, and analytics to extract knowledge from data. Students gain essential skills for roles like Data Scientist and Data Engineer.",
        "With a focus on hands-on learning and innovation, the department enhances problem-solving and critical thinking abilities. It encourages teamwork, leadership, and industry interaction for real-world preparedness. The curriculum evolves with industry trends to meet future challenges. Students are empowered to thrive in the fast-growing world of data science."
      ]}
      hodName="Dr. S.V. Pavan Kumar"
      hodDesignation="M.Tech, Ph.D | HOD"
      vision="To produce and expand the capability of Data Science Graduates through Value-Based Education and make them industry ready."
      missionList={[
        "To provide highest quality of Teaching, Research and Learning Opportunities.",
        "To collaborate with the Industries and Research Institutions to instill the spirit of Innovation and Problem Solving Skills."
      ]}
      aboutContent={[
        "Data Science is the study of data. It is about extracting, analyzing, visualizing, managing and storing data to create valuable insights. These insights help companies make powerful data-driven decisions. It is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.",
        "Owing to the fast-growing demand for Data Science in the field of technology and to bridge the gap between industry and academia, AICTE has been encouraging colleges to introduce this course. The department of CSE is well prepared to provide the best learning experience for students who enrol in this course."
      ]}
      coursesOffered={[
        { name: "B.Tech (CSE - Data Science)", duration: "4 Years", intake: "60" }
      ]}
    />
  );
}

export default CSD;
