import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  Bus,
  Calendar,
  GraduationCap,
  Group,
  HeartPulse,
  Megaphone,
  Salad,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";

const FacilitiesAtSiddhartha = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const facilities = [
    {
      icon: <Sparkles className="h-6 w-6 text-orange-600" />,
      text: "Cultural Engagement",
    },
    {
      icon: <Megaphone className="h-6 w-6 text-orange-600" />,
      text: "Grievance Redressal",
    },
    {
      icon: <Building2 className="h-6 w-6 text-orange-600" />,
      text: "Hostel Accommodation",
    },
    {
      icon: <Settings className="h-6 w-6 text-orange-600" />,
      text: "Technical Clubs",
    },
    {
      icon: <Calendar className="h-6 w-6 text-orange-600" />,
      text: "Events & Conferences",
    },
    {
      icon: <Bus className="h-6 w-6 text-orange-600" />,
      text: "Transport Facilities",
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-orange-600" />,
      text: "Community & Service",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-orange-600" />,
      text: "Skill Enhancement",
    },
    {
      icon: <Salad className="h-6 w-6 text-orange-600" />,
      text: "Cafeteria & dining",
    },
    {
      icon: <Group className="h-6 w-6 text-orange-600" />,
      text: "Sports & Fitness",
    },
    {
      icon: <Users className="h-6 w-6 text-orange-600" />,
      text: "Student Communities",
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-orange-600" />,
      text: "Health care Facilities",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-amber-100 to-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.9zZO2CWuujmWTtEYrufC6wHaEK?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" // Replace with actual image path
            alt="Facilities at Siddhartha"
            className="rounded-lg shadow-md w-full object-cover mt-25"
          />
        </div>
        <div ref={ref}>
          {inView && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Facilities at SIDDHARTHA
              </h2>
            </motion.div>
          )}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-700 mb-8"
          >
            At SIDDHARTHA, research is a cornerstone of our academic
            philosophy, driving innovation and technological advancements. Our
            Research and Development (R&D) Cell is a dynamic hub that fosters a
            strong research ecosystem, aligned with the goals of NEP 2020.
          </motion.p>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center gap-4 p-2">
                {React.cloneElement(facility.icon, {
                  className: "h-10 w-10 text-orange-600",
                })}
                <span className="text-orange-700 font-semibold text-base md:text-lg">
                  {facility.text}
                </span>
              </div>
            ))}
            <span className="text-orange-700 font-semibold text-base md:text-lg">
              And more...
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesAtSiddhartha;
