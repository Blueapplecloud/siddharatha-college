import React from "react";

const FeaturesSection = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-12 bg-white">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative rounded-xl overflow-hidden h-[400px] group cursor-pointer"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${feature.img})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 group-hover:bg-amber-500 transition duration-500"></div>

          {/* Content */}
          <div className="relative z-10 text-white p-6 flex flex-col h-full">
            <div className="w-10 h-1 bg-orange-400 mb-4 round"></div>
            <div className="mb-4 text-white text-4xl">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-sm font-light">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
