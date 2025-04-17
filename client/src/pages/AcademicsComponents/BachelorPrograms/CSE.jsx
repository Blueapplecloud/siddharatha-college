import React from "react";
import DepartmentBanner from "../../../ResuableComponents/DepartmentBanner";
import PlacementScrollBar from "../../../ResuableComponents/PlacementScrollBar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bgImage =
  "https://5.imimg.com/data5/UZ/QK/NW/SELLER-50714668/best-computer-science-college-of-hooghly-1000x1000.jpg";

function CSE() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="px-4 md:px-10 bg-gray-50 py-10 rounded-lg shadow-md">
      {/* Department Banner */}
      <DepartmentBanner
        backgroundImage={bgImage}
        text="Computer Science and Engineering"
      />

      {/* Spacer */}
      <div className="my-10 px-4 md:px-10">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://siddhartha.ac.in/img/faculty/cse/Dr.%20P.%20Sunitha%20Professor%209348199958.jpg"
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
              I congratulate all the students who opted for Computer Science and
              Engineering branch. Engineering is a human activity aimed at
              creating new artifacts, algorithms, processes, and systems that
              provide services to humans.
            </p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Computer Science and Engineering is one of the evolving,
              innovating, and emerging broad engineering disciplines. It deals
              with human interaction with computers, software, and networks to
              facilitate global communication through the World Wide Web.
            </p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Project work gives students an edge to enhance their
              problem-solving and programming skills, helping them align with
              industry standards and transition smoothly into the workforce.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800 text-lg">
                Dr. P. Sunitha CSI, IAENG
              </p>
              <p className="text-gray-600">M.Tech, Ph.D | Professor & HOD</p>
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
              To inculcate the students with problem-solving skills to challenge
              next-generation technologies.
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
                DM1 - Enable students to learn innovative methods for solving
                complex problems.
              </li>
              <li>
                DM2 - Provide industry interaction to get acquainted with its
                futuristic needs.
              </li>
              <li>
                DM3 - Create an environment to facilitate the students with
                necessary technologies.
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
                The Department of CSE was established in 2008 with an intake of
                60 students in the UG Programme. The intake was enhanced to 120
                in 2010. The Department also started a Post-Graduate programme,
                M.Tech (Computer Science and Engineering), with an intake of 18
                students.
              </p>
              <p>
                The Department has highly qualified and experienced faculty with
                four Professors, five Associate Professors, and twenty-three
                Assistant Professors. There are five Doctorates in the
                Department.
              </p>
              <p>
                The Department has good infrastructure and is equipped with
                full-fledged laboratories. The staff members are deputed to
                participate in workshops, conferences, and FDPs to keep in place
                with recent developments in the field of Computer Science &
                Engineering.
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
                  <td className="border border-gray-300 p-2">B.Tech(CSE)</td>
                  <td className="border border-gray-300 p-2">4 Years</td>
                  <td className="border border-gray-300 p-2">180</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">M.Tech(CSE)</td>
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

export default CSE;
