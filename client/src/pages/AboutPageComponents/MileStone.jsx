import React from "react";
import { FaBullseye, FaBookOpen, FaLightbulb } from "react-icons/fa";
import AnimatedTitle from "../../ResuableComponents/AnimatedTitle";

const Milestones = () => {
  const cards = [
    {
      icon: <FaBullseye size={36} />,
      title: "Our Vision",
      description:
        "To establish Siddhartha as a pioneer in engineering education, nurturing innovation, leadership, and a spirit of service among aspiring technocrats.",
      bg: "url('https://th.bing.com/th/id/OIP.I5e_zbnUP_RNitggkMxnrQHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7')",
    },
    {
      icon: <FaBookOpen size={36} />,
      title: "Our Mission",
      description:
        "To provide industry-oriented learning experiences, foster critical thinking, and cultivate an environment of academic and professional excellence.",
      bg: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80')",
    },
    {
      icon: <FaLightbulb size={36} />,
      title: "Our Values",
      description:
        "Integrity, innovation, collaboration, and inclusiveness drive Siddhartha’s commitment to shaping responsible engineers with a global outlook.",
      bg: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80')",
    },
  ];

  const title = "SIDDHARTHA MILESTONES";

  return (
    <div className="bg-[#eaf4f8] py-12 px-6 md:px-16">
      {/* Animated Title */}

  
      {/* Milestones Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden relative shadow-lg group transition-all duration-500 hover:scale-[1.01] min-h-[300px]"
            style={{
              backgroundImage: card.bg,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/60 group-hover:bg-[#5e3d2c] transition duration-500 flex flex-col justify-center p-6">
              <div className="text-white mb-4">
                <div className="w-10 h-1 bg-white mb-3"></div>
                <div className="text-3xl mb-3">{card.icon}</div>
                <h2 className="text-xl font-semibold mb-3">{card.title}</h2>
                <p className="text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AnimatedTitle title="SIDDHARTHA MILESTONES" />

    </div>
  );
  
};

export default Milestones;
