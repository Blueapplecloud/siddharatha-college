import React from "react";
import { CloudDownload } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TransportRoutes = () => {
  return (
    <div className="w-full px-6 md:px-16 py-12 bg-white">
      {/* Title, paragraph, buttons */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        <div className="lg:w-2/3">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-3 pt-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            Transport Routes
          </motion.h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Siddhartha Institute of Technology is committed to providing a safe
            and reliable transport system for students and staff. With a
            well-organized fleet, we ensure seamless connectivity across various
            routes, making daily commutes convenient and secure.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:mt-0 items-center">
          <button className="bg-[#d68d06] text-white font-semibold text-lg px-8 py-4 flex items-center gap-3 shadow-lg rounded-md w-80 h-5">
            <CloudDownload className="w-6 h-6" />
            Detailed Route Information
          </button>
          <button className="bg-[#d68d06] text-white font-semibold text-lg px-8 py-4 flex items-center gap-3 shadow-lg rounded-md w-100 h-5">
            <CloudDownload className="w-6 h-6" />
            Route-wise Drivers Mobile Numbers
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="mt-12">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          loop={true}
          spaceBetween={20}
          slidesPerView={2} 
          className="w-full h-full rounded-xl"
        >
          <SwiperSlide>
            <img
              src="https://pace.edu.in/img/facilities/transport/1.jpg"
              alt="GNITS Bus 1"
              className="w-full h-auto rounded-xl object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://silicon.ac.in/wp-content/uploads/2021/06/4-20.jpg"
              alt="GNITS Bus 2"
              className="w-full h-auto rounded-xl object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TransportRoutes;
