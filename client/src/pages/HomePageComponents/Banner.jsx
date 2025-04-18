import { motion } from "framer-motion";
import videoFile from "../../Media/sits-video.mp4";

const words = [
  "Creating",
  "Future",
  "Leaders",
  "Through",
  "Innovation",
  "and",
  "Excellence",
];

export function Banner() {
  return (
    <div className="bg-black text-white p-4 flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-center">
      <div className="w-full md:w-[355px] flex flex-wrap gap-x-4 gap-y-4 text-2xl sm:text-3xl md:text-4xl font-bold justify-center md:justify-start">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </div>

      <video
        className="w-full md:flex-1 rounded-lg object-cover max-h-[250px] sm:max-h-[300px] md:max-h-[400px]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
