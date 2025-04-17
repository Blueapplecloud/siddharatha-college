import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Innovations = () => {
  const [activePanel, setActivePanel] = useState('expertise');

  const panels = [
    {
      id: 'expertise',
      title: 'Leading with Expertise',
      heading: 'Guided by Excellence, Driven by Knowledge',
      content:
        'At GNITS, our students are mentored by a distinguished faculty who combine academic rigor with real-world expertise. This ensures that our graduates are well-prepared to tackle the challenges of their careers with confidence and deep knowledge.',
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
        'At GNITS, we celebrate our diverse community through cultural events, collaborative projects, and inclusive initiatives. These connections create a vibrant campus life and develop the interpersonal skills that employers value.',
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

  return (
    <div className="flex w-full h-screen p-4 rounded-2xl bg-gray-100">
      {panels.map((panel) => (
        <div
          key={panel.id}
          className={`relative transition-all duration-500 ease-in-out overflow-hidden border shadow-lg rounded-xl mx-1 ${
            activePanel === panel.id ? 'w-2/3' : 'w-1/12 cursor-pointer'
          }`}
          onMouseEnter={() => setActivePanel(panel.id)}
        >
          <div 
            className="h-100 bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${panel.image})` }}
          >
            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full h-100 bg-gradient-to-t from-black/100 to-transparent rounded-b-xl "></div>

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
  );
};

export default Innovations;
