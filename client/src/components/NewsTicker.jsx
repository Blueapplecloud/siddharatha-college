import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaRss } from "react-icons/fa";

const messages = [
  "Important: Last date to submit exam form is April 20th!",
  "Placement drive on April 10th by Infosys",
  "IEEE Event on April 12th in CSE block",
  "Guest lecture on AI by Dr. Sharma - April 15",
  "Semester break starts May 1st"
];

export default function NewsTicker() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => resetTimeout();
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + messages.length) % messages.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % messages.length);
  };

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-20 flex items-center justify-between px-4 relative overflow-hidden text-green-900">
    
      <div className="bg-amber-600 text-white px-6 py-4 font-semibold flex items-center gap-2 text-sm">
        View All Latest News <FaRss className="text-lg" />
      </div>

   
      <FaChevronLeft
        onClick={prevSlide}
        className="cursor-pointer text-green-900 hover:scale-110 transition mx-4 hover:bg-white"
      />

   
      <div className="flex-1 overflow-hidden">
        <div
          className="whitespace-nowrap transition-transform duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className="min-w-full flex items-center justify-center font-semibold text-base"
            >
              {msg}
            </div>
          ))}
        </div>
      </div>

     
      <FaChevronRight
        onClick={nextSlide}
        className="cursor-pointer text-green-900 hover:scale-110 transition mx-4 hover:bg-white"
      />
    </div>
  );
}
