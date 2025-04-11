import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// Sample alumni data
const alumniData = [
  {
    name: "Ananya Rao",
    title: "Product Manager, Google",
    image:
      "https://www.the-sun.com/wp-content/uploads/sites/6/2024/03/AK_MUSK_OP.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
    about:
      "At GNITS, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Ravi Teja",
    title: "Software Engineer, Amazon",
    image:
      "https://www.americanbazaaronline.com/wp-content/uploads/2020/06/Sundar-Pichai.png",
    about:
      "At GNITS, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Megha Reddy",
    title: "AI Researcher, Microsoft",
    image:
      "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2023/05/manufacturing-press-imec-keynote-blog-1920x1080.jpg",
    about:
      "At GNITS, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
  {
    name: "Karthik Das",
    title: "CTO, StartupX",
    image: "https://api.time.com/wp-content/uploads/2014/01/bill-gates.jpg",
    about:
      "At GNITS, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
  },
];

// Animation variants for word-by-word heading
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Alumni = () => {
  const heading = "People who made it to the top";
  const words = heading.split(" ");

  let navigate = useNavigate();

  return (
    <section className="bg-white py-12 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-teal-900 leading-tight flex flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {words.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="mr-2">
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <p className="mt-6 text-base text-gray-700 leading-relaxed font-medium max-w-3xl">
          At GNITS, real-world leadership challenges come to life. Our programs
          and courses will help you learn how to think expansively, act
          decisively, and inspire those around you to achieve great things.
        </p>

        <Link
          to="/alumni"
          className="mt-8 inline-flex bg-[#D6820B] text-white px-6 py-4 text-base font-semibold rounded-none items-center gap-2 hover:bg-[#bb6f07] transition"
        >
          View All Alumni
          <ArrowUpRight className="w-5 h-5" />
        </Link>

        <div className="mt-12">
          <div className="relative">
            {/* Custom Prev Button */}
            <div className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer text-gray-300 text-3xl">
              ❮
            </div>

            {/* Custom Next Button */}
            <div className="swiper-button-next-custom absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl">
              ❯
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {alumniData.map((alumnus, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="bg-[#DBDBDB] hover:bg-yellow-400 transition duration-300 rounded-lg shadow-md p-6 text-left w-full max-w-[22rem] h-[28rem]">
                    <img
                      src={alumnus.image}
                      alt={alumnus.name}
                      className="w-40 h-40 rounded-full mb-4 object-cover"
                    />
                    <h3 className="font-sans text-2xl font-bold text-gray-800">
                      {alumnus.name}
                    </h3>
                    <p className="font-sans text-sm font-normal text-gray-600">
                      {alumnus.title}
                    </p>
                    <p className="font-sans text-base font-medium text-gray-800 mt-2">
                      {alumnus.about}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alumni;
