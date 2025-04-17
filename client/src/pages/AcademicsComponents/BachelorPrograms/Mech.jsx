import React from "react";
import DepartmentBanner from "../../../ResuableComponents/DepartmentBanner";
import PlacementScrollBar from "../../../ResuableComponents/PlacementScrollBar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bgImage =
  "https://www.smitgp.edu.in/uploads/course/1628595966-Mechanical_Diploma.jpg";

function Mech() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="px-4 md:px-10 bg-gray-50 py-10 rounded-lg shadow-md">
      {/* Department Banner */}
      <DepartmentBanner
        backgroundImage={bgImage}
        text="Mechanical Engineering"
      />

      {/* Spacer */}
      <div className="my-10 px-4 md:px-10">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://siddhartha.ac.in/img/faculty/mech/SLNReddy.jpg"
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
              Mechanical Engineering is one of the oldest and broadest
              Engineering Disciplines. It emerged as a field during the
              Industrial Revolution and has continually evolved by incorporating
              numerous technical advancements. First and foremost, one must have
              a penchant for Mechanical components and machinery and how these
              machines work.{" "}
            </p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Mechanical engineers today use core principles of Mechanics,
              Thermodynamics and structural analysis with computer aided tools
              to design and analyze manufacturing plants, industrial equipment,
              heating and cooling systems, motorized vehicles, aircrafts,
              robotics, medical devices and much more.
            </p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Demand for professionals in this conventional discipline can never
              cease. Mechanical engineers today are pursuing developments in the
              fields such as Composites, Mechatronics and Nano technology.
              Mechanical Engineering overlaps with Aerospace , Civil ,
              Electrical, Petroleum and Chemical Engineerings to varying
              amounts. I wish all the students of Mechanical Engineering a great
              future.{" "}
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800 text-lg">
                Mr.S.L.NARASIMHA REDDY
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
              To impart high standards and produce eminent mechanical engineers
              who play a key role in the social upliftment.
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
                To provide in-depth technical knowledge for skill development.
              </li>
              <li>To give special focus on training and add-on programs.</li>
              <li>
                To encourage creativity and develop entrepreneurial mindset.
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
                The Department of Mechanical Engineering was established in the
                year 2009 with an initial intake of 60 seats in UG programme.
                Department also offer two post graduate programmes, M. Tech with
                specialization in CAD/CAM and Thermal Engineering with 24 and 18
                seats respectively. The Department has highly dedicated and
                dynamic faculty who aim to work towards establishing an
                excellent teaching, learning and research environment to match
                with the advanced technologies in engineering.
              </p>
              <p>
                The department has good infrastructure along with state of the
                art laboratories. The labs are equipped with softwares like
                AutoCAD, CATIA, Creo, ANSYS, MATLAB & CNC technology.
              </p>
              <p>
                The faculty actively participate and conduct various research
                activities and have published a good number of technical papers
                in various national and international conferences and
                proceedings.
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
                  <td className="border border-gray-300 p-2">B.Tech(Mech)</td>
                  <td className="border border-gray-300 p-2">4 Years</td>
                  <td className="border border-gray-300 p-2">60</td>
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

export default Mech;
