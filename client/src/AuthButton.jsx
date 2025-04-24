import React from "react";
import { FaSignInAlt } from "react-icons/fa";

const AuthButton = () => {
  return (
    <div className="flex justify-around items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-3">
        <img src="/logos/logomain.png" alt="Institute Logo" className="h-16" />
      </div>
      <div className="flex space-x-4">
        {/* Add your accreditation logos here */}
        <img src="/logos/nba.png" alt="Logo 1" className="h-14" />
        <img src="logos/nirf.png" alt="Logo 2" className="h-14" />
        <img src="logos/aicte.png" alt="Logo 3" className="h-14" />
        <img src="logos/UGC.png" alt="logo 4" className="h-14" />
        <img src="logos/naac.png" alt="logo 5" className="h-14" />
      </div>
      <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        <FaSignInAlt className="mr-2" />
        Login
      </button>
    </div>
  );
};

export default AuthButton;
