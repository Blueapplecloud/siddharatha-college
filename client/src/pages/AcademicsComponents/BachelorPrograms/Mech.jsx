import React from "react";
import DepartmentBanner from "../../../ResuableComponents/DepartmentBanner";
import PlacementScrollBar from "../../../ResuableComponents/PlacementScrollBar";

const bgImage =
  "https://www.smitgp.edu.in/uploads/course/1628595966-Mechanical_Diploma.jpg";

function Mech() {
  return (
    <div className="px-4 md:px-10 bg-gray-50 py-10 rounded-lg shadow-md">

      {/* Department Banner */}
      <DepartmentBanner backgroundImage={bgImage} text="Mechanical Engineering" />

      {/* Spacer */}
      <div className="my-10" />

      {/* Placement Section */}
      <div className="px-4 md:px-10">
        <PlacementScrollBar />
      </div>
    </div>
  );
}

export default Mech;
