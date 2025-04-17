import React from "react";
import DepartmentBanner from "../../../ResuableComponents/DepartmentBanner";
import PlacementScrollBar from "../../../ResuableComponents/PlacementScrollBar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bgImage =
  "https://th.bing.com/th/id/OIP.JQKtVBZZ_MRcJGwiJkwdJQHaE5?w=280&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7";

function Civil() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="px-4 md:px-10 bg-gray-50 py-10 rounded-lg shadow-md">
      {/* Department Banner */}
      <DepartmentBanner backgroundImage={bgImage} text="Civil Engineering" />

      {/* Spacer */}
      <div className="my-10 px-4 md:px-10">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://siddhartha.ac.in/img/faculty/civil/civil-hod.jpg"
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
              The Department of Civil Engineering at Siddhartha Institute of
              Engineering and Technology, Ibrahimpatnam, is dedicated to
              equipping students with the knowledge and skills required to face
              real-world challenges in the civil engineering field. The
              department boasts a team of qualified and dynamic faculty members
              with expertise in various specializations such as geotechnical,
              environmental, transportation, structural, and construction
              engineering. With comprehensive lab facilities and
              state-of-the-art teaching aids, students gain hands-on experience
              through practical exposure, including regular site visits and
              training in advanced tools like AutoCAD, STAAD Pro, and ArcGIS.
              The department offers a full-time four-year Bachelor’s Degree in
              Civil Engineering, with a strong focus on both academic and
              practical excellence.{" "}
            </p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              The department places special emphasis on training and placement,
              supporting students in preparing for competitive exams like GATE,
              TSPSC, and IES. It actively encourages participation in
              national-level technical events, where students have achieved
              notable success. Continuous departmental development ensures that
              the latest technological resources are made available to students
              under one roof. The faculty also motivates students to engage in
              research, innovation, and industry-based learning, fostering an
              environment of growth and professional development.{" "}
            </p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Mr. Y. Naveen Kumar, the Head of the Department, brings over
              twelve years of teaching experience and six months of industry
              exposure. His academic and professional journey includes roles
              such as Lecturer, Assistant Professor, Research Assistant, and
              Workshop Coordinator. Mr. Naveen has published multiple papers in
              international and national conferences, including reputed
              platforms like NIT Calicut, Osmania University, and Elsevier's
              Materials Today Proceedings. He is also a certified NPTEL course
              completer in “Design of Reinforced Concrete Structures” and has
              completed the ARPIT course on “Sustainable Construction Materials
              and Techniques.” His dedication to research and teaching
              significantly contributes to the growth and reputation of the
              Civil Engineering department.{" "}
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800 text-lg">
                Y.Naveen Kumar
              </p>
              <p className="text-gray-600">B.E, M.Tech,ISTE, (Ph.D)</p>
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
              To be an outstanding knowledge centre for developing ethical and
              highly competent man power in conducting research for civil
              engineering.
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
                To produce highly enthusiastic, ethical and energetic civil
                engineers to redefine and reshape the destiny of future
                generations.{" "}
              </li>
              <li>
                To provide research opportunities for faculty and students.
              </li>
              <li>
                To impart quality based education for facilitating the advanced
                technologies and environmental steward ship{" "}
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
                The Department of Civil Engineering at Siddhartha Institute of
                Engineering & Technology was established in 2012 with an initial
                intake of 60 students, which has since doubled to accommodate
                120 undergraduate students annually. Civil engineering, a vital
                branch of engineering, involves the planning, designing, and
                supervision of infrastructure projects such as roads, bridges,
                tunnels, canals, airports, pipelines, and wastewater systems.
                Civil engineers also work closely with architects in
                constructing various buildings and public utilities. The
                department emphasizes both theoretical and practical knowledge,
                ensuring students are well-prepared to meet industry demands.{" "}
              </p>
              <p>
                To support hands-on learning, the department is equipped with
                modern laboratory facilities in areas like Structural,
                Transportation, Geotechnical, and Environmental Engineering,
                along with Surveying, Hydraulics & Machinery, AutoCAD, and GIS.
                It also houses a dedicated computer applications lab and a
                departmental library stocked with essential volumes and
                journals.
              </p>
              <p>
                The Siddhartha Civil Engineering Association, formed by
                students, enhances learning beyond the classroom by organizing
                technical quizzes, model-making contests, and skill-building
                events. The department has also signed MoUs with reputed
                organizations such as Eesavyasa Technologies, Eclat Engineering
                Consultants, Squareyard Solutions, and Sriven Engineering
                Consultants to provide industry exposure and collaborative
                opportunities for students.
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
                  <td className="border border-gray-300 p-2">B.Tech(Civil)</td>
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

export default Civil;
