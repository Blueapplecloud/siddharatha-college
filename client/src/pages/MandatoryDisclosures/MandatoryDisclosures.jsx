import React from 'react';
import AboutHeading from "../../ResuableComponents/AboutHeading";
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'; // <-- install icon - npm install @heroicons/react

const MandatoryDisclosures = () => {
  const reportYears = [
    "2023-24", "2022-23", "2021-22",
    "2020-21", "2019-20", "2018-19",
    "2017-18", "2016-17", "2015-16",
  ];

  return (
    <>
      <AboutHeading title="Annual Reports" image="images/clgimg2.jpeg" />

      <section className="p-10 md:px-16 px-7">
        <div className="flex flex-wrap gap-3">
          {reportYears.map((year) => (
            <button
              key={year}
              className="flex items-center gap-1 bg-[#d4880c] hover:bg-amber-500 text-white px-3 py-3 font-semibold transition-all duration-300 "
            >
              <ArrowDownCircleIcon className="w-5 h-5 text-[#003d3d]" />
              {year}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default MandatoryDisclosures;
