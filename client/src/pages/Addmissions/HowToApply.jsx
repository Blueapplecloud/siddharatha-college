import React from "react";
import { FaCheckCircle } from "react-icons/fa";
function HowToApply() {
  return (
    <div className="bg-white ">
      {/* ug addmissions */}
      <div className="bg-white rounded-md shadow-sm p-4">
        <div className="flex flex-col md:flex-row bg-gray-50 p-8 ">
          {/* Left Section */}
          <div className="w-full md:w-3/5 ">
            {/* Header Button */}
            <div className="bg-yellow-600 text-white font-bold rounded-md px-4 py-2 inline-flex items-center mb-6">
              TG EAPCET 2024 CUT OFF RANKS
              <span className="ml-2 text-lg">➔</span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl font-bold text-gray-800 mb-4"
              style={{
                fontSize: "2.5rem",
                color: "#06483D",
              }}
            >
              UG Admissions
            </h1>

            {/* Description */}
            <p className="text-gray-700 mb-6">
              To gain admission into Siddhartha for undergraduate programs,
              candidates must qualify for the TG-EAPCET examination conducted by
              the Government of Telangana. To be eligible, students should have
              completed their 10+2 education with Mathematics, Physics, and
              Chemistry as their core subjects.
            </p>

            {/* How to Apply Section */}
            <h2
              className="text-2xl font-bold mb-4"
              style={{
                fontSize: "2.5rem",
                color: "#06483D",
              }}
            >
              How to Apply:
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div>
                  <FaCheckCircle size={30} className="text-yellow-500 mt-1" />
                </div>

                <p className="ml-4 text-gray-800">
                  <strong>Qualify in the TG-EAPCET examination</strong>
                </p>
              </div>
              <div className="flex items-start">
                <div>
                  <FaCheckCircle size={30} className="text-yellow-500 mt-1" />
                </div>

                <p className="ml-4 text-gray-800">
                  <strong>Attend the counseling session</strong> conducted by
                  the Convener for engineering college admissions
                </p>
              </div>
              <div className="flex items-start">
                <div>
                  <FaCheckCircle size={30} className="text-yellow-500 mt-1" />
                </div>

                <p className="ml-4 text-gray-800">
                  <strong>Based on the rank</strong> obtained in TG-EAPCET,
                  candidates can choose Siddhartha, depending on the
                  availability of seats in the desired branch.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 bg-yellow-400 p-6  mt-8 md:mt-0 md:ml-auto shadow-md">
            <h2
              className="text-2xl font-bold text-gray-800 mb-4"
              style={{
                color: "#06483D",
              }}
            >
              B.TECH PROGRAMS
            </h2>
            <ul className="space-y-4 text-gray-800">
              <li>Computer Science Engineering</li>
              <li>
                Computer Science & Engineering (Artificial Intelligence &
                Machine Learning)
              </li>
              <li>Computer Science & Engineering (Data Science)</li>
              <li>Computer Science and Technology</li>
              <li>Information Technology</li>
              <li>Electronics and Communication Engineering</li>
              <li>Electrical and Electronics Engineering</li>
              <li>Electronics and Telematics Engineering</li>
            </ul>
          </div>
        </div>
      </div>

      {/* pg addmissions */}
      <div className="flex flex-col md:flex-row bg-gray-50 p-8">
        {/* Left Section */}
        <div className="w-full md:w-1/3 bg-yellow-400 p-4 shadow-md">
          <h2
            className="text-2xl font-bold text-gray-800 mb-4 "
            style={{
              fontSize: "2.5rem",
              color: "#06483D",
            }}
          >
            PG PROGRAMS
          </h2>
          <ul className="space-y-4 text-gray-800">
            <li>Power Electronics & Electrical Drives</li>
            <li>Digital Electronics and Communication Engineering</li>
            <li>Wireless and Mobile Communication</li>
            <li>Computer Networks and Information Security</li>
            <li>Computer Science and Engineering</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-3/5 bg-white p-6 rounded-md ml-auto md:ml-auto">
          {/* Title */}
          <h1
            className="text-3xl font-bold text-gray-800 mb-4"
            style={{
              fontSize: "2.5rem",
              color: "#06483D",
            }}
          >
            PG Admissions
          </h1>

          {/* Description */}
          <p className="text-gray-700 mb-6">
            Postgraduate admissions at Siddhartha are primarily based on the
            GATE examination. If GATE candidates are not available, admissions
            will be offered to Non-GATE candidates based on TS-PGECET merit.
          </p>

          {/* How to Apply Section */}
          <h2
            className="text-2xl font-bold text-green-700 mb-4"
            style={{
              fontSize: "2.5rem",
              color: "#06483D",
            }}
          >
            How to Apply:
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div>
                <FaCheckCircle size={30} className="text-yellow-500 mt-1" />
              </div>

              <p className="ml-4 text-gray-800">
                <strong>
                  Category-A (General & SC/ST) Admissions are made through GATE.
                </strong>{" "}
                If GATE-qualified candidates are not available, TS-PGECET merit
                will be considered.
              </p>
            </div>
            <hr className="border-t border-yellow-500 my-4" />
            <div className="flex items-start">
              <div>
                <FaCheckCircle size={30} className="text-yellow-500 mt-1" />
              </div>

              <p className="ml-4 text-gray-800">
                <strong>
                  Category-B Admissions are based on experience or merit
                </strong>
                , with preference given to GATE-qualified candidates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* fees Structure */}
      <div className="bg-[#003D3D] p-4  text-white" id="fee-structure">
        <h1 className="text-3xl font-bold mb-6 pb-5 text-shadow-white">
          Fee Structure
        </h1>

        <div className="space-y-6">
          <div className="flex items-start">
            <FaCheckCircle size={30} className="text-gray-300 mt-1" />
            <p className="ml-4 text-lg">
              <strong>For Category-A and Category-B (JEE)</strong> seats is
              Rs.1,00,000/+ other JNTUH fees (per Annum)
            </p>
          </div>
          <hr className="border-t border-yellow-500 my-4" />
          <div className="flex items-start">
            <FaCheckCircle size={30} className="text-gray-300 mt-1" />
            <p className="ml-4 text-lg">
              <strong>For Category-B (NRI)</strong> category seats is USD
              5,000+other JNTUH fees (per Annum)
            </p>
          </div>
          <hr className="border-t border-yellow-500 my-4" />
          <div className="flex items-start">
            <FaCheckCircle size={30} className="text-gray-300 mt-1" />
            <p className="ml-4 text-lg">
              On selection for admission, Candidates shall be required to pay
              the following fee for both{" "}
              <strong>Category – A and Category – B.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToApply;
