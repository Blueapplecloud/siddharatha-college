import React, { useState } from "react";

const faqs = [
  {
    question: "What undergraduate programs are offered at Siddhartha?",
    answer:
      "Siddhartha offers a range of undergraduate programs in engineering, technology, and management. Please refer to our website for a detailed list of programs and specializations.",
  },
  {
    question: "Are there postgraduate programs available?",
    answer:
      "Yes, Siddhartha also offers several postgraduate programs. Details about these programs, including eligibility criteria and specializations, can be found on our postgraduate admissions page.",
  },
  {
    question: "Does Siddhartha offer Ph.D. programs?",
    answer:
      "Siddhartha has a robust research program and offers Ph.D. opportunities in various disciplines. Interested candidates can find more information about research areas and the application process on our research section.",
  },
  {
    question: "How is the curriculum designed at Siddhartha?",
    answer:
      "The curriculum at Siddhartha is designed to be industry-relevant and focuses on a holistic development approach. It includes a blend of theoretical knowledge, practical application, and skill-based learning to prepare students for future challenges.",
  },
  {
    question: "What kind of support is available for placements?",
    answer:
      "Siddhartha has a dedicated placement cell that provides comprehensive support to students. This includes career counseling, training programs, mock interviews, and organizing campus recruitment drives with leading companies.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full  rounded-md shadow-md mx-auto px-10 py-10">
      <h2 className="text-xl font-semibold text-teal-700 mb-4 text-center">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-2 border border-gray-200 rounded-md overflow-hidden transition-all duration-300"
        >
          <button
            className="flex items-center justify-between w-full py-3 px-4 font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            <span>{faq.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`px-4 text-gray-700 bg-gray-50 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              activeIndex === index ? "max-h-40" : "max-h-0" // Adjust max-h as needed
            }`}
            style={{
              maxHeight: activeIndex === index ? "200px" : "0",
              transition: "max-height 0.5s ease-in-out",
            }}
          >
            <p className="py-2">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
