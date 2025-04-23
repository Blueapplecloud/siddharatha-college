import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const FacultySection = ({ hod, professors, para }) => {
  const [visibleProfessors, setVisibleProfessors] = useState(3);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProfessors((prev) => prev + 3);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="w-full py-10 px-4 bg-gray-100">
      {/* HOD Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-6">
          {/* Branch Name + Description */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-sm"
          >
            <h2 className="text-2xl font-bold text-teal-900 mb-4">
              {hod.branch}
            </h2>
            <p className="text-gray-600">{para}</p>
          </motion.div>

          {/* HOD Image */}
          <img
            src={hod.photo}
            alt={hod.name}
            className="w-[360px] h-[280px] object-cover"
          />

          {/* HOD Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-300 p-6 w-[360px] h-[280px] flex flex-col justify-between"
          >
            <h3 className="text-lg font-bold text-teal-900">{hod.name}</h3>
            <p className="text-gray-700 text-sm">{hod.position}</p>
            <p className="text-gray-700 text-sm">{hod.qualifications}</p>
            <p className="text-gray-700 mt-2 text-xs line-clamp-2">
              {hod.description}
            </p>
            <a
              href={hod.academicIdentity}
              className="text-teal-700 underline mt-2 inline-flex items-center text-sm"
            >
              Academic Identity <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Professors Section */}
      <div className="w-full max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-teal-900 mb-6">
          Faculty Members
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {professors.slice(0, visibleProfessors).map((professor) => (
            <div key={professor.id} className="bg-gray-300 p-6">
              <h4 className="text-lg font-bold text-teal-900">
                {professor.name}
              </h4>
              <p className="text-gray-700">{professor.position}</p>
              <p className="text-gray-700">Email: {professor.email}</p>
              <p className="text-gray-700">Phone: {professor.phone}</p>
              <a
                href={professor.academicIdentity}
                className="text-teal-700 underline mt-4 inline-flex items-center"
              >
                Academic Identity <FaArrowRight className="ml-2" />
              </a>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProfessors < professors.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-orange-500 text-white hover:bg-orange-600 transition duration-300 flex items-center justify-center min-w-[140px] h-12 relative rounded-md"
              disabled={loading}
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Load More"
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacultySection;
