import React from "react";

function Accreditations() {
  const accreditationData = [
    {
      image: "/images/aicte.png",
      title: "Approved by AICTE, New Delhi.",
      description: "",
    },
    {
      image: "/images/nba.png",
      title: "NBA Tier-I Accreditation",
      description:
        "UG Programs – CSE, ECE, EEE, IT & ETM are accredited to tier-I NBA Accreditation.",
    },
    {
      image: "/images/NAAC_LOGO.png",
      title: "NAAC A+ Accreditation",
      description:
        "Siddhartha is accredited with 3.4 CGPA with A+ Grade; valid till 2029. (National Assessment and Accreditation Council).",
    },
    {
      image: "/images/ugc.png",
      title: "UGC Autonomous",
      description: "valid till 2008",
    },
    {
      image: "/images/jntuh.png",
      title: "Affiliated to JNTU(H), Hyderabad.",
    },
  ];
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10 md:px-15 sm:px-5 ">
        {/* Left Content */}
        <div className="flex-1">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#003B36] mb-4"
            style={{ color: "#003B36" }}
          >
            Recognition of Excellence
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Accreditation at Siddhartha is a testament to our unwavering
            commitment to educational excellence. Recognized by prestigious
            bodies like the National Board of Accreditation (NBA) and the
            National Assessment and Accreditation Council (NAAC), our programs
            meet rigorous standards that ensure quality and relevance. These
            accreditations reflect our dedication to delivering an education
            that not only meets industry demands but also empowers our students
            to excel in their careers and contribute meaningfully to society.
          </p>
        </div>

        {/* Right Image */}
        <div className="  shadow-lg rounded-lg overflow-hidden md:w-2/6 sm:w-full">
          <img
            src="/images/graduation1.jpeg" // replace with actual path
            alt="Graduation"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto space-y-6 mt-5">
        {accreditationData.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col md:flex-row items-center bg-white p-6 rounded-xl shadow-md border border-gray-50 "
          >
            {/* Logo */}
            <div className="w-full md:w-[35%] flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-36 object-contain"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-[70%] ">
              <h3 className="text-3xl font-semibold text-black mb-1">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-bold text-base leading-relaxed ">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accreditations;
