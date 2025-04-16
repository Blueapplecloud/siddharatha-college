// to install react-icons  use the command
//npm install react-icons
//to install react bootstrap use the command
//npm install react-bootstrap bootstrap
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { ScrollFeatureStrip } from "./pages/AboutPageComponents/About";
import Organogram from "./pages/AboutPageComponents/Organogram";
import "bootstrap/dist/css/bootstrap.min.css";
import LegacyAndGovernance from "./pages/LegacyAndGovernance/LegacyAndGovernance";
import AlumniHeader from "./pages/CampusComponents/AboutAlumni";
import CSE from "./pages/AcademicsComponents/BachelorPrograms/CSE";
import CSAIML from "./pages/AcademicsComponents/BachelorPrograms/CSAIML";
import ECE from "./pages/AcademicsComponents/BachelorPrograms/ECE";
import Mech from "./pages/AcademicsComponents/BachelorPrograms/Mech";
import Strategicplan from "./pages/StrategicPlan/strategicplan";
import LifeAtSiddhartha from "./pages/CampusComponents/LifeAtSiddhartha";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/leadership-and-governance"
              element={<LegacyAndGovernance />}
            />
            <Route path="/organogram" element={<Organogram />} />
            <Route path="/about" element={<ScrollFeatureStrip />} />
            {/* Route for View All Alumni Section */}
            <Route path="/alumni" element={<AlumniHeader />} />
            <Route path="/strategic" element={<Strategicplan />} />
            {/* Routes for Departments Section */}
            <Route path="/ComputerScience&Engg" element={<CSE />} />
            <Route path="/ComputerScience&Engg(AI & ML)" element={<CSAIML />} />
            <Route path="/ECE" element={<ECE />} />
            <Route path="/MechanicalEngg" element={<Mech />} />
            {/* Routes for Campus Life at siddhartha */}
            <Route path="/CampusLife" element={<LifeAtSiddhartha/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
