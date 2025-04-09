//used react icons for the arrow
//to install react-icons, run the following command in your terminal:
// npm install react-icons
import React from "react";
import "./PlacementsBanner.css";
import { FaArrowRight } from "react-icons/fa";

const companyLogos = [
  "microsoft.png",
  "accenture.png",
  "adobe.png",
  "servicenow.png",
  "amazon.png",
  "darwinbox.png",
  "epam.png",
  "factset.png",
  "ford.png",
];

const PlacementsBanner = () => {
  return (
    <div className="placements-banner">
      <div className="content">
        <div className="text-section">
          <h2>Placements</h2>
          <p>
            At GNITS, the commitment to fostering career-ready graduates is
            evident through its robust placement program. The institution boasts
            a proactive Training and Placement Cell that coordinates with
            leading companies across various sectors.
          </p>
        </div>
        <div className="stats-section">
          <div className="stat">
            <h3>₹ 50 LPA</h3>
            <span>Highest Package</span>
          </div>
          <div className="stat">
            <h3>70%</h3>
            <span>Placement Percentage</span>
          </div>
          <div className="stat">
            <h3>530</h3>
            <span>Placed in 2024</span>
          </div>
          <a href="#placements" className="button">
            Placements <FaArrowRight size={14} />
          </a>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee">
          {companyLogos.map((logo, index) => (
            <img src={`/logos/${logo}`} alt={logo.split(".")[0]} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementsBanner;
