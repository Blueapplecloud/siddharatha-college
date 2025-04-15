import React from "react";
import DepartmentBanner from "../../../ResuableComponents/DepartmentBanner";
import PlacementScrollBar from "../../../ResuableComponents/PlacementScrollBar";

const bgImage =
  "https://5.imimg.com/data5/UZ/QK/NW/SELLER-50714668/best-computer-science-college-of-hooghly-1000x1000.jpg";

function CSE() {
  return (
    <div className="px-4 md:px-10 bg-gray-50 py-10 rounded-lg shadow-md">

      {/* Department Banner */}
      <DepartmentBanner backgroundImage={bgImage} text="Computer Science and Engineering" />

      {/* Spacer */}
      <div className="my-10" />

      {/* Placement Section */}
      <div className="px-4 md:px-10">
        <PlacementScrollBar />
      </div>
    </div>
  );
}

export default CSE;
