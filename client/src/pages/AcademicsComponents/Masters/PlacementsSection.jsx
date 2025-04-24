import React from "react";

const companyLogos = [
  { name: "opentext", src: "/logos/open_text.jpg" },
  { name: "wipro", src: "/logos/wipro.png" },
  { name: "microsoft", src: "/logos/microsoft.png" },
  { name: "paypal", src: "/logos/paypal.png" },
  { name: "servicenow", src: "/logos/servicenow.png" },
  { name: "tcs", src: "/logos/tcs.png" },
  { name: "salesforce", src: "/logos/salesforce.png" },
  { name: "nttdata", src: "/logos/nttdata.png" },
  { name: "micron", src: "/logos/micron.png" },
  { name: "massmutual", src: "/logos/massmutual.png" },
  { name: "adp", src: "/logos/adp.png" },
  { name: "jpmorgan", src: "/logos/jpmorgan.png" },
  { name: "infosys", src: "/logos/infosys.png" },
  { name: "ge", src: "/logos/ge.png" },
  { name: "ford", src: "/logos/ford.png" },
  { name: "epam", src: "/logos/epam.png" },
  { name: "darwinbox", src: "/logos/darwinbox.png" },
  { name: "amazon", src: "/logos/amazon.png" },
  { name: "adobe", src: "/logos/adobe.png" },
  { name: "accenture", src: "/logos/accenture.png" },
];

const PlacementsSection = () => {
  return (
    <div className="bg-[#e9f1f5] py-16 px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#064b46] mb-4 ">
        Placements
      </h2>
      <p className="text-gray-700 max-w-3xl pt-4 mb-12">
        At Siddhartha, our curriculum equips students with technical expertise
        and soft skills, blending theory with hands-on experience to prepare
        graduates for the demands of the tech industry.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-y-14 gap-x-14 place-items-center py-10">
        {companyLogos.map((company, index) => (
          <img
            key={index}
            src={company.src}
            alt={company.name}
            className="h-20 w-auto object-contain transition-transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default PlacementsSection;
