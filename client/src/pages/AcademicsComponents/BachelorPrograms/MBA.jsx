import React from "react";
import DepartmentPage from "../../../ResuableComponents/DepartmentPage";

function MBA() {
  return (
    <DepartmentPage
      bgImage="https://image.shutterstock.com/image-photo/nagpur-maharashtra-india-13-april-260nw-557337520.jpg"
      departmentName="Master of Business Administration"
      hodImage="https://siddhartha.ac.in/img/faculty/mba/VRamesh.jpg"
      hodMessage={[
        "The Department of Management Studies at Siddhartha Institute of Engineering & Technology, established in 2009, offers a two-year full-time MBA program focused on developing skilled professionals in finance, HR, and marketing.",
        "The department blends academic rigor with real-world exposure through industrial visits, case studies, communication workshops, and interactive training sessions. Supported by experienced faculty, the program promotes innovation, entrepreneurship, and research-based learning.",
        "The MBA program emphasizes specialization in finance, marketing, and human resources, equipping students with the managerial and soft skills required for success in the global business environment.",
        "Prof. V. Ramesh, the Head of the Department, brings years of experience in teaching and research. He has published several papers, books, and attended numerous professional development programs, ensuring the department’s continued growth."
      ]}
      hodName="Prof. V. Ramesh"
      hodDesignation="MBA, MA, B.Ed (PhD) | Associate Professor & Head"
      vision="To emerge as the Centre of Excellence in Management Education."
      missionList={[
        "To develop globally competent and socially responsible leaders and entrepreneurs through world-class education.",
        "To provide innovative teaching methodologies to bridge the gap between theory and practice.",
        "To promote research and industry-based learning among students and faculty."
      ]}
      aboutContent={[
        "The Department of Management Studies offers a well-rounded MBA program that blends academic learning with practical industry exposure. It focuses on management concepts, business strategies, and leadership development.",
        "The department hosts industry interaction programs, workshops, and case study discussions to ensure that students are well-equipped with the skills needed to succeed in the competitive business world.",
        "Faculty members are highly qualified and bring a wealth of experience in teaching, research, and industry, ensuring that students are trained with the latest industry insights."
      ]}
      coursesOffered={[
        { name: "MBA (Finance/Marketing/Human Resources)", duration: "2 Years", intake: "60" }
      ]}
    />
  );
}

export default MBA;
