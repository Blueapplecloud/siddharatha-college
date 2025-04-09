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
    <div className="bg-black text-white p-10 flex gap-10 justify-between items-center">
      <div className="w-[355px] flex flex-wrap gap-x-4 gap-y-4 text-4xl font-bold">
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
        className="flex-1 rounded-lg object-cover max-h-[400px]"
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
