import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutHeading from "../../../ResuableComponents/AboutHeading";

function AcademicCalendar() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
    return (
        <>
            <AboutHeading title="Academic Calendar" image="images/clgimg2.jpeg" />
            <section className="px-6 py-10 md:px-20 md:py-16 bg-white">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

                    {/* Text Section */}
                    <div className="md:w-1/2">
                    <motion.h1
                                  ref={ref}
                                  initial={{ opacity: 0, y: 30 }}
                                  animate={inView ? { opacity: 1, y: 0 } : {}}
                                  transition={{ duration: 0.8, ease: "easeOut" }}
                                  className="text-3xl !font-bold !text-[#004643] mb-4"
                                >
                                  Class Schedule
                                </motion.h1>
                        <p className="text-gray-700 text-base leading-relaxed">
                            The academic calendar for the 2024-25 academic year at G. Narayanamma Institute of Technology and Science (GNITS)
                            provides a structured timeline for B.Tech and M.Tech programs. Below is a detailed schedule outlining key dates
                            and events for students, faculty, and staff.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img
                            src="https://gnits.ac.in/wp-content/uploads/2024/11/mou2.jpg"
                            alt="Class Schedule Meeting"
                            className="rounded-xl shadow-lg w-full object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* Table Section */}
            <section className="px-6 py-6 md:px-20 bg-white">
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-collapse border-black text-sm md:text-base font-bold">
                        <thead>
                            <tr className="bg-[#004643] text-white text-left">
                                <th className="py-3 px-4 ">Program</th>
                                <th className="py-3 px-4  text-center align-middle">Semester</th>
                                <th className="py-3 px-4 ">Link</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            {/* B.Tech */}
                            <tr>
                                <td className="py-3 px-3 border border-black text-left align-middle" rowSpan="3">B.Tech</td>
                                <td className="py-3 px-4 border border-black text-center align-middle">I Year</td>
                                <td className="py-3 px-3 border border-black text-[#004643]">
                                    <a href="#" className="!text-[#004643] font-bold !no-underline">View PDF</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 border border-black text-center align-middle">II & III Year</td>
                                <td className="py-3 px-3 border border-black">
                                    <a href="#" className="!text-[#004643]  font-bold !no-underline">View PDF</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 border border-black text-center align-middle">IV Year</td>
                                <td className="py-3 px-3 border border-black">
                                    <a href="#" className="!text-[#004643] font-bold !no-underline">View PDF</a>
                                </td>
                            </tr>

                            {/* M.Tech */}
                            <tr>
                                <td className="py-3 px-3 border border-black text-left align-middle" rowSpan="2">M.Tech</td>
                                <td className="py-3 px-4 border border-black text-center align-middle">I Year</td>
                                <td className="py-3 px-3 border border-black">
                                    <a href="#" className="!text-[#004643] font-bold !no-underline">View PDF</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 border border-black text-center align-middle">II Year</td>
                                <td className="py-3 px-3 border border-black">
                                    <a href="#" className="!text-[#004643] font-bold !no-underline">View PDF</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

export default AcademicCalendar;
