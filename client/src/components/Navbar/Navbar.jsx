//used react-bootstrap for the navbar
//to install react-bootstrap, run the following command in your terminal:
//npm install react-bootstrap bootstrap

import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/" className="nav-brand">
            SIDDHARTHA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-right small-text">
              <NavDropdown
                title="ABOUT"
                id="about-dropdown"
                className="custom-dropdown white-text"
              >
                <NavDropdown.Item as={Link} to="/about">
                  About
                </NavDropdown.Item>
                <NavDropdown.Item href="#legacy">Legacy</NavDropdown.Item>
                <NavDropdown.Item href="/leadership-and-governance">
                  Leadership and Governance
                </NavDropdown.Item>
                <NavDropdown.Item href="/strategic">
                  Strategic Plan
                </NavDropdown.Item>
                <NavDropdown.Item href="/organogram">
                  Organogram
                </NavDropdown.Item>
                <NavDropdown.Item href="#committees">
                  Academic & Administrative Committees
                </NavDropdown.Item>
                <NavDropdown.Item href="/Awards">
                  Awards & Recognitions
                </NavDropdown.Item>
                <NavDropdown.Item href="#accreditations">
                  Accreditations
                </NavDropdown.Item>
                <NavDropdown.Item href="#why">Why Sidharatha</NavDropdown.Item>
                <NavDropdown title="Governance" drop="end">
                  <NavDropdown.Item href="#council">
                    Governing Council Members
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#academic-council">
                    College Academic Council
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="#policies">Policies</NavDropdown.Item>
                <NavDropdown.Item href="#annual-reports">
                  Annual Reports
                </NavDropdown.Item>
                <NavDropdown title="Audit Reports" drop="end">
                  <NavDropdown.Item href="#welfare">
                    Welfare Measures
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="#disclosures">
                  Mandatory Disclosures
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="ACADEMICS"
                id="academics-dropdown"
                className="custom-dropdown"
              >
                <NavDropdown title="Admissions" drop="end">
                  <NavDropdown.Item href="#how-to-apply">
                    How to Apply
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#policy">
                    Admission Policy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#fees">
                    Fee Structure
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Bachelors Programs" drop="end">
                  <NavDropdown.Item href="/ComputerScience&Engg">
                    Computer Science Engineering
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ComputerScience&Engg(AI & ML)">
                    Computer Science & Engineering (AI & ML)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/MechanicalEngg">
                    Mechanical Engineering
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ECE">
                    Electronics and Communication Engineering
                  </NavDropdown.Item>
                  <NavDropdown.Item>Information Technology</NavDropdown.Item>
                  <NavDropdown.Item>
                    Computer Science and Technology
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Computer Science – Data science
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Electrical and Electronics Engineering
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Electronics and Telematics Engineering
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Auxiliary Departments" drop="end">
                  <NavDropdown.Item>
                    Humanities and Mathematics
                  </NavDropdown.Item>
                  <NavDropdown.Item>Basic Sciences Department</NavDropdown.Item>
                  <NavDropdown.Item>Mechanical</NavDropdown.Item>
                  <NavDropdown.Item>Civil</NavDropdown.Item>
                  <NavDropdown.Item>Administration</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Item>Syllabus ( UG & PG )</NavDropdown.Item>

                <NavDropdown title="Masters (PG) Programs" drop="end">
                  <NavDropdown.Item>
                    Computer Science and Engineering
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Computer Networks and Information Security
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Digital Electronics and Communication Engineering
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Power Electronics & Electrical Drives
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Wireless and Mobile Communication
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Item>Academic Timetables</NavDropdown.Item>
                <NavDropdown title="Extended Learning" drop="end">
                  <NavDropdown.Item>Student Chapters</NavDropdown.Item>
                  <NavDropdown.Item>
                    Non-Formal Sanskrit Education (NFSE)
                  </NavDropdown.Item>
                  <NavDropdown.Item>NPTEL</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item>Academic Calendar</NavDropdown.Item>
                <NavDropdown.Item>Staff Directory</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="CAMPUS"
                id="academics-dropdown"
                className="custom-dropdown"
              >
                <NavDropdown.Item href="/CampusLife">
                  Life At Sidhartha
                </NavDropdown.Item>
                <NavDropdown title="Facilities" drop="end">
                  <NavDropdown.Item href="#student-hostels">
                    Student Hostels
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#transportation">
                    Transportation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#library">Library</NavDropdown.Item>

                  <NavDropdown.Item href="#facility-women">
                    Facilities for Women Safety and Security
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#water">
                    Water Conservation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#green-campus">
                    Green Campus
                  </NavDropdown.Item>
                  <NavDropdown.Item href="disabled">
                    Disabled Friendly Campus
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <NavDropdown
                title="RESEARCH"
                id="academics-dropdown"
                className="custom-dropdown"
              >
                <NavDropdown.Item href="/overview">Overview</NavDropdown.Item>
                <NavDropdown.Item href="#academic-research">
                  Academic Research
                </NavDropdown.Item>
                <NavDropdown.Item href="#funded-reasearch-project">
                  Funded Reasearch Projects
                </NavDropdown.Item>
                <NavDropdown.Item href="#research-centers">
                  Research Centers
                </NavDropdown.Item>
                <NavDropdown.Item href="#policies">Policies</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#research">RESEARCH</Nav.Link>
              <Nav.Link href="/Placements">PLACEMENTS</Nav.Link>
              <Nav.Link href="#student-corner">STUDENT CORNER</Nav.Link>
              <Nav.Link href="#placements">PLACEMENTS</Nav.Link>

              <NavDropdown
                title="STUDENT CORNER"
                id="STUDENT-dropdown"
                className="custom-dropdown white-text"
              >
                <NavDropdown.Item href="/ExamCell">
                    Time Table
                  </NavDropdown.Item>
                 </NavDropdown>

              <Nav.Link href="#more">INCUBATION CELL</Nav.Link>
              <Nav.Link href="#more">EXAM CELL</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Bottom Navigation Bar */}
      <Navbar className="sub-navbar" variant="light">
        <Container>
          <Nav className="ms-auto align-right small-text">
            <Nav.Link href="#nss">NSS</Nav.Link>
            <Nav.Link href="#ieee">IEEE</Nav.Link>
            <Nav.Link href="#grievance">Grievance Redressal</Nav.Link>
            <Nav.Link href="#library">Library</Nav.Link>
            <Nav.Link href="#alumni">Alumni</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
