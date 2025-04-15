import React from "react";

const companyLogos = [
  "microsoft.png",
  "accenture.png",
  "adobe.png",
  "servicenow.png",
  "amazon.png",
  "darwinbox.png",
  "epam.png",
  "factset.png",
  "ford.png",
];

function PlacementScrollBar() {
  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
      <div className="w-full overflow-hidden bg-white py-4">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{
            animation: "scroll 20s linear infinite",
          }}
        >
          {companyLogos.concat(companyLogos).map((logo, index) => (
            <img
              key={index}
              src={`/logos/${logo}`}
              alt={logo.split(".")[0]}
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PlacementScrollBar;
