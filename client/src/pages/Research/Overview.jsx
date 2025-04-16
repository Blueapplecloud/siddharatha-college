import React from "react";
import { FaAward } from "react-icons/fa";

import RDHighlightsAd from "./RDHighlightsAd";
import AboutHeader from "../../ResuableComponents/AboutHeading";
import ReasearchObjective from "./ReasearchObjective";
import ResearchPolicies from "./ReSearchPolicies";
import ResearchCenters from "./ReasearchCenters";

const Overview = () => {
  return (
    <div className="w-full  ">
      <AboutHeader title={"Overview"} image={"images/clgimg.jpeg"} />
      <div className=" px-4 py-3">
        <h2 className="text-2xl md:text-4xl font-bold text-[#06483D] mb-4">
          Research and Development (R&D)
        </h2>
        <p className="text-xs md:text-base text-gray-700 mb-8">
          The Research and Development (R&D) cell at GNITS is dedicated to
          fostering a robust research ecosystem aligned with the National
          Education Policy (NEP) 2020. The R&D cell promotes innovative
          thinking, collaboration, and the advancement of knowledge among
          faculty and students. It contributes to societal well-being through
          cutting-edge research and technological development.
        </p>

        <div className="space-y-4">
          {[
            `The cell has established "MiraiNxt," an initiative supporting startups in Deeptech, Fintech, Healthtech, Edtech, and sustainable impact verticals.`,
            "The R&D cell has established multiple MoUs with national and international organizations to enhance collaborative research and resource sharing.",
            `The cell has established "MiraiNxt," an initiative supporting startups in Deeptech, Fintech, Healthtech, Edtech, and sustainable impact verticals.`,
            "The R&D cell has established multiple MoUs with national and international organizations to enhance collaborative research and resource sharing.",
          ].map((item, index) => (
            <div key={index} className="flex items-start pb-2">
              <FaAward
                size={30}
                className="text-yellow-600 text-xl mt-1 mr-3 shrink-0"
              />
              <div className="flex-1">
                <p className="text-lg md:text-base font-bold text-gray-800">
                  {item}
                </p>
                {/* Half Border Below Each Item */}
                <div className="w-1/2 border-t-1 border-yellow-600 mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <RDHighlightsAd />
      <ReasearchObjective />
      <ResearchPolicies />
      <ResearchCenters />
    </div>
  );
};

export default Overview;
