import React, { useRef } from 'react';
import AboutHeading from "../../ResuableComponents/AboutHeading";
import { motion, useInView } from 'framer-motion';

function Governance() {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { once: true });
    const headingWords1 = "Welfare Measures".split(" ");

    const governingCouncilData = [
        {
            slNo: 1,
            name: "Sri G. Raghava Reddy, Chairman, G.Narayanamma Institute of Technology & Science (for Women), Shaikpet, Hyderabad – 500 104.",
            designation: "Chairman",
            category: "Member of the Management Trust",
        },
        {
            slNo: 2,
            name: "Sri. P. Subba Reddy, Trustee G. Pulla Reddy Charities Trust, Begumpet, Hyderabad",
            designation: "Member",
            category: "Member of the Management Trust",
        },
        {
            slNo: 3,
            name: "Ms. G. Srividya Reddy, Vice Chairperson, G. Narayanamma Institute of Technology & Science (for Women), Shaikpet, Hyderabad – 500 104.",
            designation: "Member",
            category: "Member of the Management Trust",
        },
        {
            slNo: 4,
            name: "Prof. G. Gopal Reddy, Pro-VC, Mahatma Gandhi Central University, Bihar #3-5-199/B/7, Harivihar Colony, Narayanguda, Hyderabad – 500 029",
            designation: "Member",
            category: "Academician",
        },
    ];
    const academicCouncilData = [
        { type: 'header', text: 'Chairman' },
        { id: 1, name: 'Dr. K.Ramesh Reddy, Principal, GNITS' },
        { type: 'header', text: 'Heads of All Departments' },
        { id: 2, name: 'Dr.K.Ramalinga Reddy, Dean, Academics & Chairman-BOS, ETM Dept.of Electronics' },
        { id: 3, name: 'Dr.M.Seetha, Dean, R & D, HOD & Chairman-BOS,CSE Dept.of Computer Science' },
        { type: 'header', text: 'Sr.Faculty of the Institution' },
        { id: 4, name: 'Dr.G.Annapurna Coordinator – PG studies & Professor in EEE' },
        // Add more members here following the same structure
    ];

    return (
        <>
            <AboutHeading title="Governance" image="images/clgimg2.jpeg" />

            <section className="px-10 md:px-16 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="md:w-1/2">
                        <h2>
                            <motion.div
                                ref={headingRef}
                                className="flex flex-wrap gap-2 text-[#003d3d] text-4xl font-bold mb-4"
                            >
                                {headingWords1.map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: index * 0.2, duration: 0.3 }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </h2>
                        <p className="text-1xl font-semibold text-gray-700">
                            Our Governing council includes people from a variety of organizations, such as government, business, and academic institutions.
                        </p>
                    </div>

                    <div
                        className="p-10 md:w-[50%] flex flex-col items-center gap-4 rounded"
                        style={{
                            backgroundColor: 'transparent',
                            backgroundImage: 'linear-gradient(277deg, #d4880c 0%, #fdc830 100%)',
                        }}
                    >
                        <motion.button
                            className="bg-[#004643] text-white font-semibold px-6 py-2 w-80 text-center rounded"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8, duration: 0.4 }}
                        >
                            Governing Council Members
                        </motion.button>
                        <motion.button
                            className="bg-[#004643] text-white font-semibold px-6 py-2 w-72 text-center rounded"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.0, duration: 0.4 }}
                        >
                            College Academic Council
                        </motion.button>
                    </div>
                </div>
            </section>

            {/*  Table Section1 */}
            <section className="px-10 md:px-16 pb-16">
                <motion.h2
                    className="!text-[#003d3d] text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Governing Council Members
                </motion.h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-3xl font-bold border  border-gray-300 text-left text-sm">
                        <thead className="bg-gray-100 font-bold hover:bg-[#f7b534] transition duration-300">
                            <tr>
                                <th className="border px-4 py-2 ">Sl.No.</th>
                                <th className="border px-4 py-2 ">Name & Address of the Member</th>
                                <th className="border px-4 py-2 ">Designation in GB</th>
                                <th className="border px-4 py-2 ">Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {governingCouncilData.map((member, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2 hover:bg-[#f7b534] transition duration-300">{member.slNo}</td>
                                    <td className="border px-4 py-3 w-400 hover:bg-[#f7b534] transition duration-300">{member.name}</td>
                                    <td className="border px-4 py-2 w-200 hover:bg-[#f7b534] transition duration-300">{member.designation}</td>
                                    <td className="border px-4 py-2 w-150 hover:bg-[#f7b534] transition duration-300">{member.category}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            {/* College Academic Council Table */}
            <section className="px-10 md:px-16 pb-16">
                <motion.h2
                    className="!text-[#003d3d] text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    College Academic Council
                </motion.h2>


                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 text-left text-sm font-bold">
                        <thead className="bg-gray-100 font-semibold text-gray-700">
                            <tr>
                                <th className="border px-4 py-2 hover:bg-[#f7b534] transition duration-300 w-60">Sl.No.</th>
                                <th className="border px-4 py-2 hover:bg-[#f7b534] transition duration-300">Name & Address of the Member</th>
                            </tr>
                        </thead>
                        <tbody>
                            {academicCouncilData.map((member) => (
                                <React.Fragment key={member.id || member.text}>
                                    {member.type === 'header' ? (
                                        <td className="border px-4 py-2 hover:bg-[#f7b534] transition duration-300">{member.text}</td>
                                    ) : (
                                        <tr>
                                            <td className="border px-4 py-2 hover:bg-[#f7b534] transition duration-300">{member.id}</td>
                                            <td className="border px-4 py-2 whitespace-pre-line hover:bg-[#f7b534] transition duration-300">{member.name}</td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

        </>
    );
}

export default Governance;
