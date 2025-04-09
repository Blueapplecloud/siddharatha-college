import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref}>
      <div style={{ backgroundColor: "#e4ebf0", padding: "4rem 2rem" }}>
        <div className="pl-24 sm:pl-32 md:pl-40">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              color: "#004a44",
              fontSize: "2.5rem",
              lineHeight: "1.2",
              fontWeight: "600",
            }}
          >
            Providing comprehensive education for
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="block mt-2"
            >
              All Students
            </motion.span>
          </motion.h1>

          <p
            style={{
              marginTop: "1.5rem",
              fontFamily: "Roboto, sans-serif",
              fontSize: "17px",
              color: "#333",
              maxWidth: "800px",
            }}
          >
            Our programs are designed to equip students with the skills and
            knowledge needed to excel in today’s rapidly changing technological
            landscape.
          </p>
          <br />
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {/* Card 1: Bachelors Programs */}
          <div
            className="relative w-full sm:w-[300px] md:w-[375px] h-[375px] rounded-xl overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://th.bing.com/th/id/OIP.15K6yF0sQTu7oMIsVMVHpQHaHK?rs=1&pid=ImgDetMain')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/30 to-transparent"></div>
            <div className="absolute top-44 left-4 sm:left-6 text-white">
              <div className="w-10 h-0.5 bg-yellow-300 mb-1"></div>
              <h1 className="text-4xl font-bold leading-tight">
                Bachelors <br /> Programs
              </h1>
            </div>
            <div className="absolute bottom-6 left-6 sm:left-10 text-white max-w-xs">
              <p
                className="text-sm text-gray-200 mb-2"
                style={{ fontFamily: "sans-serif" }}
              >
                Manage IT infrastructure, enhance cybersecurity, and provide
                practical solutions for digital systems.
              </p>
              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-300 font-semibold inline-flex items-center transition duration-200"
              >
                Explore Programs
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
          {/* Card 2: Masters Programs */}

          <div
            className="relative w-full sm:w-[300px] md:w-[375px] h-[375px] rounded-xl overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://th.bing.com/th/id/OIP.WCpEnsQQ4SbAbXn6c2-Z0wHaEc?rs=1&pid=ImgDetMain')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/30 to-transparent"></div>
            <div className="absolute top-44 left-4 sm:left-6 text-white">
              <div className="w-10 h-0.5 bg-yellow-300 mb-1"></div>
              <h1 className="text-4xl font-bold leading-tight">
                Masters <br /> Programs
              </h1>
            </div>
            <div className="absolute bottom-6 left-6 sm:left-10 text-white max-w-xs">
              <p
                className="text-sm text-gray-200 mb-2"
                style={{ fontFamily: "sans-serif" }}
              >
                Develop software, master algorithms, and apply computing
                technology to real-world challenges.
              </p>
              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-300 font-semibold inline-flex items-center transition duration-200"
              >
                Explore Programs
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Card 3: Business Management */}
          <div
            className="relative w-full sm:w-[300px] md:w-[375px] h-[375px] rounded-xl overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://wallpaper.dog/large/20407857.jpg')",
            }}
          >
            <div className="absolute  inset-0 bg-gradient-to-r from-black/100 via-black/30 to-transparent"></div>
            <div className="absolute top-44 left-4 sm:left-6 text-white">
              <div className="w-10 h-0.5 bg-yellow-300 mb-0"></div>
              <h1 className="text-4xl font-bold leading-tight">
                Business <br /> Management
              </h1>
            </div>
            <div className="absolute bottom-6 left-6 sm:left-10 text-white max-w-xs">
              <p
                className="text-sm text-gray-200 mb-2"
                style={{ fontFamily: "sans-serif" }}
              >
                Tackle real-world challenges in energy and automation through
                electrical systems.
              </p>

              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-300 font-semibold inline-flex items-center transition duration-200"
              >
                Explore Programs
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
