import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import AboutHeading from "../../../ResuableComponents/AboutHeading";
import { FaAward } from "react-icons/fa";

const CountUp = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 2; // Shortened duration for faster animation
    const totalFrames = animationDuration * 60;
    const increment = target / totalFrames;
    let animationFrameId;
    let currentCount = 0;

    const animateCount = () => {
      currentCount += increment;
      setCount(Math.min(Math.ceil(currentCount), target));
      if (currentCount < target) {
        animationFrameId = requestAnimationFrame(animateCount);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target]);

  return <motion.span>{count}</motion.span>;
};

function FundedResearchProjects() {
  const heading1Ref = useRef(null);
  const isInViewHeading1 = useInView(heading1Ref, { once: true });

  const heading2Ref = useRef(null);
  const isInViewHeading2 = useInView(heading2Ref, { once: true });

  const heading3Ref = useRef(null);
  const isInViewHeading3 = useInView(heading3Ref, { once: true });

  const headingWords1 = ["Research", '&', "Consultancy", "Projects"];
  const headingWords2 = ["Overview", "of", "Funded", "Projects"];
  const headingWords3 = ["Some", "of", "our", "Very", "Notable", "Projects."];

  const projectStats = [
    "83 Funded Projects, Government/ Non-Government",
    "Total Grants Received INR ~160 Lakhs",
    "9 projects focusing on early disease detection and biomedical devices",
    "38 projects across all departments with a focus on cutting-edge technology, innovation, and societal impact",
    "45 projects successfully completed, showcasing the impactful research capabilities of Siddhartha."
  ];

  const projects = [
    { title: "6th International Conference on Intelligent Computing and Communication", department: "CSE", agency: "AICTE, New Delhi", grant: "1.83", duration: "6 Months (Completed)", status: "Government (Completed)" },
    { title: "Hybrid Colossal Pattern mining for discovering intrinsic pattern sequences from high dimensional data", department: "CSE", agency: "Non-Government", grant: "0", duration: "3 Years (Ongoing)", status: "Non-Government (Ongoing)" },
    { title: "Low Cost Mechanism for Early Detection of Eye Diseases (Glaucoma)", department: "CSE", agency: "DST-SEED (TIDE), New Delhi", grant: "7.4", duration: "3 Years (Ongoing)", status: "Government (Ongoing)" },
    { title: "6th International Conference on Intelligent Computing and Communication", department: "CSE", agency: "AICTE, New Delhi", grant: "1.83", duration: "6 Months (Completed)", status: "Government (Completed)" },
    { title: "Hybrid Colossal Pattern mining for discovering intrinsic pattern sequences from high dimensional data", department: "CSE", agency: "Non-Government", grant: "0", duration: "3 Years (Ongoing)", status: "Non-Government (Ongoing)" },
    { title: "Low Cost Mechanism for Early Detection of Eye Diseases (Glaucoma)", department: "CSE", agency: "DST-SEED (TIDE), New Delhi", grant: "7.4", duration: "3 Years (Ongoing)", status: "Government (Ongoing)" },
    { title: "6th International Conference on Intelligent Computing and Communication", department: "CSE", agency: "AICTE, New Delhi", grant: "1.83", duration: "6 Months (Completed)", status: "Government (Completed)" },
    { title: "Hybrid Colossal Pattern mining for discovering intrinsic pattern sequences from high dimensional data", department: "CSE", agency: "Non-Government", grant: "0", duration: "3 Years (Ongoing)", status: "Non-Government (Ongoing)" },
    { title: "Low Cost Mechanism for Early Detection of Eye Diseases (Glaucoma)", department: "CSE", agency: "DST-SEED (TIDE), New Delhi", grant: "7.4", duration: "3 Years (Ongoing)", status: "Government (Ongoing)" },
    { title: "6th International Conference on Intelligent Computing and Communication", department: "CSE", agency: "AICTE, New Delhi", grant: "1.83", duration: "6 Months (Completed)", status: "Government (Completed)" },
    { title: "Hybrid Colossal Pattern mining for discovering intrinsic pattern sequences from high dimensional data", department: "CSE", agency: "Non-Government", grant: "0", duration: "3 Years (Ongoing)", status: "Non-Government (Ongoing)" },
    { title: "Low Cost Mechanism for Early Detection of Eye Diseases (Glaucoma)", department: "CSE", agency: "DST-SEED (TIDE), New Delhi", grant: "7.4", duration: "3 Years (Ongoing)", status: "Government (Ongoing)" },
    { title: "6th International Conference on Intelligent Computing and Communication", department: "CSE", agency: "AICTE, New Delhi", grant: "1.83", duration: "6 Months (Completed)", status: "Government (Completed)" },
    { title: "Hybrid Colossal Pattern mining for discovering intrinsic pattern sequences from high dimensional data", department: "CSE", agency: "Non-Government", grant: "0", duration: "3 Years (Ongoing)", status: "Non-Government (Ongoing)" },
    { title: "Low Cost Mechanism for Early Detection of Eye Diseases (Glaucoma)", department: "CSE", agency: "DST-SEED (TIDE), New Delhi", grant: "7.4", duration: "3 Years (Ongoing)", status: "Government (Ongoing)" },
    { title: "6th International Conference on Intelligent Computing and Communication", department: "CSE", agency: "AICTE, New Delhi", grant: "1.83", duration: "6 Months (Completed)", status: "Government (Completed)" },
    { title: "Hybrid Colossal Pattern mining for discovering intrinsic pattern sequences from high dimensional data", department: "CSE", agency: "Non-Government", grant: "0", duration: "3 Years (Ongoing)", status: "Non-Government (Ongoing)" },
    { title: "Low Cost Mechanism for Early Detection of Eye Diseases (Glaucoma)", department: "CSE", agency: "DST-SEED (TIDE), New Delhi", grant: "7.4", duration: "3 Years (Ongoing)", status: "Government (Ongoing)" },
    { title: "6th International Conference on Intelligent Computing and Communication", department: "CSE", agency: "AICTE, New Delhi", grant: "1.83", duration: "6 Months (Completed)", status: "Government (Completed)" },
    { title: "Hybrid Colossal Pattern mining for discovering intrinsic pattern sequences from high dimensional data", department: "CSE", agency: "Non-Government", grant: "0", duration: "3 Years (Ongoing)", status: "Non-Government (Ongoing)" },
    { title: "Low Cost Mechanism for Early Detection of Eye Diseases (Glaucoma)", department: "CSE", agency: "DST-SEED (TIDE), New Delhi", grant: "7.4", duration: "3 Years (Ongoing)", status: "Government (Ongoing)" },
  ];

  return (
    <>
      <div>
        <AboutHeading
          title="Funded Research Projects"
          image={"images/clgimg2.jpeg"}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-start">
        <motion.div
          ref={heading1Ref}
          className="flex gap-2 text-[#003d3d] text-[2.2rem] font-bold mb-4"
        >
          {headingWords1.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInViewHeading1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        <p className="text-lg text-gray-600 mb-10 font-semibold">
          At Siddhartha, we are committed to fostering a vibrant research culture that drives innovation, supports academic excellence,
          and contributes to societal development. Our faculty and students actively engage in research and consultancy projects
          funded by prestigious government and non-governmental agencies. These projects not only elevate the academic standing of
          our institution but also provide solutions to real-world challenges.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[#0d542b] mt-10 text-center">
          <div className="bg-gray-100 py-8 px-6 shadow-md hover:bg-[#f7b534] transition duration-300 flex flex-col items-center">
            <div className='border-b-2 w-10 mb-10'></div>
            <p className="text-3xl font-bold ">₹ <CountUp target={157} /> Lakhs</p>
            <p className="mt-2 text-2xl">in Grants</p>
          </div>

          <div className="bg-gray-100 py-8 px-6 shadow-md hover:bg-[#f7b534] transition duration-300 flex flex-col items-center">
            <div className='border-b-2 w-10 mb-10'></div>
            <p className="text-3xl font-bold ">~<CountUp target={83} /></p>
            <p className="mt-2 text-2xl">Sanctioned Projects</p>
          </div>

          <div className="bg-gray-100 py-8 px-6 shadow-md hover:bg-[#f7b534] transition duration-300 flex flex-col items-center">
            <div className='border-b-2 w-10 mb-10'></div>
            <p className="text-3xl font-bold ">~ ₹ <CountUp target={50} /> Lakhs</p>
            <p className="mt-2 text-2xl ">Consultancy Grants</p>
          </div>

          <div className="bg-gray-100 py-8 px-6 shadow-md hover:bg-[#f7b534] transition duration-300 flex flex-col items-center">
            <div className='border-b-2 w-10 mb-10'></div>
            <p className="text-4xl font-bold "><CountUp target={57} /></p>
            <p className="mt-2 text-2xl ">Patents</p>
          </div>
        </div>
      </div>
      <div className="bg-white py-10 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-start justify-start ">
          <div>
            <motion.div
              ref={heading2Ref}
              className="flex gap-2 text-[#003d3d] text-[2.2rem] font-bold mb-4"
            >
              {headingWords2.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInViewHeading2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            <p className="text-black/80 text-lg font-medium leading-relaxed mt-3">
              Over the past five years, our various departments have secured numerous
              funded research projects. These projects are supported by agencies such as the
              All India Council for Technical Education (AICTE), the Department of Science and
              Technology (DST), and other esteemed organizations. The projects span across
              multiple disciplines, including Computer Science, Electronics, Electrical
              Engineering, Humanities, and Basic Sciences, reflecting the diverse research
              capabilities of Siddhartha.
            </p>
          </div>
          <div className="space-y-0">
            {projectStats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex items-start gap-4 mt-3 mb-3">
                  <FaAward className="text-orange-500 text-3xl mt-1" />
                  <div className="pb-2 text-black/80 text-lg font-medium">
                    {stat}
                  </div>
                </div>
                <div className="border-b border-orange-300 w-80"></div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <section className="bg-white py-10 px-6 md:px-20">
        <motion.div
          ref={heading3Ref}
          className="flex gap-2 text-[#003d3d] text-[2.2rem] font-bold mb-4"
        >
          {headingWords3.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInViewHeading3 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-left text-black/90 ">
            <thead className=" text-sm font-semibold text-black/70">
              <tr>
                <th className="px-4 py-3 border w-55">Project Title</th>
                <th className="px-4 py-3 border">Department</th>
                <th className="px-4 py-3 border">Funding Agency</th>
                <th className="px-3 py-3 border w-35">Grant Amount (INR Lakhs)</th>
                <th className="px-3 py-3 border">Duration</th>
                <th className="px-4 py-3 border w-40">Type & Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {projects.map((project, index) => (
                <tr key={index} className=" hover:bg-[#f7b534] transition duration-300  text-[1rem] text-black/90 ">
                  <td className="px-4 py-3 border">{project.title}</td>
                  <td className="px-4 py-3 border">{project.department}</td>
                  <td className="px-4 py-3 border">{project.agency}</td>
                  <td className="px-4 py-3 border">{project.grant}</td>
                  <td className="px-4 py-3 border">{project.duration}</td>
                  <td className="px-4 py-3 border">{project.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default FundedResearchProjects;