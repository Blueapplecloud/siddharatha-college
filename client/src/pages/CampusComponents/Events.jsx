import React, { useState, useRef } from "react";
import AboutHeader from "../../ResuableComponents/AboutHeading";
import HTMLFlipBook from "react-pageflip";
const Events = () => {
  const pages = [
    "/pdf-pages/events-page-001.jpg",
    "/pdf-pages/events-page-002.jpg",
    "/pdf-pages/events-page-003.jpg",
    "/pdf-pages/events-page-004.jpg",
    "/pdf-pages/events-page-005.jpg",
    "/pdf-pages/events-page-006.jpg",
    "/pdf-pages/events-page-007.jpg",
    "/pdf-pages/events-page-008.jpg",
    "/pdf-pages/events-page-009.jpg",
    "/pdf-pages/events-page-010.jpg",
    "/pdf-pages/events-page-011.jpg",
    "/pdf-pages/events-page-012.jpg",
    "/pdf-pages/events-page-013.jpg",
    "/pdf-pages/events-page-014.jpg",
    "/pdf-pages/events-page-015.jpg",
    "/pdf-pages/events-page-016.jpg",
    "/pdf-pages/events-page-017.jpg",
    "/pdf-pages/events-page-018.jpg",
    "/pdf-pages/events-page-019.jpg",
    "/pdf-pages/events-page-020.jpg",
    "/pdf-pages/events-page-021.jpg",
    "/pdf-pages/events-page-022.jpg",
    "/pdf-pages/events-page-023.jpg",
    "/pdf-pages/events-page-024.jpg",
    "/pdf-pages/events-page-025.jpg",
    "/pdf-pages/events-page-026.jpg",
    "/pdf-pages/events-page-027.jpg",
    "/pdf-pages/events-page-028.jpg",
    "/pdf-pages/events-page-029.jpg",
    "/pdf-pages/events-page-030.jpg",
    "/pdf-pages/events-page-031.jpg",
    "/pdf-pages/events-page-032.jpg",
    "/pdf-pages/events-page-033.jpg",
    "/pdf-pages/events-page-034.jpg",
    "/pdf-pages/events-page-035.jpg",
    "/pdf-pages/events-page-036.jpg",
    "/pdf-pages/events-page-037.jpg",
    "/pdf-pages/events-page-038.jpg",
    "/pdf-pages/events-page-039.jpg",
    "/pdf-pages/events-page-040.jpg",
    "/pdf-pages/events-page-041.jpg",
    "/pdf-pages/events-page-042.jpg",
    "/pdf-pages/events-page-043.jpg",
    "/pdf-pages/events-page-044.jpg",
    "/pdf-pages/events-page-045.jpg",
    "/pdf-pages/events-page-046.jpg",
    "/pdf-pages/events-page-047.jpg",
    "/pdf-pages/events-page-048.jpg",
    "/pdf-pages/events-page-049.jpg",
    "/pdf-pages/events-page-050.jpg",
    "/pdf-pages/events-page-051.jpg",
    "/pdf-pages/events-page-052.jpg",
    "/pdf-pages/events-page-053.jpg",
    "/pdf-pages/events-page-054.jpg",
    "/pdf-pages/events-page-055.jpg",
    "/pdf-pages/events-page-056.jpg",
    "/pdf-pages/events-page-057.jpg",
    "/pdf-pages/events-page-058.jpg",
    "/pdf-pages/events-page-059.jpg",
    "/pdf-pages/events-page-060.jpg",
    "/pdf-pages/events-page-061.jpg",
    "/pdf-pages/events-page-062.jpg",
    "/pdf-pages/events-page-063.jpg",
  ];
  const [currentPage, setCurrentPage] = useState(0);

  const flipBookRef = useRef();

  const onPageChange = (e) => {
    setCurrentPage(e.data);
  };

  const goToPreviousPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const goToNextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  return (
    <div>
      <AboutHeader title="Events" image={"/images/clgimg.jpeg"} />
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-10 overflow-hidden">
        <HTMLFlipBook
          width={300}
          height={400}
          size="stretch"
          minWidth={250}
          maxWidth={350}
          minHeight={350}
          maxHeight={1200}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="shadow-2xl"
          ref={flipBookRef}
          onFlip={onPageChange}
        >
          {pages.map((src, idx) => (
            <div
              key={idx}
              className="page bg-white flex justify-center items-center"
            >
              <img
                src={src}
                alt={`Page ${idx + 1}`}
                className="h-full object-contain"
              />
            </div>
          ))}
        </HTMLFlipBook>

        {/* Navigation Controls */}
        <div className="flex items-center mt-4 space-x-4">
          {/* Left Arrow */}
          <button
            onClick={goToPreviousPage}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600"
          >
            ← Previous
          </button>

          {/* Page Number Display */}
          <span className="text-lg font-semibold">
            Page {currentPage + 1} of {pages.length}
          </span>

          {/* Right Arrow */}
          <button
            onClick={goToNextPage}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
