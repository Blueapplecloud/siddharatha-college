import React, { useEffect } from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { HighlightCard } from "./RDHighlightsAd";

const ReasearchObjective = () => {
  const researchObjectives = [
    "The R&D cell aims to create advanced laboratory facilities and foster research interest among students and faculty to address societal needs.",
    "It seeks to enhance industry-institute relationships to improve product quality and reduce costs.",
    "The cell explores new scientific avenues to develop alternative technologies and solutions, particularly for public health and environmental protection.",
    "It encourages the publication of quality research work to share results with the global research community.",
    "The R&D cell establishes long-term relationships through MoUs with national and international research organizations and industries.",
    "It develops and enforces rules and regulations to ensure compliance with research quality assurance frameworks and codes.",
  ];

  const cardData = [
    {
      subText: "Academic Research",
      imageSrc: "/images/academic_research.jpg", // Replace with actual image path
      altText: "Academic Research",
    },
    {
      subText: "SIRO Recognition",
      imageSrc: "/images/siro_recognition.jpg", // Replace with actual image path
      altText: "SIRO Recognition",
    },
    {
      subText: "Awards/Recognitions",
      imageSrc: "/images/awards_recognitions.jpg", // Replace with actual image path
      altText: "Awards/Recognitions",
    },
    {
      subText: "Plagiarism Checking Tool",
      imageSrc: "/images/plagiarism_tool.jpg", // Replace with actual image path
      altText: "Plagiarism Checking Tool",
    },
    {
      subText: "Research Center Grant Letter",
      imageSrc: "/images/grant_letter.jpg", // Replace with actual image path
      altText: "Research Center Grant Letter",
    },
    {
      subText: "Approved Research Supervisors",
      imageSrc: "/images/supervisors.jpg", // Replace with actual image path
      altText: "Approved Research Supervisors",
    },
  ];

  return (
    <div className="bg-white py-10 " id="research-objectives">
      <div className=" px-4 flex flex-row justify-center items-center">
        <div className=" mr-10 w-full">
          <h2
            className="text-4xl font-bold text-[#06483D] mb-8"
            style={{
              fontSize: "2.5rem",
              color: "#06483D",
              fontWeight: "bold",
              padding: "0.5rem",
            }}
          >
            Research Objectives
          </h2>

          {researchObjectives.map((objective, index) => (
            <div key={index} className="flex gap-2 items-center p-3 w-full">
              <div>
                {" "}
                <LiaCertificateSolid size={45} className="text-orange-500 " />
              </div>
              <div className="flext-1 w-full">
                <p className=" font-semibold text-base">{objective}</p>
                <div className="w-1/2 border-t-1 border-yellow-600 mt-2"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
          {cardData.map((card, index) => (
            <HighlightCard key={index} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReasearchObjective;
