import React from "react";
import { FaRegEdit, FaUniversity } from "react-icons/fa"; // Example icons
import { MdOutlineSchool } from "react-icons/md"; // Another example icon for variety

const WhatsNext = () => {
  const items = [
    {
      icon: <FaUniversity className="text-4xl text-teal-700" />,
      title: "Enroll to the Program",
      linkText: "Admissions",
      link: "#",
    },
    {
      icon: <MdOutlineSchool className="text-4xl text-teal-700" />,
      title: "Explore Campus Life",
      linkText: "Campus Life",
      link: "#",
    },
    {
      icon: <FaRegEdit className="text-4xl text-teal-700" />,
      title: "Need More Information?",
      linkText: "Request a call back",
      link: "#",
    },
  ];

  return (
    <div className="w-full py-16 px-8">
      <h2 className="text-center text-2xl font-bold text-teal-700 mb-10 pb-5">
        What's Next?
      </h2>
      <div className="flex flex-wrap justify-center gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between w-full sm:w-[30%] bg-gray-100 border border-gray-200 rounded-lg p-6 shadow-md transition-colors duration-300 hover:bg-orange-500"
          >
            <div>{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 text-center mt-4">
              {item.title}
            </h3>
            <a
              href={item.link}
              className="mt-2  font-medium underline flex items-center gap-1"
              style={{ color: "#d3c9ba" }}
            >
              {item.linkText} <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsNext;
