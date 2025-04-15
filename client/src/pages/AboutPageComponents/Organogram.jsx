import React from "react";
import "../../styles/Organogram.css";
import AboutHeading from "../../ResuableComponents/AboutHeading";

function Organogram() {
  return (
    <div className="organogram">
      <AboutHeading title="Organogram" image={"images/clgimg2.jpeg"} />
      <div className="organogram-data">
        <h1>Organization Chart</h1>
        <p>
          G Narayanamma Institute of Technology and Science (GNITS), located in
          Hyderabad, India, is a premier institution dedicated to providing
          world-class education in the fields of engineering, technology, and
          management. This is a diagram depicting the structure of GNITS and the
          relationships between the different people, departments, and jobs at
          different levels within our institute.
        </p>
      </div>
      <div className="organogram-image">
        <img src="images/organisation-chart.png" alt="Organogram" />
      </div>
    </div>
  );
}

export default Organogram;
