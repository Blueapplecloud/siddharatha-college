// used react-bootstrap for the navbar
// to install react-bootstrap, run the following command in your terminal:
// npm install react-bootstrap bootstrap

import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <>
      {/* Main Top Navigation Bar */}
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          {/* Brand/Logo */}
          <Navbar.Brand as={Link} to="/" className="nav-brand">
            <img src="/logos/logomain.png" alt="logo" />
          </Navbar.Brand>

          {/* Responsive Toggle Button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-right small-text">
              {/* ABOUT Section */}
              <NavDropdown
                title="ABOUT"
                id="about-dropdown"
                className="custom-dropdown white-text"
              >
                <NavDropdown.Item as={Link} to="/about">
                  About
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/legacy">
                  Legacy
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/leadership-and-governance">
                  Leadership and Governance
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/strategic">
                  Strategic Plan
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/organogram">
                  Organogram
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/#committees">
                  Academic & Administrative Committees
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Awards">
                  Awards & Recognitions
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/accreditations">
                  Accreditations
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Why SITS">
                  Why Sidharatha
                </NavDropdown.Item>

                {/* Nested Governance Dropdown */}
                <NavDropdown title="Governance" drop="end">
                  <NavDropdown.Item as={Link} to="/governance">
                    Governing Council Members
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/governance">
                    College Academic Council
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Item as={Link} to="/Policies">
                  Policies
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/annual-reports">
                  Annual Reports
                </NavDropdown.Item>

                {/* Nested Audit Reports Dropdown */}
                <NavDropdown title="Audit Reports" drop="end">
                  <NavDropdown.Item as={Link} to="/welfare">
                    Welfare Measures
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Item as={Link} to="/mandatory-disclosures">
                  Mandatory Disclosures
                </NavDropdown.Item>
              </NavDropdown>

              {/* ACADEMICS Section */}
              <NavDropdown
                title="ACADEMICS"
                id="academics-dropdown"
                className="custom-dropdown"
              >
                {/* Nested Admissions Dropdown */}
                <NavDropdown title="Admissions" drop="end">
                  <NavDropdown.Item as={Link} to="/how-to-apply">
                    How to Apply
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Admissions/Admission Policy">
                    Admission Policy
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/how-to-apply#fee-structure">
                    Fee Structure
                  </NavDropdown.Item>
                </NavDropdown>

                {/* Nested Bachelors Programs Dropdown */}
                <NavDropdown title="Bachelors Programs" drop="end">
                  <NavDropdown.Item as={Link} to="/ComputerScience&Engg">
                    Computer Science Engineering
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/ComputerScience&Engg(AI & ML)"
                  >
                    CSE (AI & ML)
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/MechanicalEngg">
                    Mechanical Engineering
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/ECE">
                    Electronics and Communication Engineering
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Civil">
                    Civil Engineering
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/CSD">
                    Computer Science – Data Science
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/EEE">
                    Electrical and Electronics Engineering
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/MBA">
                    MBA
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Item as={Link} to="/Syllabus (UG & PG)">
                  Syllabus (UG & PG)
                </NavDropdown.Item>

                {/* Nested Masters Programs Dropdown */}
                <NavDropdown title="Masters (PG) Programs" drop="end">
                  <NavDropdown.Item as={Link} to="/academics/masters/cse">
                    CSE
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/academics/masters/cnis">
                    CNIS
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/academics/masters/dece">
                    Digital Electronics and Communication
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/academics/masters/pe-ed">
                    Power Electronics & Drives
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/academics/masters/wmc">
                    Wireless and Mobile Communication
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Item as={Link} to="/academic-timetables">
                  Academic Timetables
                </NavDropdown.Item>

                {/* Nested Extended Learning Dropdown */}
                <NavDropdown title="Extended Learning" drop="end">
                  <NavDropdown.Item as={Link} to="/Student Chapters">
                    Student Chapters
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Non-Formal Sanskrit Education (NFSE)
                  </NavDropdown.Item>
                  <NavDropdown.Item>NPTEL</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Item as={Link} to="/Academic-Calendar">
                  Academic Calendar
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/academics/staff-directory">
                  Staff Directory
                </NavDropdown.Item>
              </NavDropdown>

              {/* CAMPUS Section */}
              <NavDropdown
                title="CAMPUS"
                id="academics-dropdown"
                className="custom-dropdown"
              >
                <NavDropdown.Item as={Link} to="/CampusLife">
                  Life At Sidhartha
                </NavDropdown.Item>

                {/* Nested Facilities Dropdown */}
                {/* <NavDropdown title="Facilities" drop="end">
                  <NavDropdown.Item as={Link} to="/#student-hostels">
                    Student Hostels
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/#transportation">
                    Transportation
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/#library">
                    Library
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/#facility-women">
                    Women Safety Facilities
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/#water">
                    Water Conservation
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/#green-campus">
                    Green Campus
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/disabled">
                    Disabled Friendly Campus
                  </NavDropdown.Item>
                </NavDropdown> */}
                <NavDropdown.Item as={Link} to="/campus/events">
                  Events
                </NavDropdown.Item>
              </NavDropdown>

              {/* RESEARCH Section */}
              <NavDropdown
                title="RESEARCH"
                id="academics-dropdown"
                className="custom-dropdown"
              >
                <NavDropdown.Item as={Link} to="/overview">
                  Overview
                </NavDropdown.Item>
                <NavDropdown.Item href="/overview#research-objectives">
                  Academic Research
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/funded-research-projects">
                  Funded Projects
                </NavDropdown.Item>
                <NavDropdown.Item href="/overview#research-centers">
                  Research Centers
                </NavDropdown.Item>
                <NavDropdown.Item href="/overview#research-policies">
                  Policies
                </NavDropdown.Item>
              </NavDropdown>

              {/* PLACEMENTS Link */}
              <Nav.Link as={Link} to="/Placements">
                PLACEMENTS
              </Nav.Link>

              {/* STUDENT CORNER Section */}
              <NavDropdown
                title="STUDENT CORNER"
                id="STUDENT-dropdown"
                className="custom-dropdown white-text"
              >
                <NavDropdown.Item as={Link} to="/ExamCell">
                  Time Table
                </NavDropdown.Item>
              </NavDropdown>

              {/* Additional Navigation Links */}
              <Nav.Link as={Link} to="/IncubationCell">
                INCUBATION CELL
              </Nav.Link>
              <Nav.Link as={Link} to="/ExamCell">
                EXAM CELL
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Bottom Navigation Bar */}
      <Navbar className="sub-navbar" variant="light">
        <Container>
          <Nav className="ms-auto align-right small-text">
            <Nav.Link as={Link} to="/#nss">
              NSS
            </Nav.Link>
            <Nav.Link as={Link} to="/#ieee">
              IEEE
            </Nav.Link>
            <Nav.Link as={Link} to="/#grievance">
              Grievance Redressal
            </Nav.Link>
            <Nav.Link as={Link} to="/#library">
              Library
            </Nav.Link>
            <Nav.Link as={Link} to="/#alumni">
              Alumni
            </Nav.Link>
            <Nav.Link as={Link} to="/#contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
