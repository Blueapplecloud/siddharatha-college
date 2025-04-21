import React from "react";
import DepartmentBanner from "./DepartmentBanner";
import PlacementScrollBar from "./PlacementScrollBar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function DepartmentPage({
  bgImage,
  departmentName,
  hodImage,
  hodMessage,
  hodName,
  hodDesignation,
  vision,
  missionList,
  aboutContent,
  coursesOffered,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="px-4 md:px-10 bg-gray-50 py-10 rounded-lg shadow-md">
      <DepartmentBanner backgroundImage={bgImage} text={departmentName} />

      {/* HOD Message */}
      <div className="my-10 px-4 md:px-10">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={hodImage}
              alt="HOD Profile"
              className="w-64 h-64 object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-2/3 md:ml-6">
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="!text-[35px] !font-bold text-[#003D3D] border-b pb-2"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              HOD'S MESSAGE
            </motion.h2>

            {hodMessage.map((para, idx) => (
              <p key={idx} className="mt-4 text-gray-600 leading-relaxed">
                {para}
              </p>
            ))}
            <div className="mt-4">
              <p className="font-semibold text-gray-800 text-lg">{hodName}</p>
              <p className="text-gray-600">{hodDesignation}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="my-10 px-4 md:px-10">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row overflow-hidden">
          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-300 transition duration-300 ease-in-out hover:bg-amber-300">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="!text-[35px] !font-bold text-[#003D3D] border-b-2 border-amber-300 pb-2"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              VISION OF THE DEPARTMENT
            </motion.h2>

            <p className="mt-4 text-gray-700 leading-relaxed">{vision}</p>
          </div>
          <div className="flex-1 p-6 transition duration-300 ease-in-out hover:bg-amber-300">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="!text-[35px] !font-bold text-[#003D3D] border-b-2 border-amber-300 pb-2"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              MISSION OF THE DEPARTMENT
            </motion.h2>

            <ul className="mt-4 text-gray-700 leading-relaxed list-disc pl-5 space-y-2">
              {missionList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* About + Courses Offered */}
      <div className="my-10 px-4 md:px-10">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row overflow-hidden">
          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-300 transition duration-300 ease-in-out hover:bg-amber-300">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="!text-[35px] !font-bold text-[#003D3D] border-b-2 border-amber-300 pb-2"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
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
              {aboutContent.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </motion.div>
          </div>
          <div className="flex-1 p-6 transition duration-300 ease-in-out hover:bg-amber-300">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="!text-[35px] !font-bold text-[#003D3D] border-b-2 border-amber-300 pb-2"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
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
                {coursesOffered.map((course, idx) => (
                  <tr key={idx}>
                    <td className="border border-gray-300 p-2">
                      {course.name}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.duration}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.intake}
                    </td>
                  </tr>
                ))}
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

export default DepartmentPage;
