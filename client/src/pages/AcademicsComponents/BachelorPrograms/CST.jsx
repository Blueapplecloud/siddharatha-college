import React from "react";
import DepartmentBanner from "../../../ResuableComponents/DepartmentBanner";
import PlacementScrollBar from "../../../ResuableComponents/PlacementScrollBar";

const bgImage =
  "https://res.cloudinary.com/nsitcollege/image/upload/v1557564703/general/c-r.png";

function CST() {
  return (
    <div className="px-4 md:px-10 bg-gray-50 py-10 rounded-lg shadow-md">

      {/* Department Banner */}
      <DepartmentBanner backgroundImage={bgImage} text="Computer Science and Technology" />

      {/* Spacer */}
      <div className="my-10" />

      {/* Placement Section */}
      <div className="px-4 md:px-10">
        <PlacementScrollBar />
      </div>
    </div>
  );
}

export default CST;
