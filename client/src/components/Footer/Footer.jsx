//used react icons for the social media icons
//to install react-icons, run the following command in your terminal:
//npm install react-icons

import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Enroll from "./Enroll/Enroll";

const Footer = () => {
  return (
    <>
      <Enroll />
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Social Links</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
          </div>
          <h4>Reach us</h4>
          <p>
            Siddahartha Institute of Engineering and Technology
            <br />
            Autonomous, Vinobhanagar , Ibrahimpatnam RR Dist– 501506
          </p>
          <p>
            <a href="tel:+9104029565856">+91 78937 44445</a>
          </p>
          <p>
            <a href="info@siddhartha.ac.in">info@siddhartha.ac.in</a>
          </p>
        </div>

        <div className="footer-column">
          <h4>Bachelors Programs</h4>
          <ul>
            <li>Computer Science Engineering</li>
            <li>Computer Science & Engineering (AI & ML)</li>
            <li>Computer Science & Engineering (Data Science)</li>
            <li>Computer Science and Technology</li>
            <li>Information Technology</li>
            <li>Electronics and Communication Engineering</li>
            <li>Electrical and Electronics Engineering</li>
            <li>Electronics and Telematics Engineering</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>About</li>
            <li>Academics</li>
            <li>Staff Directory</li>
            <li>Campus Life</li>
            <li>Placements</li>
            <li>Alumni</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Students Corner</h4>
          <ul>
            <li>Exam Cell</li>
            <li>ERP login</li>
            <li>ECAP Login</li>
            <li>Exam Timetable</li>
            <li>Latest News</li>
            <li>WES – Online Verification</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Sidhartha Institute of Technology. All
          rights reserved.{" "}
        </p>
        <div className="footer-links">
          <span>IQAC</span>
          <span>NIRF</span>
          <span>NAAC</span>
          <span>NBA</span>
          <span>AICTE</span>
          <span>JNTUH</span>
          <span>UGC</span>
          <span>Mandatory Disclosures</span>
          <span className="footer-up">↑</span>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
