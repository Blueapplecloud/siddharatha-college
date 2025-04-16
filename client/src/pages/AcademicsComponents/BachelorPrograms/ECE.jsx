import React from "react";
import DepartmentBanner from "../../../ResuableComponents/DepartmentBanner";
import PlacementScrollBar from "../../../ResuableComponents/PlacementScrollBar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bgImage =
  "https://th.bing.com/th/id/R.c4e60797561cf101e98e095fedb5330e?rik=vW%2f0J6j8g0ZNiw&riu=http%3a%2f%2ftecmoneragala.dtet.gov.lk%2fwp-content%2fuploads%2f2020%2f07%2fICT.jpg&ehk=VgBLjxmsK7XarB2sPzynFiDZnbYrnmE4HMfZOB839rw%3d&risl=&pid=ImgRaw&r=0";

function ECE() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="px-4 md:px-10 bg-gray-50 py-10 rounded-lg shadow-md">
      {/* Department Banner */}
      <DepartmentBanner
        backgroundImage={bgImage}
        text="Electronics and Communication Engineering"
      />

      {/* Spacer */}
      <div className="my-10 px-4 md:px-10">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://siddhartha.ac.in/img/faculty/ece/FARAANJUM.jpg"
              alt="HOD Profile"
              className="w-64 h-64 object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/3 md:ml-6">
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl font-bold text-gray-800 border-b pb-2"
            >
              HOD'S MESSAGE
            </motion.h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I congratulate all the students, who opted for Electronics and
              Communication Engineering branch. It was established in the year
              2008 the department now has two section of UG(ECE) program and one
              PG(VLSI & Embedded Systems) program. It has the necessary
              infrastructural facilities required for imparting high quality
              education and the department is fully structured to meet the
              contemporary needs of the industry.{" "}
            </p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Engineering is a human activity aimed at creating new artifacts,
              algorithms, processes and systems that provide services to humans.
              An Engineering seeks to create something that never existed. It is
              a privilege in one's career to embark on engineering education.
              The department has well-equipped state-of-art laboratories of
              Electronic Devices & Circuits, Pulse, Digital & IC circuits, Basic
              Simulation, Communications, Digital Signal Processing, Microwave &
              Optical Communications and Microprocessors. Advanced research
              laboratories include VLSI Center of Excellence, Embedded Systems
              and Advanced Communications labs. Software available includes
              latest versions of MATLAB with several tool boxes, CADENCE, Xilinx
              and Co-design tools, to name a few.{" "}
            </p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              The strengths of the department are the specialized labs,
              meritorious students, senior professors, dynamic & young associate
              and assistant professors, industrious academic assistants and
              staff. Some of the achievements of our students include securing
              university ranks, admission to NITs, foreign universities,
              placements in reputed companies - HCL Technologies, Wipro,
              Mahindra Satyam, SITEL India etc.
            </p>
            <p>
              Department has excellent labs with latest kits and unlimited
              Internet facility so that the students can explore their knowledge
              and skills to International industry standards. Above all the
              project work gives an edge to the students to elaborate their
              problem solving and programming skills to mould the application to
              the industry standards.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800 text-lg">
                Dr. Farah Anjum
              </p>
              <p className="text-gray-600">M.Tech, Ph.D</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="my-10 px-4 md:px-10">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row overflow-hidden">
          {/* Vision Section */}
          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-300 transition duration-300 ease-in-out hover:bg-amber-300">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-gray-800 border-b-2 border-amber-300 pb-2"
            >
              VISION OF THE DEPARTMENT
            </motion.h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To provide valuable resources for industry and society through
              excellence in technical education and research.{" "}
            </p>
          </div>

          {/* Mission Section */}
          <div className="flex-1 p-6 transition duration-300 ease-in-out hover:bg-amber-300">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-gray-800 border-b-2 border-amber-300 pb-2"
            >
              MISSION OF THE DEPARTMENT
            </motion.h2>
            <ul className="mt-4 text-gray-700 leading-relaxed list-disc pl-5 space-y-2">
              <li>
                To educate the students with the state of art, technologies to
                meet the growing challenges of the industry.
              </li>
              <li>
                To carry out research through constant interaction with research
                organization and industry.
              </li>
              <li>
                To equip the students with strong foundations to enable them for
                continuing education.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Department Section */}
      <div className="my-10 px-4 md:px-10">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row overflow-hidden">
          {/* Left Section - About Department */}
          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-300 transition duration-300 ease-in-out hover:bg-amber-300">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-gray-800 border-b-2 border-amber-300 pb-2"
            >
              ABOUT THE DEPARTMENT
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-gray-700 leading-relaxed space-y-4"
            >
              <p>
                The department of ECE was established in the year 2008 at the
                time of inception of the Institute. The department offers one
                under graduate B.tech course and two post graduate programmes
                (M.tech) with specialization in VLSI design and embedded system
                and VLSI system design respectively. The ECE department in one
                of the significant department of SIET in terms of student
                strength and number of academic programmes. Highly dedicated and
                dynamic faculty are the strength of the department. The faculty
                aim to work towards establishing an excellent teaching and
                learning environment with to be in pace with emerging trends and
                technologies.
              </p>
              <p>
                The department had good infrastructure with advanced
                laboratories. These is access to high end MATLAB, XILINX, MENTO
                GRAPHICS, KIEL and Electromagnetic Simulators.
              </p>
              <p>
                The faculty have rich experience in teaching. They actively
                participate and conduct various research activities and have
                published a good number of technical publications in various
                national and international conferences and proceedings.
              </p>
            </motion.div>
          </div>

          {/* Right Section - Courses Offered */}
          <div className="flex-1 p-6 transition duration-300 ease-in-out hover:bg-amber-300">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl font-bold text-gray-800 border-b-2 border-amber-300 pb-2"
            >
              COURSES OFFERED
            </motion.h2>
            <motion.table
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 w-full border-collapse border border-gray-300 text-gray-700"
            >
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Program</th>
                  <th className="border border-gray-300 p-2">Duration</th>
                  <th className="border border-gray-300 p-2">Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">B.Tech(ECE)</td>
                  <td className="border border-gray-300 p-2">4 Years</td>
                  <td className="border border-gray-300 p-2">120</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    M.Tech (Embedded systems & VLSI Design){" "}
                  </td>
                  <td className="border border-gray-300 p-2">2 Years</td>
                  <td className="border border-gray-300 p-2">18</td>
                </tr>
              </tbody>
            </motion.table>
          </div>
        </div>
      </div>

      {/* Placement Section */}
      <div className="px-4 md:px-10">
        <PlacementScrollBar />
      </div>
    </div>
  );
}

export default ECE;
