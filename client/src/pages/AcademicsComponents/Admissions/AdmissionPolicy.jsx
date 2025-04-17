import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download } from "lucide-react"; // download icon
import AboutHeader from "../../../ResuableComponents/AboutHeading";

const AdmissionPolicy = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <AboutHeader
        title="Admission Policy"
        image="https://gnits.ac.in/wp-content/uploads/2024/12/SDS_0001.jpg"
      />

      <div className="flex flex-col lg:flex-row gap-8 px-6 lg:px-16 py-12 bg-gray-100">
        {/* Left: Content */}
        <motion.div
          className="lg:w-2/3 bg-sky-100 p-6 rounded-lg shadow-md"
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl font-bold text-teal-900 mb-6">Overview</h2>
          <p className="text-gray-700 mb-10">
            Welcome to{" "}
            <strong>SIDDHARTHA Institute of Technology & Science</strong>{" "}
            (Autonomous - For Women), Shaikpet, Hyderabad - 500104. At{" "}
            <strong>SIDDHARTHA Institute of Technology & Science</strong>, we
            offer a structured admission process designed to ensure that
            students with the potential to succeed are given the opportunity to
            excel. Below you will find the key details of our admission process.
            For more detailed information, you can download our comprehensive
            admission policy document.
          </p>
          <div className="border-b border-amber-300 mb-10"></div>

          <h3 className="text-3xl font-bold text-teal-900 mb-4">
            Admission Categories
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mb-10">
            <li className="mb-2">
              <strong>Category ‘A’ Seats (70% of Intake):</strong> Allocated by
              the Telangana State Council of Higher Education (TSCHE) through
              the EAMCET and ECET exams.
            </li>
            <li>
              <strong>Category ‘B’ Seats (30% of Intake):</strong> Managed by
              the college, based on merit, and as per TSCHE guidelines.
            </li>
          </ul>
          <div className="border-b border-amber-300 mb-10"></div>

          <h3 className="text-3xl font-bold text-teal-900 mb-4">
            Eligibility Criteria
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mb-10">
            <li className="mb-2">
              <strong>B.Tech – 1st Year:</strong> Intermediate Exam (10+2) with
              Mathematics, Physics, and Chemistry. Must qualify in EAMCET.
            </li>
            <li className="mb-2">
              <strong>B.Tech – 2nd Year (Lateral Entry):</strong> Diploma in
              Engineering/Technology. Must qualify in ECET.
            </li>
            <li>
              <strong>M.Tech:</strong> Bachelor's degree in a relevant field
              with minimum 50% marks (45% for reserved). Must qualify in PGECET
              or GATE.
            </li>
          </ul>
          <div className="border-b border-amber-300 mb-10"></div>

          <h3 className="text-3xl font-bold text-teal-900 mb-4">
            Admission Process
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mb-10">
            <li className="mb-2">
              <strong>Notification and Application:</strong> Issued through
              newspapers and website. Forms available online or at the college.
            </li>
            <li className="mb-2">
              <strong>Selection and Merit List:</strong> Applications are
              scrutinized, and a merit list is prepared. Final list submitted to
              TSCHE.
            </li>
            <li>
              <strong>Transparency:</strong> Online/e-option mechanism ensures
              fair allocation of seats.
            </li>
          </ul>
          <div className="border-b border-amber-300 mb-10"></div>

          <h3 className="text-3xl font-bold text-teal-900 mb-4">
            Reservation Policies
          </h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-2">
              <strong>Local Candidates:</strong> 85% seats reserved for local
              students.
            </li>
            <li className="mb-2">
              <strong>SC/ST/BC:</strong> As per government norms – SC: 15%, ST:
              6%, BC: 29%.
            </li>
            <li className="mb-2">
              <strong>Special Categories:</strong> Reserved for NCC, sports,
              extracurriculars, ex-servicemen's children.
            </li>
            <li className="mb-2">
              <strong>Physically Challenged & Women:</strong> Additional
              reservations applicable.
            </li>
            <li>
              <strong>Economically Weaker Sections (EWS):</strong> 10% seats as
              per government norms.
            </li>
          </ul>
        </motion.div>

        {/* Right: Download Box */}
        <motion.div
          className="lg:w-1/3 sticky top-28 self-start"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="bg-amber-300 p-6 rounded-lg shadow-lg border border-teal-400">
            <h4 className="text-xl font-semibold mb-4 text-teal-800  text-center gap-2">
              Download Policy
            </h4>
            <a
              href="/admission-policy.pdf"
              download
              className="flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-lg transition duration-300"
            >
              <Download className="w-4 h-4" />
              Download Admission Policy
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AdmissionPolicy;
