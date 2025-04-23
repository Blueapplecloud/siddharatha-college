import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import AboutHeader from '../../../ResuableComponents/AboutHeading';

const syllabusData = {
  btech: [
    { name: 'Civil Engineering', file: 'CIVIL_SR23_B.Tech_CE_Course Structure & Proposed Syllabus.pdf' },
    { name: 'Computer Science Engineering', file: 'SR 23 CSE_(AI&ML)_ SYLLABUS.pdf' },
    { name: 'Computer Science Engineering (Artificial Intelligence & Machine Learning)', file: 'SR 23 CSE_(AI&ML)_ SYLLABUS.pdf' },
    { name: 'Computer Science Engineering (Data Science)', file: 'SR 23 CSE_(DATA SCIENCE) _SYLLABUS.pdf' },
    { name: 'Electronics & Communication Engineering', file: 'SR23_ECE_B.TECH_SYLLABUS.pdf' },
    { name: 'Electrical & Electronics Engineering', file: 'SR23_B.Tech_EEE_SYLLABUS.pdf' },
    { name: 'Mechanical Engineering', file: 'CIVIL_SR23_B.Tech_CE_Course Structure & Proposed Syllabus.pdf' },
  ],
  mtech: [
    { name: 'Computer Science Engineering', file: 'SR 23 CSE_(AI&ML)_ SYLLABUS.pdf' },
    { name: 'Electronics & Communication Engineering', file: 'SR23_ECE_B.TECH_SYLLABUS.pdf' },
  ],
};

const Syllabus = () => {
  const { ref: mainRef, inView: mainInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: btechRef, inView: btechInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: mtechRef, inView: mtechInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const renderSyllabus = (data) =>
    data.map((item, index) => (
      <div key={index}>
        <a
          href={`/Pdfs/${item.file}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-md transition-all duration-300 text-black hover:text-white hover:bg-amber-500 no-underline"
        >
          <HiOutlineArrowNarrowRight className="text-amber-500 text-lg transition-colors duration-300 !text-[30px] group-hover:text-white" />
          <span className="font-semibold !text-[20px] no-underline border-b-2 border-transparent">{item.name}</span>
        </a>
      </div>
    ));
  

  return (
    <>
      <AboutHeader
        title="Syllabus (UG & PG)"
        image="https://gnits.ac.in/wp-content/uploads/2024/09/DSC_0329-2_11zon.jpg"
      />

      <div className="bg-white text-black py-10 flex justify-center">
        <div className="w-full max-w-7xl px-4">
          <motion.h1
            ref={mainRef}
            initial={{ opacity: 0, y: 50 }}
            animate={mainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[38px] !font-bold font-[Urbanist] mb-4 text-left"
          >
            Innovating for Excellence
          </motion.h1>

          <p className="text-gray-700 mb-10 text-left">
            The curriculum at SIDDHARTHA is meticulously crafted to blend academic excellence with practical, real-world applications. It is designed to equip students with the skills and knowledge required to excel in their chosen fields, whether it's engineering, technology, or management. Our comprehensive curriculum is continuously updated to reflect the latest industry trends and technological advancements, ensuring that our students are always ahead of the curve. With a strong emphasis on innovation, research, and interdisciplinary learning, the SIDDHARTHA curriculum fosters critical thinking, problem-solving, and leadership qualities, preparing students to thrive in a competitive global environment.
          </p>

          <div className="grid md:grid-cols-2 gap-16 mx-auto">
            <div>
              <motion.h2
                ref={btechRef}
                initial={{ opacity: 0, y: 30 }}
                animate={btechInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-[32px] !font-bold font-[Urbanist] mb-2"
              >
                B.Tech syllabus
              </motion.h2>
              <hr className="border-amber-500 w-[70%] mb-6" />
              <div className="space-y-6">{renderSyllabus(syllabusData.btech)}</div>
            </div>

            <div>
              <motion.h2
                ref={mtechRef}
                initial={{ opacity: 0, y: 30 }}
                animate={mtechInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-[32px] !font-bold font-[Urbanist] mb-2"
              >
                M.Tech syllabus
              </motion.h2>
              <hr className="border-amber-500 w-[70%] mb-6" />
              <div className="space-y-6">{renderSyllabus(syllabusData.mtech)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Syllabus;
