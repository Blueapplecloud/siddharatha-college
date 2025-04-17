import React from "react";
import DepartmentBanner from "../../../ResuableComponents/DepartmentBanner";
import PlacementScrollBar from "../../../ResuableComponents/PlacementScrollBar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bgImage =
  "https://oakter.com/wp-content/uploads/2023/09/Why-Companies-Are-Choosing-India-As-a-Hub-for-Electronic-Contract-Manufacturing.jpg";

function EEE() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div className="px-4 md:px-10 bg-gray-50 py-10 rounded-lg shadow-md">
      {/* Department Banner */}
      <DepartmentBanner
        backgroundImage={bgImage}
        text="Electrical & Electronics Engineering"
      />

      {/* Spacer */}
      <div className="my-10 px-4 md:px-10">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://siddhartha.ac.in/img/faculty/eee/Prof.%20Satish%20Goud.jpg"
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
              The Department of Electrical and Electronics Engineering at
              Siddhartha Institute of Engineering & Technology is committed to
              delivering strong academic and practical knowledge in the core
              areas of electrical and electronics engineering. With a team of
              dedicated and experienced faculty, many of whom hold PhDs, the
              department focuses on both advanced teaching methodologies and
              active research. Faculty members regularly publish in reputed
              journals and engage in seminars and workshops to further enhance
              their expertise and student learning.{" "}
            </p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              The department offers a four-year undergraduate B.Tech program
              designed to meet the needs of current and future industry demands,
              particularly aligned with Industry 4.0. Students are encouraged to
              work on innovative research ideas with the support of faculty and
              modern laboratory facilities. Graduates from this program are
              well-prepared for careers across a wide spectrum, including power
              industries, government PSUs, R&D units, IT firms,
              telecommunications, and start-up ventures.{" "}
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800 text-lg">
                Prof. G. Sathish Goud
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
              To produce the professionally competent graduates in the field of
              Electrical and Electronics Engineering for addressing the
              challenges in industry and society.{" "}
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
                To develop Institute Industry Interaction for collaborative
                research and entrepreneurial skills among the stakeholders.
              </li>
              <li>
                To offer high quality graduate program in Electrical and
                Electronics domain and to prepare students for professional
                career and higher studies
              </li>
              <li>
                To promote excellence in teaching, research and positive
                contributions to society.
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
                The Department of Electrical and Electronics Engineering at
                Siddhartha Institute of Engineering & Technology is led by Dr.
                A. Sateesh Kumar, a doctorate with 13 years of teaching
                experience, supported by a strong team of qualified faculty. The
                department emphasizes continual learning and professional
                development through active participation in ISTE, IETE programs,
                and journal publications. It nurtures students with the right
                academic and industrial blend, equipping them to meet national
                demands in areas like power, automation, and transportation.
              </p>
              <p>
                Established in 2008, the EEE department has grown significantly,
                now offering undergraduate and postgraduate programs with
                well-equipped labs as per JNTUH norms. The department fosters
                student engagement through seminars, quizzes, and industrial
                visits under the student body Vid-Youth Tarang. With a
                curriculum aligned to modern advancements like electric vehicles
                and HVDC systems, the department prepares students for promising
                careers in government and private sectors.
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
                  <td className="border border-gray-300 p-2">
                    B.Tech(EEE)
                  </td>
                  <td className="border border-gray-300 p-2">4 Years</td>
                  <td className="border border-gray-300 p-2">120</td>
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

export default EEE;
