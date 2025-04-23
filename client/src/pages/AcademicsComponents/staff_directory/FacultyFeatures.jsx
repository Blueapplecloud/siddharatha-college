import React from "react";
import { FaAtom, FaBook, FaChartLine } from "react-icons/fa";

const FacultyFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Expertise and Experience",
      description:
        "Highly qualified professionals with extensive experience in their fields ensure the highest standards of education and support.",
      icon: <FaAtom className="text-yellow-400 text-4xl" />,
      image: "/images/overview_cse.jpg",
    },
    {
      id: 2,
      title: "Innovation in Education",
      description:
        "Faculty are at the forefront of educational innovation, integrating the latest research and technologies into teaching methodologies.",
      icon: <FaBook className="text-yellow-400 text-4xl" />,
      image: "/images/overview_cse.jpg",
    },
    {
      id: 3,
      title: "Commitment to Success",
      description:
        "Deeply invested in the success and well-being of our students, providing guidance and support at every step.",
      icon: <FaChartLine className="text-yellow-400 text-4xl" />,
      image: "/images/overview_cse.jpg",
    },
  ];

  return (
    <section className="w-full py-6 bg-gray-100">
      <div className="max-w-full mx-auto px-3 grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative group rounded-lg overflow-hidden shadow-lg w-full h-[350px] transition-all duration-500"
            style={{
              backgroundImage: `url(${feature.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-orange-600 group-hover:bg-opacity-90 transition-all duration-500 ease-in-out"></div>

            {/* Content */}
            <div className="relative z-10 p-5 h-full flex flex-col justify-between">
              <div>
                <div className="h-1 w-16 bg-white mb-4"></div>
                <div className="text-yellow-400 text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  {feature.title}
                </h3>
              </div>
              <p className="text-white text-base leading-relaxed mt-auto">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultyFeatures;
