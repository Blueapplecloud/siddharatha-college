import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: "/images/profile-img.jpg",
    name: "Shreya Arukala",
    title: "Software Engineer, ServiceNow",
    text: "I am thrilled to share that I have accepted the Software Development Intern role at ServiceNow! I am eagerly looking forward to working with and...",
  },
  {
    image: "/images/profile-img.jpg",
    name: "Joy Princy",
    title: "Software Engineer, Microsoft",
    text: "I've been offered a Pre-Placement Offer (PPO) from Microsoft following an exceptional internship experience! And an...",
  },
  {
    image: "/images/profile-img.jpg",
    name: "Phanisri Challa",
    title: "Manager, Deloitte, Hyderabad",
    text: "As a Manager at Deloitte and a Siddhartha alumna, I created expertise in Data Integration Engineering, including Dat...",
  },
  {
    image: "/images/profile-img.jpg",
    name: "Phanisri Challa",
    title: "Manager, Deloitte, Hyderabad",
    text: "As a Manager at Deloitte and a Siddhartha alumna, I created expertise in Data Integration Engineering, including Dat...",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const TestimonialCarousel = () => {
  return (
    <div className="w-full py-5 flex justify-center items-center bg-white">
      <div className="w-full md:w-[90%] lg:w-[95%]">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-2"
            >
              <div className="bg-gray-100 hover:bg-orange-300 rounded-xl p-6 text-center flex flex-col items-center max-w-md mx-auto transition-colors duration-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-28 h-28 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {testimonial.title}
                </p>
                <p className="text-gray-700 text-sm">{testimonial.text}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
