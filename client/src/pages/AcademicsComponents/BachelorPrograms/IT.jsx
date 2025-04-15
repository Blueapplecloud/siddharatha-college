import React from "react";
import DepartmentBanner from "../../../ResuableComponents/DepartmentBanner";
import PlacementScrollBar from "../../../ResuableComponents/PlacementScrollBar";

const bgImage =
  "https://th.bing.com/th/id/R.c4e60797561cf101e98e095fedb5330e?rik=vW%2f0J6j8g0ZNiw&riu=http%3a%2f%2ftecmoneragala.dtet.gov.lk%2fwp-content%2fuploads%2f2020%2f07%2fICT.jpg&ehk=VgBLjxmsK7XarB2sPzynFiDZnbYrnmE4HMfZOB839rw%3d&risl=&pid=ImgRaw&r=0";

function IT() {
  return (
    <div className="px-4 md:px-10 bg-gray-50 py-10 rounded-lg shadow-md">
      {/* Department Banner */}
      <DepartmentBanner
        backgroundImage={bgImage}
        text="Information Technology"
      />

      {/* Spacer */}
      <div className="my-10" />

      {/* Placement Section */}
      <div className="px-4 md:px-10">
        <PlacementScrollBar />
      </div>
    </div>
  );
}

export default IT;
