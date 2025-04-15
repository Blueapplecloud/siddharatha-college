import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";

const timelineData = [
  {
    year: "Year 20",
    title: "Innovation Hub Launch",
    desc: "A state-of-the-art Innovation Hub was inaugurated, housing advanced AI/ML and Data Science labs. These spaces provide students with access to high-performance computing systems, industry collaboration opportunities, and mentorship from tech leaders, creating a strong research-oriented environment.",
    img: "https://th.bing.com/th/id/OIP.AVl5gpybLmghFC1OWgzFZAHaEK?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    year: "Year 15",
    title: "Tech Advancements",
    desc: "We introduced smart classrooms equipped with interactive boards and video conferencing tools. Solar panels were installed campus-wide, contributing to sustainability. Our designation as an NPTEL Nodal Centre and the launch of the Apple Mac Lab placed us among tech-savvy institutions.",
    img: "https://th.bing.com/th/id/OIP.CPbFeBHetNCQUUY811AmrQHaEo?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    year: "Year 10",
    title: "Facilities Expansion",
    desc: "A second hostel block was inaugurated to accommodate the growing student population. The indoor stadium, with courts for badminton and basketball, promoted student wellness. The library was shifted to a larger facility with digital access and collaborative reading spaces.",
    img: "https://th.bing.com/th/id/OIP.1RViAggQnp3Y6qq3NC270AHaDS?w=313&h=155&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    year: "Year 5",
    title: "Cultural Renaissance",
    desc: "The campus came alive with the launch of annual cultural fests. Music clubs, debate societies, and art communities formed, fostering creativity and inclusivity. These clubs hosted inter-collegiate events, giving students platforms to showcase their talents.",
    img: "https://www.hrcollege.edu/wp-content/uploads/HR-Team-jubilant-at-the-success-of-MYSTIQUE.jpg",
  },
  {
    year: "Year 1",
    title: "Foundation Year",
    desc: "Our journey began with a vision to educate and empower. A dedicated team of educators laid the groundwork for a student-centric institution. The first batch saw the introduction of foundational engineering and science programs with strong emphasis on values.",
    img: "https://www.foundationyear.cam.ac.uk/files/media/fyclass2022.png",
  },
  {
    year: "Present",
    title: "Global Collaborations",
    desc: "Strategic MoUs signed with global universities have opened doors for student exchange programs, joint certifications, and research collaborations. We're now part of a global academic ecosystem, providing students with world-class exposure.",
    img: "https://www.ganjamlawcollege.com/images/Gallery/_AlbumImg6.jpg",
  },
];

export default function TimelineCarousel() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: direction === "right" ? 600 : -600,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative  bg-[#e5eff3] overflow-hidden">
      {/* Arrows */}
      <div className="absolute top-[256px] left-2 z-20">
        <button onClick={() => scroll("left")}>
          <ChevronLeft className="w-8 h-8 text-[#1d4d4f]" />
        </button>
      </div>

      <div className="absolute top-[256px] right-2 z-20">
        <button onClick={() => scroll("right")}>
          <ChevronRight className="w-8 h-8 text-[#1d4d4f]" />
        </button>
      </div>

      {/* Timeline Line */}
      <div className="relative w-full">
        <div className="absolute top-[270px] left-5 right-5 h-1 bg-[#1d4d4f] z-0" />

        {/* Timeline Items */}
        <div
          ref={containerRef}
          className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 pl-4 sm:pl-6 pr-10 sm:pr-20 overflow-x-auto scroll-smooth scrollbar-hide relative z-10 snap-x"
        >
          {timelineData.map((item, index) => {
            const contentRef = useRef(null);
            const isInView = useInView(contentRef, { once: true });

            return (
              <div
                key={index}
                ref={contentRef}
                className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] max-w-[400px] flex flex-col items-center gap-6 snap-start"
              >
                {/* Image */}
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[250px] object-cover rounded-xl shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6 }}
                />

                {/* Save Icon instead of Dot */}
                <div className="relative w-full pt-10 pb-2">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#e5eff3] rounded-full border-4 border-[#1d4d4f] flex items-center justify-center z-10">
                    <Bookmark className="w-5 h-5 text-[#1d4d4f]" />
                  </div>

                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center px-2"
                  >
                    <p className="text-[#f59e0b] font-bold text-sm tracking-widest uppercase">
                      {item.year}
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
