import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Innovations = () => {
  const [activePanel, setActivePanel] = useState('expertise');

  const panels = [
    {
      id: 'expertise',
      title: 'Leading with Expertise',
      heading: 'Guided by Excellence, Driven by Knowledge',
      content:
        'At SIDDHARTHA, our students are mentored by a distinguished faculty who combine academic rigor with real-world expertise. This ensures that our graduates are well-prepared to tackle the challenges of their careers with confidence and deep knowledge.',
      link: 'Faculty Directory',
      image: 'https://gnits.ac.in/wp-content/uploads/2024/08/3Q3A2746-2048x1365.jpg'
    },
    {
      id: 'innovation',
      title: 'Igniting Innovation',
      heading: 'Pioneering Technology-Enabled Learning',
      content:
        'Our innovation labs provide students with access to cutting-edge technologies like VR, AI, and advanced simulation tools. These hands-on experiences foster creativity and prepare our students to lead in an increasingly digital world.',
      link: 'Innovation Centers',
      image: 'https://gnits.ac.in/wp-content/uploads/2024/08/20230308125042_IMG_8618-scaled.jpg'
    },
    {
      id: 'together',
      title: 'Thriving Together',
      heading: 'Building Community Through Diversity',
      content:
        'At SIDDHARTHA, we celebrate our diverse community through cultural events, collaborative projects, and inclusive initiatives. These connections create a vibrant campus life and develop the interpersonal skills that employers value.',
      link: 'Community Events',
      image: 'https://gnits.ac.in/wp-content/uploads/2024/08/ROB00528-scaled.jpg'
    },
    {
      id: 'edge',
      title: 'Sharpening Your Edge',
      heading: 'Resources for Academic Excellence',
      content:
        'Our comprehensive academic resources, from state-of-the-art libraries to personalized tutoring services, are designed to help every student achieve their full potential. We provide the tools and support needed to excel academically.',
      link: 'Learning Resources',
      image: 'https://gnits.ac.in/wp-content/uploads/2024/08/3Q3A3495-scaled.jpg'
    },
    {
      id: 'sports',
      title: 'Excellence in Sports',
      heading: 'Developing Champions in Body and Mind',
      content:
        'Our sports programs promote physical fitness, teamwork, and leadership. With professional coaching and modern facilities, students can pursue athletic excellence while maintaining academic focus.',
      link: 'Sports Programs',
      image: 'https://gnits.ac.in/wp-content/uploads/2024/08/3Q3A3939-2048x1365.jpg'
    }
  ];
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

  const headingWords = ["Global", "Marvels", "in", "Engineering"];
  return (
    <>
      <div className="bg-[#F8F3EB] pb-10 pt-10 mb-10">
        <div className="max-w-4xl mx-13">
          <motion.div
            ref={headingRef}
            className="flex gap-2 text-[2.2rem] font-bold mb-4 text-[#003d3d]"
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <p className="text-lg text-[#4b4a49] mb-8">
            At SIDDHARTHA, we believe in shaping the next generation of leaders in technology and engineering. Our
            programs are designed to provide a robust foundation in engineering principles, coupled with
            practical skills that prepare our students to excel in the ever-evolving technological landscape.
          </p>
          <button className="bg-[#D9891D] text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-[#e0e0e0] hover:text-[#D9891D] transition-colors duration-300">
            Life at SIDDHARTHA
            <span className='w-4 h-4'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M328 96c13.3 0 24 10.7 24 24V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V177.9L73 409c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l231-231H88c-13.3 0-24-10.7-24-24s10.7-24 24-24H328z"></path></svg>
            </span>
          </button>
        </div>
      </div>
      <div className="flex w-full h-screen pl-10 pr-10 rounded-2xl bg-gray-100 mb-10">
        {panels.map((panel) => (
          <div
            key={panel.id}
            className={` relative transition-all duration-500 ease-in-out overflow-hidden border shadow-lg rounded-xl mx-1 ${
              activePanel === panel.id ? 'w-2/3' : 'w-1/12 cursor-pointer'
            }`}
            onMouseEnter={() => setActivePanel(panel.id)}
          >
            <div
              className="h-full bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${panel.image})` }}
            >
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/100 to-transparent rounded-b-xl "></div>

              {/* Vertical title for collapsed state */}
              <div className={`absolute inset-0 flex items-end justify-center ${
                activePanel === panel.id ? 'opacity-0' : 'opacity-100'
              } transition-opacity duration-300 mb-32`}>
                <h3 className="text-white transform -rotate-90 whitespace-nowrap text-xl font-semibold ">
                  | {panel.title}
                </h3>
              </div>

              {/* Content for expanded state */}
              <div className={`absolute inset-0 p-8 flex flex-col justify-end ${
                activePanel === panel.id ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-300`}>
                <h2 className="text-white text-3xl font-bold mb-4">{panel.heading}</h2>
                <p className="text-white text-opacity-80 text-lg mb-6">{panel.content}</p>
                <div className="flex items-center text-white hover:text-gray-200 cursor-pointer">
                  <span className="font-medium"><u>{panel.link}</u></span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Innovations;