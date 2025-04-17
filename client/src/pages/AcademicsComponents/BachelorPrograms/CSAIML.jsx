import React from "react";
import DepartmentBanner from "../../../ResuableComponents/DepartmentBanner";
import PlacementScrollBar from "../../../ResuableComponents/PlacementScrollBar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bgImage =
  "https://res.cloudinary.com/nsitcollege/image/upload/v1557564703/general/c-r.png";

function CSAIML() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div className="px-4 md:px-10 bg-gray-50 py-10 rounded-lg shadow-md">
      {/* Department Banner */}
      <DepartmentBanner
        backgroundImage={bgImage}
        text="CSE – Artificial Intelligence and Machine Learning"
      />

      {/* Spacer */}
      <div className="my-10 px-4 md:px-10">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://siddhartha.ac.in/img/faculty/cse/IMG_20240307_121549_2.jpg"
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
              Artificial Intelligence is a branch of Computer Science that
              focuses on creating intelligent machines that work as human beings
              and replicates intelligent behavior.{" "}
            </p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              The department of Artificial Intelligence is enriched with the
              existing strength of Machine learning, IOT (Internet of Things),
              and Big Data Analytics laboratories. The SIET has a plan to
              strengthen the infrastructure further for higher-end learning in
              the areas of Robotics, Neural Networks, Intelligent Systems, Data
              analytics, and Natural language processing.{" "}
            </p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Computer laboratories are equipped with the most advanced systems
              which includes 12 gen I7 processor systems. All the computer labs
              are fully air conditioned with adequate centralized UPS backup. We
              strive to be among the top Artificial Intelligence engineering
              colleges in INDIA and hence look to offer students with
              high-quality education and facilities.{" "}
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800 text-lg">
                Prof. P.Raghu
              </p>
              <p className="text-gray-600">M.Tech, Ph.D |Assoc. Prof, HOD</p>
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
              To develop skilled AI&ML engineers through latest tools by
              imparting quality education to serve the society.{" "}
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
                Enable students to gain knowledge on the concepts and
                technologies of Artificial Intelligence and Machine Learning.
              </li>
              <li>
                Facilitate the students with innovative tools to face the
                challenging future generation.
              </li>
              <li>Associate with industry to explore latest technologies.</li>
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
                AI & ML are two very hot buzzwords right now in the technology
                domain. AI & ML is an emerging specialization of CSE course of
                B.Tech. Artificial Intelligence (AI) is wide ranging branch of
                computer science concerned with building smart machines callable
                of performing tasks that typically require human intelligence.
                Machine Learning (ML) is the study of computer algorithms that
                allow computer programs to automatically improve through
                experience.
              </p>
              <p>
                This 4 year under graduation of computer science & Engineering
                with specialization in Artificial Intelligence & machine
                Learning is designed to make the professional technically sound
                in advanced learning systems that are based on algorithm of
                Artificial Intelligence. This program developed the skills of
                creating fastest working apps or solutions integrated with
                analytical information ensuring 100% accuracy in the output. AI
                makes is expected to grow from USD 21.46 Billion in 2018 to USD
                190.61 billion by 2025.
              </p>
              <p>
                The students shall explore the practical components of
                developing AI apps and platforms. Proficiency in mathematics
                will thrive, as this degree requires strong problem-solving and
                analytical skills. They shall be able to acquire the ability to
                design intelligent solutions for various business problems in a
                variety of domains and business applications. The students shall
                be exploring fields such as neural networks, natural language
                processing, robotics, deep learning, and computer vision,
                reasoning and problem-solving.
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
                    B.Tech(CSE-AI&ML)
                  </td>
                  <td className="border border-gray-300 p-2">4 Years</td>
                  <td className="border border-gray-300 p-2">180</td>
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

export default CSAIML;
